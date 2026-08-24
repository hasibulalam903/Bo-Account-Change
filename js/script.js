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
/*Bank Information Change Form Validation Script*/
document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       ELEMENTS
    ========================================= */

    const changeType =
        document.getElementById("changeType");

    const existingInfo =
        document.getElementById("existingInfo");

    const newInfoContainer =
        document.getElementById("newInfoContainer");

    const attachment =
        document.getElementById("attachment");

    const fileInfo =
        document.getElementById("fileInfo");

    const submitButton =
        document.getElementById("submitButton");


    /* =========================================
       EXISTING BO INFORMATION
    ========================================= */

    const existingData = {

        mobile:
            "01623480030",

        email:
            "hasibul@example.com",

        bank_info:
            "Bank Name: EASTERN BANK LTD., A/C No: 8068220001094, Routing No: 095155807",

        bkash:
            "01812345678",

        contact_address:
            "Rangunia, Chattogram, Bangladesh",

        nid:
            "12345678901234567",

        photo:
            "Investor Photo",

        signature:
            "Investor Signature"

    };


    /* =========================================
       PLACEHOLDERS
    ========================================= */

    const placeholderData = {

        mobile:
            "Enter Mobile Number",

        email:
            "Enter Email Address",

        bkash:
            "Enter Bkash Number",

        contact_address:
            "Enter Contact Address",

        nid:
            "Enter NID Number"

    };


    /* =========================================
       CHANGE TYPE
    ========================================= */

    changeType.addEventListener(
        "change",
        function () {

            const selectedType =
                this.value;


            /* Clear */

            newInfoContainer.innerHTML = "";

            existingInfo.value = "";


            /* =================================
               NO SELECTION
            ================================= */

            if (selectedType === "") {

                existingInfo.placeholder =
                    "Select Change Type";

                createTextInput(
                    "Select Change Type"
                );

                return;
            }


            /* =================================
               EXISTING INFORMATION
            ================================= */

            existingInfo.value =
                existingData[selectedType] || "";


            /* =================================
               MOBILE
            ================================= */

            if (selectedType === "mobile") {

                createTextInput(
                    "Enter Mobile Number",
                    "tel"
                );

                return;
            }


            /* =================================
               EMAIL
            ================================= */

            if (selectedType === "email") {

                createTextInput(
                    "Enter Email Address",
                    "email"
                );

                return;
            }


            /* =================================
               BANK INFO
            ================================= */

            if (selectedType === "bank_info") {

                createBankInformation();

                return;
            }


            /* =================================
               BKASH
            ================================= */

            if (selectedType === "bkash") {

                createTextInput(
                    "Enter Bkash Number",
                    "tel"
                );

                return;
            }


            /* =================================
               CONTACT ADDRESS
            ================================= */

            if (
                selectedType ===
                "contact_address"
            ) {

                createTextInput(
                    "Enter New Contact Address",
                    "text"
                );

                return;
            }


            /* =================================
               NID
            ================================= */

            if (selectedType === "nid") {

                createTextInput(
                    "Enter New NID Number",
                    "text"
                );

                return;
            }


            /* =================================
               PHOTO
            ================================= */

            if (selectedType === "photo") {

                createFileInput(
                    "image/*"
                );

                return;
            }


            /* =================================
               SIGNATURE
            ================================= */

            if (selectedType === "signature") {

                createFileInput(
                    "image/*"
                );

                return;
            }

        }
    );


    /* =========================================
       CREATE NORMAL INPUT
    ========================================= */

    function createTextInput(
        placeholder,
        type = "text"
    ) {

        const input =
            document.createElement("input");


        input.type = type;

        input.id = "newInfo";

        input.className =
            "form-control";

        input.placeholder =
            placeholder;


        newInfoContainer.appendChild(
            input
        );


        const error =
            document.createElement("span");


        error.id =
            "newInfoError";

        error.className =
            "error";

        error.textContent =
            "Please enter new information.";


        newInfoContainer.appendChild(
            error
        );


        input.addEventListener(
            "input",
            function () {

                error.style.display =
                    "none";

            }
        );

    }


    /* =========================================
       CREATE FILE INPUT
    ========================================= */

    function createFileInput(
        accept
    ) {

        const input =
            document.createElement("input");


        input.type = "file";

        input.id = "newInfo";

        input.className =
            "form-control";

        input.accept =
            accept;


        newInfoContainer.appendChild(
            input
        );


        const error =
            document.createElement("span");


        error.id =
            "newInfoError";

        error.className =
            "error";

        error.textContent =
            "Please select a file.";


        newInfoContainer.appendChild(
            error
        );

    }


    /* =========================================
       CREATE BANK INFORMATION
    ========================================= */

    function createBankInformation() {

        const bankBox =
            document.createElement("div");


        bankBox.className =
            "bank-info-box";


        /* =====================================
           BANK NAME ROW
        ===================================== */

        const bankRow =
            document.createElement("div");


        bankRow.className =
            "bank-row";


        const bankLabel =
            document.createElement("div");


        bankLabel.className =
            "bank-label";

        bankLabel.textContent =
            "Bank Name :";


        const bankField =
            document.createElement("div");


        bankField.className =
            "bank-field";


        const bankSelect =
            document.createElement("select");


        bankSelect.id =
            "bankName";

        bankSelect.className =
            "bank-control";


        bankSelect.innerHTML = `

            <option value="">
                --Select Bank Name--
            </option>

            <option value="eastern">
                EASTERN BANK LTD.
            </option>

            <option value="dbbl">
                DUTCH-BANGLA BANK PLC.
            </option>

            <option value="brac">
                BRAC BANK PLC.
            </option>

            <option value="city">
                CITY BANK PLC.
            </option>

            <option value="prime">
                PRIME BANK PLC.
            </option>

        `;


        bankField.appendChild(
            bankSelect
        );


        const bankEmpty =
            document.createElement("div");


        bankEmpty.className =
            "bank-field";


        bankRow.appendChild(
            bankLabel
        );

        bankRow.appendChild(
            bankField
        );

        bankRow.appendChild(
            bankEmpty
        );


        bankBox.appendChild(
            bankRow
        );


        /* =====================================
           BRANCH ROW
        ===================================== */

        const branchRow =
            document.createElement("div");


        branchRow.className =
            "bank-row";


        const branchLabel =
            document.createElement("div");


        branchLabel.className =
            "bank-label";

        branchLabel.textContent =
            "Branch Name :";


        const branchField =
            document.createElement("div");


        branchField.className =
            "bank-field";


        const branchSelect =
            document.createElement("select");


        branchSelect.id =
            "branchName";

        branchSelect.className =
            "bank-control";


        branchSelect.innerHTML = `

            <option value="">
                --Select Branch Name--
            </option>

        `;


        branchField.appendChild(
            branchSelect
        );


        const routingField =
            document.createElement("div");


        routingField.className =
            "bank-field";


        const routingSelect =
            document.createElement("select");


        routingSelect.id =
            "branchCode";

        routingSelect.className =
            "bank-control";


        routingSelect.innerHTML = `

            <option value="">
                --Select Branch Code--
            </option>

        `;


        routingField.appendChild(
            routingSelect
        );


        branchRow.appendChild(
            branchLabel
        );

        branchRow.appendChild(
            branchField
        );

        branchRow.appendChild(
            routingField
        );


        bankBox.appendChild(
            branchRow
        );


        /* =====================================
           ACCOUNT NUMBER ROW
        ===================================== */

        const accountRow =
            document.createElement("div");


        accountRow.className =
            "bank-row";


        const accountLabel =
            document.createElement("div");


        accountLabel.className =
            "bank-label";

        accountLabel.textContent =
            "Account Number :";


        const accountField =
            document.createElement("div");


        accountField.className =
            "bank-field";


        const accountInput =
            document.createElement("input");


        accountInput.type =
            "text";

        accountInput.id =
            "accountNumber";

        accountInput.className =
            "bank-control";

        accountInput.placeholder =
            "Enter 13 Digits Bank Account No.";

        accountInput.maxLength =
            13;


        accountField.appendChild(
            accountInput
        );


        const routingNumberField =
            document.createElement("div");


        routingNumberField.className =
            "bank-field";


        const routingNumber =
            document.createElement("input");


        routingNumber.type =
            "text";

        routingNumber.id =
            "routingNumber";

        routingNumber.className =
            "bank-control";

        routingNumber.placeholder =
            "Routing Number";


        routingNumberField.appendChild(
            routingNumber
        );


        accountRow.appendChild(
            accountLabel
        );

        accountRow.appendChild(
            accountField
        );

        accountRow.appendChild(
            routingNumberField
        );


        bankBox.appendChild(
            accountRow
        );


        newInfoContainer.appendChild(
            bankBox
        );


        /* =====================================
           BANK → BRANCH DATA
        ===================================== */

        const branchData = {

            eastern: [

                {
                    name: "Principal Branch",
                    code: "095155807"
                },

                {
                    name: "Gulshan Branch",
                    code: "095155808"
                },

                {
                    name: "Agrabad Branch",
                    code: "095155809"
                }

            ],

            dbbl: [

                {
                    name: "Motijheel Branch",
                    code: "090270001"
                },

                {
                    name: "Gulshan Branch",
                    code: "090270002"
                }

            ],

            brac: [

                {
                    name: "Gulshan Branch",
                    code: "060260001"
                },

                {
                    name: "Dhanmondi Branch",
                    code: "060260002"
                }

            ],

            city: [

                {
                    name: "Gulshan Branch",
                    code: "225260001"
                },

                {
                    name: "Motijheel Branch",
                    code: "225260002"
                }

            ],

            prime: [

                {
                    name: "Banani Branch",
                    code: "170260001"
                },

                {
                    name: "Motijheel Branch",
                    code: "170260002"
                }

            ]

        };


        /* =====================================
           BANK CHANGE
        ===================================== */

        bankSelect.addEventListener(
            "change",
            function () {

                const selectedBank =
                    this.value;


                branchSelect.innerHTML = `

                    <option value="">
                        --Select Branch Name--
                    </option>

                `;


                routingSelect.innerHTML = `

                    <option value="">
                        --Select Branch Code--
                    </option>

                `;


                if (
                    !branchData[selectedBank]
                ) {

                    return;

                }


                branchData[selectedBank]
                    .forEach(
                        function (branch) {

                            const option =
                                document.createElement(
                                    "option"
                                );


                            option.value =
                                branch.code;

                            option.textContent =
                                branch.name;


                            branchSelect.appendChild(
                                option
                            );


                            const codeOption =
                                document.createElement(
                                    "option"
                                );


                            codeOption.value =
                                branch.code;

                            codeOption.textContent =
                                branch.code;


                            routingSelect.appendChild(
                                codeOption
                            );

                        }
                    );

            }
        );


        /* =====================================
           BRANCH CHANGE
        ===================================== */

        branchSelect.addEventListener(
            "change",
            function () {

                const selectedCode =
                    this.value;


                routingSelect.value =
                    selectedCode;

            }
        );


        /* =====================================
           BRANCH CODE CHANGE
        ===================================== */

        routingSelect.addEventListener(
            "change",
            function () {

                const selectedCode =
                    this.value;


                branchSelect.value =
                    selectedCode;

            }
        );

    }


    /* =========================================
       ATTACHMENT
    ========================================= */

    attachment.addEventListener(
        "change",
        function () {

            if (
                this.files.length === 0
            ) {

                fileInfo.textContent =
                    "No file chosen";

                return;

            }


            fileInfo.textContent =
                this.files.length +
                " file(s) selected";

        }
    );


    /* =========================================
       SUBMIT
    ========================================= */

    submitButton.addEventListener(
        "click",
        function () {

            const selectedType =
                changeType.value;


            /* =================================
               CHANGE TYPE
            ================================= */

            if (
                selectedType === ""
            ) {

                alert(
                    "Please select a Change Type."
                );

                changeType.focus();

                return;

            }


            /* =================================
               BANK INFO
            ================================= */

            if (
                selectedType === "bank_info"
            ) {

                const bankName =
                    document.getElementById(
                        "bankName"
                    );

                const branchName =
                    document.getElementById(
                        "branchName"
                    );

                const accountNumber =
                    document.getElementById(
                        "accountNumber"
                    );

                const routingNumber =
                    document.getElementById(
                        "routingNumber"
                    );


                if (
                    !bankName ||
                    bankName.value === ""
                ) {

                    alert(
                        "Please select Bank Name."
                    );

                    return;

                }


                if (
                    !branchName ||
                    branchName.value === ""
                ) {

                    alert(
                        "Please select Branch Name."
                    );

                    return;

                }


                if (
                    !accountNumber ||
                    accountNumber.value.trim() === ""
                ) {

                    alert(
                        "Please enter Account Number."
                    );

                    accountNumber.focus();

                    return;

                }


                if (
                    !/^\d{13}$/.test(
                        accountNumber.value.trim()
                    )
                ) {

                    alert(
                        "Account Number must contain exactly 13 digits."
                    );

                    accountNumber.focus();

                    return;

                }


                if (
                    !routingNumber ||
                    routingNumber.value.trim() === ""
                ) {

                    alert(
                        "Please select Routing Number."
                    );

                    return;

                }


                alert(
                    "Bank information changed successfully!"
                );

                return;

            }


            /* =================================
               NORMAL INPUT
            ================================= */

            const newInfo =
                document.getElementById(
                    "newInfo"
                );


            if (!newInfo) {

                alert(
                    "Please enter new information."
                );

                return;

            }


            /* FILE */

            if (
                newInfo.type === "file"
            ) {

                if (
                    newInfo.files.length === 0
                ) {

                    alert(
                        "Please select a file."
                    );

                    return;

                }


                alert(
                    "BO information changed successfully!"
                );

                return;

            }


            /* TEXT */

            const value =
                newInfo.value.trim();


            if (
                value === ""
            ) {

                const error =
                    document.getElementById(
                        "newInfoError"
                    );


                if (error) {

                    error.style.display =
                        "block";

                }


                newInfo.focus();

                return;

            }


            /* =================================
               MOBILE
            ================================= */

            if (
                selectedType === "mobile" ||
                selectedType === "bkash"
            ) {

                const mobilePattern =
                    /^01[3-9]\d{8}$/;


                if (
                    !mobilePattern.test(value)
                ) {

                    alert(
                        "Please enter a valid Bangladesh mobile number."
                    );

                    newInfo.focus();

                    return;

                }

            }


            /* =================================
               EMAIL
            ================================= */

            if (
                selectedType === "email"
            ) {

                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


                if (
                    !emailPattern.test(value)
                ) {

                    alert(
                        "Please enter a valid email address."
                    );

                    newInfo.focus();

                    return;

                }

            }


            /* =================================
               NID
            ================================= */

            if (
                selectedType === "nid"
            ) {

                const nidPattern =
                    /^(\d{10}|\d{13}|\d{17})$/;


                if (
                    !nidPattern.test(value)
                ) {

                    alert(
                        "NID must contain 10, 13 or 17 digits."
                    );

                    newInfo.focus();

                    return;

                }

            }


            /* =================================
               SUCCESS
            ================================= */

            alert(
                "BO information changed successfully!"
            );

        }
    );

});