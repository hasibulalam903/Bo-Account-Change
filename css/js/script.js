/* =========================================
   EXISTING USER INFORMATION
========================================= */

const existingInformation = {

    mobile: "017XXXXXXXX",

    email: "hasibul@example.com",

    address: "Chattogram, Bangladesh",

    nominee: "Nominee Information",

    bank: "Bank Information",

    signature: "Signature Available",

    other: "Other Information"

};


/* =========================================
   GET HTML ELEMENTS
========================================= */

const changeType =
    document.getElementById("changeType");


const existingInfo =
    document.getElementById("existingInfo");


const newInfo =
    document.getElementById("newInfo");


const newInfoError =
    document.getElementById("newInfoError");


const submitButton =
    document.getElementById("submitButton");


/* =========================================
   INFORMATION SETTINGS
========================================= */

const informationSettings = {

    mobile: {

        placeholder: "Enter new mobile number",

        inputType: "tel"

    },


    email: {

        placeholder: "Enter new email address",

        inputType: "email"

    },


    address: {

        placeholder: "Enter new address",

        inputType: "text"

    },


    nominee: {

        placeholder: "Enter new nominee information",

        inputType: "text"

    },


    bank: {

        placeholder: "Enter new bank information",

        inputType: "text"

    },


    signature: {

        placeholder: "Enter signature information",

        inputType: "text"

    },


    other: {

        placeholder: "Enter new information",

        inputType: "text"

    }

};


/* =========================================
   CHANGE TYPE FUNCTION
========================================= */

function changeInformation() {

    const selectedType =
        changeType.value;


    /* Clear error */

    hideError();


    /* Clear new information */

    newInfo.value = "";


    /* No selection */

    if (selectedType === "") {

        existingInfo.value = "";

        newInfo.placeholder = "";

        newInfo.type = "text";

        return;
    }


    /* Get existing information */

    existingInfo.value =
        existingInformation[selectedType] || "";


    /* Get settings */

    const settings =
        informationSettings[selectedType];


    if (settings) {

        newInfo.placeholder =
            settings.placeholder;


        newInfo.type =
            settings.inputType;

    }

}


/* =========================================
   HIDE ERROR
========================================= */

function hideError() {

    newInfoError.style.display = "none";

}


/* =========================================
   SHOW ERROR
========================================= */

function showError(message) {

    newInfoError.textContent =
        message;

    newInfoError.style.display =
        "block";

}


/* =========================================
   VALIDATE MOBILE NUMBER
========================================= */

function validateMobileNumber(value) {

    /*
       Bangladesh mobile example:

       01XXXXXXXXX

       11 digits
    */

    const mobilePattern =
        /^01[3-9]\d{8}$/;

    return mobilePattern.test(value);

}


/* =========================================
   VALIDATE EMAIL
========================================= */

function validateEmail(value) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(value);

}


/* =========================================
   SUBMIT FORM
========================================= */

function submitForm() {

    const selectedType =
        changeType.value;


    const newValue =
        newInfo.value.trim();


    /* Hide old error */

    hideError();


    /* ================================
       CHECK CHANGE TYPE
    ================================= */

    if (selectedType === "") {

        alert(
            "Please select Change Type."
        );

        changeType.focus();

        return;
    }


    /* ================================
       CHECK EMPTY VALUE
    ================================= */

    if (newValue === "") {

        showError(
            "Please enter new information."
        );

        newInfo.focus();

        return;
    }


    /* ================================
       MOBILE VALIDATION
    ================================= */

    if (selectedType === "mobile") {

        if (!validateMobileNumber(newValue)) {

            showError(
                "Please enter a valid mobile number."
            );

            newInfo.focus();

            return;
        }

    }


    /* ================================
       EMAIL VALIDATION
    ================================= */

    if (selectedType === "email") {

        if (!validateEmail(newValue)) {

            showError(
                "Please enter a valid email address."
            );

            newInfo.focus();

            return;
        }

    }


    /* ================================
       GET OTHER FORM DATA
    ================================= */

    const name =
        document.getElementById("name").value;


    const remarks =
        document.getElementById("remarks").value.trim();


    const attachment =
        document.getElementById("attachment");


    let fileName =
        "No attachment";


    if (
        attachment.files &&
        attachment.files.length > 0
    ) {

        fileName =
            attachment.files[0].name;

    }


    /* ================================
       DEMO SUCCESS
    ================================= */

    console.log("BO INFORMATION CHANGE");

    console.log("Name:", name);

    console.log(
        "Change Type:",
        selectedType
    );

    console.log(
        "Existing Information:",
        existingInfo.value
    );

    console.log(
        "New Information:",
        newValue
    );

    console.log(
        "Remarks:",
        remarks
    );

    console.log(
        "Attachment:",
        fileName
    );


    alert(
        "BO Information Change request submitted successfully."
    );

}


/* =========================================
   CHANGE TYPE EVENT
========================================= */

changeType.addEventListener(
    "change",
    changeInformation
);


/* =========================================
   CLEAR ERROR WHEN USER TYPES
========================================= */

newInfo.addEventListener(
    "input",
    function () {

        hideError();

    }
);


/* =========================================
   INITIAL PAGE STATE
========================================= */

changeInformation();