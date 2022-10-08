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
                <div>

                    <img src={this.state.data.imgURL}></img>
                </div>

                <div>
                    <div onChange={this.onChangeValue} name='planet'>
                        {destinationData.map((plant, idx) =>
                            <label>
                                {plant.name}
                                <input type="radio" key={idx} value={idx} name="planet" hidden />
                            </label>
                        )}
                    </div>
                    <div>

                        <div className="name">{this.state.data.name}</div>
                        <div className="description">{this.state.data.description}</div>
                        <div className="divider"></div>
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