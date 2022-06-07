import React from "react";

import style from "../css/style.module.css";

import { Card } from "react-bootstrap";

import {
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsTelephone } from "react-icons/bs";

import myPhoto from "../photos/myPhoto.jpeg";

import CButton from "../static.button/button";

function Staticbar() {
  return (
    <div>
      <Card
        style={{ width: "18rem" }}
        className="w-100 text-center border border-0"
      >
        <Card.Img
          variant="top"
          className="rounded-circle w-50 m-auto border border-0"
          src={myPhoto}
          alt=""
        />
        <Card.Body>
          <Card.Title>
            {" "}
            <h1> Shahmali Mustafayev </h1>{" "}
          </Card.Title>
          <Card.Text>
            <p>
              Extremely motivated to constantly develop my skills and grow
              professionally. I am confident in my ability to come up with
              interesting ideas for projects improving.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
      <hr />
      <div>
        <h3 style={{ textAlign: "center" }}>About</h3>
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Hi,I'm Shahmali
        </p>
        <CButton />
        <hr />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <a
            style={{ color: "black" }}
            href="https://www.instagram.com/shahmali.7/"
          >
            <FaInstagram />
          </a>
          <a style={{ color: "black" }} href="https://github.com/shahmali7">
            <FaGithub />
          </a>
          <a
            style={{ color: "black" }}
            href="https://www.linkedin.com/in/shahmali-mustafayev-905698230/"
          >
            <FaLinkedinIn />
          </a>
          <a
            style={{ color: "black" }}
            href="https://www.facebook.com/sahmali.mustafayev.1"
          >
            <FaFacebookF />
          </a>
          <a
            style={{ color: "black" }}
            href="https://www.instagram.com/shahmali.7/"
          >
            <SiGmail />
          </a>
        </div>
        <p className={style.number}>
          <BsTelephone /> +48 576 123 040
        </p>
      </div>
    </div>
  );
}

export default Staticbar;
