
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

    var input, filter, a;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    var anchor = document.querySelectorAll('.gallery a');

    for (i = 0; i < anchor.length; i++) {
        a = anchor[i];

        var data = a.getAttribute('data-title');

        if (data.toUpperCase().indexOf(filter) > -1) {

            anchor[i].parentElement.style.display = "";

         } else {
            anchor[i].parentElement.style.display = "none";
        }
      }
    }
