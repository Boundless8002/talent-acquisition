// components/StatementOfPurpose.js
import React, { useState } from 'react';
import '../App.css';

const StatementOfPurpose = () => {
    const [answers, setAnswers] = useState({
        question1: '',
        question2: '',
        question3: '',
    });

    const handleAnswerChange = (e) => {
        const { name, value } = e.target;
        setAnswers({
            ...answers,
            [name]: value,
        });
    };

    return (
        <div className="form-section">
            <h2>Statement of Purpose</h2>
            <div> <label >1.Tell me about a time you were asked to do something you had never done
                before. How did you react? What did you learn?</label>
                <textarea
                    name="question1"
                    placeholder="Enter a description for the long answer."
                    value={answers.question1}
                    onChange={handleAnswerChange}
                    required
                />
                <label >2.Tell me about the last time something significant didn’t go according to plan at
                    work. What was your role? What was the outcome?
                </label>
                <textarea
                    name="question2"
                    placeholder="Enter a description for the long answer."
                    value={answers.question2}
                    onChange={handleAnswerChange}
                    required
                />
                <label >3.What are the three things that are most important to you in a job?
                </label>
                <textarea
                    name="question3"
                    placeholder="Enter a description for the long answer."
                    value={answers.question3}
                    onChange={handleAnswerChange}
                    required
                />
            </div>


        </div>
    );
};

export default StatementOfPurpose;
