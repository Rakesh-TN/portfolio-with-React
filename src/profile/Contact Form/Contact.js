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
        <main className='d-flex flex-column justify-content-center align-items-center min-vh-100 bgcontactimg'>
            <div>
                <p className='text-light h1 p-2'>Get in Touch</p>
            </div>
            <div className='card p-3 bg-black'>
                <form ref={form} onSubmit={sendEmail}>
                    <tr>
                        <td><label className='text-light'>Name</label></td>
                        <td><input type="text" name="from_name" className='form-label' /></td>
                    </tr>
                    <tr>
                        <td><label className='text-light'>Email </label></td>
                        <td><input type="email" name="from_email" className='form-label' /></td>
                    </tr>
                    <tr>
                        <td><label className='text-light'>Message </label></td>
                        <td><textarea name="message" className='form-label' /></td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <div className='text-center'>
                                <input className='btn btn-success mt-5 ' type="submit" value="Send" />
                            </div>
                        </td>
                        <td>

                        </td>
                    </tr>
                </form>
            </div>
        </main>
    )
}

export default Contact