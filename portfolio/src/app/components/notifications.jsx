'use client'
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';
import accept from '../../../public/images/notifications/accept.png';
import cancel from '../../../public/images/notifications/cancel.png';

function Notification({ message, type, onClose }) {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000); 
        return () => clearTimeout(timer);
    }, [onClose]);

    return ReactDOM.createPortal(
        <div
            className={`fixed top-4 right-1 p-3 rounded-md text-black shadow-md flex items-center space-x-3 ${
                type === 'success' ? 'bg-secondary' : 'bg-red-500'
            }`}
        >
            <Image
                src={type === 'success' ? accept : cancel}
                alt={type === 'success' ? 'Success icon' : 'Error icon'}
                width={20}
                height={20}
            />
            <span>{message}</span>
        </div>,
        document.getElementById('notification-root')
    );
}

export default Notification;
