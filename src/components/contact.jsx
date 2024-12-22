import { useState } from "react";

function Contact() {

    const [copy, setCopy] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [error, setError] = useState('');
    const email = "aa8414952@gmail.com";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email).then(() => {
            setCopy(true);
            setTimeout(() => {
                setCopy(false);
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.email === "" ||
            form.name === "" ||
            form.message === "") {
            return setError("please fill the necessary fields!");
        }
    }

    return (
        <div className='flex justify-center lg:justify-evenly'>
            <div className='pb-16 pt-8 md:pt-12 bg-base-100 rounded-3xl mx-4 md:mx-0 px-4 w-full md:px-16 md:w-10/12 lg:w-1/3'>
                <div className='text-xl md:text-2xl lg:text-3xl font-extrabold mb-3 text-primary'>Contact</div>
                <form onSubmit={handleSubmit}>
                    <div className='space-y-3 mt-4 w-full'>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text font-semibold">name <span className='text-error'>*</span></span>
                            </div>
                            <input
                                type="text"
                                placeholder="your name"
                                className={`input input-bordered w-full focus:input-primary ${error && !form.name && 'input-error ring-1 ring-error'}`}
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                            />
                        </label>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text font-semibold">email <span className='text-error'>*</span></span>
                            </div>
                            <input
                                type="email"
                                placeholder="your email"
                                className={`input input-bordered w-full focus:input-primary ${error && !form.email && 'input-error ring-1 ring-error'}`}
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                            />
                        </label>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text font-semibold">Message <span className='text-error'>*</span></span>
                            </div>
                            <textarea
                                className={`textarea textarea-bordered h-32 focus:textarea-primary ${error && !form.message && 'textarea-error ring-1 ring-error'}`}
                                placeholder="Type here"
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                            >
                            </textarea>
                        </label>
                    </div>

                    {error && (
                        <div>
                            <div className="flex items-center absolute">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="size-6 text-error mx-1 my-2"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <div className="text-error text-sm font-semibold mx-1 my-2">
                                    {error}
                                </div>
                            </div>
                        </div>
                    )}

                    <div className='flex mt-10 gap-x-3'>
                        <button className='btn btn-secondary px-8' type='submit'>Send message</button>
                        {!copy
                            ?
                            <div className='btn btn-outline hover:space-x-1' onClick={copyToClipboard}>
                                <span>copy Email</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                                </svg>
                            </div>
                            :
                            <div className='btn no-animation'>
                                <span>copied</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                                </svg>
                            </div>
                        }
                    </div>
                </form>
            </div>
            <div className='justify-center items-center rounded-3xl w-1/3 hidden lg:flex'>
                <div className="mockup-code w-full">
                    <br />
                    <pre data-prefix="$" className="text-lg"><code>Let’s Build</code></pre>
                    <br />
                    <pre data-prefix=">" className="text-warning text-lg"><code>Something ..</code></pre>
                    <br />
                    <pre data-prefix="" className="bg-warning py-3 text-warning-content text-xl font-bold"><code>Extraordinary</code></pre>
                    <br />
                    <pre data-prefix=">" className="text-success text-lg"><code>Together!</code></pre>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default Contact;