require('./RMF2.css');
/*
			style.left  速度  加速之后   累计误差
			0           3.5   3.5->3    0.5
			3           3.2   6.2->6    0.2+ 0.5=0.7
			
			误差产生原因是 px不是小数 所以offsetLeft不能取出小数
			那我们就用 变量存储
		*/
		
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
			var left = obj.offsetLeft;			
			clearInterval(obj.timer);
			obj.timer = setInterval(function () {
				iSpeed = iSpeed + (iTarget - obj.offsetLeft) / 5; 
				iSpeed = iSpeed * u; 
				//速度和left 都是小数必须取整
				if (Math.abs(iSpeed) < 1 && Math.abs(left - iTarget) < 1) {
					clearInterval(obj.timer);
				}				
				left = left + iSpeed;
				obj.style.left = left + 'px';	
				document.title = 'bg:' + obj.offsetLeft + '| target:' + iTarget	;		
			}, 30);
		}