import React, { Component } from 'react';
import axios from 'axios';

import Meal from './Meal';
import Axios from 'axios'

class Menu extends Component {

    state = {
        menu: [],
    }

    componentDidMount () {
        this.getMenu();
    }

    getMenu = () => {
        axios.get('/api/getMeals').then((res) => {
            console.log(res.data)
            this.setState({
                menu: res.data
            })
        })
        //console.log(this.state)
    }

    handleDelete = (id) => {
        Axios.delete(`/api/delete${id}`).then((response) => {
            this.setState({
                menu: response.data
            })
        });
    }


    render () {
        return (
            <div className='container'>
                <h1>Menu</h1>
                <Meal meal={this.state.menu} delete={this.handleDelete}/>
            </div>
        )
    }
};

export default Menu;