import React, { Component } from "react";
import API from "../../utils/API";
import NavTab from "../../components/NavTabs/SearchNavTab";
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
                this.setState({ places: res.data.items }, function () {
                    console.log(this.state.places);
                })
            })
            .catch(err => console.log(err))
    };


    render() {
        return (
            <div>

                <NavTab />

                <div className="container-fluid placesSearchContainter justify-content-center ">
                    <div className="ui action input">
                        <form>
                            <div className="input-group mb-3" >
                                <input type="text" style={{ width: "400px", height: "35px" }} className="form-control margin" placeholder="Search for a Place" name="bookSearch"
                                    value={this.state.bookSearch} onChange={this.handleInputChange} />
                                <button type="button" style={{ height: "35px" }} className="btn btn-success margin" onClick={this.handleFormSubmit}>Search</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        );
    }
}


export default SearchPlaces;



