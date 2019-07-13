window.onload=function () {
    waterFull("main", "fir");
    var tem;
    window.onscroll = function () {
        tem=setTimeout(function () {
            clearTimeout(tem);
            if (checkWillLoadPic()) {
                var dateArr = [
                    {"src": "img01.jpg"},
                    {"src": "img03.jpg"},
                    {"src": "img02.jpg"},
                    {"src": "img11.jpg"},
                    {"src": "img08.jpg"},
                    {"src": "img09.jpg"},
                    {"src": "img12.jpg"},
                    {"src": "img15.jpg"}
                ];
                // 还否可以加上计时器来实现加载1的效果？？？？？？？？？
                for (var i=0;i<dateArr.length;i++) {
                    var newFirDiv = document.createElement("div");
                    newFirDiv.className = "fir";
                    $("main").appendChild(newFirDiv);

                    var newSecDiv = document.createElement("div");
                    newSecDiv.className = "sec";
                    newFirDiv.appendChild(newSecDiv);

                    var newImg = document.createElement("img");
                    newImg.src = "images/" +dateArr[i].src;
                    newSecDiv.appendChild(newImg);
                }
                waterFull("main", "fir");
            }
        },2000);
    }

    //----------------------新加的操作，，节流使用setTimeout
    var timer=null;
    window.onresize=function () {
        clearTimeout(timer);
        timer=setTimeout(function () {
            waterFull("main", "fir");
        },200);
    }
}
function waterFull(parent,child) {
//    实现父盒子居中
    var allBox=$(parent).getElementsByClassName(child);
    var box_wid=allBox[0].offsetWidth;
    var screenX=document.documentElement.clientWidth;//屏幕宽度
    var col=parseInt(screenX/box_wid);//列数

    $(parent).style.width=col*box_wid+"px";
    $(parent).style.margin="0 auto";

//无序排列
    var box_Height=[],height,minBoxHeight,minBoxIndex;
    for(var i=0;i<allBox.length;i++){
        height=allBox[i].offsetHeight;
        if(i<col){//放入第一行的高度
            box_Height.push(height);
        }else{

            //-----------拿到最小高度及下标
            minBoxHeight=_.min(box_Height);
            // minBoxHeight=Math.min.apply(this,box_Height);
            minBoxIndex=minIndex(box_Height,minBoxHeight);
            //-------------在最小的下面接上
            allBox[i].style.position="absolute";
            allBox[i].style.left=minBoxIndex*box_wid+"px";
            allBox[i].style.top=minBoxHeight+"px";
            //--------------renew box height
            box_Height[minBoxIndex]+=height;
        }
    }
}
function minIndex(arr,min) {
    for(var i=0;i<arr.length;i++){
        if(arr[i]==min){
            return i;
        }
    }
}
function $(str) {
    return typeof str==="string"? document.getElementById(str):null;
}

function checkWillLoadPic() {
    var allBox=$("main").getElementsByClassName("fir");
    var lastBox=allBox[allBox.length-1];
    var outScreen=scroll().top;//超出屏幕的高度
    var screenX=document.body.clientHeight||document.documentElement.clientHeight;
    var fir=lastBox.offsetTop+lastBox.style.height/2;//这里的offsethenght即是上面所有高度
    var sec=outScreen+screenX;

    return fir<=sec;

}