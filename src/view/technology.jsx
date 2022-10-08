import React from "react";
import Header from "../components/header";
import { terminology } from '../data/terminology'
import './technology.scss'

class Technology extends React.Component {
    constructor(props) {
        super(props)
        this.state = { data: terminology[0] };
        this.onChangeValue = this.onChangeValue.bind(this);
    }

    onChangeValue(value) {
        console.log(value.target.value);
        this.setState({ data: terminology[value.target.value] })
    }

    render() {
        return <>
        <section className="technology_container">
            <div className="container">

            <Header />
            <main className="tech">
                <div>
                    <img src={this.state.data.imgURL}></img>
                </div>

                <div>
                    <div onChange={this.onChangeValue} name='term'>
                        {terminology.map((term, idx) =>
                            <label>
                                {idx + 1}
                                <input type="radio" key={idx} value={idx} name="term" hidden />
                            </label>
                        )}
                    </div>
                    <div>
                        <div className="term">{this.state.data.term}</div>
                        <div className="definition">{this.state.data.definition}</div>
                    </div>
                </div>
            </main>
            </div>

        </section>
        </>
    }
}

export default Technology;