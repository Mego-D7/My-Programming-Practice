function errordata() {
    let error=[];
    let dataerror=['popularshaw','popular','saved','info']
    for (let i = 0; i < dataerror.length; i++) {
    localStorage.setItem(dataerror[i],JSON.stringify(error));
    } 
}

window.onload=()=>{
    act('home');
    on('com1');
    onp('com1p');
    lastcheck();
    info_unappear();
    closeview();
    showsaved();
    saveinner();
    nameofuser();
    hmenu.style.display='none';
}
window.onbeforeunload=()=>{scroll(0,0);}

let databuypage=document.getElementById('databuypage');
let search=document.getElementById('search');
let savedpage=document.getElementById('savedinfopage');
let popularinfopage=document.getElementById('popularinfopage');
let lister=document.getElementById('lister');
let hmenu=document.getElementById('hmenu');
let asides=document.getElementById('asides');
let headerapp=document.getElementById('header');
let infosell=document.getElementById('infosell');
let header=document.getElementById('header');
let add=document.getElementById('add');
let icochange=document.getElementById('infoimg');
let newimg=document.getElementById('newimgload');
let selectinfo1=document.getElementById('selectinfo1');
let selectinfo2=document.getElementById('selectinfo2');
let model=document.getElementById('model');
let price=document.getElementById('price');
let specifications=document.getElementById('specifications');
let numberphone=document.getElementById('numberphone');
let showdata=document.getElementById('showdata');
let views=document.getElementById('views');
let btn_mode=document.getElementById('saveinfo');
let btnup=document.getElementById('btnup');
let btndell=document.getElementById('btndell');
let viewinformation=document.getElementById('viewinformation');
let viewdata=document.getElementById('viewdata');
let savedinfopage=document.getElementById('savedinfopage');
let modeinfo='';
let upind;
let modesavedpage;
let m=0;
let view=0;
let modepageview;
let allviews;
let saveinfo;
let savedbtn;
let checkup=['maincheck1_1','maincheck1_2','maincheck2_1','maincheck2_2','maincheck3_1','maincheck3_2','maincheck3_3'];
let aside=['All','Case','Motherboard','Processor','Graphics','Ram','Hard','DVD','Fan','monitor','Keyboard','Mouse','Table','Chair','Other'];

function nameofuser() {
    let nameuser=document.getElementById('nameuser');
    let informationname=JSON.parse(localStorage.information);
    let name=informationname[0]+' '+informationname[1];
    let limit_name=name.substring(0,13); 
    nameuser.innerHTML=limit_name;
}
function logoutpage() {location.replace('file:///C:/Users/MG/Desktop/FRONT%20PROJECT/MARKET%20PROJECT/MARKET.html');}


if(localStorage.popular!=null){
    allviews=JSON.parse(localStorage.popular);
}else{allviews=[];}

if(localStorage.popularshaw!=null){
    popularsort=JSON.parse(localStorage.popularshaw);
}else{popularsort=[];}

if (localStorage.info!=null) {
    saveinfo=JSON.parse(localStorage.info);
}else{saveinfo=[];}

if (localStorage.saved!=null) {
    savedlocal=JSON.parse(localStorage.saved);
    }else{savedlocal=[];}

if (localStorage.btnsaved!=null){
    savedbtn=JSON.parse(localStorage.btnsaved);
}else{savedbtn=[];}
// ----------------------------------------------------------------------------------------------------------------------------
function act(x) {
let head=['home','buy','sell','saved','popular','setting'];
for (let i = 0; i < head.length; i++) {
     let active=document.getElementById(head[i]);  
     active.classList.remove('active');  
}

let cl=document.getElementById(x);
cl.classList.add('active');
if(x=='home'||x=='setting'||x=='sell'){
        let lister=document.getElementById('lister');
        lister.style.display='none';
        asides.style.display='none';
}else{lister.style.display='inline-block';
        asides.style.display='flex';
        filterapp();
}

let sellcont=document.getElementById('sellcont');
if (x=='sell') {sellcont.style.display='inline-block';}
else{sellcont.style.display='none'}

let homemain=document.getElementById('homemain');
let footeer=document.getElementById('fotter');
if(x=='home'){homemain.style.display='inline-block';footeer.style.display='inline-block';
        search.value='';
        searchdata('');
        modepageview='nobuy';
}else{homemain.style.display='none';footeer.style.display='none'};

let settings=document.getElementById('appsett');
if(x=='setting'){
    settings.style.display='inline-block';
    search.value='';
    searchdata('');
    modepageview='nobuy';
}else{settings.style.display='none';}

let cheknon=JSON.parse(localStorage.checksetting); 
let buypage=document.getElementById('buypage');
if (x=='buy') {
        buypage.style.display='inline-block';
        closeview();
        modesavedpage='buymode';
        if(cheknon[1]==false){changepage()};
        search.value='';
        searchdata('');
        modepageview='buy';
}else{buypage.style.display='none';}

let savedpage=document.getElementById('savedpage');
if (x=='saved') {savedpage.style.display='inline-block';
        closeview();
        if(cheknon[1]==false){changepage()};
        search.value='';
        searchdata('');
        modepageview='nobuy';
}else{savedpage.style.display='none';}

let popularpage=document.getElementById('popularpage');
if (x=='popular') {popularpage.style.display='inline-block';
        closeview();
        modesavedpage='popmode';
        if(cheknon[1]==false){changepage()};
        search.value='';
        searchdata('');
        modepageview='nobuy';
}else{popularpage.style.display='none';}
}

