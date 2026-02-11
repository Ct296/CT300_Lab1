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

// 3. Xóa 1 ký tự (DEL)
function deleteChar() {
    if (resultScreen.value === "Error") {
        clearAll();
        return;
    }
    resultScreen.value = resultScreen.value.slice(0, -1);
    if (resultScreen.value === "") {
        resultScreen.placeholder = "0";
    }
}

// 4. Tính toán kết quả (=)
function calculate() {
    try {
        let expression = resultScreen.value;
        
        if (expression === "") return;

        historyScreen.innerText = expression + " =";

        let jsExpression = expression.replace(/×/g, '*').replace(/÷/g, '/');

        let result = eval(jsExpression);

        if (!Number.isInteger(result)) {
            result = parseFloat(result.toFixed(4)); 
        }

        resultScreen.value = result;

    } catch (error) {
        resultScreen.value = "Error";
    }
}
// 5. Hỗ trợ bàn phím máy tính (Keyboard)
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Danh sách các phím cho phép
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/', '%', '(', ')'];

    if (allowedKeys.includes(key)) {
        event.preventDefault();
        appendValue(key);
    } 
    else if (key === 'Enter') {
        event.preventDefault();
        calculate();
    } 
    else if (key === 'Backspace') {
        event.preventDefault();
        deleteChar();
    } 
    else if (key === 'Escape') {
        event.preventDefault();
        clearAll();
    }
});