 import "./topbar.css"
 
 export default function  Topbar() {
   return (
     <div className='top'>
        <div className="topLeft"><i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-solid fa-square-envelope"></i>
        <i className="fa-brands fa-instagram"></i>
        <img className="logo" src="./logo.png" alt="leapfrog logo" />
        </div>
        <div className="topCenter">
            
            
        </div>
        <div className="topRight">
        <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT </li>
                <li className="topListItem">SERVICE</li>
                <li className="topListItem">TEAM</li>
                <li className="topListItem">CONTACT</li>
            </ul>
        </div>
        
     </div>
   )
 }
 