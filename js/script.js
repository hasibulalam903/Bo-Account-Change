document.addEventListener("DOMContentLoaded", function () {

    // =====================================================
    // ELEMENTS
    // =====================================================

    const changeType = document.getElementById("changeType");
    const existingInfo = document.getElementById("existingInfo");

    const normalNewInfoRow =
        document.getElementById("normalNewInfoRow");

    const newInfo =
        document.getElementById("newInfo");

    const newInfoError =
        document.getElementById("newInfoError");

    const bankInfo =
        document.getElementById("bankInfo");

    const bankName =
        document.getElementById("bankName");

    const branchName =
        document.getElementById("branchName");

    const upazila =
        document.getElementById("upazila");

    const routingNumber =
        document.getElementById("routingNumber");

    const accountNumber =
        document.getElementById("accountNumber");

    const bankError =
        document.getElementById("bankError");

    const submitButton =
        document.getElementById("submitButton");


    // =====================================================
    // EXISTING INFORMATION
    // =====================================================

    const existingData = {

        mobile: "01623480030",

        email: "hasibul@example.com",

        bank_info:
            "EASTERN BANK LTD. - A/C XXXXXXXX",

        bkash: "01812345678",

        contact_address:
            "Rangunia, Chattogram, Bangladesh",

        nid: "12345678901234567",

        photo:
            "Investor Photo",

        signature:
            "Investor Signature"
    };


    // =====================================================
    // PLACEHOLDERS
    // =====================================================

    const placeholderData = {

        mobile:
            "Enter New Mobile Number",

        email:
            "Enter New Email Address",

        bkash:
            "Enter New Bkash Number",

        contact_address:
            "Enter New Contact Address",

        nid:
            "Enter New NID Number",

        photo:
            "Select New Investor Photo",

        signature:
            "Select New Investor Signature"
    };


    // =====================================================
    // BANK DATA
    // =====================================================

    const bankData = {

        eastern: [

            {
                name: "Principal Branch",
                upazila: "Motijheel",
                routing: "095155807"
            },

            {
                name: "Gulshan Branch",
                upazila: "Gulshan",
                routing: "095155808"
            },

            {
                name: "Agrabad Branch",
                upazila: "Kotwali",
                routing: "095155809"
            }

        ],


        dbbl: [

            {
                name: "Motijheel Branch",
                upazila: "Motijheel",
                routing: "090270001"
            },

            {
                name: "Gulshan Branch",
                upazila: "Gulshan",
                routing: "090270002"
            }

        ],


        brac: [

            {
                name: "Gulshan Branch",
                upazila: "Gulshan",
                routing: "060260001"
            },

            {
                name: "Dhanmondi Branch",
                upazila: "Dhanmondi",
                routing: "060260002"
            }

        ],


        city: [

            {
                name: "Gulshan Branch",
                upazila: "Gulshan",
                routing: "225260001"
            },

            {
                name: "Motijheel Branch",
                upazila: "Motijheel",
                routing: "225260002"
            }

        ],


        prime: [

            {
                name: "Banani Branch",
                upazila: "Banani",
                routing: "170260001"
            },

            {
                name: "Motijheel Branch",
                upazila: "Motijheel",
                routing: "170260002"
            }

        ]

    };


    // =====================================================
    // INITIAL STATE
    // =====================================================

    bankInfo.style.display = "none";

    branchName.disabled = true;


    // =====================================================
    // CHANGE TYPE
    // =====================================================

    changeType.addEventListener("change", function () {

        const selectedType = this.value;


        // ---------------------------------------------
        // RESET
        // ---------------------------------------------

        existingInfo.value = "";

        newInfo.value = "";

        newInfoError.classList.remove("show");

        bankError.textContent = "";

        bankInfo.style.display = "none";

        normalNewInfoRow.style.display = "flex";

        newInfo.type = "text";

        newInfo.removeAttribute("accept");


        // ---------------------------------------------
        // NOTHING SELECTED
        // ---------------------------------------------

        if (selectedType === "") {

            existingInfo.placeholder =
                "Select Change Type";

            newInfo.placeholder =
                "Select Change Type";

            return;
        }


        // ---------------------------------------------
        // EXISTING INFORMATION
        // ---------------------------------------------

        existingInfo.value =
            existingData[selectedType] || "";


        // =================================================
        // MOBILE NUMBER
        // =================================================

        if (selectedType === "mobile") {

            newInfo.type = "tel";

            newInfo.placeholder =
                placeholderData.mobile;

            return;
        }


        // =================================================
        // EMAIL
        // =================================================

        if (selectedType === "email") {

            newInfo.type = "email";

            newInfo.placeholder =
                placeholderData.email;

            return;
        }


        // =================================================
        // BANK INFORMATION
        // =================================================

        if (selectedType === "bank_info") {

            // Hide normal New Info
            normalNewInfoRow.style.display = "none";

            // Show Bank Info
            bankInfo.style.display = "block";

            // Reset bank fields
            resetBankFields();

            return;
        }


        // =================================================
        // BKASH
        // =================================================

        if (selectedType === "bkash") {

            newInfo.type = "tel";

            newInfo.placeholder =
                placeholderData.bkash;

            return;
        }


        // =================================================
        // CONTACT ADDRESS
        // =================================================

        if (selectedType === "contact_address") {

            newInfo.type = "text";

            newInfo.placeholder =
                placeholderData.contact_address;

            return;
        }


        // =================================================
        // NID
        // =================================================

        if (selectedType === "nid") {

            newInfo.type = "text";

            newInfo.placeholder =
                placeholderData.nid;

            return;
        }


        // =================================================
        // PHOTO
        // =================================================

        if (selectedType === "photo") {

            newInfo.type = "file";

            newInfo.accept = "image/*";

            return;
        }


        // =================================================
        // SIGNATURE
        // =================================================

        if (selectedType === "signature") {

            newInfo.type = "file";

            newInfo.accept = "image/*";

            return;
        }

    });


    // =====================================================
    // RESET BANK FIELDS
    // =====================================================

    function resetBankFields() {

        bankName.value = "";

        branchName.innerHTML = `
            <option value="">
                --Select Branch Name--
            </option>
        `;

        branchName.disabled = true;

        upazila.value = "";

        routingNumber.value = "";

        accountNumber.value = "";

        bankError.textContent = "";
    }


    // =====================================================
    // BANK NAME CHANGE
    // =====================================================

    bankName.addEventListener("change", function () {

        const selectedBank = this.value;


        // Reset branch
        branchName.innerHTML = `
            <option value="">
                --Select Branch Name--
            </option>
        `;

        branchName.disabled = true;


        // Reset details
        upazila.value = "";

        routingNumber.value = "";


        if (selectedBank === "") {

            return;
        }


        const branches =
            bankData[selectedBank];


        if (!branches) {

            return;
        }


        // Add branches
        branches.forEach(function (branch) {

            const option =
                document.createElement("option");

            option.value =
                branch.routing;

            option.textContent =
                branch.name;

            branchName.appendChild(option);

        });


        // Enable branch
        branchName.disabled = false;

    });


    // =====================================================
    // BRANCH NAME CHANGE
    // =====================================================

    branchName.addEventListener("change", function () {

        const selectedBank =
            bankName.value;

        const selectedRouting =
            this.value;


        upazila.value = "";

        routingNumber.value = "";


        if (
            selectedBank === "" ||
            selectedRouting === ""
        ) {

            return;
        }


        const branches =
            bankData[selectedBank];


        if (!branches) {

            return;
        }


        const selectedBranch =
            branches.find(function (branch) {

                return (
                    branch.routing ===
                    selectedRouting
                );

            });


        if (!selectedBranch) {

            return;
        }


        // Upazila
        upazila.value =
            selectedBranch.upazila;


        // Routing Number
        routingNumber.value =
            selectedBranch.routing;

    });


    // =====================================================
    // ACCOUNT NUMBER
    // =====================================================

    accountNumber.addEventListener("input", function () {

        // Only numbers
        this.value =
            this.value.replace(/\D/g, "");


        // Maximum 13 digits
        if (this.value.length > 13) {

            this.value =
                this.value.substring(0, 13);

        }

    });


    // =====================================================
    // NORMAL INPUT ERROR
    // =====================================================

    newInfo.addEventListener("input", function () {

        if (newInfo.value.trim() !== "") {

            newInfoError.classList.remove("show");

        }

    });


    // =====================================================
    // VALIDATE MOBILE
    // =====================================================

    function validateMobile(value) {

        const mobilePattern =
            /^01[3-9]\d{8}$/;

        if (!mobilePattern.test(value)) {

            newInfoError.textContent =
                "Please enter a valid Bangladesh mobile number.";

            newInfoError.classList.add("show");

            newInfo.focus();

            return false;
        }

        return true;
    }


    // =====================================================
    // VALIDATE EMAIL
    // =====================================================

    function validateEmail(value) {

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(value)) {

            newInfoError.textContent =
                "Please enter a valid email address.";

            newInfoError.classList.add("show");

            newInfo.focus();

            return false;
        }

        return true;
    }


    // =====================================================
    // VALIDATE NID
    // =====================================================

    function validateNID(value) {

        const nidPattern =
            /^(\d{10}|\d{13}|\d{17})$/;

        if (!nidPattern.test(value)) {

            newInfoError.textContent =
                "NID must contain 10, 13 or 17 digits.";

            newInfoError.classList.add("show");

            newInfo.focus();

            return false;
        }

        return true;
    }


    // =====================================================
    // VALIDATE BANK
    // =====================================================

    function validateBank() {

        bankError.textContent = "";


        // Bank
        if (bankName.value === "") {

            bankError.textContent =
                "Please select Bank Name.";

            bankName.focus();

            return false;
        }


        // Branch
        if (branchName.value === "") {

            bankError.textContent =
                "Please select Branch Name.";

            branchName.focus();

            return false;
        }


        // Account
        const accountValue =
            accountNumber.value.trim();


        if (accountValue === "") {

            bankError.textContent =
                "Please enter Account Number.";

            accountNumber.focus();

            return false;
        }


        if (!/^\d{13}$/.test(accountValue)) {

            bankError.textContent =
                "Account Number must contain exactly 13 digits.";

            accountNumber.focus();

            return false;
        }


        // Routing
        if (routingNumber.value.trim() === "") {

            bankError.textContent =
                "Routing Number is required.";

            return false;
        }


        return true;
    }


    // =====================================================
    // SUBMIT
    // =====================================================

    submitButton.addEventListener("click", function () {

        const selectedType =
            changeType.value;


        // =================================================
        // CHANGE TYPE REQUIRED
        // =================================================

        if (selectedType === "") {

            alert(
                "Please select a Change Type."
            );

            changeType.focus();

            return;
        }


        // =================================================
        // BANK INFO
        // =================================================

        if (selectedType === "bank_info") {

            if (!validateBank()) {

                return;
            }


            const bankText =
                bankName.options[
                    bankName.selectedIndex
                ].text;


            const branchText =
                branchName.options[
                    branchName.selectedIndex
                ].text;


            const summary =
                "Bank Name: " +
                bankText +
                " | Branch Name: " +
                branchText +
                " | Upazila: " +
                upazila.value +
                " | Routing Number: " +
                routingNumber.value +
                " | Account Number: " +
                accountNumber.value;


            const confirmation =
                confirm(
                    "Are you sure you want to change your Bank Information?"
                );


            if (!confirmation) {

                return;
            }


            existingData.bank_info =
                summary;


            existingInfo.value =
                summary;


            alert(
                "Bank information changed successfully!"
            );


            return;
        }


        // =================================================
        // NORMAL INFORMATION
        // =================================================

        let value = "";


        // File
        if (
            selectedType === "photo" ||
            selectedType === "signature"
        ) {

            if (
                newInfo.files.length === 0
            ) {

                newInfoError.textContent =
                    "Please select a file.";

                newInfoError.classList.add(
                    "show"
                );

                newInfo.focus();

                return;
            }


            value =
                newInfo.files[0].name;

        }

        // Text
        else {

            value =
                newInfo.value.trim();


            if (value === "") {

                newInfoError.textContent =
                    "Please enter new information.";

                newInfoError.classList.add(
                    "show"
                );

                newInfo.focus();

                return;
            }

        }


        // =================================================
        // MOBILE VALIDATION
        // =================================================

        if (
            selectedType === "mobile" ||
            selectedType === "bkash"
        ) {

            if (!validateMobile(value)) {

                return;
            }

        }


        // =================================================
        // EMAIL VALIDATION
        // =================================================

        if (selectedType === "email") {

            if (!validateEmail(value)) {

                return;
            }

        }


        // =================================================
        // NID VALIDATION
        // =================================================

        if (selectedType === "nid") {

            if (!validateNID(value)) {

                return;
            }

        }


        // =================================================
        // CONFIRM
        // =================================================

        const confirmation =
            confirm(
                "Are you sure you want to change your " +
                getChangeTypeName(selectedType) +
                "?"
            );


        if (!confirmation) {

            return;
        }


        // =================================================
        // UPDATE EXISTING DATA
        // =================================================

        existingData[selectedType] =
            value;


        existingInfo.value =
            value;


        // Clear
        newInfo.value = "";

        newInfoError.classList.remove(
            "show"
        );


        // =================================================
        // SUCCESS
        // =================================================

        alert(
            "BO information changed successfully!"
        );

    });


    // =====================================================
    // GET CHANGE TYPE NAME
    // =====================================================

    function getChangeTypeName(type) {

        const names = {

            mobile:
                "Mobile Number",

            email:
                "Email Address",

            bank_info:
                "Bank Info",

            bkash:
                "Bkash Number",

            contact_address:
                "Contact Address",

            nid:
                "Investor NID",

            photo:
                "Investor Photo",

            signature:
                "Investor Signature"

        };


        return (
            names[type] ||
            "Information"
        );
    }

});