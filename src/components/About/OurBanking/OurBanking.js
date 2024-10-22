import React from 'react'
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import OwlCarousel from 'react-owl-carousel';
import "./OurBanking.css"
const OurBanking = () => {
    const options = {
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        responsive: {
          0: {
            items: 2
          },
          600: {
            items: 3
          },
          1000: {
            items: 5
          }
        }
      };
  return (
    <div className="block-title text-center my-5">
      <h2>Our Banking Associates</h2>
      <section className="container partner-section">
        {/* <OwlCarousel className="banking-partner-carousel owl-theme" {...options}> */}
          <div className="item">
            <div className="bank-partner-img">
              <img src="hdfc-logo.png" alt="HDFC Bank" />
            </div>
          </div>
          <div className="item">
            <div className="bank-partner-img">
              <img src="idfc-logo.jpg" alt="IDFC Bank" />
            </div>
          </div>
          <div className="item">
            <div className="bank-partner-img">
              <img src="icici-logo.png" alt="Paytm" />
            </div>
          </div>
          <div className="item">
            <div className="bank-partner-img">
              <img src="icici-logo.png" alt="ICICI Bank" />
            </div>
          </div>
          <div className="item">
            <div className="bank-partner-img">
              <img src="rbl-logo.png" alt="RBL Bank" />
            </div>
          </div>
          <div className="item">
            <div className="bank-partner-img">
              <img src="Yes_Bank_logo.svg.png" alt="Yes Bank" />
            </div>
          </div>
        {/* </OwlCarousel> */}
      </section>
      <div className="bg-bank-head mt-5"></div>
    </div>
  )
}

export default OurBanking
