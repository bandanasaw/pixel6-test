import { PixelFormValidation } from './validation.js'
export class PixelUserRegistration {


    validator = new PixelFormValidation();
    otp;
    constructor() {
        this.start();
    }
    submit() {
        console.log("submit")
        let name = document.querySelector('.pixel-fullname');
        let email = document.querySelector('.pixel-email');
        let phoneNumber = document.querySelector('.pixel-phoneNumber');


        document.querySelector('#userName').innerText = name.value;
        document.querySelector('#userPhoneNumber').innerText = phoneNumber.value;

        alert(`Your OTP is ${Math.random()}`)

        this.hideForm();


    }

    onNameChange(event) {
        console.log(event, event.target, event.key);
    }

    start() {
        console.log('add event listner to button');
        document.querySelector('#submit-btn').addEventListener('click', () => this.submit());
        document.querySelector('#fullName').addEventListener('keyup', (e) => this.onNameChange(e));
        document.querySelector('#email').addEventListener('keyup', (e) => this.onNameChange(e));
        document.querySelector('#phoneNumber').addEventListener('keyup', (e) => this.onNameChange(e));
    }
    hideForm(){
        let form = document.querySelector('#pixelUserRegitrationForm');
        form.classList.add('pixel-hide');

        let message = document.querySelector('#pixelMessage');
        message.classList.remove('pixel-hide');

    }
}