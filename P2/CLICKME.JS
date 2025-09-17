let clicks= document.getElementById('clicker');
let AAA= document.getElementById('DDD');
clicks.style.width='115px';
clicks.style.height='45px';
AAA.style.textAlign='center';
let dm=document.createElement('div')
document.body.appendChild(dm)
dm.style.textAlign='center';

function clickk(){ 

    let divm= document.createElement('div');
    let h1m= document.createElement('h1');
    let contain= document.createTextNode('ERROR');
    h1m.appendChild(contain);
    divm.appendChild(h1m);
dm.appendChild(divm);
divm.style.backgroundColor='#660033';
divm.style.color='red';
divm.style.height='115px';
divm.style.width='200px';
h1m.style.padding='18px';
divm.style.margin='10px';
divm.style.display='inline-block';
}

// clicks.onclick=clickk;  

clicks.addEventListener('click',function() {
    clicks.style.color='#002b80';
    clicks.style.fontSize='1.2em';
    clicks.style.backgroundColor='#990000';
    document.body.style.backgroundColor='#06db06';
    clicks.style.transform='scale(1.2)';
});

clicks.addEventListener('click',function() {
clickk();
});
