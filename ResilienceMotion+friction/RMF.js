require('./RMF.css');
// 在目标点左面的时候加速运动 右面的时候减速运动
var oUl = document.getElementById('ul1');
var oLi = oUl.getElementsByTagName('li');
var oBg = oLi[oLi.length - 1];
for (var i =0; i < oLi.length - 1; i++) {
	oLi[i].onmouseover = function () {
		startMove(oBg,this.offsetLeft);
	}
}
function startMove (obj,iTarget) {
	var iSpeed = 0;
	var u = 0.7;			
	clearInterval(obj.timer);
	obj.timer = setInterval(function () {
		iSpeed = iSpeed + (iTarget - obj.offsetLeft) / 5; 
		iSpeed = iSpeed * u; 
		obj.style.left = obj.offsetLeft + iSpeed + 'px';	
		document.title = 'bg:' + obj.offsetLeft + '| target:' + iTarget			
	}, 30);
}