// --------input--------------
const myarray = [];
// element

const element = {
    arrayInputValue: () => document.getElementById("array_input_value"),
    arrayBtn: () => document.getElementById("array_button"),
    arrayResult: () => document.getElementById("array_result"),
    inputSection61: () => {
        let input = document.createElement("input");
        input.setAttribute("id", "input61")
        input.setAttribute("placeholder", "Vị trí 1");
        return input;
    },
    inputSection62: () => {
        let input = document.createElement("input");
        input.setAttribute("id", "input62");
        input.setAttribute("placeholder", "Vị trí 2");
        return input;
    }
}
const section = {
    one: {
        ask: "1. Tổng các số dương trong mảng ?",
        ans: () => {
            // -------first way---------

            // var total = 0;
            // for (let i = 0; i < myarray.length; i++) {
            //     const element = myarray[i];
            //     if (element > 0) {

            //         total += element;
            //     }
            // }
            // return total;

            // --------second way-----
            return myarray.reduce((total, value) => {
                if (value > 0) {
                    return total + value;
                } else {
                    return total;
                }
            })

        }
    }
    ,
    two: {
        ask: "2. Đếm có bao nhiêu số dương trong mảng ?",
        ans: () => {
            // -------first way---------
            let count = 0;
            for (const iterator of myarray) {
                if (iterator > 0) {
                    count++;
                }
            }
            return count;
        }
    },
    three: {
        ask: "3. Tìm số nhỏ nhất trong mảng ?",
        ans: () => {
            // Cach 1: 
            // var min = Infinity;
            // for (let i = 0; i < myarray.length; i++) {
            //     const element = myarray[i];

            //     if (element < min) {
            //         min = element;
            //     }

            // }
            // return min;
            // Cach 2:
            return myarray.sort((a, b) => a - b)[0];
        }
    },
    four: {
        ask: "4. Tìm số dương nhỏ nhất trong mảng ?",
        ans: () => {
            // Cách 1 
            const greatThanZeroArray = [];
            let min = Infinity;
            for (let i = 0; i < myarray.length; i++) {
                const element = myarray[i];
                if (element > 0) {
                    greatThanZeroArray.push(element);
                }
            }
            for (let i = 0; i < greatThanZeroArray.length; i++) {
                const element = greatThanZeroArray[i];
                if (element < min) {
                    min = element;
                }
            }
            return min;
        }
    },
    five: {
        ask: "5. Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1 ?",
        ans: () => {
            even = Infinity;
            for (let i = myarray.length - 1; i >= 0; i--) {
                const element = myarray[i];
                if (element % 2 === 0) {
                    even = element;
                    break;
                }
            }
            if (even === Infinity) {
                even = -1;

            }
            return even;
        }
    },
    six: {
        ask: "6. Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị)?",
        ans: () => {
            let x = document.getElementById("input61").value * 1;
            let y = document.getElementById("input62").value * 1;
            let m = 0;
            if (x !== undefined && y !== undefined && myarray !== undefined) {

                m = myarray[x];
                myarray[x] = myarray[y];
                myarray[y] = m;
                console.log(myarray);
                console.log(x, y, m);
            }
            return myarray;
        }
    },
    seven: {
        ask: "7. Sắp xếp mảng theo thứ tự tăng dần ?",
        ans: () => {
            myarray.sort((a, b) => a - b);
            return myarray;
        }
    },
    eight: {
        ask: "8. Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1",
        ans: () => {
            let soNguyenTo = -1;
            for (let i = 0; i < myarray.length; i++) {
                const element = myarray[i];
                if (element > 1) {
                    console.log(element);
                    let signal = true;
                    if (soNguyenTo !== -1) break;
                    if (element === 2) {
                        soNguyenTo = 2;
                        break
                    }
                    for (let j = 2; j < element; j++) {
                        if (element % j === 0) signal = false;
                        if (j === element - 1 && signal === true) soNguyenTo = element;
                    }
                }

            }
            return soNguyenTo;
        }
    },
    nine: {
        ask: "9. Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?",
        ans: () => {
            let count = 0;
            for (let i = 0; i < myarray.length; i++) {
                const e = myarray[i];
                if (Number.isInteger(e)) {
                    count++;
                }
            }
            return count;
        }
    },
    ten: {
        ask: "10. So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn ?",
        ans: () => {
            let countLessThan0 = 0;
            let countGreatThan0 = 0;
            for (let i = 0; i < myarray.length; i++) {
                const e = myarray[i];
                if (e>0) {
                    countGreatThan0 ++;
                } else {
                    countLessThan0 ++;
                }
            }
            if(countGreatThan0>countLessThan0){
                return "Số lượng số dương nhiều hơn";
            } else if (countGreatThan0<countLessThan0){
                
                return "Số lượng số âm nhiều hơn";
            }else {
                return "Số lượng số âm bằng số lượng số dương";
            }
        }
    }
}


