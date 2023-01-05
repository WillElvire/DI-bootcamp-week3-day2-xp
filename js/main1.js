/**
 * @author : Wilfried koua
 * @description : the purpose of this code is to master dom event in javscript
 * @params   : all parameters are HTMLElement Type
 */

/******************** EXERCICE 1 ********************/

//setting up variables

let h1      = document.querySelector("h1");
let article = document.querySelector("article");
let h2      = document.querySelector("h2");
let h3      = document.querySelector("h3");
let button  = document.getElementById("button");
let paraphs = document.querySelectorAll("article > p ");

//console the H1 selected 
console.log(h1.textContent);

//remove the last paragraph
article.removeChild(article.lastElementChild);

// set the background of h2 to red when it is clicked
h2.addEventListener("click",function(){
    this.style.background = "red";
})

// after h3 clicked display it to none
h3.addEventListener("click",function(){
    this.style.display  = "none";
});

// sets paragraph to bold
button.addEventListener("click",function(){
   for(let paragraph of paraphs){
      paragraph.style.fontWeight = "bold";
   }
})


h1.addEventListener("click",function(){
    this.style.fontSize = `${ramdomize()}px`;
})

function ramdomize(){
    return Math.random() * 100;
}