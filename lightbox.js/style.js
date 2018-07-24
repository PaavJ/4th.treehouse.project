
    lightbox.option({
      'resizeDuration': 100,
      'wrapAround': true,
      'showImageNumberLabel': true,
      'alwaysShowNavOnTouchDevices': true,
      'maxWidth': 400,


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
    var myInput, filter, img, alt, a;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("alt");
    li = ul.getElementsByTagName('a');

    for (i = 0; i < a.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

function myFunction() {

    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
