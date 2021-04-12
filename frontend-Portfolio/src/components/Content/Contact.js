import React , {useState}from 'react'
import './Card.css'
import { motion } from "framer-motion"
import ContactForm from './Form/ContactForm'
import SubmittedForm from './Form/SubmittedForm'
import './Contact.css'
import { useMediaQuery } from 'react-responsive'




export default function Contact() {
 
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  const isMobile = useMediaQuery({
    query: '(max-device-width: 1223px)'
  })


    const [isSubmitted , setIsSubmitted] = useState(false)

    function submitForm(){
      setIsSubmitted(true);
    }

    return (
      <motion.div
      initial={{ opacity: 0 , x: -400}}
      animate={{opacity: 1, x:0 }}
      exit={{ opacity: 0, x: -400}}
      >
          <div className={ isDesktopOrLaptop ? "Card" : "Card-movile" }>
            <div className="container">
              <div>
                {!isSubmitted ? <ContactForm submitForm={submitForm} /> : <SubmittedForm />}
              </div>
              
            </div>
          </div>

      </motion.div>
    );
  }
  
