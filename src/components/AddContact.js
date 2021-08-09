import React from 'react'

class AddContact extends React.Component{
    render(){
        return (
            <div className="ui main">
                <h2> Add Contact</h2>
                <form class="ui form">
                    <div class="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" />
                    </div>
                    <div class="field">
                        <label>Email</label>
                        <input type="text" name="Email" placeholder="Email" />
                    </div>
                    <button class="ui button" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
export default AddContact;