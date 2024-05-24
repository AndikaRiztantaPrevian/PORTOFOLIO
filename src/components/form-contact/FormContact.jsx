import React, { useState } from 'react';
import emailjs from "@emailjs/browser";

const FormContact = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        const errors = {};
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        if (!formData.name) {
            errors.name = 'Name is required';
        }
        if (!formData.subject) {
            errors.subject = 'Subject is required';
        }
        if (!formData.message) {
            errors.message = 'Message is required';
        }
        return errors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsProcessing(true);
        setErrors({});

        try {
            await emailjs.sendForm('service_9x8r57j', 'template_5krst6t', e.target, 'hohNo44W_cZa5A6Z4');
            setFormData({ email: '', name: '', subject: '', message: ''});
            alert('Email sent successfully');
        } catch (error) {
            console.error('Failed to send email:', error);
            alert('Failed to send email. Please try again.');
        } finally {
            setIsProcessing(false);
        }
    };

  return (
    <form onSubmit={handleSubmit}>
        <div className="w-96 space-y-9 mt-5" data-aos="fade-out" data-aos-duration="2000" data-aos-offset="200">
            <div className='w-full flex space-x-2'>
                <div className="relative h-11 w-1/2">
                    <input id='email' type="email" name="email" value={formData.email} onChange={handleChange} placeholder="example@gmail.com" className="placeholder-font-custom peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"/>
                    <label className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">Email</label>
                    {errors.email && <p className="text-red-400 mt-1 text-xs">{errors.email}</p>}
                </div>
                <div className="relative h-11 w-1/2">
                    <input id='name' type="name" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="placeholder-font-custom peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"/>
                    <label className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">Name</label>
                    {errors.name && <p className="text-red-400 mt-1 text-xs">{errors.name}</p>}
                </div>
            </div>
            <div className="relative h-11 w-full">
                <input id='subject' name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" className="placeholder-font-custom peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"/>
                <label className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">Subject</label>
                {errors.subject && <p className="text-red-400 mt-1 text-xs">{errors.subject}</p>}
            </div>
            <div className="relative w-full">
                <textarea id='message' name="message" value={formData.message} onChange={handleChange} placeholder="Leave a message ..." className="placeholder-font-custom peer h-28 w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100 resize-none"/>
                <label className="pointer-events-none absolute left-0 -top-1.5 flex w-full select-none !overflow-visible truncate text-[11px] font-normal text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:after:scale-x-100 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">Message</label>
                {errors.message && <p className="text-red-400 -mt-1 text-xs">{errors.message}</p>}
            </div>
            <div className="relative flex justify-end">
                <button type="submit" id="buttonSubmit" className="border border-white rounded-sm text-sm px-4 py-2 hover:bg-white/80 hover:text-black hover:font-bold transition flex items-center">
                    {isProcessing ? (
                        <><div className='animate-pulse flex'><svg className='fill-white animate-spin me-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="M.415,12.051a12,12,0,0,1,23.17-4.364L20.791,8.779a9,9,0,1,0,0,6.545l2.794,1.092A12,12,0,0,1,.415,12.051Z"/></svg> <p className=''>Processing ...</p></div></>
                    ) : (
                        'Send message'
                    )}
                </button>
            </div>
        </div>
    </form>
  )
}

export default FormContact