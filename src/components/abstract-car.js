import { Component } from 'react';

class Car extends Component {
    constructor(props) {
        super(props);

        this.onChangeMake = this.onChangeMake.bind(this);
        this.onChangeModel = this.onChangeModel.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            make: '',
            model: '',
            category: '',
            year: undefined,
            price: undefined
        }
    }

    onChangeMake(event) {
        this.setState({
            make: event.target.value
        })
    }

    onChangeModel(event) {
        this.setState({
            model: event.target.value
        })
    }

    onChangeCategory(event) {
        this.setState({
            category: event.target.value
        })
    }

    onChangeYear(event) {
        this.setState({
            year: event.target.value
        })
    }

    onChangePrice(event) {
        this.setState({
            price: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault();

        const car = {
            make: this.state.make,
            model: this.state.model,
            category: this.state.category,
            year: this.state.year,
            price: this.state.price
        }

        console.log(car);
        return car;
    }

    render(value) {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Make: </label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.make}
                            onChange={this.onChangeMake}
                        />
                    </div>
                    <div className="form-group">
                        <label>Model: </label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.model}
                            onChange={this.onChangeModel}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category: </label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.category}
                            onChange={this.onChangeCategory}
                        />
                    </div>
                    <div className="form-group">
                        <label>Year: </label>
                        <input
                            type="number"
                            required
                            placeholder="Between 1900 and 2021"
                            min="1900"
                            max="2021"
                            className="form-control"
                            value={this.state.year}
                            onChange={this.onChangeYear}
                        />
                    </div>
                    <div className="form-group">
                        <label>Price: </label>
                        <input
                            type="number"
                            required
                            placeholder="Minimal unit of price is 1"
                            min="1"
                            className="form-control"
                            value={this.state.price}
                            onChange={this.onChangePrice}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value={value} className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
export default Car;
