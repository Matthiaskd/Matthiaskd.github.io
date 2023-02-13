const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry) => {
          if(entry.isIntersecting){
             entry.target.classList.add('show');
          }
          else{
             entry.target.classList.remove('show');
          }
    });
 });
 
 
 
 const observer2 = new IntersectionObserver((entries)=> {
    entries.forEach((entry) => {
          if(entry.isIntersecting){
             entry.target.classList.add('show_m');
          }
    });
 });
 
 
 
 const hiddens = document.querySelectorAll('.hidden');
 const hid_m = document.querySelectorAll('.hidden_m');
 
 hiddens.forEach((elt) => observer.observe(elt));
 hid_m.forEach((elt) => observer2.observe(elt));
 
 
 window.addEventListener("scroll", function(){
    var nav= this.document.querySelector(".navigation")
    nav.classList.toggle("sticky", window.scrollY>0)
 })
 
 
 ///calc---------------------------------------

document.getElementById('solve_b').onclick=function(){
    if(document.getElementById('solve_i').value!=''){
        var express = document.getElementById('solve_i').value;
        document.getElementById('solve_r').value=eval(express);
    }
}


