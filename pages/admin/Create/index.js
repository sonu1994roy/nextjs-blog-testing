import React, { useState, useEffect } from 'react'
import {
    Grid,
    Stack,
    TextField,
    MenuItem,
    InputLabel,
    Select,
    FormControl,
    Button,
} from "@mui/material";
import BaseCard from "../../../src/components/baseCard/BaseCard";
import FullLayout from "../../../src/layouts/FullLayout";
import theme from "../../../src/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { parseCookies } from "nookies";



export default function Create() {
    const {token}= parseCookies()
    console.log(token);
    const itmsName = {
        title: "",
        slug: "",
        desc: "",
        catogery: "",
        msg1: "",
        msg2: "",
        storylink: "",
        img: "",
        price: "",
        type: ""
    }
    const [newitems, setnewitems] = useState(itmsName)

    const { title, slug, desc, catogery, msg1, msg2, storylink, price, img, type } = newitems;
    const { push, query } = useRouter();


    const getItems = async () => {
        const res = await fetch(`http://localhost:3000/api/creatAPI/${query.id}`, {
            headers: {
                "Authorization":token
              },}
        )
        const data = await res.json()
        if (data.error) {
            toast.error(data.error, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        }
        setnewitems({
            title: data.title,
            slug: data.slug,
            desc: data.desc,
            catogery: data.catogery,
            msg1: data.msg1,
            msg2: data.msg2,
            img: data.img,
            price: data.price,
            storylink: data.storylink,
            type: data.type
        })
    };
    useEffect(() => {
        if (query.id) {

            getItems()
        } else {
            setnewitems(itmsName)
        }


    }, [query.id])



    const handleSubmit = async (e) => {
        e.preventDefault()
        if (query.id) {
            await updateItem()

        } else {
            await NewItem()

        }

    }
    const updateItem = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/creatAPI/${query.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization":token,
                },
                body: JSON.stringify(newitems)
            })
            let res2 = await res.json()
            if (res2.error) {
                toast.error(res2.error, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });


            } else {
                toast.success(res2.sucsess, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });
                await push('/admin')
            }

        }
        catch (error) {
            toast.error({ error: error.message }, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        }

    }

    const NewItem = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/creatAPI`, {
                method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization":token,
                    },
                body: JSON.stringify(newitems)
            })
            let res2 = await res.json()
            if (res2.error) {
                toast.error(res2.error, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                toast.success(res2.sucsess, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });
                await setnewitems(itmsName)
            }



        }
        catch (error) {
            toast.error({ error: error.message }, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });

        }

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setnewitems({ ...newitems, [name]: value })
    }
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
            />
            <ThemeProvider theme={theme}>
                <FullLayout>

                    <Grid container spacing={0}>

                        <Grid item xs={12} lg={12}>
                            <BaseCard title={query.id ? "update Items" : "Create A New Story"}>

                                <form onSubmit={handleSubmit}>
                                    <Stack spacing={3}>

                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Category</InputLabel> <br /><br />
                                            <Select
                                                labelId="demo-simple-select-label"
                                                name="catogery"
                                                defaultValue="Story"
                                                value={catogery}
                                                onChange={handleChange}
                                                label="Category"
                                            >
                                                <MenuItem value="Story">Story</MenuItem>
                                                <MenuItem value="Books">Books</MenuItem>
                                                <MenuItem value="Poem">Poem</MenuItem>
                                                <MenuItem value="Studdy">Studdy Maiterial</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <TextField value={type} onChange={handleChange} name="type" label=" type" variant="outlined" required />
                                        <TextField value={title} onChange={handleChange} name="title" label="Ttile" variant="outlined" required />
                                        <TextField value={slug} onChange={handleChange} name="slug" label=" Sub Ttile" variant="outlined" required />
                                        <TextField value={desc} onChange={handleChange}
                                            name="desc"
                                            label="Story Description"
                                            multiline
                                            rows={4} />
                                        <TextField value={msg1} onChange={handleChange}
                                            name="msg1"
                                            label="Story part -1"
                                            multiline
                                            rows={10} />
                                        <TextField value={msg2} onChange={handleChange}
                                            name="msg2"
                                            label="Story part -2"
                                            multiline
                                            rows={16}
                                            required />


                                        <TextField value={img} onChange={handleChange} name="img" label=" picture Input" variant="outlined" />

                                        <TextField value={storylink} onChange={handleChange} name="storylink" label=" Next Story Link" variant="outlined" />
                                        <TextField value={price} onChange={handleChange} name="price" label=" Book Price" variant="outlined" />
                                    </Stack>
                                    <br />
                                    <Button type="submit" variant="contained" mt={2}>
                                        {query.id ? "update" : "Create"}
                                    </Button>
                                </form>

                            </BaseCard>
                        </Grid>


                    </Grid>
                </FullLayout>
            </ThemeProvider>
        </>
    )
}
export async function getServerSideProps(ctx) {
    const { token } = parseCookies(ctx)
    if (!token) {
        const { res } = ctx
        res.writeHead(302, { Location: "/athouticate" })
        res.end()
    }
    return {
        props:  { msg : "" }
    }
}

