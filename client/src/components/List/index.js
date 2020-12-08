import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import SaveBtn from "../SaveBtn";
import API from "../../utils/API";
import DeleteBtn from "../DeleteBtn"
import "./style.css"

// PlaceList renders a bootstrap list item
export function PlaceList({ children }) {
    return <ul className="list-group">{children}</ul>;
};

// component to render each place
export function PlaceListItem (props) {

    // function to handle saving place to db when save button is clicked
    const handleSaveBtn = event => {

        API.savePlace({
            //name: props.name,
            //description: props.description,
            //imageUrl: props.imageUrl,
        }).then(
            res => console.log(res)
        )
            .catch(
                err => console.log(err)
            )
    };

    // function to handle deleting place from db when delete button is clicked
    const handleDeleteBtn = event => {
        API.deletePlace(props.id)
            .then(
                res => {
                    // use loadPlaces prop from Saved page component
                    props.loadPlaces()
                    console.log(props.id)
                }
            )
            .catch(err => console.log(err))
    };

    return (
        <li className="list-group-item" key={props.id}>
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                        <Thumbnail src={props.imageUrl} />
                    </Col>
                    <Col size="xs-8 sm-10">
                        <h3>{props.name}</h3>
                        <p>
                            {props.description}
                        </p>
                        
                        {/* if there is an object id render the SaveBtn component else render the DeleteBtn component */}
                        {!props.id ?
                            <SaveBtn
                                type="success"
                                className="input-lg"
                                onClick={handleSaveBtn}
                            >
                                Save
                            </SaveBtn>
                            :
                            <DeleteBtn
                                type="danger"
                                className="input-lg"
                                onClick={handleDeleteBtn}
                            >
                                Delete
                            </DeleteBtn>
                        }
                    </Col>
                </Row>
            </Container>
        </li>
    );
};