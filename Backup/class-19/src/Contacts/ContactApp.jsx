import React from "react";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";

let ContactApp =()=>{
    return <>
    <div className="container">
        <div className="row">
            <div className="col-8">
                {/*ContactList*/}
                <ContactList/>
            </div>
            <div className="col-4">
                {/*ContactDetails*/}
                <ContactDetails/>
            </div>
        </div>
    </div>
    </>
}
export default ContactApp