// Globale variabelen 
var afbeeldingen = new Array('galaxy-s4.png','ipad.jpg','laptop.jpg');
var max = afbeeldingen.length;
var randomIndex=0;
function showMedia() {
    randomIndex = Math.floor((Math.random() * max));
    document.getElementById('media').src = afbeeldingen[randomIndex];
}
fucntion formcheck(thisForm) {
    postcode = thisForm.postcode.value;
    for(var i=0; i < postcode.length; i++) {
        var c = postcode.charAt(i);
        if(c == ' ') {
            alert("postcode mag geen spatie hebben");
            thisForm.postcode.focus();
            return false;
        }
    }
}
function herhalen(){
    document.custform.passwoord2.value = 
        document.custform.passwoord.value;
}