import React from "react";

// Contact component to display contact details and provide delete and edit buttons.
// The contact details are passed as props to the component.
// The onDelete and onEdit functions are also passed as props to the component.



function Contact({ contact, onDelete, onEdit }) {
    const formattedDate = new Date(contact.created_at).toLocaleDateString('en-US')

    return (
        <div className="p-4 my-4 border border-gray-300 rounded-lg shadow-md bg-white">
            <p className="text-gray-800"><strong><em>Name:</em></strong> {contact.name}</p>
            <p className="text-gray-800"><strong><em>Phone Number:</em></strong> {contact.phone}</p>
            <p className="text-gray-800"><strong><em>Address:</em></strong> {contact.address}</p>
            <p className="text-sm text-gray-600"><strong><em>Date Created: </em></strong>{formattedDate}</p>
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