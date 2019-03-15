import React, { Component } from 'react';
import axios from 'axios';

import Meal from './Meal';

class Menu extends Component {

    state = {
        menu: [],
    }

    componentDidMount () {
        this.getMenu();
    }

    getMenu = () => {
        axios.get('/api/getMeals').then((res) => {
            this.setState({
                menu: res.data
            })
        })
        //console.log(this.state)
    }

    handleDelete = (id) => {
        axios.delete(`/api/delete/${id}`).then((response) => {
            this.setState({
                menu: response.data
            })
        });
    }


    render () {
        return (
            <div className='container'>

                <div className="hero-body">
                    <div className="container has-text-centered">
                    <h1 className="title">
                        Menu
                    </h1>
                    <h2 className="subtitle">
                        Subtitle
                    </h2>
                    </div>
                </div>

                {/* <h1>Menu</h1> */}
                <Meal   meal={this.state.menu} 
                        delete={this.handleDelete}
                    />
            </div>
        )
    }
};

export default Menu;