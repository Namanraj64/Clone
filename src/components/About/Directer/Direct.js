import React from 'react';
import "./Direct.css";
import cofounder from '../../../assest/rk.jpg';

const Direct = () => {
  return (
    <div className="hr-section">
      <div className="hr-section-3">
        <div className="container-hr hr-section-min">
          <div className="hr-content">
            <p>
              <span className="capitalize-letter">S</span>ince 2017, DeevaPayon is a leading service aggregator and payments solution provider based in India. We currently have more than 60+ services like prepaid recharges, domestic money transfer, postpaid, landline, electricity, gas, insurance, Travel and others. In a very short space of time, as DeevaPayon, we have experienced rapid growth and have established our company as one of the leading players in the Indian market. DeevaPayon has experienced unprecedented growth, significantly expanding its retail base and channel partners. In terms of the number of retail outlets, the company has grown more than ten-fold in four years, with expectations to double its headcount by the end of 2017. Over the past year, we have continued to develop and improve DeevaPayon in a number of ways. Additionally, we’ve focused attention on customer service to ensuring customer satisfaction and a new DeevaPayon designed to ensure the easy to adopt, easy to use influences our product development roadmap going forward. For us, these developments will provide the perfect launch pad for our business as we continue to grow and innovate enabling our channel partners to deliver better services to their customers and end users.
            </p>
            <h5>- Ankit Rai, <span>Founder &amp; CEO</span></h5>
          </div>
          <div className="hr-image">
            <img src={cofounder} alt="CEO of DeevaPayon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Direct;