function myFunction(){
    'use strict'
    m++
    let barmenu=['barmenu1','barmenu2','barmenu3'];
    for (let bar = 0; bar < barmenu.length; bar++) {
        let bmen=document.getElementById(barmenu[bar]);
        bmen.style.transition='0.7s';
    }
    lister.classList.toggle("change");
    if(m==1){
        hmenu.classList.add('animenu');
        asides.classList.add('aniwid');
        lister.style.pointerEvents='none';
        hmenu.style.display='inline-block'
        asides.style.cssText='background-image:linear-gradient(130deg,rgb(252, 123, 123),rgb(164, 149, 252),rgb(140, 154, 185));'
        setTimeout(() => {
            hmenu.style.opacity='100%' ;
            asides.style.width='15%';
            asides.style.height='737px';
            asides.style.opacity='100%';
        }, 1300);
        setTimeout(() => {
            lister.style.pointerEvents='auto';
        }, 850);

        hmenu.classList.remove('ranimenu');
        asides.classList.remove('raniwid');
        databuypage.style.marginLeft='15%';
        savedpage.style.marginLeft='15%';
        popularinfopage.style.marginLeft='15%';
        if (modesavedpage=='buymode') {SAVEPAGEINFO();}else{SAVEDPOP();}
    }
    if (m==2) {
        hmenu.classList.add('ranimenu');
        asides.classList.add('raniwid');
        lister.style.pointerEvents='none';
        setTimeout(() => {
            hmenu.style.opacity='0%' ;
            hmenu.style.display='none';
            asides.style.width='45px';
            asides.style.height='40px';
        }, 1000);
        setTimeout(() => {
            lister.style.pointerEvents='auto';
        }, 850);
        setTimeout(() => {asides.style.background='white'}, 700);
        hmenu.classList.remove('animenu');
        asides.classList.remove('aniwid');
        databuypage.style.marginLeft='0%';
        savedpage.style.marginLeft='0%';
        popularinfopage.style.marginLeft='0%';
        for (let i = 0; i < aside.length; i++) {
         let focus=document.getElementById(aside[i]);  
         focus.classList.remove('focus');  
        }
        let apptype='';
        for (let c = 0; c < saveinfo.length; c++) {
                apptype+=`
                <div id="fram" class="fram" style="height:310px;overflow: hidden;margin-bottom: 90px;" onmouseenter="this.style.height='400px';this.style.marginBottom='0px';" onmouseleave="this.style.height='310px';this.style.marginBottom='90px';">
                <img src="${saveinfo[c].img}">
                <p>views: <b>${saveinfo[c].views}</b></p>
                <p>type: <b>${saveinfo[c].selectinfo1} ${saveinfo[c].selectinfo2}</b></p>
                <p>model: <b>${saveinfo[c].model.toUpperCase().trim()}</b></p>
                <p>price: <b>${saveinfo[c].price}$</b></p>
                <button id="views" onclick="VIEW(${c}),veiwsproduct(${c})">VIEW</button>
                <button class="pagesaves" id="tester${c}" onclick="SAVEPAGELOCAL(${c},this);SAVEPAGEINFO();showsaved();">SAVE</button>
                <button></button> 
                </div>
                    `;}
        databuypage.innerHTML=apptype;
        saveinner();
        popularshawinfo();
        m=0;
        if (modesavedpage=='buymode') {SAVEPAGEINFO()}else{SAVEDPOP();}
    }
}

function changepage() {
    let barmenu=['barmenu1','barmenu2','barmenu3'];
    for (let bar = 0; bar < barmenu.length; bar++) {
        let bmen=document.getElementById(barmenu[bar]);
        bmen.style.transition='0s';
    }
    asides.style.position='absolute';
    hmenu.style.position='absolute';
    hmenu.style.opacity='0%' ;
    hmenu.style.display='none';
    asides.style.width='45px';
    asides.style.height='40px';
    lister.style.pointerEvents='auto';
    hmenu.classList.remove('animenu');
    asides.classList.remove('aniwid');
    databuypage.style.marginLeft='0%';
    savedpage.style.marginLeft='0%';
    popularinfopage.style.marginLeft='0%';
    for (let i = 0; i < aside.length; i++) {
     let focus=document.getElementById(aside[i]);  
     focus.classList.remove('focus');  
    }
    lister.classList.remove("change");
    asides.style.width='45px';
    asides.style.height='40px';
    asides.style.background='transparent';
    let apptype='';
    for (let c = 0; c < saveinfo.length; c++) {
    apptype+=`
    <div id="fram" class="fram" style="height:310px;overflow: hidden;margin-bottom: 90px;" onmouseenter="this.style.height='400px';this.style.marginBottom='0px';" onmouseleave="this.style.height='310px';this.style.marginBottom='90px';">
    <img src="${saveinfo[c].img}">
    <p>views: <b>${saveinfo[c].views}</b></p>
    <p>type: <b>${saveinfo[c].selectinfo1} ${saveinfo[c].selectinfo2}</b></p>
    <p>model: <b>${saveinfo[c].model.toUpperCase().trim()}</b></p>
    <p>price: <b>${saveinfo[c].price}$</b></p>
    <button id="views" onclick="VIEW(${c}),veiwsproduct(${c})">VIEW</button>
    <button class="pagesaves" id="tester${c}" onclick="SAVEPAGELOCAL(${c},this);SAVEPAGEINFO();showsaved();">SAVE</button>
    <button></button> 
    </div>
    `;}
    databuypage.innerHTML=apptype;
    SAVEPAGEINFO();
    saveinner();
    popularshawinfo();
    m=0;
}

