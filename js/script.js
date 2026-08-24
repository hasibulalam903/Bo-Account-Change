document.addEventListener("DOMContentLoaded", function () {

    const changeType = document.getElementById("changeType");
    const existingInfo = document.getElementById("existingInfo");
    const newInfo = document.getElementById("newInfo");
    const newInfoError = document.getElementById("newInfoError");
    const submitButton = document.getElementById("submitButton");


    /*
    ==========================================
    EXISTING BO INFORMATION
    ==========================================
    */

    const existingData = {

        mobile: "017XXXXXXXX",

        email: "hasibul@example.com",

        bank_info: "ABC Bank Ltd. - A/C XXXXXXXX",

        bkash: "018XXXXXXXX",

        contact_address: "Rangunia, Chattogram, Bangladesh",

        nid: "XXXXXXXXXXXXXXX",

        photo: "Investor Photo",

        signature: "Investor Signature"

    };


    /*
    ==========================================
    INPUT PLACEHOLDER
    ==========================================
    */

    const placeholderData = {

        mobile: "Enter New Mobile Number",

        email: "Enter New Email Address",

        bank_info: "Enter New Bank Information",

        bkash: "Enter New Bkash Number",

        contact_address: "Enter New Contact Address",

        nid: "Enter New NID Number",

        photo: "Select New Investor Photo",

        signature: "Select New Investor Signature"

    };


    /*
    ==========================================
    WHEN CHANGE TYPE IS SELECTED
    ==========================================
    */

    changeType.addEventListener("change", function () {

        const selectedType = this.value;

        // Clear previous new information
        newInfo.value = "";

        // Hide error
        newInfoError.classList.remove("show");

        /*
        No selection
        */

        if (selectedType === "") {

            existingInfo.value = "";
            existingInfo.placeholder = "Select Change Type";

            newInfo.placeholder = "Select Change Type";

            newInfo.type = "text";

            return;
        }


        /*
        Show existing information
        */

        existingInfo.value = existingData[selectedType] || "";


        /*
        Change placeholder
        */

        newInfo.placeholder =
            placeholderData[selectedType] || "Enter New Information";


        /*
        ==========================================
        CHANGE INPUT TYPE
        ==========================================
        */

        if (selectedType === "email") {

            newInfo.type = "email";

        }

        else if (
            selectedType === "mobile" ||
            selectedType === "bkash"
        ) {

            newInfo.type = "tel";

        }

        else {

            newInfo.type = "text";

        }


        /*
        ==========================================
        PHOTO / SIGNATURE
        ==========================================
        */

        if (
            selectedType === "photo" ||
            selectedType === "signature"
        ) {

            newInfo.type = "file";

            newInfo.accept = "image/*";

        }

        else {

            newInfo.removeAttribute("accept");

        }

    });


    /*
    ==========================================
    NEW INFO INPUT
    ==========================================
    */

    newInfo.addEventListener("input", function () {

        if (newInfo.value.trim() !== "") {

            newInfoError.classList.remove("show");

        }

    });


    /*
    ==========================================
    VALIDATION
    ==========================================
    */

    function validateForm() {

        const selectedType = changeType.value;

        /*
        Change Type validation
        */

        if (selectedType === "") {

            alert("Please select a Change Type.");

            changeType.focus();

            return false;
        }


        /*
        File validation
        */

        if (
            selectedType === "photo" ||
            selectedType === "signature"
        ) {

            if (newInfo.files.length === 0) {

                newInfoError.textContent =
                    "Please select a file.";

                newInfoError.classList.add("show");

                newInfo.focus();

                return false;
            }

            return true;
        }


        /*
        Text validation
        */

        const value = newInfo.value.trim();

        if (value === "") {

            newInfoError.textContent =
                "Please enter new information.";

            newInfoError.classList.add("show");

            newInfo.focus();

            return false;
        }


        /*
        Mobile validation
        */

        if (
            selectedType === "mobile" ||
            selectedType === "bkash"
        ) {

            const mobilePattern = /^01[3-9]\d{8}$/;

            if (!mobilePattern.test(value)) {

                newInfoError.textContent =
                    "Please enter a valid Bangladesh mobile number.";

                newInfoError.classList.add("show");

                newInfo.focus();

                return false;
            }

        }


        /*
        Email validation
        */

        if (selectedType === "email") {

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(value)) {

                newInfoError.textContent =
                    "Please enter a valid email address.";

                newInfoError.classList.add("show");

                newInfo.focus();

                return false;
            }

        }


        /*
        NID validation
        */

        if (selectedType === "nid") {

            const nidPattern = /^\d{10}$|^\d{13}$|^\d{17}$/;

            if (!nidPattern.test(value)) {

                newInfoError.textContent =
                    "NID must contain 10, 13 or 17 digits.";

                newInfoError.classList.add("show");

                newInfo.focus();

                return false;
            }

        }


        return true;
    }


    /*
    ==========================================
    SUBMIT
    ==========================================
    */

    submitButton.addEventListener("click", function () {

        if (!validateForm()) {
            return;
        }


        const selectedType = changeType.value;

        let newValue;


        /*
        File
        */

        if (
            selectedType === "photo" ||
            selectedType === "signature"
        ) {

            newValue = newInfo.files[0].name;

        }

        else {

            newValue = newInfo.value.trim();

        }


        /*
        Confirmation
        */

        const confirmation = confirm(
            "Are you sure you want to change your " +
            getChangeTypeName(selectedType) +
            "?"
        );


        if (!confirmation) {
            return;
        }


        /*
        Frontend only:
        Update existing information
        */

        existingData[selectedType] = newValue;


        existingInfo.value = newValue;

        newInfo.value = "";

        newInfoError.classList.remove("show");


        alert(
            "BO information changed successfully!"
        );

    });


    /*
    ==========================================
    GET CHANGE TYPE NAME
    ==========================================
    */

    function getChangeTypeName(type) {

        const names = {

            mobile: "Mobile Number",

            email: "Email Address",

            bank_info: "Bank Info",

            bkash: "Bkash Number",

            contact_address: "Contact Address",

            nid: "Investor NID",

            photo: "Investor Photo",

            signature: "Investor Signature"

        };

        return names[type] || "Information";

    }

});
document.addEventListener("DOMContentLoaded", function () {

    const changeType = document.getElementById("changeType");
    const existingInfo = document.getElementById("existingInfo");
    const newInfo = document.getElementById("newInfo");
    const newInfoError = document.getElementById("newInfoError");
    const submitButton = document.getElementById("submitButton");


    // ==========================================
    // EXISTING BO INFORMATION
    // ==========================================

    const existingData = {
        mobile: "01623480030",
        email: "hasibul@example.com",
        bank_info: "ABC Bank Ltd. - A/C XXXXXXXX",
        bkash: "01812345678",
        contact_address: "Rangunia, Chattogram, Bangladesh",
        nid: "12345678901234567",
        photo: "Investor Photo",
        signature: "Investor Signature"
    };


    // ==========================================
    // NEW INFO PLACEHOLDER
    // ==========================================

    const placeholderData = {
        mobile: "Enter Mobile Number",
        email: "Enter Email Address",
        bank_info: "Enter Bank Information",
        bkash: "Enter Bkash Number",
        contact_address: "Enter Contact Address",
        nid: "Enter NID Number",
        photo: "Enter Photo Information",
        signature: "Enter Signature Information"
    };


    // ==========================================
    // CHANGE TYPE
    // ==========================================

    changeType.addEventListener("change", function () {

        const selectedType = this.value;


        // Clear previous values
        newInfo.value = "";

        newInfoError.classList.remove("show");


        // ======================================
        // NOTHING SELECTED
        // ======================================

        if (selectedType === "") {

            existingInfo.value = "";

            existingInfo.placeholder =
                "Select Change Type";

            newInfo.placeholder =
                "Select Change Type";

            newInfo.type = "text";

            return;
        }


        // ======================================
        // EXISTING INFORMATION
        // ======================================

        existingInfo.value =
            existingData[selectedType];


        // ======================================
        // NEW INFORMATION PLACEHOLDER
        // ======================================

        newInfo.placeholder =
            placeholderData[selectedType];


        // ======================================
        // INPUT TYPE
        // ======================================

        if (selectedType === "email") {

            newInfo.type = "email";

        }
        else if (
            selectedType === "mobile" ||
            selectedType === "bkash"
        ) {

            newInfo.type = "tel";

        }
        else {

            newInfo.type = "text";

        }

    });


    // ==========================================
    // REMOVE ERROR WHEN USER TYPES
    // ==========================================

    newInfo.addEventListener("input", function () {

        if (newInfo.value.trim() !== "") {

            newInfoError.classList.remove("show");

        }

    });


    // ==========================================
    // SUBMIT
    // ==========================================

    submitButton.addEventListener("click", function () {

        const selectedType = changeType.value;


        // Change Type validation
        if (selectedType === "") {

            alert("Please select a Change Type.");

            changeType.focus();

            return;
        }


        // New Info validation
        const value = newInfo.value.trim();

        if (value === "") {

            newInfoError.textContent =
                "Please enter new information.";

            newInfoError.classList.add("show");

            newInfo.focus();

            return;
        }


        // Mobile validation
        if (
            selectedType === "mobile" ||
            selectedType === "bkash"
        ) {

            const mobilePattern =
                /^01[3-9]\d{8}$/;


            if (!mobilePattern.test(value)) {

                newInfoError.textContent =
                    "Please enter a valid Bangladesh mobile number.";

                newInfoError.classList.add("show");

                newInfo.focus();

                return;
            }
        }


        // Email validation
        if (selectedType === "email") {

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(value)) {

                newInfoError.textContent =
                    "Please enter a valid email address.";

                newInfoError.classList.add("show");

                newInfo.focus();

                return;
            }
        }


        alert(
            "BO information changed successfully!"
        );

    });

});