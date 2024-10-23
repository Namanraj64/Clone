import React from 'react';
import './HowWeWork.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faChartSimple, faPencil, faRocket, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

const steps = [
    { number: "01", title: "Requirement Analysis", icon: faChartSimple },
    { number: "02", title: "UI/UX Designing", icon: faPencil },
    { number: "03", title: "Development", icon: faLaptopCode },
    { number: "04", title: "Quality Assurance", icon: faChartSimple },
    { number: "05", title: "Site Launch", icon: faRocket },
    { number: "06", title: "Support & Maintenance", icon: faScrewdriverWrench },
];

const HowWeWork = () => {
    return (
        <div className="how-we-work-container">
            <h2 className="section-title">How We Work</h2>
            <div className="steps-container">
                {steps.map((step, index) => (
                    <div className="step-card" key={index}>
                        <div className="step-icon">
                            <FontAwesomeIcon icon={step.icon} size="3x" />
                            <span className="step-number">{step.number}</span>
                        </div>
                        <h3 className="step-title">{step.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HowWeWork;
