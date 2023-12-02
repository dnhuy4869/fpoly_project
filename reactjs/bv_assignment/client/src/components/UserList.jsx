import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserList = () => {
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
                return prevData.filter((obj) => obj.id !== id);
            });
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className="p-5">
                <h3 className="text-black mb-3">User List</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">First name</th>
                            <th scope="col">Last name</th>
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
                                        <td>
                                            <div className="">
                                                <Link to={`/edit/${user.id}`} className="btn btn-info">Edit</Link>
                                                <button className="btn btn-danger"
                                                    onClick={() => deleteUser(user.id)}>Delete</button>
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

export default UserList;