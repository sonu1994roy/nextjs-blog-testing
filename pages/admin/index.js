
import FullLayout from "../../src/layouts/FullLayout";
import theme from "../../src/theme/theme";
import postitem from "../../modal/postitem";
import mongoose from "mongoose";
import { ThemeProvider } from "@mui/material/styles";
import {
  Grid, Pagination,
  MenuItem,
  InputLabel,
  Select,
  FormControl, Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Button,
  Chip,
} from "@mui/material";
import FeatherIcon from "feather-icons-react";
import { useState } from "react";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import BaseCard from "../../src/components/baseCard/BaseCard";


export default function Index(props) {

  const router = useRouter()
  const [items, setitems] = useState(props.itms)

  if (items.length === 0) {
    return (
      <ThemeProvider theme={theme}>
      <FullLayout>
      <Grid container  spacing={0}>
          <Grid item xs={12} lg={12}>

              <BaseCard title="Subscriber Email">
        <div className="card-body" >
          <h2>there are no story persent please Add  a new sotry </h2>
         
            <Button onClick={() => router.push('/admin/Create')} type="submit" variant="contained" mt={2}>
              Create A New Story 
            </Button>

          </div>
          </BaseCard>
                            
                            </Grid>
                          
                        </Grid>
                      
                    </FullLayout>
    </ThemeProvider>
   
    )
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <FullLayout>
          <Grid container spacing={0}>
            <Grid item xs={12} lg={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Filtter</InputLabel><br />
                <Select
                  labelId="demo-simple-select-label"
                  name="demo-simple-select"
                  defaultValue="All"
                  label="Filtter"
                // onChange={handleChange}
                >
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="Kids">Kids</MenuItem>
                  <MenuItem value="Faimly">Faimly</MenuItem>
                  <MenuItem value="Blogs">Blogs</MenuItem>
                </Select>
              </FormControl>
              <BaseCard title="All Story">
                <Table
                  aria-label="simple table"
                  sx={{
                    mt: 3,
                    whiteSpace: "nowrap",
                  }}
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <Typography color="textSecondary" variant="h6">
                          S/No
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography color="textSecondary" variant="h6">
                          Title
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography color="textSecondary" variant="h6">
                          Image
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography color="textSecondary" variant="h6">
                          Sotory Type
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography color="textSecondary" variant="h6">
                         View 
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography color="textSecondary" variant="h6">
                          Edit
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
                                {product.title}
                              </Typography>
                              <Typography
                                color="textSecondary"
                                sx={{
                                  fontSize: "13px",
                                }}
                              >
                                {product.catogery}
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Typography color="textSecondary" variant="h6">
                            <img src={product.img}
                              alt="Picture of the author"
                              width={50}
                              height={50} />
                          </Typography>

                        </TableCell>
                        <TableCell>
                          <Chip
                            sx={{
                              pl: "4px",
                              pr: "4px",
                              backgroundColor: "blue",
                              color: "#fff",
                            }}
                            size="small"
                            label={product.type}
                          ></Chip>
                        </TableCell>
                        <TableCell align="right">
                          <IconButton onClick={() => router.push(`/admin/Create/${product._id}`)} aria-label="View" color="success">
                            <FeatherIcon  icon="eye" width="20" height="20" />
                          </IconButton>
                        </TableCell>
                        <TableCell align="right">
                          <IconButton onClick={() => router.push(`/admin/Create/${product._id}/edit`)} aria-label="Edit" color="success">
                            <FeatherIcon  icon="edit" width="20" height="20" />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </BaseCard>
              <Pagination count={10} color="primary" />
            </Grid>
            {/* ------------------------- row 1 ------------------------- */}
          </Grid>
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
  let itms = await postitem.find()
  return {
    props: { itms: JSON.parse(JSON.stringify(itms)) }, // will be passed to the page component as props
  }
}