
import React from 'react'
import  {useRouter}  from "next/router";
function Servicess() {
	const router = useRouter()
	return (
		<>
		<section className="page-title bg-1">
				<div className="container ">
					<div className="row">
						<div className="col-md-12">
							<div className="block text-center">
								<h1 className="text-capitalize mb-5 text-lg">Our Srvicess</h1>
							</div>
						</div>
					</div>
				</div>
			</section>


			<section className="section service-2">
				<div className="container">
					<div className="row mt-5">
						<div className="col-lg-6">
							<div className="service-img mb-5 mb-lg-0">
								<img src="/img/img3.jpg" alt="" className="img-fluid" />
							</div>
						</div>
						<div className="col-lg-6">
							<div className="service-info ">
								<span className="text-color font-weight-bold">01</span>
								<h3 className="text-md mb-4 mt-2">
									पुस्तक लेखन
								</h3>
								<p>बोली गई बात को अधिक समय तक याद रखना कठिन होता है। इसलिए अक्सर हम उसे लिपिबद्ध कर लेते हैं। लिपिबद्ध करने की यह कला ही लेखन कहलाती है। लेखन के माध्यम से समाज लगातार और अधिक विस्तार से जानकारी अंकित कर सकता है तथा अपनी भावी पीढ़ी तक पहुंचा सकता है। महापुरुषों द्वारा कालांतर में लिखे गए अनेक महान ग्रंथ आज भारतीय सभ्यता के गौरव ग्रंथ हैं।</p>
							</div>
						</div>
					</div>

					<div className="content-padding position-relative">
						<div className="row">
							<div className="col-lg-6">
								<div className="service-info mb-5 mb-lg-0">
									<span className="text-color font-weight-bold">02</span>
									<h3 className="text-md mb-4 mt-2">
										संपादन
									</h3>
									<p>संपादन से तात्पर्य किसी सामग्री यानी लेख कहानी उपन्यास आदि से अशुद्धियां हटा कर उसे  पठनीय बनाने से है। यह अशुद्धियां सामग्री की भाषा शैली, व्याकरण, वर्तनी आदि से संबंधित हो सकती है। संपादन विषय- वस्तु की समग्र गुणवत्ता को बढ़ाने में मदद करता है।</p>

								</div>
							</div>
							<div className="col-lg-6">
								<div className="service-img">
									<img src="/img/img5.jpg" alt="" className="img-fluid" />
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-6">
							<div className="service-img mb-5 mb-lg-0">
								<img src="/img/img6.jpg" alt="" className="img-fluid" />
							</div>
						</div>
						<div className="col-lg-6">
							<div className="service-info">
								<span className="text-color font-weight-bold">03</span>
								<h3 className="text-md mb-4 mt-2">
									प्रूफ संशोधन
								</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Animi voluptatum, nobis quos dolores reiciendis unde. Est obcaecati aspernatur pariatur aliquid quos repellendus, amet architecto similique, cumque nisi earum, culpa, ipsa!</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section case-study">
				<div className="container mt-5">
					<div className="row justify-content-center mt-5">
						<div className="col-lg-8">
							<div className="case-study-content text-center mb-5">
								<h2 className="mb-4">हम क्या काम करते हैं</h2>
								<p>बच्चों की शिक्षा जिज्ञासा संस्कार एवं मनोविज्ञान को ध्यान में रखते हुए उनके सर्वांगीण विकास संबंधी विषय सामग्री प्रस्तुत करना। .</p>
							</div>
						</div>
					</div>



					
				</div>
			</section>

			<section className="cta-2 bg-light">
				<div className="container">
					<div className="cta-block py-5">
						<div className="row align-items-center ">
							<div className="col-lg-8">
								<span className="text-color">हर प्रकार की हिंदी पुस्तकों के लिए !</span>
								<h2 className="mt-2 mb-4 mb-lg-0">हमारी सर्वश्रेष्ठ टीम को अपना प्रोजेक्ट सौंपें</h2>
							</div>
							<div className="col-lg-4">
								<a style={{ cursor: "pointer" }} onClick={() => router.push("/author/contact")} className="btn btn-primrey btn-round-full float-lg-right">संपर्क करें </a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
			
		
	)
}

export default Servicess