// end element
// --------end input----------
//------------handel---------- 
for (const key in section) {
    // CREAT element 

    let sectionAsk = document.createElement("p");
    let sectionBtn = document.createElement("button");//id
    let sectionAnswer = document.createElement("p");// id
    let mysection = document.createElement("section");
    let sectionDiv = document.getElementById("contents");

    const _txt_ask = document.createTextNode(section[key].ask);
    const _txt_button = document.createTextNode("Kết quả");
    const _txt_ans = document.createTextNode("Kết quả hiển thị tại đây !")

    sectionAsk.appendChild(_txt_ask);
    sectionBtn.appendChild(_txt_button);
    sectionAnswer.appendChild(_txt_ans);
    sectionAsk.setAttribute("id", "ask" + Object.keys(section).indexOf(key))
    sectionBtn.setAttribute("id", "btn" + Object.keys(section).indexOf(key))
    sectionAnswer.setAttribute("id", "txt" + Object.keys(section).indexOf(key))

    mysection.appendChild(sectionAsk);
    mysection.appendChild(sectionBtn);
    mysection.appendChild(sectionAnswer);
    sectionDiv.appendChild(mysection);
    sectionBtn.onclick = () => {
        switch (sectionBtn.id) {
            case "btn0":
                sectionAnswer.innerText = section.one.ans();
                break;
            case "btn1":
                sectionAnswer.innerText = section.two.ans();
                break;
            case "btn2":
                sectionAnswer.innerText = section.three.ans();
                break;
            case "btn3":
                sectionAnswer.innerText = section.four.ans();
                break;
            case "btn4":
                sectionAnswer.innerText = section.five.ans();
                break;
            case "btn5":
                sectionAnswer.innerText = section.six.ans();
                break;
            case "btn6":
                sectionAnswer.innerText = section.seven.ans();
                break;
            case "btn7":
                sectionAnswer.innerText = section.eight.ans();
                break;
            case "btn8":
                sectionAnswer.innerText = section.nine.ans();
                break;
            case "btn9":
                sectionAnswer.innerText = section.ten.ans();
                break;
            default:
                break;
        }
    }
}

//add element section 6: 
// section.inputSection6()
document.getElementById("ask5").appendChild(element.inputSection61());
document.getElementById("ask5").appendChild(element.inputSection62());
// document.getElementById("btn5").insertBefore(element.inputSection6());
element.arrayBtn().onclick = () => {
    const INPUT_VALUE = element.arrayInputValue().value;
    if (INPUT_VALUE === "") { window.alert("Nhập dữ liệu vào ô!"); return }
    if (isNaN(INPUT_VALUE * 1)) { window.alert("Dữ liệu không hợp lệ!"); return }
    element.arrayInputValue().value = "";
    element.arrayInputValue().focus()
    myarray.push(INPUT_VALUE * 1);
    element.arrayResult().innerHTML = myarray;
}


//-------end handel-----------
// ----------output-----------


// -------end output----------