
let divma = document.createElement('div');
document.body.appendChild(divma);
document.body.style.backgroundColor='grey';
 divma.style.textAlign="center"



names=['magdy','ahmed','magdy','amin','abd-elhamed'];
age=['16','39','73','98','126'];
function profile22(names,age){
    let divm = document.createElement('div');
let h1m = document.createElement('h1');
let pm = document.createElement('p');
let con1 = document.createTextNode(names);
let con2 = document.createTextNode(age);
h1m.appendChild(con1);
pm.appendChild(con2);
divm.appendChild(h1m);
divm.appendChild(pm);
divma.appendChild(divm);
divm.style.width="220px"
divm.style.height="150px"
divm.style.backgroundColor='black';
divm.style.color='white';
divm.style.padding='10px';
divm.style.display='inline-block'
divm.style.margin='10px';
}
for (let m= 0; m <5; m++) {
    
    profile22(names[m],age[m]);
}
