"use strict";
// Must call window.onload so everything on the page is loaded, meaning that nothing remains null
let numRows = 5;
let sum = 0;
let sumWeights = 0;
let gradingMethod = "Percent";
document.getElementById("addRow").onclick = function() {
    numRows += 1;
    if (gradingMethod === "Percent") {
        // Use insertAdjacentHTML to preserve the values entered in the text areas. This preserves event listeners whereas innerHTML doesn't
        document.getElementById("table").insertAdjacentHTML("beforeend", `<tr><th><input type="text" id="a${numRows}"></th><th><input type="number" id="g${numRows}"></th><th><input type="number" id="w${numRows}"></th></tr>`)
    } else {
        document.getElementById("table").insertAdjacentHTML("beforeend", `<tr>
        <th>
            <input type="text" id="a${numRows}">
        </th>
        <th>
            <select id="letterGrade${numRows}">
                <option id="NA${numRows}" value="None">--</option>
                <option id="aPlus${numRows}" value="A+">A+</option>
                <option id="a${numRows}" value="A">A</option>
                <option id="aMinus${numRows}" value="A-">A-</option>
                <option id="bPlus${numRows}" value="B+">B+</option>
                <option id="b${numRows}" value="B">B</option>
                <option id="bMinus${numRows}" value="B-">B-</option>
                <option id="cPlus${numRows}" value="C+">C+</option>
                <option id="c${numRows}" value="C">C</option>
                <option id="cMinus${numRows}" value="C-">C-</option>
                <option id="dPlus${numRows}" value="D+">D+</option>
                <option id="d${numRows}" value="D">D</option>
                <option id="dMinus${numRows}" value="D-">D-</option>
                <option id="F${numRows}" value="F">F</option>
            </select>
        </th>

        <th>
            <input type="number" id="w${numRows}">
        </th>`) 
    }
    
}

document.getElementById("reset").onclick = function() {
    numRows = 5;
    if (gradingMethod === "Percent") {
        document.getElementById("table").innerHTML = `<tr>
        <th>Assignment</th>
        <th>Grade(%)</th>
        <th>Weight</th>
        </tr>`;
        for(let i = 1; i <= 5; i++) {
            document.getElementById("table").innerHTML += `<tr>
            <th>
                <input type="text" id="a${i}">
            </th>
            <th>
                <input type="number" id="g${i}">
            </th>
            <th>
            <input type="number" id="w${i}">
            </th>
            </tr>`;
        }
        document.getElementById("finalGrade").innerHTML = "";
    } else {
        document.getElementById("table").innerHTML = `<tr>
        <th>Course Name</th>
        <th>Grade(letter)</th>
        <th>Credits</th>
        </tr>`;
        for(let i = 1; i <= 5; i++) {
            document.getElementById("table").innerHTML += `<tr>
            <th>
                <input type="text" id="a${i}">
            </th>
            <th>
                <select id="letterGrade${i}">
                    <option id="NA${i}" value="None">--</option>
                    <option id="aPlus${i}" value="A+">A+</option>
                    <option id="a${i}" value="A">A</option>
                    <option id="aMinus${i}" value="A-">A-</option>
                    <option id="bPlus${i}" value="B+">B+</option>
                    <option id="b${i}" value="B">B</option>
                    <option id="bMinus${i}" value="B-">B-</option>
                    <option id="cPlus${i}" value="C+">C+</option>
                    <option id="c${i}" value="C">C</option>
                    <option id="cMinus${i}" value="C-">C-</option>
                    <option id="dPlus${i}" value="D+">D+</option>
                    <option id="d${i}" value="D">D</option>
                    <option id="dMinus${i}" value="D-">D-</option>
                    <option id="F${i}" value="F">F</option>
                </select>
            </th>

            <th>
                <input type="number" id="w${i}">
            </th>`
        }
        document.getElementById("gpa").innerHTML = "";
    }
    
}

document.getElementById("percent").onclick = function() {
    if (gradingMethod !== "Percent") {
        document.getElementById("calcFinalGrade").value = `Calculate Final Grade`;
        document.getElementById("table").innerHTML = `<tr>
        <th>Assignment</th>
        <th>Grade(%)</th>
        <th>Weight</th>
        </tr>`;
        for(let i = 1; i <= numRows; i++) {
            document.getElementById("table").innerHTML += `<tr>
            <th>
                <input type="text" id="a${i}">
            </th>
            <th>
                <input type="number" id="g${i}">
            </th>
            <th>
                <input type="number" id="w${i}">
            </th>
            </tr>`
        }
        document.getElementById("gpa").innerHTML = "";
        gradingMethod = "Percent"
    }
}

