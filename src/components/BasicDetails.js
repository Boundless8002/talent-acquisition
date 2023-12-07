// components/BasicDetails.js
import React, { useState } from 'react';
import '../App.css';

const BasicDetails = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobileNumber: '',
        dob: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className="form-section">
            <h2>Basic Details</h2>
            <form >
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                /><label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <label>Mobile Number</label>
                <input
                    type="text"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                />
                <label >Date of Birth</label>
                <input
                    type="date"
                    name="dob"
                    placeholder="Date of Birth"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                /></form>

        </div>
    );
};

export default BasicDetails;
