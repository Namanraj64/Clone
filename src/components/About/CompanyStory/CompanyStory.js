import React from 'react'
import "./CompanyStory.css"
import aboutus from '../../../assest/about-us.jpg'
const CompanyStory = () => {
  return (
    <section className="company-story">
    <div className="content">
      <div className="text">
        <h3 className='companystory'>Our Company Story</h3>
        <h1>India's Leading Software Company</h1>
        <p>
        DeevaPayon is a leading service aggregator and payments solution provider based in India . We currently have more than 60+ services like prepaid recharges, domestic money transfer, postpaid, landline, electricity, gas, insurance, Travel and others. In a very short space of time, as DeevaPayon. we have experienced rapid growth and have established our company as one of the leading player in the Indian market. DeevaPayon has experienced unprecedented growth, significantly expanding its retail base and channel partner. In terms of number of retail outlets, the company has grown more than ten-fold in four years, with expectations to double its headcount by the end of 2017. Over the past year, we have continued to develop and improve DeevaPayon in a number of ways. Additionally, we’ve focused attention on customer service to ensuring customer satisfaction and a new DeevaPayon designed to ensure the easy to adopt, easy to use this influences our product development roadmap going forward. For us, these developments will provide the perfect launch pad for our business as we continue to grow and innovate enabling our channel partners to deliver better services to their customers and End users.
        </p>
      </div>
      <div className="image">
        <img src={aboutus} alt="Teamwork" />
      </div>
    </div>
  </section>
  )
}

export default CompanyStory
