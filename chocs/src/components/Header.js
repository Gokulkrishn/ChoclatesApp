import React from 'react';
import {NavLink,Link,Redirect} from 'react-router-dom';

const Header =() => {
    return(
        <>
        <div>
          <nav className="navbar navbar-expand-sm " style={{background: "#3d1010"}}>
          <NavLink to="/" href="" className="navbar-brand" style={{color:"yellow",fontFamily:"sofia"}}>Chocolate Collection </NavLink>
            <ul className="navbar-nav mr-auto mb-0 mt-0">
              <li className="nav-item">
                <NavLink to="/home" href="" className="nav-link" activeStyle={{borderBottom:"1px solid yellow"}}>Home </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/brands" href="" className="nav-link" activeStyle={{borderBottom:"1px solid yellow"}}>Brands </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/chocolates" href="" className="nav-link" activeStyle={{borderBottom:"1px solid yellow"}}>Chocolates </NavLink>
              </li>   
            </ul>
            <ul className="mb-0 mt-0">
              < li style={{listStyle:"none"}}>
                {1 && <>
                  <form className="form-inline">
                    <Link to="/chocolates">
                      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    </Link>
                    <button className="btn btn-outline-success my-2 my-sm-0 ml-2" type="submit"
                      style={{color:"aliceblue",border:"1px solid khaki"}}>Logout</button>
                    </form>
                </>}
              </li>
            </ul>        
          </nav>
        </div>
        <div className="container" style={{paddingBottom:"10px"}}>
        <header className="topHeader">
        </header> 
        </div>
      </>
      );  
}
export default Header;