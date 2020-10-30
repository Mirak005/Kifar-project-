import React, { Fragment } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import "./appnavbar.css";
import Register from "./auth/Register";
import Login from "./auth/Login";
import { Link } from "react-router-dom";
import { logout } from "../js/actions/authActions";

const AppNavbar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  return (
    <div className="navbar" color="dark" dark>
      <NavbarBrand
        tag={() => (
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "25px",
              cursor: "pointer",
              marginRight: "auto",
            }}
            to="/"
          >
            Carpooling
          </Link>
        )}
      />
      <Nav className="text-white">
        {isAuth ? (
          <Fragment>
            <NavItem className="p-2">
              <button
                className="logout"
                onClick={() => dispatch(logout())}
                color="light"
              >
                <p> Logout </p>
              </button>
            </NavItem>
            <NavItem className="p-2">
              <button className="Accueil">
                <p>
                  {" "}
                  <Link to="/dashboard">Accueil</Link>{" "}
                </p>
              </button>
            </NavItem>
            <NavItem className="p-2">
              <button className="Profile">
                <Link to="/profile">Profile</Link>
              </button>
            </NavItem>
          </Fragment>
        ) : (
          <Fragment>
            <NavItem className="p-2">
              <Login />
            </NavItem>
            <NavItem className="p-2">
              <Register />
            </NavItem>
          </Fragment>
        )}
      </Nav>
    </div>
  );
};

export default AppNavbar;
