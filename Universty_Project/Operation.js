let W_input = document.getElementById("word") ;
let K_input = document.getElementById("key");
let R_btn = document.getElementById('result');
let C_btn = document.getElementById('clear');
let Show_Filter = document.getElementById("W_filter") ;
let Name_Filter = document.getElementById("N_filter") ;
let Show_Results = document.getElementById("all_results") ;

////////////////////////////////////////////////////////////////////////////////////////////////

R_btn.onclick = () => {

let input = W_input.value;

let word = input.toLowerCase().replace(/[^a-zA-Z]/g, '');

let key =  K_input.value;

Show_Filter.innerHTML = 
`       
    <tr id="table_H">
        <th>Key</th>
        <th>P_Word</th>
        <th>N_Word</th>
    </tr>
` ;

Name_Filter.innerHTML = 
`       
    <tr id="table_H">
        <th>Key</th>
        <th>P_Word</th>
        <th>N_Word</th>
    </tr>
` ;

Show_Results.innerHTML = 
`       
    <tr id="table_H">
        <th>Key</th>
        <th>P_Word</th>
        <th>N_Word</th>
    </tr>
` ;

Result( word , key );

}

C_btn.onclick = () => {

    W_input.value = '';

    K_input.value = '';

    Show_Filter.innerHTML = 
`       
    <tr id="table_H">
        <th>Key</th>
        <th>P_Word</th>
        <th>N_Word</th>
    </tr>
` ;

Name_Filter.innerHTML = 
`       
    <tr id="table_H">
        <th>Key</th>
        <th>P_Word</th>
        <th>N_Word</th>
    </tr>
` ;

Show_Results.innerHTML = 
`       
    <tr id="table_H">
        <th>Key</th>
        <th>P_Word</th>
        <th>N_Word</th>
    </tr>
` ;

}

////////////////////////////////////////////////////////////////////////////////////////////////

W_input.addEventListener("input", function () { W_input.value = W_input.value.replace(/[^a-zA-Z]/g, ''); });

K_input.addEventListener("input", function () { if (K_input.value > 26) {K_input.value = 26;}});

////////////////////////////////////////////////////////////////////////////////////////////////

function Decryption( word , key ) {

// The all english letters //
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Get the encryption number array //
let encryption = [];
for (let E = 0; E < word.length; E++) {
for (let O = 0; O < letters.length; O++) {
if (word[E] == letters[O]) {
encryption.push(O);
}}}
//console.log(encryption);

// Convert the encryption number array to decryption number arraay then to decryption word //
let P_Array_Num = [] ;
let N_Array_Num = [] ;

/* Positive Array Number */
for (let P = 0; P < encryption.length; P++) {
let P_result= encryption[P] + key ;
while (P_result > (letters.length-1)) { P_result -= 26; };
P_Array_Num.push(P_result)
}
//console.log(P_Array_Num);


/* Convert Positive Array Number To Decryption Word */
let P_Word = "";
for (let PW = 0; PW < P_Array_Num.length; PW++) { P_Word += letters[P_Array_Num[PW]]; }
//console.log(P_Word);

/* Negative Array Number */
for (let N = 0; N < encryption.length; N++) {
let N_result = encryption[N] - key ;
while (N_result < 0) { N_result += 26; };
N_Array_Num.push(N_result)
}
//console.log(N_Array_Num);

/* Convert Negative Array Number To Decryption Word */
let N_Word = "";
for (let NW = 0; NW < N_Array_Num.length; NW++) { 
N_Word += letters[N_Array_Num[NW]]; }
//console.log(N_Word);

// Creat Object Have The Positive Decryption Word And The Negative Decryption Word //
let result = {
    Key : key ,
    Positive_Word : P_Word ,
    Negative_Word : N_Word
}
// console.log(result);

return result;
}

////////////////////////////////////////////////////////////////////////////////////////////////

function isEnglishWord(word) {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    return fetch(url)
        .then(response => response.ok ? true : false) // Return true/false
        .catch(() => false); // Handle errors
}

////////////////////////////////////////////////////////////////////////////////////////////////

function Check_Word(word) {
    const url = `https://api.datamuse.com/words?sp=${word}&max=1`;

    return fetch(url)
        .then(response => response.json())
        .then(data => data.length > 0) 
        .catch(() => false); 
}

////////////////////////////////////////////////////////////////////////////////////////////////

function Result( word = "hello" , key = 0 ) {

// Looping The Number Of Key And Filter The Output And Collect All Data In Master Array //
let Filter = [];
let Names_Filter = [];
let Data = [];

for (let i = 0 ; i < key ; i++) {

let object = Decryption( word , (i+1) );

isEnglishWord(object.Positive_Word).then( result => {if (result) { Filter.push(object); } } );

isEnglishWord(object.Negative_Word).then( result => {if (result) { Filter.push(object) } } );

Check_Word(object.Positive_Word).then(result => {if (result) { Names_Filter.push(object); } } );

Check_Word(object.Negative_Word).then(result => {if (result) { Names_Filter.push(object); } } );

Data.push(object);

}

setTimeout(() => {

let Real_Word = Filter.filter((obj, index, self) =>index === self.findIndex(o => o.Key === obj.Key));
let R_Filter = Real_Word.sort((a, b) => a.Key - b.Key);

let Name = Names_Filter.filter((obj, index, self) =>index === self.findIndex(o => o.Key === obj.Key));
let N_Filter = Name.sort((a, b) => a.Key - b.Key);

for (let F = 0; F < R_Filter.length; F++) {
Show_Filter.innerHTML +=
`
    <tr>
        <td>${R_Filter[F].Key}</td>
         <td style="font-size: 14px;">${R_Filter[F].Positive_Word}</td>
         <td style="font-size: 14px;">${R_Filter[F].Negative_Word}</td>
    </tr>
`
}

for (let N = 0; N < N_Filter.length; N++) {
Name_Filter.innerHTML +=
`
    <tr>
        <td>${N_Filter[N].Key}</td>
         <td style="font-size: 14px;">${N_Filter[N].Positive_Word}</td>
         <td style="font-size: 14px;">${N_Filter[N].Negative_Word}</td>
    </tr>
`
}


for (let R = 0; R < Data.length; R++) {
Show_Results.innerHTML +=
`
    <tr>
        <td>${Data[R].Key}</td>
         <td style="font-size: 14px;">${Data[R].Positive_Word}</td>
         <td style="font-size: 14px;">${Data[R].Negative_Word}</td>
    </tr>
`
}

}, 3000);

}