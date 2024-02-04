let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let displayString = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerHTML) {
            case '=':
                try {
                    displayString = eval(displayString).toString();
                } catch (error) {
                    displayString = "Error";
                }
                break;
            case 'AC':
                displayString = "";
                break;
            case 'DE':
                displayString = displayString.slice(0, -1);
                break;
            default:
                displayString += e.target.innerHTML;
        }
        inputBox.value = displayString;
    });
});
