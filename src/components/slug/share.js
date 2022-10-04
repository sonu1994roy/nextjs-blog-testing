import React, { useState } from 'react'
import Link from 'next/link'
import { CopyToClipboard } from "react-copy-to-clipboard";



const Share = (props) => {
 
         
    const [Copied, setCopied] = useState(false)
<<<<<<< HEAD
    const [url, seturl] = useState(`${process.env.NEXT_PUBLIC_HOST_BASE_URL }/series/${props.link}`)
=======
    const [url, seturl] = useState(`/series/${props.link}`)

>>>>>>> 993a113fa91fa3b2cb2f2618becaff6d80f5b101
    
    return (
        <div>
            <div className="share-block share-box mt-5">
                <div className="post-tags">
                    <span>Tags</span>
                    <Link href="/series/books" passHref>
                        <a className="dropdown-item" >Books</a>
                    </Link>
                    <Link href="/series/f_story" passHref>
                        <a className="dropdown-item" >Story</a>
                    </Link>
                    <Link href="/series/poeam" passHref>
                        <a className="dropdown-item" >Poeam</a>
                    </Link>
                </div>
                
               
                <ul className="share-icons footer list-unstyled ">
                    <h5>अपने दोस्तों के साथ साझा करें:</h5>
                    <div className="share d-flex">
                        <a  className="fab fa-facebook-f"></a>
                        <a className="fab fa-whatsapp"></a>
                        {/* <Sousail> */}
                        <CopyToClipboard
                    text={url}
                    onCopy={() => setCopied(true)}>
                    {Copied?  
                    <a style={{background:" #07ff00" }} className="fa fa-copy"></a> :
                    <a style={{ cursor: "pointer"  }} className="fa fa-copy"></a>}
                </CopyToClipboard>
    
                    </div>
                </ul>
            </div>

        </div>
    )
}

export default Share



