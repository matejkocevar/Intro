/*** Matej Kocevar ***/


function dodajPremik(){
    $('.M').addClass('premik');
    $('.K1').addClass('premik');
    $('.K2').addClass('premik');
    console.log("Logotip se je odprl.")
}

window.onload = function() {
    $(document).ready(function(){

        $('.gumbPotrdi').click(function(){
            dodajPremik()


        });
    });
};