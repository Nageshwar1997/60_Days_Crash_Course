let container = document.getElementById("container");

let name_input = document.createElement("input");
name_input.setAttribute("type", "text");
name_input.setAttribute("placeholder", "Enter Your name");

let select = document.createElement("select");

let optionEnglish = document.createElement("option");
optionEnglish.innerText = "English";
optionEnglish.value = "english";

let optionSpanish = document.createElement("option");
optionSpanish.innerText = "Spanish";
optionSpanish.value = "spanish";

let optionFrench = document.createElement("option");
optionFrench.innerText = "French";
optionFrench.value = "french";

select.append(optionEnglish, optionSpanish, optionFrench);


let greeting = "Hello";

select.addEventListener("change", (e) => {

    if (e.target.value == "english") {
        // h2.innerHTML = `Hello <strong>${name_input.value}</strong>..!`
        greeting = "Hello";
    }
    else if (e.target.value == "spanish") {
        // h2.innerHTML = `Hola <strong>${name_input.value}</strong>..!`
        greeting = "Hola";
    }
    else if (e.target.value == "french") {
        // h2.innerHTML = `Bonjour <strong>${name_input.value}</strong>..!`
        greeting = "Bonjour";
    }

})




let greet_btn = document.createElement("button");
greet_btn.innerText = "Greet Me";

container.append(name_input,select, greet_btn);

let h2 = document.querySelector("h2");

greet_btn.addEventListener("click", () => {
    h2.innerHTML = `${greeting} <strong>${name_input.value}</strong>..!👋`;
})