import "./register.css"

export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
        <label >User Name</label>
            <input className="registerInput" type="emaitextl" placeholder="Enter your name..."/>
            <label >Email</label>
            <input className="registerInput" type="email" placeholder="Enter your email..."/>
            <label >Password</label>
            <input className="registerInput" type="password"  placeholder="Enter your password..." />
            <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton">Login</button>
    </div>
  )
}
