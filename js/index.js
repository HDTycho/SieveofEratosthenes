RunOnEnter();
let ArrayOfPrimeNumbers =[];
let ArrayOfAllTheNumbers =[];

function FindPrime() {
    document.getElementById("PrimeNumberOutput").innerHTML = "";
    ArrayOfPrimeNumbers=[];
    ArrayOfAllTheNumbers=[];
    let i;
    let j;
    let NumberOfMultiples = 0;
    let range = document.getElementById("myInput").value;
    for(let AllNumbers=1; AllNumbers<=range;++AllNumbers){
        ArrayOfAllTheNumbers.push(AllNumbers);
    }
    for (i = 2; i <= range; i++) {
        for (j = 2; j <= i; j++) {
            if (i % j === 0) {
                NumberOfMultiples++;
            }
        }
        if (NumberOfMultiples === 1)
            ArrayOfPrimeNumbers.push(i);
        NumberOfMultiples = 0;
    }
    printPrime();
}

function printPrime(){
    for(let i=0;i<ArrayOfAllTheNumbers.length;i++) {
        let numberid = i+1;
        let line ="";
        line +="<div id='"+numberid+"' class='EachPrimeNumberOutputID'>"+ArrayOfAllTheNumbers[i]+" </div>";
        document.getElementById("PrimeNumberOutput").innerHTML += line;
        MakePrimeNumbersGreen();
    }
}
function MakePrimeNumbersGreen() {
    for (let PrimeLength = 0; PrimeLength <  ArrayOfPrimeNumbers.length; PrimeLength++) {
        let primenos = $("#"+ArrayOfPrimeNumbers[PrimeLength]);
        primenos.attr('id', 'primeID');// the style attributes of an ID can over ride the attributes of a class
    }
}
function RunOnEnter() {
    let elem = document.getElementById("myInput");
    elem.onkeyup = function(e){
        if(e.keyCode == 13){
            FindPrime();
        }
    }
}