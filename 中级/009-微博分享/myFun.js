function scroll(){//最新的浏览器
    if(window.pageYOffset !==null){
        return{
            top:window.pageYOffset,
            left:window.pageXOffset
        }
    }else if(document.compatMode ==="CSS1Compat"){//满足  W3C标准的浏览器
        return{
            top:document.documentElement.scrollTop,
            left:document.documentElement.scrollLeft
        }
    }else{//老式
        return{
            top :document.body.scrollTop,
            left :document.body.scrollLeft
        }
    }
}
function $(str) {
    return typeof str==="string"? document.getElementById(str):null;
}
function show(obj) {
    return obj.style.display="block";
}
function hide(obj) {
    return obj.style.display="none";
}