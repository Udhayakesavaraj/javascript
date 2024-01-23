/*
SetExample=new Set(["aiadmk","dmk","congress"])
console.log(SetExample)

for(key of SetExample)
{
    console.log(key)
}
*/

mapEg=new Map([
    ["id","21ecr21"],
    ["name","udhaya"]
])

console.log(mapEg)


mapEg.set("phone","9487654321")
mapEg.set("age","9")
for(value of mapEg)
{
    console.log(value)
}
mapEg.delete("age")
for(value of mapEg)
{
    console.log(value)
}