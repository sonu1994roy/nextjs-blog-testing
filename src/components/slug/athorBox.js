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
                            <h4 className="text-uppercase ">Ream More</h4>
                            <p>
                                Read More Story
                            </p>
                        </a>
                    </div>
                    <div className="next-post">
                    <a rel="noopener noreferrer" target="_blank" href= {process.env.NEXT_PUBLIC_CHAT_URL}>
                            <h4 className="text-uppercase">Buy Books</h4>

                            <p>
                                Get In Touch For Buy Books
                            </p>
                        </a>
                    </div>
                </nav>
               
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
                <a rel="noopener noreferrer" target="_blank" href= {process.env.NEXT_PUBLIC_CHAT_URL}>
                        <h4 className="text-uppercase">Buy Books</h4>

                        <p>
                        Get In Touch For Buy Books
                        </p>
                    </a>
                </div>
            </nav>
            
        </div>
    )
}

export default AthorBox


