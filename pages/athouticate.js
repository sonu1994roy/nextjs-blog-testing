import React from 'react'
import { useState, useEffect } from "react"
import { useRouter } from "next/router";
import Cookies from 'js-cookie'
import { parseCookies } from "nookies";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Adminlogin() {
  const [userid, setusername] = useState("")
  const [password, setpassword] = useState("")
  const router = useRouter()
  // const {token} = parseCookies()
  //  if (token) {
  //   alert("your are already login in lobby ")
  //   router.push("/admin")
  //  }
  const userLogin = async (e) => {
    e.preventDefault()
    const data = {
      userid,
      password
    }
    const res = await fetch(`/api/admin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
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
      Cookies.set("token",res2.token)
      Cookies.set("user",JSON.stringify(res2.user))
      await router.push('/admin')
      
    }
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
      <div className='container'>
        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row d-flex align-items-center justify-content-center h-100">
              <div className="col-md-8 col-lg-7 col-xl-6">
                <img src="img/img2.jpg"
                  className="img-fluid" alt="Phone image" />
              </div>
              <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <form onSubmit={(e) => userLogin(e)}>
                  {/* <!-- Email input --> */}
                  <div className="form-outline mb-4">
                    <input type="text" value={userid} onChange={(e) => setusername(e.target.value)} name="userid" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form1Example13">Email address</label>
                  </div>

                  {/* <!-- Password input --> */}
                  <div className="form-outline mb-4">
                    <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} name="password" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form1Example23">Password</label>
                  </div>

                  <div className="d-flex justify-content-around align-items-center mb-4">

                    <a href="#!">Forgot password?</a>
                  </div>


                  <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>

                </form>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default Adminlogin;
export async function getServerSideProps(ctx) {
  const {token}= parseCookies(ctx)
  if (token ) {
      const {res} = ctx
      res.writeHead(302,{Location:"/admin"})
      res.end()
  }
  return{
      props:{msg:""}
  }
  }