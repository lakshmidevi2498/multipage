import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [numberError, setNumberError] = useState("");
    const [addressError, setAddressError] = useState("");
    const [messageError, setMessageError] = useState("");
    const [showModal, setShowModal] = useState(false);

  
 

    const validateName = (value) => {
        setName(value);
        console.log("Validating name:", value);
        if (value.trim() === "") {
            setNameError("Please enter your name");
        } else {
            setNameError("");

        }
    };

    const validateEmail = (value) => {
        setEmail(value);
        console.log("Validating name:", value);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            setEmailError("Please enter a valid email address");
        } else {
            setEmailError("");
           
        }
    };

    const validateNumber = (value) => {
        setNumber(value);
        console.log("Validating name:", value);
        const mobileRegex = /^[6789][0-9]{9}/;
        if (!mobileRegex.test(value)) {
            setNumberError("Please enter a valid 10-digit mobile number ,it should start with 6,7,8,9");
        } else {
            setNumberError("");
            
        }
    };

    const validateAddress = (value) => {
        setAddress(value);
        console.log("Validating name:", value);
        if (value.trim() === "") {
            setAddressError("Please enter your address");
        } else {
            setAddressError("");
        }
    };

    const validateMessage = (value) => {
        setMessage(value);
        console.log("Validating name:", value);
        if (value.trim() === "") {
            setMessageError("Please enter your message");
        } else {
            setMessageError("");
        }
    };

    const HandleSubmit = () => {
        validateName(name);
        validateEmail(email);
        validateNumber(number);
        validateAddress(address);
        validateMessage(message);
            
            if (name != "" & email != "" & number != "" & address != "" & message != "") {
              setShowModal(true);
              setName("");
              setEmail("");
              setNumber("");
              setAddress("");
              setMessage("");
            }
          
    };

    const closeModal = () => {
        setShowModal(false); 

    };

    return (
        
    <div className="container card mt-5 formm col-12 border-0">
         <div className="d-flex justify-content-between ">
            <div className="row justify-content-center col-12 col-md-6 mx-auto " >
               
                    <h1 className="text-center my-4">Get In Touch With Us</h1>
                    <div className="row g-3">
                        <div className="col-12">
                            <label htmlFor="fullname" className="form-label"> Fullname </label>
                            <input type="text"
                                className="form-control"id="fullname" value={name}onChange={(e) => validateName(e.target.value)}/>
                            {nameError && <p className="text-danger">{nameError}</p>}
                        </div>
                        <div className="col-12">
                            <label htmlFor="email" className="form-label"> E-mail</label>
                            <input type="text"className="form-control" id="email"value={email}onChange={(e) => validateEmail(e.target.value)} />
                            {emailError && <p className="text-danger">{emailError}</p>}
                        </div>
                        <div className="col-12">
                            <label htmlFor="phone" className="form-label"> Phone number</label>
                            <input type="text" className="form-control" id="phone" value={number} onChange={(e) => validateNumber(e.target.value)} />
                            {numberError && <p className="text-danger">{numberError}</p>}
                        </div>
                        <div className="col-12">
                            <label htmlFor="address" className="form-label"> Address</label>
                            <input type="text" className="form-control" id="address" value={address} onChange={(e) => validateAddress(e.target.value)} />
                            {addressError && <p className="text-danger">{addressError}</p>}
                        </div>
                        <div className="col-12">
                            <label htmlFor="message" className="form-label"> Message </label>
                            <textarea className="form-control" rows="5" id="message"value={message} onChange={(e) => validateMessage(e.target.value)} ></textarea>
                            {messageError && <p className="text-danger">{messageError}</p>}
                        </div>
                        <div className="col-12 text-center">
                            <button type="button" className="btn btn-success my-3" onClick={HandleSubmit}>
                                Submit
                            </button>
                        </div>
                    </div>
            
            </div>
            <div class="container tree col-6 mt-5">
                <img src="./assets/images/fimg.jpg" style={{maxWidth:"100% ",height:"auto"}}/>
            </div>
     </div>
  
     {showModal && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header d-flex justify-content-between">
                <h5 className="modal-title ">your Message Sent Securely</h5>
                <button type="button" className="close btn fs-4 fw-4" close="modal" onClick={closeModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body  text-center bg-info">
                <h4>THANKS FOR YOUR FEEDBACK</h4>
              </div>
              <div className="text-end m-3      ">
                <button type="button" className="btn btn-danger" onClick={closeModal}>Close</button>
               
              </div>
            </div>
          </div>
        </div>
      )}
      
    </div>
        
    );
};  
export default Form;        



































 
// import React, { useState } from "react";
// import debounce from "lodash.debounce"; // Import debounce function from lodash

