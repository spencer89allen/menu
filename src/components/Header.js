import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Header extends Component {

    state = {
        display: 'menu',
    }

    switchToKitchen() {
        this.setState({
            display: 'kitchen',
        })
    }

    switchToMenu() {
        this.setState({
            display: 'menu',
        })
    }

    render () {
        return (
            <section className="hero is-medium is-dark is-bold">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Spencer's
                        </h1>
                        <h2 className="subtitle">
                            Legit Food
                        </h2>
                    </div>
                </div>
                <div className="container button-container" >
                    <div className="field">
                        <p className="control">
                            <Link to={'/kitchen'}>
                                <button className="button is-warning is-rounded" >Kitchen</button>
                            </Link>
                        </p>
                    </div>
                    <p></p>
                    <div className="field">
                        <p className="control">
                            <Link to={'/'}>
                                <button className="button is-danger is-rounded" >Menu</button>
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        )
    }
};

export default Header;