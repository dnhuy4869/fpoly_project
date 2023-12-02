import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";

const EditForm = () => {
    const [message, setMessage] = useState({
        isSuccess: false,
        message: ""
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!id) {
            navigate("/admin/categories", { replace: true });
        }
    }, [])

    const getUserById = async (id) => {
        try {
            const res = await axios.get(`http://127.0.0.1:8000/user/get-one/${id}`);
            //console.log(res.data);
            return res.data;
        }
        catch (err) {
            return null;
        }
    }

    const [currUser, setCurrUser] = useState({
        username: "",
        password: "",
        role: "",
    });

    useEffect(() => {
        (async () => {
            const cate = await getUserById(id);
            if (!cate) {
                navigate("/admin/users", { replace: true });
            }

            setCurrUser(cate);
        })()
    }, [])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            username: currUser.username,
            password: currUser.password,
            role: currUser.role,
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required("This is a required field")
                .min(3, "This field require at least 3 characters")
                .max(70, "This field cannot exceed 70 characters"),
            password: Yup.string()
                .required("This is a required field")
                .min(3, "This field require at least 3 characters")
                .max(70, "This field cannot exceed 70 characters"),
            role: Yup.string()
                .required("This is a required field"),
        }),
        onSubmit: async (values) => {
            const data = {
                username: values.username,
                password: values.password,
                role: values.role,
            }

            try {
                const res = await axios.put(`http://127.0.0.1:8000/user/update-one/${id}`,
                    data
                );

                setMessage({
                    isSuccess: true,
                    message: res.data.message
                })
            }
            catch (err) {
                if (err.response) {
                    setMessage({
                        isSuccess: false,
                        message: err.response.data.message
                    })
                }
                else {
                    setMessage({
                        isSuccess: false,
                        message: "Unknown error when post request"
                    })
                }
            }
        }
    });

    return (
        <>
            <div className="bg-[color:var(--child-background-color)] p-5 text-slate-300">
                <h5 className="font-bold text-lg">Edit form</h5>
                <form action="" onSubmit={formik.handleSubmit}>
                    <div className="grid grid-cols-3 my-4 gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="" className="">Username</label>
                            <input type="text" name="username" className="mt-2 px-2.5 py-1.5 form-input text-base"
                                value={formik.values.username}
                                onChange={formik.handleChange} />
                            {formik.errors.username && formik.touched.username && (
                                <p className="italic text-danger text-sm">
                                    {formik.errors.username}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="">Password</label>
                            <input type="text" name="password" className="mt-2 px-2.5 py-1.5 form-input text-base"
                                value={formik.values.password}
                                onChange={formik.handleChange} />
                            {formik.errors.password && formik.touched.password && (
                                <p className="italic text-danger text-sm">
                                    {formik.errors.password}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="">Role</label>
                            <select name="role" className="mt-2 px-2.5 py-1.5 form-input text-base"
                                value={formik.values.role}
                                onChange={formik.handleChange}>
                                    <option value="guest">Guest</option>
                                    <option value="admin">Admin</option>
                                </select>
                            {formik.errors.role && formik.touched.role && (
                                <p className="italic text-danger text-sm">
                                    {formik.errors.role}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button type="submit" className="btn-primary px-6 py-2 font-bold">Save</button>
                        {
                            message.message !== ""
                                ? (
                                    <p className={"italic " + (message.isSuccess ? "text-success" : "text-danger")}>
                                        {message.message}
                                    </p>
                                )
                                : null
                        }
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditForm;