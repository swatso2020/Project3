import React, { Component } from "react";
import API from "../../utils/API";
import NavTab from "../../components/NavTabs/MyPlacesNavTab";

class MyPlaces extends Component {
    state = {
        savedLocations: []
    };

    componentDidMount() {
        this.loadLocations();
    };

    // loads books from database
    loadLocations = event => {

        API.getPlaces()
            .then(res => {
                this.setState({ savedLocations: res.data }, function () {
                    console.log(this.state.savedLocations);
                })
            })
            .catch(err => console.log(err))
    };

    render() {
    return <div>

        <NavTab/>
        
    </div>
    };
}
export default MyPlaces;