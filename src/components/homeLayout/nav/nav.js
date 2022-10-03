import  {React, useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from "../../../layouts/logo/LogoIcon";
import Serchcomp from "../../../layouts/header/SearchDD"
import Admin from "../../../layouts/header/ProfileDD"
import {useRouter}  from "next/router";
import { parseCookies } from "nookies";
import Cookies from 'js-cookie'







const Nav = () => {
    const router = useRouter()
    const { token } = parseCookies()
    let user = false
    // useEffect(() => {
    //     if (token) {
    //         user=true
    //     } else {
    //        user=false 
    //        Cookies.remove("user")
    //     }

    // }, [token])


    if (token) {
        user = true
    } else {
        user = false
        Cookies.remove("user")
    }

    const [IsOpen, Settoglle] = useState(false);

    function toggle() {

        Settoglle(!IsOpen)
    }
    const [sechShow, setsechShow] = useState(false)
    const [serch, setserch] = useState([])
    const [msg, setmsg] = useState("")
    const [dataSerch, setdataSerch] = useState([])
    useEffect(() => {
        const getItems = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_BASE_URL }/api/getitem`)
            const data = await res.json()
            setserch(data.itms)
        };
        getItems()
    }, [])


    const serchValue = (text) => {
        setsechShow(true)
        if (text == "") {
            setsechShow(false)
            // setdataSerch([])
        } else {

            const regex = new RegExp(`${text}`, "gi");
            let match = serch.filter((itms) => {
                return itms.title.match(regex) || itms.slug.match(regex)
            })
            setdataSerch(match);
            // if (dataSerch==undefined || dataSerch==['']) {
            //     setmsg("Result Not Found")
            // }
        }
    };


    return (
        <>
            {/* <!-- header section starts  --> */}

            <header className="header" >

                <div className="header-1     position-relative">

                    <Logo />


                    <form action="" className="search-form ">
                        <input onChange={(e) => serchValue(e.target.value)} type="search" name="" placeholder="search here..." id="search-box" />
                        <label htmlFor="search-box" className="fas fa-search"></label>
                    </form>




                    <div className="icons">

                        <div id="search-btn"  > <Serchcomp /></div>
                        <div id="search-btn" onClick={toggle} className="fas fa-list" type="button" data-bs-toggle="offcanvas" data-bs-rel="noopener noreferrer" target="#staticBackdrop" aria-controls="staticBackdrop">
                        </div>
                        {user ? <Admin />

                            :
                            <Link href="/athouticate" >
                                <a >
                                    <div id="login-btn" className="fas fa-user"></div>

                                </a>
                            </Link>
                        }
                        {/* <div id="login-btn" className="fas fa-user"></div> */}


                    </div>


                </div>

                <div className="header-2" id="navbarSupportedContent">
                    <nav key={Math.random()} className="navbar" >
                        <Link href="/" className="nav-item">
                            <a className="nav-link" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Home
                            </a>
                        </Link>
                        <Link href="/series/books" passHref className="nav-item">
                            <a className="nav-link" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Books
                            </a>
                        </Link>
                        <Link href="/series/f_story" className="nav-item">
                            <a className="nav-link" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Story
                            </a>
                        </Link>
                        <Link href="/series/poeam" className="nav-item">
                            <a className="nav-link" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Poem
                            </a>
                        </Link>
                        <Link href="/author/About" className="nav-item">
                            <a className="nav-link" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                About Us
                            </a>
                        </Link>
                        <Link href="/author/servicess" className="nav-item">
                            <a className="nav-link" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Servicess
                            </a>
                        </Link>
                        <Link href="/author/contact" className="nav-item">
                            <a className="nav-link" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Contact Us
                            </a>
                        </Link>

                    </nav>
                </div>



                {IsOpen && <div id="navbarSupportedContent">
                    <nav key={Math.random()} className="navbar-nav list-group mr-auto align-items-center" >
                        <Link href="/" className="nav-item">
                            <a className="nav-link list-group-item" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Home
                            </a>
                        </Link>
                        <Link href="/series/books" passHref className="nav-item">
                            <a className="nav-link list-group-item" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Books
                            </a>
                        </Link>
                        <Link href="/series/f_story" className="nav-item">
                            <a className="nav-link list-group-item" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Story
                            </a>
                        </Link>
                        <Link href="/series/poeam" className="nav-item">
                            <a className="nav-link list-group-item" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Poem
                            </a>
                        </Link>
                        <Link href="/author/About" className="nav-item">
                            <a className="nav-link list-group-item" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                About Us
                            </a>
                        </Link>
                        <Link href="/author/servicess" className="nav-item">
                            <a className="nav-link list-group-item" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Servicess
                            </a>
                        </Link>
                        <Link href="/author/contact" className="nav-item">
                            <a className="nav-link list-group-item" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Contact Us
                            </a>
                        </Link>

                    </nav>
                </div>}
            </header>

            {sechShow &&
                <div className='list-serch-box ' >
                    <ul className="list-group">
                        <danger className='test-red mt-12'>{msg}</danger>
                        {dataSerch && dataSerch.map((data, index) => {

                            return (
                                <li key={index} className='list-group-item'>
                                   <a href={`/series/${data.slug}`} className='text-dark '>{data.slug.slice(0, 100)}..<br/>
                                    {/* <small>{data.slug.slice(0, 100)}..</small> */}
                                    </a></li>
                            )

                        })}
                    </ul>
                </div>
            }
 
            <nav className="bottom-navbar">
                <a style={{ cursor: "pointer" }} onClick={() => router.push("/")} className="fas fa-home"></a>
                <a style={{ cursor: "pointer" }} onClick={() => router.push("/series/books")} className="fas fa-book"></a>
                <a style={{ cursor: "pointer" }} onClick={() => router.push("/series/f_story")} className="fas fa-story"></a>
                <a style={{ cursor: "pointer" }} onClick={() => router.push("/series/poeam")} className="fas fa-blog"></a>
            </nav>
        </>

    )
}

export default Nav
