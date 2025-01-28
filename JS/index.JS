function erPartall(tall){
    var tall = tall
    if(tall%2===0){
        console.log("Tallet er partall")
        return true
    }
    else{
        console.log("Tallet er oddetall")
        return false
    }
}
erPartall(5)

function tellBokstaver(string){
    var string = string
    let num = string.length

    console.log(num)
    return num
}
erPartall(tellBokstaver('Hello World'))