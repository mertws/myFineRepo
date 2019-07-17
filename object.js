var x = ["mert", "agidis"]

var myObj = {
    name: "osman",
    height: "180"
}

var key1 = "name"

var key2 = key1
key1 = "bok"
console.log(key2)

var mySecObj = myObj

myObj.name = "veli"
console.log(mySecObj["name"])

//console.log(Object.keys(x))

//console.log(x.length)

//console.log(x["0"])

//console.log((Object.keys(myObj).length))

//for (var i in x){
//    console.log(x[i])
//}

//for (var i in myObj){
//    console.log(myObj[i])
//}

for (let index = 0; index < (Object.keys(myObj)).length; index++) {
    var keys = Object.keys(myObj)
    var inx = keys[index]
    
    console.log(myObj[inx])
}

myObj["weight"] = "200"
console.log(myObj["weight"])
console.log(myObj)

x.unshift("eben")
x.push("seksi")
console.log(x)

var removedItem = x.pop()
console.log(x)
console.log(removedItem)

var shiftedItem = x.shift()

console.log(x)
console.log(shiftedItem)

myObj["weight"] = null

delete myObj.weight
console.log(myObj)

