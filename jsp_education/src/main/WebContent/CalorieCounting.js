/**
 * 
 */
const old = document.getElementById('old');
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const metabolism = document.getElementById("metabolism");
const calorie = document.getElementById('calorie');
const totalcalories = document.getElementById('totalcalories');
const difference = document.getElementById('difference');
const ratio = document.getElementById('ratio');
const foodMenu = document.getElementsByName("foodmenu");

//画面が表示されたとき行う
window.onload = function() {
    // 性別ラジオの要素を配列として取得
    var checkOption = document.getElementsByName('gender');
    // 取得したラジオボタンの要素に関数を設定
    checkOption.forEach(function(e) {
        e.addEventListener("click", function() {
            calcMetabolism();
        });
    });
};

//document.querySelector('input[type="radio"][name="gender"]').addEventListener('change', calcMetabolism, false);
function calcMetabolism() {
    // 画面で選択されている性別を取得
    var gender = Number(document.querySelector('input[type="radio"][name="gender"]:checked').value);
//    totalcalories.value = Number(calorie.value);
    if (gender == 0) {
        // 男性の場合
        metabolism.value = Math.round((Number(weight.value) * 13.397 + Number(height.value) * 4.799 - Number(old.value) * 5.677 + 88.362) * 10) / 10;        
    } else if (gender == 1) {
        // 女性の場合
        metabolism.value = Math.round((Number(weight.value) * 9.247 + Number(height.value) * 3.098 - Number(old.value) * 4.33 + 447.593) * 10) / 10;        
    }
    // 差分と割合を計算
    difference.value = Number(metabolism.value) - Number(totalcalories.value);
    ratio.value = Math.round((Number(totalcalories.value) / Number(metabolism.value)) * 100);
    
}

function inputFoodMenu() {
    
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
    newCalForm.id = 'calorie';
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

old.addEventListener('change', () => {
    calcMetabolism();
});

height.addEventListener('change', () => {
    calcMetabolism();
});

weight.addEventListener('change', () => {
    calcMetabolism();
});

calorie.addEventListener('change', () => {
    calcMetabolism();
}); 

document.querySelector('button').addEventListener('click', () => {
    inputFoodMenu(); 
});
