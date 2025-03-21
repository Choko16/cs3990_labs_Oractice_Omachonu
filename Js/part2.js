document.addEventListener('DOMContentLoaded', function () {
    const loginBtn = document.getElementById('loginBtn');

    loginBtn.addEventListener('click', function () {
        const login = function () {
            let username = prompt("Enter your login:");
            if (!username) return;

            username = username.toLowerCase();

            if (username === 'admin') {
                const generatePassword = function () {
                    let password = '';
                    for (let i = 0; i < 6; i++) {
                        password += Math.floor(Math.random() * 10);
                    }
                    return password;
                };

                const adminPassword = generatePassword();
                console.log("Admin password (for testing): " + adminPassword); // You can remove this later
                let attempts = 2;

                while (attempts > 0) {
                    let input = prompt(`Enter admin password (${attempts} attempts left):`);
                    if (input === adminPassword) {
                        adminFunction();
                        return;
                    }
                    attempts--;
                    alert("Wrong password!");
                }
                alert("Access denied.");

            } else if (username === 'designer') {
                validateSimpleUser('111', designerFunction);
            } else if (username === 'tester') {
                validateSimpleUser('222', testerFunction);
            } else {
                alert("There is no such user");
            }
        };

        const validateSimpleUser = function (correctPassword, successCallback) {
            let attempts = 3;
            while (attempts > 0) {
                let input = prompt(`Enter password (${attempts} attempts left):`);
                if (input === correctPassword) {
                    successCallback();
                    return;
                }
                attempts--;
                alert("Wrong password!");
            }
            alert("Access denied.");
        };

        const adminFunction = function () {
            let age = parseInt(prompt("Enter your age:"));
            let year = parseInt(prompt("Enter your year of admission to NWP:"));
            let gradYear = year + 4;
            let futureAge = age + (gradYear - new Date().getFullYear());

            alert(`You will be ${futureAge} years old when you receive your bachelor's degree in CS in ${gradYear}.`);
        };

        const designerFunction = function () {
            let portfolios = parseInt(prompt("How many portfolios do you have?"));
            let birthYear = parseInt(prompt("Enter your year of birth:"));
            let age = new Date().getFullYear() - birthYear;
            let discount = 0;

            if (age >= 14 && age <= 18 && portfolios >= 5 && portfolios <= 10) {
                discount = 10;
            } else if (age > 18 && portfolios >= 10 && portfolios <= 20) {
                discount = 7;
            }

            if (discount > 0) {
                alert(`Congrats! You get a ${discount}% discount on the Adobe XD course.`);
            } else {
                alert("Sorry, no discount available.");
            }
        };

        const testerFunction = function () {
            let portfolios = parseInt(prompt("How many portfolios do you have?"));
            let birthYear = parseInt(prompt("Enter your year of birth:"));
            let age = new Date().getFullYear() - birthYear;
            let discount = 0;

            if (age >= 14 && age <= 18 && portfolios >= 5 && portfolios <= 10) {
                discount = 10;
            } else if (age > 18 && portfolios >= 10 && portfolios <= 20) {
                discount = 7;
            }

            if (discount > 0) {
                alert(`Congrats! You get a ${discount}% discount on the QA Pro course.`);
            } else {
                alert("Sorry, no discount available.");
            }
        };

        login();
    });
});
