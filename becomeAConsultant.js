
    document.querySelector('#btn1').addEventListener('click',signUp);
    function signUp(){
        window.location.href='joinnow.html';
    }

    document.querySelector('#enrollBtn').addEventListener('click',signUp);
    function signUp(){
        window.location.href='joinnow.html';
    }

    // var acc = document.getElementsByClassName("accordion");
    // var i;
    // for (i = 0; i < acc.length; i++) {
    // acc[i].addEventListener("click", function() {
    //     this.classList.toggle("active");
    //     var panel = this.nextElementSibling;
    //     if (panel.style.display === "block") {
    //     panel.style.display = "none";
    //     } else {
    //     panel.style.display = "block";
    //     }
    // });
    // }

    var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

