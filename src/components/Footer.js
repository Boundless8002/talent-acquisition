import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isLastStep = location.pathname === '/interview-availability';

    const buttonText = isLastStep ? 'SUBMIT' : 'NEXT';

    const handleButtonClick = () => {
        if (isLastStep) {

            alert('Submitting form!');
        } else {
            // Navigate to the next step
            navigateToNextStep();
        }
    };

    const navigateToNextStep = () => {

        let nextStep = '/';
        switch (location.pathname) {
            case '/':
                nextStep = '/basic-details';
                break;
            case '/basic-details':
                nextStep = '/document-collection';
                break;
            case '/document-collection':
                nextStep = '/statement-of-purpose';
                break;
            case '/statement-of-purpose':
                nextStep = '/interview-availability';
                break;

            default:
                break;
        }


        navigate(nextStep);
    };

    return (
        <div className="footer">
            <button onClick={handleButtonClick} >{buttonText}</button>
        </div>
    );
};

export default Footer;
