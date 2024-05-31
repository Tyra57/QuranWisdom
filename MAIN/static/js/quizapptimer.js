//getting all required elements
const start_btn = document.querySelector(".start-btn button");
const start_btn2 = document.querySelector(".start-btn-2 button");
const start_btn3 = document.querySelector(".start-btn-3 button");
const start_btn4 = document.querySelector(".start-btn-4 button");
const start_btn5 = document.querySelector(".start-btn-5 button");
const start_btn6 = document.querySelector(".start-btn-6 button");
const info_box = document.querySelector(".info-box");
const info_box_2 = document.querySelector(".info-box-2");  
const info_box_3 = document.querySelector(".info-box-3");  
const info_box_4 = document.querySelector(".info-box-4");
const info_box_5 = document.querySelector(".info-box-5");
const info_box_6 = document.querySelector(".info-box-6");
const exit_btn = info_box.querySelector(".buttons .quit");
const exit_btn2 = info_box_2.querySelector(".buttons2 .quit");
const exit_btn3 = info_box_3.querySelector(".buttons3 .quit");
const exit_btn4 = info_box_4.querySelector(".buttons4 .quit");
const exit_btn5 = info_box_5.querySelector(".buttons5 .quit");
const exit_btn6 = info_box_6.querySelector(".buttons6 .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const continue_btn2 = info_box_2.querySelector(".buttons2 .restart");
const continue_btn3 = info_box_3.querySelector(".buttons3 .restart");
const continue_btn4 = info_box_4.querySelector(".buttons4 .restart");
const continue_btn5 = info_box_5.querySelector(".buttons5 .restart");
const continue_btn6 = info_box_6.querySelector(".buttons6 .restart");
const quiz_box = document.querySelector(".quiz-box");
const quiz_box_2 = document.querySelector(".quiz-box-2");
const quiz_box_3 = document.querySelector(".quiz-box-3");
const quiz_box_4 = document.querySelector(".quiz-box-4");
const quiz_box_5 = document.querySelector(".quiz-box-5");
const quiz_box_6 = document.querySelector(".quiz-box-6");
const timeCount = quiz_box.querySelector(".timer .timer-sec");
const timeCount2 = quiz_box_2.querySelector(".timer .timer-sec");
const timeCount3 = quiz_box_3.querySelector(".timer .timer-sec");
const timeCount4 = quiz_box_4.querySelector(".timer .timer-sec");
const timeCount5 = quiz_box_5.querySelector(".timer .timer-sec");
const timeCount6 = quiz_box_6.querySelector(".timer .timer-sec");
const timeLine = quiz_box.querySelector("header .time-line");
const timeLine2 = quiz_box_2.querySelector("header .time-line");
const timeLine3 = quiz_box_3.querySelector("header .time-line");
const timeLine4 = quiz_box_4.querySelector("header .time-line");
const timeLine5 = quiz_box_5.querySelector("header .time-line");
const timeLine6 = quiz_box_6.querySelector("header .time-line");
const timeOff = quiz_box.querySelector("header .time-text");
const timeOff2 = quiz_box_2.querySelector("header .time-text");
const timeOff3 = quiz_box_3.querySelector("header .time-text");
const timeOff4 = quiz_box_4.querySelector("header .time-text");
const timeOff5 = quiz_box_5.querySelector("header .time-text");
const timeOff6 = quiz_box_6.querySelector("header .time-text");
const option_list = document.querySelector(".option-list");
const option_list2 = document.querySelector(".option-list-2");
const option_list3 = document.querySelector(".option-list-3");
const option_list4 = document.querySelector(".option-list-4");
const option_list5 = document.querySelector(".option-list-5");
const option_list6 = document.querySelector(".option-list-6");
const main = document.querySelector(".main");

// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}
//if startQuiz 2 button clicked
start_btn2.onclick = ()=>{
    info_box_2.classList.add("activeInfo2"); //show info box
}
//if startQuiz 3 button clicked
start_btn3.onclick = ()=>{
    info_box_3.classList.add("activeInfo3"); //show info box
}
//if startQuiz 4 button clicked
start_btn4.onclick = ()=>{
    info_box_4.classList.add("activeInfo4"); //show info box
}
//if startQuiz 5 button clicked
start_btn5.onclick = ()=>{
    info_box_5.classList.add("activeInfo5"); //show info box
}
//if startQuiz 6 button clicked
start_btn6.onclick = ()=>{
    info_box_6.classList.add("activeInfo6"); //show info box
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}
// if exitQuiz 2 button clicked
exit_btn2.onclick = ()=>{
    info_box_2.classList.remove("activeInfo2"); //hide info box
}
// if exitQuiz 3 button clicked
exit_btn3.onclick = ()=>{
    info_box_3.classList.remove("activeInfo3"); //hide info box
}
// if exitQuiz 4 button clicked
exit_btn4.onclick = ()=>{
    info_box_4.classList.remove("activeInfo4"); //hide info box
}
// if exitQuiz 5 button clicked
exit_btn5.onclick = ()=>{
    info_box_5.classList.remove("activeInfo5"); //hide info box
}
// if exitQuiz 6 button clicked
exit_btn6.onclick = ()=>{
    info_box_6.classList.remove("activeInfo6"); //hide info box
}

// if continueQuiz button clicked   
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuestions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}
// if continueQuiz 2 button clicked
continue_btn2.onclick = ()=>{
    info_box_2.classList.remove("activeInfo2"); //hide info box
    quiz_box_2.classList.add("activeQuiz2"); //show quiz box
    showQuestions2(0); //calling showQestions function
    queCounter2(1); //passing 1 parameter to queCounter
    startTimer2(15); //calling startTimer function
    startTimerLine2(0); //calling startTimerLine function
}
// if continueQuiz 3 button clicked
continue_btn3.onclick = ()=>{
    info_box_3.classList.remove("activeInfo3"); //hide info box
    quiz_box_3.classList.add("activeQuiz3"); //show quiz box
    showQuestions3(0); //calling showQestions function
    queCounter3(1); //passing 1 parameter to queCounter
    startTimer3(15); //calling startTimer function
    startTimerLine3(0); //calling startTimerLine function
}
// if continueQuiz 4 button clicked
continue_btn4.onclick = ()=>{
    info_box_4.classList.remove("activeInfo4"); //hide info box
    quiz_box_4.classList.add("activeQuiz4"); //show quiz box
    showQuestions4(0); //calling showQestions function
    queCounter4(1); //passing 1 parameter to queCounter
    startTimer4(15); //calling startTimer function
    startTimerLine4(0); //calling startTimerLine function
}
// if continueQuiz 5 button clicked
continue_btn5.onclick = ()=>{
    info_box_5.classList.remove("activeInfo5"); //hide info box
    quiz_box_5.classList.add("activeQuiz5"); //show quiz box
    showQuestions5(0); //calling showQestions function
    queCounter5(1); //passing 1 parameter to queCounter
    startTimer5(15); //calling startTimer function
    startTimerLine5(0); //calling startTimerLine function
}
// if continueQuiz 6 button clicked
continue_btn6.onclick = ()=>{
    info_box_6.classList.remove("activeInfo6"); //hide info box
    quiz_box_6.classList.add("activeQuiz6"); //show quiz box
    showQuestions6(0); //calling showQestions function
    queCounter6(1); //passing 1 parameter to queCounter
    startTimer6(15); //calling startTimer function
    startTimerLine6(0); //calling startTimerLine function
}

