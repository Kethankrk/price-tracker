import { useState } from "react";


function Signup(){

    const [signupFormData, updateSignupFormData] = useState({
        firstname: "", lastname: "", email: "", phone: "", pass:"", conformPass:""
    })


    function signupSubmit(e){
        e.preventDefault()
    }

    function signupUpdate(event){
        updateSignupFormData(prev => ({...prev , [event.target.name]: event.target.value}) )
        console.log(signupFormData)
    }
    
    return(
        <section className="sign-up">
            <div className="signup-card">
                <form className="my-signup-form" onSubmit={signupSubmit}>

                    <label htmlFor="firstname" className="signup-label">First Name</label>
                    <input 
                        type="text" 
                        className="firstname" 
                        id="firstname"
                        name="firstname"
                        value={signupFormData.firstname}
                        onChange={signupUpdate}
                    />

                    <label htmlFor="lastname" className="signup-label">Last Name</label>
                    <input 
                        type="text" 
                        className="lastname" 
                        id="lastname"
                        name="lastname"
                        value={signupFormData.lastname}
                        onChange={signupUpdate}
                    />

                    <label htmlFor="email" className="signup-label">Email</label>
                    <input 
                        type="email" 
                        className="email" 
                        id="email"
                        name="email"
                        value={signupFormData.email}
                        onChange={signupUpdate}
                    />

                    <label htmlFor="phone" className="signup-label">Phone Number</label>
                    <input 
                        type="text" 
                        className="phone" 
                        id="phone"
                        name="phone"
                        value={signupFormData.phone}
                        onChange={signupUpdate}
                    />

                    <label htmlFor="" className="signup-label">Password</label>
                    <input 
                        type="password" 
                        className="signup-pass" 
                        id="signup-pass"
                        name="pass"
                        value={signupFormData.pass}
                        onChange={signupUpdate}
                    />

                    <label htmlFor="signup-pass-conform" className="signup-label">Conform Password</label>
                    <input 
                        type="password" 
                        className="signup-pass-conform" 
                        id="signup-pass-conform"
                        name="conformPass"
                        value={signupFormData.conformPass}
                        onChange={signupUpdate}
                    />

                </form>
            </div>
        </section>
    )
}

export default Signup;