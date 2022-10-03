import React from 'react'
import FeatherIcon from "feather-icons-react";
import Link from 'next/link'
import { useRouter } from "next/router";
const AthorBox = (prop) => {
    const router = useRouter()

    if (prop.path === "" || prop.path === undefined) {
        return (
            <div>
                <nav className="post-navigation  clearfix">
                    <div className="previous-post ">
                        <a style={{ cursor: "pointer" }} onClick={() => router.push("/")}>
                            <h4 className="text-uppercase ">more read</h4>
                            <p>
                                Read More Story
                            </p>
                        </a>
                    </div>
                    <div className="next-post">
                    <a rel="noopener noreferrer" target="_blank" href="https://wa.me/917428271817?text=I'm%20interested%20in%20your%20Books%20for%20Buy">
                            <h4 className="text-uppercase">Buy Books</h4>

                            <p>
                                Get In Touch For Buy Books
                            </p>
                        </a>
                    </div>
                </nav>
                <div className="author-block">
                    <div className="author-thumb">
                        <img src="../../img/authers-image.jpg" alt="author-image" />
                    </div>
                    <div className="author-content">
                        <h3>Pooja Rawat</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur

                            adipisicing elit. Sit quod molestias
                            delectus illum quisquam.
                            Quasi iure perferendis suscipit officiis dicta!
                        </p>

                        <div className="  authors-social">

                            <Link href="https://www.facebook.com/themefisher" passHref><a className="li list-inline-item"><FeatherIcon icon="facebook" /></a></Link>
                            <Link href="https://www.facebook.com/themefisher" passHref><a className="li  list-inline-item"><FeatherIcon icon="twitter" /></a></Link>
                            <Link href="https://www.facebook.com/themefisher" passHref><a className="li  list-inline-item"><FeatherIcon icon="instagram" /></a></Link>
                            <Link href="https://www.facebook.com/themefisher" passHref><a className="li  list-inline-item"><FeatherIcon icon="linkedin" /></a></Link>



                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            <nav className="post-navigation clearfix">
                <div className="previous-post ">
                    <a href={prop.path}>
                        <h4 className="text-uppercase ">{prop.heding}</h4>
                        <p>
                            {prop.Subtitile}
                        </p>
                    </a>
                </div>
                <div className="next-post">
                <a rel="noopener noreferrer" target="_blank" href="https://wa.me/917428271817?text=I'm%20interested%20in%20your%20Books%20for%20Buy">
                        <h4 className="text-uppercase">Buy Books</h4>

                        <p>
                        Get In Touch For Buy Books
                        </p>
                    </a>
                </div>
            </nav>
            {/* <div className="author-block">
                <div className="author-thumb">
                    <img src="../../img/authers-image.jpg" alt="author-image" />
                </div>
                <div className="author-content">
                    <h3>Pooja Rawat</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur

                        adipisicing elit. Sit quod molestias
                        delectus illum quisquam.
                        Quasi iure perferendis suscipit officiis dicta!
                    </p>

                    <div className="  authors-social">

                        <Link href="https://www.facebook.com/themefisher"><a className="li list-inline-item"><FeatherIcon icon="facebook" /></a></Link>
                        <Link href="https://www.facebook.com/themefisher"><a className="li  list-inline-item"><FeatherIcon icon="twitter" /></a></Link>
                        <Link href="https://www.facebook.com/themefisher"><a className="li  list-inline-item"><FeatherIcon icon="instagram" /></a></Link>
                        <Link href="https://www.facebook.com/themefisher"><a className="li  list-inline-item"><FeatherIcon icon="linkedin" /></a></Link>



                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default AthorBox


