// JavaScript Document
$(document).ready(function(){
	var timer=null;
	var number=0;
	var stop=0;
	var random=Math.floor(Math.random()*10000);
	function add_active(){
		if(number==8){number=0};
		$("#box div").eq(number).addClass("active").siblings("div").removeClass("active");
		number++;
	}
	$("#btn").click(function(){
		if(stop==0){
			timer=setInterval(add_active,30);
			$("#btn").text("开奖");
			stop++;
		}else{
			var text=$("#box div").eq(number-1).text();
			clearInterval(timer);
			if(text!="谢谢惠顾"){
				alert("恭喜你获得了"+text);
				$("#btn").text(text);
			}else{
				alert("哎~运气不好，没中奖");
				$("#btn").text(text);
			}
		}
	});
});