const hora = "<label>Hora de inscripción</label><select class='form-control ml-3' id='hora'><option value=''>Elige la hora</option><option value='9am'>9:00 am</option><option value='10am'>10:00am</option><option value='13pm'>13:00 pm</option><option value='15pm'>15:00pm</option></select>";
const talleresMartes9am = "<option value='' default>Elige el taller</option><option value='TallerintroductoriodeUnrealAndrésChinchilla-AulaN01'>Taller introductorio de Unreal Andrés Chinchilla - Aula N01</option><option value='EsencialCostaRica,EconomíaNaranjaKevinVillalta-AulaN03'>Esencial Costa Rica, Economía NaranjaKevin Villalta - Aula N03 </option><option value='AsísomoslosticosyasípodemossermejoresGeovannyDebrusJiménez-AulaN09'>Así somos los ticos y así podemos ser mejores  Geovanny 'Debrus' Jiménez - Aula N09</option>";
const talleresMartes10am = "<option value='' default>Elige el taller</option><option value='TreeInteractive,experienciasenlaindustriadelvideojuegoFelipeCartín,AndrésCartín-AulaN02'>Tree Interactive, experiencias en la industria del videojuego Felipe Cartín, Andrés Cartín - Aula N02</option><option value='ElejercicioprofesionaldelartistaplásticoRicardoVega-N04'>El ejercicio profesional del artista plástico Ricardo Vega - N04</option><option value='Taller:ContenedoresdeDockerManuelEmilioDelgadoLópez-AulaN05'>Taller: Contenedores de Docker Manuel Emilio Delgado López - Aula N05</option>";
const talleresMartes13pm = "<option value='' default>Elige el taller</option><option value='Taller:DiseñodeaplicacionesAndrésChinchilla-AulaN01'>Taller: Diseño de aplicaciones Andrés Chinchilla - Aula N01</option><option value='CibersecurityTrendsJosephChávezVelasco-AulaN02'>Cibersecurity Trends Joseph Chávez Velasco - Aula N02</option><option value='DesarrollodepelículasanimadasenCRLeoRojas-AulaN03'>Desarrollo de películas animadas en CR Leo Rojas - Aula N03</option> <option value='MuestrayTaller:CanalesyherramientasdemercadeodigitalYohannaÁlvarezCordero-AulaN04'>Muestra y Taller: Canales y herramientas de mercadeo digital Yohanna Álvarez Cordero - Aula N04</option><option value='TallerdelocuciónyactuaciónvocalCarlosBogarín-EstudiodeGrabación'>Taller de locución y actuación vocal Carlos Bogarín - Estudio de Grabación</option>";
const talleresMartes15pm = "<option value='' default>Elige el taller</option><option value='Elfuturodelaproducción,mediosyentretenimiento:PelículasDidierRamírezDarjo-AulaN01'>El futuro de la producción, medios y entretenimiento: PelículasDidier Ramírez Darjo - Aula N01</option><option value='DiseñodearteparavideojuegosSebastiánBrenesAndresChAulaN03'>Diseño de arte para videojuegos Sebastián Brenes, Andres Ch. - Aula N03</option><option value='Taller:ExperienciadeUsuarioMarcosMolina-AulaN04'>Taller: Experiencia de Usuario Marcos Molina -Aula N04</option>";
const talleresMiercoles8am = "<option value='' default>Elige el taller</option><option value='Taller:IntroducciónaUnityAndrésChinchilla-AulaN01'>Taller: Introducción a Unity Andrés Chinchilla - Aula N01</option><option value='RealidadAumentadaITM,Licenciaturaenvideojuegos-AulaN02'>Realidad Aumentada ITM, Licenciatura en videojuegos - Aula N02</option><option value='IngenieríaSocialyhackingBrandonCisneros-AulaN03'>Ingeniería Social y hacking Brandon Cisneros - Aula N03</option>";
const talleresMiercoles9am = "<option value='' default>Elige el taller</option><option value='Elfuturodecómohacerlascosas:Mediosyentretenimiento:VideojuegosDidierRamírezDarjo-AulaN04'>El futuro de cómo hacer las cosas:  Medios y entretenimiento: Videojuegos Didier Ramírez Darjo - Aula N04</option>";
const talleresMiercoles10am = "<option value='' default>Elige el taller</option><option value='ElequipodeITdelfuturoJoséPabloEsquivelEscalante-AulaN02'>El equipo de IT del futuro José Pablo Esquivel Escalante - Aula N02</option><option value='ElMétodoBarguetJulioJonathanSalazar-AulaN03'>El Método Barguet  Julio Jonathan Salazar - Aula N03</option><option value='Taller:ReactBásicoNikolGonzálezSequeira-AulaN05'>Taller: React Básico Nikol González Sequeira - Aula N05</option><option value='TallerdefotografíacondispositivosmóvilesJhonPérezLópez-AulaN09'>Taller de fotografía con dispositivos móviles Jhon Pérez López - Aula N09</option>";
const talleresMiercoles13pm = "<option value='' default>Elige el taller</option><option value='OportunidadesdeestudioenChinaCésarWang-AulaN05'>Oportunidades de estudio en China César Wang - Aula N05</option>";
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
$(document).ready(function () {
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

    $("#enviar-inscripcion").click(function (e) {

        if ($('#taller').val().trim() === '') {
            alert('Debe seleccionar un taller');

        } else {
            e.preventDefault();
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
                    $('#taller')
                        .find('option')
                        .remove()
                        .end()
                        .append(talleresMartes9am);
                    break;
                case '10am':
                    $("#form-taller").attr("hidden", false);
                    $('#taller')
                        .find('option')
                        .remove()
                        .end()
                        .append(talleresMartes10am);
                    break;
                case '13pm':
                    $("#form-taller").attr("hidden", false);
                    $('#taller')
                        .find('option')
                        .remove()
                        .end()
                        .append(talleresMartes13pm);
                    break;
                case '15pm':
                    $("#form-taller").attr("hidden", false);
                    $('#taller')
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
                    $('#taller')
                        .find('option')
                        .remove()
                        .end()
                        .append(talleresMiercoles8am);
                    break;
                case '9am':
                    $("#form-taller").attr("hidden", false);
                    $('#taller')
                        .find('option')
                        .remove()
                        .end()
                        .append(talleresMiercoles9am);
                    break;
                case '10am':
                    $("#form-taller").attr("hidden", false);
                    $('#taller')
                        .find('option')
                        .remove()
                        .end()
                        .append(talleresMiercoles10am);
                    break;
                case '13pm':
                    $("#form-taller").attr("hidden", false);
                    $('#taller')
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