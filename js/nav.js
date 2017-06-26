/**
 
 @Name : 炫彩导航组件
 @Author: 蔡双临
 @Date: 2017-4-1
 @QQ邮箱: 570255067@qq.com
 @Site：http://github.linxianshen.io
 
 */


;(function(){
	const target = document.querySelector('.target');  //获取下划标
	const links = document.querySelectorAll('.mynav a');  //获取所有导航a标签
	const colors = ['aquamarine', 'blanchedalmond', 'chocolate', 'pink', 'lightblue'];  //初始化颜色列表
  const clip = document.querySelector('.path');  //获取头部导航 需要裁切部分
  var winWidth;   //浏览器窗口高度
  const triangleDownW = 100;  //导航三角的底边

  //获取窗口宽度
  if (window.innerWidth)  
  winWidth = window.innerWidth;
  else if ((document.body) && (document.body.clientWidth))  //ie
  winWidth = document.body.clientWidth;

	for(let i = 0; i < links.length; i++){
		links[i].addEventListener("click", (e) => e.preventDefault());
		links[i].addEventListener('mouseenter', mouseenterFunc);
	}

	//鼠标移入事件
	function mouseenterFunc(){
		if(!this.parentNode.classList.contains("active")){
			for(let i = 0; i < links.length; i++){
				if(links[i].parentNode.classList.contains('active')){
					links[i].parentNode.classList.remove('active');
				}
				links[i].style.opacity = '0.25';
			}
			this.parentNode.classList.add('active');
			this.style.opacity = '1';

			const width = this.getBoundingClientRect().width;
  		const height = this.getBoundingClientRect().height;
  		const left = this.getBoundingClientRect().left + window.pageXOffset;
  		const top = this.getBoundingClientRect().top + window.pageYOffset;
  		const color = colors[Math.floor(Math.random() * colors.length)];

  		target.style.width = `${width}px`;
  		target.style.height = `${height}px`;
  		target.style.left = `${left}px`;
  		target.style.top = `${top}px`;
  		target.style.borderColor = color;
  		target.style.transform = "none";

      let center = left + width / 2;  //对应菜单li的中心的位置
      let centerRight = center + triangleDownW / 2;
      let centerLeft = center - triangleDownW / 2;

      let clipPath = `polygon(0px 0px,${winWidth}px 0px,${winWidth}px 60px,${centerRight}px 60px,${center}px 80px,${centerLeft}px 60px,0 60px)`;
      // let clipPath = `polygon(0% 0%,100% 0%,100% 80%,50% 80%,40% 100%,30% 80%,0% 80%)`;

      clip.style['-webkit-clip-path'] = clipPath;
      clip.style['clip-path'] = clipPath;
		}

  	function resizeFunc() {
      	const active = document.querySelector(".mynav li.active");

      	if (active) {
          	const left = active.getBoundingClientRect().left + window.pageXOffset;
          	const top = active.getBoundingClientRect().top + window.pageYOffset;

          	target.style.left = `${left}px`;
          	target.style.top = `${top}px`;
      	}
  	}

  	window.addEventListener("resize", resizeFunc);
	}


})();
