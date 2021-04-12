export default function validateForm(values){
    let errors = {};

    //Name
    if(!values.name.trim()){
        errors.name = "Name Require"
    }

    //Email
    if(!values.email){
         errors.email = "Email Require"
    }else if (!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email address is invalid"
    }

    //Message
    if(!values.message){
        errors.message = "Message Require"
    }
return errors;

}

