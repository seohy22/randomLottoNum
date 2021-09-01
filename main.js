const $result = document.querySelector('#result');
const inputForm = document.querySelector('#inputForm');
const inputNums = document.querySelector('#inputNums');
const reBtn = document.querySelector('#restart');

let shuffle=[];
let winBalls;

const random = () => {
    const candidate = Array(45).fill().map((v,i) => i + 1 );
    while (candidate.length > 0 ) {
        let randomNum = Math.floor(Math.random() * candidate.length);
        spliceArr = candidate.splice(randomNum, 1);
        const value = spliceArr[0] ;
        shuffle.push(value);
    }
    // console.log(shuffle);
    winBalls = shuffle.slice(0,6).sort((a,b) => a - b);
    shuffle=[];
    // console.log(winBalls);
}

function colorize(number,$target) {
    if(number<=10){
        $target.style.backgroundColor = '#fdec29';
    }else if(number<=20){
        $target.style.backgroundColor = '#5acaff';
    }else if(number<=30){
        $target.style.backgroundColor = '#ff6262';
    }else if(number<=40){
        $target.style.backgroundColor = '#464646';
    }else{
        $target.style.backgroundColor = '#50bb50';
    }
}

const showBall = (number,$parent) => {
    const dl = document.createElement('dl');
    for(let i=0; i<6; i++){
        const $ball = document.createElement('div');
        $ball.className = 'ball';
        dl.className ='row';
        colorize(number[i],$ball);
        $ball.textContent = number[i];
        dl.appendChild($ball);
    }
    $parent.appendChild(dl);
};

let checkNum = inputValue => {
    if(inputValue.length <1){
        return alert("숫자를 입력해주세요");
    }
    if(inputValue == "0"){
        return alert("0은 입력할 수 없습니다");
    }
    if(!Number(inputValue) || inputValue.includes(' ') || inputValue.includes('.')){
        return alert("숫자만 입력해주세요");
    }
    if(inputValue>5){
        return alert("5개까지만 가능합니다.");
    }
    return true;
}

inputForm.addEventListener('submit',(event) => { 
    const inputFrom = document.querySelector('#inputForm');
    const explain = document.querySelector('.explain');
    event.preventDefault();
    let inputValue = inputNums.value;   
    if(!checkNum(inputValue)){
        return;
    }
    for(let i=0; i<inputValue;i++){
        random();
        showBall(winBalls,$result);
    }

    inputFrom.remove();
    explain.innerHTML="번호 생성 완료!";
    reBtn.style.display = 'inline';
});

reBtn.addEventListener('click',() => {
    location.reload(true);
});



// const showBall = (number,$parent) => {
//     const $ball = document.createElement('div');
//     $ball.className = 'ball';
//     colorize(number,$ball);
//     $ball.textContent = number;
//     $parent.appendChild($ball);
// };

// for(let i =0;i<6;i++) {
//     showBall(winBalls[i],$result);
// }