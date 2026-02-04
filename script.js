
        let a=10;
        var b=11;
        const c=13;
        let d=123n;
        let bool=true;
        a=17;
        console.log(a);
        console.log(b,c);
        console.log(typeof a);
        console.log(typeof b);
        console.log(typeof c);
        console.log(typeof bool);
        console.log(d);
        console.log(typeof d);
        let age=34;
        if(age>=18)
        console.log("You are eligible to vote");
    else
    console.log("You are not eligible to vote");
let m=1;
switch(m)
{
    case 1:
       { a++;
        console.log(a);
        break;
       }
       case 12:
        {
            console.log("Welcome to the world of javascript");
        }
        default:
        {
            console.log("Hello Miss.Tanushree");
        }
}
//Array
let arr=[12,10,15,16,78];
console.log(arr.length);
console.log(arr[0]);
arr.push(89);
console.log(arr);
arr.pop();
console.log(arr);
//Object
let student={
    name:"Tanushree",
    age:20
}
console.log(student);
student["name"]="Vartika";
console.log(student);
student.age=56;
console.log(student.age);
//Functions
function add(p, q){
    return p+q;
}
console.log(add(12,13));
//arrow function
const multiply=(p,q)=>p*q
{
    console.log("arrow function",multiply(5,3));
}
//date
let today=new Date();
console.log(today);
//math
console.log(Math.sqrt(25));
console.log(Math.random());
//String
txt="Hello World";
console.log(txt.length);
console.log(txt.toUpperCase());
console.log(txt.includes("html"));//checks  if substring is present or not
//  Type Conversion
let st="123";

console.log(st+10);//concatenation

console.log(st/12);//division-10.25
let s1="145";
let convert=Number(s1);
console.log(convert+10);

