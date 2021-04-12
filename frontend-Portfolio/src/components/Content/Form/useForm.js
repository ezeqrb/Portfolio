import axios from 'axios';
import React , {useState, useEffect} from 'react';

const useForm  = (callback , validate) => {

    const [values, setValues] = useState({
        name:"",
        email:"",
        message:""
    })
    const [errors, setErrors] = useState({})

    const [isSubmitting , setSubmitting] = useState(false);

    const handleChange = e => {
        let {value , name} = e.target
            
        setValues({
            ...values,
            [name]: value
        })
       
    }
    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        setSubmitting(true)
        sendEmail()
    }
    const sendEmail = () => {
        console.log("enviando data")
        axios.post("http://localhost:3001/contactform", values )
        .then (response =>{
            console.log(response)
        })
        .catch(errors => {
            console.log(errors)
        })
    }
    useEffect(()=>{
        if(Object.keys(errors).length === 0 && isSubmitting ){
            callback()
            
        }
    },[errors]) 


    return { handleChange , values , errors , handleSubmit }
}

export default useForm
