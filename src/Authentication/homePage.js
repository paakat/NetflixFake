import { auth } from "./firebase";

import React  from "react";
import Card   from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import './auth.css';


import { ModalProvider } from "state/ModalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "pages/Admin";
import AdminContent from "pages/AdminContent";


const Home = ({ user }) => {
  return (
    <div className="container-fluid" style={{ marginTop: "10%" }}>


<div className="row">
  <Admin />
</div>




      <div className="row">
          <Card.Body>
            <Card.Title>
            </Card.Title>

            <Card.Subtitle className="mb-2 text-muted">
              {user.displayName}
            </Card.Subtitle>

            <img src={user.photoURL} alt="" />
            <Button
            style={{margin: '5%'}}
            variant="outline-danger"
            type="submit"
            onClick={() => auth.signOut()}
          >
            Sign Out
          </Button>
          </Card.Body>
      </div>


    </div>
  );
};

export default Home;
