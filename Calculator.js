var doc = document.getElementsByTagName('td');
var scr = document.querySelector('.display');
let output = "";
let result = "";
let l = doc.length;
for (let i = 0; i < l; i++) {
    doc[i].addEventListener('click', () => {
        // let value = doc[i].dataset.val;
        let value = doc[i].getAttribute('data-val');
        console.log(a);
        let l = output.length;
        if (doc[i].dataset.val == "AC") {
            output = "";
            result = "";
        }
        else if (value == "=") {
            if (l == 0) {
                return;
            }
            if (output[l - 1] == ".") {
                output = output.substring(0, l - 1);
                l = l - 1;
            }
            if (output[l - 1] == "+" || output[l - 1] == "-" || output[l - 1] == "/" || output[l - 1] == "*" || output[l - 1] == "%") {
                output = output.substring(0, l - 1);
            }

            result = eval(output);
            output = result;
        }
        else if (value == "<") {
            if (l == 0) {
                return;
            }
            if (l == 1) {
                output = "";
            } else {
                output = output.substring(0, l - 1);
            }
        }
        else if (value == "+/-") {
            if (parseInt(output) > 0) {
                output = "-" + output;
            } else {
                output = output.substring(1);
            }
        }
        else {
            if (l == 0 && (value == "+" || value == "-" || value == "*" || value == "/" || value == "%")) {
                return;
            }
            if (value == "+" || value == "-" || value == "*" || value == "/" || value == "%") {
                if (output[l - 1] == "+" || output[l - 1] == "-" || output[l - 1] == "*" || output[l - 1] == "/" || output[l - 1] == "%") {
                    output = output.substring(0, l - 1);
                    output += value;
                } else {
                    output += value;
                }
            } else {
                output += value;
            }

        }

        document.querySelector('.display').innerText = output;

    })
}