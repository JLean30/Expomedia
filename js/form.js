const hora = "<label>Hora de inscripción</label><select class='form-control ml-3' id='hora'><option value=''>Elige la hora</option><option value='9am'>9:00 am</option><option value='10am'>10:00am</option><option value='13pm'>13:00 pm</option><option value='15pm'>15:00pm</option></select>";
const talleresMartes9am = "<option value='' default>Elige el taller</option><option value='TallerintroductoriodeUnrealAndrésChinchilla-AulaN01'>Taller introductorio de Unreal Andrés Chinchilla - Aula N01</option><option value='EsencialCostaRica,EconomíaNaranjaKevinVillalta-AulaN03'>Esencial Costa Rica, Economía NaranjaKevin Villalta - Aula N03 </option><option value='AsísomoslosticosyasípodemossermejoresGeovannyDebrusJiménez-AulaN09'>Así somos los ticos y así podemos ser mejores  Geovanny 'Debrus' Jiménez - Aula N09</option>";
const talleresMartes10am = "<option value='' default>Elige el taller</option><option value='TreeInteractive,experienciasenlaindustriadelvideojuegoFelipeCartín,AndrésCartín-AulaN02'>Tree Interactive, experiencias en la industria del videojuego Felipe Cartín, Andrés Cartín - Aula N02</option><option value='ElejercicioprofesionaldelartistaplásticoRicardoVega-N04'>El ejercicio profesional del artista plástico Ricardo Vega - N04</option><option value='Taller:ContenedoresdeDockerManuelEmilioDelgadoLópez-AulaN05'>Taller: Contenedores de Docker Manuel Emilio Delgado López - Aula N05</option>";
const talleresMartes13pm = "<option value='' default>Elige el taller</option><option value='Taller:DiseñodeaplicacionesAndrésChinchilla-AulaN01'>Taller: Diseño de aplicaciones Andrés Chinchilla - Aula N01</option><option value='CibersecurityTrendsJosephChávezVelasco-AulaN02'>Cibersecurity Trends Joseph Chávez Velasco - Aula N02</option><option value='DesarrollodepelículasanimadasenCRLeoRojas-AulaN03'>Desarrollo de películas animadas en CR Leo Rojas - Aula N03</option> <option value='MuestrayTaller:CanalesyherramientasdemercadeodigitalYohannaÁlvarezCordero-AulaN04'>Muestra y Taller: Canales y herramientas de mercadeo digital Yohanna Álvarez Cordero - Aula N04</option><option value='TallerdelocuciónyactuaciónvocalCarlosBogarín-EstudiodeGrabación'>Taller de locución y actuación vocal Carlos Bogarín - Estudio de Grabación</option>";
const talleresMartes15pm = "<option value='' default>Elige el taller</option><option value='Elfuturodelaproducción,mediosyentretenimiento:PelículasDidierRamírezDarjo-AulaN01'>El futuro de la producción, medios y entretenimiento: PelículasDidier Ramírez Darjo - Aula N01</option><option value='DiseñodearteparavideojuegosSebastiánBrenesAndresChAulaN03'>Diseño de arte para videojuegos Sebastián Brenes, Andres Ch. - Aula N03</option><option value='Taller:ExperienciadeUsuarioMarcosMolina-AulaN04'>Taller: Experiencia de Usuario Marcos Molina -Aula N04</option>";
const talleresMiercoles8am = "<option value='' default>Elige el taller</option><option value='Taller:IntroducciónaUnityAndrésChinchilla-AulaN01'>Taller: Introducción a Unity Andrés Chinchilla - Aula N01</option><option value='RealidadAumentadaITM,Licenciaturaenvideojuegos-AulaN02'>Realidad Aumentada ITM, Licenciatura en videojuegos - Aula N02</option><option value='IngenieríaSocialyhackingBrandonCisneros-AulaN03'>Ingeniería Social y hacking Brandon Cisneros - Aula N03</option>";
const talleresMiercoles9am = "<option value='' default>Elige el taller</option><option value='Elfuturodecómohacerlascosas:Mediosyentretenimiento:VideojuegosDidierRamírezDarjo-AulaN04'>El futuro de cómo hacer las cosas:  Medios y entretenimiento: Videojuegos Didier Ramírez Darjo - Aula N04</option>";
const talleresMiercoles10am = "<option value='' default>Elige el taller</option><option value='ElequipodeITdelfuturoJoséPabloEsquivelEscalante-AulaN02'>El equipo de IT del futuro José Pablo Esquivel Escalante - Aula N02</option><option value='ElMétodoBarguetJulioJonathanSalazar-AulaN03'>El Método Barguet  Julio Jonathan Salazar - Aula N03</option><option value='Taller:ReactBásicoNikolGonzálezSequeira-AulaN05'>Taller: React Básico Nikol González Sequeira - Aula N05</option><option value='TallerdefotografíacondispositivosmóvilesJhonPérezLópez-AulaN09'>Taller de fotografía con dispositivos móviles Jhon Pérez López - Aula N09</option>";
const talleresMiercoles13pm = "<option value='' default>Elige el taller</option><option value='OportunidadesdeestudioenChinaCésarWang-AulaN05'>Oportunidades de estudio en China César Wang - Aula N05</option>";
const talleres = [{
    id: '#1',
    value: 'TallerintroductoriodeUnrealAndrésChinchilla-AulaN01',
    name: 'Taller introductorio de Unreal Andrés Chinchilla - Aula N01',
    
},
{
    id: '#2',
    value: 'EsencialCostaRica,EconomíaNaranjaKevinVillalta-AulaN03',
    name: 'Esencial Costa Rica, Economía NaranjaKevin Villalta - Aula N03',
    
},
{
    id: '#3',
    value: 'AsísomoslosticosyasípodemossermejoresGeovannyDebrusJiménez-AulaN09',
    name: 'Así somos los ticos y así podemos ser mejores Geovanny "Debrus" Jiménez - Aula N09',
    
},
{
    id: '#4',
    value: 'TreeInteractive,experienciasenlaindustriadelvideojuegoFelipeCartín,AndrésCartín-AulaN02',
    name: 'Tree Interactive, experiencias en la industria del videojuego Felipe Cartín, Andrés Cartín - Aula N02',
    
},
{
    id: '#5',
    value: 'ElejercicioprofesionaldelartistaplásticoRicardoVega-N04',
    name: 'El ejercicio profesional del artista plástico Ricardo Vega - N04',
    
},
{
    id: '#6',
    value: 'Taller:ContenedoresdeDockerManuelEmilioDelgadoLópez-AulaN05',
    name: 'Taller: Contenedores de Docker Manuel Emilio Delgado López - Aula N05',
    
},
{
    id: '#7',
    value: 'Taller:DiseñodeaplicacionesAndrésChinchilla-AulaN01',
    name: 'Taller: Diseño de aplicaciones Andrés Chinchilla -Aula N01',
    
},
{
    id: '#8',
    value: 'CibersecurityTrendsJosephChávezVelasco-AulaN02',
    name: 'Cibersecurity Trends Joseph Chávez Velasco - Aula N02',
    
},
{
    id: '#9',
    value: 'DesarrollodepelículasanimadasenCRLeoRojas-AulaN03',
    name: 'Desarrollo de películas animadas en CR Leo Rojas -Aula N03',
    
},
{
    id: '#10',
    value: 'MuestrayTaller:CanalesyherramientasdemercadeodigitalYohannaÁlvarezCordero-AulaN04',
    name: 'Muestra y Taller: Canales y herramientas de mercadeo digital Yohanna Álvarez Cordero - Aula N04',
    
},
{
    id: '#11',
    value: 'TallerdelocuciónyactuaciónvocalCarlosBogarín-EstudiodeGrabación',
    name: 'Taller de locución y actuación vocal Carlos Bogarín - Estudio de Grabación',
    
},
{
    id: '#12',
    value: 'Elfuturodelaproducción,mediosyentretenimiento:PelículasDidierRamírezDarjo-AulaN01',
    name: 'El futuro de la producción, medios y entretenimiento: PelículasDidier Ramírez Darjo - Aula N01',
    
},
{
    id: '#13',
    value: 'DiseñodearteparavideojuegosSebastiánBrenesAndresChAulaN03',
    name: 'Diseño de arte para videojuegos Sebastián Brenes, Andres Ch. - Aula N03',
    
},
{
    id: '#14',
    value: 'Taller:ExperienciadeUsuarioMarcosMolina-AulaN04',
    name: 'aller: Experiencia de Usuario Marcos Molina -Aula N04',
    
},
{
    id: '#15',
    value: 'Taller:IntroducciónaUnityAndrésChinchilla-AulaN01',
    name: 'Taller: Introducción a Unity Andrés Chinchilla - Aula N01',
    
},
{
    id: '#16',
    value: 'RealidadAumentadaITM,Licenciaturaenvideojuegos-AulaN02',
    name: 'Realidad Aumentada ITM, Licenciatura en videojuegos - Aula N02',
    
},
{
    id: '#17',
    value: 'IngenieríaSocialyhackingBrandonCisneros-AulaN03',
    name: 'Ingeniería Social y hacking Brandon Cisneros - Aula N03',
    
},
{
    id: '#18',
    value: 'Elfuturodecómohacerlascosas:Mediosyentretenimiento:VideojuegosDidierRamírezDarjo-AulaN04',
    name: 'El futuro de cómo hacer las cosas: Medios y entretenimiento: Videojuegos Didier Ramírez Darjo - Aula N04',
    
},
{
    id: '#19',
    value: 'ElequipodeITdelfuturoJoséPabloEsquivelEscalante-AulaN02',
    name: 'El equipo de IT del futuro José Pablo Esquivel Escalante - Aula N02',
    
},
{
    id: '#20',
    value: 'ElMétodoBarguetJulioJonathanSalazar-AulaN03',
    name: 'El Método Barguet Julio Jonathan Salazar - Aula N03',
    
},
{
    id: '#21',
    value: 'Taller:ReactBásicoNikolGonzálezSequeira-AulaN05',
    name: 'Taller: React Básico Nikol González Sequeira - Aula N05',
    
},
{
    id: '#22',
    value: 'TallerdefotografíacondispositivosmóvilesJhonPérezLópez-AulaN09',
    name: 'Taller de fotografía con dispositivos móviles Jhon Pérez López - Aula N09',
    
},
{
    id: '#23',
    value: 'OportunidadesdeestudioenChinaCésarWang-AulaN05',
    name: 'Oportunidades de estudio en China César Wang - Aula N05',
    
},
];
var limite = 0;

