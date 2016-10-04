var $f1t = $('.f-1-t');
var $f1m = $('.f-1-m');

var $f2t = $('.f-2-t');
var $f2m = $('.f-2-m');

var $f3t = $('.f-3-t');
var $f3m = $('.f-3-m');

var $f4t = $('.f-4-t');
var $f4m = $('.f-4-m');

var $f5t = $('.f-5-t');
var $f5m = $('.f-5-m');

var $f6t = $('.f-6-t');
var $f6m = $('.f-6-m');



$f1m.on('mouseover', function () {
	$f1t.addClass('show');
});

$f1m.on('mouseout', function () {
	$f1t.removeClass('show');
})

$f2m.on('mouseover', function () {
	$f2t.addClass('show');
});

$f2m.on('mouseout', function () {
	$f2t.removeClass('show');
})
