
    // .nfz-demo-common {
    //     top: 20px;
    //     left: 20px;
    //     height: 100px;
    //     width: 100px;
    //     position: fixed;
    //     background-color: rgb(238, 151, 151);
    //     color: bisque;
    //     /* 禁止文本选中 */
    //     -moz-user-select: none;
    //     -webkit-user-select: none;
    //     user-select: none;
    //     line-height: 100px;
    // }

    var that = this;
    // 创建一个节点
    function getInitElement(name) {
        var element = document.createElement(name)
        element.classList.add("nfz-demo-common"); // 公共化
        return element;
    }
    var theDiv = getInitElement("div");
    theDiv.onmousedown = function () { that.movePosition() };
    theDiv.innerHTML = "<center>掘金-南方者</center>";
    // 在body节点里添加这个节点
    document.body.appendChild(theDiv);

    // 使窗体移动方法
    function movePosition(event) {
        var oEvent = event || window.event;
        var disX = oEvent.clientX - theDiv.offsetLeft;
        var disY = oEvent.clientY - theDiv.offsetTop;
        // 鼠标按住移动时候
        document.onmousemove = function (event) {
            var oEvent = event || window.event;
            var theLeft = oEvent.clientX - disX;
            var theTop = oEvent.clientY - disY;
            theDiv.style.left = theLeft + 'px';
            theDiv.style.top = theTop + 'px';
        };

        // 鼠标抬起（释放按住）的时候
        document.onmouseup = function (event) {
            var theLeft = theDiv.style.left;
            var theTop = theDiv.style.top;
            var theWidth = document.body.clientWidth;
            // console.log(theWidth, theLeft)
            if (parseInt(theLeft) < 0) {
                theDiv.style.right = "auto";
                theDiv.style.left = "0px";
            } else if (parseInt(theLeft) > theWidth) {
                theDiv.style.left = "auto";
                theDiv.style.right = "0px";
            }
            var divHeight = theDiv.clientHeight;
            var theHeight = window.innerHeight;
            console.log(theTop, theHeight, window.screenTop, divHeight);
            if (parseInt(theTop) < 0) {
                theDiv.style.bottom = "auto";
                theDiv.style.top = "0px";
            } else if (parseInt(theTop) > (theHeight - divHeight)) {
                theDiv.style.top = "auto";
                theDiv.style.bottom = "0px";
            }
            // 释放的时候方法置空，实现移动停止
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };