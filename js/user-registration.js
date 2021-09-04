
export class PixelUserRegistration {

    otp;
    validationAttemptCount = 0;
    constructor() {
        this.start();
    }
    submit() {
        let form = document.querySelector('#pixelUserRegitrationForm');

        // check if form is valid if not valid do not go further
        if (!form.checkValidity()) {
            return;
        }


        let name = document.querySelector('.pixel-fullname');
        let email = document.querySelector('.pixel-email');
        let phoneNumber = document.querySelector('.pixel-phoneNumber');



        let otpNumber = Math.floor(Math.random() * 10000) + '';
        this.otp = otpNumber;

        this.displayMessage(name.value, phoneNumber.value);

        // show the opt number after 2 sec on alert popup.
        setTimeout(() => {
            alert(`your OTP is ${otpNumber}`);
        }, 2000);

    }

    /**
     * 
     * @param {*} event 
     */
    onNameChange(event) {
        console.log(event, event.target, event.key);
    }

    /**
     * 
     */
    start() {
        console.log('add event listner to button');
        document.querySelector('#submit-btn').addEventListener('click', () => this.submit());
        document.querySelector('#fullName').addEventListener('keyup', (e) => this.onNameChange(e));
        document.querySelector('#email').addEventListener('keyup', () => this.emailValidation());
        document.querySelector('#phoneNumber').addEventListener('keyup', (e) => this.onPhoneChange(e));
        document.querySelector('#validate-btn').addEventListener("click", () => this.validateOtp());
    }

    onPhoneChange(e) {
        const img = document.querySelector('img');
        console.log(e.target.value);
        img.classList.add('pixel-hide');
        const phone = e.target.value;
        if (phone && phone.length >= 3) {
            const code = parseInt(phone.substr(0, 3));

            
            if (code >= 621 && code <= 799) {
                img.src = './image/jio.jpg';
                img.classList.remove('pixel-hide');
            }

            if (code >= 801 && code <= 920) {
                img.src = './image/idea.jpg';
                img.classList.remove('pixel-hide');
            }

            if (code >= 921 && code <= 999) {
                img.src = './image/vodafone.jpg';
                img.classList.remove('pixel-hide');
            }

        }
    }

    /**
     * 
     * @param {*} name 
     * @param {*} phoneNumber 
     */
    displayMessage(name, phoneNumber) {
        let form = document.querySelector('#pixelUserRegitrationForm');
        form.classList.add('pixel-hide');

        document.querySelector('#userName').innerText = name;
        document.querySelector('#userPhoneNumber').innerText = phoneNumber;

        let message = document.querySelector('#pixelMessage');
        message.classList.remove('pixel-hide');
    }

    /**
     * 
     * @returns 
     */
    validateOtp() {
        let otpInput = document.querySelector('#otp');
        if (this.otp === otpInput.value) {
            document.querySelector('#getvalidateMessage').innerHTML = ` Validation Successful! `;
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
            otpInput.value = '';
        }

    };

    /**
     * 
     */
    emailValidation() {
        let email = document.querySelector('#email');
        let errorSpan = document.querySelector('#emailError');
        if (email.validity.valid) {
            errorSpan.classList.add('pixel-hide');
        } else {
            errorSpan.classList.remove('pixel-hide');
        }
    }

}
