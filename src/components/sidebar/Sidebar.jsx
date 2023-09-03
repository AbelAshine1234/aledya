import "./sidebar.css";
import logo from "../assets/logo.png";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">SOME ABOUT LEAPFROG</span>
        <img className="sideimg" src={logo} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          odit fuga molestias natus minus, animi ratione! Laudantium
          perspiciatis voluptates temporibus! Sequi ad fugit pariatur aliquid
          reprehenderit ipsam, nihil inventore aliquam.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">OUR WORKS</span>
        <ul className="sidebarList">
          <li className="listItem">life</li>
          <li className="listItem">life</li>
          <li className="listItem">life</li>
          <li className="listItem">life</li>
          <li className="listItem">life</li>
          <li className="listItem">life</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CONTACT US</span>
        <div className="sidebarsocial">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
          <i className="sidebarIcon fa-solid fa-square-envelope"></i>
          <i className="sidebarIcon    fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}
