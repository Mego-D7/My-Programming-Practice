let clickes= document.getElementById('f33');
let clicker= document.getElementById('f5');
let ccc= document.getElementById('gggg');
let sss= document.getElementById('sss');
let rrr= document.getElementById('rrr');
let aaa= document.getElementById('aaa');
let contain=document.getElementById('f41');
let first =document.getElementsByClassName('first');
let write=document.getElementById('writes');
let finish1=document.getElementById('finish1');
let finish2=document.getElementById('finish2');
let finish3=document.getElementById('finish3');
let firstgg=document.getElementById('firstgg');


clickes.onclick=function () {
    clicker.style.display="block"
    contain.style.border='none'
    clickes.style.backgroundColor='rgb(199, 235, 247)'
}

// ccc.ondrag=function () {
//     clicker.style.display="none"
// }
firstgg.ondblclick=function () {
    clicker.style.display="none"
    contain.style.border='1px dotted'
    clickes.style.backgroundColor="rgb(204, 198, 198)"}

sss.onclick=function () {
    sss.style.backgroundColor='rgb(29, 118, 235)'
    rrr.style.backgroundColor='rgb(204, 198, 198)'
    aaa.style.backgroundColor='rgb(204, 198, 198)'
    sss.style.color='white'
    rrr.style.color='black'
    aaa.style.color='black'
    contain.innerHTML='<p>Sleep</p>'
    clicker.style.display="none"
    sss.style.outlineStyle='none'
    sss.style.outlineOffset='none'
    sss.style.outlineWidth='none'
    sss.style.outlineColor='none'
    contain.style.border='1px dotted'
    clickes.style.backgroundColor="rgb(204, 198, 198)"
    write.innerHTML='<p>The PC stays on but uses low power.Apps stay open so when the PC</P><P>wakes up,you are instantly back to where you left off.</p>'

        
    
    document.body.style.backgroundColor='#8080ff';}
    

 rrr.onclick=function () {
    rrr.style.backgroundColor='rgb(29, 118, 235)'
    aaa.style.backgroundColor='rgb(204, 198, 198)'
    sss.style.backgroundColor='rgb(204, 198, 198)'
    rrr.style.color='white'
    sss.style.color='black'
    aaa.style.color='black'
    contain.innerHTML='<p>Restart</p>'
    clicker.style.display="none"
    rrr.style.outlineStyle='none'
    rrr.style.outlineOffset='none'
    rrr.style.outlineWidth='none'
    rrr.style.outlineColor='none'
    contain.style.border='1px dotted'
    clickes.style.backgroundColor="rgb(204, 198, 198)"
    write.innerHTML='<p>Closes all apps,turns off the <span>PC</span>,and then turns it on again.</p>'
    document.body.style.backgroundColor='rgb(42, 121, 238)'
}

aaa.onclick=function () {
    aaa.style.backgroundColor='rgb(29, 118, 235)'
    rrr.style.backgroundColor='rgb(204, 198, 198)'
    sss.style.backgroundColor='rgb(204, 198, 198)'
    aaa.style.color='white'
    sss.style.color='black'
    rrr.style.color='black'
    contain.innerHTML='<p>Shut down</p>'
    clicker.style.display="none"
    aaa.style.outlineStyle='none'
    aaa.style.outlineOffset='none'
    aaa.style.outlineWidth='none'
    aaa.style.outlineColor='none'
    contain.style.border='1px dotted'
    clickes.style.backgroundColor="rgb(204, 198, 198)"
    write.innerHTML='<p>Closes all apps and turns off the <span>PC</span>. </p>'
    document.body.style.backgroundColor='black'
}



sss.onmouseenter=function () {
    sss.style.backgroundColor='rgb(29, 118, 235)'
    rrr.style.backgroundColor='rgb(204, 198, 198)'
    aaa.style.backgroundColor='rgb(204, 198, 198)'
    sss.style.color='white'
    rrr.style.color='black'
    aaa.style.color='black'
    sss.style.outlineStyle='dotted'
    sss.style.outlineOffset='-1px'
    sss.style.outlineWidth='1px'
    sss.style.outlineColor='rgb(218, 94, 36)' 
    aaa.style.outlineStyle='none'
    aaa.style.outlineOffset='none'
    aaa.style.outlineWidth='none'
    aaa.style.outlineColor='none' 
    rrr.style.outlineStyle='none'
    rrr.style.outlineOffset='none'
    rrr.style.outlineWidth='none'
    rrr.style.outlineColor='none'  
}
 rrr.onmouseenter=function () {
    rrr.style.backgroundColor='rgb(29, 118, 235)'
    aaa.style.backgroundColor='rgb(204, 198, 198)'
    sss.style.backgroundColor='rgb(204, 198, 198)'
    rrr.style.color='white'
    sss.style.color='black'
    aaa.style.color='black'
    rrr.style.outlineStyle='dotted'
    rrr.style.outlineOffset='-1px'
    rrr.style.outlineWidth='1px'
    rrr.style.outlineColor='rgb(218, 94, 36)'
    sss.style.outlineStyle='none'
    sss.style.outlineOffset='none'
    sss.style.outlineWidth='none'
    sss.style.outlineColor='none'
    aaa.style.outlineStyle='none'
    aaa.style.outlineOffset='none'
    aaa.style.outlineWidth='none'
    aaa.style.outlineColor='none'  
}

