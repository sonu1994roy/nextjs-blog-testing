import React, { useState } from 'react'
import { useRouter } from "next/router";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ThemeProvider } from "@mui/material/styles";
import FullLayout from "../../../../src/layouts/FullLayout";
import theme from "../../../../src/theme/theme";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { parseCookies } from "nookies";
import {
  Grid
 
} from "@mui/material";
const Delate = ({ items, token }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { push, query } = useRouter();

    const delateItem = async () => {
        const { id } = query
        try {
          const res =  await fetch(`http://localhost:3000/api/creatAPI/${id}`, {
                method: 'DELETE',
                headers: {
                  "Authorization":token
                },
                
            })
            toast.success("Sucsess Fully Deleted", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        }
        
        catch (error) {
                toast.error({error: error.message }, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });

        }

    };
    const handleDelete = async () => {
        await delateItem();
       await push('/admin')
        handleClose()

    }
    return (

        <><ThemeProvider theme={theme}>
            <FullLayout>

                <Grid container spacing={0}>
                    <Grid item xs={12} lg={12}></Grid>
                    <Card style={{ width: '90%', margin: 'auto' }}>
                        <Card.Img style={{ width: '65%', margin: 'auto' }} variant="top" src={items.img} />
                        <Card.Body>
                            <Card.Title>{items.title}</Card.Title>
                            <Card.Text> {items.desc}</Card.Text>
                            <Card.Text> {items.msg}</Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Button variant="danger" onClick={handleShow}>
                                Delete
                            </Button>
                        </Card.Body>
                    </Card>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{items.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>are you sure want to delet this</Modal.Body>
                        <Modal.Footer>
                            <Button variant="light" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="dark" onClick={handleDelete}>
                                Confirm
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </Grid>


            </FullLayout>
        </ThemeProvider>
        <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false} /></>

    )
}

export async function getServerSideProps(ctx) {
       const { id }= ctx.query
    const {token}= parseCookies(ctx)
    if (!token ) {
        const {res} = ctx
        res.writeHead(302,{Location:"/athouticate"})
        res.end()
    }
    const res = await fetch(`http://localhost:3000/api/creatAPI/${id}`,{
    headers: {
        "Authorization":token
      },});
      if (res.status === 401 || res.status === 400) {
        const {res} = ctx
        res.writeHead(404,{Location:"/"})
        res.end()
      }else{
      if (res.status === 200) {
          const items = await res.json()
        return {
            props: {
                items,
                token,
            }
        }
    }
}
    return {
        props: {
            error: {
                statusCode: res.status,
                statusText: "Inviled Id"
            }
        }
    }

}
export default Delate;
