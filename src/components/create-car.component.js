import axios from 'axios';
import Car from './abstract-car';

class CreateCar extends Car {

    onSubmit(event) {
        const car = super.onSubmit(event);

        axios.post('http://localhost:5000/cars/add', car)
            .then(res => console.log(res.data));

        window.alert("Car added!");
    };

    render() {
        return (super.render('Add car'));
    }
}
export default CreateCar;
