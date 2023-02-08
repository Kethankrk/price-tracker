import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function LoginPage(){

    const [formData, updateFormData] = useState({
        Username: "", Password: ""
    })
    const navigate = useNavigate()

    function eventUpdate(event){
        updateFormData(prev => (
            {...prev, [event.target.name]: event.target.value }
        ))
    }

    console.log(JSON.stringify(formData))
    function submitF(e){
        e.preventDefault()

        fetch("192.168.103.159:5000/1",{
            method: 'POST',
            // mode: 'cors',
            body: JSON.stringify(formData)
        })
            .then(res => console.log(res))

        if(formData.Username != "" && formData.Password != ""){
            navigate("/userdetail")
        }
    }


    return(
        <section className="login-section">
            <div className="login-card">
                <form  className="my-form" onSubmit={submitF}>
                    <label htmlFor="user">USER NAME /  EMAIL</label>
                    <input 
                        type="text" 
                        id="user" 
                        className="username"
                        name="Username"
                        onChange={eventUpdate}
                        value={formData.Username}
                    />
                    <label htmlFor="pas">PASSWORD</label>
                    <input 
                        type="password" 
                        id="pas" 
                        className="password" 
                        name="Password"
                        onChange={eventUpdate}
                        value={formData.Password}
                    />
                    <Link to="/signup">register</Link>
                    <button className="login-btn">Log in</button>
                </form>
            </div>
        </section>
    )
}

export default LoginPage;