var firebaseConfig = {
    apiKey: "AIzaSyABOvaG6mUhqCDFxJOyNMrzKoDg4-6ZSGs",
    authDomain: "expomedia2019-828c9.firebaseapp.com",
    databaseURL: "https://expomedia2019-828c9.firebaseio.com",
    projectId: "expomedia2019-828c9",
    storageBucket: "",
    messagingSenderId: "521726918700",
    appId: "1:521726918700:web:1f6fe9228ae1877e"
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
let db = app.database();
const form = document.getElementById('form-inscripcion'); // Obtenemos la referencia al formulario
const form2 = document.getElementById('form-inscripcion2'); // Obtenemos la referencia al formulario
$(document).ready(function () {
    if (window.location.hash.includes('#')) {
        $('#form').attr("hidden",true);
        var comparar = window.location.hash;
        var len = talleres.length;
        for(var i=0; i<len;i++){
            if(talleres[i].id === comparar){
                var info = "<option value="+talleres[i].value+">"+talleres[i].name+"</option>";
                    $('#taller')
                        .find('option')
                        .remove()
                        .end()
                        .append(info);
                    break;
            }
        }
        
      }else{
        
        $('#form2').attr("hidden",true);
        }
        $("#dia").change(function () {
            if ($('#dia').val().trim() != '') {
                $("#form-taller").attr("hidden", true);
                switch ($('#dia').val().trim()) {
                    case "martes":
                        $('#hora option:eq("")').prop('selected', true);
                        $("#hora2").attr("hidden", true);
                        $("#hora").removeAttr('hidden');
                        break;
                    case 'miercoles':
                        $('#hora2 option:eq("")').prop('selected', true);
                        $("#hora").attr("hidden", true);
                        $("#hora2").removeAttr('hidden');
                        break;
    
                }
            } else {
                $("#form-taller").attr("hidden", true);
            }
        });
        
    
        //talleres segun hora
        $("#hora").change(function () {
            horaMartes();
        });
        $("#hora2").change(function () {
            horaMiercoles();
        });
    
        $("#enviar-inscripcion").click(function () {
    
            if ($('#taller2').val().trim() === '' || $('#carne2').val().trim() === "" || $('#nombreCompleto2').val().trim() === "") {
    
    
            } else {
                event.preventDefault();
                var nombreCompleto = $('#nombreCompleto2').val();
                var carne = $('#carne2').val();
                var taller = $("#taller2").val();
                db.ref("inscripciones/" + taller + "/limite").once("value", snapshot => {
                    limite = snapshot.val();
                    if (limite <= 0) {
                        alert("Lo sentimos, este taller ya no tiene cupos");
                    } else {
                        db.ref("inscripciones/" + taller).orderByChild("carneCedula").equalTo(carne).once("value", snapshot => {
                            if (snapshot.exists()) {
                                alert("Ya estás inscrito a este taller! ");
                            } else {
                                db.ref("inscripciones/" + taller).push({
                                    nombreCompleto: nombreCompleto,
                                    carneCedula: carne,
                                    taller: taller,
                                }, function (error) {
                                    if (error) {
                                        // The write failed...
                                        console.log("madre mia");
                                    } else {
                                        // Data saved successfully!
                                        console.log("bien!");
                                        alert("inscripcion enviada");
                                        update = limite - 1;
                                        db.ref("inscripciones/" + taller).update({
                                            limite: update
    
                                        });
                                        $("#form-taller").attr("hidden", true);
                                        $("#hora").attr("hidden", true);
                                        $("#hora2").attr("hidden", true);
                                        form2.reset();
                                        
    
                                    }
                                });
    
                            }
                        });
    
                    }
                });
            }
        });
      
        $("#enviar-inscripcion2").click(function () {
    
            if ($('#taller').val().trim() === '' || $('#carne').val().trim() === "" || $('#nombreCompleto').val().trim() === "") {
    
    
            } else {
                event.preventDefault();
                var nombreCompleto = $('#nombreCompleto').val();
                var carne = $('#carne').val();
                var taller = $("#taller").val();
                db.ref("inscripciones/" + taller + "/limite").once("value", snapshot => {
                    limite = snapshot.val();
                    if (limite <= 0) {
                        alert("Lo sentimos, este taller ya no tiene cupos");
                    } else {
                        db.ref("inscripciones/" + taller).orderByChild("carneCedula").equalTo(carne).once("value", snapshot => {
                            if (snapshot.exists()) {
                                alert("Ya estás inscrito a este taller! ");
                            } else {
                                db.ref("inscripciones/" + taller).push({
                                    nombreCompleto: nombreCompleto,
                                    carneCedula: carne,
                                    taller: taller,
                                }, function (error) {
                                    if (error) {
                                        // The write failed...
                                        console.log("shit");
                                    } else {
                                        // Data saved successfully!
                                        console.log("Wiiii");
                                        alert("inscripcion enviada");
                                        update = limite - 1;
                                        db.ref("inscripciones/" + taller).update({
                                            limite: update
    
                                        });
                                        //opcion de formateo
                                        location.replace("formulario.html");
                                    }
                                });
    
                            }
                        });
    
                    }
                });
            }
        });
    

    function horaMartes() {
        if ($('#hora').val().trim() != '') {
            switch ($('#hora').val().trim()) {
                case "9am":
                    $("#form-taller").attr("hidden", false);
                    $('#taller2')
                        .find('option')
                        .remove()
                        .end()
                        .append(talleresMartes9am);
                    break;
                case '10am':
                    $("#form-taller").attr("hidden", false);
                    $('#taller2')
                        .find('option')
                        .remove()
                        .end()
                        .append(talleresMartes10am);
                    break;
                case '13pm':
                    $("#form-taller").attr("hidden", false);
                    $('#taller2')
                        .find('option')
                        .remove()
                        .end()
                        .append(talleresMartes13pm);
                    break;
                case '15pm':
                    $("#form-taller").attr("hidden", false);
                    $('#taller2')
                        .find('option')
                        .remove()
                        .end()
                        .append(talleresMartes15pm);
                    break;

            }
        } else {
            $("#form-taller").attr("hidden", true);
        }
    }

    function horaMiercoles() {
        if ($('#hora2').val().trim() != '') {
            switch ($('#hora2').val().trim()) {
                case "8am":
                    $("#form-taller").attr("hidden", false);
                    $('#taller2')
                        .find('option')
                        .remove()
                        .end()
                        .append(talleresMiercoles8am);
                    break;
                case '9am':
                    $("#form-taller").attr("hidden", false);
                    $('#taller2')
                        .find('option')
                        .remove()
                        .end()
                        .append(talleresMiercoles9am);
                    break;
                case '10am':
                    $("#form-taller").attr("hidden", false);
                    $('#taller2')
                        .find('option')
                        .remove()
                        .end()
                        .append(talleresMiercoles10am);
                    break;
                case '13pm':
                    $("#form-taller").attr("hidden", false);
                    $('#taller2')
                        .find('option')
                        .remove()
                        .end()
                        .append(talleresMiercoles13pm);
                    break;

            }
        } else {
            $("#form-taller").attr("hidden", true);
        }
    }
    


});