import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

import React from 'react';
import { NavLink } from 'react-router-dom';


const Header=({color})=>{
  const [navIconsVisible, setNavIconsVisible] = useState(true);
 const toogleBtn=()=>{

  setNavIconsVisible(false);
 }
   
      return (
        <nav className="navbar navbar-expand-lg navbar-dark "style={{backgroundColor: color}}>
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
            <img src='./assets/images/logo.svg' />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" onClick={toogleBtn}></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item d-flex  mx-3">
                  <NavLink className="nav-link" exact to="/" activeClassName="active">
                    Home
                  </NavLink><i class="fa-solid fa-house mt-2 fs-5 text-white navicon" style={{ display: navIconsVisible ? 'block' : 'none' }}></i>
                </li>
                <li className="nav-item d-flex  mx-3" >
                  <NavLink className="nav-link" to="/product" activeClassName="active">
                    Products
                  </NavLink><i class="fa-brands fa-product-hunt mt-2 fs-4 text-white navicon" style={{ display: navIconsVisible ? 'block' : 'none' }}></i>
                </li>
                <li className="nav-item d-flex  mx-3">
                  <NavLink className="nav-link" to="/about" activeClassName="active">
                    About
                  </NavLink><i class="fa-solid fa-file mt-2 fs-5 text-white navicon" style={{ display: navIconsVisible ? 'block' : 'none' }}></i>
                </li>
                <li className="nav-item d-flex  mx-3">
                  <NavLink className="nav-link" to="/contact" activeClassName="active">
                    Contact
                  </NavLink><i class="fa-solid fa-user mt-2 fs-5  text-white navicon" style={{ display: navIconsVisible ? 'block' : 'none' }}></i>
                </li>
              </ul>
              <div className='icons  d-flex' >
                  <i class="fa-solid fa-magnifying-glass mx-3 fs-4 text-light"></i>
                  <i class="fa-solid fa-cart-shopping fs-4  mx-3 text-light"></i>
                  <i class="fa-solid fa-bell fs-4  mx-3 text-light position-relative">
                    <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                      <span class="visually-hidden">New alerts</span>
                    </span>
                  </i>
             </div>
           </div>
        </div>
     </nav>
      );
    }
    
    export default Header;
    


{/* <nav class="navbar navbar-expand-lg  "  >
  <div class="container-fluid justijy-content-around">
    <div className='ms-3'>
    <a class="navbar-brand " href="#">
      <img src='./assets/images/logo.svg' />
    </a>
    </div>
    
    <button class="navbar-toggler border border-info " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
        <div class="collapse navbar-collapse  ms-4" id="navbarSupportedContent">
          <ul class="navbar-nav    me-auto  mb-2 mb-lg-0">
            <li class="nav-item d-flex alig-items-center mx-3 "><NavLink className="nav-link  " activeClassName="active" aria-current="page" to='/' >Home</NavLink><i class="fa-solid fa-house mt-2 fs-5 icon"></i></li> 
            <li class="nav-item d-flex alig-items-center mx-3 "><NavLink className="nav-link" activeClassName="active" to='/product'>Product</NavLink><i class="fa-brands fa-product-hunt mt-2 fs-4 icon"></i></li>
          <li class="nav-item d-flex alig-items-center mx-3 "><NavLink className="nav-link" activeClassName="active" to='/about'>About</NavLink><i class="fa-solid fa-file mt-2 fs-5 icon"></i></li>
          <li class="nav-item d-flex alig-items-center mx-3 "><NavLink className="nav-link" activeClassName="active" to='/contact'>Contact</NavLink><i class="fa-solid fa-user mt-2  fs-5 icon"></i></li>
          
        </ul> 
        <div className='icons'>
            <i class="fa-solid fa-magnifying-glass mx-3 fs-4 text-light"></i>
            <i class="fa-solid fa-cart-shopping fs-4 mx-3 text-light"></i>
            <i class="fa-solid fa-bell fs-4 mx-3 text-light position-relative">
              <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                <span class="visually-hidden">New alerts</span>
              </span>
            </i>
        </div>
      </div>
  </div>
// </nav> */}
//     );
    
// }
// export default Header;



// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Header = ({ color }) => {
//   return (
//     <nav className={`navbar navbar-expand-lg navbar-dark`} style={{ backgroundColor: color }}>
//       <div className="container-fluid">
//         <NavLink className="navbar-brand" to="/">
//           <img src='./assets/images/logo.svg' alt="Logo" />
//         </NavLink>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item d-flex mx-3">
//               <NavLink className="nav-link" exact to="/" activeClassName="active">
//                 Home
//               </NavLink>
//               <i className="fa-solid fa-house mt-2 fs-5 icon"></i>
//             </li>
//             {/* Other menu items */}
//           </ul>
//           <div className='icons'>
//             {/* Icons */}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;
