//modal login start
function btnlog() {
  document.getElementById("div-login").style.display='block';
}

function closeModal() {
  document.getElementById('div-login').style.display='none';
}

var modal = document.getElementById('div-login');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}
// modal login end


//for search-box overlay start
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}
// search-box overlay end


//event slider start
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides(n) {

  let i;
  let slides = document.getElementsByClassName("mySlides");  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}
// event slider end


//responsive nav start
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}
// responsive nav end


//dropdown btn responsive side-panel start
$(document).ready(function(){
  $("#dropdown-btn1").click(function(){
    $("#container1").slideToggle("slow");
  });

  $("#dropdown-btn2").click(function(){
    $("#container2").slideToggle("slow");
  });

  $("#dropdown-btn3").click(function(){
    $("#container3").slideToggle("slow");
  });

  $("#dropdown-btn4").click(function(){
    $("#container4").slideToggle("slow");
  });
 
});
// dropdown btn responsive side-panel end


// change text main-pic section start
var typed = new Typed('#typed', {
  stringsElement: '#typed-strings', loop:true , typeSpeed:80 , backSpeed:50
});
//change text main-pic section end


// counterup section start
const counterUp = window.counterUp.default

const callback = entries => {
	entries.forEach( entry => {
		const el = entry.target
		if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
			counterUp( el, {
				duration: 2000,
				delay: 10,
			} )
			el.classList.add( 'is-visible' )
		}
	} )
}

const IO = new IntersectionObserver( callback, { threshold: 1 } )

const el = document.querySelector( '.counter' )
IO.observe( el )
//counterup section end


// counterup1 section start
const counterUp1 = window.counterUp.default

const callback1 = entries => {
	entries.forEach( entry => {
		const el1 = entry.target
		if ( entry.isIntersecting && ! el1.classList.contains( 'is-visible' ) ) {
			counterUp( el1, {
				duration: 2000,
				delay: 10,
			} )
			el1.classList.add( 'is-visible' )
		}
	} )
}

const IO1 = new IntersectionObserver( callback1, { threshold: 1 } )

const el1 = document.querySelector( '.counter1' )
IO1.observe( el1 )
//counterup1 section end


// counterup2 section start
const counterUp2 = window.counterUp.default

const callback2 = entries => {
	entries.forEach( entry => {
		const el2 = entry.target
		if ( entry.isIntersecting && ! el2.classList.contains( 'is-visible' ) ) {
			counterUp( el2, {
				duration: 2000,
				delay: 10,
			} )
			el2.classList.add( 'is-visible' )
		}
	} )
}

const IO2 = new IntersectionObserver( callback2, { threshold: 1 } )

const el2 = document.querySelector( '.counter2' )
IO2.observe( el2 )
//counterup2 section end


// slider start 
$(document).ready(function() {
  $("#lightSlider , #secondSlider").lightSlider({
    rtl:true,
    item:4,
    slideMargin:50,
    pager:false,
    loop:true,
    auto:true,
    pauseOnHover: true,
    speed:3000,
    pause:4000,
    enableTouch:false,
    enableDrag:false,
    
    responsive: [
      {
        breakpoint:1200,
        settings:{
          item:4,
          slideMargin:220
        }
      },
      {
        breakpoint:992,
        settings:{
          item:3,
          slideMargin:180
        }
      },
      {
        breakpoint:768,
        settings:{
          item:2,
          slideMargin:70
        }
      },
      {
        breakpoint:576,
        settings:{
          item:2,
          slideMargin:200
        }
      },
      {
        breakpoint:400,
        settings:{
          item:1,
          slideMargin:50
        }
      }
    ]
  }); 
});
// slider end


// for back to top animate start
$(document).ready(function(){
  $('#go-top').click(function(){
    $('body,html').animate({
      scrollTop:0
    },1500)
    return false;
  })
})
// for back to top animate end
    