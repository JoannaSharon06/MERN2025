//Primitive Datatypes
a="SECE"
console.log(a)
b=true
console.log(b)
console.log(typeof(a))

//Secondary datatypes(Object)
array=['a',10,true,[20,30],"Sri Eshwar"]
console.log(array)
console.log(typeof(array))

//1st way of declaring an Object 
obj={
    firstname:"Sri",
    lastname:"Eshwar",
}
console.log(obj)
console.log(typeof(obj))
console.log(obj.firstname)
console.log(obj.lastname)
 

//2nd way of declaring an Object
obj1={}
console.log(obj1)
console.log(typeof(obj1))
obj1["dept"]="CSE"
obj1["Section"]="A"
console.log(obj1)

//3rd way of declaring an Object
obj2=new Object();
console.log(obj2)
obj2.count=70
obj2.abs=1
totalPresentCount=obj2.count-obj2.abs
console.log(totalPresentCount)
console.log(obj2)


//Set
set=new Set(("hello",1,2,"SECE"))
console.log(set)

//Empty Set 
set1=new Set();
console.log(set1)
console.log(typeof(set1))

//Set
set2=new Set(["hello",1,2,"SECE"])
console.log(set2)





