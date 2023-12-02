import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ContactList = () => {
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        try {
            async function fetchData() {
                const res = await axios.get("http://127.0.0.1:8000/user/get-all");

                setAllUsers(res.data);
            }

            fetchData();
        }
        catch (err) {
            console.log(err);
        }
    }, []);

    const deleteUser = async (id) => {
        try {
            const res = await axios.delete(`http://127.0.0.1:8000/user/delete-one/${id}`);

            setAllUsers((prevData) => {
                return prevData.filter((obj) => obj._id !== id);
            });
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className="bg-dark text-white py-3 px-4">
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link text-white" href="#">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/list" className="nav-link text-info" href="#">Contact List</Link>
                    </li>
                </ul>
            </div>

            <div className="p-5">
                <h3 className="text-black mb-3">Contact List</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">First name</th>
                            <th scope="col">Last name</th>
                            <th scope="col">Country</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.country}</td>
                                        <td>{user.subject}</td>
                                        <td>
                                            <div className="">
                                                <Link to={`/edit/${user._id}`} className="btn btn-info">Edit</Link>
                                                <button className="btn btn-danger"
                                                    onClick={() => deleteUser(user._id)}>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default ContactList;