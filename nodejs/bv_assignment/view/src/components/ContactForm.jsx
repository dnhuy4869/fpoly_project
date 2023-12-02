import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ContactForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [country, setCountry] = useState('Australia');
    const [subject, setSubject] = useState('');

    const [error, setError] = useState('');

    const navigate = useNavigate();

    const submitData = async (e) => {
        e.preventDefault();

        const data = {
            firstName: firstName,
            lastName: lastName,
            country: country,
            subject: subject,
        }

        console.log(data);

        try {
            const res = await axios.post(`http://127.0.0.1:8000/user/create-one`,
                data
            );

            navigate("/list", { replace: true });

        }
        catch (error) {
            setError(error.response.data.message);
        }
    }

    return (
        <>
            <div className="bg-dark text-white py-3 px-4">
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link text-info" href="#">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/list" className="nav-link text-white" href="#">Contact List</Link>
                    </li>
                </ul>
            </div>

            <form className="p-5" onSubmit={e => submitData(e)}>
                <h3 className="text-black mb-3">Contact Form</h3>
                <div className="form-group mb-3">
                    <label>First name</label>
                    <input type="text" className="form-control" name="firstName" placeholder="Your name"
                        value={firstName}
                        onChange={(event) =>
                            setFirstName(event.target.value)
                        } />
                </div>
                <div className="form-group mb-3">
                    <label>Last name</label>
                    <input type="text" className="form-control" name="lastName" placeholder="Your last name"
                        value={lastName}
                        onChange={(event) =>
                            setLastName(event.target.value)
                        } />
                </div>
                <div className="form-group mb-3">
                    <label>Country</label>
                    <select className="form-control" name="country" id=""
                        value={country}
                        onChange={(event) =>
                            setCountry(event.target.value)
                        }>
                        <option value="Australia">Australia</option>
                        <option value="China">China</option>
                        <option value="Vietnam">Vietnam</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label>Subject</label>
                    <textarea className="form-control" name="subject" placeholder="Write something..."
                        value={subject}
                        onChange={(event) =>
                            setSubject(event.target.value)
                        } />
                </div>
                <button type="submit" className="btn btn-primary mt-2">Submit</button>
                {
                    error ? (
                        <>
                            <span className="text-danger">{error}</span>
                        </>
                    ) : null
                }
            </form>
        </>
    )
}

export default ContactForm;