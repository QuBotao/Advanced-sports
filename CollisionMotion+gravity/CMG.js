require('./CMG.css');
var oDiv = document.getElementById('div1');
	oDiv.onclick = function () {
		startMove();
	}
	//X轴速度  Y轴速度
	var iSpeedX = 150;
	var iSpeedY = 8; 
	var g = 3;
	function startMove() {
		setInterval(function () {
			var oDiv = document.getElementById('div1');
			// 垂直方向上重力加速度
			iSpeedY = iSpeedY + g;
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
			
			document.title = iSpeedX;
			oDiv.style.left = l + 'px';
			oDiv.style.top = t + 'px';
		},30);
	}