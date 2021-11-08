function showApi() {
    $.ajax({
        url: "../vues/l-api-n.html",
        type: "GET",
        dataType: "html",
        success: function(response) {
            document.getElementById("resultat_meteo").innerHTML = response;
            getCities();
        },
        error: function() {
            document.getElementById("resultat_meteo").innerHTML = "Une erreur s'est produite";
        }
    });
}


function getCities() {
    let url = "https://countriesnow.space/api/v0.1/countries/cities";
    let country = "France";
    $.ajax({
        url: url,
        type: "POST",
        data: { "country": country },
        dataType: "json",
        success: function(response) {
            response.data.forEach((element, key) => {
                let tag_option = document.createElement("option");
                tag_option.setAttribute("value", element);
                tag_option.innerHTML = element;
                document.getElementById("cities").appendChild(tag_option);
            })
        },
        error: function(err) {
            console.log("error", err)
        }
    });
}

function callweather() {
    //let url = null;

    let weather = null;
    // let city_name = null;
    let api_key = '58c183e75c4147058bbc918913d04108';
    let city_name = 'metz';
    let url = "http://api.openweathermap.org/data/2.5/weather?q=" + city_name + "&appid=" + api_key;
    //let theurl = "http://api.openweathermap.org/data/2.5/weather?q=" + city_name + "&appid=" + api_key;

    $.ajax({
        url: url,
        //url: "http://api.openweathermap.org/data/2.5/weather?q=metz&appid=58c183e75c4147058bbc918913d04108",

        type: "GET",
        dataType: "JSON",
        success: function(response) {
            //document.getElementById("resultat_meteo").innerHTML = JSON.stringify(response);
            var obj = response
            document.getElementById("resultat_meteo_ville").innerHTML = obj.name;
            document.getElementById("resultat_meteo_meteo").innerHTML = obj.weather.description;
            showthedata(response, city_name)


        }

    })


    //Resultat
    //document.getElementById("resultat_meteo").innerHTML = "Some text to enter";
}

//_
///_
//_



// fetch("https://countriesnow.space/api/v0.1/countries/cities", {
//         "method": "GET",
//         "headers": {

//         }
//     })
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//         console.error(err);
//     });