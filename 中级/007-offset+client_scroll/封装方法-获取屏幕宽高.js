/**
 * 这是用来获取屏幕宽高的方法
 * @returns {{width: number, height: number}}
 */

function screen() {
    if(window.innerWidth){//ie9+newest
        return{
            width:window.innerWidth,
            height: window.innerHeight
        }
    }else if(document.compatMode==="CSS1Compat"){//w3c
        return{
            width:document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }
    return{//old
        width:document.body.clientWidth,
        height: document.body.clientHeight
    }
}