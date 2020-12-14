import React, { Component } from "react";
import API from "../../utils/API";
import NavTab from "../../components/NavTabs/MyPlacesNavTab";
import { Container, Row, Col } from "../../components/Grid";
import { PlaceList, PlaceListItem } from "../../components/List";
import { Input, SearchButton } from "../../components/Input";
import "./style.css"

class MyPlaces extends Component {
    state = {
        savedLocations: []
    };

    componentDidMount() {
        this.loadPlaces();
    };

    // loads locations from database
    loadPlaces = event => {

        API.getPlaces()
            .then(res => {
                this.setState({ savedLocations: res.data }, function () {
                    console.log("loading from Db")
                    console.log(this.state.savedLocations);
                })
            })
            .catch(err => console.log(err))
    };
    render() {
        return (
            <div>

                <NavTab />

                <div className="container-fluid placesSearchContainter justify-content-center ">
                    <Container>
                        <Row>
                            <Col size="md-12">
                                <form>
                                    <Container>
                                      
                                        <Row>
                                            <Col size="xs-12 sm-12">
                                                
                                            </Col>
                                        </Row>
                                    </Container>
                                </form>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Container>
                    <Row>
                        <Col size="xs-12">
                            <PlaceList>
                                {this.state.savedLocations.map(place => {
                                    return (
                                        <PlaceListItem
                                            loadPlaces={this.loadPlaces}
                                            //key={place.id}
                                            id={place._id}
                                            name={place.name}
                                            image_url={place.image_url}
                                            categories={place.category}
                                            address={place.address}
                                            phone={place.phone}
                                        />);
                                })}
                            </PlaceList>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

 
export default MyPlaces;