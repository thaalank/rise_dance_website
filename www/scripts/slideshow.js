$(document).ready(function() {
  var images = [
    "content/photoslideshow0.jpg", //source: https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/34368437_1818341984889222_5804156264795602944_n.jpg?_nc_cat=104&_nc_ht=scontent-lga3-1.xx&oh=1c03d75296baa18942d9dce3f6b0f929&oe=5CAD9236
    "content/photoslideshow01.jpg", //Photo taken by Aubrey Alabanza Akers
    "content/photoslideshow02.jpg", //Photo taken by Aubrey Alabanza Akers
    "content/photoslideshow03.jpg"//Photo taken by Aubrey Alabanza Akers
  ];

  var currentIndex = 0;

  $("#slideshowNext").click(function () {
    if (currentIndex < 3) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    $("#slideshowImage").attr("src", images[currentIndex]);
  });
  $("#slideshowPrevious").click(function () {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = 3;
    }
    $("#slideshowImage").attr("src", images[currentIndex]);
  });
});
