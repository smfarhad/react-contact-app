import React from 'react';
import user from "../images/user.png"
const ContactCard = (props) => {
    //console.log(props);
    const {id, name, email} = props.contact; 
return (
    <div className="item">
        <div className="ui grid">
            <div className="four wide column">
            <img className="ui avatar image" src={user} alt={'user-'+id} />
            </div>
            <div className="four wide column">{name}</div>
            <div className="four wide column">{email}</div>
            <div className="four wide column">
                <i className="ui primary right floated trash alternate outline icon red"></i>
            </div>
        </div> 
    </div>
);
}

export default ContactCard;