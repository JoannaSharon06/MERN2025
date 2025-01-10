//ES6=>ECMA Script Standard 6
// 1.Variable declarations -> refer variable.js
// 2.Scopes 
//var - Global scope
//let - Local/Block scope
//const - Global scope

var a=10
const con=3.14
console.log(a)
console.log(con)
{
    let a=20
    var b=30
    console.log(a)
    console.log(b)
}
console.log(a)
console.log(con)    
console.log(b)


//3.Class and Objects

class ClassEg{
    constructor()
    {
       this.a=10
    }
    //4.Arrow Functions
    funcInClass=()=>  {
        console.log(a)
    }
    
}
obj=new ClassEg()
console.log(obj.funcInClass())

//5.Ternary Operators
a=10
console.log((a%2==0)?"Even":"Odd")

//6.Spread Operator 
a=[10,20,30,40]
b=[50,60,70]
c=[...b,...a]
console.log(c)

//7.Rest Operator
function restOpEg(...arg)
{
    console.log(arg)
}
restOpEg(10,20,30,40,50,...b)

//8.Destructing Operator
var array=[10,20,30]
var [a,b,c,d]=array
console.log(a,b,c);