const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) =>
    item.classList.remove('up'));
    this.classList.add('up');
}
list.forEach((item) =>
item.addEventListener('mouseenter',activeLink));

function filterapp() {
    let check=JSON.parse(localStorage.checksetting);
    let lister=document.getElementById('lister');
    if (check[0]==true&&check[1]==false) {
        lister.style.display='inline-block';
        asides.style.display='flex';
    }else if (check[0]==false&&check[1]==true) {
        lister.style.display='none';
        asides.style.display='none';
    }
}
// -------------------------------------------------------------------------------------------------------------------------------
function on(q) {
    let com=['com1','com2','com3'];
    for (let i = 0; i < com.length; i++) {
     let comon=document.getElementById(com[i]);  
     comon.classList.remove('upcom');  
    }
    let comonm=document.getElementById(q);
    comonm.classList.add('upcom');
    let m1=document.getElementById('com1m');
    let m2=document.getElementById('com2m');
    let m3=document.getElementById('com3m');
    if(q=='com1'){setTimeout(() => {m1.src='fd.png';m2.src='wl.png';m3.src='tl.png'},200); }
    else if(q=='com2'){setTimeout(() => {m1.src='fl.png';m2.src='wd.png';m3.src='tl.png'},200); }
    else if(q=='com3'){setTimeout(() => {m1.src='fl.png';m2.src='wl.png';m3.src='td.png'},200); };
}

function onp(w) {
    let comp=['com1p','com2p','com3p'];
    for (let i = 0; i < comp.length; i++) {
     let comonmp=document.getElementById(comp[i]);  
     comonmp.classList.remove('upcomp');  
    }
    let comonp=document.getElementById(w);
    comonp.classList.add('upcomp');
}

function editimg(edit) {
    let edits=document.getElementById(edit);
    let btnsave=document.getElementById('btnsave');
    let formsetting=document.getElementById('formsetting');
    edits.focus();
    edits.select();
    edits.style.pointerEvents='auto';
    if (edit=='info4') {
        edits.type='text';
        edits.select();
    }
    (edits.onmouseenter);(edits.onkeyup)=()=>{edits.style.pointerEvents='auto';}
    edits.onkeydown=()=>{btnsave.style.display='inline-block';
        formsetting.style.height='480px';
    }

    edits.onmouseleave=()=>{
        edits.style.pointerEvents='none';
        if (edit=='info4') {
            edits.type='password';
        }
    }

}
function resetcheck() {
    checkmain=['maincheck1_1','maincheck2_1','maincheck3_2'];
    for (let i = 0; i < checkmain.length; i++) {
     document.getElementById(checkmain[i]).checked=true;
    }
    let btnsave=document.getElementById('btnsave');
    btnsave.style.display='none';
    formsetting.style.height='440px';
}

let upcheck=0;
function checksave() {
    let btnsave=document.getElementById('btnsave');
    let checkset=JSON.parse(localStorage.checksetting);
    let test=[];
    for (let s = 0; s < checkup.length; s++) { test.push(document.getElementById(checkup[s]).checked);
    if(test[s]==checkset[s]){upcheck++;}}
    if(upcheck==7){btnsave.style.display='none';formsetting.style.height='440px';}
    else{btnsave.style.display='inline-block';formsetting.style.height='480px';}
    upcheck=0;
}
checksave();

function signinfo() {
    infopage=['info1','info2','info3','info4'];
    infosign=JSON.parse(localStorage.information);
    for (let i = 0; i < infopage.length; i++) {
       let sign=infosign[i]
       let page=document.getElementById(infopage[i]);
        page.value=sign;
        page.style.fontSize='17px';
    }
}
signinfo();

function update() {
checkset=[];
for (let c = 0; c < checkup.length; c++) {
    checkset.push(document.getElementById(checkup[c]).checked) ;
}
localStorage.setItem('checksetting',JSON.stringify(checkset));
infopageup=['info1','info2','info3','info4'];
let newinformation=[];
for (let  infoput= 0; infoput < infopageup.length; infoput++) {
    let infoup=document.getElementById(infopageup[infoput]);
    newinformation.push(infoup.value);
}
localStorage.setItem('information',JSON.stringify(newinformation));
}
function lastcheck() {
    let lastch=JSON.parse(localStorage.checksetting);
    for (let i = 0; i < checkup.length; i++) {
        document.getElementById(checkup[i]).checked=lastch[i];
    }   
    let btnsave=document.getElementById('btnsave');
    btnsave.style.display='none';
    formsetting.style.height='440px';
}

// ----------------------------------------------------------------------------------------------------------------------------
function closeview() {
    viewdata.style.display='none';
    showdata.style.pointerEvents='auto';
    header.style.pointerEvents='auto';
    add.style.pointerEvents='auto';
    databuypage.style.pointerEvents='auto';
    savedinfopage.style.pointerEvents='auto';
    search.style.display='inline-block';
    asides.style.pointerEvents='auto';
    lister.style.pointerEvents='auto';
}

function donottouch(){
    showdata.style.pointerEvents='none';
    header.style.pointerEvents='none';
    add.style.pointerEvents='none';
    databuypage.style.pointerEvents='none';
    search.style.display='none';
    asides.style.pointerEvents='none';
    lister.style.pointerEvents='none';
    savedinfopage.style.pointerEvents='none';
}

