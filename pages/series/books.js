import React from "react";
import Link from 'next/link'
import postitem from "../../modal/postitem";
import mongoose from "mongoose";
import {
  Grid, Button
} from "@mui/material";
import { useRouter } from "next/router";

const Books = ({ itms }) => {
  const router = useRouter()

  if (itms.length === 0) {
    return (
      <Grid container spacing={0}>
        <Grid item xs={12} lg={12}>
          <div className="card-body" >
            <h2>There are no any sotry create by owner </h2>

            <Button onClick={() => router.push('/')} type="submit" variant="contained" mt={2}>
              Back To Home
            </Button>

          </div>
        </Grid>
      </Grid>
    )
  }

  return (
    <div className='container mt-2 featured'>
      <div className='row d-wrap m-auto featured-slider'>

        {itms.map((data) => {
          return (
            <div key={data._id} className="swiper-wrapper">

              <div className="swiper-slide box">
                <div className="icons">
                  <h5>
                    <div className="price">Buy Now at ${data.price}</div>
                  </h5>
                </div>
                <div className="image ">       
                  <img className="img-fulid " src={data.img} alt="" />
                </div>
                <div className="content">
                  <h3>{data.title.slice(0,20)}..</h3>
                  <p className="price">{data.type.slice(0,15)}..</p>
                  <Link href={`/series/${data.slug}`} ><a className="btn">Read More</a></Link>
                </div>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}
export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URL)
  }
  let itms = await postitem.find({ catogery: "Books" })
  return {
    props: { itms: JSON.parse(JSON.stringify(itms)) }, // will be passed to the page component as props
  }
}
export default Books