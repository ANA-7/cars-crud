import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Car = props => (
    <tr>
        <td>{props.car.make}</td>
        <td>{props.car.model}</td>
        <td>{props.car.category}</td>
        <td>{props.car.year}</td>
        <td>{props.car.price}</td>
        <td>
            <Link to={"/edit/" + props.car._id}>edit</Link> |&nbsp;
            <a href="#" onClick={() => {
                if (window.confirm('Are you sure you want to delete the car?')) {
                    props.deleteCar(props.car._id)
                }
            }}>delete</a>
        </td>
    </tr>
)

export default class CarsList extends Component {
    constructor(props) {
        super(props);

        this.deleteCar = this.deleteCar.bind(this)

        this.state = { cars: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/cars/')
            .then(response => {
                this.setState({ cars: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteCar(id) {
        axios.delete('http://localhost:5000/cars/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            cars: this.state.cars.filter(el => el._id !== id)
        })
    }

    carList() {
        return this.state.cars.map(currentcar => {
            return <Car car={currentcar} deleteCar={this.deleteCar} key={currentcar._id} />;
        })
    }

    render() {
        return (
            <div>
                <h4>List of cars</h4>
                <table className="table table-striped table-hover">
                    <thead className="thead-light">
                        <tr>
                            <th>Make</th>
                            <th>Model</th>
                            <th>Category</th>
                            <th>Year</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.carList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
