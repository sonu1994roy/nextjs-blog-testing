import React from "react";
import Link from 'next/link'
import postitem from "../../modal/postitem";
import mongoose from "mongoose";
import {
  Grid, Button
} from "@mui/material";
import { useRouter } from "next/router";


const Poeam = ({ itms }) => {
  const router = useRouter()
  if (itms.length === 0) {
    return (
      <section className="sectionBox">
        <Grid container spacing={0}>
        <Grid item xs={12} lg={12}>
        <div className="card-body m-auto">
        
          <div className="card-body" >
            <h2>There are no any sotry create by owner </h2>

            <Button onClick={() => router.push('/')} type="submit" variant="contained" mt={2}>
              Back To Home
            </Button>

          </div>
      
        </div>
        </Grid>
      </Grid>
      </section>
     
    )
  }

  return (
    <section className="sectionBox">
    
      <div className='container mt-5'>
        <div className='row d-wrap m-auto ' style={{justifyContent:"center" ,rowGap:"2rem" ,gap:"2rem "}}>


          {itms.map((data) => {
            const date = new Date(data.createdAt)
            const formattedDate = date.toLocaleDateString("en-GB", {
              day: "numeric",
              month: "numeric",
              year: "numeric"
            })
            return (

              <>
                <Link key={data._id} href={`/series/${data.slug}`}>
                  <a>
                    <div  className="cardcontainer">
                      <div className="photo">
                        <img src={data.img} />
                        <div className="photos"> {data.type}</div>
                      </div>
                      <div className="content-title">
                        <h4 >{data.title.slice(0,15)}..</h4>

                        <p >{data.desc.slice(0,40)}..</p>
                      </div>
                      <div className="footer-card">
                        <Link href={`/series/${data.slug}`}><a className="waves-effect waves-light btn" >Read More</a></Link>
                        <p className="txt3"><i className="far fa-clock"></i>{formattedDate} </p>
                      </div>
                    </div>
                  </a>
                </Link>


              </>)
          })}

        </div>
      </div>
    </section>
  )

}
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URL)
  }
  let itms = await postitem.find({ catogery: "Poem" })
  return {
    props: { itms: JSON.parse(JSON.stringify(itms)) }, // will be passed to the page component as props
  }
}
export default Poeam
