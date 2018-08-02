

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");


$overlay.append($image);

var $leftArrow = $("<div id='leftArrow'></div>");
var $rightArrow = $("<div id='rightArrow'></div>");
var $closeLightbox = $("<div id='closeLightbox'></div><div style='clear:both'></div>");

$image.before($closeLightbox);
$image.before($leftArrow);
$image.after($rightArrow);


$overlay.append($caption);


$("body").append($overlay);


$("#imageGallery a").click(function(event){
  event.preventDefault();

  getCurrentImage(this);


  $overlay.show();
});

$leftArrow.click(function(){
  getPrevImage();
});

$rightArrow.click(function(){
  getNextImage();
});

function getCurrentImage (currentImage) {
    thisImage = currentImage;
    var imageLocation = $(currentImage).attr("href");

    $image.attr("src", imageLocation);


    var captionText = $(currentImage).children("img").attr("title");
    $caption.text(captionText);
}

function getPrevImage() {
    imageParent = $(thisImage).parent().prev();
    if(imageParent.length!=0){
      thisImage = $(imageParent).children("a");

    }
    getCurrentImage(thisImage);

}

function getNextImage() {
    imageParent = $(thisImage).parent().next();
    if(imageParent.length!=0){
    thisImage = $(imageParent).children("a");

    }
    getCurrentImage(thisImage);
}


$closeLightbox.click(function(){

  $overlay.hide();
});
