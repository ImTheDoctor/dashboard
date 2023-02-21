import React, {useState} from 'react'
import styles from './auth.module.css'

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  })

  const { email, password, name } = formData

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault()
    console.log(email, password, name)
  }
  
  return (
    <section className={styles.register}>
      <div>
        <div>
          <h4>Join us today</h4>
          <span>Enter your email and password to register</span>
        </div>
        <div>
          <form onSubmit={e => onSubmit(e)}>
            <div>
              <label htmlFor="name">Name</label>
              <input type="name" name="name" value={name} onChange={e => onChange(e)} />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" value={email} onChange={e => onChange(e)} />
            </div>
            <div>
              <label htmlFor="password">Password</label> <br />
              <input type="password" name="password" value={password} onChange={e => onChange(e)} />
            </div>
            <input type="submit" value="Register" />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register