import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DocumentCollection from './DocumentCollection'
import StatementOfPurpose from './StatementOfPurpose'

const ExploreDetails = () => {
    const navigate = useNavigate()
    const handleDetails = () => {
        navigate('/basic-details')
    }
    const handleDocument = () => {
        navigate('/document-collection');
    }
    const handleStatement = () => {
        navigate('/statement-of-purpose');
    }
    const handleInterview = () => {
        navigate('/interview-availability');
    }
    return (
        <div className="exploredetails">
            <p> Explore the following Templates</p>
            <div className="details" onClick={handleDetails}>
                <h3>Details Collection</h3>
                <p>Collect information from Candidates on their eduaction,work experience,contact no, etc</p>
            </div>
            <div className="details" onClick={handleDocument}>
                <h3>Document Collection</h3>
                <p>Save time and efforts :Explore this template to find a set of questions required for document collection</p>
            </div>
            <div className="details" onClick={handleStatement}>
                <h3>Statement of Purpose</h3>
                <p>Start creating a new form with the wide options of fields available</p>
            </div>
            <div className="details" onClick={handleInterview}>
                <h3>Interview Availablility</h3>
                <p>Select your interview available timing</p>
            </div>
        </div>
    )
}

export default ExploreDetails