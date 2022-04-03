import { PixelStateInfo } from './state-info.js';
export class PixelUserRegistration {

    otp;
    validationAttemptCount = 0;
    stateInfo = new PixelStateInfo();
    state;
    provider;
    invalidPhone;

    constructor() {
        // attaching event on construtor call. 
        this.addEventListener();
    }

    // attaching all the event in this method
    addEventListener() {

        document.querySelector('#submit-btn').addEventListener('click', () => this.submit());
        document.querySelector('#fullName').addEventListener('input', (e) => this.allowOnlyAlphabets(e));
        document.querySelector('#fullName').addEventListener('focusout', (e) => this.validateName(e));
        document.querySelector('#email').addEventListener('focusout', () => this.emailValidation());
        document.querySelector('#phoneNumber').addEventListener('input', (e) => this.formatPhoneNumber(e));
        document.querySelector('#phoneNumber').addEventListener('focusout', (e) => this.validatePhone(e));
        document.querySelector('#validate-btn').addEventListener("click", () => this.validateOtp());
        document.querySelector('#otp').addEventListener('input', (e) => this.allowOnlyNumbers(e))
    }


    // When submit button is clicked we are calling this method.
    submit() {
        let form = document.querySelector('#pixelUserRegitrationForm');

        // check if form is valid if not valid do not go further
        if (!form.checkValidity() || this.invalidPhone) {
            return;
        }


        let name = document.querySelector('.pixel-fullname');
        let email = document.querySelector('.pixel-email');
        let phoneNumber = document.querySelector('.pixel-phoneNumber');



        // to avoid 2 digit number adding 10000 and doing substring 4 digit
        let otpNumber = (Math.floor(Math.random() * 10000) + 10000).toString().substr(0, 4); // Generate the 4 digit random number
        this.otp = otpNumber;

        this.displayMessage(name.value, phoneNumber.value);

        // show the opt number after 2 sec on alert popup. to mimick message.
        setTimeout(() => {
            console.log(`your OTP is ${otpNumber}`);
        }, 2000);

    }

    // display message after form is submitted.
    displayMessage(name, phoneNumber) {
        // hide form
        let form = document.querySelector('#pixelUserRegitrationForm');
        form.classList.add('pixel-hide');


        document.querySelector('#userName').innerText = name;
        document.querySelector('#userPhoneNumber').innerText = `${phoneNumber} (${this.provider}, ${this.state})`;

        // show form
        let message = document.querySelector('#pixelMessage');
        message.classList.remove('pixel-hide');
    }

    // Validate phone number
    validatePhone(event) {
        // normalize formatted value and get numbers
        let val = event.target.value.replace(/[^0-9]/g, '');
        let isValid = true;

        let phone = document.querySelector('#phoneError');
        if (val.length !== 10) {
            isValid = false;
        }

        // show valid invalid message
        isValid && !this.invalidPhone ? phone.classList.add('pixel-hide') : phone.classList.remove('pixel-hide')
    }

    // Validate name 
    validateName(event) {
        console.log(event, event.target.value, event.key);
        const val = event.target.value.split(' ');
        let isValid = true;

        if (val && val.length >= 2) {
            val.forEach(n => {
                if (n.length < 4) {
                    isValid = false;
                }
            });
        } else {
            isValid = false;
        }

        const name = document.querySelector('#nameError');
        isValid ? name.classList.add('pixel-hide') : name.classList.remove('pixel-hide')
    }



    // validate the OTP Number
    validateOtp() {
        let otpInput = document.querySelector('#otp');
        if (this.otp === otpInput.value) {
            document.querySelector('#getvalidateMessage').innerHTML = ` Validation Successful! `;
            document.querySelector('#getvalidateMessage').classList.remove('pixel-red');
            document.querySelector('#getvalidateMessage').classList.add("pixel-message-green");
            document.querySelector('#otpValidationForm').remove();

            // redirect to pixel website after 1 sec.
            setTimeout(() => window.open('http://pixel6.co', "_self"), 1000);
        } else {
            this.validationAttemptCount++;
            if (this.validationAttemptCount === 3) {
                window.open('http://pixel6.co/xuz', "_self");
                return;
            }

            document.querySelector('#getvalidateMessage').innerHTML = `Your OTP is invalid!! Please re-enter valid OTP.`;
            document.querySelector('#getvalidateMessage').classList.remove("pixel-message-green");
            document.querySelector('#getvalidateMessage').classList.add('pixel-red');

            otpInput.value = '';
        }

    };

    // Validate email
    emailValidation() {
        let email = document.querySelector('#email');
        let errorSpan = document.querySelector('#emailError');
        if (email.validity.valid) {
            errorSpan.classList.add('pixel-hide');
        } else {
            errorSpan.classList.remove('pixel-hide');
        }
    }

    // Allow only alphabets and space and remove other char input
    allowOnlyAlphabets(event) {
        let val = event.target.value
        event.target.value = val.replace(/[^a-zA-Z\s]+/g, '').replace(/\s\s+/g, ' ');
    }

    // Allow only alphabets and space and remove other char input
    allowOnlyNumbers(event) {
        let val = event.target.value
        event.target.value = val.replace(/[^0-9]/g, '');
    }

    // formate phone number
    formatPhoneNumber(e) {
        let val = e.target.value;
        val = val.replace(/[^0-9]/g, '');
        let p1 = val.substr(0, 3);
        let p2 = val.substr(3, 3);
        let p3 = val.substr(6, 4);
        this.updateProvider(p1, p2);

        if (p3.length > 0) {
            e.target.value = `(${p1}) - ${p2} - ${p3}`;
            return;
        }

        if (p2.length > 0) {
            e.target.value = `(${p1}) - ${p2}`;
            return;
        }

        if (p1.length === 3) {
            e.target.value = `(${p1}) - `;
        } else {
            e.target.value = `(${p1}`;
        }

    }

    // update provider image and state
    updateProvider(phone, state) {
        this.invalidPhone = true;
        const img = document.querySelector('img');
        img.classList.add('pixel-hide');
        if (phone && phone.length >= 3) {
            const code = parseInt(phone);

            if (code >= 621 && code <= 799) {
                img.src = './image/jio.jpg';
                img.classList.remove('pixel-hide');
                this.provider = 'Jio';
                this.invalidPhone = false;
            }

            if (code >= 801 && code <= 920) {
                img.src = './image/idea.jpg';
                img.classList.remove('pixel-hide');
                this.provider = 'Idea';
                this.invalidPhone = false;
            }

            if (code >= 921 && code <= 999) {
                img.src = './image/vodafone.jpg';
                img.classList.remove('pixel-hide');
                this.provider = 'Vodafone';
                this.invalidPhone = false;
            }

        }

        this.state = !this.invalidPhone && state.length === 3 && this.stateInfo.getState(parseInt(state));
        document.querySelector('#state').innerHTML = this.state || '';
    }

}
