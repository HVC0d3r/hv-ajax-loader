// Loader#1
$('#loader').hv_ajax_loader({
	delay: 500,
	classes: {
		custom: 'absolute pic50'
	},
	template: '<div class="{{BASE_CLASS}}"><div class="pic"></div></div>'
});
$('#loader').hv_ajax_loader('switch', 'on');
setTimeout(function(){
	$('#loader').hv_ajax_loader('switch', 'off');
}, 2000);


// Loader#2
$('#loader2').hv_ajax_loader({
	delay: 200,
	classes: {
		custom: 'inline pic15',
		parent: 'active'
	},
	insert: 'prepend',
	template: '<div class="{{BASE_CLASS}} pic"></div>'
}).click(function(e){

	$('#loader2').hv_ajax_loader('switch', 'on');
	setTimeout(function(){
		$('#loader2').hv_ajax_loader('switch', 'off');
	}, 1000);
	
});


// Loader#3
$('#loader3').hv_ajax_loader({
	classes: {
		custom: 'inline pic15',
		parent: 'active'
	},
	template: '<div class="{{BASE_CLASS}} pic"></div>'
}).click(function(e){

	$('#loader3').hv_ajax_loader('switch', 'on');
	setTimeout(function(){
		$('#loader3').hv_ajax_loader('switch', 'off');
	}, 1000);
	
});


// Loader#4
$('#loader4').hv_ajax_loader({
	delay: 300,
	classes: {
		custom: 'absolute pic15 left',
		start: 'ajax_loading_start',
		parent: 'ajax_loading active'
	},
	template: '<div class="{{BASE_CLASS}}"><div class="pic"></div></div>'
}).click(function(e){

	$('#loader4').hv_ajax_loader('switch', 'on');
	setTimeout(function(){
		$('#loader4').hv_ajax_loader('switch', 'off');
	}, 2000);
	
});


// Loader#5
$('#loader5').hv_ajax_loader({
	classes: {
		base: 'hv_ajax_loader_pic'
	},
}).click(function(e){

	$('#loader5').hv_ajax_loader('switch', 'on');
	setTimeout(function(){
		$('#loader5').hv_ajax_loader('switch', 'off');
	}, 500);
	
});