function selectleftmenu() {
    if (selectinfo1.value=='computer') {
        selectinfo2.style.cssText='pointer-events: auto;border-color:rgb(8, 49, 73);background-color:transparent;color:#282f42;'
        selectinfo2.value='all';
        selectinfo2.onmouseenter=()=>{selectinfo2.style.cssText='background-color: #95b7ce;'}
        selectinfo2.onmouseleave=()=>{selectinfo2.style.cssText='background-color: transparent;'}
    } else {
        selectinfo2.style.cssText='border-color:rgb(50, 66, 83);background-color:#81919c;pointer-events: none;color:#535a6e;';
        selectinfo2.value=null;
    }
}

function VIEW(indview) {
    viewdata.style.display='inline-block';
    donottouch();
    let infoview='';
    infoview=`
        <img id="imgview" src="${saveinfo[indview].img}">
        <div class="viewinfo">
        <p>type: <b>${saveinfo[indview].selectinfo1} ${saveinfo[indview].selectinfo2}</b></p>
        <p>model: <b>${saveinfo[indview].model}</b></p>
        <p>price: <b>${saveinfo[indview].price}$</b></p>
        <h4>Specifications</h4>
        <textarea rows="8px" cols="42.5%">${saveinfo[indview].specifications.trim()}</textarea>
        <h4>the commonication information</h4>
            <div id="infocom">
        <ul>
            <div onmouseenter="imgenter('viewcom1')" onmouseleave="imgleve()" style="margin-left: 10px;"><a href="https://wa.me/+${saveinfo[indview].numberphone}" target="_blank"><li><img id="viewcom1" src="wl.png"><br><b>WhatsApp</b></li></div>
            <div onmouseenter="imgenter('viewcom2')" onmouseleave="imgleve()"><a href="https://t.me/+${saveinfo[indview].numberphone}" target="_blank"><li><img id="viewcom2" src="tl.png"><br><b>Telegram</b></li></div>
            <div onmouseenter="imgenter('viewcom3')" onmouseleave="imgleve()"><a href="tel:+${saveinfo[indview].numberphone}" target="_blank"><li><img id="viewcom3" src="cl.png"><br><b>Phone call</b></li></div>
        </ul>
    </div>
        `
    
        viewinformation.innerHTML=infoview;
        popularnewinfo();
        popularshawinfo();
    }

    function imgenter(chimg) {
        let imgs=['viewcom1','viewcom2','viewcom3'];
        let srcimg=['wl.png','tl.png','cl.png'];
        for (let i = 0; i < imgs.length; i++) {
            let notimg=document.getElementById(imgs[i]);
            notimg.src=srcimg[i];
        }
        let notimg=document.getElementById(chimg);
        if (chimg=='viewcom1') {notimg.src='wd.png'};
        if (chimg=='viewcom2') {notimg.src='td.png'};
        if (chimg=='viewcom3') {notimg.src='cd.png'};
    }
    function imgleve() {
        let imgs=['viewcom1','viewcom2','viewcom3'];
        let srcimg=['wl.png','tl.png','cl.png'];
        for (let i = 0; i < imgs.length; i++) {
            let notimg=document.getElementById(imgs[i]);
            notimg.src=srcimg[i];
        }
    }
// ---------------------------------------------------------------------------------------------------------------------------------
function imgupload(load){
    let imgload=document.getElementById(load);
    icochange.style.display='none';
    newimg.style.display='inline-block';
    let file= new FileReader();
    file.readAsDataURL(imgload.files[0]);
    file.onload=()=>{newimg.src=file.result;}
}

function info_appear() {
    donottouch();
    infosell.style.display='inline-block';
    header.style.filter='blur(1px)';
    showdata.style.filter='blur(1px)';
    add.style.filter='blur(1px)';
    icochange.style.display='block';
    modeinfo='creat';
    btn_mode.innerHTML='SAVE';
    viewdata.style.display='none';
}

function info_unappear() {
    infosell.style.display='none';
    header.style.filter='blur(0px)';
    showdata.style.filter='blur(0px)';
    showdata.style.pointerEvents='auto';
    header.style.pointerEvents='auto';
    add.style.filter='blur(0px)';
    add.style.pointerEvents='auto';
    newimg.style.display='none';
    let tdelet=['model','price','specifications','numberphone']
    for (let i = 0; i < tdelet.length; i++) {
        let tloadinput=document.getElementById(tdelet[i]);
        tloadinput.value=''; 
    }
    selectinfo1.value='computer';
    selectinfo2.value='all';
    newimg.src='';
    selectleftmenu();
}

function limitenter(acsses) {
if (model.value.length==19&&acsses=='model') {let limit_model=model.value.substring(0,18);model.value=limit_model;}
if (price.value.length==18&&acsses=='price') {let limit_price=price.value.substring(0,17);price.value=limit_price;}
if (numberphone.value.length==15&&acsses=='numberphone') {let limit_numberphone=numberphone.value.substring(0,14);numberphone.value=limit_numberphone;}
}

function creat() {
if (model.value!=''&&price.value!=''&&numberphone.value!=''&&newimg.src!='file:///C:/Users/MG/Desktop/FRONT%20PROJECT/MARKET%20INSIDE%20PROJECT/market.html'){
creatinfo();}else{console.log('inforomation is not complet');}
}

