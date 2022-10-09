import React from "react";
import Header from "../components/header";
import { destinationData } from '../data/destination';
import './destination.scss'


class Destination extends React.Component {
    constructor(props) {
        super(props)
        this.state = { data: destinationData[0] };
        this.onChangeValue = this.onChangeValue.bind(this);
    }

    onChangeValue(value) {
        console.log(value.target.value);
        this.setState({ data: destinationData[value.target.value] })
    }

    render() {
        return <>
        <section className="destination_container">
            <div className="container">

            <Header />
            <main className="destination">
                <div className="image_container">

                    <img alt='planet' src={this.state.data.imgURL}></img>
                </div>

                <div className="planet_information">
                    <div onChange={this.onChangeValue} className='destination_options' name='planet'>
                        {destinationData.map((plant, idx) =>
                            <label>
                                {plant.name}
                                <input type="radio" key={idx} value={idx} name="planet" hidden />
                            </label>
                        )}
                    </div>
                    <div className="info">

                        <h1 className="name">{this.state.data.name}</h1>
                        <p className="description">{this.state.data.description}</p>
                        <div className="stats">
                            <div className="distance">{this.state.data.distance} {this.state.distanceUnit}</div>
                            <div className="travelTime">{this.state.data.travelTime}</div>
                        </div>
                    </div>
                </div>
            </main>
            </div>

        </section>
        </>
    }
}

export default Destination;