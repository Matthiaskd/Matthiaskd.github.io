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
 function demo_abac(exp){
     var exp_l = exp.length;
     var op1 = 0;
     var op2 = 0;
     var op ='';
     var o_t=0;
     for(let i = 0; i<exp_l; i++){
         var curr = exp[i];
         if(curr == '*' || curr== '/' || curr=='+' || curr== '-'){
             o_t +=1;
             op=curr;
             if(o_t>1){
                 break;
             }
         }
         else if (curr!=' ' && (curr>='0' && curr<='9')){
             if(o_t==0){
                 op1*=10;
                 op1+=curr-'0';
             }
             else{
                 op2*=10;
                 op2+=curr-'0';
             }
         }
     }
     if(op==''){
         console.log(1);
     }
     else{
         if(op=='/'){
             return op1/op2;
         }
         else if(op=='*'){
             return op1*op2;
         }
         else if(op=='+'){
             return op1+op2;
         }
         else if(op=='-'){
             return op1-1
         }
         else{
             return -99;
         }
     }
 
 }
 document.getElementById('solve_b').onclick=function(){
     if(document.getElementById('solve_i').value==''){
         document.getElementById('solve_r').value=" "
     }
     else{
         var express = document.getElementById('solve_i').value;
         document.getElementById('solve_r').value=demo_abac(express);
     }
     
 }
 
 document.getElementsByClassName('').addEventListener('onmouseenter',function(){
 
 })

