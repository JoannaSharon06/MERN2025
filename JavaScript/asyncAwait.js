async function asAw()
{
    setTimeout(()=> {
        console.log("Inside Timeout")
    },5000)
    return "This is async/wait example"
}
console.log(asAw())

asAw().then(function(output)
{
    console.log(output)
})
