import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label >Profile Picture</label>
          <div className="settingsPP">
            <img src="../../public/logo.png" alt="" />
            <label htmlFor="fileInput">
            <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
          </div>
          <label>UserName</label>
          <input type="text" placeholder="Your Name"/>
          <label>Email</label>
          <input type="email" placeholder="Your email"/>
          <label>Password</label>
          <input type="password"/>
          <button className="settingsButton">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
