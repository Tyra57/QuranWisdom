//comment

function showComment(){
  var commentArea = document.getElementById("comment-area");
  commentArea.classList.remove("hide");
}

//reply
function showReply(id){
  var replyArea = document.getElementById(id);
  replyArea.classList.remove("hide");
}
function showReply(formId) {
  var form = document.getElementById(formId);
  if (form.classList.contains('hide')) {
      form.classList.remove('hide');
  } else {
      form.classList.add('hide');
  }
}