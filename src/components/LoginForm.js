import React, { useState } from 'react'
import LoginHeader from './LoginHeader'
import './LoginForm.css'
import { Link, useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'


function LoginForm() {

  const initialState = {
    userName: '',
    password: '',
    showSubmitError: false,
    errorMsg: ''
  }

  const history = useHistory()

  const [state, setState] = useState(initialState)


  const onChangeEmail = (e) => {
    setState({ ...state, userName: e.target.value })

  }
  const onChangePassword = (e) => {
    setState({ ...state, password: e.target.value })
  }

  const submitForm = async (event) => {
    event.preventDefault()
    const { userName, password } = state
    const userDetails = { userName, password }

    const url = 'http://localhost:4000/users'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails)
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      onsubmitSuccess(data.jwt_token)
    } else {
      onsubmitFailure(data.error_msg)
    }

  }

  const onsubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, { expires: 30 })
    history.replace('/')
  }
  const onsubmitFailure = errorMsg => {
    setState({ showSubmitError: true, errorMsg })
  }

  return (
    <div className='bg-container'>
      <LoginHeader />
      <div className='card-container'>
        <h1 className='heading'>Ensuring Social Distancing <br /> During <span className='covid-19'>COVID 19</span></h1>
        <form className='form-container' onSubmit={submitForm}>
          <input className='input-field' type='text' placeholder='Email' onChange={onChangeEmail} value={state.userName} />
          <input className='input-field' type='password' placeholder='Password' onChange={onChangePassword} value={state.password} />
          <div className='forgot-container'>
            <Link to='/forgotPassword' style={{ textDecoration: 'none' }}>
              <p className='forgot-password'>Forgot Password?</p>
            </Link>
            <Link to='/allzones'>
              <button type='submit' className='sign-in-button'>SIGN IN</button>
            </Link>
          </div>
          {state.showSubmitError && <p className='err-msg'>{state.errorMsg}</p>}
        </form>
      </div>
    </div>
  )
}

export default LoginForm