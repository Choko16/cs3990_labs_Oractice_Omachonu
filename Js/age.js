function checkAgeForAnimal() {
    let birthYear = parseInt(prompt("Enter your year of birth:"));
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;

    const contentDiv = document.getElementById('content');

    if (age < 18) {
        alert("Content is not available due to age restrictions");
        contentDiv.innerHTML = '';
    } else if (age >= 18 && age <= 55) {
        let animal = prompt("Enter the name of the animal (Cat, Dog, Frog, Mouse):");
        let imgSrc;

        switch(animal) {
            case 'Cat':
            case 'cat':
                imgSrc = "Images/cat.jpg";
                break;
            case 'Dog':
            case 'dog':
                imgSrc = "Images/dog.jpg";
                break;
            case 'Frog':
            case 'frog':
                imgSrc = "Images/frog.jpg";
                break;
            case 'Mouse':
            case 'mouse':
                imgSrc = "Images/mouse.jpg";
                break;
            default:
                imgSrc = "";
        }

        contentDiv.innerHTML = imgSrc
            ? `<img src="${imgSrc}" alt="${animal}">`
            : `<p>Invalid animal selection</p>`;
    } else {
        contentDiv.innerHTML = `
            <p>"Much like mathematics, programming is a logico-deductive system. And I think the important point 
that I am making is that in a purely logico-deductive system there is no 
philosophy - everything is known. However, insofar as there is art in 
mathematics, there is philosophy in mathematics. Insofar as there is art in 
programming, there is philosophy in programming."</p>
        `;
    }
}
