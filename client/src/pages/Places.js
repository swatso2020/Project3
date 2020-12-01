import React, { useState, useEffect } from "react";
//import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
//import { Col, Row, Container } from "../components/Grid";
//import { List, ListItem } from "../components/List";
//import { Input, TextArea, FormBtn } from "../components/Form";

function Places(props) {
  const [Places, setPlaces] = useState({})

 
  // const {} = useParams()
  // useEffect(() => {
  //   API.getBook()
  //     .then(res => setPlace(res.data))
  //     .catch(err => console.log(err));
  // }, [])

  return (
    <div>
      you are in the places  component
    </div>
      
    );
  }


export default Places;
