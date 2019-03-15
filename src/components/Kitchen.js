import React, { Component } from 'react';
import axios from 'axios';
import '../App.css'

class Kitchen extends Component {

    state = {
        entreeInput: '',
        descriptionInput: '',
        imageInput: '',
        priceInput: '',
        newEntree: [],
        isEdit: false,
    }

    handleInput = (name, value) => {
        this.setState({
            [name]: value,
        });
        //console.log(this.state)
    }

    addMeal = () => {

        var { entreeInput, descriptionInput, imageInput, priceInput } = this.state

        let body = { 
            entree: entreeInput, 
            description: descriptionInput, 
            image: imageInput, 
            price: priceInput
        }

        axios.post('/api/meal', body).then((res) => {

            this.setState({
                newEntree: res.data,
                entreeInput: '',
                descriptionInput: '',
                imageInput: '',
                priceInput: '',
                isEdit: false,
            })
        })
    }




    render () {
        return (
            <div className='container'>
                <br />
                <div className="hero-body">
                    <div className="container has-text-centered">
                    <h1 className="title">
                        Kitchen
                    </h1>
                    <h2 className="subtitle">
                        wash your hands first!
                    </h2>
                    </div>
                </div>
                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">New Entrée</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control">
                                <input  className="input" 
                                        type="text" 
                                        placeholder="Entrée Name" 
                                        value={this.state.entreeInput}
                                        onChange={(e) => this.handleInput(e.target.name, e.target.value)}
                                        name="entreeInput"
                                        />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">Entrée Description</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control">
                                <textarea   className="textarea" 
                                            placeholder="Description"
                                            value={this.state.descriptionInput}
                                            onChange={(e) => this.handleInput(e.target.name, e.target.value)}
                                            name="descriptionInput">
                                </textarea>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">Image</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control">
                                <input  className="input" 
                                        type="text" 
                                        placeholder="Image URL" 
                                        value={this.state.imageInput}
                                        onChange={(e) => this.handleInput(e.target.name, e.target.value)}
                                        name="imageInput"
                                        />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">Price</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <p className="control">
                                <input  className="input" 
                                        // type="text" 
                                        placeholder="$$$" 
                                        value={this.state.priceInput}
                                        onChange={(e) => this.handleInput(e.target.name, e.target.value)}
                                        name="priceInput"
                                        />
                            </p>
                        </div>
                    </div>
                </div>
                <br />
                <div className="button-container" >
                    <div className="field">
                        <p className="control">
                            <button className="button is-dark" onClick={() => this.addMeal()}>Add To Menu</button>
                        </p>
                    </div>
                </div>
                <br />
            </div>
        )
    }
};

export default Kitchen;