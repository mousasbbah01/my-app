import React from "react";
import Header from "../components/header";
import {crewData} from '../data/crew'
import './crew.scss'

class Crew extends React.Component {

        constructor(props) {
                super(props)
                this.state = { data: crewData[0] };
                this.onChangeValue = this.onChangeValue.bind(this);
            }
        
            onChangeValue(value) {
                console.log(value.target.value);
                this.setState({ data: crewData[value.target.value] })
            }
        
            render() {
                return <>
                <section className="crew_container">
                        <div className="container">

                    <Header />
                    <main className="crew">
                        <div>
        
                            <img src={this.state.data.imgURL}></img>
                        </div>
        
                        <div>

                            <div>
        
                                <div className="title">{this.state.data.title}</div>
                                <div className="name">{this.state.data.name}</div>
                                <div className="bio">{this.state.data.bio}</div>
                                <div className="stats">
                                    <div className="distance">{this.state.data.distance} {this.state.distanceUnit}</div>
                                    <div className="travelTime">{this.state.data.travelTime}</div>
                                </div>
                            </div>
                            <div onChange={this.onChangeValue} name='crew'>
                                {crewData.map((plant, idx) =>
                                    <label>
                                        {plant.name}
                                        <input type="radio" key={idx} value={idx} name="crew" hidden />
                                    </label>
                                )}
                            </div>
                        </div>
                    </main>
                        </div>

                </section>
        
        
                </>
}

}

export default Crew;
