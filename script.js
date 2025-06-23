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
















  

  