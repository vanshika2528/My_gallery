// import React from "react";
// import { Link } from "react-router-dom";
// const Header = () => {
//   return (
//     <>
//       <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-2">
//         <Link class="navbar-brand" to="/">My Gallery</Link>
//         <button
//           class="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>

//         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul class="navbar-nav mx-auto"></ul>
//           <Link to="/add-image">
//             <button className="btn btn-info  my-3">Add Image</button>
//           </Link>
//           <Link to="/add-category">
//             <button className="btn btn-info  mx-4 my-3">Add Category</button>
//           </Link>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Header;

import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark my-navbar px-2">
        <Link className="navbar-brand" to="/">My Gallery</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <button><li className="nav-item">
              <Link className="nav-link" to="/add-image">Add Image</Link>
            </li></button>
            <button><li className="nav-item">
              <Link className="nav-link" to="/add-category">Add Category</Link>
            </li></button>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;