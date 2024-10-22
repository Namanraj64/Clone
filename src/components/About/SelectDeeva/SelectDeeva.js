import React from 'react'
import "./SelectDeeva.css"
const SelectDeeva = () => {
    const courseTitles = [
        "Innovative and Customized Solutions",
        "Cutting-Edge Technologies",
        "Skilled Professionals",
        "Comprehensive Range of Software",
        "Commitment to Transparency",
        "Ethical Business Practices",
        "Delivering Quality Solutions",
        "Ongoing Support",
        "Collaborative Approach",
        "Exceptional Customer Service",
        "Cost-Effective Solutions",
        "Long-Term Relationships"
     ];
  
     return (
        <div className="ag-format-container">
           <div className="intro-fin">
              <div className="banking-industry-content-2 text-center">
                 <h3>Why Choose Deeva Payon</h3>
                 <p className="abt-choos-cont">
                    We take a collaborative approach to software development, working closely with our clients to understand their vision, goals, and requirements. Our experts are committed to delivering clean, efficient, and scalable code that meets the highest industry standards. We pride ourselves on our attention to detail, quality assurance, and testing processes, ensuring that our solutions are reliable, secure, and future-proof.
                    We understand that software development can be a complex and challenging process, which is why we prioritize open communication, transparency, and ethical business practices. Our team is dedicated to delivering exceptional customer service and ongoing support, ensuring that your project is delivered on time and on budget.
                    At Deeva Payon, we are passionate about what we do, and we take pride in delivering innovative and effective solutions that help our clients achieve their business objectives. Contact us today to learn how we can help you take your business to the next level.
                 </p>
              </div>
           </div>
           <div className="ag-courses_box">
              {courseTitles.map((title, index) => (
                 <div className="ag-courses_item" key={index}>
                    <div className="ag-courses-item_bg">
                       <div className="ag-courses-item_title">
                          <h3>{title}</h3>
                       </div>
                    </div>
                 </div>
              ))}
           </div>
           <div className="bg-bank-head mt-5"></div>
        </div>
        
  )
}

export default SelectDeeva
