/**
 * @author : Wilfried koua
 * @description : the purpose of the code to change the color of a strong item when mouseover and mouseout a paragraph
 * @param  allBoldItems : HTMLElement
 * @param  paragraph    : HTMLElement
 */

/******************** EXERCICE 3 ********************/


var allBoldItems ;
let paragraph = document.querySelector("p");


(function getBold_items(){
    allBoldItems= document.querySelectorAll("strong");
})();


function highlight(){
    for(let boldItem of allBoldItems) {
        boldItem.style.color = "blue";
    }
}

function return_normal(){
    for(let boldItem of allBoldItems) {
        boldItem.style.color = "black";
    }
}

paragraph.addEventListener('mouseover',highlight)
paragraph.addEventListener('mouseout',return_normal);