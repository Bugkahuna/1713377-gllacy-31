const SlideBtn_1 = document.querySelector(".button-slide_1");
const SlideBtn_2 = document.querySelector(".button-slide_2");
const SlideBtn_3 = document.querySelector(".button-slide_3");

const slideImg = document.querySelector(".site-wrapper");

const slideTitle_1 = document.querySelector(".slide-1");
const slideTitle_2 = document.querySelector(".slide-2");
const slideTitle_3 = document.querySelector(".slide-3");




SlideBtn_1.addEventListener("click", function(evt){
  evt.preventDefault();
  if(SlideBtn_2.classList.contains("button-slide_current")){
    SlideBtn_2.classList.remove("button-slide_current");
  }
  if(SlideBtn_3.classList.contains("button-slide_current")){
    SlideBtn_3.classList.remove("button-slide_current");
  }
  SlideBtn_1.classList.add("button-slide_current");


  if(slideImg.classList.contains("site-wrapper-2")){
    slideImg.classList.remove("site-wrapper-2");
  }
  if(slideImg.classList.contains("site-wrapper-3")){
    slideImg.classList.remove("site-wrapper-3");
  }
  slideImg.classList.add("site-wrapper-1");

  if(slideTitle_2.classList.contains("slide-current")){
    slideTitle_2.classList.remove("slide-current");
  };
  if(slideTitle_3.classList.contains("slide-current")){
    slideTitle_3.classList.remove("slide-current");
  };
  slideTitle_1.classList.add("slide-current");

});





SlideBtn_2.addEventListener("click", function(evt){
  evt.preventDefault();
  if(SlideBtn_1.classList.contains("button-slide_current")){
    SlideBtn_1.classList.remove("button-slide_current");
  }
  if(SlideBtn_3.classList.contains("button-slide_current")){
    SlideBtn_3.classList.remove("button-slide_current");
  }
  SlideBtn_2.classList.add("button-slide_current");


  if(slideImg.classList.contains("site-wrapper-1")){
    slideImg.classList.remove("site-wrapper-1");
  }
  if(slideImg.classList.contains("site-wrapper-3")){
    slideImg.classList.remove("site-wrapper-3");
  }
  slideImg.classList.add("site-wrapper-2");

  if(slideTitle_1.classList.contains("slide-current")){
    slideTitle_1.classList.remove("slide-current");
  };
  if(slideTitle_3.classList.contains("slide-current")){
    slideTitle_3.classList.remove("slide-current");
  };
  slideTitle_2.classList.add("slide-current");
});





SlideBtn_3.addEventListener("click", function(evt){
  evt.preventDefault();
  if(SlideBtn_1.classList.contains("button-slide_current")){
    SlideBtn_1.classList.remove("button-slide_current");
  }
  if(SlideBtn_2.classList.contains("button-slide_current")){
    SlideBtn_2.classList.remove("button-slide_current");
  }
  SlideBtn_3.classList.add("button-slide_current");

  if(slideImg.classList.contains("site-wrapper-1")){
    slideImg.classList.remove("site-wrapper-1");
  }

  if(slideImg.classList.contains("site-wrapper-2")){
    slideImg.classList.remove("site-wrapper-2");
  }

  slideImg.classList.add("site-wrapper-3");

  if(slideTitle_1.classList.contains("slide-current")){
    slideTitle_1.classList.remove("slide-current");
  };
  if(slideTitle_2.classList.contains("slide-current")){
    slideTitle_2.classList.remove("slide-current");
  };
  slideTitle_3.classList.add("slide-current");
});
