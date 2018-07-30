
    lightbox.option({
      'resizeDuration': 100,
      'wrapAround': true,
      'showImageNumberLabel': true,
      'alwaysShowNavOnTouchDevices': true,
      'maxWidth': 800,


    });


    const atr = $('img');
    let div = $('<div>').addClass('desc');
    $('.gallery').append(div);
    const $desc = $('.desc');

    for (var i = 0; i < atr.length; i++) {
    	let getAttr = atr[i].getAttribute('atr');
    	$($desc[i]).html(getAttr);
    }



function myFunction() {

    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
    var = document.querySelectorAll('a');

    for (i = 0; i < var.length; i++) {
        a = anchor[i].getElementsByTagName("a")[0];
        var = anchor[i].getAttribute('data-title'); {
        if (.title().toUpperCase().indexOf(filter) > -1) {
            anchor[i].style.display = "";
        } else {
            anchor[i].style.display = "none";
        }
    }
}
