//スムーズスクロール用JS
$(function(){
	$('a[href^=#]').click(function(){
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var headerHight = $(".header").height();
		if(href == "#bodytop"){
			var position = target.offset().top-headerHight; //ヘッダの高さ分位置をずらす
		}else{
			var position = target.offset().top-headerHight-35; //ヘッダの高さ分位置をずらす
		}
		$("html, body").animate({scrollTop:position},"slow","swing");
		return false;
	});
});