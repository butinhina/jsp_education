/**
 * 
 */
const old = document.getElementById('old');
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const metabolism = document.getElementById("metabolism");
const calory = document.getElementById('calory');
const totalcalories = document.getElementById('totalcalories');
const difference = document.getElementById('difference');
const ratio = document.getElementById('ratio');
const foodMenu = document.getElementsByName("foodmenu");


document.metabolismform.addEventListener('change', add, false);
function add() {
    var gender = parseInt(document.metabolismform.gender.value);
    totalcalories.value = Number(calory.value);
    if (gender == 0) {
        metabolism.value = Math.round((Number(weight.value) * 13.397 + Number(height.value) * 4.799 - Number(old.value) * 5.677 + 88.362) * 10) / 10;        
        difference.value = (metabolism.value) - (totalcalories.value);
        ratio.value = Math.round((Number(totalcalories.value) / Number(metabolism.value)) * 100);
    } else if (gender == 1) {
        metabolism.value = Math.round((Number(weight.value) * 9.247 + Number(height.value) * 3.098 - Number(old.value) * 4.33 + 447.593) * 10) / 10;        
        difference.value = (metabolism.value) - (totalcalories.value);
        ratio.value = Math.round((Number(totalcalories.value) / Number(metabolism.value)) * 100);
    }
}

function input() {
    const newDishForm = document.createElement('input');
    newDishForm.type = 'text';
    
    const newCalForm = document.createElement('input');
    newCalForm.type = 'text';
    
    const divv = document.querySelector('divv');
    divv.appendChild(newDishForm);
    divv.appendChild(newCalForm);
    
}

old.addEventListener('input', () => {
    add();
});

height.addEventListener('input', () => {
    add();
});

weight.addEventListener('input', () => {
    add();
});

calory.addEventListener('input', () => {
    add();
}); 

document.querySelector('button').addEventListener('click', () => {
    input() 
});