function creatinfo() {
    if (modeinfo=='creat'){view=0;}
    let objinfo={
        img:newimg.src,
        selectinfo1:selectinfo1.value,
        selectinfo2:selectinfo2.value,
        model:model.value.toUpperCase().trim(),
        price:price.value,
        specifications:specifications.value,
        numberphone:numberphone.value,
        views:view,
    }
    if(modeinfo=='creat'){saveinfo.push(objinfo);}
    else{saveinfo[upind]=objinfo;}
    localStorage.setItem('info',JSON.stringify(saveinfo));
    datainfo();
    showsaved();
    SAVEPAGEINFO();
    info_unappear();
}

function datainfo() {
    let showinfo='';
     let databuy='';
    for (let i = 0; i < saveinfo.length; i++) {
        showinfo+=`
    <div id="fram" style="overflow: hidden;margin-bottom: 140px;" onmouseenter="this.style.height='450px';this.style.marginBottom='0px';" onmouseleave="this.style.height='310px';this.style.marginBottom='140px';">
    <img src="${saveinfo[i].img}">
    <p>views: <b>${saveinfo[i].views}</b></p>
    <p>type: <b>${saveinfo[i].selectinfo1} ${saveinfo[i].selectinfo2}</b></p>
    <p>model: <b>${saveinfo[i].model.toUpperCase().trim()}</b></p>
    <p>price: <b>${saveinfo[i].price}$</b></p>
    <button id="views" onclick="VIEW(${i})">VIEW</button>
    <button id="btnup" onclick="UPDATE(${i});">UPDATE</button>
    <button id="btndell" onclick="DELET(${i});">DELET</button>
    <button></button>
    </div>
        `;
        databuy+=`
        <div id="fram" class="fram" style="height:310px;overflow: hidden;margin-bottom: 90px;" onmouseenter="this.style.height='400px';this.style.marginBottom='0px';" onmouseleave="this.style.height='310px';this.style.marginBottom='90px';">
        <img src="${saveinfo[i].img}">
        <p>views: <b>${saveinfo[i].views}</b></p>
        <p>type: <b>${saveinfo[i].selectinfo1} ${saveinfo[i].selectinfo2}</b></p>
        <p>model: <b>${saveinfo[i].model.toUpperCase().trim()}</b></p>
        <p>price: <b>${saveinfo[i].price}$</b></p>
        <button id="views" onclick="VIEW(${i}),veiwsproduct(${i}),SAVEPAGEINFO();">VIEW</button>
        <button class="pagesaves" id="tester${i}" onclick="SAVEPAGELOCAL(${i},this);SAVEPAGEINFO();showsaved();">SAVE</button>
        <button></button> 
        </div>
            `;
    }
    showdata.innerHTML=showinfo;
    databuypage.innerHTML=databuy;
}
datainfo();

function UPDATE(indup) {
    upind=indup;
    info_appear();
    selectleftmenu();
    modeinfo='update';
    btn_mode.innerHTML='UPDATE';
    newimg.src=saveinfo[indup].img;
    selectinfo1.value=saveinfo[indup].selectinfo1;
    selectinfo2.value=saveinfo[indup].selectinfo2;
    model.value=saveinfo[indup].model.toUpperCase().trim();
    price.value=saveinfo[indup].price;
    specifications.value=saveinfo[indup].specifications.trim();
    numberphone.value=saveinfo[indup].numberphone;
    view=saveinfo[indup].views
    viewdata.style.display='none';
    imgupload();
}

function DELET(inddel) {
    saveinfo.splice(inddel,1);
    localStorage.setItem('info',JSON.stringify(saveinfo));
    datainfo();
    if (savedlocal.includes(inddel)) {
        for (let i = 0; i < savedlocal.length; i++) {
            if(savedlocal[i]==inddel){
            savedlocal.splice(i,1);
            }}
    localStorage.setItem('saved',JSON.stringify(savedlocal));
    }
    savedbtn.splice(inddel,1);
    localStorage.setItem('btnsaved',JSON.stringify(savedbtn));
    showsaved();
    SAVEPAGEINFO();
    popularnewinfo();
    popularshawinfo();
}

