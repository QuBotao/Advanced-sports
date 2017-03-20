		require('./SM.css');
		var oDiv = document.getElementById('div1');
		oDiv.onclick= function () {
			startMove();
		}
		var iSpeed = 20;
		// 加速度 
		var a = -1;
		function startMove () {
			var oDiv = document.getElementById('div1');
			setInterval(function () {
				iSpeed = iSpeed + a;
				oDiv.style.left = oDiv.offsetLeft + iSpeed + 'px';
			}, 30);
		}