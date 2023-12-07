// components/DocumentCollection.js
import React, { useState } from 'react';
import '../App.css';

const DocumentCollection = () => {
    const [formData, setFormData] = useState({
        class10: '',
        class12: '',
        graduation: '',
        postGraduation: '',
        resume: '',
        recommendationLetter: '',
        salarySlips: '',
        others: '',
    });

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        // Handle file upload logic
        console.log(`File uploaded for ${name}:`, files[0]);
        // You might want to handle file upload and store them in state
    };

    return (
        <div className="form-section">
            <form ><h2>Document Collection</h2>
                <div>
                    <label>10th Marksheet*</label>
                    <input
                        type="file"
                        name="class10"
                        max-size="2"
                        onChange={handleFileChange}
                        required
                    />
                    <label>12th Marksheet*</label>
                    <input
                        type="file"
                        name="class12"
                        onChange={handleFileChange}
                        required
                    />
                    <label>Graduation Marksheet*</label>
                    <input
                        type="file"
                        name="graduation"
                        onChange={handleFileChange}
                        required
                    />
                    <label>PostGraduation Marksheet</label>
                    <input
                        type="file"
                        name="postGraduation"
                        onChange={handleFileChange}

                    />
                    <label>Resume/CV*</label>
                    <input
                        type="file"
                        name="resume"
                        onChange={handleFileChange}
                        required
                    />
                    <label>RecommendationLetter</label>
                    <input
                        type="file"
                        name="recommendationLetter"
                        onChange={handleFileChange}

                    />
                    <label>Salary Slips</label>
                    <input
                        type="file"
                        name="salarySlips"
                        onChange={handleFileChange}

                    />
                    <label>Others</label>
                    <input
                        type="file"
                        name="others"
                        onChange={handleFileChange}

                    />
                </div></form>



        </div>
    );
};

export default DocumentCollection;
