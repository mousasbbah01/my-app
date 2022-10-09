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
                                <div className="left">
                                        <h1 className="heading">SO, YOU WANT TO TRAVEL TO
                                        </h1>
                                        <h2 class='space_word'>SPACE</h2>
                                        <p className="greeting">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!

                                        </p>
                                </div>

                                <div className="right">
                                        <a href='/'>Explore</a>
                                </div>
                        </main>
                </div>
                </section>


                </>
        }
}

export default Home;