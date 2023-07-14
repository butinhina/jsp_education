/**
 * 
 */
function input() {
    
    const dishLabel = document.createElement('label');
    dishLabel.textContent = '料理名';
    
    const newDishForm = document.createElement('input');
    newDishForm.type = 'text';
    newDishForm.id = 'dish';
    newDishForm.name = 'foodmenu';
    newDishForm.value = '';
    
    const calLabel = document.createElement('label');
    calLabel.textContent = 'カロリー';
    
    const newCalForm = document.createElement('input');
    newCalForm.type = 'text';
    newCalForm.id = 'calory';
    newCalForm.name = 'foodmenu';
    newCalForm.value = '';
    
    const addBtn = document.createElement('button');
    addBtn.innerHTML = "追加"
    
    const delBtn = document.createElement('button');
    delBtn.innerHTML = "削除"
    
    
    const div = document.querySelector('div');
    div.appendChild(dishLabel);
    div.appendChild(newDishForm);
    div.appendChild(calLabel);
    div.appendChild(newCalForm);
    div.appendChild(addBtn);
    div.appendChild(delBtn);    
}

function calc() {
    
    
}

document.querySelector('button').addEventListener('click', () => {
    input() 
});

newCalForm.addElementListener('input', () => {
    calc();
});