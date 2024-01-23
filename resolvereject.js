function buycar(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('buy a car')
            
        }, 10000) 
    })
    
    
}

function planatrip(cb1, cb2){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('lets go to manali')
        
    }, 2000)
})
}

function reachmanali(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('reached manali')
            
        }, 1000)
    })
}

function gotofamousmountain(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('reached mountain')
            
        }, 1000)
    })
}
    


async function fun1(){
    const msg = await buycar();
    console.log(msg);
    const msg2 = await planatrip();
    console.log(msg2);
    const msg3 = await reachmanali();
    console.log(msg3);
    const msg4 = await gotofamousmountain();
    console.log(msg4);
}
fun1()

