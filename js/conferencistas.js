const conferencistas = [{
    name: 'pato',
    imagen: 'img/1 (1).jpg',
    descripcion: '',
    answer: 'option2'
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
    var redireccion =document.getElementById("info-conferencista");

    for (var i = 0; i < len; i++) {
        if (nombre === conferencistas[i].name) {
            imagen.src= conferencistas[i].imagen;
            nombreC.innerHTML = conferencistas[i].name;
            redireccion.click();
        }
    }
}