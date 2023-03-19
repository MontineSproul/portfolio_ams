import React, {useState} from 'react';

function Contact () {
    return (
        <div>
            <form>
            <h1>Contact Me</h1>
            <p><label>Name:</label>
            <input type="text"/></p>
            <br/>
    <p><label>Email:</label>
    <input type="text"/></p>
    <br/>
    <p><label >Message:</label>
    <input type="text" className="message"/></p>
    <br/>
    {/* on click send message and display your message has been sent  */}
    {/* <button onClick = {()=> sendMessage()}>Send</button> */}
            </form>
        </div>
    )
}

export default Contact;