function searchdata(value) {
    let valuesearch=value.toUpperCase().trim();
    let modesearch;
    let check=JSON.parse(localStorage.checksetting);
    if (check[2]==true&&check[3]==false) {
    modesearch='model';
    }else if (check[2]==false&&check[3]==true) {
    modesearch='price';
    }
    let databuy='';
    if (valuesearch!='') {
    for (let i = 0; i < saveinfo.length; i++) {
        if (modesearch=='model') { 
        if (saveinfo[i].model.includes(valuesearch)) {
            databuy+=`
            <div id="fram" class="fram" style="height:310px;overflow: hidden;margin-bottom: 90px;" onmouseenter="this.style.height='400px';this.style.marginBottom='0px';" onmouseleave="this.style.height='310px';this.style.marginBottom='90px';">
            <img src="${saveinfo[i].img}">
            <p>views: <b>${saveinfo[i].views}</b></p>
            <p>type: <b>${saveinfo[i].selectinfo1} ${saveinfo[i].selectinfo2}</b></p>
            <p>model: <b>${saveinfo[i].model.toUpperCase().trim()}</b></p>
            <p>price: <b>${saveinfo[i].price}$</b></p>
            <button id="views" onclick="VIEW(${i}),veiwsproduct(${i})">VIEW</button>
            <button class="pagesaves" id="tester${i}" onclick="SAVEPAGELOCAL(${i},this);SAVEPAGEINFO();showsaved();">SAVE</button>
            <button></button> 
            </div>
                `;
        }}else if (modesearch=='price') {
            if (+saveinfo[i].price<=+valuesearch) {
                databuy+=`
                <div id="fram" class="fram" style="height:310px;overflow: hidden;margin-bottom: 90px;" onmouseenter="this.style.height='400px';this.style.marginBottom='0px';" onmouseleave="this.style.height='310px';this.style.marginBottom='90px';">
                <img src="${saveinfo[i].img}">
                <p>views: <b>${saveinfo[i].views}</b></p>
                <p>type: <b>${saveinfo[i].selectinfo1} ${saveinfo[i].selectinfo2}</b></p>
                <p>model: <b>${saveinfo[i].model.toUpperCase().trim()}</b></p>
                <p>price: <b>${saveinfo[i].price}$</b></p>
                <button id="views" onclick="VIEW(${i}),veiwsproduct(${i})">VIEW</button>
                <button class="pagesaves" id="tester${i}" onclick="SAVEPAGELOCAL(${i},this);SAVEPAGEINFO();showsaved();">SAVE</button>
                <button></button> 
                </div>
                    `;
            }
        }
    }}

    if (valuesearch=='') {
        for (let e = 0; e < saveinfo.length; e++) {
            databuy+=`
            <div id="fram" class="fram" style="height:310px;overflow: hidden;margin-bottom: 90px;" onmouseenter="this.style.height='400px';this.style.marginBottom='0px';" onmouseleave="this.style.height='310px';this.style.marginBottom='90px';">
            <img src="${saveinfo[e].img}">
            <p>views: <b>${saveinfo[e].views}</b></p>
            <p>type: <b>${saveinfo[e].selectinfo1} ${saveinfo[e].selectinfo2}</b></p>
            <p>model: <b>${saveinfo[e].model.toUpperCase().trim()}</b></p>
            <p>price: <b>${saveinfo[e].price}$</b></p>
            <button id="views" onclick="VIEW(${e}),veiwsproduct(${e})">VIEW</button>
            <button class="pagesaves" id="tester${e}" onclick="SAVEPAGELOCAL(${e},this);SAVEPAGEINFO();showsaved();">SAVE</button>
            <button></button> 
            </div>
                `;
        }
    }

        databuypage.innerHTML=databuy;
        SAVEPAGEINFO();
}

function SAVEPAGEINFO() {
    'use strict'
    let loadsaved=JSON.parse(localStorage.saved);
    let infosaved=JSON.parse(localStorage.btnsaved);
    for (let savedaonly = 0; savedaonly < loadsaved.length; savedaonly++) {
    let getind=loadsaved[savedaonly];
    let getinfo=infosaved[getind]; 
    let modebuy=document.getElementById('tester'+[getind]); 
    modebuy.innerHTML=getinfo;
    if(modebuy.innerHTML=='SAVED'){
    modebuy.classList.remove('pagesaves');
    modebuy.classList.add('pagesaved');
    modebuy.innerHTML='SAVED';
    }else {}}
    for (let s = 0; s < infosaved.length; s++) {
    if(infosaved[s]=='SAVE'){
    let modebuy=document.getElementById('tester'+[s]); 
    modebuy.classList.add('pagesaves');
    modebuy.classList.remove('pagesaved');
    modebuy.innerHTML='SAVE';
    }else {}}
    }

