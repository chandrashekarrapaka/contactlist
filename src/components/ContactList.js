import React from 'react'
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';

const ContactList = (props) => {

    const deleteContactHandler = (id) => {
        props.getID(id);
    }

    const contacts = [{
        id: "1",
        Email: "ckbkajs@gmail.com",
        name: "chnadu",
    }]

    const renderContactList = props.contacts.map((contact) => {
        console.log({ contact });
        return (
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />

        );
    })
    return (
        <div className="main">
            <br />
            <h2>
                Contact List
                <Link to="/add">
                    <button className="ui button blue right" >Add Contact</button>
                </Link>
            </h2>
            <div className="ui called list">{renderContactList}</div>
        </div >
    )
}

export default ContactList
