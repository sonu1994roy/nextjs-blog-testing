
import FullLayout from "../../src/layouts/FullLayout";
import theme from "../../src/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import {
  Grid,
} from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
import BaseCard from "../../src/components/baseCard/BaseCard";
import { parseCookies } from "nookies";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie'



export default function Acount(props) {
  const {token}= parseCookies()
  const router = useRouter()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [pasword, setpasword] = useState(false)
  const [profile, setprofile] = useState(false)
  const [user, setuser] = useState(props.user)

  const userName = {

    Name: "",
    surname: "",
    userid: "",
    email: "",
    img: "",
    c: "",
    adress1: "",
    adress2: "",
    password: "",
    phone1: "",
    phone2: "",
    whatsaap: "",
    fasebook: "",
    twiter: "",
    instagram: "",
    linkedin: "",
  }
  const [newitems, setnewitems] = useState(userName)
  const { Name, surname, userid, email, img, adress1, c, adress2, password, phone1, phone2, whatsaap, fasebook, twiter, instagram, linkedin } = newitems

  function updateProfile(e) {
    e.preventDefault()
    handleSubmit()
  
  }
  const handleSubmit = async () => {
    // e.preventDefault()
    // handleSubmit()
    await UpdateUser()

  }
  // const UpdateUser = async () => {some cahnege 
  //   try {
  //     const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_BASE_URL }/api/user`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         // "Authorization":token,
  //     },}//
 
  const UpdateUser = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_BASE_URL }/api/profile`, {
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
    }else{
        toast.success(res2.sucsess, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
        await   router.push("/")
        Cookies.remove("token")
        Cookies.remove("user")
    }

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

  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setnewitems({ ...newitems, [name]: value })
  };
 
  function handaleEdit(e) {
    setprofile(true)
    setnewitems({
      Name: user.Name,
      surname: user.surname,
      userid: user.userid,
      email: user.email,
      img: user.img,
      adress1: user.userAdress.adress1,
      adress2: user.userAdress.adress2,
      phone1: user.userAdress.phone1,
      phone2: user.userAdress.phone2,
      whatsaap: user.sosail.whatsaap,
      fasebook: user.sosail.fasebook,
      twiter: user.sosail.twiter,
      instagram: user.sosail.instagram,
      linkedin: user.sosail.linkedin,

    })
  };

// pasword update.......

const PassWordVerfy = {
  Vuserid: "",
  Vemail: "",
  OldPassword:"",
  Newpassword:"",
  ConfirmPass:"",
  con:"",
}
const [Userpassword, setUserpassword] = useState(PassWordVerfy)
const {Vuserid,Vemail,con, OldPassword, Newpassword, ConfirmPass  } = Userpassword


function handlePaswordUpdate(e) {
  e.preventDefault()
  handleSubmit1()

}

const handleSubmit1 = async () => {
  await UpdatePassword()
  

}
const UpdatePassword = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_BASE_URL }/api/changePassW`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization":token,
    },
      body: JSON.stringify(Userpassword)
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
  }else{
      toast.success(res2.sucsess, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
      });
      await   router.push("/")
      Cookies.remove("token")
      Cookies.remove("user")
  }

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

}

  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setUserpassword({ ...Userpassword, [name]: value })
  };
  function handalePassword(e) {
    setpasword(true)
    setUserpassword({
      Vuserid: user.userid,
      Vemail: user.email,})
    
  }

