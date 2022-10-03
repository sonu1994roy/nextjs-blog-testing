import React from 'react'

function Contact() {
    return (
        <><section className="page-title bg-1">
            <div className="container ">
                <div className="row">
                    <div className="col-md-12">
                        <div className="block text-center">
                            <h1 className="text-capitalize mb-5 text-lg">Contact Us</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section><div className="container">
                <section className="section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">


                                <div className="row mt-5">
                                    <div className="col-lg-8">
                                        <h3 className="text-primary  mt-4 mb-3">संपर्क करें</h3>
                                        <p>
                                        हमारे कार्य से संबंधित किसी भी प्रकार की जानकारी पाने के लिए ऑनलाइन फॉर्म को कॉल करें या सबमिट करें। हम आप की सेवा के लिए तत्पर हैं
                                        </p>
                                    </div>
                                </div>

                                <form id="Contact-form" className="my-5">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="form-group">
                                                <label htmlFor="exampleFormControlSelect1">नमस्ते आप आज हमसे संपर्क क्यों कर रहे हैं?</label>
                                                <select className="form-control" id="exampleFormControlSelect1">
                                                    <option>कृपया चयन कीजिए</option>
                                                    <option>मुझे तकनीकी सहायता चाहिए</option>
                                                    <option>
                                                        मुझे लेख प्रकाशित करने में समस्या आ रही है</option>
                                                    <option>मुझे विज्ञापन प्रकाशित करने में दिलचस्पी है</option>
                                                    <option>मैं एक कहानी पिच करना चाहता हूँ</option>
                                                    <option>अन्य</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="name">
                                                    आपका नाम</label>
                                                <input className="form-control form-control-name" name="name" id="name" type="text" required />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="email">आपका ईमेल पता</label>

                                                <input className="form-control form-control-email" name="email" id="email" type="email" required />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="topic">आपका प्रश्न विषय</label>

                                                <input className="form-control form-control-subject" name="subject" id="subject" required />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="message">आपका सन्देश</label>
                                                <textarea className="form-control form-control-message" name="message" id="message" rows="7" required></textarea>
                                            </div>

                                            <button className="btn btn-primary solid blank mt-3" type="submit">मेसेज भेजें</button>
                                        </div>
                                        <div className="col-lg-4">
                                            <h4 className="text-black mb-4 mt-5 mt-lg-0">यह वेबसाइट अपने उद्देश्य की पूर्ति कर सकेगी ऐसा हमारा विश्वास है। अपने सुझावों द्वारा हमारा मार्गदर्शन करते रहें यह हमारा सौभाग्य होगा।।</h4>
                                            <p className="lead">कृपया नीचे मेसेज करने से पहले निम्नलिखित को ध्यान से पढ़ें</p>

                                            <ul className="list-unstyled ">
                                                <li className="mb-3">1 हम केवल इससे संबंधित मुद्दों का समाधान कर सकते हैं</li>

                                                <li className="mb-3"> 2 यदि आप समाचार प्रस्तुत करना चाहते हैं तो कृपया फ़ॉर्म में समाचार सबमिट करें पृष्ठ देखें जिसमें अधिक विवरण है</li>

                                                <li className="mb-3">3 वेबसाइट पर अधिक जानकारी के लिए कृपया पहले हमारा सोइसल लिंक पेज देखें।</li>
                                                <li className="mb-3">
                                                    <a  className="text-color h5 d-block">+91 7428271817</a>
                                                    <a  className="mb-5 text-color h5 d-block">yourmail@emailcom</a>
                                                    <p>Punchsheel Hynish<br />Sector-1 Noida Extension</p>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </form>


                            </div>
                        </div>
                    </div>
                </section>
                <section className="section pt-0">

                    <div>
                        <iframe src="https://wwwgooglecom/maps/embed?pb=!1m18!1m12!1m3!1d11211501541522572!2d772647944418649!3d28581944963124077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x390ceff611242023%3A0xf06db2f8516da5fc!2sPanchsheel%20Hynish!5e0!3m2!1sen!2sin!4v1663926136392!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </section>
            </div></>

    )
}

export default Contact
