'use client';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email.includes('@')) newErrors.email = 'Invalid email address';
        if (!formData.message) newErrors.message = 'Message cannot be empty';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    console.log('User ID:', process.env.NEXT_PUBLIC_EMAILJS_USER_ID);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            }, process.env.NEXT_PUBLIC_EMAILJS_USER_ID)
            .then((response) => {
                console.log('Email sent successfully:', response.status, response.text);
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((err) => {
                console.error('Failed to send email:', err);
                alert('Failed to send message, please try again.');
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col mt-8 space-y-4 sm:space-y-3 lg:space-y-6">
            <InputField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
            />
            <InputField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
            />
            <InputField
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                isTextarea
            />
            <button
                type="submit"
                className="lg:w-2/4 sm:w-3/4 h-12 rounded-lg transition bg-secondary text-black hover:bg-[#77ffe8]"
            >
                Send Message
            </button>
        </form>
    );
}

function InputField({ label, name, value, onChange, error, isTextarea = false }) {
    return (
        <div className="sm:w-3/4 lg:w-2/4 flex flex-col">
            <label className="mb-2">{label}</label>
            {isTextarea ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="md:h-28 p-3 rounded-lg border border-gray-300 focus:outline-secondary text-black"
                />
            ) : (
                <input
                    type="text"
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="h-12 p-3 rounded-lg border border-gray-300 focus:outline-secondary text-black"
                />
            )}

            <div className="text-secondary text-sm mt-1 min-h-[1rem]">
                {error ? error : <>&nbsp;</>}
            </div>
        </div>
    );
}

export default ContactPage;
