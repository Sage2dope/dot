import { useState, useEffect } from "react";
import api from "../api";
import Contact from "./Contact";
import '../styles/Form.css';
import { motion } from "framer-motion";
import { FiCloudLightning } from "react-icons/fi";
import Header from "./Header";
import Support from "./Support";



// Form component
function Form() {
    const [contacts, setContacts] = useState([]);
    const [name , setName] = useState('');
    const [phone , setPhone] = useState('');
    const [address , setAddress] = useState('');
    const [editContactId, setEditContactId] = useState(null);
    

    // Fetch contacts from API
    useEffect(() => {
        getContacts();
    }, []);



    // Get contacts from API and set the state
    const getContacts = () => {
        api 
            .get('/api/contacts/')
            .then((res) => res.data)
            .then((data) => {
                setContacts(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };


    // Delete contact by id from API passed through by the serializer, and update the state

    const deleteContact = (id) => {
        api
            .delete(`api/contacts/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Contact deleted successfully");
                else alert('Something went wrong');
                getContacts();
            })
            .catch((err) => alert(err));
    }
    
    // Add contact to API and update the state
    const addContact = (e)=> {
        e.preventDefault();
        api
            .post('/api/contacts/', { name, phone, address })
            .then((res) => {
                if (res.status === 201) alert("Contact added successfully");
                else alert('Something went wrong');
                getContacts();
                resetForm();
            })
            .catch((err) => alert(err));
    };


    // Update contact by id from API passed through by the serializer, and update the state
    const updateContact = (e) => {
        e.preventDefault();
        api
            .put(`api/contacts/update/${editContactId}/`, { name, phone, address })
            .then((res) => {
                if (res.status === 200) alert("Contact updated successfully");
                else alert('Something went wrong');
                getContacts();
                resetForm();
            })
            .catch((err) => alert(err));
    };
    

    // Edit contact by id from API passed through by the serializer, and update the state
    const editContact = (contact) => {
        setName(contact.name);
        setPhone(contact.phone);
        setAddress(contact.address);
        setEditContactId(contact.id);
    };
    
    // Reset the form after the contact is submitted or updated
    const resetForm = () => {
        setName('');
        setPhone('');
        setAddress('');
        setEditContactId(null);
    };

    // Return the form and contact card with tailwind css design
    return (
        <div>
            <Header />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className="lg:col-span-2  py-4 px-4 bg-white rounded-2xl shadow-2xl">
                <h2 className="text-2xl font-bold mb-4">{editContactId ? "Edit Contact" : "Create New Contact"}</h2>
                <form onSubmit={editContactId ? updateContact : addContact}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                    <input
                        className="form-input mt-1 block w-full"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter Full Name"
                        required
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <label htmlFor="tel" className="block text-sm font-medium text-gray-700 mt-4">Phone Number:</label>
                    <textarea
                        className="form-input mt-1 block w-full"
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter Phone number"
                        required
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                    />
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mt-4">Address:</label>
                    <textarea
                        className="form-input mt-1 block w-full"
                        id="address"
                        name="address"
                        placeholder="Street, City, State, Postal Code"
                        required
                        onChange={(e) => setAddress(e.target.value)}
                        value={address}
                    />
                    <input className="form-button mt-6" type="submit" value={editContactId ? "Update" : "Submit"} />
                    {editContactId && <button className="form-button mt-2 bg-gray-500 hover:bg-gray-700" onClick={resetForm}>Cancel</button>}
                </form>
            </div>
            <div className="bg-gray-300 px-4 py-12 shadow-2xl rounded-lg">
                <ContactCard contacts={contacts} onDelete={deleteContact} onEdit={editContact} />
            </div>
        </div>
        <Support />
        </div>
    );
};

// Contact card component for displaying saved and updated contacts
const ContactCard = ({ contacts, onDelete, onEdit }) => {
    return (
        <div className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-slate-800 shadow-2xl p-0.5 transition-all duration-500 hover:scale-[1.01] hover:bg-slate-800/50">
            <div className="relative z-10 flex flex-col items-center justify-center overflow-hidden rounded-[7px] bg-slate-900 p-8 transition-colors duration-500 group-hover:bg-slate-800">
                <FiCloudLightning className="relative z-10 mb-10 mt-2 rounded-full border-2 border-indigo-500 bg-slate-900 p-4 text-7xl text-indigo-500" />
                <h4 className="relative z-10 mb-4 w-full text-3xl font-bold text-slate-50">
                    My Contact List
                </h4>


                <div className="p-4 bg-slate-500 rounded-lg shadow-2xl mt-8">
                    {contacts.length === 0 ? (
                        <p className="text-slate-50">No contacts found</p>
                    ) : (
                        contacts.map((contact) => (
                            <Contact
                                contact={contact}
                                onDelete={onDelete}
                                onEdit={onEdit}
                                key={contact.id}
                            />
                        ))
                    )}
                </div>
            </div>
            <motion.div
                initial={{ rotate: "0deg" }}
                animate={{ rotate: "360deg" }}
                style={{ scale: 1.75 }}
                transition={{
                    repeat: Infinity,
                    duration: 3.5,
                    ease: "linear",
                }}
                className="absolute inset-0 z-0 bg-gradient-to-br from-red-600 via-indigo-200/0 to-red-300 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
        </div>
    );
};

export default Form;