//   if (user==null) {
// return(
//   <h1>please not authonticate please contaact to the devlpoer</h1>
//   // <form onSubmit={handleSubmit}>
//   //                     <div className="container rounded bg-white mt-5 mb-5">
//   //                       <div className="row">
//   //                         <div className="col-md-3 border-right">
//   //                           <div className="d-flex flex-column align-items-center text-center p-3 py-5">
//   //                             <img className="rounded-circle mt-5" style={{ width: "100px" }} src={img} />
//   //                             <span className="font-weight-bold">{Name}</span>
//   //                             <span className="text-black-50">{email}</span>
//   //                             <span> </span>
//   //                           </div>
//   //                         </div>
//   //                         <div className="col-md-5 border-right">
//   //                           <div className="p-3 py-5">
//   //                             <div className="d-flex justify-content-between align-items-center mb-3">
//   //                               <h4 className="text-right">Profile Settings</h4>
//   //                             </div>
//   //                             <div className="row mt-2">
//   //                               <div className="col-md-6"><label className="labels">Name</label>
//   //                                 <input onChange={handleChange} value={Name} type="text" name="Name" className="form-control" placeholder="first name" />
//   //                               </div> <div className="col-md-6"><label className="labels">Surname</label>
//   //                                 <input onChange={handleChange} value={surname} type="text" name="surname" className="form-control" placeholder="surname" />
//   //                               </div>
//   //                             </div>
//   //                             <div className="row mt-3">
//   //                               <div className="col-md-12">
//   //                                 <label className="labels">UserId</label>
//   //                                 {/* onChange={handleChange}  */} this chnge with pasword  with email id
//   //                                 <input onChange={handleChange}  value={userid} type="text" name="userid" className="form-control" placeholder="enter User Id" />
//   //                               </div> <div className="col-md-12">
//   //                               </div> <div className="col-md-12"><label className="labels">Email ID</label>
//   //                                 <input onChange={handleChange} value={email} type="email" name="email" className="form-control" placeholder="enter email id" />
//   //                                 <label className="labels">Address</label>
//   //                                 <input onChange={handleChange} value={adress1} type="text" name="adress1" className="form-control" placeholder="enter address" />
//   //                               </div> <div className="col-md-12"><label className="labels">Address-2</label>
//   //                                 <input onChange={handleChange} value={adress2} type="text" name="adress2" className="form-control" placeholder="Address-2" />
//   //                               </div>
//   //                               <div className="col-md-12"><label className="labels">pasword</label>
//   //                          <input onChange={handleChange} value={password}  type="text" name="password" className="form-control" placeholder="Address-2" />
//   //                         </div>
//   //                               <div className="col-md-12"><label className="labels">profile image link</label>
//   //                                 <input onChange={handleChange} value={img} type="text" name="img" className="form-control" placeholder="profile image link" />
//   //                               </div>

//   //                             </div>
//   //                             <div className="row mt-3">
//   //                               <div className="col-md-6">
//   //                                 <label className="labels">Phone Number-1</label>
//   //                                 <input onChange={handleChange} value={phone1} type="text" name="phone1" className="form-control" placeholder="Phone-Number-1" />
//   //                               </div>
//   //                               <div className="col-md-6">
//   //                                 <label className="labels">Phone Number-2</label>
//   //                                 <input onChange={handleChange} value={phone2} type="text" name="phone2" className="form-control" placeholder="Phone-Number-2" />
//   //                               </div>
//   //                             </div>
//   //                             <div className="mt-5 text-center">
//   //                               <a className="btn btn-primary profile-button" onClick={handleShow} >Save Profile</a>
//   //                             </div>
                  
