const base = document.getElementById('base');
const height =  document.getElementById('height');
const button = document.getElementById('calculate');
const result = document.getElementById('result');


const triangleArea = (base, height) => {
    var a = (base * height) / 2;
    
    return result.innerHTML= `<h2 class="in">${a}</h2>`;
};


function calculate() {
   var a =  base.value;
   var b = height.value;

    triangleArea(a , b);
}

