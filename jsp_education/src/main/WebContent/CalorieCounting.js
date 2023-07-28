/**
 * 
 */
const old = document.getElementById('old');
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const metabolism = document.getElementById("metabolism");
//const calorie = document.getElementById('calorie');
let totalcalories = document.getElementById('totalcalories');
let difference = document.getElementById('difference');
let ratio = document.getElementById('ratio');
const foodMenu = document.getElementsByName("foodmenu");
let calorieForms = document.querySelectorAll(".calorie_form");
let input_calorie_forms = document.querySelectorAll('.input_calorie_form');
//let input_calorie_forms = document.querySelectorAll('.form_clump');
const input_total_calories = document.querySelector('.input_totalcalories');// 総カロリーの前に追加フォームを置くために総カロリーの要素を取得
let deleteButtons = document.querySelectorAll('.delete');
let input_calorie_form = document.querySelector('.input_calorie_form');

//deleteButtonEventSet();
//// 削除ボタンにEventListenerを設定
//function deleteButtonEventSet() {
//    deleteButtons.forEach(deleteButton => {
//        deleteButton.addEventListener('click', () => {
//            deleteButton.parentElement.remove;
//        });
//    });
//}

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

//                // 最初に表示される削除ボタンにEventListenerを設定する
//                let deleteButton = document.querySelector('.delete');
//                let testForm = input_total_calories.querySelector('.test_form');
//                deleteButton.addEventListener('click', () => {
//                    testForm.valu = "";
//                });

// カロリーの計算処理
function calorieCalc() {
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

// 最初に表示される削除ボタンにEventListenerを設定する
let deleteButton = document.querySelector('.delete');
deleteButton.addEventListener('click', () => {
    var testForms = input_calorie_forms[0].getElementsByClassName('test_form');
    for (let i = 0; i < testForms.length; i++) {
        testForms[i].value = "";
    };
});


// ボタンクリック後の処理
document.querySelector('#add_form').addEventListener('click', () => {
    //    const addFoodForm = document.createElement('input');
    //    addFoodForm.className = 'test_form form_clump';
    //    addFoodForm.type = 'text';
    //    addFoodForm.name = 'foodmenu';
    //    addFoodForm.setAttribute("value", "");
    //    const addCalorieForm = document.createElement('input');
    //    addCalorieForm.className = 'calorie_form test_form form_clump';
    //    addCalorieForm.type = 'text';
    //    addCalorieForm.name = 'foodmenu';
    //    addCalorieForm.setAttribute("value", "");
    //    const addCalorieForm_span = document.createElement('span');
    //    addCalorieForm_span.textContent = 'kcal';
    //    const deleteButton = document.createElement('button');
    //    deleteButton.className = "form_clump";
    //    deleteButton.type = "button";
    //    deleteButton.style = "background-color: red;";
    //    deleteButton.value = "削除";
    //    deleteButton.textContent = "削除";
    //    console.log(addFoodForm);
    //    console.log(addCalorieForm);
    //    console.log(deleteButton);

    // input_calorie_formの複製
    let clone_form = input_calorie_forms[0].cloneNode(true);
    // 追加ボタン押下時の処理で削除ボタンが画面に追加されるときに
    // EventListenerを設定してから追加する
    let cloneDelete = clone_form.querySelector('.delete');
    cloneDelete.addEventListener('click', () => {
        cloneDelete.parentElement.remove();
    });
    // 複製した要素のvalueを空にする
    let testForms = clone_form.getElementsByClassName('test_form');
    for (let i = 0; i < testForms.length; i++) {
        testForms[i].value = "";
    };

    // 複製したHTML要素をページに挿入
    //    input_calorie_forms.after(clone_form);
    input_total_calories.before(clone_form);


    //    //    deleteButtonEventSet();
    //    // 削除ボタンにEventListenerを設定
    //    //    function deleteButtonEventSet() {
    //    deleteButtons.forEach(deleteButton => {
    //        deleteButton.addEventListener('click', () => {
    //            deleteButton.parentNode.remove;
    //        });
    //    });
    //    //    }



    //    const div = document.querySelector('.input_calorie_form');
    //    div.appendChild(addFoodForm);
    //    div.appendChild(addCalorieForm);
    //    div.appendChild(addCalorieForm_span);
    //    div.appendChild(deleteButton);
    //      clone_form.addEventListener('change', calorieCalc);
    // カロリー計算更新用にフォームを再取得
    //    let parentElement = document.getElementById('parent_element')
    calorieForms = document.querySelectorAll(".calorie_form");
    //    // イベントリスナーの再登録
    clone_form.addEventListener('change', calorieCalc);// 新たな計算結果をDOMに伝える
    input_calorie_forms = document.querySelectorAll('.input_calorie_form');// 追加後の新たなフォームの状態をDOMに伝える
    //    addCalorieForm.addEventListener('change', calorieCalc);
    //        input_calorie_forms = document.querySelectorAll('.form_clump');


});


//// フォームの削除処理内容
//    for (let i = 0; i < deleteButtons.length; i++) {
//        deleteButtons[i].addEventListener('click', (e) => {
//            e.currentTarget.remove();
//        });
//    };
//    input_calorie_forms.forEach(inputCalorieForm => {
//        inputCalorieForm.remove();
//        input_calorie_forms = document.querySelectorAll('.input_calorie_form');
//    });
// 指定のボタンクリック後の処理
//deleteButtons.forEach(deleteButton => {
//    deleteButton.addEventListener('click', deleteForm);
//    console.log(deleteButtons);
//    input_calorie_forms = document.querySelectorAll('.input_calorie_form');
//})

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

//calorieForms[0].addEventListener('change', () => {
//    calorieCalc();
//});

//// 削除ボタンの発火
//deleteButtons.addEventListener('click', () => {
//    deleteButtonEventSet();
//});
