// MOVE运动框架1.0	
		function move(obj, name, target) {
			clearInterval(obj.timer)
			// alert(getComputedStyle(obj)[name])
			obj.timer = setInterval(function() {
				let nowStyle = parseFloat(getComputedStyle(obj)[name])
				if (nowStyle == target) {
					clearInterval(obj.timer)
				} else {
					let speed = (target - nowStyle) / 10
					obj.style[name] = nowStyle + speed + 'px'
				}
			}, 30)
		}
