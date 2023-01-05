/**
 * @author : Wilfried koua
 * @description : the purpose of this code is to master dom event in javscript
 * @params   : all parameters are HTMLElement Type
 */

/******************** EXERCICE 2 ********************/

//setting up variables
let form    = document.forms[0];
let fname   = form.elements.fname;
let lname   = form.elements.lname;
let button  = document.querySelector("#submit")
let answers = document.querySelector(".usersAnswer");
let li1     = document.createElement("li");
let li2     = document.createElement("li");

console.log(form);
console.log(fname);
console.log(fname);


button.addEventListener("click",function(event){
    event.preventDefault();
    console.log(fname.value);
    if(!!fname.value && !!lname.value) {

        li1.innerHTML = fname.value;
        li2.innerHTML = lname.value;
        answers.appendChild(li1);
        answers.appendChild(li2);
        
    }else{
        alert("kindly fill all fields");
    }
})