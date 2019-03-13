import React, { Component } from 'react';



class Meal extends Component {

    state = {
        meal: this.props.meal,

    }

    componentWillReceiveProps = (newProps) => {
        if(this.props.meal !== newProps.meal) {
            this.setState({
                meal: newProps.meal,
            })
        }
    }




    render() {
        var display = this.state.meal.map((element, id) => {
            return (
                <div key={id}
                     className='card'>
                    <header className='card-header'>
                        <p className='card-header-title'>{element.entree}</p>
                        <p className='card-header-title'>$ {element.price}</p>
                    </header>
                    <div className='card-content'>
                        <img src={element.image} alt='no dice'></img>
                    </div>
                    <div className='card-content'>
                        {element.description}
                    </div>
                    <div className="button-container" >
                        <div className="field">
                            <p className="control">
                                <button className="button is-warning is-rounded">Edit Entrée</button>
                            </p>
                        </div>
                        <p></p>
                        <div className="field">
                            <p className="control">
                                <button className="button is-danger is-rounded" onClick={(e) => this.props.delete(element.id)}>Remove Entrée</button>
                            </p>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                {display}
            </div>
        )
    }
}

export default Meal;