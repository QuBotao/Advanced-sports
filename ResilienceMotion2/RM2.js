require('./RM2.css');
		// 在目标点左面的时候加速运动 右面的时候减速运动	
		var oDiv = document.getElementById('div1');
		oDiv.onclick = function () {
			startMove(300);
		}
		var iSpeed = 0;
		// 弹性运动的加速度 随着距离 目标点进 则越小 这个特点与缓冲运动的速度相似
		var a;
		function startMove (iTarget) {
			var oDiv = document.getElementById('div1');
			setInterval(function () {
				// if (oDiv.offsetLeft < iTarget) {
				// 	iSpeed = iSpeed + (iTarget - oDiv.offsetLeft) / 50;
				// }else {
				// 	iSpeed = iSpeed - (oDiv.offsetLeft - iTarget) / 50;
				// }
				iSpeed = iSpeed + (iTarget - oDiv.offsetLeft) / 50;
				oDiv.style.left = oDiv.offsetLeft + iSpeed + 'px';				
			}, 30);
		}