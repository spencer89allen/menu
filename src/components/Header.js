import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Header extends Component {

    state = {
        display: false,
    }

    changeDisplay = () => {
        this.setState({
            display: !this.state.display
        })
    }


    render() {
        return (
            <section className="hero is-medium is-dark is-bold">
                <br />
                <div id="navbarMenuHeroA" className="navbar-menu">
                    <div className="navbar-end">
                        {
                            this.state.display ?
                                <div className="navbar-item" style={{marginRight: '10%'}}>
                                    <p className="control">
                                        <Link to={'/'}>
                                            <button className="button " onClick={this.changeDisplay}>Menu</button>
                                        </Link>
                                    </p>
                                </div>
                                :
                                <div className="navbar-item" style={{marginRight: '10%'}}>
                                    <p className="control">
                                        <Link to={'/kitchen'}>
                                            <button className="button" onClick={this.changeDisplay}>Kitchen</button>
                                        </Link>
                                    </p>
                                </div>
                        }
                    </div>
                </div>
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
            </section>
        )
    }
};

export default Header;