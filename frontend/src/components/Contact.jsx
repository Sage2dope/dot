import React from "react";
import '../styles/Contact.css';

function Contact({ contact, onDelete, onEdit }) {
    const formattedDate = new Date(contact.created_at).toLocaleDateString('en-US')

    return (
        <div className="p-4 my-4 border border-gray-300 rounded-lg shadow-md bg-white">
            <p className="text-lg font-semibold text-gray-800">Name: {contact.name}</p>
            <p className="text-gray-600">Phone Number: {contact.phone}</p>
            <p className="text-gray-600">Address: {contact.address}</p>
            <p className="text-sm text-gray-500">{formattedDate}</p>
            <div className="mt-4">
                <button
                    className="px-4 py-2 mr-2 text-white bg-red-500 rounded hover:bg-red-700"
                    onClick={() => onDelete(contact.id)}
                >
                    Delete
                </button>
                <button
                    className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                    onClick={() => onEdit(contact)}
                >
                    Edit
                </button>
            </div>
        </div>
    );
}

export default Contact;