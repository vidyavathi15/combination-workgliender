import React, {useState} from 'react'
import Header from'./Header'
import './ForgotPassword.css'
import {Link} from 'react-router-dom'

function ForgotPassword() {
  const [email, setEmail] = useState('')
    

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
  return (
    
      <div className='bg-container'>
      <Header />
      <div className='card-container'>
        <div className='card-inner-container'>
      <h1 className='heading'>Forgot Password </h1>
      <form className='form-container'>
          <input className='input-field' type='text' placeholder='Email' onChange={onChangeEmail} value={email} />
          
          <div className='verify-container'>
            <Link to='/login' style={{textDecoration: 'none'}}>
            <p className='sign-in'>Sign In</p>
            </Link>
              <button type='button' className='verify-button'>VERIFY</button>
          </div>
      </form>
      </div>
      </div>
    </div>
  )
}

export default ForgotPassword
