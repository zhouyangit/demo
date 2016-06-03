$(function() {
	//alert($(window).height());
	$('.ClickMe').click(function() {
		$('#code').center();
		$('#goodcover').show();
		$('#code').fadeIn();
	});

	$('#goodcover').click(function() {
		$('#code').hide();
		$('#goodcover').hide();
	});
	/*var val=$(window).height();
	var codeheight=$("#code").height();
    var topheight=(val-codeheight)/2;
	$('#code').css('top',topheight);*/
	jQuery.fn.center = function(loaded) {
		var obj = this;
		body_width = parseInt($(window).width());
		body_height = parseInt($(window).height());
		block_width = parseInt(obj.width());
		block_height = parseInt(obj.height());

		left_position = parseInt((body_width / 2) - (block_width / 2) + $(window).scrollLeft());
		if (body_width < block_width) {
			left_position = 0 + $(window).scrollLeft();
		};

		top_position = parseInt((body_height / 2) - (block_height / 2) + $(window).scrollTop());
		if (body_height < block_height) {
			top_position = 0 + $(window).scrollTop();
		};

		if (!loaded) {

			obj.css({
				'position': 'absolute'
			});
			obj.css({
				'top': ($(window).height() - $('#code').height()) * 0.5,
				'left': left_position
			});
			$(window).bind('resize', function() {
				obj.center(!loaded);
			});
			$(window).bind('scroll', function() {
				obj.center(!loaded);
			});

		} else {
			obj.stop();
			obj.css({
				'position': 'absolute'
			});
			obj.animate({
				'top': top_position
			}, 200, 'linear');
		}
	}

})

$('.joy-add-ls').hide();
$(".preview").hide();
//选择内容
$('.joy-alert-list li').click(function() {
	$(this).toggleClass('current');
});

//点击确定
$('.joy-btn a').click(function() {
	var currentList = $(".current").length;

	if (currentList < 3) {
		alert('请至少选择3项内容')
	} else {

		$(".current").each(function() {
			var val = '<div class="joy-close">' + $(this).html() + '<span></span></div>';
			$('.joy-add').hide();
			$('.joy-add-ls').show();
			$('.joy-add-ls').prepend(val);
		});
		$('#code').hide();
		$('#goodcover').hide();
		$(".preview").show();
	}
});
//删除
$(".joy-close span").live("click", function() {
	$(this).parent().remove();
});

$(".preview").click(function(){
	$(".joy-edit-content b").text('预览模板');
	$(".joy-img-header img").attr('src','img/pre-header.png');
	$(".joy-img-center .joy-add").hide();
	$(".joy-close").css('border','none');
	$(".joy-close span").hide();
	$(".addImg").hide();
	$(this).hide();
	$(".joy-img-footer img").attr('src','img/pre-footer.png');
})

