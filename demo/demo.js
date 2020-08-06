const IMG_URL = '../image/rabbit-big.png'
const positions = ['0 -854', '-174 -852', '-349 -852' , '-524 -852', '-698 -852', '-873 -848']
function animation (el, positions, imgUrl) {
    el.style.background =  `no-repeat url(${imgUrl})`
    var index = 0
    
    function run(){
        var position = positions[index].split(' ')
        el.style.backgroundPosition = `${position[0]}px ${position[1]}px`
        index ++ 
        if(index >= positions.length){
            index = 0
        }
        setTimeout(run,22)
    }
    run()
}
function isObject(obj){
    console.log(Object.prototype)
    if(Object.prototype.toString.call(obj) === '[object Object]'){
        return true
    }else {
        return false
    }
}

function isString(obj){
    if(Object.prototype.toString.call(obj) === '[object String]'){
        return true
    }else {
        return false
    }
}
function getEle(el){
    if(isString(el)){
        return document.querySelectorAll(el)
    }else {
        return el
    }
}

let ele = getEle('#rabbit')[0]
console.log(ele)
animation(ele, positions, IMG_URL)