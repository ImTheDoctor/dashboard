import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './auth.module.css'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault()
    console.log(email, password)
  }

  return (
    <section className={styles.login}>
      <div>
        <div>
          <h4>Sign In</h4>
          <span>Enter your email and password to sign in</span>
        </div>
        <div>
          <form onSubmit={e => onSubmit(e)}>
            <div className={styles.input_wrapper}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input type="email" className={styles.input} name="email" value={email} onChange={e => onChange(e)} />
            </div>
            <div className={styles.input_wrapper}>
              <label htmlFor="password">Password</label> <br />
              <input type="password" className={styles.input} name="password" value={password} onChange={e => onChange(e)} />
            </div>
            <input type="submit" value="Login" />
          </form>
          <p>
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Login