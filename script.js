const resultScreen = document.getElementById('result');
const historyScreen = document.getElementById('history');

// 1. Thêm ký tự vào màn hình
function appendValue(val) {
    if (resultScreen.value === "Error") {
        resultScreen.value = "";
    }
    
    const operators = ['+', '-', '*', '/', '%', ')'];
    if (resultScreen.value === "0" && !operators.includes(val)) {
        resultScreen.value = val;
    } else {
        resultScreen.value += val;
    }
}

// 2. Xóa tất cả (AC)
function clearAll() {
    resultScreen.value = "";
    resultScreen.placeholder = "0";
    historyScreen.innerText = "";
}