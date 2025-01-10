//for in loop

var a=[10,20,30]
var b={"count":70,"abs":1}
for(let i in b)
{
    console.log(i,b[i])
}

set=new Set(['hello',1,2,"SECE","44",2,"hello"])
for(let i in set)
{
    console.log("loop is running")
    console.log(i)
}


//for of loop
for (let i of a) {
    console.log(i)
}

for(let j of Object.keys(b))
{
    console.log(j)
}

for (let[i,j] of Object.entries(b))
{
    console.log(i,j)
}