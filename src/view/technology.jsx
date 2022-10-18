import React from "react";
import Header from "../components/header";
import { terminology } from '../data/terminology'
import './technology.scss'

class Technology extends React.Component {
    constructor(props) {
        super(props)
        this.state = { data: terminology[0],activeIndex:0 };
        this.onChangeValue = this.onChangeValue.bind(this);
    }

    onChangeValue(value) {
        this.setState({ data: terminology[value.target.value] ,activeIndex:Number(value.target.value)})
    }

    render() {
        return <>
        <section className="technology_container">
            <div className="container">

            <Header />
            <main className="tech">


                <div className="left">
                <h2 className="subheading">
                            <div>03</div>
                            <div> SPACE LAUNCH 101</div>
                            </h2>
                <div className="content">
                    <div className="index" onChange={this.onChangeValue} name='term'>
                        {terminology.map((term, idx) =>
                            <label className={`num ${this.state.activeIndex === idx ? ' active' : ''}`}>
                                {idx + 1}
                                <input type="radio" key={idx} value={idx} name="term" hidden />
                            </label>
                        )}
                    </div>
                    <div className="text">
                        <h2 class="nav__text">The terminology...</h2>
                        <div className="term">{this.state.data.term}</div>
                        <div className="definition">{this.state.data.definition}</div>
                    </div>
                            </div>
                </div>

                <div className="image_container">
                    <img alt={this.state.data.term} src={this.state.data.imgUrl}></img>
                </div>
            </main>
            </div>

        </section>
        </>
    }
}

export default Technology;