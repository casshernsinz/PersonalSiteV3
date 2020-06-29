function validateForm(event) {
    //Gather all HTML controls into a collection instead of creating a seperate variable for each
    let controls = document.getElementsByClassName('form-control');
    console.log(controls);

    let validationMessages = document.getElementsByClassName('invalid');
    console.log(validationMessages);

    //Regular Expression object for Email
    let rxpEmail = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);

    //Regular Expression object for Name
    let rxpName = new RegExp(/^[A-Z]+$/i);

    //Check the length of ALL controls - if any have not been filled out by the user, stop the form from submitting
    if (controls['name'].value.length == 0 || controls['email'].value.length == 0 || controls['subject'].value.length == 0 || controls['message'].value.length == 0 || !rxpEmail.test(controls['email'].value) || !rxpName.test(controls['name'].value)) {
        //stops the form from submitting
        event.preventDefault();

        //Check individual controls and display error message if needed
        //--------------------Name Validation-----------------------
        //Length
        if (controls['name'].value.length == 0) {
            validationMessages['validationName'].textContent = "* Name is required";
        } else {
            validationMessages['validationName'].textContent = "";
        }

        //regex
        if (!rxpName.test(controls['name'].value) && controls['name'].value.length > 0) {
            validationMessages['validationName'].textContent = "* Name must only include alphabetical characters";
        }
        if (rxpName.test(controls['name'].value) && controls['name'].value.length > 0) {
            validationMessages['validationName'].textContent = "";
        }

        //--------Email Validation---------
        //Length
        if (controls['email'].value.length == 0) {
            validationMessages['validationEmail'].textContent = "* Email is required";
        } else {
            validationMessages['validationEmail'].textContent = "";
        }

        //regex
        if (!rxpName.test(controls['email'].value) && controls['email'].value.length > 0) {
            validationMessages['validationEmail'].textContent = "* Please enter a valid Email address";
        }
        if (rxpName.test(controls['email'].value) && controls['email'].value.length > 0) {
            validationMessages['validationEmail'].textContent = "";
        }

        //--------Subject Validation---------

        if (controls['subject'].value.length == 0) {
            validationMessages['validationSubject'].textContent = "* Subject is Required";
        } else {
            validationMessages['validationSubject'].textContent = "";
        }

        //--------Message Validation---------

        if (controls['message'].value.length == 0) {
            validationMessages['validationMessage'].textContent = "* Message is Required";
        } else {
            validationMessages['validationMessage'].textContent = "";
        }
    }
}