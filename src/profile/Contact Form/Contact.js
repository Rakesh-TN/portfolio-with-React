import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jdm3kkc', 'template_vyf69no', form.current, 'wPkRCg-AS-14oUwsD')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <main className='d-flex flex-column justify-content-center align-items-center min-vh-100 bgcontactimg' id='Contact'>
            <div>
                <p className='text-light h1 p-2'>Get in Touch</p>
            </div>
            <div className='card p-4 bg-black'>
                <div className='d-flex justify-content-center'>
                <form ref={form} onSubmit={sendEmail}>
                    <tr>
                        <td><label className='text-light'>Name:</label></td>
                        <td><input type="text" name="from_name" className='form-label' required/></td>
                    </tr>
                    <tr>
                        <td><label className='text-light'>Email:</label></td>
                        <td><input type="email" name="from_email" className='form-label' required/></td>
                    </tr>
                    <tr>
                        <td valign='top'><label className='text-light messageTitle'>Message: </label></td>
                        <td><textarea name="message" className='form-label messageBox' required /></td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <div className='text-center'>
                                <input className='btn btn-success' type="submit" value="Send" />
                            </div>
                        </td>
                    </tr>
                </form>
                </div>
            </div>
        </main>
    )
}

export default Contact