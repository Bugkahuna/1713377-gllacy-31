const feedback = document.querySelector(".feedback");
const feedbackFormBtn = document.querySelector(".relation-btn");
const siteShadow = document.querySelector(".multyplay-layer");
const feedbackForm = feedback.querySelector(".feedback-form")
const feedbackFormCloseBtn=feedback.querySelector(".feedeback_close-btn");
const feedbackFormName = feedback.querySelector("[name=feedback-name]");
const feedbackFormEmail = feedback.querySelector("[name=feedback-email]");



feedbackFormBtn.addEventListener("click", function(evt){
    evt.preventDefault();
    siteShadow.classList.add("multyplay-layer_show");
    feedback.classList.add("feedback_show");
    feedbackFormName.focus();
});

feedbackForm.addEventListener("submit", function(evt){
  if(!feedbackFormName.value || !feedbackFormEmail.value) {
    evt.preventDefault();
    feedback.classList.remove("feedback_error");
    feedback.offsetWidth = feedback.offsetWidth;
    feedback.classList.add("feedback_error");
  }

});


feedbackFormCloseBtn.addEventListener("click", function(evt){
  evt.preventDefault();
  siteShadow.classList.remove("multyplay-layer_show");
  feedback.classList.remove("feedback_show");
  feedback.classList.remove("feedback_error");
});

siteShadow.addEventListener("click", function(evt){
  evt.preventDefault();
  siteShadow.classList.remove("multyplay-layer_show");
  feedback.classList.remove("feedback_show");
  feedback.classList.remove("feedback_error");
});

window.addEventListener("keydown", function(evt){
  if(evt.key==="Escape" || evt.key==="Esc") {
    if(feedback.classList.contains("feedback_show") && siteShadow.classList.contains("multyplay-layer_show")){
      siteShadow.classList.remove("multyplay-layer_show");
      feedback.classList.remove("feedback_show");
      feedback.classList.remove("feedback_error");
    }
  }
});