function foc(y,valsearch) {
    for (let i = 0; i < aside.length; i++) {
     let focus=document.getElementById(aside[i]);  
     focus.classList.remove('focus');  
    }
    let ch=document.getElementById(y);
    ch.classList.add('focus');

    let apptype='';
    for (let c = 0; c < saveinfo.length; c++) {
        if (saveinfo[c].selectinfo1==valsearch||saveinfo[c].selectinfo2==valsearch) {
            apptype+=`
            <div id="fram" class="fram" style="height:310px;overflow: hidden;margin-bottom: 90px;" onmouseenter="this.style.height='400px';this.style.marginBottom='0px';" onmouseleave="this.style.height='310px';this.style.marginBottom='90px';">
            <img src="${saveinfo[c].img}">
            <p>views: <b>${saveinfo[c].views}</b></p>
            <p>type: <b>${saveinfo[c].selectinfo1} ${saveinfo[c].selectinfo2}</b></p>
            <p>model: <b>${saveinfo[c].model.toUpperCase().trim()}</b></p>
            <p>price: <b>${saveinfo[c].price}$</b></p>
            <button id="views" onclick="VIEW(${c}),veiwsproduct(${c})">VIEW</button>
            <button class="pagesaves" id="tester${c}" onclick="SAVEPAGELOCAL(${c},this);SAVEPAGEINFO();showsaved();">SAVE</button>
            <button></button> 
            </div>
                `;
        }
        
    }
    databuypage.innerHTML=apptype;

    let showsavedpage=JSON.parse(localStorage.saved);
    let savepg='';
    for (let m = 0; m < showsavedpage.length; m++) {
        let sv=showsavedpage[m];
    if (saveinfo[sv].selectinfo1==valsearch||saveinfo[sv].selectinfo2==valsearch){
        savepg+=`
        <div id="fram" class="fram" style="height:310px;overflow: hidden;margin-bottom: 90px;" onmouseenter="this.style.height='400px';this.style.marginBottom='0px';" onmouseleave="this.style.height='310px';this.style.marginBottom='90px';">
        <img src="${saveinfo[showsavedpage[m]].img}">
        <p>views: <b>${saveinfo[m].views}</b></p>
        <p>type: <b>${saveinfo[showsavedpage[m]].selectinfo1} ${saveinfo[showsavedpage[m]].selectinfo2}</b></p>
        <p>model: <b>${saveinfo[showsavedpage[m]].model.toUpperCase().trim()}</b></p>
        <p>price: <b>${saveinfo[showsavedpage[m]].price}$</b></p>
        <button id="views" onclick="VIEW(${showsavedpage[m]})">VIEW</button>
        <button class="pagesaved" onclick="SAVEPAGELOCAL(${showsavedpage[m]},this);SAVEPAGEINFO();showsaved();">SAVED</button>
        <button></button> 
        </div>
            `;
    }else{savedinfopage.innerHTML='';}
    savedinfopage.innerHTML=savepg;
    }
    if (modesavedpage=='buymode') {SAVEPAGEINFO();}
    let showpopularpage=JSON.parse(localStorage.popularshaw);
    let poppg='';
    for (let p = 0; p < showpopularpage.length; p++) {
    let popapp=showpopularpage[p];
    if (saveinfo[popapp].selectinfo1==valsearch||saveinfo[popapp].selectinfo2==valsearch){
        poppg+=`
        <div id="fram" class="fram" style="height:310px;overflow: hidden;margin-bottom: 90px;" onmouseenter="this.style.height='400px';this.style.marginBottom='0px';" onmouseleave="this.style.height='310px';this.style.marginBottom='90px';">
        <img src="${saveinfo[popapp].img}">
        <p>views: <b>${saveinfo[popapp].views}</b></p>
        <p>type: <b>${saveinfo[popapp].selectinfo1} ${saveinfo[showpopularpage[p]].selectinfo2}</b></p>
        <p>model: <b>${saveinfo[popapp].model.toUpperCase().trim()}</b></p>
        <p>price: <b>${saveinfo[popapp].price}$</b></p>
        <button id="views" onclick="VIEW(${popapp})">VIEW</button>
        <button class="pagesaves" id="modepop${popapp}" onclick="SAVEPAGELOCAL(${popapp},this);SAVEDPOP();showsaved();">SAVE</button>
        <button></button> 
        </div>
            `;
    }}
    popularinfopage.innerHTML=poppg;
    if (modesavedpage=='popmode') {SAVEDPOP();}
}

// ----------------------------------------------------------------------------------------------------------------------save page
function SAVEPAGELOCAL(sbtn,localsaved) {
    if(localsaved.innerHTML=='SAVE'){
    if (savedlocal.includes(sbtn)==false) {
    savedlocal.push(sbtn);
    localStorage.setItem('saved',JSON.stringify(savedlocal));
    }
    savedbtn[sbtn]='SAVED';
    localStorage.setItem('btnsaved',JSON.stringify(savedbtn));
    }else if(localsaved.innerHTML=='SAVED'){
    if (savedlocal.includes(sbtn)) {
        for (let i = 0; i < savedlocal.length; i++) {
            if(savedlocal[i]==sbtn){
            savedlocal.splice(i,1);
            localStorage.setItem('saved',JSON.stringify(savedlocal));
            }}
    }
    savedbtn[sbtn]='SAVE';
    localStorage.setItem('btnsaved',JSON.stringify(savedbtn));
}}

    function showsaved() {
        let savedinner='';
    for (let i = 0; i < savedlocal.length; i++) {
        let shaw=savedlocal[i];
        savedinner+=`
            <div id="fram" class="fram" style="height:310px;overflow: hidden;margin-bottom: 90px;" onmouseenter="this.style.height='400px';this.style.marginBottom='0px';" onmouseleave="this.style.height='310px';this.style.marginBottom='90px';">
            <img src="${saveinfo[shaw].img}">
            <p>views: <b>${saveinfo[shaw].views}</b></p>
            <p>type: <b>${saveinfo[shaw].selectinfo1} ${saveinfo[shaw].selectinfo2}</b></p>
            <p>model: <b>${saveinfo[shaw].model.toUpperCase().trim()}</b></p>
            <p>price: <b>${saveinfo[shaw].price}$</b></p>
            <button id="views" onclick="VIEW(${shaw})">VIEW</button>
            <button class="pagesaved" onclick="SAVEPAGELOCAL(${shaw},this);SAVEPAGEINFO();showsaved();">SAVED</button>
            <button></button> 
            </div>
            `;
    }
        savedinfopage.innerHTML=savedinner;
    }
    showsaved();

    function saveinner() {
        let showsavedpage=JSON.parse(localStorage.saved);
        let savepg='';
        for (let s = 0; s < showsavedpage.length; s++) {
            savepg+=`
            <div id="fram" class="fram" style="height:310px;overflow: hidden;margin-bottom: 90px;" onmouseenter="this.style.height='400px';this.style.marginBottom='0px';" onmouseleave="this.style.height='310px';this.style.marginBottom='90px';">
            <img src="${saveinfo[showsavedpage[s]].img}">
            <p>views: <b>${saveinfo[showsavedpage[s]].views}</b></p>
            <p>type: <b>${saveinfo[showsavedpage[s]].selectinfo1} ${saveinfo[showsavedpage[s]].selectinfo2}</b></p>
            <p>model: <b>${saveinfo[showsavedpage[s]].model.toUpperCase().trim()}</b></p>
            <p>price: <b>${saveinfo[showsavedpage[s]].price}$</b></p>
            <button id="views" onclick="VIEW(${showsavedpage[s]})">VIEW</button>
            <button class="pagesaved" onclick="SAVEPAGELOCAL(${showsavedpage[s]},this);SAVEPAGEINFO();showsaved();">SAVED</button>
            <button></button> 
            </div>
                `;
        }
        savedinfopage.innerHTML=savepg;
    }
