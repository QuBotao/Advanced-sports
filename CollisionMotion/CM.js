require('./CM.css');

var oDiv = document.getElementById('div1');
		oDiv.onclick = function () {
			startMove();
		}
		//X轴速度  Y轴速度
		var iSpeedX = 6;
		var iSpeedY = 8; 
		function startMove() {
			setInterval(function () {
				var oDiv = document.getElementById('div1');
				var l = oDiv.offsetLeft + iSpeedX;
				var t = oDiv.offsetTop +　iSpeedY;
				// 碰撞检测  div到达底边时 Y轴速度变化 越过底边和 右边的时候会出滚动条 
				if (t > document.documentElement.clientHeight - oDiv.offsetHeight) {
					iSpeedY = iSpeedY *  -1;
					t = document.documentElement.clientHeight - oDiv.offsetHeight;
				}else if (t <= 0) {
					iSpeedY = iSpeedY * -1;
				}
				if (l >= document.documentElement.clientWidth - oDiv.offsetWidth) {
					iSpeedX = iSpeedX *  -1;
					l = document.documentElement.clientWidth - oDiv.offsetWidth;
				}else if (l <= 0) {
					iSpeedX = iSpeedX * -1;
				}
				oDiv.style.left = l + 'px';
				oDiv.style.top = t + 'px';
			},30);
		}