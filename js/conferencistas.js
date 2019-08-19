const conferencistas = [{
    name: 'Andres Chinchilla',
    imagen: 'img/conferencista/andresChinchilla.jpg',
    right: '0',//Esto define que tan a la izquierda se va a desplazar la imagen de la persona en el circulo
    title: 'Dev',
    descripcion: 'Make sure everyone is safe on the internet',
    descripcion2: 'Encrypt all the data from a computer in exchange for money',
    facebook: 'https://www.facebook.com/andres.chinchillafernandez',
    instagram: '',
    twitter: ''
},
{
    question: 'Which is the attack that is done through telephony services?',
    options: ['Vishing', 'Scareware', ' Phishing', 'Baiting'],
    answer: 'option1'
},
{
    question: 'Which is the cyber attack that asks for exchange of money?',
    options: ['Malware', 'Vishing', 'Ransomware', 'Social engineering'],
    answer: 'option3'
},
{
    name: 'afasfa',
    options: ['A criminal', 'Someone smart', 'A bad person', 'Not that good at computing'],
    answer: 'option2'
},
{
    question: 'The importance of cybersecurity is to..',
    options: ['Protect the user&#39;s information', 'Make sure everyone is safe on the internet.', 'Encrypt all the data from a computer in exchange for money.', 'Make sure no one tries to steal the users information.'],
    answer: 'option1'
},
];

function cambiarConferencista(nombre) {
    var len = conferencistas.length;
    var imagen = document.getElementById("img-conferencista");
    var nombreC = document.getElementById("nombre-conferencista");
    var tituloC = document.getElementById("titulo-conferencista");
    var descripcionC = document.getElementById("descripcion-conferencista");
    var descripcion2C = document.getElementById("descripcion2-conferencista");
    var linkFb = document.getElementById("link-facebook");
    var linkIg = document.getElementById("link-instagram");
    var linkTw = document.getElementById("link-twitter");
    var redireccion =document.getElementById("info-conferencista");

    for (var i = 0; i < len; i++) {
        if (nombre === conferencistas[i].name) {
            imagen.src= conferencistas[i].imagen;
            imagen.style= "right: "+conferencistas[i].right+"em;";
            nombreC.innerHTML = conferencistas[i].name;
            tituloC.innerHTML = conferencistas[i].title;
            descripcionC.innerHTML = conferencistas[i].descripcion;
            descripcion2C.innerHTML = conferencistas[i].descripcion2;
            if(conferencistas[i].facebook != ''){
                linkFb.href = conferencistas[i].facebook;
                linkFb.style = "display: block !important;";
            }else{
                linkFb.style = "display: none !important;";
            }

            if(conferencistas[i].instagram != ''){
                linkIg.href = conferencistas[i].instagram;
                linkIg.style = "display: block !important;";
            }else{
                linkIg.style = "display: none !important;";
            }

            if(conferencistas[i].twitter != ''){
                linkTw.href = conferencistas[i].twitter;
                linkTw.style = "display: block !important;";
            }else{
                linkTw.style = "display: none !important;";
            }
            redireccion.click();
        }
    }
}