// import 'bootstrap/dist/css/bootstrap.css';

// const Form = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [number, setNumber] = useState("");
//     const [address, setAddress] = useState("");
//     const [message, setMessage] = useState("");
//     const [nameError, setNameError] = useState("");
//     const [emailError, setEmailError] = useState("");
//     const [numberError, setNumberError] = useState("");
//     const [addressError, setAddressError] = useState("");
//     const [messageError, setMessageError] = useState("");
//     const [showModal, setShowModal] = useState(false);

//     // Debounce function to delay execution of validation functions
//     const validateWithDebounce = debounce((value, validator) => {
//         validator(value);
//     }, 300); // Adjust the delay time as needed (e.g., 300 milliseconds)

//     // Validation functions
//     const validateName = (value) => {
//         setName(value);
//         console.log(value)
//         if (value.trim() === "") {
//             setNameError("Please enter your name");
//         } else {
//             setNameError("");
//         }
//     };

//     const validateEmail = (value) => {
//         setEmail(value);
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(value)) {
//             setEmailError("Please enter a valid email address");
//         } else {
//             setEmailError("");
//         }
//     };

//     const validateNumber = (value) => {
//         setNumber(value);
//         const mobileRegex = /^[6789][0-9]{9}/;
//         if (!mobileRegex.test(value)) {
//             setNumberError("Please enter a valid 10-digit mobile number, it should start with 6, 7, 8, 9");
//         } else {
//             setNumberError("");
//         }
//     };

//     const validateAddress = (value) => {
//         setAddress(value);
//         if (value.trim() === "") {
//             setAddressError("Please enter your address");
//         } else {
//             setAddressError("");
//         }
//     };

//     const validateMessage = (value) => {
//         setMessage(value);
//         if (value.trim() === "") {
//             setMessageError("Please enter your message");
//         } else {
//             setMessageError("");
//         }
//     };

//     const handleInputChange = (e, validator) => {
//         const { value } = e.target;
//         validateWithDebounce(value, validator); // Execute validation with debounce
//     };

    // const handleSubmit = () => {

    //     validateName(name);
    //     validateEmail(email);
    //     validateNumber(number);
    //     validateAddress(address);
    //     validateMessage(message);

    //     if (!nameError && !emailError && !numberError && !addressError && !messageError) {
    //         console.log("Form submitted successfully!");
    //         setShowModal(true);
    //         setName("");
    //         setEmail("");
    //         setNumber("");
    //         setAddress("");
    //         setMessage("");
    //     }
    // };

//     const closeModal = () => {
//         setShowModal(false);
//     };

//     return (
//         <div className="container card mt-5 formm col-12">
//             <div className="d-flex justify-content-between">
//                 <div className="row justify-content-center col-12 col-md-6 mx-auto">
//                     <h1 className="text-center my-4">Get In Touch With Us</h1>
//                     <div className="row g-3">
//                         <div className="col-12">
//                             <label htmlFor="fullname" className="form-label">
//                                 Fullname
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 id="fullname"
//                                 value={name}
//                                 onChange={(e) => handleInputChange(e, validateName)}
//                             />
//                             {nameError && <p className="text-danger">{nameError}</p>}
//                         </div>
//                         <div className="col-12">
//                             <label htmlFor="email" className="form-label">
//                                 E-mail
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 id="email"
//                                 value={email}
//                                 onChange={(e) => handleInputChange(e, validateEmail)}
//                             />
//                             {emailError && <p className="text-danger">{emailError}</p>}
//                         </div>
//                         {/* Other form fields */}
//                         <div className="col-12 text-center">
//                             <button type="button" className="btn btn-success my-3" onClick={handleSubmit}>
//                                 Submit
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {showModal && (
//                 <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
//                     <div className="modal-dialog" role="document">
//                         <div className="modal-content">
//                             <div className="modal-header d-flex justify-content-between">
//                                 <h5 className="modal-title text-warning">Your Message Sent Securely</h5>
//                                 <button type="button" className="close btn fs-4 fw-4" close="modal" onClick={closeModal}>
//                                     <span aria-hidden="true">&times;</span>
//                                 </button>
//                             </div>
//                             <div className="modal-body  text-center bg-info">
//                                 <h4>THANKS FOR YOUR FEEDBACK</h4>
//                             </div>
//                             <div className="text-end m-3">
//                                 <button type="button" className="btn btn-primary" onClick={closeModal}>Close</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };





 