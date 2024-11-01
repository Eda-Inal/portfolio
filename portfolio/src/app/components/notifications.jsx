'use client'
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

function Notification({ message, type, onClose }) {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000); 
        return () => clearTimeout(timer);
    }, [onClose]);

    return ReactDOM.createPortal(
        <div
            className={`fixed top-4 right-4 p-4 rounded-md text-white shadow-md ${
                type === 'success' ? 'bg-green-500' : 'bg-red-500'
            }`}
        >
            <span>{message}</span>
            <button onClick={onClose} className="ml-4 text-lg font-bold">
                x
            </button>
        </div>,
        document.getElementById('notification-root')
    );
}

export default Notification;
