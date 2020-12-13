import React, { Component } from "react";
import API from "../../utils/API";
import NavTab from "../../components/NavTabs/SearchNavTab";
import { Container, Row, Col } from "../../components/Grid";
import { PlaceList, PlaceListItem } from "../../components/List";
import { Input, SearchButton } from "../../components/Input";
import "./style.css"

class SearchPlaces extends Component {
    state = {
        places: [],
        placeSearch: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    };

    handleFormSubmit = event => {
        event.preventDefault()
        
        API.searchPlaces(this.state.placeSearch)
        
            .then(res => {
               
                this.setState({ places: res.data.businesses }, function () {
                    
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
                                                <Input
                                                    name="placeSearch"
                                                    value={this.state.placeSearch}
                                                    onChange={this.handleInputChange}
                                                    placeholder="Search for a Place"
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col size="xs-12 sm-12">
                                                <SearchButton
                                                    onClick={this.handleFormSubmit}
                                                    type="success"
                                                    className="input-lg"
                                                >
                                                    Search
                                            </SearchButton>
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
                                {this.state.places.map(place => {
                                    return (
                                        <PlaceListItem
                                            image_url={place.image_url}
                                            name={place.name}
                                            categories={place.categories.title}
                                            address={place.location.display_address}
                                            phone={place.display_phone}
                                            url={place.url}
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
export default SearchPlaces;



