/**
 * @author : Wilfried koua
 * @description : the purpose of the code is to calculate a volume using the radius
 * @param  form   : HTMLElement
 * @param  radius : FormElement
 * @param  volume : FormElement
 * @param  button : HTMLElement
 * @returns result : Number
 */

/******************** EXERCICE 4 ********************/


//declaration of variables
let form    = document.forms[0];
let radius  = form.elements.radius;
let volume  = form.elements.volume;
let button  = document.querySelector("#submit");

//listen the event click on the button
button.addEventListener("click",function(event){

    //stop the form redirection
    event.preventDefault();
    //regex to check if the thing put in the input is a number
    const nRegex = new RegExp(/^\d+\.?\d*$/);
    let   result ;
    //check if the radius is not empty and it is a number
    if(nRegex.test(radius.value) && !!radius.value) {
        //calculate the volume
        result = (Math.pow(radius.value,3)*(4 * Math.PI )) / 3 ;
        // affect the value of the volume calculate to the input volume
        volume.value = result;
    }else{
        alert("kindly put numbers for the test");
    }

});


