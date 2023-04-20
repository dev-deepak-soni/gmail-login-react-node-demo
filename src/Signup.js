import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <>
            <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
                <div className="container h-full p-10">
                    <div
                        className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                        <div className="w-full">
                            <div
                                className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                                <div className="g-0 lg:flex lg:flex-wrap">


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
                                    <div className="px-4 md:px-0 lg:w-6/12">
                                        <div className="md:mx-6 md:p-12">
                                            <div className="text-center">
                                                <img
                                                    className="mx-auto w-48"
                                                    src="https://amwebtech.com/assets/image/AMW_Logo.svg"
                                                    alt="logo" />
                                                <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                                                    The One-Stop Destination For End To End SaaS Products Development
                                                </h4>
                                            </div>

                                            <form>
                                                <p className="mb-4">Create your account</p>
                                                <div className="relative mb-4" data-te-input-wrapper-init>
                                                    <input
                                                        type="text"
                                                        className="peer block min-h-[auto] w-full rounded border border-black bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                        id="exampleFormControlInput1"
                                                        placeholder="Username" />
                                                    <label
                                                        htmlFor="exampleFormControlInput1"
                                                        className=""
                                                    >Username
                                                    </label>
                                                </div>

                                                <div className="relative mb-4" data-te-input-wrapper-init>
                                                    <input
                                                        type="password"
                                                        className="peer block min-h-[auto] w-full rounded border border-black bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                        id="exampleFormControlInput11"
                                                        placeholder="Password" />
                                                    <label
                                                        htmlFor="exampleFormControlInput11"
                                                        className=""
                                                    >Password
                                                    </label>
                                                </div>

                                                <div className="mb-12 pb-1 pt-1 text-center">
                                                    <button
                                                        className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                                        type="button"
                                                        data-te-ripple-init
                                                        data-te-ripple-color="light"
                                                        style={{
                                                            background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)'
                                                        }}
                                                    >
                                                        Create Account
                                                    </button>
                                                </div>

                                                <div className="flex items-center justify-between pb-6">
                                                    <p className="mb-0 mr-2">Already have an account?</p>
                                                    <Link to='/'>
                                                        <button
                                                            type="button"
                                                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                                            data-te-ripple-init
                                                            data-te-ripple-color="light">
                                                            Login
                                                        </button>
                                                    </Link>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup