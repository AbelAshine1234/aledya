import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label htmlFor="email">Email</label>
            <input className="loginInput" type="email" id="email" placeholder="Enter your email..."/>
            <label htmlFor="name">Password</label>
            <input className="loginInput" type="password" id="password" placeholder="Enter your password..." />
            <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton">Register</button>
    </div>
  )
}
