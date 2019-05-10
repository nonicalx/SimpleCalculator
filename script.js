let getHistory = () => {
    return document.querySelector('#history-value').innerHTML;
}

const printHistory = num => document.querySelector('#history-value').innerHTML = num;

const printOutput = num => {
    if (num == "") {
        document.querySelector('#outputValue').innerHTML=num;
    }else{
        document.querySelector('#outputValue').innerHTML= getFormattedNumber(num);
    }
}

const getOutput = ()=> {return document.querySelector('#outputValue').innerHTML;}

const getFormattedNumber = (num) => {
    if(num == '-'){
        return '';
    }
    let n = Number(num);
    let value = n.toLocaleString('en');
    return value;
}

reverseNumberFormat=(num)=>{
    return Number(num.replace(/,/g,''));
}

let operator = document.querySelectorAll('.operator');
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click',function(){
        if (this.id=='clear') {
            printHistory('');
            printOutput('');
        }
        else if(this.id=="backspace"){
            let output = reverseNumberFormat(getOutput()).toString();
            if (output) {
                output = output.substr(0,output.length-1);
                printOutput(output);
            } 
        }
        else{
            let output = getOutput();
            let history = getHistory();
            if (output==''&&history!="") {
                if (isNaN(history[history.length-1])) {
                    history = history.substr(0,history.length-1);
    
                } 
            }
            
            if(output != ''|| history != ''){
                output = output == ''?output : reverseNumberFormat(output);
                history = history + output;
                if(this.id=='='){
                    var result = eval(history);
                    printOutput(result);
                    printHistory('');
                }
                else{
                    history = history + this.id;
                    printHistory(history);
                    printOutput('');
                }
            }
        }
    });
}

let number = document.querySelectorAll('.number');
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click',function(){
    let output = reverseNumberFormat(getOutput());
    if (output != NaN) {
        output += this.id;
        printOutput(output);
    }
});
}