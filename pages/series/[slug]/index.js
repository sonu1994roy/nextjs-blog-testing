import React from 'react'
import postitem from "../../../modal/postitem";
import mongoose from "mongoose";
import { useRouter } from "next/router";
import FeatherIcon from "feather-icons-react";
import { useState } from "react";
import AthorBox from "../../../src/components/slug/athorBox";
import ShareBox from "../../../src/components/slug/share";




function Slug(props, errors) {
    const router = useRouter()
    const [items, setitems] = useState(props.itms)

    const [moreStory, setmoreStory] = useState(props.moreStory)
    const [rleateItem, setrleateItem] = useState(props.rleateItem)
   
    if (items.catogery === "Books") {
        return (
            <>
                <section className="single-block-wrapper section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                <div className="single-post">
                                    <div className="post-header mb-5">
                                        <a className="post-category">{items.catogery}</a>
                                        <h2 className="post-title">
                                            {items.title}
                                        </h2>
                                        <p>{items.desc}</p>
                                    </div>
                                    <div className="post-body">
                                        <div className="post-featured-image">
                                            <img src={items.img} className="img-fluid" alt="featured-image" />
                                        </div>
                                        <div className="entry-content">
                                            <p>
                                                {items.msg1}
                                            </p>
                                            <p>
                                                {items.msg2}
                                            </p>



                                        </div>

                                    </div>

                                    <ShareBox link={items.slug} />
                                </div>
                                <AthorBox heding=" Read More" Subtitile="इस किताब की छोटी सी कहानी पढ़ें" path={items.storylink} />
                            <div className="related-posts-block arrivals">
                                <h3 className="news-title">

                                    संबंधित पोस्ट
                                </h3>
                                <div className="news-style-two-slide arrivals-slider">
                                    <div className="" style={{ width: "65%" }}>
                                        {rleateItem.reverse().slice(0, 7).map((data) => {

                                            return (

                                                <a key={data._id} href={`/series/${data.slug}`} className="item box">
                                                    <div className="image">
                                                        <img className='img-books' src={data.img} alt="" />
                                                    </div>
                                                    <div className="w-50 content">
                                                        <h3>{data.type}</h3>

                                                        <div className="price">{data.title.slice(0, 30)}..<br /> <p>Rs: {data.price}</p></div>
                                                    </div>
                                                </a>

                                            )
                                        })}

                                    </div>

                                </div>
                            </div>
                            </div>

                            

                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div className="sidebar sidebar-right">
                                <div className="widget">
                                    <h3 className="news-title">

                                        Latest Update
                                    </h3>

                                    <ul className="list-inline social-widget">

                                        <li className="list-inline-item">
                                            <a className="social-page facebook" style={{ cursor: "pointer" }} onClick={() => router.push("/")}>
                                                <FeatherIcon icon="facebook" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-page twitter" style={{ cursor: "pointer" }} onClick={() => router.push("/")}>
                                                <FeatherIcon icon="twitter" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-page pinterest" style={{ cursor: "pointer" }} onClick={() => router.push("/")}>
                                                <FeatherIcon icon="instagram" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-page linkedin" style={{ cursor: "pointer" }} onClick={() => router.push("/")}>
                                                <FeatherIcon icon="linkedin" />
                                            </a>
                                        </li>

                                        <li className="list-inline-item">
                                            <a className="social-page youtube" style={{ cursor: "pointer" }} onClick={() => router.push("/")}>
                                                <FeatherIcon icon="youtube" />
                                            </a>
                                        </li>

                                    </ul>

                                </div>
                                <div className="widget">
                                    <h3 className="news-title">
                                        अधिक कहानी
                                    </h3>


                                    <div className="post-list-block">
                                        {moreStory.reverse().slice(0, 10).map((data) => {
                                            return (
                                                <div key={data._id} className="post-block-wrapper post-float box ">
                                                    <div className=" post-thumbnail">

                                                        <a rel="noopener noreferrer" href={`/series/${data.slug}`}>
                                                            <img className="img-fluid h-75" src={data.img} alt="post-thumbnail" />
                                                        </a>

                                                    </div>
                                                    <div className="post-content">
                                                        <h2 className="post-title title-sm">

                                                            <a rel="noopener noreferrer" href={`/series/${data.slug}`}>{data.title.slice(0, 30)}..</a>

                                                        </h2>
                                                        <div className="post-meta">
                                                            <p className="posted-time">{data.type}</p>
                                                        </div>
                                                    </div>
                                                </div>)
                                        })
                                        }


                                    </div>
                                </div>

                            </div>
                        </div>
                        </div>


                    </div>

                </section >
            </>
        );

    } else {
        return (
            <div>
                <section className="page-title bg-1">
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="block text-center">
                                    <h1 className="text-capitalize mb-5 text-lg">story</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="block-wrapper no-sidebar">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="single-post">
                                    <div className="post-header mb-5">
                                        <a className="post-category" >{items.catogery}</a>
                                        <h2 className="post-title">
                                            {items.title}
                                        </h2>
                                        <p >{items.desc} </p>
                                    </div>
                                    <div className="post-body">
                                        <div className="post-featured-image">
                                            <img src={items.img} className="img-fluid" alt="featured-image" />
                                        </div>
                                        <div className="entry-content">
                                            <p >
                                                {items.msg1}
                                            </p>
                                            <p >
                                                {items.msg2}
                                            </p>
                                        </div>

                                        <ShareBox link={items.slug} />
                                    </div>
                                </div>

                                <AthorBox heding="Next Part" Subtitile="Read next Part In this Story" path={items.storylink} />

                                <div className="related-posts-block">
                                    <h3 className="news-title">
                                        Related Posts
                                    </h3>
                                    <div className="news-style-two-slide">

                                        {rleateItem.reverse().slice(0, 7).map((data) => {

                                            return (
                                                <div key={data._id} className="item">
                                                    <div className="post-block-wrapper clearfix">

                                                        <div className="post-thumbnail mb-0">

                                                            <a rel="noopener noreferrer" href={`/series/${data.slug}`}>
                                                                <img className="img-fluid " style={{ width: "13rem ", height: "10rem" }} src={data.img} alt="post-thumbnail" />
                                                            </a>

                                                        </div>

                                                        <div className="post-content">
                                                            <div className="post-title title-sm mb-2">

                                                                <a rel="noopener noreferrer" href={`/series/${data.slug}`} className="post-category">{data.title.slice(0, 20)}..</a>

                                                            </div>
                                                            <h2 rel="noopener noreferrer" className="post-title title-sm">

                                                                <a rel="noopener noreferrer" href={`/series/${data.slug}`}>{data.desc.slice(0, 50)}..</a>

                                                            </h2>


                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

}
export async function getServerSideProps(context) {
    const { slug } = context.query
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URL)
    }
    let itms = await postitem.findOne({ slug: slug });
    const rltdItms = itms.catogery
    let rleateItem = await postitem.find({ catogery: rltdItms })
    let moreStory = await postitem.find()
    return {
        props: {
            itms: JSON.parse(JSON.stringify(itms)),
            rleateItem: JSON.parse(JSON.stringify(rleateItem)),
            moreStory: JSON.parse(JSON.stringify(moreStory)),
        },
        // will be passed to the page component as props
    }
}

// export const getStaticProps = async (context) => {
//     const { slug } = context.params
//     if (!mongoose.connections[0].readyState) {
//         await mongoose.connect(process.env.MONGO_URL)
//     }
//     let itms = await postitem.findOne({ slug: slug });
//     const rltdItms = itms.catogery
//     let rleateItem = await postitem.find({ catogery: rltdItms })
//     let moreStory = await postitem.find()
//     return {
//         props: {
//             itms: JSON.parse(JSON.stringify(itms)),
//             rleateItem: JSON.parse(JSON.stringify(rleateItem)),
//             moreStory: JSON.parse(JSON.stringify(moreStory)),
//         },
//     };
// };
// export const getStaticPaths = async () => {

//     if (!mongoose.connections[0].readyState) {
//         await mongoose.connect(process.env.MONGO_URL)
//     }
//     let data = await postitem.find();
//     const paths = data.map((curEle) => ({ params: { slug: curEle.slug.toString() } }));
//     return {
//         paths,
//         fallback: false,
//     };
// };
export default Slug
