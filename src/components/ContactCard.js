import React from 'react';
import user from "../images/user.png"
const ContactCard = (props) => {
    //console.log(props);
    const {id, name, email} = props.contact; 
return (
    <div class="item">
        <div class="ui grid">
            <div class="four wide column">
            <img className="ui avatar image" src={user} alt="user {id}"/>
            </div>
            <div class="four wide column">{name}</div>
            <div class="four wide column">{email}</div>
            <div class="four wide column">
                <i className="right floated trash alternate outline icon red"></i>
            </div>
        </div> 
    </div>
);
}

export default ContactCard;