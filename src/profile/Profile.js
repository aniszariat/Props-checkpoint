import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import Button from "@restart/ui/esm/Button";

function Profile(props) {
  // function handleName(e){
  //     e.preventDefault()
  //     alert(props.FullName)
  // }
  function handleName() {
    alert("the user is : " + props.FullName);
  }
  return <div>
      <Container>
          <Row>
              <Col>{props.FullName}</Col>
              <Col md={6}>{props.Bio}</Col>
              <Col>{props.Profession}</Col>
          </Row>
          <Row>
              <Col md={6}> <img src={props.children} alt="nothing"/></Col>
          </Row>
          <Row><Button onClick={handleName}> Click me </Button></Row>
      </Container>

  </div>;
}
Profile.propTypes ={
  FullName:PropTypes.string,
  Bio:PropTypes.string,
  Profession:PropTypes.string,
}
Profile.defaultProps={
  FullName:"Anis",
  Bio:"nothing",
  Profession:"mechanical engineer"
}
export default Profile;
