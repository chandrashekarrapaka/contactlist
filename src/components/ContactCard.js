import React from 'react';
import user from '../images/user.png';

const ContactCard = (props) => {
    //const  = props.contact;
    console.log(props, "PROPSs");
    const { id, Email, name } = props.contact;

    return (
        <div>
            <div className="item">
                <img className="ui avatar image" src={user} alt="user" />
                <div className="content">
                    <div className="header">{name}</div>
                    <div>
                        {Email}
                    </div>
                    <div>
                        {id}
                    </div>
                </div>


            </div>
            <i className="trash alternate outline icon" style={{ color: "red", marginTop: "7px" }} onClick={() => props.clickHandler(id)}></i>
        </div>
    );
};

export default ContactCard
