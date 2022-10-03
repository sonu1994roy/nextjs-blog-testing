import {React, useState, useEffect } from 'react'
import Link from 'next/link'
import  {useRouter}  from "next/router";

function Footer() {

  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false); //this helps

  useEffect(() => {
    setIsLoaded(true);
  }, [loader]);

  useEffect(() => {
    if (isLoaded) {
      setIsPageLoaded(true);
    }
  }, [isLoaded]);
  const [loader, setloader] = useState(false)

  setTimeout(() => {
    setloader(true)
  }, 3000);
  return (
    <div>

      <hr />
      <section className="footer ">
        <footer className="footer mt-5 footer-main">

          <div className="container">
            <div className="box-container">

              <div className="box">
                <h3>quick links</h3>
                <a style={{ cursor: "pointer" }} onClick={() => router.push("/")}> <i className="fas fa-arrow-right"></i> home </a>
                <a style={{ cursor: "pointer" }} onClick={() => router.push("/series/books")}> <i className="fas fa-arrow-right"></i>Books</a>
                <a style={{ cursor: "pointer" }} onClick={() => router.push("/series/f_story")}> <i className="fas fa-arrow-right"></i> Our Story </a>
                <a style={{ cursor: "pointer" }} onClick={() => router.push("/series/poeam")}> <i className="fas fa-arrow-right"></i> Our Poem </a>

              </div>

              <div className="box">
                <h3>extra links</h3>
                <a style={{ cursor: "pointer" }} onClick={() => router.push("/author/About")}> <i className="fas fa-arrow-right"></i> About Us </a>
                <a style={{ cursor: "pointer" }} onClick={() => router.push("/author/contact")}> <i className="fas fa-arrow-right"></i> Contact Us</a>
                <a style={{ cursor: "pointer" }} onClick={() => router.push("/author/servicess")}> <i className="fas fa-arrow-right"></i>Our serivces</a>
                <a style={{ cursor: "pointer" }} onClick={() => router.push("/author/contactForBay")}> <i className="fas fa-arrow-right"></i> Buy Books </a>

              </div>

              <div className="box">
                <h3>contact info</h3>
                <a > <i className="fas fa-phone"></i> +123-456-7890 </a>
                <a > <i className="fas fa-phone"></i> +111-222-3333 </a>
                <a > <i className="fas fa-envelope"></i> shaikhanas@gmail.com </a>
                <img src="../image/worldmap.png" className="map" alt="" />
              </div>

            </div>

            <div className="share">
              <a  className="fab fa-facebook-f"></a>
              <a className="fab fa-twitter"></a>
              <a  className="fab fa-instagram"></a>
              <a  className="fab fa-linkedin"></a>
              <a className="fab fa-pinterest"></a>
            </div>

            <div className="credit"> created by <span><a href=" https://sonu1994roy.github.io/sonumyportfolio.github.io/" rel="noopener noreferrer" target="_blank">mr. Sonu</a></span> | all rights reserved!<span> Shree.</span> </div>
          </div>


        </footer>
      </section>

      {/* -- footer section ends -- */}
      <div className="whatsaap-chat ">
        <button   className="btn btn-primary share " title="Chat on WhatsApp" >
        <a rel="noopener noreferrer" target="_blank" href="https://wa.me/917428271817?text=I'm%20interested%20in%20your%20Books%20for%20Buy"className="fab fa-whatsapp"></a>
        </button>
      </div>
      
      {/* !-- loader  -- */}

      <div className={loader ? "d-none" : "loader-container"}>
        <img src="../image/loader-img.gif" alt="" />
      </div>
    </div>
  )
}

export default Footer
