function showaddition() {
    $.ajax({
        url: "../vues/additions.html",
        // dataType: "html",
        type: "GET",
        success: function(response) {
            document.getElementById("container").innerHTML = response
        },
        error: function(error) {
            console.log("error;", error)
        },


    });
}

function addition(a = 0, b = 0) {
    let numero1 = document.getElementById("numbahone").value;
    let numero2 = document.getElementById("numbahtwu").value;
    // $resultat = $number_1 * $number_2;
    // return $resultat;

    document.getElementById("resultat").innerHTML = "<small>" + numero1 + '+' + numero2 + " = " + "</small>" + "<p style='font-size:5rem'>" + Number(numero1) + Number(numero2) + "</p>";
    //document.getElementById("resultat").innerHTML = "<small>" + numero1 + '*' + numero2 + " = " + "</small>" + "<p style='font-size:5rem'>" + numero1 * numero2 + "</p>";

}