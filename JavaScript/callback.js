/*//Callback

function submitForm(submit,db){
    var[dbName,comment]=db()
       // console.log(db())
    console.log("DB name is",dbName,comment)
    console.log(submit)
}

//function validations(){
 //   console.log("Form validation successful")
//}
function database()
{
    dbName="Sece"
    return [dbName, "Data stored successsfully"]
}
//submitForm("Form Submitted Successfully",validations)
submitForm("Form Submitted Successfully",database)

*/

function submitForm(submit,isformValid)
{
    console.log(isformValid());
    if(isformValid)
    {
        console.log("Form validation Successfully")
        console.log(submit)
    }
    else
    {
        console.log("Form validation failed")
        console.log("Form submission Unsuccessful")
    }
}

function formValidation()
{
    email="sece@sece.ac.in"
    password="12345678"
    if (email==="sece@sece.ac.in" && password)
    {
        return true
    }
    else
    {
        return false
    }
}

submitForm("Form Submitted Successfully",formValidation)