let login= document.getElementById('btn-log');
let sign= document.getElementById('btn-sign');
let signup=document.getElementById('sign_up');
let loginin=document.getElementById('login');
let enimation=document.getElementById('enimation');
let login_form=document.getElementById('login_form');
let sign_form=document.getElementById('sign_form');

sign.onclick=()=>{
    enimation.classList.add("ani_sign");
    enimation.classList.remove("ani_login");
    signup.style.display='inline-block';
    setTimeout(() => {
        loginin.style.display='none';
    }, 500);
    sign_form.classList.add("appear");
    login_form.classList.remove("appear");
    login_form.classList.add("not_appear");
    sign_form.classList.remove("not_appear");
    login.classList.add("appbtn");
    login.classList.remove("not_appbtn");
    sign.classList.add("not_appbtn");
    sign.classList.add("not_sign");
}
login.onclick=()=>{
    enimation.classList.add("ani_login");
    enimation.classList.remove("ani_sign");
    loginin.style.display='inline-block';
    setTimeout(() => {
        signup.style.display='none';
    }, 500);
    login_form.classList.add("appear");
    sign_form.classList.remove("appear");
    sign_form.classList.add("not_appear");
    login_form.classList.remove("not_appear");
    login.classList.add("not_appbtn");
    sign.classList.remove("not_appbtn");
    sign.classList.add("appbtn");

}
let first=document.getElementById('name1');
let last=document.getElementById('name2');
let sign_email=document.getElementById('sign_email');
let sign_pass=document.getElementById('sign_pass');
let sign_repass=document.getElementById('sign_repass');
let sign_sub=document.getElementById('sign_sub');
let login_sub=document.getElementById('login_sub');
let login_email=document.getElementById('login_email');
let login_pass=document.getElementById('login_pass');
sign_sub.style.pointerEvents='none';
login_sub.style.pointerEvents='none';
sign_sub.style.borderColor='gray';
login_sub.style.borderColor='gray';
function saveinformation() {
    let information=[first.value,last.value,sign_email.value,sign_pass.value];
    localStorage.setItem('information',JSON.stringify(information));
    location.replace('file:///C:/Users/MG/Desktop/FRONT%20PROJECT/MARKET%20INSIDE%20PROJECT/market.html');
}
function access() {
    if (first.value!=''&& last.value!='' &&sign_email.value!=''&&sign_email.value.includes('@gmail.com')&&sign_pass.value!=''&&sign_pass.value==sign_repass.value) {
    sign_sub.style.pointerEvents='auto';sign_sub.style.borderColor='#4eb6fc';}else{sign_sub.style.pointerEvents='none';sign_sub.style.borderColor='gray';}
}
function accesslogin() {
    let info=JSON.parse(localStorage.information);
    if (login_email.value==info[2]&&login_pass.value==info[3]) {
        login_sub.style.pointerEvents='auto';login_sub.style.borderColor='#4eb6fc';}else{login_sub.style.pointerEvents='none';login_sub.style.borderColor='gray';}
}
function loginpage() {location.replace('file:///C:/Users/MG/Desktop/FRONT%20PROJECT/MARKET%20INSIDE%20PROJECT/market.html');}