import React from "react";
import Header from "../components/header";
import { crewData } from '../data/crew'
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
                        <div className="ss">
                        <h2 className="subheading">
                            <div>02</div>
                            <div> MEET YOUR CREW</div>
                            </h2>

                            <div className="info_container">
                                <div className="title">{this.state.data.title}</div>
                                <div className="name">{this.state.data.name}</div>
                                <div className="bio">{this.state.data.bio}</div>
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
                        <div>
                            <img alt={this.state.data.name} src={this.state.data.imgURL}></img>
                        </div>
                    </main>
                </div>

            </section>


        </>
    }

}

export default Crew;
