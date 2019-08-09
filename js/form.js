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
$(document).ready(function () {
    // Your web app's Firebase configuration
    //envio informacion
    const form = document.getElementById('form-inscripcion'); // Obtenemos la referencia al formulario
    $('#enviar-inscripcion').click(function () {
        event.preventDefault();
        var nombreCompleto = $('#nombreCompleto').val();
        var carne = $('#carne').val();
        var taller = $("#taller").val();
        db.ref("inscripciones/"+taller).orderByChild("carne").equalTo(carne).once("value", snapshot => {
            if (snapshot.exists()) {
                alert("ya estas inscrito ");
            } else {
                db.ref("inscripciones/"+taller).push({
                    nombreCompleto: nombreCompleto,
                    carne: carne,
                    taller: taller,
                }, function (error) {
                    if (error) {
                        // The write failed...
                        console.log("shit");
                    } else {
                        // Data saved successfully!
                        console.log("Wiiii");
                        alert("inscripcion enviada");
                        form.reset(); // borramos todos los campos. 
                    }
                });

            }
        });





    });



});