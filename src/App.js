import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BasicDetails from './components/BasicDetails';
import DocumentCollection from './components/DocumentCollection';
import StatementOfPurpose from './components/StatementOfPurpose';
import InterviewAvailability from './components/InterviewAvailability';
import ExploreDetails from './components/ExploreDetails';
import NewForm from './components/NewForm';
import ApplicationTitle from './components/ApplicationTitle';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app-container">
        <h1>Talent Acquisition Form</h1>
        <div className="container">
          <div className="left-sidebar">
            <NewForm />
            <ExploreDetails />
          </div>
          <div className="right-sidebar">
            <ApplicationTitle />
            <div className="applicationDetails">
              <Routes>
                <Route path="/" element={<BasicDetails />} />
                <Route path="/basic-details" element={<BasicDetails />} />
                <Route path="/document-collection" element={<DocumentCollection />} />
                <Route path="/statement-of-purpose" element={<StatementOfPurpose />} />
                <Route path="/interview-availability" element={<InterviewAvailability />} />
              </Routes>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


