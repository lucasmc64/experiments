const input_typed_color = window.document.querySelector('#typed-color');
const input_generated_color = window.document.querySelector('#generated-color');
const button_generate = window.document.querySelector('.button-fake-border button');

// Common variables
let old_color = input_typed_color.value;
let hexadecimal = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

let generateColor = () => {
    let typed_color = input_typed_color.value;

    let generated_color = '#';

    for (let i = 1; i < typed_color.length; i++) {
        let index = hexadecimal.findIndex((element) => element == typed_color[i]);

        generated_color += hexadecimal[hexadecimal.length - index - 1];
    }

    return generated_color;
}

let changeColor = () => {
    if (input_typed_color.value.length == 7 || input_typed_color.value.length == 4) {
        let typed_color = input_typed_color.value;
        let generated_color = generateColor();

        input_generated_color.value = generated_color;

        window.document.documentElement.style.setProperty('--color-typed', typed_color);
        window.document.documentElement.style.setProperty('--color-generated', generated_color);
    } else {
        alert('Esta cor não é válida!');
    }
}

let checkChar = (event) => {
    if (event.target.value.length < old_color.length && event.target.value.length < 1 || event.target.value.length > old_color.length && event.target.value.length > 7) {
        input_typed_color.value = old_color;
        event.preventDefault();
    } else if (event.target.value.length > old_color.length) {
        let new_color = event.target.value.toUpperCase();
        let verified_color = old_color;
        
        for (let i = old_color.length; i < new_color.length; i++) {
            if (hexadecimal.includes(new_color[i])) {
                verified_color += new_color[i];
            }
        }

        old_color = verified_color;
        input_typed_color.value = verified_color;
    } else {
        if(event.target.value[0] != '#') {
            input_typed_color.value = old_color;
        } else {
            old_color = event.target.value;
        }
    }
}

input_typed_color.addEventListener('keyup', checkChar);
button_generate.addEventListener('click', changeColor);