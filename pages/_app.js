import '../styles/globals.css'
import Head from 'next/head'
import FullLayout from "../src/components/homeLayout/homeFullyLayout";
import { useEffect, useState } from "react"
// import js from "../public/js/script"


function MyApp({ Component, pageProps }) {
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {

    return (
      <>

        <><Head>

          <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />

          {/* <!-- font awesome cdn link  --> */}
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />



          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />


        </Head>


          <FullLayout>
            <Component {...pageProps} />
          </FullLayout>


        </>




      </>
    )
  }
}

export default MyApp
