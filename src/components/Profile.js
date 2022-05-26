import React from 'react'

import "./Profile.css"

import { useState } from "react"
const initialState = {
    name: "",
    email: '',
    location: "",
    company: "",
    branch: "",
    loginId: ""
}
function Profile() {

    const [state, setState] = useState(initialState)



    const handleChange = ({ target: { value, name } }) => {
        setState({ ...state, [name]: value })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(state)
    }

    return (
        <div className='profile-container'>
            <div className='profile-header'>
                <h1 style={{color:"white"}}>Profile</h1>
                <button type="button" className='edit-btn'>Edit</button>
            </div>
            <div className='forms-container'>
            <img src="https://res.cloudinary.com/dpro7vkjb/image/upload/v1653473013/profile1_obc11l.png" alt="profile" className="profile-img" />
            <div className='profile-details'>
                <h1 style={{color:"white"}}>Personal Details </h1>
                <hr style={{width:"100%"}} className="hr-line" />
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label>Name</label>
                        <input style={{ backgroundColor: "transparent", color: "white" }} name="name" value={state.name} onChange={handleChange} type="text" placeholder="Name.." />

                    </div>
                    <div className="input-container">
                        <label>Email</label>
                        <input style={{ backgroundColor: "transparent", color: "white" }} name="email" value={state.email} onChange={handleChange} type="text" placeholder="E-Mail.." />
                    </div>
                    <div className="input-container">
                        <label>Location</label>
                        <input style={{ backgroundColor: "transparent", color: "white" }} name="location" value={state.location} onChange={handleChange} type="email" placeholder="Location.." />
                    </div>
                    <h1 style={{color:"white"}}>Comapny Details</h1>
                    <hr style={{width:"100%"}}  className="hr-line" />
                    <div className="input-container">
                        <label>Company</label>
                        <input style={{ backgroundColor: "transparent", color: "white" }} name="company" value={state.company} onChange={handleChange} placeholder="Company.." />
                        </div>
                    <div className="input-container">
                        <label>Branch</label>
                        <input style={{ backgroundColor: "transparent", color: "white" }} name="branch" value={state.branch} onChange={handleChange} placeholder="Branch.." />
                    </div>
                    <h1 style={{color:"white"}}>Account Details</h1>
                    <hr style={{width:"100%"}} className="hr-line"  />
                    <div className="input-container">
                        <label>Login Id</label>
                        <input style={{ backgroundColor: "transparent", color: "white" }} name="loginId" value={state.loginId} onChange={handleChange} placeholder="LoginId.." />
                    </div>
                    <button className="btn-lg" type="submit" >Submit</button>
                </form>
            </div>
            </div>


        </div>
    )
}

export default Profile
