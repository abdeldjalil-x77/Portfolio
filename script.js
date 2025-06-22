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


















  const scriptURL = 'https://script.google.com/macros/s/AKfycbyLgYWp6X4DPegKmHCdCCxWz770_FdKngaOU_77VvCnFfM54w3HSeFrTasvUgohFYAp/exec';

  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = this.querySelector('[name="name"]').value;
    const email = this.querySelector('[name="email"]').value;
    const message = this.querySelector('[name="message"]').value;
  
    const formData = { name, email, message };
  
  
    fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify(formData)
    })
    .then(response => {
      alert("✅ Message sent successfully!");
      this.reset();
    })
    .catch(error => {
      alert("❌ Failed to send message: " + error.message);
    });
  });
  
  

  