let que_count = 0;
let que_count2 = 0;
let que_count3 = 0;
let que_count4 = 0;
let que_count5 = 0;
let que_count6 = 0;
let que_numb = 1;
let que_numb2 = 1;
let que_numb3 = 1;
let que_numb4 = 1;
let que_numb5 = 1;
let que_numb6 = 1;
let counter;
let counter2;
let counter3;
let counter4;
let counter5;
let counter6;
let counterLine;
let counterLine2;
let counterLine3;
let counterLine4;
let counterLine5;
let counterLine6;
let timeValue = 15;
let timeValue2 = 15;
let timeValue3 = 15;
let timeValue4 = 15;
let timeValue5 = 15;
let timeValue6 = 15;
let widthValue = 0;
let widthValue2 = 0;
let widthValue3 = 0;
let widthValue4 = 0;
let widthValue5 = 0;
let widthValue6 = 0;
let userScore = 0;
let userScore2 = 0;
let userScore3 = 0;
let userScore4 = 0;
let userScore5 = 0;
let userScore6 = 0;

const next_btn = quiz_box.querySelector(".next-btn");
const next_btn_2 = quiz_box_2.querySelector(".next-btn-2");
const next_btn_3 = quiz_box_3.querySelector(".next-btn-3");
const next_btn_4 = quiz_box_4.querySelector(".next-btn-4");
const next_btn_5 = quiz_box_5.querySelector(".next-btn-5");
const next_btn_6 = quiz_box_6.querySelector(".next-btn-6");
const result_box = document.querySelector(".result-box");
const result_box_2 = document.querySelector(".result-box-2");
const result_box_3 = document.querySelector(".result-box-3");
const result_box_4 = document.querySelector(".result-box-4");
const result_box_5 = document.querySelector(".result-box-5");
const result_box_6 = document.querySelector(".result-box-6");
const restart_quiz = result_box.querySelector(".buttons .restart");
const restart_quiz_2 = result_box_2.querySelector(".buttons-2 .restart");
const restart_quiz_3 = result_box_3.querySelector(".buttons-3 .restart");
const restart_quiz_4 = result_box_4.querySelector(".buttons-4 .restart");
const restart_quiz_5 = result_box_5.querySelector(".buttons-5 .restart");
const restart_quiz_6 = result_box_6.querySelector(".buttons-6 .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");
const quit_quiz_2 = result_box_2.querySelector(".buttons-2 .quit");
const quit_quiz_3 = result_box_3.querySelector(".buttons-3 .quit");
const quit_quiz_4 = result_box_4.querySelector(".buttons-4 .quit");
const quit_quiz_5 = result_box_5.querySelector(".buttons-5 .quit");
const quit_quiz_6 = result_box_6.querySelector(".buttons-6 .quit");

// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    result_box.classList.remove("activeResult"); //hide result box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    que_count = 0;
    que_numb = 1;
    timeValue = 15;
    widthValue = 0;
    userScore = 0;
    showQuestions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    startTimer(timeValue); //calling startTimer function
    clearInterval(counterLine); //clear counterLine
    startTimerLine(widthValue); //calling startTimerLine function
    next_btn.style.display = "none"; //hide the next button
    timeOff.textContent = "Time Left"; //change the text of timeText to Time Left
}
// if restartQuiz 2 button clicked
restart_quiz_2.onclick = ()=>{
    result_box_2.classList.remove("activeResult2"); //hide result box
    quiz_box_2.classList.add("activeQuiz2"); //show quiz box
    que_count2 = 0;
    que_numb2 = 1;
    timeValue2 = 15;
    widthValue2 = 0;
    userScore2 = 0;
    showQuestions2(que_count2); //calling showQestions function
    queCounter2(que_numb2); //passing que_numb value to queCounter
    clearInterval(counter2); //clear counter
    startTimer2(timeValue2); //calling startTimer function
    clearInterval(counterLine2); //clear counterLine
    startTimerLine2(widthValue2); //calling startTimerLine function
    next_btn_2.style.display = "none"; //hide the next button
    timeOff2.textContent = "Time Left"; //change the text of timeText to Time Left
}

// if restartQuiz 3 button clicked
restart_quiz_3.onclick = ()=>{
    result_box_3.classList.remove("activeResult3"); //hide result box
    quiz_box_3.classList.add("activeQuiz3"); //show quiz box
    que_count3 = 0;
    que_numb3 = 1;
    timeValue3 = 15;
    widthValue3 = 0;
    userScore3 = 0;
    showQuestions3(que_count3); //calling showQestions function
    queCounter3(que_numb3); //passing que_numb value to queCounter
    clearInterval(counter3); //clear counter
    startTimer3(timeValue3); //calling startTimer function
    clearInterval(counterLine3); //clear counterLine
    startTimerLine3(widthValue3); //calling startTimerLine function
    next_btn_3.style.display = "none"; //hide the next button
    timeOff3.textContent = "Time Left"; //change the text of timeText to Time Left
}

// if restartQuiz 4 button clicked
restart_quiz_4.onclick = ()=>{
    result_box_4.classList.remove("activeResult4"); //hide result box
    quiz_box_4.classList.add("activeQuiz4"); //show quiz box
    que_count4 = 0;
    que_numb4 = 1;
    timeValue4 = 15;
    widthValue4 = 0;
    userScore4 = 0;
    showQuestions4(que_count4); //calling showQestions function
    queCounter4(que_numb4); //passing que_numb value to queCounter
    clearInterval(counter4); //clear counter
    startTimer4(timeValue4); //calling startTimer function
    clearInterval(counterLine4); //clear counterLine
    startTimerLine4(widthValue4); //calling startTimerLine function
    next_btn_4.style.display = "none"; //hide the next button   
    timeOff4.textContent = "Time Left"; //change the text of timeText to Time Left
}

// if restartQuiz 5 button clicked
restart_quiz_5.onclick = ()=>{
    result_box_5.classList.remove("activeResult5"); //hide result box
    quiz_box_5.classList.add("activeQuiz5"); //show quiz box
    que_count5 = 0;
    que_numb5 = 1;
    timeValue5 = 15;
    widthValue5 = 0;
    userScore5 = 0;
    showQuestions5(que_count5); //calling showQestions function
    queCounter5(que_numb5); //passing que_numb value to queCounter
    clearInterval(counter5); //clear counter
    startTimer5(timeValue5); //calling startTimer function
    clearInterval(counterLine5); //clear counterLine
    startTimerLine5(widthValue5); //calling startTimerLine function
    next_btn_5.style.display = "none"; //hide the next button
    timeOff5.textContent = "Time Left"; //change the text of timeText to Time Left
}

// if restartQuiz 6 button clicked
restart_quiz_6.onclick = ()=>{
    result_box_6.classList.remove("activeResult6"); //hide result box
    quiz_box_6.classList.add("activeQuiz6"); //show quiz box
    que_count6 = 0;
    que_numb6 = 1;
    timeValue6 = 15;
    widthValue6 = 0;
    userScore6 = 0;
    showQuestions6(que_count6); //calling showQestions function
    queCounter6(que_numb6); //passing que_numb value to queCounter
    clearInterval(counter6); //clear counter
    startTimer6(timeValue6); //calling startTimer function
    clearInterval(counterLine6); //clear counterLine
    startTimerLine6(widthValue6); //calling startTimerLine function
    next_btn_6.style.display = "none"; //hide the next button
    timeOff6.textContent = "Time Left"; //change the text of timeText to Time Left
}

// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}
// if quitQuiz 2 button clicked
quit_quiz_2.onclick = ()=>{
    window.location.reload(); //reload the current window
}
// if quitQuiz 3 button clicked
quit_quiz_3.onclick = ()=>{
    window.location.reload(); //reload the current window
}
// if quitQuiz 4 button clicked
quit_quiz_4.onclick = ()=>{
    window.location.reload(); //reload the current window
}
// if quitQuiz 5 button clicked
quit_quiz_5.onclick = ()=>{
    window.location.reload(); //reload the current window
}
// if quitQuiz 6 button clicked
quit_quiz_6.onclick = ()=>{
    window.location.reload(); //reload the current window
}

// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ 
        que_count++; 
        que_numb++;
        showQuestions(que_count); 
        queCounter(que_numb);
        clearInterval(counter);
        startTimer(timeValue);
        clearInterval(counterLine);
        startTimerLine(widthValue);
        next_btn.style.display = "none";
        timeOff.textContent = "Time Left";

    } else {
        clearInterval(counter);
        clearInterval(counterLine);
        console.log("Questions completed");
        showResultBox();
    }
}
// if Next Que 2 button clicked
next_btn_2.onclick = ()=>{
    if(que_count2 < questions2.length - 1){ 
        que_count2++; 
        que_numb2++;
        showQuestions2(que_count2); 
        queCounter2(que_numb2);
        clearInterval(counter2);
        startTimer2(timeValue2);
        clearInterval(counterLine2);
        startTimerLine2(widthValue2);
        next_btn_2.style.display = "none";
        timeOff2.textContent = "Time Left";

    } else {
        clearInterval(counter2);
        clearInterval(counterLine2);
        console.log("Questions completed");
        showResultBox2();
    }
}

// if Next Que 3 button clicked
next_btn_3.onclick = ()=>{
    if(que_count3 < questions3.length - 1){ 
        que_count3++; 
        que_numb3++;
        showQuestions3(que_count3); 
        queCounter3(que_numb3);
        clearInterval(counter3);
        startTimer3(timeValue3);
        clearInterval(counterLine3);
        startTimerLine3(widthValue3);
        next_btn_3.style.display = "none";
        timeOff3.textContent = "Time Left";

    } else {
        clearInterval(counter3);
        clearInterval(counterLine3);
        console.log("Questions completed");
        showResultBox3();
    }
}
// if Next Que 4 button clicked
next_btn_4.onclick = ()=>{
    if(que_count4 < questions4.length - 1){
        que_count4++;
        que_numb4++;
        showQuestions4(que_count4);
        queCounter4(que_numb4);
        clearInterval(counter4);
        startTimer4(timeValue4);
        clearInterval(counterLine4);
        startTimerLine4(widthValue4);
        next_btn_4.style.display = "none";
        timeOff4.textContent = "Time Left";
    } else {
        clearInterval(counter4);
        clearInterval(counterLine4);
        console.log("Questions completed");
        showResultBox4();
    }
}
// if Next Que 5 button clicked
next_btn_5.onclick = ()=>{
    if(que_count5 < questions5.length - 1){
        que_count5++;
        que_numb5++;
        showQuestions5(que_count5);
        queCounter5(que_numb5);
        clearInterval(counter5);
        startTimer5(timeValue5);
        clearInterval(counterLine5);
        startTimerLine5(widthValue5);
        next_btn_5.style.display = "none";
        timeOff5.textContent = "Time Left";
    } else {
        clearInterval(counter5);
        clearInterval(counterLine5);
        console.log("Questions completed");
        showResultBox5();
    }
}
// if Next Que 6 button clicked
next_btn_6.onclick = ()=>{
    if(que_count6 < questions6.length - 1){
        que_count6++;
        que_numb6++;
        showQuestions6(que_count6);
        queCounter6(que_numb6);
        clearInterval(counter6);
        startTimer6(timeValue6);
        clearInterval(counterLine6);
        startTimerLine6(widthValue6);
        next_btn_6.style.display = "none";
        timeOff6.textContent = "Time Left";
    } else {
        clearInterval(counter6);
        clearInterval(counterLine6);
        console.log("Questions completed");
        showResultBox6();
    }
}

