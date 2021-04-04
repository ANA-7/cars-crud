import axios from 'axios';
import Car from './abstract-car';

class EditCar extends Car {

    componentDidMount() {
        axios.get('http://localhost:5000/cars/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    make: response.data.make,
                    model: response.data.model,
                    category: response.data.category,
                    year: response.data.year,
                    price: response.data.price
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onSubmit(event) {
        if (!window.confirm('Are you sure you want to save the changes?')) {
            return;
        }

        const car = super.onSubmit(event);

        axios.post('http://localhost:5000/cars/update/' + this.props.match.params.id, car)
            .then(res => console.log(res.data));

        window.alert("Car edited!");
    };

    render() {
        return (super.render('Edit car'));
    }
}
export default EditCar;
