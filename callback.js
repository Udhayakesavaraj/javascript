/*

function ramusomu(Welcomemessage,callback)
{
    console.log(welcomemessage)
    thambipoidu();

}

function miniani()
{
    console.log("")
}

*/

function udhaya(place,city)
{
    setTimeout(function() 
    {
       console.log(place)
       city();   
    },20);
}
function salem()
{
    console.log("i love my city")
}
udhaya("i am from salem",salem)
