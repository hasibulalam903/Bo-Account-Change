document.addEventListener("DOMContentLoaded", function () {

    // =========================================================
    // ELEMENTS
    // =========================================================

    const changeType = document.getElementById("changeType");
    const existingInfo = document.getElementById("existingInfo");
    const newInfo = document.getElementById("newInfo");
    const newInfoError = document.getElementById("newInfoError");

    const bankInfo = document.getElementById("bankInfo");

    const bankName = document.getElementById("bankName");
    const branchName = document.getElementById("branchName");
    const upazila = document.getElementById("upazila");
    const routingNumber = document.getElementById("routingNumber");
    const accountNumber = document.getElementById("accountNumber");
    const bankError = document.getElementById("bankError");

    const remarks = document.getElementById("remarks");
    const attachment = document.getElementById("attachment");
    const submitButton = document.getElementById("submitButton");


    // =========================================================
    // EXISTING BO INFORMATION
    // =========================================================

    const existingData = {

        mobile: "01623480030",

        email: "hasibul@example.com",

        bank_info:
            "EASTERN BANK LTD. - Principal Branch - A/C 8068220001094",

        bkash: "01812345678",

        contact_address:
            "Rangunia, Chattogram, Bangladesh",

        nid: "12345678901234567",

        photo: "Investor Photo",

        signature: "Investor Signature"
    };


    // =========================================================
    // PLACEHOLDERS
    // =========================================================

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


    // =========================================================
    // BANK DATA
    //
    // NOTE:
    // These are sample/demo values.
    // Replace them with your actual Bangladesh bank data/API.
    // =========================================================

    const bankData = {

        ab_bank: {

            name: "AB Bank Limited",

            branches: [

                {
                    name: "Gulshan Branch",
                    upazila: "Gulshan",
                    routing: "020261725"
                },

                {
                    name: "Banani Branch",
                    upazila: "Banani",
                    routing: "020261818"
                },

                {
                    name: "Dhanmondi Branch",
                    upazila: "Dhanmondi",
                    routing: "020263530"
                }

            ]

        },


        jamuna_bank: {

            name: "Jamuna Bank Limited",

            branches: [

                {
                    name: "Gulshan Branch",
                    upazila: "Gulshan",
                    routing: "130261728"
                },

                {
                    name: "Banani Branch",
                    upazila: "Banani",
                    routing: "130261760"
                },

                {
                    name: "Dhanmondi Branch",
                    upazila: "Dhanmondi",
                    routing: "130263532"
                }

            ]

        },


        brac_bank: {

            name: "BRAC Bank Limited",

            branches: [

                {
                    name: "Gulshan Branch",
                    upazila: "Gulshan",
                    routing: "060261725"
                },

                {
                    name: "Banani Branch",
                    upazila: "Banani",
                    routing: "060261818"
                },

                {
                    name: "Dhanmondi Branch",
                    upazila: "Dhanmondi",
                    routing: "060263530"
                }

            ]

        },


        bank_asia: {

            name: "Bank Asia Limited",

            branches: [

                {
                    name: "Gulshan Branch",
                    upazila: "Gulshan",
                    routing: "035261725"
                },

                {
                    name: "Banani Branch",
                    upazila: "Banani",
                    routing: "035261818"
                },

                {
                    name: "Dhanmondi Branch",
                    upazila: "Dhanmondi",
                    routing: "035263530"
                }

            ]

        }

    };


    // =========================================================
    // ACCOUNT DATA
    //
    // Demo account numbers.
    // Replace with database/API data later.
    // =========================================================

    const accountData = {

        ab_bank: {

            "Gulshan Branch": [
                "1234567890123",
                "1234567890124"
            ],

            "Banani Branch": [
                "2234567890123",
                "2234567890124"
            ],

            "Dhanmondi Branch": [
                "3234567890123",
                "3234567890124"
            ]

        },


        jamuna_bank: {

            "Gulshan Branch": [
                "4234567890123",
                "4234567890124"
            ],

            "Banani Branch": [
                "5234567890123",
                "5234567890124"
            ],

            "Dhanmondi Branch": [
                "6234567890123",
                "6234567890124"
            ]

        },


        brac_bank: {

            "Gulshan Branch": [
                "7234567890123",
                "7234567890124"
            ],

            "Banani Branch": [
                "8234567890123",
                "8234567890124"
            ],

            "Dhanmondi Branch": [
                "9234567890123",
                "9234567890124"
            ]

        },


        bank_asia: {

            "Gulshan Branch": [
                "1234567891123",
                "1234567891124"
            ],

            "Banani Branch": [
                "2234567891123",
                "2234567891124"
            ],

            "Dhanmondi Branch": [
                "3234567891123",
                "3234567891124"
            ]

        }

    };


    // =========================================================
    // INITIAL BANK STATE
    // =========================================================

    function resetBankFields() {

        if (bankName) {
            bankName.value = "";
        }

        if (branchName) {

            branchName.innerHTML =
                '<option value="">--Select Branch Name--</option>';

            branchName.disabled = true;
        }


        if (upazila) {
            upazila.value = "";
        }


        if (routingNumber) {
            routingNumber.value = "";
        }


        if (accountNumber) {

            accountNumber.innerHTML =
                '<option value="">--Select Account Number--</option>';

            accountNumber.disabled = true;
        }


        if (bankError) {

            bankError.textContent = "";

            bankError.style.display = "none";
        }

    }


    // =========================================================
    // LOAD BRANCHES
    // =========================================================

    function loadBranches(selectedBank) {

        if (!branchName) {
            return;
        }


        // Clear branch
        branchName.innerHTML =
            '<option value="">--Select Branch Name--</option>';


        // Clear other fields
        if (upazila) {
            upazila.value = "";
        }


        if (routingNumber) {
            routingNumber.value = "";
        }


        if (accountNumber) {

            accountNumber.innerHTML =
                '<option value="">--Select Account Number--</option>';

            accountNumber.disabled = true;
        }


        // No bank
        if (!selectedBank) {

            branchName.disabled = true;

            return;
        }


        // Find bank
        const selectedBankData =
            bankData[selectedBank];


        if (!selectedBankData) {

            branchName.disabled = true;

            return;
        }


        // Add branches
        selectedBankData.branches.forEach(function (branch) {

            const option =
                document.createElement("option");


            option.value =
                branch.name;


            option.textContent =
                branch.name;


            branchName.appendChild(option);

        });


        // Enable branch dropdown
        branchName.disabled = false;

    }


    // =========================================================
    // LOAD BRANCH INFORMATION
    // =========================================================

    function loadBranchInformation() {

        const selectedBank =
            bankName ? bankName.value : "";


        const selectedBranch =
            branchName ? branchName.value : "";


        // Clear
        if (upazila) {
            upazila.value = "";
        }


        if (routingNumber) {
            routingNumber.value = "";
        }


        // Reset account
        if (accountNumber) {

            accountNumber.innerHTML =
                '<option value="">--Select Account Number--</option>';

            accountNumber.disabled = true;
        }


        if (!selectedBank || !selectedBranch) {
            return;
        }


        const selectedBankData =
            bankData[selectedBank];


        if (!selectedBankData) {
            return;
        }


        const branch =
            selectedBankData.branches.find(function (item) {

                return item.name === selectedBranch;

            });


        if (!branch) {
            return;
        }


        // Set Upazila
        if (upazila) {

            upazila.value =
                branch.upazila;

        }


        // Set Routing Number
        if (routingNumber) {

            routingNumber.value =
                branch.routing;

        }


        // Load account numbers
        loadAccountNumbers(
            selectedBank,
            selectedBranch
        );

    }


    // =========================================================
    // LOAD ACCOUNT NUMBERS
    // =========================================================

    function loadAccountNumbers(
        selectedBank,
        selectedBranch
    ) {

        if (!accountNumber) {
            return;
        }


        accountNumber.innerHTML =
            '<option value="">--Select Account Number--</option>';


        accountNumber.disabled = true;


        const bankAccounts =
            accountData[selectedBank];


        if (!bankAccounts) {
            return;
        }


        const accounts =
            bankAccounts[selectedBranch];


        if (!accounts || accounts.length === 0) {
            return;
        }


        accounts.forEach(function (account) {

            const option =
                document.createElement("option");


            option.value =
                account;


            option.textContent =
                account;


            accountNumber.appendChild(option);

        });


        accountNumber.disabled = false;

    }


    // =========================================================
    // BANK NAME CHANGE
    // =========================================================

    if (bankName) {

        bankName.addEventListener(
            "change",
            function () {

                const selectedBank =
                    this.value;


                loadBranches(
                    selectedBank
                );

            }
        );

    }


    // =========================================================
    // BRANCH NAME CHANGE
    // =========================================================

    if (branchName) {

        branchName.addEventListener(
            "change",
            function () {

                loadBranchInformation();

            }
        );

    }


    // =========================================================
    // ACCOUNT NUMBER CHANGE
    // =========================================================

    if (accountNumber) {

        accountNumber.addEventListener(
            "change",
            function () {

                if (
                    bankError &&
                    this.value !== ""
                ) {

                    bankError.textContent = "";

                    bankError.style.display =
                        "none";
                }

            }
        );

    }


    // =========================================================
    // CHANGE TYPE
    // =========================================================

    if (changeType) {

        changeType.addEventListener(
            "change",
            function () {

                const selectedType =
                    this.value;


                // Clear error
                if (newInfoError) {

                    newInfoError.textContent =
                        "Please enter new information.";

                    newInfoError.classList.remove("show");

                    newInfoError.style.display =
                        "none";
                }


                // Clear new info
                if (newInfo) {

                    newInfo.value = "";

                    newInfo.type = "text";

                    newInfo.removeAttribute("accept");

                }


                // Reset bank
                resetBankFields();


                // Hide bank information
                if (bankInfo) {

                    bankInfo.style.display =
                        "none";

                }


                // =================================================
                // NOTHING SELECTED
                // =================================================

                if (selectedType === "") {

                    if (existingInfo) {

                        existingInfo.value = "";

                        existingInfo.placeholder =
                            "Select Change Type";

                    }


                    if (newInfo) {

                        newInfo.placeholder =
                            "Select Change Type";

                    }

                    return;
                }


                // =================================================
                // EXISTING INFORMATION
                // =================================================

                if (existingInfo) {

                    existingInfo.value =
                        existingData[selectedType] || "";

                }


                // =================================================
                // BANK INFORMATION
                // =================================================

                if (selectedType === "bank_info") {

                    // Hide normal new info
                    if (newInfo) {

                        newInfo.style.display =
                            "none";

                    }


                    // Show bank info
                    if (bankInfo) {

                        bankInfo.style.display =
                            "block";

                    }


                    return;
                }


                // =================================================
                // NORMAL INFORMATION
                // =================================================

                if (newInfo) {

                    newInfo.style.display =
                        "block";


                    newInfo.placeholder =
                        placeholderData[selectedType] ||
                        "Enter New Information";

                }


                // =================================================
                // EMAIL
                // =================================================

                if (selectedType === "email") {

                    newInfo.type =
                        "email";

                }


                // =================================================
                // MOBILE / BKASH
                // =================================================

                else if (
                    selectedType === "mobile" ||
                    selectedType === "bkash"
                ) {

                    newInfo.type =
                        "tel";

                    newInfo.inputMode =
                        "numeric";

                }


                // =================================================
                // PHOTO / SIGNATURE
                // =================================================

                else if (
                    selectedType === "photo" ||
                    selectedType === "signature"
                ) {

                    newInfo.type =
                        "file";

                    newInfo.accept =
                        "image/*";

                }


                // =================================================
                // OTHER
                // =================================================

                else {

                    newInfo.type =
                        "text";

                }

            }
        );

    }


    // =========================================================
    // NEW INFO INPUT
    // =========================================================

    if (newInfo) {

        newInfo.addEventListener(
            "input",
            function () {

                if (
                    newInfo.value.trim() !== ""
                ) {

                    if (newInfoError) {

                        newInfoError.classList.remove(
                            "show"
                        );

                        newInfoError.style.display =
                            "none";

                    }

                }

            }
        );

    }


    // =========================================================
    // FILE ATTACHMENT
    // =========================================================

    if (attachment) {

        attachment.addEventListener(
            "change",
            function () {

                if (
                    this.files &&
                    this.files.length > 0
                ) {

                    console.log(
                        "Attachment selected:",
                        this.files[0].name
                    );

                }

            }
        );

    }


    // =========================================================
    // VALIDATE MOBILE
    // =========================================================

    function validateMobile(value) {

        const pattern =
            /^01[3-9]\d{8}$/;

        return pattern.test(value);

    }


    // =========================================================
    // VALIDATE EMAIL
    // =========================================================

    function validateEmail(value) {

        const pattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return pattern.test(value);

    }


    // =========================================================
    // VALIDATE NID
    // =========================================================

    function validateNID(value) {

        const pattern =
            /^(\d{10}|\d{13}|\d{17})$/;

        return pattern.test(value);

    }


    // =========================================================
    // SHOW NEW INFO ERROR
    // =========================================================

    function showNewInfoError(message) {

        if (!newInfoError) {
            return;
        }


        newInfoError.textContent =
            message;


        newInfoError.classList.add(
            "show"
        );


        newInfoError.style.display =
            "block";


        if (newInfo) {
            newInfo.focus();
        }

    }


    // =========================================================
    // VALIDATE BANK INFORMATION
    // =========================================================

    function validateBankInformation() {

        // Bank
        if (
            !bankName ||
            bankName.value === ""
        ) {

            alert(
                "Please select Bank Name."
            );

            if (bankName) {
                bankName.focus();
            }

            return false;

        }


        // Branch
        if (
            !branchName ||
            branchName.value === ""
        ) {

            alert(
                "Please select Branch Name."
            );

            if (branchName) {
                branchName.focus();
            }

            return false;

        }


        // Account
        if (
            !accountNumber ||
            accountNumber.value === ""
        ) {

            alert(
                "Please select Account Number."
            );

            if (accountNumber) {
                accountNumber.focus();
            }

            return false;

        }


        // Routing
        if (
            !routingNumber ||
            routingNumber.value.trim() === ""
        ) {

            alert(
                "Routing Number is not available."
            );

            return false;

        }


        return true;

    }


    // =========================================================
    // VALIDATE NORMAL INFORMATION
    // =========================================================

    function validateNormalInformation(
        selectedType
    ) {

        if (!newInfo) {

            alert(
                "New information field not found."
            );

            return false;

        }


        // =====================================================
        // FILE
        // =====================================================

        if (
            selectedType === "photo" ||
            selectedType === "signature"
        ) {

            if (
                !newInfo.files ||
                newInfo.files.length === 0
            ) {

                showNewInfoError(
                    "Please select a file."
                );

                return false;

            }


            return true;

        }


        // =====================================================
        // TEXT
        // =====================================================

        const value =
            newInfo.value.trim();


        if (value === "") {

            showNewInfoError(
                "Please enter new information."
            );

            return false;

        }


        // =====================================================
        // MOBILE
        // =====================================================

        if (
            selectedType === "mobile" ||
            selectedType === "bkash"
        ) {

            if (!validateMobile(value)) {

                showNewInfoError(
                    "Please enter a valid Bangladesh mobile number."
                );

                return false;

            }

        }


        // =====================================================
        // EMAIL
        // =====================================================

        if (
            selectedType === "email"
        ) {

            if (!validateEmail(value)) {

                showNewInfoError(
                    "Please enter a valid email address."
                );

                return false;

            }

        }


        // =====================================================
        // NID
        // =====================================================

        if (
            selectedType === "nid"
        ) {

            if (!validateNID(value)) {

                showNewInfoError(
                    "NID must contain 10, 13 or 17 digits."
                );

                return false;

            }

        }


        return true;

    }


    // =========================================================
    // GET CHANGE TYPE NAME
    // =========================================================

    function getChangeTypeName(type) {

        const names = {

            mobile:
                "Mobile Number",

            email:
                "Email Address",

            bank_info:
                "Bank Information",

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


    // =========================================================
    // SUBMIT
    // =========================================================

    if (submitButton) {

        submitButton.addEventListener(
            "click",
            function () {

                const selectedType =
                    changeType.value;


                // =================================================
                // CHANGE TYPE
                // =================================================

                if (selectedType === "") {

                    alert(
                        "Please select a Change Type."
                    );

                    changeType.focus();

                    return;

                }


                // =================================================
                // BANK INFORMATION
                // =================================================

                if (
                    selectedType === "bank_info"
                ) {

                    if (
                        !validateBankInformation()
                    ) {

                        return;

                    }


                    const selectedBank =
                        bankName.options[
                            bankName.selectedIndex
                        ].text;


                    const selectedBranch =
                        branchName.value;


                    const selectedUpazila =
                        upazila.value;


                    const selectedRouting =
                        routingNumber.value;


                    const selectedAccount =
                        accountNumber.value;


                    const confirmationMessage =

                        "Please confirm your Bank Information:\n\n" +

                        "Bank Name: " +
                        selectedBank +

                        "\nBranch Name: " +
                        selectedBranch +

                        "\nUpazila: " +
                        selectedUpazila +

                        "\nRouting Number: " +
                        selectedRouting +

                        "\nAccount Number: " +
                        selectedAccount;


                    const confirmation =
                        confirm(
                            confirmationMessage
                        );


                    if (!confirmation) {
                        return;
                    }


                    // Update existing display
                    existingData.bank_info =
                        selectedBank +
                        " - " +
                        selectedBranch +
                        " - A/C " +
                        selectedAccount;


                    if (existingInfo) {

                        existingInfo.value =
                            existingData.bank_info;

                    }


                    alert(
                        "Bank information changed successfully!"
                    );


                    return;

                }


                // =================================================
                // NORMAL INFORMATION
                // =================================================

                if (
                    !validateNormalInformation(
                        selectedType
                    )
                ) {

                    return;

                }


                let newValue = "";


                // =================================================
                // FILE
                // =================================================

                if (
                    selectedType === "photo" ||
                    selectedType === "signature"
                ) {

                    newValue =
                        newInfo.files[0].name;

                }


                // =================================================
                // TEXT
                // =================================================

                else {

                    newValue =
                        newInfo.value.trim();

                }


                // =================================================
                // CONFIRM
                // =================================================

                const confirmation =
                    confirm(

                        "Are you sure you want to change your " +

                        getChangeTypeName(
                            selectedType
                        ) +

                        "?"

                    );


                if (!confirmation) {
                    return;
                }


                // =================================================
                // FRONTEND UPDATE
                // =================================================

                existingData[selectedType] =
                    newValue;


                if (existingInfo) {

                    existingInfo.value =
                        newValue;

                }


                // Clear input
                if (newInfo) {

                    if (
                        newInfo.type === "file"
                    ) {

                        newInfo.value = "";

                    }

                    else {

                        newInfo.value = "";

                    }

                }


                // Clear error
                if (newInfoError) {

                    newInfoError.classList.remove(
                        "show"
                    );

                    newInfoError.style.display =
                        "none";

                }


                // =================================================
                // SUCCESS
                // =================================================

                alert(
                    "BO information changed successfully!"
                );

            }
        );

    }


    // =========================================================
    // INITIAL STATE
    // =========================================================

    if (bankInfo) {

        bankInfo.style.display =
            "none";

    }


    if (branchName) {

        branchName.disabled =
            true;

    }


    if (accountNumber) {

        accountNumber.disabled =
            true;

    }


});