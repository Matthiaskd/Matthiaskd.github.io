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
 
/* document.getElementsByClassName('').addEventListener('onmouseenter',function(){
 
 })*/

//poly...............................................................

/*function solve(exp){
	var exp_l = exp.length;
	var deg_2 = 0;
	var deg_1 = 0;
	var deg_0 = 0;
	var tmp = 0;
	var check = 0;
	for(let i = 0; i<exp_l; i++){
		var curr = exp[i];
		if(curr == 'x')
			continue;
		else if(curr == '^')
			check = 1;
		else{
			if(check == 1){
				if(curr == '0')
					deg_0 = curr;
				else if (curr == '1')
					deg_1 = curr;
				else
					deg_2 = curr;
				check = 0;
			}
			else{
				tmp += curr - '0';
			}
		}
	}
	var delta = deg_1*deg_1 - 4*deg_0*deg_2;
	var x1 = (-deg_1-delta)/(2*deg_0);
	var x2 = (deg_1-delta)/(2*deg_0);
	return x1;
}

document.getElementById('solve_poly').onclick=function(){
	if(document.getElemtById('input_poly').value == ''){
		document.getElementById('poly_r').value = " ";
	}
	else{
		var express = document.getElementById('input_poly').value;
		document.getElementById('poly_r').value = solve(express);
	}
}*/




