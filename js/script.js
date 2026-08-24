document.addEventListener("DOMContentLoaded", function () {

    "use strict";

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
    const bankUpazila = document.getElementById("bankUpazila");
    const routingNumber = document.getElementById("routingNumber");
    let accountNumber = document.getElementById("accountNumber");
    const bankError = document.getElementById("bankError");

    const contactAddressBox =
        document.getElementById("contactAddressBox");

    const newContactAddress =
        document.getElementById("newContactAddress");

    const countrySelect =
        document.getElementById("country");

    const divisionSelect =
        document.getElementById("division");

    const districtSelect =
        document.getElementById("district");

    const upazilaSelect =
        document.getElementById("upazila");

    const postCodeInput =
        document.getElementById("postCode");

    const remarks =
        document.getElementById("remarks");

    const attachment =
        document.getElementById("attachment");

    const submitButton =
        document.getElementById("submitButton");


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
    // BANGLADESH ADDRESS DATA
    // =========================================================

    const bangladeshAddress = {

        "Chattogram": {

            "Chattogram": {
                "Patiya": "4370",
                "Rangunia": "4360",
                "Raozan": "4340",
                "Hathazari": "4330",
                "Fatikchhari": "4350",
                "Mirsharai": "4320",
                "Sitakunda": "4310",
                "Sandwip": "4300",
                "Boalkhali": "4366",
                "Anwara": "4376",
                "Banshkhali": "4390",
                "Lohagara": "4396",
                "Satkania": "4386",
                "Chandanaish": "4380"
            },

            "Cox's Bazar": {
                "Cox's Bazar Sadar": "4700",
                "Chakaria": "4740",
                "Ramu": "4730",
                "Teknaf": "4760",
                "Ukhia": "4750",
                "Maheshkhali": "4710",
                "Kutubdia": "4720",
                "Pekua": "4770"
            },

            "Comilla": {
                "Comilla Sadar": "3500",
                "Daudkandi": "3516",
                "Burichang": "3520",
                "Brahmanpara": "3526",
                "Chandina": "3510",
                "Chauddagram": "3550",
                "Debidwar": "3530",
                "Homna": "3546",
                "Laksam": "3570",
                "Muradnagar": "3540",
                "Nangalkot": "3580"
            },

            "Noakhali": {
                "Noakhali Sadar": "3800",
                "Begumganj": "3820",
                "Chatkhil": "3870",
                "Companiganj": "3850",
                "Hatiya": "3890",
                "Senbagh": "3860",
                "Sonaimuri": "3827",
                "Subarnachar": "3819"
            },

            "Feni": {
                "Feni Sadar": "3900",
                "Chagalnaiya": "3910",
                "Daganbhuiyan": "3920",
                "Fulgazi": "3940",
                "Parshuram": "3942",
                "Sonagazi": "3930"
            },

            "Lakshmipur": {
                "Lakshmipur Sadar": "3700",
                "Raipur": "3710",
                "Ramganj": "3720",
                "Ramgati": "3730",
                "Kamalnagar": "3731"
            },

            "Brahmanbaria": {
                "Brahmanbaria Sadar": "3400",
                "Ashuganj": "3402",
                "Akhaura": "3450",
                "Bancharampur": "3420",
                "Kasba": "3460",
                "Nabinagar": "3410",
                "Nasirnagar": "3440",
                "Sarail": "3430"
            }

        },


        "Dhaka": {

            "Dhaka": {
                "Dhanmondi": "1209",
                "Gulshan": "1212",
                "Mirpur": "1216",
                "Uttara": "1230",
                "Mohammadpur": "1207",
                "Savar": "1340",
                "Keraniganj": "1310",
                "Dohar": "1330",
                "Nawabganj": "1320",
                "Tejgaon": "1215"
            },

            "Gazipur": {
                "Gazipur Sadar": "1700",
                "Tongi": "1710",
                "Kaliakair": "1750",
                "Kaliganj": "1720",
                "Kapasia": "1730",
                "Sreepur": "1740"
            },

            "Narayanganj": {
                "Narayanganj Sadar": "1400",
                "Araihazar": "1450",
                "Rupganj": "1460",
                "Sonargaon": "1440"
            },

            "Tangail": {
                "Tangail Sadar": "1900",
                "Basail": "1920",
                "Bhuapur": "1960",
                "Dhanbari": "1997",
                "Ghatail": "1980",
                "Gopalpur": "1990",
                "Kalihati": "1970",
                "Madhupur": "1996",
                "Mirzapur": "1940",
                "Nagarpur": "1936",
                "Sakhipur": "1950"
            },

            "Manikganj": {
                "Manikganj Sadar": "1800",
                "Daulatpur": "1860",
                "Ghior": "1840",
                "Harirampur": "1830",
                "Saturia": "1850",
                "Shibalaya": "1850",
                "Singair": "1820"
            }

        },


        "Barishal": {

            "Barishal": {
                "Barishal Sadar": "8200",
                "Agailjhara": "8240",
                "Babuganj": "8210",
                "Bakerganj": "8280",
                "Banaripara": "8530",
                "Gaurnadi": "8230",
                "Hizla": "8260",
                "Mehendiganj": "8270",
                "Muladi": "8250",
                "Wazirpur": "8220"
            },

            "Bhola": {
                "Bhola Sadar": "8300",
                "Borhanuddin": "8320",
                "Char Fasson": "8340",
                "Daulatkhan": "8310",
                "Lalmohan": "8330",
                "Manpura": "8350",
                "Tazumuddin": "8360"
            },

            "Pirojpur": {
                "Pirojpur Sadar": "8500",
                "Bhandaria": "8550",
                "Kawkhali": "8510",
                "Mathbaria": "8560",
                "Nazirpur": "8540",
                "Nesarabad": "8520",
                "Zianagar": "8530"
            }

        },


        "Khulna": {

            "Khulna": {
                "Khulna Sadar": "9000",
                "Batiaghata": "9260",
                "Dacope": "9270",
                "Dighalia": "9220",
                "Dumuria": "9250",
                "Koyra": "9290",
                "Paikgachha": "9280",
                "Phultala": "9210",
                "Rupsa": "9240",
                "Terokhada": "9230"
            },

            "Bagerhat": {
                "Bagerhat Sadar": "9300",
                "Chitalmari": "9360",
                "Fakirhat": "9370",
                "Kachua": "9310",
                "Mollahat": "9380",
                "Mongla": "9350",
                "Morrelganj": "9320",
                "Rampal": "9340",
                "Sarankhola": "9330"
            }

        },


        "Rajshahi": {

            "Rajshahi": {
                "Bagha": "6280",
                "Bagmara": "6250",
                "Charghat": "6270",
                "Durgapur": "6240",
                "Godagari": "6290",
                "Mohanpur": "6220",
                "Paba": "6210",
                "Puthia": "6260",
                "Tanore": "6230"
            },

            "Bogura": {
                "Bogura Sadar": "5800",
                "Adamdighi": "5890",
                "Dhunat": "5850",
                "Dupchanchia": "5880",
                "Gabtali": "5820",
                "Kahaloo": "5870",
                "Nandigram": "5860",
                "Sariakandi": "5830",
                "Shajahanpur": "5800",
                "Sherpur": "5840",
                "Shibganj": "5810"
            }

        },


        "Rangpur": {

            "Rangpur": {
                "Rangpur Sadar": "5400",
                "Badarganj": "5430",
                "Gangachara": "5410",
                "Kaunia": "5440",
                "Mithapukur": "5460",
                "Pirgachha": "5450",
                "Pirganj": "5470",
                "Taraganj": "5420"
            },

            "Dinajpur": {
                "Dinajpur Sadar": "5200",
                "Birampur": "5266",
                "Birganj": "5220",
                "Biral": "5210",
                "Bochaganj": "5216",
                "Chirirbandar": "5240",
                "Fulbari": "5260",
                "Ghoraghat": "5290",
                "Hakimpur": "5270",
                "Kaharole": "5220",
                "Khansama": "5230",
                "Nawabganj": "5280",
                "Parbatipur": "5250"
            }

        },


        "Sylhet": {

            "Sylhet": {
                "Sylhet Sadar": "3100",
                "Balaganj": "3125",
                "Beanibazar": "3170",
                "Bishwanath": "3130",
                "Companiganj": "3140",
                "Fenchuganj": "3116",
                "Golapganj": "3160",
                "Gowainghat": "3150",
                "Jaintiapur": "3156",
                "Kanaighat": "3180",
                "Osmani Nagar": "3120",
                "Zakiganj": "3190"
            },

            "Moulvibazar": {
                "Moulvibazar Sadar": "3200",
                "Barlekha": "3250",
                "Juri": "3251",
                "Kamalganj": "3220",
                "Kulaura": "3230",
                "Rajnagar": "3240",
                "Sreemangal": "3210"
            }

        },


        "Mymensingh": {

            "Mymensingh": {
                "Mymensingh Sadar": "2200",
                "Bhaluka": "2240",
                "Dhobaura": "2416",
                "Fulbaria": "2216",
                "Gaffargaon": "2230",
                "Gouripur": "2270",
                "Haluaghat": "2260",
                "Ishwarganj": "2280",
                "Muktagachha": "2210",
                "Nandail": "2290",
                "Phulpur": "2250",
                "Trishal": "2220"
            },

            "Jamalpur": {
                "Jamalpur Sadar": "2000",
                "Baksiganj": "2140",
                "Dewanganj": "2030",
                "Islampur": "2020",
                "Madarganj": "2040",
                "Melandaha": "2010",
                "Sarishabari": "2050"
            }

        }

    };


    // =========================================================
    // HELPER
    // =========================================================

    function clearSelect(select, placeholder) {

        if (!select) {
            return;
        }

        select.innerHTML = "";

        const option =
            document.createElement("option");

        option.value = "";
        option.textContent = placeholder;

        select.appendChild(option);
    }


    // =========================================================
    // BANK ACCOUNT INPUT -> SELECT
    // =========================================================

    


    // =========================================================
    // RESET BANK
    // =========================================================

    function resetBankFields() {

        if (bankName) {
            bankName.value = "";
        }

        if (branchName) {

            clearSelect(
                branchName,
                "-- Select Branch Name --"
            );

            branchName.disabled = true;
        }

        if (bankUpazila) {
            bankUpazila.value = "";
        }

        if (routingNumber) {
            routingNumber.value = "";
        }

        if (accountNumber) {

            clearSelect(
                accountNumber,
                "-- Select Account Number --"
            );

            accountNumber.disabled = true;
        }

        if (bankError) {

            bankError.textContent = "";

            bankError.style.display = "none";
        }

    }


    // =========================================================
    // LOAD BANK BRANCHES
    // =========================================================

    function loadBranches(selectedBank) {

        if (!branchName) {
            return;
        }

        clearSelect(
            branchName,
            "-- Select Branch Name --"
        );

        if (bankUpazila) {
            bankUpazila.value = "";
        }

        if (routingNumber) {
            routingNumber.value = "";
        }

        if (accountNumber) {

            clearSelect(
                accountNumber,
                "-- Select Account Number --"
            );

            accountNumber.disabled = true;
        }

        if (!selectedBank) {

            branchName.disabled = true;

            return;
        }

        const selectedBankData =
            bankData[selectedBank];

        if (!selectedBankData) {

            branchName.disabled = true;

            return;
        }

        selectedBankData.branches.forEach(
            function (branch) {

                const option =
                    document.createElement("option");

                option.value =
                    branch.name;

                option.textContent =
                    branch.name;

                branchName.appendChild(option);

            }
        );

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

        if (bankUpazila) {
            bankUpazila.value = "";
        }

        if (routingNumber) {
            routingNumber.value = "";
        }

        if (accountNumber) {

            clearSelect(
                accountNumber,
                "-- Select Account Number --"
            );

            accountNumber.disabled = true;
        }

        if (
            !selectedBank ||
            !selectedBranch
        ) {
            return;
        }

        const selectedBankData =
            bankData[selectedBank];

        if (!selectedBankData) {
            return;
        }

        const branch =
            selectedBankData.branches.find(
                function (item) {

                    return item.name === selectedBranch;

                }
            );

        if (!branch) {
            return;
        }

        if (bankUpazila) {
            bankUpazila.value =
                branch.upazila;
        }

        if (routingNumber) {
            routingNumber.value =
                branch.routing;
        }

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

        clearSelect(
            accountNumber,
            "-- Select Account Number --"
        );

        accountNumber.disabled = true;

        const bankAccounts =
            accountData[selectedBank];

        if (!bankAccounts) {
            return;
        }

        const accounts =
            bankAccounts[selectedBranch];

        if (
            !accounts ||
            accounts.length === 0
        ) {
            return;
        }

        accounts.forEach(
            function (account) {

                const option =
                    document.createElement("option");

                option.value = account;

                option.textContent = account;

                accountNumber.appendChild(option);

            }
        );

        accountNumber.disabled = false;

    }


    // =========================================================
    // BANK NAME CHANGE
    // =========================================================

    if (bankName) {

        bankName.addEventListener(
            "change",
            function () {

                loadBranches(this.value);

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
    // CONTACT ADDRESS
    // =========================================================

    function loadAddressDivisions() {

        if (!divisionSelect) {
            return;
        }

        clearSelect(
            divisionSelect,
            "-State/Division-"
        );

        Object.keys(
            bangladeshAddress
        ).forEach(
            function (division) {

                const option =
                    document.createElement("option");

                option.value = division;

                option.textContent = division;

                divisionSelect.appendChild(option);

            }
        );

        divisionSelect.disabled = false;

    }


    // =========================================================
    // COUNTRY CHANGE
    // =========================================================

    if (countrySelect) {

        countrySelect.addEventListener(
            "change",
            function () {

                clearSelect(
                    divisionSelect,
                    "-State/Division-"
                );

                clearSelect(
                    districtSelect,
                    "-City/District-"
                );

                clearSelect(
                    upazilaSelect,
                    "-Upazila/Thana-"
                );

                if (postCodeInput) {
                    postCodeInput.value = "";
                }

                if (districtSelect) {
                    districtSelect.disabled = true;
                }

                if (upazilaSelect) {
                    upazilaSelect.disabled = true;
                }

                if (this.value === "BD") {

                    loadAddressDivisions();

                }
                else {

                    if (divisionSelect) {
                        divisionSelect.disabled = true;
                    }

                }

            }
        );

    }


    // =========================================================
    // DIVISION CHANGE
    // =========================================================

    if (divisionSelect) {

        divisionSelect.addEventListener(
            "change",
            function () {

                clearSelect(
                    districtSelect,
                    "-City/District-"
                );

                clearSelect(
                    upazilaSelect,
                    "-Upazila/Thana-"
                );

                if (postCodeInput) {
                    postCodeInput.value = "";
                }

                if (upazilaSelect) {
                    upazilaSelect.disabled = true;
                }

                const division =
                    this.value;

                if (!division) {

                    if (districtSelect) {
                        districtSelect.disabled = true;
                    }

                    return;
                }

                const districts =
                    bangladeshAddress[division];

                if (!districts) {

                    if (districtSelect) {
                        districtSelect.disabled = true;
                    }

                    return;
                }

                Object.keys(
                    districts
                ).forEach(
                    function (district) {

                        const option =
                            document.createElement("option");

                        option.value = district;

                        option.textContent = district;

                        districtSelect.appendChild(option);

                    }
                );

                districtSelect.disabled = false;

            }
        );

    }


    // =========================================================
    // DISTRICT CHANGE
    // =========================================================

    if (districtSelect) {

        districtSelect.addEventListener(
            "change",
            function () {

                clearSelect(
                    upazilaSelect,
                    "-Upazila/Thana-"
                );

                if (postCodeInput) {
                    postCodeInput.value = "";
                }

                const division =
                    divisionSelect.value;

                const district =
                    this.value;

                if (
                    !division ||
                    !district
                ) {

                    upazilaSelect.disabled = true;

                    return;
                }

                const upazilas =
                    bangladeshAddress
                    [division]
                    [district];

                if (!upazilas) {

                    upazilaSelect.disabled = true;

                    return;
                }

                Object.keys(
                    upazilas
                ).forEach(
                    function (upazila) {

                        const option =
                            document.createElement("option");

                        option.value =
                            upazila;

                        option.textContent =
                            upazila;

                        upazilaSelect.appendChild(
                            option
                        );

                    }
                );

                upazilaSelect.disabled = false;

            }
        );

    }


    // =========================================================
    // UPAZILA CHANGE
    // =========================================================

    if (upazilaSelect) {

        upazilaSelect.addEventListener(
            "change",
            function () {

                const division =
                    divisionSelect.value;

                const district =
                    districtSelect.value;

                const upazila =
                    this.value;

                if (postCodeInput) {
                    postCodeInput.value = "";
                }

                if (
                    !division ||
                    !district ||
                    !upazila
                ) {
                    return;
                }

                const postcode =
                    bangladeshAddress
                    [division]
                    [district]
                    [upazila];

                if (postCodeInput) {
                    postCodeInput.value =
                        postcode || "";
                }

            }
        );

    }


    // =========================================================
    // CONTACT ADDRESS RESET
    // =========================================================

    function resetContactAddress() {

        if (newContactAddress) {
            newContactAddress.value = "";
        }

        if (countrySelect) {
            countrySelect.value = "";
        }

        clearSelect(
            divisionSelect,
            "-State/Division-"
        );

        clearSelect(
            districtSelect,
            "-City/District-"
        );

        clearSelect(
            upazilaSelect,
            "-Upazila/Thana-"
        );

        if (divisionSelect) {
            divisionSelect.disabled = true;
        }

        if (districtSelect) {
            districtSelect.disabled = true;
        }

        if (upazilaSelect) {
            upazilaSelect.disabled = true;
        }

        if (postCodeInput) {
            postCodeInput.value = "";
        }

    }


    // =========================================================
    // VALIDATE MOBILE
    // =========================================================

    function validateMobile(value) {

        return /^01[3-9]\d{8}$/.test(
            value
        );

    }


    // =========================================================
    // VALIDATE EMAIL
    // =========================================================

    function validateEmail(value) {

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
            value
        );

    }


    // =========================================================
    // VALIDATE NID
    // =========================================================

    function validateNID(value) {

        return /^(\d{10}|\d{13}|\d{17})$/.test(
            value
        );

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

        if (
            !bankName ||
            bankName.value === ""
        ) {

            alert(
                "Please select Bank Name."
            );

            bankName.focus();

            return false;
        }


        if (
            !branchName ||
            branchName.value === ""
        ) {

            alert(
                "Please select Branch Name."
            );

            branchName.focus();

            return false;
        }


        if (
            !accountNumber ||
            accountNumber.value === ""
        ) {

            alert(
                "Please select Account Number."
            );

            accountNumber.focus();

            return false;
        }


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
    // VALIDATE CONTACT ADDRESS
    // =========================================================

    function validateContactAddress() {

        if (
            !newContactAddress ||
            newContactAddress.value.trim() === ""
        ) {

            alert(
                "Please enter Contact Address."
            );

            if (newContactAddress) {
                newContactAddress.focus();
            }

            return false;
        }


        if (
            !countrySelect ||
            countrySelect.value === ""
        ) {

            alert(
                "Please select Country."
            );

            countrySelect.focus();

            return false;
        }


        if (
            countrySelect.value === "BD" &&
            (
                !divisionSelect ||
                divisionSelect.value === ""
            )
        ) {

            alert(
                "Please select Division."
            );

            divisionSelect.focus();

            return false;
        }


        if (
            countrySelect.value === "BD" &&
            (
                !districtSelect ||
                districtSelect.value === ""
            )
        ) {

            alert(
                "Please select District."
            );

            districtSelect.focus();

            return false;
        }


        if (
            countrySelect.value === "BD" &&
            (
                !upazilaSelect ||
                upazilaSelect.value === ""
            )
        ) {

            alert(
                "Please select Upazila/Thana."
            );

            upazilaSelect.focus();

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


        // FILE
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


        const value =
            newInfo.value.trim();


        if (value === "") {

            showNewInfoError(
                "Please enter new information."
            );

            return false;
        }


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


        if (selectedType === "email") {

            if (!validateEmail(value)) {

                showNewInfoError(
                    "Please enter a valid email address."
                );

                return false;
            }

        }


        if (selectedType === "nid") {

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
    // CHANGE TYPE NAME
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
                        "";

                    newInfoError.classList.remove(
                        "show"
                    );

                    newInfoError.style.display =
                        "none";
                }


                // Reset normal input

                if (newInfo) {

                    newInfo.value = "";

                    newInfo.type = "text";

                    newInfo.removeAttribute(
                        "accept"
                    );

                    newInfo.style.display =
                        "block";
                }


                // Reset bank

                resetBankFields();


                // Reset contact address

                resetContactAddress();


                // Hide bank

                if (bankInfo) {
                    bankInfo.style.display =
                        "none";
                }


                // Hide contact address

                if (contactAddressBox) {
                    contactAddressBox.style.display =
                        "none";
                }


                // Nothing selected

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


                // Existing information

                if (existingInfo) {

                    existingInfo.value =
                        existingData[selectedType] ||
                        "";

                }


                // =====================================================
                // BANK INFORMATION
                // =====================================================

                if (
                    selectedType === "bank_info"
                ) {

                    if (newInfo) {
                        newInfo.style.display =
                            "none";
                    }

                    if (bankInfo) {

                        bankInfo.style.display =
                            "block";
                    }

                    // Convert account input to select

                    convertAccountInputToSelect();

                    return;
                }


                // =====================================================
                // CONTACT ADDRESS
                // =====================================================

                if (
                    selectedType ===
                    "contact_address"
                ) {

                    if (newInfo) {
                        newInfo.style.display =
                            "none";
                    }

                    if (contactAddressBox) {

                        contactAddressBox.style.display =
                            "block";
                    }

                    return;
                }


                // =====================================================
                // NORMAL INFORMATION
                // =====================================================

                if (newInfo) {

                    newInfo.style.display =
                        "block";

                    newInfo.placeholder =
                        placeholderData[selectedType] ||
                        "Enter New Information";

                }


                // EMAIL

                if (
                    selectedType === "email"
                ) {

                    newInfo.type =
                        "email";

                }


                // MOBILE / BKASH

                else if (
                    selectedType === "mobile" ||
                    selectedType === "bkash"
                ) {

                    newInfo.type =
                        "tel";

                    newInfo.inputMode =
                        "numeric";

                }


                // PHOTO / SIGNATURE

                else if (
                    selectedType === "photo" ||
                    selectedType === "signature"
                ) {

                    newInfo.type =
                        "file";

                    newInfo.accept =
                        "image/*";

                }


                // OTHER

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
    // SUBMIT
    // =========================================================

    if (submitButton) {

        submitButton.addEventListener(
            "click",
            function () {

                const selectedType =
                    changeType
                        ? changeType.value
                        : "";


                // =================================================
                // CHANGE TYPE
                // =================================================

                if (selectedType === "") {

                    alert(
                        "Please select a Change Type."
                    );

                    if (changeType) {
                        changeType.focus();
                    }

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


                    const selectedBankUpazila =
                        bankUpazila.value;


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
                        selectedBankUpazila +

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
                // CONTACT ADDRESS
                // =================================================

                if (
                    selectedType ===
                    "contact_address"
                ) {

                    if (
                        !validateContactAddress()
                    ) {
                        return;
                    }


                    const address =
                        newContactAddress.value.trim();

                    const country =
                        countrySelect.value === "BD"
                            ? "Bangladesh"
                            : countrySelect.value;

                    const division =
                        divisionSelect.value;

                    const district =
                        districtSelect.value;

                    const selectedUpazila =
                        upazilaSelect.value;

                    const postCode =
                        postCodeInput.value;


                    const fullAddress =

                        address +
                        ", " +
                        selectedUpazila +
                        ", " +
                        district +
                        ", " +
                        division +
                        ", " +
                        country +
                        " - " +
                        postCode;


                    const confirmation =
                        confirm(

                            "Please confirm your Contact Address:\n\n" +
                            fullAddress

                        );


                    if (!confirmation) {
                        return;
                    }


                    existingData.contact_address =
                        fullAddress;


                    if (existingInfo) {

                        existingInfo.value =
                            fullAddress;

                    }


                    alert(
                        "Contact address changed successfully!"
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


                // FILE

                if (
                    selectedType === "photo" ||
                    selectedType === "signature"
                ) {

                    newValue =
                        newInfo.files[0].name;

                }


                // TEXT

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
        bankInfo.style.display = "none";
    }

    if (contactAddressBox) {
        contactAddressBox.style.display = "none";
    }

    if (branchName) {
        branchName.disabled = true;
    }

    if (countrySelect) {
        countrySelect.value = "";
    }

    if (divisionSelect) {
        divisionSelect.disabled = true;
    }

    if (districtSelect) {
        districtSelect.disabled = true;
    }

    if (upazilaSelect) {
        upazilaSelect.disabled = true;
    }

    if (postCodeInput) {
        postCodeInput.value = "";
    }


    // =========================================================
    // CONVERT ACCOUNT INPUT
    // =========================================================

    // Do not convert immediately.
    // It will be converted when Bank Info is selected.


    console.log(
        "BO Information Change JavaScript loaded successfully."
    );

});