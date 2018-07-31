
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



    $('#search-bar').keyup(function(){
        var valThis = $(this).val().toLowerCase();
        var noresult = 0;
        if(valThis == ""){

            $('.galleryList > li').show();
            noresult = 1;
            $('.no-results-found').remove();
        } else {
            $('.galleryList > li').each(function(){
                var text = $(this).text().toLowerCase();
                var match = text.indexOf(valThis);
                if (match >= 0) {
                    $(this).show();
                    noresult = 1;
                    $('.no-results-found').remove();
                } else {
                    $(this).hide();
                }
            });
       };
        if (noresult == 0) {
            $(".galleryList").append('<li class="no-results-found">No results found.</li>');
        }
    });