document.getElementById("letter").onclick = function() {
    if (gradingMethod !== "Letter") {
        document.getElementById("calcFinalGrade").value = `Calculate GPA`;
        document.getElementById("table").innerHTML = `<tr>
        <th>Course Name</th>
        <th>Grade(letter)</th>
        <th>Credits</th>
        </tr>`;
        for(let i = 1; i <= numRows; i++) {
            document.getElementById("table").innerHTML += `<tr>
            <th>
                <input type="text" id="a${i}">
            </th>
            <th>
                <select id="letterGrade${i}">
                    <option id="NA${i}" value="None">--</option>
                    <option id="aPlus${i}" value="A+">A+</option>
                    <option id="a${i}" value="A">A</option>
                    <option id="aMinus${i}" value="A-">A-</option>
                    <option id="bPlus${i}" value="B+">B+</option>
                    <option id="b${i}" value="B">B</option>
                    <option id="bMinus${i}" value="B-">B-</option>
                    <option id="cPlus${i}" value="C+">C+</option>
                    <option id="c${i}" value="C">C</option>
                    <option id="cMinus${i}" value="C-">C-</option>
                    <option id="dPlus${i}" value="D+">D+</option>
                    <option id="d${i}" value="D">D</option>
                    <option id="dMinus${i}" value="D-">D-</option>
                    <option id="F${i}" value="F">F</option>
                </select>
            </th>

            <th>
                <input type="number" id="w${i}">
            </th>`
        }
        document.getElementById("finalGrade").innerHTML = "";
        gradingMethod = "Letter";
    }
}

document.getElementById("calcFinalGrade").onclick = function() {
    if (gradingMethod === "Percent") {
        for (let i = 1; i <= numRows; i++) {
            let assignment = document.getElementById(`a${i}`);
            let grade = document.getElementById(`g${i}`);
            let weight = document.getElementById(`w${i}`);
            if (assignment != null && grade != null && weight != null) {
                sum += Number(grade.value) * Number(weight.value);
                sumWeights += Number(weight.value);
            }
        }   
        if (sum == 0) {
            alert("Please enter at least one valid assignment with an associated grade/weight");
        } else {
            let val = sum/sumWeights;
            let letterGrade = "";
            if (val >= 96.5) {
                letterGrade = "A+";
            } else if (val < 96.5 && val >= 92.5) {
                letterGrade = "A";
            } else if (val < 92.5 && val >= 89.5) {
                letterGrade = "A-"
            } else if (val < 89.5 && val >= 86.5) {
                letterGrade = "B+";
            } else if (val < 86.5 && val >= 82.5) {
                letterGrade = "B";
            } else if (val < 82.5 && val >= 79.5) {
                letterGrade = "B-";
            } else if (val < 79.5 && val >= 76.5) {
                letterGrade = "C+";
            } else if (val < 76.5 && val >= 72.5) {
                letterGrade = "C";
            } else if (val < 72.5 && val >= 69.5) {
                letterGrade = "C-";
            } else if (val < 69.5 && val >= 66.5) {
                letterGrade = "D+";
            } else if (val < 66.5 && val >= 62.5) {
                letterGrade = "D";
            } else if (val < 62.5 && val >= 59.5) {
                letterGrade = "D-";
            } else {
                letterGrade = "F";
            }
            document.getElementById("finalGrade").innerHTML = `Your final grade is: ${val.toFixed(3)}% (${letterGrade})`;
        }
        sum = 0;
        sumWeights = 0; 
    } else {
        for (let i = 1; i <= numRows; i++) {
            let course = document.getElementById(`a${i}`);
            let temp = document.getElementById(`letterGrade${i}`);
            let grade = String(temp.options[temp.selectedIndex].value);
            let credits = document.getElementById(`w${i}`);
            if (course != null && grade !== "None" && credits != null) {
                switch(grade) {
                    case "A+":
                        sum += 4 * Number(credits.value)
                        sumWeights += Number(credits.value)
                        break;
                    case "A":
                        sum += 4 * Number(credits.value)
                        sumWeights += Number(credits.value)
                        break;
                    case "A-":
                        sum += 3.7 * Number(credits.value)
                        sumWeights += Number(credits.value)
                        break;
                    case "B+":
                        sum += 3.3 * Number(credits.value)
                        sumWeights += Number(credits.value)
                        break;
                    case "B":
                        sum += 3 * Number(credits.value)
                        sumWeights += Number(credits.value)
                        break;
                    case "B-":
                        sum += 2.7 * Number(credits.value)
                        sumWeights += Number(credits.value)
                        break;
                    case "C+":
                        sum += 2.3 * Number(credits.value)
                        sumWeights += Number(credits.value)
                        break;
                    case "C":
                        sum += 2 * Number(credits.value)
                        sumWeights += Number(credits.value)
                        break;
                    case "C-":
                        sum += 1.7 * Number(credits.value)
                        sumWeights += Number(credits.value)
                        break;
                    case "D+":
                        sum += 1.3 * Number(credits.value)
                        sumWeights += Number(credits.value)
                        break;
                    case "D":
                        sum += 1.0 * Number(credits.value)
                        sumWeights += Number(credits.value)
                        break;
                    case "D-":
                        sum += 0.7 * Number(credits.value)
                        sumWeights += Number(credits.value)
                        break;
                    case "F":
                        sum += 0.0 * Number(credits.value)
                        sumWeights += Number(credits.value)
                        break;
                }
            }
        }
        if (sum == 0) {
            alert("Please enter at least one valid course with an associated grade/credits");
        } else {
            let val = sum/sumWeights;
            document.getElementById("gpa").innerHTML = `Your GPA is: ${val.toFixed(3)}`;
        }
        sum = 0;
        sumWeights = 0;
    }
}

