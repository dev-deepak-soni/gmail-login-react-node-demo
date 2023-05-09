import { Link } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import logo from '../images/amw_logo_2.png'

const Login = () => {

    // const handleSignupWithGoogle = () => {
    //     console.log('handleSignupWithGoogle');
    // }
    const backendApi = process.env.REACT_APP_API_URL;


    const postData = async (url = "", data = {}) => {
        // Default options are marked with *
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }

    return (
        <>
            <Formik
                initialValues={{ username: '', password: '' }}
                validationSchema={Yup.object({
                    username: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Username is a required field.'),
                    password: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Password is a required field.')
                })}
                onSubmit={(values, { setSubmitting }) => {

                    postData(backendApi, { data: values }).then((data) => {
                        console.log(data); // JSON data parsed by `data.json()` call
                    });

                }}
            >
                <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
                    <div className="container h-full p-10">
                        <div
                            className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                            <div className="w-full">
                                <div
                                    className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                                    <div className="g-0 lg:flex lg:flex-wrap">
                                        <div className="px-4 md:px-0 lg:w-6/12">
                                            <div className="md:mx-6 md:p-12">
                                                <div className="text-center">
                                                    <img
                                                        className="mx-auto w-48"
                                                        src={logo}
                                                        alt="logo" />
                                                    <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                                                        <button
                                                            className="rounded px-6 pb-2 pt-2.5 text-xs  leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                                            type="submit"
                                                            id='buttonDiv'
                                                            data-te-ripple-init
                                                            data-te-ripple-color="light"
                                                            style={{
                                                                background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)'
                                                            }}
                                                        >
                                                            Sign In Using Google
                                                        </button>
                                                    </h4>
                                                </div>

                                                <Form>
                                                    <p className="mb-4">Please login to your account</p>
                                                    <div className="relative mb-4" data-te-input-wrapper-init>
                                                        <Field
                                                            type="text"
                                                            className="peer block min-h-[auto] w-full rounded border border-black bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                            id="username"
                                                            placeholder="username"
                                                            name="username" />
                                                        <label
                                                            htmlFor="username"
                                                            className=""
                                                        >Username
                                                        </label>
                                                        <div className='text-sm font-bold text-red-600' >
                                                        <ErrorMessage name="username" />
                                                    </div>
                                                    </div>
                                                   
                                                    <div className="relative mb-4" data-te-input-wrapper-init>
                                                        <Field
                                                            type="password"
                                                            className="peer block min-h-[auto] w-full rounded border border-black bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                            id="password"
                                                            placeholder="Password"
                                                            name="password" />
                                                        <label
                                                            htmlFor="password"
                                                            className=""
                                                        >Password
                                                        </label>
                                                        <div className='text-sm font-bold text-red-600' >
                                                        <ErrorMessage name="password" />
                                                    </div>
                                                    </div>
                                                    
                                                    <div className="mb-12 pb-1 pt-1 text-center">
                                                        <button
                                                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                                            type="submit"
                                                            data-te-ripple-init
                                                            data-te-ripple-color="light"
                                                            style={{
                                                                background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)'
                                                            }}
                                                        >
                                                            Log in
                                                        </button>

                                                        <a href="#!">Forgot password?</a>
                                                    </div>

                                                    <div className="flex items-center justify-between pb-6">
                                                        <p className="mb-0 mr-2">Don't have an account?</p>
                                                        <Link to='/signup'>
                                                            <button
                                                                type="button"
                                                                className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                                                data-te-ripple-init
                                                                data-te-ripple-color="light">
                                                                Register
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </Form>
                                            </div>
                                        </div>

                                        <div
                                            className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                                            style={{ background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)' }}>
                                            <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                                                <h4 className="mb-6 text-xl font-semibold">
                                                    We are more than just a company
                                                </h4>
                                                <p className="text-sm">
                                                    With 10+ years of rich experience, we have evolved into a top-notch SaaS products development company and transforming the business with exceptional digital transformation and experience.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Formik>
        </>
    )
}

export default Login