//getting questions and options from array for the first question
function showQuestions(index){
    const que_text = document.querySelector(".que-text");
    
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option">'+ questions[index].options[0] +'<span></span></div>'
    + '<div class="option">'+ questions[index].options[1] +'<span></span></div>'
    + '<div class="option">'+ questions[index].options[2] +'<span></span></div>'
    + '<div class="option">'+ questions[index].options[3] +'<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    
    const option = option_list.querySelectorAll(".option");
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

//getting questions and options from array for the second question
function showQuestions2(index){
    const que_text_2 = document.querySelector(".que-text-2");
    
    let que_tag2= '<span>'+ questions2[index].numb + ". " + questions2[index].question +'</span>';
    let option_tag2 = '<div class="option">'+ questions2[index].options[0] +'<span></span></div>'
    + '<div class="option">'+ questions2[index].options[1] +'<span></span></div>'
    + '<div class="option">'+ questions2[index].options[2] +'<span></span></div>'
    + '<div class="option">'+ questions2[index].options[3] +'<span></span></div>';
    que_text_2.innerHTML = que_tag2;
    option_list2.innerHTML = option_tag2;
    
    const option2 = option_list2.querySelectorAll(".option");
    for(i=0; i < option2.length; i++){
        option2[i].setAttribute("onclick", "optionSelected2(this)");
    }
}

//getting questions and options from array for the third question
function showQuestions3(index){
    const que_text_3 = document.querySelector(".que-text-3");
    
    let que_tag3 = '<span>'+ questions3[index].numb + ". " + questions3[index].question +'</span>';
    let option_tag3 = '<div class="option">'+ questions3[index].options[0] +'<span></span></div>'
    + '<div class="option">'+ questions3[index].options[1] +'<span></span></div>'
    + '<div class="option">'+ questions3[index].options[2] +'<span></span></div>'
    + '<div class="option">'+ questions3[index].options[3] +'<span></span></div>';
    que_text_3.innerHTML = que_tag3;
    option_list3.innerHTML = option_tag3;
    
    const option3 = option_list3.querySelectorAll(".option");
    for(i=0; i < option3.length; i++){
        option3[i].setAttribute("onclick", "optionSelected3(this)");
    }
}
//getting questions and options from array for the fourth question
function showQuestions4(index){
    const que_text_4 = document.querySelector(".que-text-4");

    let que_tag4 = '<span>'+ questions4[index].numb + ". " + questions4[index].question +'</span>';
    let option_tag4 = '<div class="option">'+ questions4[index].options[0] +'<span></span></div>'
    + '<div class="option">'+ questions4[index].options[1] +'<span></span></div>'
    + '<div class="option">'+ questions4[index].options[2] +'<span></span></div>'
    + '<div class="option">'+ questions4[index].options[3] +'<span></span></div>';
    que_text_4.innerHTML = que_tag4;
    option_list4.innerHTML = option_tag4;

    const option4 = option_list4.querySelectorAll(".option");
    for(i=0; i < option4.length; i++){
        option4[i].setAttribute("onclick", "optionSelected4(this)");
    }
}
//getting questions and options from array for the fifth question
function showQuestions5(index){
    const que_text_5 = document.querySelector(".que-text-5");

    let que_tag5 = '<span>'+ questions5[index].numb + ". " + questions5[index].question +'</span>';
    let option_tag5 = '<div class="option">'+ questions5[index].options[0] +'<span></span></div>'
    + '<div class="option">'+ questions5[index].options[1] +'<span></span></div>'
    + '<div class="option">'+ questions5[index].options[2] +'<span></span></div>'
    + '<div class="option">'+ questions5[index].options[3] +'<span></span></div>';
    que_text_5.innerHTML = que_tag5;
    option_list5.innerHTML = option_tag5;

    const option5 = option_list5.querySelectorAll(".option");
    for(i=0; i < option5.length; i++){
        option5[i].setAttribute("onclick", "optionSelected5(this)");
    }
}
//getting questions and options from array for the sixth question
function showQuestions6(index){
    const que_text_6 = document.querySelector(".que-text-6");
    
    let que_tag6 = '<span>'+ questions6[index].numb + ". " + questions6[index].question +'</span>';
    let option_tag6 = '<div class="option">'+ questions6[index].options[0] +'<span></span></div>'
    + '<div class="option">'+ questions6[index].options[1] +'<span></span></div>'
    + '<div class="option">'+ questions6[index].options[2] +'<span></span></div>'
    + '<div class="option">'+ questions6[index].options[3] +'<span></span></div>';
    que_text_6.innerHTML = que_tag6;
    option_list6.innerHTML = option_tag6;

    const option6 = option_list6.querySelectorAll(".option");
    for(i=0; i < option6.length; i++){
        option6[i].setAttribute("onclick", "optionSelected6(this)");
    }
}


let tickIcon = '<div class="icon tick"><ion-icon name="checkmark"></ion-icon></div>';
let crossIcon = '<div class="icon cross"><ion-icon name="close"></ion-icon></div>';

//if user clicked on option for the first quiz
function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    const allOptions = option_list.children.length;
    if(userAns == correctAns){
        userScore += 1;
        console.log(userScore);
        answer.classList.add("correct");
        console.log("Answer is Correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);
    } else {
        answer.classList.add("incorrect");
        console.log("Answer is Wrong");
        answer.insertAdjacentHTML("beforeend", crossIcon);

        //if answer is incorrect then automatically selected the correct answer
        for(let i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correctAns){
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    }
    //once user selected disabled all options
    for(let i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled");
    }
    next_btn.style.display = "block";
}

//if user clicked on option for the second quiz
function optionSelected2(answer){
    clearInterval(counter2);
    clearInterval(counterLine2);
    let userAns = answer.textContent;
    let correctAns = questions2[que_count2].answer;
    const allOptions = option_list2.children.length;
    if(userAns == correctAns){
        userScore2 += 1;
        console.log(userScore2);
        answer.classList.add("correct");
        console.log("Answer is Correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);
    } else {
        answer.classList.add("incorrect");
        console.log("Answer is Wrong");
        answer.insertAdjacentHTML("beforeend", crossIcon);

        //if answer is incorrect then automatically selected the correct answer
        for(let i=0; i < allOptions; i++){
            if(option_list2.children[i].textContent == correctAns){
                option_list2.children[i].setAttribute("class", "option correct");
                option_list2.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    }
    //once user selected disabled all options
    for(let i=0; i < allOptions; i++){
        option_list2.children[i].classList.add("disabled");
    }
    next_btn_2.style.display = "block";
}

//if user clicked on option for the third quiz
function optionSelected3(answer){
    clearInterval(counter3);
    clearInterval(counterLine3);
    let userAns = answer.textContent;
    let correctAns = questions3[que_count3].answer;
    const allOptions = option_list3.children.length;
    if(userAns == correctAns){
        userScore3 += 1;
        console.log(userScore3);
        answer.classList.add("correct");
        console.log("Answer is Correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);
    } else {
        answer.classList.add("incorrect");
        console.log("Answer is Wrong");
        answer.insertAdjacentHTML("beforeend", crossIcon);

        //if answer is incorrect then automatically selected the correct answer
        for(let i=0; i < allOptions; i++){
            if(option_list3.children[i].textContent == correctAns){
                option_list3.children[i].setAttribute("class", "option correct");
                option_list3.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    }
    //once user selected disabled all options
    for(let i=0; i < allOptions; i++){
        option_list3.children[i].classList.add("disabled");
    }
    next_btn_3.style.display = "block";
}

//if user clicked on option for the fourth quiz
function optionSelected4(answer){
    clearInterval(counter4);
    clearInterval(counterLine4);
    let userAns = answer.textContent;
    let correctAns = questions4[que_count4].answer;
    const allOptions = option_list4.children.length;
    if(userAns == correctAns){
        userScore4 += 1;
        console.log(userScore4);
        answer.classList.add("correct");
        console.log("Answer is Correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);
    } else {
        answer.classList.add("incorrect");
        console.log("Answer is Wrong");
        answer.insertAdjacentHTML("beforeend", crossIcon);

        //if answer is incorrect then automatically selected the correct answer
        for(let i=0; i < allOptions; i++){
            if(option_list4.children[i].textContent == correctAns){
                option_list4.children[i].setAttribute("class", "option correct");
                option_list4.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    }
    //once user selected disabled all options
    for(let i=0; i < allOptions; i++){
        option_list4.children[i].classList.add("disabled");
    }
    next_btn_4.style.display = "block";
}

//if user clicked on option for the fifth quiz
function optionSelected5(answer){
    clearInterval(counter5);
    clearInterval(counterLine5);
    let userAns = answer.textContent;
    let correctAns = questions5[que_count5].answer;
    const allOptions = option_list5.children.length;
    if(userAns == correctAns){
        userScore5 += 1;
        console.log(userScore5);
        answer.classList.add("correct");
        console.log("Answer is Correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);
    } else {
        answer.classList.add("incorrect");
        console.log("Answer is Wrong");
        answer.insertAdjacentHTML("beforeend", crossIcon);

        //if answer is incorrect then automatically selected the correct answer
        for(let i=0; i < allOptions; i++){
            if(option_list5.children[i].textContent == correctAns){
                option_list5.children[i].setAttribute("class", "option correct");
                option_list5.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    }
    //once user selected disabled all options
    for(let i=0; i < allOptions; i++){
        option_list5.children[i].classList.add("disabled");
    }
    next_btn_5.style.display = "block";
}

//if user clicked on option for the sixth quiz
function optionSelected6(answer){
    clearInterval(counter6);
    clearInterval(counterLine6);
    let userAns = answer.textContent;
    let correctAns = questions6[que_count6].answer;
    const allOptions = option_list6.children.length;
    if(userAns == correctAns){
        userScore6 += 1;
        console.log(userScore6);
        answer.classList.add("correct");
        console.log("Answer is Correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);
    } else {
        answer.classList.add("incorrect");
        console.log("Answer is Wrong");
        answer.insertAdjacentHTML("beforeend", crossIcon);

        //if answer is incorrect then automatically selected the correct answer
        for(let i=0; i < allOptions; i++){
            if(option_list6.children[i].textContent == correctAns){
                option_list6.children[i].setAttribute("class", "option correct");
                option_list6.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    }
    //once user selected disabled all options
    for(let i=0; i < allOptions; i++){
        option_list6.children[i].classList.add("disabled");
    }
    next_btn_6.style.display = "block";
}

//show result box for the first quiz
function showResultBox(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score-text");
    if(userScore > 3){
        let scoreTag = '<span>and congrats! 🎉, You got <p> '+ userScore +'</p>out of <p> '+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore > 1){
        let scoreTag = '<span>and nice 😎, You got <p> '+ userScore +'</p>out of <p> '+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{
        let scoreTag = '<span>and sorry 😐, You got only <p> '+ userScore +'</p>out of <p> '+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

//show result box for the second quiz
function showResultBox2(){
    info_box_2.classList.remove("activeInfo2"); //hide info box
    quiz_box_2.classList.remove("activeQuiz2"); //hide quiz box
    result_box_2.classList.add("activeResult2"); //show result box
    const scoreText = result_box_2.querySelector(".score-text-2");
    if(userScore2 > 3){
        let scoreTag = '<span>and congrats! 🎉, You got <p> '+ userScore2 +'</p>out of <p> '+ questions2.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore2 > 1){
        let scoreTag = '<span>and nice 😎, You got <p> '+ userScore2 +'</p>out of <p> '+ questions2.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{
        let scoreTag = '<span>and sorry 😐, You got only <p> '+ userScore2 +'</p>out of <p> '+ questions2.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

//show result box for the third quiz
function showResultBox3(){
    info_box_3.classList.remove("activeInfo3"); //hide info box
    quiz_box_3.classList.remove("activeQuiz3"); //hide quiz box
    result_box_3.classList.add("activeResult3"); //show result box
    const scoreText = result_box_3.querySelector(".score-text-3");
    if(userScore3 > 3){
        let scoreTag = '<span>and congrats! 🎉, You got <p> '+ userScore3 +'</p>out of <p> '+ questions3.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore3 > 1){
        let scoreTag = '<span>and nice 😎, You got <p> '+ userScore3 +'</p>out of <p> ' + questions3.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{
        let scoreTag = '<span>and sorry 😐, You got only <p> '+ userScore3 +'</p>out of <p> '+ questions3.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

//show result box for the fourth quiz
function showResultBox4(){
    info_box_4.classList.remove("activeInfo4"); //hide info box
    quiz_box_4.classList.remove("activeQuiz4"); //hide quiz box
    result_box_4.classList.add("activeResult4"); //show result box
    const scoreText = result_box_4.querySelector(".score-text-4");
    if(userScore4 > 3){
        let scoreTag = '<span>and congrats! 🎉, You got <p> '+ userScore4 +'</p>out of <p> '+ questions4.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore4 > 1){
        let scoreTag = '<span>and nice 😎, You got <p> '+ userScore4 +'</p>out of <p> '+ questions4.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{
        let scoreTag = '<span>and sorry 😐, You got only <p> '+ userScore4 +'</p>out of <p> '+ questions4.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

//show result box for the fifth quiz
function showResultBox5(){
    info_box_5.classList.remove("activeInfo5"); //hide info box
    quiz_box_5.classList.remove("activeQuiz5"); //hide quiz box
    result_box_5.classList.add("activeResult5"); //show result box
    const scoreText = result_box_5.querySelector(".score-text-5");
    if(userScore5 > 3){
        let scoreTag = '<span>and congrats! 🎉, You got <p> '+ userScore5 +'</p>out of <p> '+ questions5.length +'</p></span>'
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore5 > 1){
        let scoreTag = '<span>and nice 😎, You got <p> '+ userScore5 +'</p>out of <p> '+ questions5.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{
        let scoreTag = '<span>and sorry 😐, You got only <p> '+ userScore5 +'</p>out of <p> '+ questions5.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

//show result box for the sixth quiz
function showResultBox6(){
    info_box_6.classList.remove("activeInfo6"); //hide info box
    quiz_box_6.classList.remove("activeQuiz6"); //hide quiz box
    result_box_6.classList.add("activeResult6"); //show result box
    const scoreText = result_box_6.querySelector(".score-text-6");
    if(userScore6 > 3){
        let scoreTag = '<span>and congrats! 🎉, You got <p> '+ userScore6 +'</p>out of <p> '+ questions6.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore6 > 1){
        let scoreTag = '<span>and nice 😎, You got <p> '+ userScore6 +'</p>out of <p> '+ questions6.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{
        let scoreTag = '<span>and sorry 😐, You got only <p> '+ userScore6 +'</p>out of <p> '+ questions6.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

//function start timer for the first quiz
function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeCount.textContent = "00";
            timeOff.textContent = "Time Off";
            let correctAns = questions[que_count].answer;
            const allOptions = option_list.children.length;
            for(let i=0; i < allOptions; i++){ //if selected option is correct then add class correct
                if(option_list.children[i].textContent == correctAns){
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
                }
            }
              // Show the next button when time runs out
            next_btn.style.display = "block";
            
        }
    }
}

//function start timer for the second quiz
function startTimer2(time){
    counter2 = setInterval(timer, 1000);
    function timer(){
        timeCount2.textContent = time;
        time--;
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount2.textContent;
            timeCount2.textContent = "0" + addZero;
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter2); //clear counter
            timeCount2.textContent = "00";
            timeOff2.textContent = "Time Off";
            let correctAns = questions2[que_count2].answer;
            const allOptions = option_list2.children.length;
            for(let i=0; i < allOptions; i++){
                if(option_list2.children[i].textContent == correctAns){
                    option_list2.children[i].setAttribute("class", "option correct");
                    option_list2.children[i].insertAdjacentHTML("beforeend", tickIcon);
                }
            }
              // Show the next button when time runs out
              next_btn_2.style.display = "block";
        }
    }
}

//function start timer for the third quiz
function startTimer3(time){
    counter3 = setInterval(timer, 1000);
    function timer(){
        timeCount3.textContent = time;
        time--;
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount3.textContent;
            timeCount3.textContent = "0" + addZero;
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter3); //clear counter
            timeCount3.textContent = "00";
            timeOff3.textContent = "Time Off";
            let correctAns = questions3[que_count3].answer;
            const allOptions = option_list3.children.length;
            for(let i=0; i < allOptions; i++){
                if(option_list3.children[i].textContent == correctAns){
                    option_list3.children[i].setAttribute("class", "option correct");
                    option_list3.children[i].insertAdjacentHTML("beforeend", tickIcon);
                }
            }  
            next_btn_3.style.display = "block"; // Show the next button when time runs out
        }
    }
}

//function start timer for the fourth quiz
function startTimer4(time){
    counter4 = setInterval(timer, 1000);
    function timer(){
        timeCount4.textContent = time;
        time--;
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount4.textContent;
            timeCount4.textContent = "0" + addZero;
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter4); //clear counter
            timeCount4.textContent = "00";
            timeOff4.textContent = "Time Off";
            let correctAns = questions4[que_count4].answer;
            const allOptions = option_list4.children.length;
            for(let i=0; i < allOptions; i++){
                if(option_list4.children[i].textContent == correctAns){
                    option_list4.children[i].setAttribute("class", "option correct");
                    option_list4.children[i].insertAdjacentHTML("beforeend", tickIcon);
                }
            }
            next_btn_4.style.display = "block"; // Show the next button when time runs out
        }
    }
}

//function start timer for the fifth quiz
function startTimer5(time){
    counter5 = setInterval(timer, 1000);
    function timer(){
        timeCount5.textContent = time;
        time--;
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount5.textContent;
            timeCount5.textContent = "0" + addZero;
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter5); //clear counter
            timeCount5.textContent = "00";
            timeOff5.textContent = "Time Off";
            let correctAns = questions5[que_count5].answer;
            const allOptions = option_list5.children.length;
            for(let i=0; i < allOptions; i++){
                if(option_list5.children[i].textContent == correctAns){
                    option_list5.children[i].setAttribute("class", "option correct");
                    option_list5.children[i].insertAdjacentHTML("beforeend", tickIcon);
                }
            }
            next_btn_5.style.display = "block"; // Show the next button when time runs out
        }
    }
}

//function start timer for the sixth quiz
function startTimer6(time){
    counter6 = setInterval(timer, 1000);
    function timer(){
        timeCount6.textContent = time;
        time--;
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount6.textContent;
            timeCount6.textContent = "0" + addZero;
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter6); //clear counter
            timeCount6.textContent = "00";
            timeOff6.textContent = "Time Off";
            let correctAns = questions6[que_count6].answer;
            const allOptions = option_list6.children.length;
            for(let i=0; i < allOptions; i++){
                if(option_list6.children[i].textContent == correctAns){
                    option_list6.children[i].setAttribute("class", "option correct");
                    option_list6.children[i].insertAdjacentHTML("beforeend", tickIcon);
                }
            }
            next_btn_6.style.display = "block"; // Show the next button when time runs out
        }
    }
}


//function start timer line for the first quiz
function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1;
        timeLine.style.width = time + "px";
        if(time > 549){
            clearInterval(counterLine);
        }
    }
}

//function start timer line for the second quiz
function startTimerLine2(time){
    counterLine2 = setInterval(timer, 29);
    function timer(){
        time += 1;
        timeLine2.style.width = time + "px";
        if(time > 549){
            clearInterval(counterLine2);
        }
    }
}

//function start timer line for the third quiz
function startTimerLine3(time){
    counterLine3 = setInterval(timer, 29);
    function timer(){
        time += 1;
        timeLine3.style.width = time + "px";
        if(time > 549){
            clearInterval(counterLine3);
        }
    }
}

//function start timer line for the fourth quiz
function startTimerLine4(time){
    counterLine4 = setInterval(timer, 29);
    function timer(){
        time += 1;
        timeLine4.style.width = time + "px";
        if(time > 549){
            clearInterval(counterLine4);
        }
    }
}

//function start timer line for the fifth quiz
function startTimerLine5(time){
    counterLine5 = setInterval(timer, 29);
    function timer(){
        time += 1;
        timeLine5.style.width = time + "px";
        if(time > 549){
            clearInterval(counterLine5);
        }
    }
}

//function start timer line for the sixth quiz
function startTimerLine6(time){
    counterLine6 = setInterval(timer, 29);
    function timer(){
        time += 1;
        timeLine6.style.width = time + "px";
        if(time > 549){
            clearInterval(counterLine6);
        }
    }
}

//function queCounter for the first quiz
function queCounter(index){
    const bottom_ques_counter = document.querySelector(".total-que");
    let totalQuesCountTag = '<span><p>'+ index +'</p>of<p>'+ questions.length +'</p>Questions</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}

//function queCounter for the second quiz
function queCounter2(index){
    const bottom_ques_counter = document.querySelector(".total-que-2");
    let totalQuesCountTag = '<span><p>'+ index +'</p>of<p>'+ questions2.length +'</p>Questions</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}

//function queCounter for the third quiz
function queCounter3(index){
    const bottom_ques_counter = document.querySelector(".total-que-3");
    let totalQuesCountTag = '<span><p>'+ index +'</p>of<p>'+ questions3.length +'</p>Questions</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}

//function queCounter for the fourth quiz
function queCounter4(index){
    const bottom_ques_counter = document.querySelector(".total-que-4");
    let totalQuesCountTag = '<span><p>'+ index +'</p>of<p>'+ questions4.length +'</p>Questions</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}

//function queCounter for the fifth quiz
function queCounter5(index){
    const bottom_ques_counter = document.querySelector(".total-que-5");
    let totalQuesCountTag = '<span><p>'+ index +'</p>of<p>'+ questions5.length +'</p>Questions</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}

//function queCounter for the sixth quiz
function queCounter6(index){
    const bottom_ques_counter = document.querySelector(".total-que-6");
    let totalQuesCountTag = '<span><p>'+ index +'</p>of<p>'+ questions6.length +'</p>Questions</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}