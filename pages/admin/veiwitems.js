
import FullLayout from "../../src/layouts/FullLayout";
import theme from "../../src/theme/theme";
import userEmail from "../../modal/SubscribeUser";
import mongoose from "mongoose";
import { ThemeProvider } from "@mui/material/styles";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from 'react-toastify';
import { parseCookies } from "nookies";
import 'react-toastify/dist/ReactToastify.css';
import {
    Grid, Pagination,
    Typography,
    Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Button,

} from "@mui/material";
import FeatherIcon from "feather-icons-react";
import { useState } from "react";
import { useRouter } from "next/router";

import BaseCard from "../../src/components/baseCard/BaseCard";


export default function Index(props) {

    const router = useRouter()
    const [items, setitems] = useState(props.itms)
    console.log(items);
    const [Copied, setCopied] = useState(false)

    if (items.length === 0) {
        return (
            <Grid container spacing={0}>
                <Grid item xs={12} lg={12}>
                    <div className="card-body" >
                        <h2>No Any Subscribr Email Id  </h2>

                        <Button onClick={() => router.push('/admin')} type="submit" variant="contained" mt={2}>
                            Go Back
                        </Button>

                    </div>
                </Grid>
            </Grid>
        )
    }
    return (
        <>
            <ThemeProvider theme={theme}>
                <FullLayout>
                    <Grid container  spacing={0}>
                        <Grid item xs={12} lg={12}>

                            <BaseCard title="Subscriber Email">
                                <Table
                                    aria-label="simple table"
                                    sx={{
                                        mt: 3,
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    <TableHead>
                                        <TableRow >
                                            <TableCell>
                                                <Typography color="textSecondary" variant="h6">
                                                    S/No
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography color="textSecondary" variant="h6">
                                                    Email Id
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography color="textSecondary" variant="h6">
                                                    Copy
                                                </Typography>
                                            </TableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {items.map((product, index) => (

                                            <TableRow key={product._id}>
                                                <TableCell>
                                                    <Typography
                                                        sx={{
                                                            fontSize: "15px",
                                                            fontWeight: "500",
                                                        }}
                                                    >
                                                        {index + 1}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell>
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Box>
                                                            <Typography
                                                                variant="h6"
                                                                sx={{
                                                                    fontWeight: "600",
                                                                }}
                                                            >
                                                                {product.Subscribe}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </TableCell>
                                                <TableCell>
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        <Box>
                                                            <CopyToClipboard
                                                                text={product.Subscribe}
                                                                onCopy={() => toast.success("Copied")}>
                                                                    <FeatherIcon style={{cursor: "pointer"}}  icon="copy" width="20" height="20" />

                                                            </CopyToClipboard>
                                                        </Box>
                                                    </Box>
                                                </TableCell>

                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </BaseCard>
                            
                        </Grid>
                        {/* ------------------------- row 1 ------------------------- */}
                    </Grid>
                    <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false} />
                </FullLayout>
            </ThemeProvider>
        </>

    );
}
export async function getServerSideProps(ctx) {
    const {token}= parseCookies(ctx)
    if (!token ) {
        const {res} = ctx
        res.writeHead(302,{Location:"/athouticate"})
        res.end()
    }
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URL)
    }
    let itms = await userEmail.find()
    return {
        props: { itms: JSON.parse(JSON.stringify(itms)) },// will be passed to the page component as props
    }
}