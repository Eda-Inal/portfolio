'use client';
import React, { useState } from 'react';

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form submitted:', formData);
            setFormData({ name: '', email: '', message: '' });
            alert('Message sent successfully!');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col mt-8 space-y-6">
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
                className="w-2/4 h-12 rounded-lg transition bg-secondary text-black hover:bg-[#77ffe8]"
            >
                Send Message
            </button>
        </form>
    );
}


function InputField({ label, name, value, onChange, error, isTextarea = false }) {
    return (
        <div className="w-2/4 flex flex-col">
            <label className="mb-2 font-medium">{label}</label>
            {isTextarea ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="h-28 p-3 rounded-lg border border-gray-300 focus:outline-secondary text-black"
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
