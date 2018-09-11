$('.setting-search').click(function() {
	$('.setting-dialog').toggle(300);
	$('.triangle').slideUp(200);
	$('.catalog-application-catalog').slideUp(200);
});

$('.img-catalog-app').click(function () {
	$('.triangle').slideToggle(200);
	$('.catalog-application-catalog').slideToggle(200);
	$('.setting-dialog').slideUp(200);
});
$('.r-user').click(function () {
	$('.r-user-profile').slideToggle(150);
});

var check = 2;
$('.nav-menu').click(function() {
	if (check%2 == 0) {
		$('.nav-logo').toggle(1);
		$('.search-box').css('min-width','390px');
		$('#ip-search').css('width','80%');
		$('.nav-panel-l-r').css('width','27.8%');
		$('.catalog-application-catalog').css('left','24px');
		$('.setting-dialog').css('width','28.5%');
		$('.nav-menu').css('box-shadow','7px -2px 36px -5px #003f7f');
	}else{
		$('.nav-logo').toggle(1);
		$('.search-box').css('min-width','300px');
		$('#ip-search').css('width','74%');
		$('.nav-panel-l-r').css('width','20.4%');
		$('.catalog-application-catalog').css('left','206px');
		$('.setting-dialog').css('width','22%');
		$('.nav-menu').css('box-shadow','0 0 0 0');
	}
	check++;
	console.log(check);
});