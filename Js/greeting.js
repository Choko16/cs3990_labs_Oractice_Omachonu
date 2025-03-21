function greetUser() {
    let language = prompt("Enter the abbreviation of your language (Eng, Fr, De, Spa):");
    let greeting;

    switch(language) {
        case 'Eng':
        case 'eng':
            greeting = "Hello";
            break;
        case 'Fr':
        case 'fr':
            greeting = "Bonjour";
            break;
        case 'De':
        case 'de':
            greeting = "Hallo";
            break;
        case 'Spa':
        case 'spa':
            greeting = "Hola";
            break;
        default:
            greeting = "Sorry, but I do not speak your language.";
    }

    alert(greeting);
}