//   //                           </div>
//   //                         </div>
//   //                         <div className="col-md-4">
//   //                           <div className="p-3 py-5">
//   //                             <div className="d-flex justify-content-between align-items-center experience">
//   //                               <span>Edit Sosial Link</span>
//   //                               <span className="border px-3 p-1 add-experience">
//   //                                 <i className="fa fa-plus"></i>Sosial Link</span>
//   //                             </div>
//   //                             <br />
//   //                             <div className="col-md-12">
//   //                               <label className="labels">Whatsappe Link</label>
//   //                               <input onChange={handleChange} value={whatsaap} type="text" name="whatsaap" className="form-control" placeholder="Whatsappe Link" />
//   //                             </div>
//   //                             <br />
//   //                             <div className="col-md-12"><label className="labels">FaseBook Link</label>
//   //                               <input onChange={handleChange} value={fasebook} type="text" name="fasebook" className="form-control" placeholder="FaseBook Link" />
//   //                             </div>
//   //                             <br />
//   //                             <div className="col-md-12"><label className="labels">Twiter Link</label>
//   //                               <input onChange={handleChange} value={twiter} type="text" name="twiter" className="form-control" placeholder="Twiter Link" />
//   //                             </div>
//   //                             <br />
//   //                             <div className="col-md-12"><label className="labels">InstaGram Link</label>
//   //                               <input onChange={handleChange} value={instagram} type="text" name="instagram" className="form-control" placeholder="InstaGram Link" />
//   //                             </div>
//   //                             <br />
//   //                             <div className="col-md-12"><label className="labels">LinkedIn</label>
//   //                               <input onChange={handleChange} value={linkedin} type="text" name="linkedin" className="form-control" placeholder="LinkedIn" />
//   //                             </div>
//   //                           </div>
//   //                         </div>
//   //                           <a onClick={handalePassword} type="button" className="btn btn-light"> Profile </a>
//   //                               <a  onClick={() => router.push("/admin")} type="button" className="btn btn-dark ms-1">back</a>
//   //                       </div>
//   //                     </div>
//   //                   </form> 
// )
//   }...../ this code ony used for firts time admin siup
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

              <BaseCard title="profile">
                {pasword ? <form onSubmit={handleSubmit1}>
                  <div className="container rounded bg-white mt-5 mb-5">
                    <div className="row">
                      <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                          <img className="rounded-circle mt-5" style={{ width: "100px" }} src={img} />
                          <span className="font-weight-bold">{Name}</span>
                          <span className="text-black-50">{email}</span>
                          <span> </span>
                        </div>
                      </div>
                      <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="text-right">Password Settings</h4>
                          </div>

                          <div className="row mt-3">
                            <div className="col-md-12"><label className="labels">Email ID</label>
                              <input value={Vemail} readOnly type="email" name="Vemail" className="form-control" placeholder="enter email id" />

                            </div>
                            <div className="col-md-12">
                              <label className="labels">UserId</label>
                              <input onChange={handleChange1} value={Vuserid} type="text" name="Vuserid" className="form-control" placeholder="enter User Id" />
                            </div>
                            <div className="col-md-12"><label className="labels">Old pasword</label>
                              <input onChange={handleChange1} value={OldPassword} type="password" name="OldPassword" className="form-control" placeholder="Old Password" />
                            </div>
                            <div className="col-md-12"><label className="labels">New Password</label>
                              <input onChange={handleChange1} value={Newpassword} type="text" name="Newpassword" className="form-control" placeholder="New Password" />
                            </div>
                            <div className="col-md-12"><label className="labels">Confirm Password</label>
                              <input onChange={handleChange1} value={ConfirmPass} type="password" name="ConfirmPass" className="form-control" placeholder="Confirm Password" />
                            </div>

                          </div>

                          <div className="mt-5 text-center">
                            <a className="btn btn-primary profile-button" onClick={handleShow} >Save Profile</a>
                          </div>
                          <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                              <Modal.Title>enter Your primery phone number for verication</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <label className="labels"> phone number</label>
                              <input onChange={handleChange1} value={con} type="text" name="con" className="form-control" placeholder="confirm-phone" />
                            </Modal.Body>
                            <Modal.Footer>
                              <Button variant="light"onClick={handlePaswordUpdate} >
                                Update
                              </Button>

                            </Modal.Footer>
                          </Modal>
                          <div  className="mt-5 justifyContent-between my-5 text-center">
              
                          <a onClick={() => router.push("/admin")} type="button" className="btn btn-dark ms-1">back</a>
                          </div>
                        </div>
                      </div>
                       
                    </div>
                  </div>
                </form>
                  : profile ?
                    <form onSubmit={handleSubmit}>
                      <div className="container rounded bg-white mt-5 mb-5">
                        <div className="row">
                          <div className="col-md-3 border-right">
                            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                              <img className="rounded-circle mt-5" style={{ width: "100px" }} src={img} />
                              <span className="font-weight-bold">{Name}</span>
                              <span className="text-black-50">{email}</span>
                              <span> </span>
                            </div>
                          </div>
                          <div className="col-md-5 border-right">
                            <div className="p-3 py-5">
                              <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Profile Settings</h4>
                              </div>
                              <div className="row mt-2">
                                <div className="col-md-6"><label className="labels">Name</label>
                                  <input onChange={handleChange} value={Name} type="text" name="Name" className="form-control" placeholder="first name" />
                                </div> <div className="col-md-6"><label className="labels">Surname</label>
                                  <input onChange={handleChange} value={surname} type="text" name="surname" className="form-control" placeholder="surname" />
                                </div>
                              </div>
                              <div className="row mt-3">
                                <div className="col-md-12">
                                  <label className="labels">UserId</label>
                                  {/* onChange={handleChange}  */} this chnge with pasword  with email id
                                  <input readOnly  value={userid} type="text" name="userid" className="form-control" placeholder="enter User Id" />
                                </div> <div className="col-md-12">
                                </div> <div className="col-md-12"><label className="labels">Email ID</label>
                                  <input onChange={handleChange} value={email} type="email" name="email" className="form-control" placeholder="enter email id" />
                                  <label className="labels">Address</label>
                                  <input onChange={handleChange} value={adress1} type="text" name="adress1" className="form-control" placeholder="enter address" />
                                </div> <div className="col-md-12"><label className="labels">Address-2</label>
                                  <input onChange={handleChange} value={adress2} type="text" name="adress2" className="form-control" placeholder="Address-2" />
                                </div>
                                {/* <div className="col-md-12"><label className="labels">pasword</label>
                           <input onChange={handleChange} value={password}  type="text" name="password" className="form-control" placeholder="Address-2" />
                          </div> */}
                                <div className="col-md-12"><label className="labels">profile image link</label>
                                  <input onChange={handleChange} value={img} type="text" name="img" className="form-control" placeholder="profile image link" />
                                </div>

                              </div>
                              <div className="row mt-3">
                                <div className="col-md-6">
                                  <label className="labels">Phone Number-1</label>
                                  <input onChange={handleChange} value={phone1} type="text" name="phone1" className="form-control" placeholder="Phone-Number-1" />
                                </div>
                                <div className="col-md-6">
                                  <label className="labels">Phone Number-2</label>
                                  <input onChange={handleChange} value={phone2} type="text" name="phone2" className="form-control" placeholder="Phone-Number-2" />
                                </div>
                              </div>
                              <div className="mt-5 text-center">
                                <a className="btn btn-primary profile-button" onClick={handleShow} >Save Profile</a>
                              </div>
                              <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                  <Modal.Title>please write a password for verification</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  <label className="labels">Conffirm Password</label>
                                  <input onChange={handleChange} value={c} type="text" name="c" className="form-control" placeholder="confirm-password" />
                                </Modal.Body>
                                <Modal.Footer>
                                  <Button variant="light" onClick={updateProfile}>
                                    Update
                                  </Button>

                                </Modal.Footer>
                              </Modal>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="p-3 py-5">
                              <div className="d-flex justify-content-between align-items-center experience">
                                <span>Edit Sosial Link</span>
                                <span className="border px-3 p-1 add-experience">
                                  <i className="fa fa-plus"></i>Sosial Link</span>
                              </div>
                              <br />
                              <div className="col-md-12">
                                <label className="labels">Whatsappe Link</label>
                                <input onChange={handleChange} value={whatsaap} type="text" name="whatsaap" className="form-control" placeholder="Whatsappe Link" />
                              </div>
                              <br />
                              <div className="col-md-12"><label className="labels">FaseBook Link</label>
                                <input onChange={handleChange} value={fasebook} type="text" name="fasebook" className="form-control" placeholder="FaseBook Link" />
                              </div>
                              <br />
                              <div className="col-md-12"><label className="labels">Twiter Link</label>
                                <input onChange={handleChange} value={twiter} type="text" name="twiter" className="form-control" placeholder="Twiter Link" />
                              </div>
                              <br />
                              <div className="col-md-12"><label className="labels">InstaGram Link</label>
                                <input onChange={handleChange} value={instagram} type="text" name="instagram" className="form-control" placeholder="InstaGram Link" />
                              </div>
                              <br />
                              <div className="col-md-12"><label className="labels">LinkedIn</label>
                                <input onChange={handleChange} value={linkedin} type="text" name="linkedin" className="form-control" placeholder="LinkedIn" />
                              </div>
                            </div>
                          </div>
                            <a onClick={handalePassword} type="button" className="btn btn-light"> Profile </a>
                                <a  onClick={() => router.push("/admin")} type="button" className="btn btn-dark ms-1">back</a>
                        </div>
                      </div>
                    </form> :

                    <div className="container  py-5">

                      <div className="row">
                        <div className="col-lg-4">
                          <div className="card mb-4">
                            <div className="card-body text-center">
                              <img src={user.img} alt="avatar"
                                className="rounded-circle  img-fluid" style={{ width: "100px" }} />
                              <h5 className="my-3">{user.Name}</h5>
                              <p className="text-muted mb-1">{user.email}</p>
                              <div className="d-flex justify-content-center mb-2">
                                <button onClick={handaleEdit} type="button" className="btn btn-light">Edit </button>
                                <button onClick={handalePassword} type="button" className="btn btn-dark ms-1">Password</button>
                              </div>
                            </div>
                          </div>
                          <div className="card mb-4 mb-lg-0">
                            <div className="card-body p-0">
                              <ul className="list-group list-group-flush rounded-3">
                                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                  <i className="fas fa-whatsapp fa-lg text-warning"></i>
                                  <a rel="noopener noreferrer" target="_blank" href={user.sosail.whatsaap} className="mb-0">{user.sosail.whatsaap}</a>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                  <i className="fab fa-github fa-lg" style={{ color: "#333333" }}></i>
                                  <a rel="noopener noreferrer" target="_blank" href={user.sosail.linkedin} className="mb-0">{user.sosail.linkedin}</a>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                  <i className="fab fa-twitter fa-lg" style={{ color: "#55acee" }}></i>
                                  <a rel="noopener noreferrer" target="_blank" href={user.sosail.twiter} className="mb-0">{user.sosail.twiter}</a>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                  <i className="fab fa-instagram fa-lg" style={{ color: "#ac2bac" }}></i>
                                  <a rel="noopener noreferrer" target="_blank" href={user.sosail.instagram} className="mb-0">{user.sosail.instagram}</a>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                  <i className="fab fa-facebook-f fa-lg" style={{ color: "#3b5998" }}></i>
                                  <a rel="noopener noreferrer" target="_blank" href={user.sosail.fasebook} className="mb-0">{user.sosail.fasebook}</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-8">
                          <div className="card mb-0">
                            <div className="card-body">
                              <div className="row">
                                <div className="col-sm-4">
                                  <p className="mb-0">Full Name</p>
                                </div>
                                <div className="col-sm-8">
                                  <p className="text-muted mb-0">{user.Name} <span>{user.surname}</span></p>
                                </div>
                              </div>
                              <hr />
                              <div className="row">
                                <div className="col-sm-4">
                                  <p className="mb-0">Email</p>
                                </div>
                                <div className="col-sm-9">
                                  <p className="text-muted mb-0">{user.email}</p>
                                </div>
                              </div>
                              <hr />
                              <div className="row">
                                <div className="col-sm-4">
                                  <p className="mb-0">Mobile-1</p>
                                </div>
                                <div className="col-sm-8">
                                  <p className="text-muted mb-0">{user.userAdress.phone1}</p>
                                </div>
                              </div>
                              <hr />
                              <div className="row">
                                <div className="col-sm-4">
                                  <p className="mb-0">Mobile-2</p>
                                </div>
                                <div className="col-sm-8">
                                  <p className="text-muted mb-0">{user.userAdress.phone2}</p>
                                </div>
                              </div>
                              <hr />
                              <div className="row">
                                <div className="col-sm-4">
                                  <p className="mb-0">Address</p>
                                </div>
                                <div className="col-sm-8">
                                  <p className="text-muted mb-0">{user.userAdress.adress1}</p>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>


                    </div>}

              </BaseCard>

            </Grid>
            {/* ------------------------- row 1 ------------------------- */}
          </Grid>
        </FullLayout>
      </ThemeProvider>
    </>

  )
}

export async function getServerSideProps(ctx) {
  const { token, user } = parseCookies(ctx)

  if (!token) {
    const { res } = ctx                // return { props: { user:null }, will be passed to the page component as props for not login}
    res.writeHead(302, { Location: "/athouticate" })
    res.end()
  };

  return {
    props: { user: JSON.parse(user) }, // will be passed to the page component as props
  }
}