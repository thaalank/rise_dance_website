$(document).ready(function () {
  // Get modal
  var modal = document.getElementById('myModal');
  // Get images
  var img1 = document.getElementById('img1');
  var img2 = document.getElementById('img2');
  var img3 = document.getElementById('img3');
  var img4 = document.getElementById('img4');
  var img5 = document.getElementById('img5');
  var img6 = document.getElementById('img6');
  var img7 = document.getElementById('img7');
  var img8 = document.getElementById('img8');
  var img9 = document.getElementById('img9');
  var modalImg = document.getElementById("img01");

  // Functions

  img1.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
  }
  img2.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
  }
  img3.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
  }
  img4.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
  }
  img5.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
  }
  img6.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
  }
  img7.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
  }
  img8.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
  }
  img9.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
  }

  //closing the modal
  var closeButton = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  closeButton.onclick = function() {
    modal.style.display = "none";
  }
})
