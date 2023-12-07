// components/InterviewAvailability.js
import React, { useState } from 'react';
import '../App.css';

const InterviewAvailability = () => {
    const [interviewInfo, setInterviewInfo] = useState({
        email: '',
        location: '',
        interviewDate: '',
        interviewTime: '',
        timeZone: '',
        interviewMedium: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInterviewInfo({
            ...interviewInfo,
            [name]: value,
        });
    };

    return (
        <div className="form-section">
            <form >
                <h2>Interview Availability</h2>
                <label className="title">Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={interviewInfo.email}
                    onChange={handleChange}
                    required
                />

                <label className="title">Location</label>
                <input
                    type="text"
                    name="location"
                    placeholder="Enter your Location"
                    value={interviewInfo.location}
                    onChange={handleChange}
                    required
                />
                <label className="title">Interview Date</label>
                <input
                    type="date"
                    name="interviewDate"
                    value={interviewInfo.interviewDate}
                    onChange={handleChange}
                    required
                />
                <label className="title">Interview Time</label>
                <input
                    type="time"
                    name="interviewTime"

                    value={interviewInfo.interviewTime}
                    onChange={handleChange}
                    required
                />
                <div> <label className="title">Time Zone</label>
                    <div><select name="timeZone" id="timeZone" required>

                        <option value="-12">(UTC-12:00) International Date Line West</option>
                        <option value="-11">(UTC-11:00) Coordinated Universal Time-11</option>
                        <option value="-10">(UTC-10:00) Hawaii</option>
                        <option value="-9">(UTC-09:00) Alaska</option>
                        <option value="-7">(UTC-08:00) Baja California</option>
                        <option value="-7">(UTC-07:00) Pacific Time (US &amp; Canada)</option>
                        <option value="-8">(UTC-08:00) Pacific Time (US &amp; Canada)</option>
                        <option value="-7">(UTC-07:00) Arizona</option>
                        <option value="-6">(UTC-07:00) Chihuahua, La Paz, Mazatlan</option>
                        <option value="-6">(UTC-07:00) Mountain Time (US &amp; Canada)</option>
                        <option value="-6">(UTC-06:00) Central America</option>
                        <option value="-5">(UTC-06:00) Central Time (US &amp; Canada)</option>
                        <option value="-5">(UTC-06:00) Guadalajara, Mexico City, Monterrey</option>
                        <option value="-6">(UTC-06:00) Saskatchewan</option>
                        <option value="-5">(UTC-05:00) Bogota, Lima, Quito</option>
                        <option value="-4">(UTC-05:00) Eastern Time (US &amp; Canada)</option>
                        <option value="-4">(UTC-05:00) Indiana (East)</option>
                        <option value="-4.5">(UTC-04:30) Caracas</option>
                        <option value="-4">(UTC-04:00) Asuncion</option>
                        <option value="-3">(UTC-04:00) Atlantic Time (Canada)</option>
                        <option value="-4">(UTC-04:00) Cuiaba</option>
                        <option value="-4">(UTC-04:00) Georgetown, La Paz, Manaus, San Juan</option>
                        <option value="-4">(UTC-04:00) Santiago</option>
                        <option value="-2.5">(UTC-03:30) Newfoundland</option>
                        <option value="-3">(UTC-03:00) Brasilia</option>
                        <option value="-3">(UTC-03:00) Buenos Aires</option>
                        <option value="-3">(UTC-03:00) Cayenne, Fortaleza</option>
                        <option value="-3">(UTC-03:00) Greenland</option>
                        <option value="-3">(UTC-03:00) Montevideo</option>
                        <option value="-3">(UTC-03:00) Salvador</option>
                        <option value="-2">(UTC-02:00) Coordinated Universal Time-02</option>
                        <option value="-1">(UTC-02:00) Mid-Atlantic - Old</option>
                        <option value="0">(UTC-01:00) Azores</option>
                        <option value="-1">(UTC-01:00) Cape Verde Is.</option>
                        <option value="1">(UTC) Casablanca</option>
                        <option value="0">(UTC) Coordinated Universal Time</option>
                        <option value="0">(UTC) Edinburgh, London</option>
                        <option value="1">(UTC+01:00) Edinburgh, London</option>
                        <option value="1">(UTC) Dublin, Lisbon</option>
                        <option value="0">(UTC) Monrovia, Reykjavik</option>
                        <option value="2">(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna</option>
                        <option value="2">(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague</option>
                        <option value="2">(UTC+01:00) Brussels, Copenhagen, Madrid, Paris</option>
                        <option value="2">(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb</option>
                        <option value="1">(UTC+01:00) West Central Africa</option>
                        <option value="1">(UTC+01:00) Windhoek</option>
                        <option value="3">(UTC+02:00) Athens, Bucharest</option>
                        <option value="3">(UTC+02:00) Beirut</option>
                        <option value="2">(UTC+02:00) Cairo</option>
                        <option value="3">(UTC+02:00) Damascus</option>
                        <option value="3">(UTC+02:00) E. Europe</option>
                    </select></div></div>
                <div><label className="title">Interview Medium</label>
                    <div><select name="interviewMedium" id="interviewMedium" required>
                        <option value="select">Select</option>
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>

                    </select></div>
                </div>

            </form>
        </div>
    );
};

export default InterviewAvailability;
