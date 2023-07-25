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
let calorieForms = document.querySelectorAll(".calorie_form");

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
    if (gender == 0) {
        // 男性の場合
        metabolism.value = Math.round((Number(weight.value) * 13.397 + Number(height.value) * 4.799 - Number(old.value) * 5.677 + 88.362) * 10) / 10;        
    } else if (gender == 1) {
        // 女性の場合
        metabolism.value = Math.round((Number(weight.value) * 9.247 + Number(height.value) * 3.098 - Number(old.value) * 4.33 + 447.593) * 10) / 10;        
    }
    // 総カロリーを計算
//    totalcalories.value = Number(calorie.value);
    // 差分と割合を計算
//    difference.value = Number(metabolism.value) - Number(totalcalories.value);
//    ratio.value = Math.round((Number(totalcalories.value) / Number(metabolism.value)) * 100);
    
}

// カロリーの計算処理
function calorieCalc () {
    let result = 0;
    calorieForms.forEach(calorieForm => {
        result += Number(calorieForm.value);
    });
    totalcalories.value = result;
}
// カロリー初期入力の処理
calorieForms.forEach(calorieForm => {
    calorieForm.addEventListener('change', calorieCalc);
});

// ボタンクリック後の処理
document.querySelector('#add_form').addEventListener('click', () => {
    const newForm = document.createElement('input');
//    newForm.setAttribute("name", "foodmenu");
    newForm.type = 'text';
    newForm.name = 'foodmenu';
    newForm.value = '';
//    const deleteButton = document.createElement('button[id="delete"]');
const deleteButton = document.createElement('button');
    deleteButton.style="background-color: red;";
    deleteButton.id="delete";
    deleteButton.value="削除";
    const div = document.querySelector('.input_calorie_form');
    div.appendChild(newForm);
    div.appendChild(deleteButton);
    newForm.addEventListener('change', calorieCalc);
    calorieForms = document.querySelectorAll('.calorie_form');
});


old.addEventListener('change', () => {
    calcMetabolism();
});

height.addEventListener('change', () => {
    calcMetabolism();
});

weight.addEventListener('change', () => {
    calcMetabolism();
});

//calorie.addEventListener('change', () => {
//    calcMetabolism();
//});

calorie.addEventListener('change', () => {
    calorieCalc();
});

// 削除ボタンの発火
