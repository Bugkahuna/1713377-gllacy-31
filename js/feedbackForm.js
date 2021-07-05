const feedbackForm = document.querySelector(".feedback");
const feedbackFormBtn = document.querySelector(".relation-btn");
const siteShadow = document.querySelector(".multyplay-layer");
const feedbackFormCloseBtn=document.querySelector(".feedeback_close-btn");
const feedbackFormName = feedbackForm.querySelector("[name=feedback-name]");

feedbackFormBtn.addEventListener("click", function(evt){
    evt.preventDefault();
    siteShadow.classList.add("multyplay-layer_show");
    feedbackForm.classList.add("feedback_show");
    feedbackFormName.focus();
});


feedbackFormCloseBtn.addEventListener("click", function(evt){
  evt.preventDefault();
  siteShadow.classList.remove("multyplay-layer_show");
  feedbackForm.classList.remove("feedback_show");
});

siteShadow.addEventListener("click", function(evt){
  evt.preventDefault();
  siteShadow.classList.remove("multyplay-layer_show");
  feedbackForm.classList.remove("feedback_show");
});

window.addEventListener("keydown", function(evt){
  if(evt.key==="Escape" || evt.key==="Escc") {
    if(feedbackForm.classList.contains("feedback_show") && siteShadow.classList.contains("multyplay-layer_show")){
      siteShadow.classList.remove("multyplay-layer_show");
      feedbackForm.classList.remove("feedback_show");
    }
  }
});