aaa.onmouseenter=function () {
    aaa.style.backgroundColor='rgb(29, 118, 235)'
    rrr.style.backgroundColor='rgb(204, 198, 198)'
    sss.style.backgroundColor='rgb(204, 198, 198)'
    aaa.style.color='white'
    sss.style.color='black'
    rrr.style.color='black'
    aaa.style.outlineStyle='dotted'
    aaa.style.outlineOffset='-1px'
    aaa.style.outlineWidth='1px'
    aaa.style.outlineColor='rgb(218, 94, 36)' 
    sss.style.outlineStyle='none'
    sss.style.outlineOffset='none'
    sss.style.outlineWidth='none'
    sss.style.outlineColor='none'
    rrr.style.outlineStyle='none'
    rrr.style.outlineOffset='none'
    rrr.style.outlineWidth='none'
    rrr.style.outlineColor='none' 
      
}

finish1 .onclick=function () {
    finish1.style.outlineStyle=" solid"
    finish1.style.outlineWidth='2px'
    finish1.style.outlineOffset='-2px'
    finish1.style.outlinecolor='rgb(29, 118, 235)'
// finish1.style.border='1px solid rgb(29, 118, 235)'
finish2.style.outlineWidth='0px'
finish2.style.border='1px solid rgb(177, 177, 173)'
finish3.style.outlineWidth='0px'
finish3.style.border='1px solid rgb(177, 177, 173)'

firstgg.style.display='none'
document.body.style.backgroundImage='none'
setTimeout(() => {
    location.reload();
}, 7000);

}
finish2 .onclick=function () {
    finish2.style.outlineStyle=" solid"
    finish2.style.outlineWidth='2px'
    finish2.style.outlineOffset='-2px'
    finish2.style.outlineColor='rgb(29, 118, 235)'
// finish2.style.border='1px solid rgb(29, 118, 235)'
finish1.style.outlineWidth='0px'
finish1.style.border='1px solid rgb(177, 177, 173)'
finish3.style.outlineWidth='0px'
finish3.style.border='1px solid rgb(177, 177, 173)'
firstgg.style.display='none'
setTimeout(() => {
    location.reload();
}, 5000);
}
finish3 .onclick=function () {
    finish3.style.outlineStyle=" solid"
    finish3.style.outlineWidth='2px'
    finish3.style.outlineOffset='-2px'
    finish3.style.outlineColor='rgb(29, 118, 235)'
// finish3.style.border='1px solid rgb(29, 118, 235)'
finish2.style.outlineWidth='0px'
finish2.style.border='1px solid rgb(177, 177, 173)'
finish1.style.outlineWidth='0px'
finish1.style.border='1px solid rgb(177, 177, 173)'


firstgg.style.display='none'

}











finish2.onmouseenter=function(){
    finish2.style.border='1px solid rgb(29, 118, 235)'

}
finish2.onmouseleave=function(){
    finish2.style.border='1px solid rgb(177, 177, 173)'
  
}

finish3.onmouseenter=function(){
    finish3.style.border='1px solid rgb(29, 118, 235)'
}
finish3.onmouseleave=function(){
    finish3.style.border='1px solid rgb(177, 177, 173)'
}
finish1.onmouseenter=function(){
    finish1.style.border='1px solid rgb(29, 118, 235)'
}
finish1.onmouseleave=function(){
    finish1.style.border='1px solid rgb(177, 177, 173)'
}

let codes=document.getElementById('codes');
let code=document.getElementById('code');
let codeso=document.getElementById('codeo');
let codesd=document.getElementById('coded');
let vv='win+alt+f4';
codeso.onclick=function () {
    firstgg.style.display='block'
    codes.style.display='none'
    document.body.ondblclick=function () {
        codes.style.display='none'
    }
}
code.onkeyup=mm;

function mm() {
if(code.value.toLowerCase().trim()==vv)
{codeso.style.display='block'
codesd.style.width='49%'}
else{codeso.style.display='none';
codesd.style.width='98%';}}


codesd.onclick=function () {
    code.value=''
}
code.onclick=function () {
    code.style.backgroundColor='white';
    codeso.style.backgroundColor='white';
    codesd.style.backgroundColor='white';
}
document.body.ondblclick=function () {
    codes.style.display='block'
}

