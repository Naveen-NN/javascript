document.__proto__.display = function ( value ){
    var divElement   = document.createElement("div"); 
    var display  = "";  
    if(typeof(value)=== "object"){
        display = JSON.stringify(value);
    }
    else  {
        display = String(value);
    }
    var textNode   =  document.createTextNode(display); 
    divElement.appendChild(textNode);  
    document.body.setAttribute("style","background-color: black; color: white;font-family:verdana; font-size: 1em");
    document.body.appendChild(divElement);
} 