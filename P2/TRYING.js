



// var name="MAGDY ";
// var age= 16  ;
// console.log ( name + " " + age );
// console.log(+"2"+2);
// console.log(print)
// let names={
//     name: 'Magdy  Ahmed',
//     Age: 16,
//     Number: +'01550319347',
// }
// console.log (names);
// let okorno;
// okorno=+true ;
// let noorok=+false;
// console.log (parseFloat(okorno  +  "4.4"));
// console.log( noorok);
// // let x=window.prompt();
// // console.log(2 * x);
// let M=["10" , "top"];
// M [1] = 10
//  M [2]= 'magdy'
// console.log (M[1]);
// console.log(M[2]);

// console.log(name.repeat(10));
// console.log(name[0]);
// console.log(name.indexOf ('G'))
// console.log(name.slice (-6,-1))
// let namess=['magdy','ahmed']
// namess.unshift('mohamed')
// namess.push('magdy');
// namess.splice(1,2,'magdy','ahmed')
// namess.shift()
// console.log(namess);
// console.log(namess.slice(0,2));
// let cp= [5,7,1,2]

// console.log(cp.sort());
// console.log(cp.reverse());
// console.log(cp.join(   '-'));
// console.log(namess.concat(M));
// let q=("my.freefire2007@gmail.com");
// let e= (' MY.freefIre2007@gmail.CoM')
// console.log(e.toLowerCase().trim() == q)
// console.log(5 == '5');
// console.log(5 <= 5 && 4 != 3);
// console.log(5 <= 5 || 4 != 4);
// if (e.toLowerCase().trim() == q)
// {console.log('true');}
// else{console.log('fales');}
// e.toLowerCase().trim() == q?
// console.log('true')
// :console.log('fales');
// switch(q)
// {
//     case e.toLowerCase().trim():
//         console.log('true')
//         break;
//         default:console.log('fales');
        
// }
// let names1=['MAGDY','OMAR','FARAH'];
// let ages=['16','13','6'];
// console.log( '  ');
// console.log('CHOOSE THE CORECT');
// for (let a=0 ;a<3; a++)
// {
//     console.log('NAME:' + names1[a])
//     for (let z=2;z>=0;z--)
//     {
//         console.log('AGE:' + ages[z])
//     }
// }
// let bb=['magdy',11,'ahmed']
// for(let o=0; o<bb.length; o++ )
// {
//     if( bb[o]=='ahmed')
//     {continue;}
//     console.log(bb[o]);
// }
// // let u=0;
// // while(u<3);
// // {console.log(bb[u])
// // u++;}


// function mm(...total)
// {
//     let result=0;
//     for(let l=0; l<total.length;l++)
//     {result+=total[l]}
// console.log(result);
// }
// mm(1,2,5,10);

// function day(age)
// {
//     let days=age*365;
//     return days;
// }
// let mytr=day(16.5);

// function hour(ages)
// {
//     let hours=ages*24;
//     return hours;
// }

// console.log(hour(mytr));  

let car1={
    name :'mrc',
    model :2023,
    color:function(){
       return car1.name+this.model
    }
}

let car2 = Object.create(car1);
car2.model=2024;
console.log(car1.color());
console.log(car2.color());

let car3={
    name :'bmw',
    model :2023,
   
    }
    let car5={
        name2 :'mrc',
        model2 :2023,
       
    }
let cars= Object.assign(car3,car5,{namea:'yes' });

console.log(cars);

 