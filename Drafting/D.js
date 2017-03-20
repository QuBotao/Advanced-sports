require('./D.css');
var oDiv = document.getElementById('div1');
var iSpeedX;
var iSpeedY;
var lastX;
var lastY;		
oDiv.onmousedown = function (e) {
	clearInterval(timer);
	var event = event || e;
	var disX = event.clientX - oDiv.offsetLeft;
	var disY = event.clientY - oDiv.offsetTop;
	 
	document.onmousemove = function (e) {
		var event = event || e;
		
		var l = event.clientX - disX;
		var t = event.clientY - disY;
		
		// var oBox = document.createElement('span');
		// oBox.style.left = l + 'px';
		// oBox.style.top = t + 'px';
		// document.body.appendChild(oBox);
		
		iSpeedX = l - lastX;
		iSpeedY = t - lastY;
		
		lastX = l;
		lastY = t;
		
		
		oDiv.style.left = l + 'px';
		oDiv.style.top = t + 'px';
	}
	document.onmouseup = function () {
		document.onmousemove = null;
		document.onmouseup = null;
		startMove();
	}
}


var timer = null;
function startMove() {
	clearInterval(timer);
	timer = setInterval(function () {
		var oDiv = document.getElementById('div1');
		// 垂直方向上重力加速度
		iSpeedY = iSpeedY + 3;
		var l = oDiv.offsetLeft + iSpeedX;
		var t = oDiv.offsetTop +　iSpeedY;
		if (t > document.documentElement.clientHeight - oDiv.offsetHeight) {
			//碰到底边的时候方向改变 
			iSpeedY = iSpeedY *  -1;
			// 弹起的时候 垂直方向上度速度减小 大小改变
			iSpeedY = iSpeedY * 0.8 ;
			
			// 水平方向上也要减小
			iSpeedX = iSpeedX * 0.8;
			t = document.documentElement.clientHeight - oDiv.offsetHeight;
		}else if (t <= 0) {
			iSpeedY = iSpeedY * -1;
			iSpeedX = iSpeedX * 0.8;
			t = 0;
		}
		if (l >= document.documentElement.clientWidth - oDiv.offsetWidth) {
			iSpeedX = iSpeedX *  -1;
			iSpeedX = iSpeedX * 0.8;
			l = document.documentElement.clientWidth - oDiv.offsetWidth;
		}else if (l <= 0) {
			iSpeedX = iSpeedX * -1;
			iSpeedX = iSpeedX * 0.8;
			l = 0;
		}
		 
		if (Math.abs(iSpeedX) < 1) {
			iSpeedX = 0;
		}
		if (Math.abs(iSpeedY) < 1) {
			iSpeedY = 0;
		}
		// 有一瞬间速度为0
		if (iSpeedX == 0 && iSpeedY == 0 && t == document.documentElement.clientHeight - oDiv.offsetHeight) {
			clearInterval(timer);
		}
		document.title = iSpeedX;
		oDiv.style.left = l + 'px';
		oDiv.style.top = t + 'px';
	},30);
}