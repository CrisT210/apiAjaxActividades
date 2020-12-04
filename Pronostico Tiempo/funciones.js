$(document).ready(function() {
    $('form').submit(function() {
        event.preventDefault();
        let ciudad = $('#ciudad').val();
      
        $.get('https://api.openweathermap.org/data/2.5/weather?q='+ ciudad +'&units=metric&APPID=c6ee5876a61f5029c69807ec944d2aab&lang=sp', function(x) {
            
            let html = '',
                hr = '<hr>',
                row = '<div class="row">',
                col = '<div class="col">',
                div = '</div>',

                nomCiudad = '<h4 class="card-title">Tiempo en <span class="ciudad">'+ ciudad +'</span></h4>',
                subCiudad = '<p class="card-text txtName">'+ x.name +'</p>',

                icon = '<div class="p-0 col"><img id="icon" src="https://openweathermap.org/img/wn/'+ x.weather[0].icon +'.png" class="mx-auto d-block p-0"></div>',    
                tempActual = '<h1 class="display-4 col temp">'+ x.main.temp +'°</h1>',

                condicion = '<p class="card-text p-0 col txtCondicion">'+ x.weather[0].description +'</p>',
                txtTemp =   '<p class="card-text p-0 col">Temp. Actual</p>',
                tMin = '<p class="card-text">T° Min: '+ x.main.temp_min +'°</p>',
                tMax = '<p class="card-text">T° Max: '+ x.main.temp_max +'°</p>',
                sTerm = '<p class="card-text">Sensacion Termica: '+ x.main.feels_like +'°</p>',

                hum = '<p class="card-text">Humedad: '+ x.main.humidity +'%</p>',
                pres = '<p class="card-text">Presion: '+ x.main.pressure +' hPa</p>',
                viento = '<p class="card-text">Vel. Viento: '+ x.wind.speed +' km/h</p>';

                html =  nomCiudad + subCiudad 
                        + hr 
                        + row + icon + tempActual + div
                        + row + condicion + txtTemp + div
                        + hr
                        + row + col + tMin + tMax + sTerm + div
                        + col + hum + pres + viento + div + div;
    
                $('#datos').html(html);
        }, 'json');    
    });
});