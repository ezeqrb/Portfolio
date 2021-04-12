import React from 'react'
import useForm from './useForm'
import validate from './ValidateForm'
import './ContactForm.css'



const ContactForm = ({submitForm}) => {
    
    const { handleChange , values, handleSubmit, errors } = useForm( submitForm, validate );
    return (
        <div>
            
            <form className="form" onSubmit={handleSubmit}>
                <h1 className="contact-form-text">Contact Form</h1>
                <div className="name-input" >
                    <div className="first-input">
                        <input 
                            className="input-form1"
                            name="name" 
                            placeholder="Name" 
                            type="text"
                            onChange={handleChange}
                            value={values.name}
                        />
                        { errors.name && <p> {errors.name}</p> }
                    </div>

                    <div className="second-input">
                        <input 
                            className="input-form1"
                            name="email" 
                            placeholder="Email Address" 
                            type="email"
                            onChange={handleChange}
                            value={values.email}
                        />
                        { errors.email && <p> {errors.email}</p> }
                    </div>
                </div>
                <div className="message-input">
                    <div className="third-input"> 
                        <input 
                            className="input-form2"
                            name="message" 
                            placeholder="Your Message" 
                            type="text"
                            onChange={handleChange}
                            value={values.messege}
                        />
                        { errors.message && <p> {errors.message}</p> }
                    </div>
                </div>
                <button id="submit"> SEND </button>
            </form>
        </div>
    )
}

export default ContactForm
