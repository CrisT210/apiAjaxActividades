$(document).ready(function(){
    //$('#infoModal').modal('show');
    $('input').on('click', function(){
        let id = $(this).attr('id');
        console.log(id);

        $.get(`https://anapioficeandfire.com/api/houses/${id}`,(house)=>{
            // alert(house.ancestralWeapons.length);
            // console.log(house);
            let titulos = '', lugares = '', armas = '', htmlTitle = '', hmtlBody = '';

            function lema(){
                if(house.words == ""){
                    return 'No Tiene';
                }else{
                    return house.words;
                }
            }

            for(let i=0; i<house.titles.length; i++){
                // console.log(house.titles[i]);
                titulos += '<li class="list-group-item">'+ house.titles[i] +'</li>';
            }

            for(let i=0; i<house.seats.length; i++){
                lugares += '<li class="list-group-item">'+ house.seats[i] +'</li>';
            }

            for(let i=0; i<house.ancestralWeapons.length; i++){
                if(house.ancestralWeapons[i] == ''){ 
                    armas = '<li class="list-group-item">No tiene</li>';
                }else{
                    armas += '<li class="list-group-item">'+ house.ancestralWeapons[i] +'</li>';
                }  
            }
            
            htmlTitle = `<h4 class="modal-title">${house.name}</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>`;

            hmtlBody = `<div class="row p-3">
                            <div class="input-group col">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <h5>Region</h5>
                                    </span>
                                </div>
                                <span class="form-control form-control-lg">${house.region}</span>
                            </div>
                        </div>
                        <div class="row p-3">
                            <div class="input-group col">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <h5>Lema</h5>
                                    </span>
                                </div>
                                <span class="form-control form-control-lg">${lema()}</span>
                            </div>
                        </div>
                        <div class="row p-3">    
                        <div class="input-group col">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <h5>Titulos</h5>
                                </span>
                            </div>
                            <ul class="list-group list-group-flush col p-0">
                                ${titulos}
                            </ul>
                        </div>    
                        </div>
                        <div class="row p-3">
                            <div class="input-group col">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <h5>Asentamientos</h5>
                                    </span>
                                </div>
                                <ul class="list-group list-group-flush col p-0">
                                    ${lugares}
                                </ul>
                            </div>
                        </div>   
                        <div class="row p-3">
                            <div class="input-group col">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <h5>Armas Ancestrales</h5>
                                    </span>
                                </div>
                                <ul class="list-group list-group-flush col p-0">
                                    ${armas}
                                </ul>
                            </div>
                        </div>`;

            $('#name').html(htmlTitle);
            $('#info').html(hmtlBody);
            $('#infoModal').modal('show');
        }, 'json');
    });
});