// ----------------------------------------------------------------------------------------------pop page
function veiwsproduct(ind) {
    if(saveinfo[ind].views!=0){
    view=saveinfo[ind].views;
    view++;
    saveinfo[ind].views=view;
    }else{
    view=0;
    view++;
    saveinfo[ind].views=view;
    }
    localStorage.setItem('info',JSON.stringify(saveinfo));
    let databuy='';
    for (let i = 0; i < saveinfo.length; i++) {
    databuy+=`
        <div id="fram" class="fram" style="height:310px;overflow: hidden;margin-bottom: 90px;" onmouseenter="this.style.height='400px';this.style.marginBottom='0px';" onmouseleave="this.style.height='310px';this.style.marginBottom='90px';">
        <img src="${saveinfo[i].img}">
        <p>views: <b>${saveinfo[i].views}</b></p>
        <p>type: <b>${saveinfo[i].selectinfo1} ${saveinfo[i].selectinfo2}</b></p>
        <p>model: <b>${saveinfo[i].model.toUpperCase().trim()}</b></p>
        <p>price: <b>${saveinfo[i].price}$</b></p>
        <button id="views" onclick="VIEW(${i}),veiwsproduct(${i}),SAVEPAGEINFO();">VIEW</button>
        <button class="pagesaves" id="tester${i}" onclick="SAVEPAGELOCAL(${i},this);SAVEPAGEINFO();showsaved();">SAVE</button>
        <button></button> 
        </div>
            `;
    }
    databuypage.innerHTML=databuy;
    SAVEPAGEINFO();
    saveinner();
}

function popularnewinfo() {
let allviews=[];
for (let i = 0; i < saveinfo.length; i++) {allviews.push(saveinfo[i].views);}
allviews.sort((a,b)=>a-b).reverse();
localStorage.setItem('popular',JSON.stringify(allviews)); 

let limitpop;
let delpop;
let checker=JSON.parse(localStorage.checksetting);
if (checker[4]==true&&checker[5]==false&&checker[6]==false) {limitpop=1;delpop=allviews.length-1;}
if (checker[4]==false&&checker[5]==true&&checker[6]==false) {limitpop=5;delpop=allviews.length-5;}
if (checker[4]==false&&checker[5]==false&&checker[6]==true) {limitpop=10;delpop=allviews.length-10;}

let popularsort=[];
let pop=JSON.parse(localStorage.popular);
for (let c = 0; c < allviews.length; c++) {
for (let e = 0; e < saveinfo.length; e++) {
if (saveinfo[e].views==pop[c]) {
if(popularsort.includes(e)==false){popularsort.push(e);}}
}
popularsort.splice(limitpop,8);
localStorage.setItem('popularshaw',JSON.stringify(popularsort));
}
}popularnewinfo();

function popularshawinfo() {
let infopop=JSON.parse(localStorage.popularshaw);
let popularinfo='';
for (let i = 0; i < infopop.length; i++) {
 popularinfo+=`
<div id="fram" class="fram" style="height:310px;overflow: hidden;margin-bottom: 90px;" onmouseenter="this.style.height='400px';this.style.marginBottom='0px';" onmouseleave="this.style.height='310px';this.style.marginBottom='90px';">
<img src="${saveinfo[infopop[i]].img}">
<p>views: <b>${saveinfo[infopop[i]].views}</b></p>
<p>type: <b>${saveinfo[infopop[i]].selectinfo1} ${saveinfo[infopop[i]].selectinfo2}</b></p>
<p>model: <b>${saveinfo[infopop[i]].model.toUpperCase().trim()}</b></p>
<p>price: <b>${saveinfo[infopop[i]].price}$</b></p>
<button id="views" onclick="VIEW(${infopop[i]})">VIEW</button>
<button class="pagesaves" id="modepop${infopop[i]}" onclick="SAVEPAGELOCAL(${infopop[i]},this);SAVEDPOP()">SAVE</button>
<button></button> 
</div>
 `;
}
popularinfopage.innerHTML=popularinfo;
SAVEDPOP();
}
popularshawinfo();

function SAVEDPOP() {
        let loadpop=JSON.parse(localStorage.popularshaw);
        let infosaved=JSON.parse(localStorage.btnsaved);
        for (let i = 0; i < loadpop.length; i++) {
        let getind=loadpop[i];
        let getinfo=infosaved[getind];
        let modepop=document.getElementById('modepop'+[getind]);
        modepop.innerHTML=getinfo;
        if(modepop.innerHTML=='SAVED'){
            modepop.classList.remove('pagesaves');
            modepop.classList.add('pagesaved');
            modepop.innerHTML='SAVED';
        }else{}
        }

        for (let s = 0; s < infosaved.length; s++) {
        if(infosaved[s]=='SAVE'&&loadpop.includes(s)){
        let modepopsave=document.getElementById('modepop'+[s]); 
        modepopsave.classList.add('pagesaves');
        modepopsave.classList.remove('pagesaved');
        modepopsave.innerHTML='SAVE';
        }else {}}

        }
