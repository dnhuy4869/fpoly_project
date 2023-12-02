import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const [error, setError] = useState('');

    const navigate = useNavigate();

    const submitData = async (e) => {
        e.preventDefault();

        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            address: address,
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
            <form className="p-5" onSubmit={e => submitData(e)}>
                <h3 className="text-black mb-3">Add Form</h3>
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
                    <label>Email</label>
                    <input type="text" className="form-control" name="email" placeholder="Your email"
                        value={email}
                        onChange={(event) =>
                            setEmail(event.target.value)
                        } />
                </div>
                <div className="form-group mb-3">
                    <label>Address</label>
                    <input type="text" className="form-control" name="address" placeholder="Your address"
                        value={address}
                        onChange={(event) =>
                            setAddress(event.target.value)
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

export default AddForm;