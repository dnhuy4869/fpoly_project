import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

const AddForm = () => {
    const [message, setMessage] = useState({
        isSuccess: false,
        message: ""
    });

    const formik = useFormik({
        initialValues: {
            name: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("This is a required field")
                .min(3, "This field require at least 3 characters")
                .max(70, "This field cannot exceed 70 characters"),
        }),
        onSubmit: async (values) => {
            const data = {
                name: values.name
            }

            try {
                const res = await axios.post(`http://127.0.0.1:8000/category/create-one`,
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
                <h5 className="font-bold text-lg">Add form</h5>
                <form action="" onSubmit={formik.handleSubmit}>
                    <div className="grid grid-cols-3 my-4 gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="" className="">Name</label>
                            <input type="text" name="name" className="mt-2 px-2.5 py-1.5 form-input text-base"
                                value={formik.values.name}
                                onChange={formik.handleChange} />
                            {formik.errors.name && formik.touched.name && (
                                <p className="italic text-danger text-sm">
                                    {formik.errors.name}
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

export default AddForm;