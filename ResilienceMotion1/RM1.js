require('./RM1.css');
		// 在目标点左面的时候加速运动 右面的时候减速运动	
		var oDiv = document.getElementById('div1');
		oDiv.onclick = function () {
			startMove(300);
		}
		var iSpeed = 0;
		// 加速度
		var a = 2;
		function startMove (iTarget) {
			var oDiv = document.getElementById('div1');
			setInterval(function () {
				if (oDiv.offsetLeft < iTarget) {
					iSpeed = iSpeed + a;
				}else {
					iSpeed = iSpeed - a;
				}
				oDiv.style.left = oDiv.offsetLeft + iSpeed + 'px';				
			}, 30);
		}