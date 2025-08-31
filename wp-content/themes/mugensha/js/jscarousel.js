//トップページカルーセル
	$(function(){
		
		//スライドのサイズ
		var carousel_wrap_size = $("#carousel-wrap").css("width");
		var carousel_wrap_size = parseInt(carousel_wrap_size)+1;
		
		//初期設定
		$("#carousel-inner").css("width",carousel_wrap_size*$("#allcarou li").size()+"px");
		$("#carousel-inner #allcarou li:last").prependTo("#allcarou");
		$("#carousel-inner").css("margin-left","-"+carousel_wrap_size+"px");

		//戻るボタン
		$("#carousel-prev").click(function(){
			$("#carousel-inner").animate({
				marginLeft : parseInt($("#carousel-inner").css("margin-left"))+carousel_wrap_size+"px"
				},"slow","swing",
				function(){
					$("#carousel-inner").css("margin-left","-"+carousel_wrap_size+"px")
					$("#carousel-inner #allcarou li:last").prependTo("#allcarou");
				});
		});

		//進むボタン
		$("#carousel-next").click(function(){
			$("#carousel-inner").animate({
				marginLeft : parseInt($("#carousel-inner").css("margin-left"))-carousel_wrap_size+"px"
				},"slow","swing" , 
			function(){
				$("#carousel-inner").css("margin-left","-"+carousel_wrap_size+"px")
				$("#carousel-inner #allcarou li:first").appendTo("#allcarou");
			});
		});
		
		//ループ設定
		//var timerID = setInterval(function(){$("#carousel-next").click()},5000);
		//$("#carousel-prev img,#carousel-next img").click(function(){ clearInterval(timerID); });
	});