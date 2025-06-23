let btnS = document.getElementById('btnS')
window.onscroll = function(){
    if(scrollY >=180){btnS.style.display = 'block';}
    else{ btnS.style.display = 'none'; }

}





function revealOnScroll() {
    const elements = document.querySelectorAll('.reveal');
  
    elements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (top < windowHeight - 100) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible');
      }
    });
  }
  
  // تشغيل الدالة عند التمرير
  window.addEventListener('scroll', revealOnScroll);
  // وتشغيلها عند بداية تحميل الصفحة
  window.addEventListener('load', revealOnScroll);
















  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const messageBox = document.getElementById("form-message");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const formData = new FormData(form);
  
      fetch("https://formsubmit.co/abdeldjaliltounsi932@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          messageBox.innerText = " Thanks! Your message has been sent.";
          form.reset();
        } else {
          messageBox.innerText = " Error sending message. Please try again.";
        }
      })
      .catch(error => {
        messageBox.innerText = " Network error. Please try again.";
      });
    });
  });

  