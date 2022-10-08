import React from "react";
import Header from "../components/header";
import './home.scss';
class Home extends React.Component {

        render() {
                return <>
                <section className="home_container">
                <div className="container">

                        <Header />
                        <main>
                                <div>
                                        <div>SO, YOU WANT TO TRAVEL TO
                                        </div>
                                        <div>SPACE</div>
                                        <div>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!

                                        </div>
                                </div>

                                <div>
                                        <button>Explore</button>
                                </div>
                        </main>
                </div>
                </section>


                </>
        }
}

export default Home;