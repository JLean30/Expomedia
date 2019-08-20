const conferencistas = [{
        name: 'Andres Chinchilla',
        imagen: 'img/conferencista/andresChinchilla.jpg',
        right: '0', //Esto define que tan a la izquierda se va a desplazar la imagen de la persona en el circulo
        title: 'Dev',
        descripcion: 'Make sure everyone is safe on the internet',
        descripcion2: 'Encrypt all the data from a computer in exchange for money',
        facebook: 'https://www.facebook.com/andres.chinchillafernandez',
        instagram: '',
        twitter: ''
    },
    {
        name: 'Sebastian Brenes',
        imagen: 'img/conferencista/sebastianBrenes.jpg',
        right: '0', //Esto define que tan a la izquierda se va a desplazar la imagen de la persona en el circulo
        title: 'Ilustrador digital, escultor, etc.',
        descripcion: 'Estudiante de la carrera de Informática y Tecnología Multimedia, influenciado por su padre (escultor) y madre (profesora de ballet) se dedicó a pulir sus habilidades en el dibujo. Tuvo la oportunidad de acompañar a su padre a hacer esculturas indígenas costarricense en Francia y fue invitado a dar un taller sobre dibujo en una Convención anual de anime japonés en Puntarenas y San José.',
        descripcion2: 'Más información sobre Sebastian:',
        facebook: 'https://www.facebook.com/sebastian.brenes.9',
        instagram: 'https://www.instagram.com/sbastianbf/',
        twitter: ''
    },
    {
        name: 'Nick González',
        imagen: 'img/conferencista/nick.png',
        right: '0', //Esto define que tan a la izquierda se va a desplazar la imagen de la persona en el circulo
        title: 'Desarrollador',
        descripcion: 'Es desarrollador de software en la empresa "Mr Rabbit", realizó sus estudios en la Universidad de Costa Rica donde consiguío ser bachiller en informática empresarial y licenciatura en la Universidad Técnica Nacional.',
        descripcion2: 'Más información sobre Nick:',
        facebook: 'https://www.facebook.com/nick.gonse',
        instagram: 'https://www.instagram.com/nick.gonse/',
        twitter: ''
    },
    {
        name: 'Brandon Cisneros',
        imagen: 'img/conferencista/brandonCisneros.jpg',
        right: '0', //Esto define que tan a la izquierda se va a desplazar la imagen de la persona en el circulo
        title: 'Estudiante',
        descripcion: 'Actualmente es estudiante de la carrera de Informatica y Tecnología Multimedia de la Universidad de Costa Rica. Le apasiona el area de seguridad informática y lo que es el dibujo digital.',
        descripcion2: 'Más información sobre Brandon:',
        facebook: 'https://www.facebook.com/Braghoick',
        instagram: 'https://www.instagram.com/braghoick/',
        twitter: ''
    },
    {
        name: 'Ricardo Vega',
        imagen: 'img/conferencista/RicardoVega.jpg',
        right: '0', //Esto define que tan a la izquierda se va a desplazar la imagen de la persona en el circulo
        title: 'Iustrador, retratista, etc',
        descripcion: 'Es un joven apasionado por la vida y el arte, dibuja más tiempo del que pinta, se siente feliz trazando con un lápiz o acariciando un lienzo con pinceles. Es un loco soñador a la espera de un buen momento para conversar.',
        descripcion2: 'Más información sobre Ricardo:',
        facebook: 'https://www.facebook.com/ricardovegart/',
        instagram: 'https://www.instagram.com/ricardovegart/',
        twitter: ''
    },
    {
        name: 'Yohanna Alvarez',
        imagen: 'img/conferencista/yohannaAlvarez.jpg',
        right: '0', //Esto define que tan a la izquierda se va a desplazar la imagen de la persona en el circulo
        title: 'Desarrolladora',
        descripcion: '',
        descripcion2: 'Más información sobre Yohanna:',
        facebook: 'https://www.facebook.com/yohanna.mac/',
        instagram: 'https://www.instagram.com/yohanna_mac/',
        twitter: ''
    },
    {
        name: 'Carlos Bogarin',
        imagen: 'img/conferencista/carlosBogarin.jpg',
        right: '0', //Esto define que tan a la izquierda se va a desplazar la imagen de la persona en el circulo
        title: 'Estudiante',
        descripcion: '',
        descripcion2: 'Más información sobre Carlos:',
        facebook: 'https://www.facebook.com/profile.php?id=100012303106400',
        instagram: 'https://www.instagram.com/bogamedia/',
        twitter: ''
    },
    {
        name: 'Marcos Molina',
        imagen: 'img/conferencista/marcos.jpg',
        right: '0', //Esto define que tan a la izquierda se va a desplazar la imagen de la persona en el circulo
        title: 'Estudiante',
        descripcion: '',
        descripcion2: 'Más información sobre Marcos:',
        facebook: 'https://www.facebook.com/markox.molina',
        instagram: '',
        twitter: ''
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
    var redireccion = document.getElementById("info-conferencista");

    for (var i = 0; i < len; i++) {
        if (nombre === conferencistas[i].name) {
            imagen.src = conferencistas[i].imagen;
            imagen.style = "right: " + conferencistas[i].right + "em;";
            nombreC.innerHTML = conferencistas[i].name;
            tituloC.innerHTML = conferencistas[i].title;
            descripcionC.innerHTML = conferencistas[i].descripcion;
            descripcion2C.innerHTML = conferencistas[i].descripcion2;
            if (conferencistas[i].facebook != '') {
                linkFb.href = conferencistas[i].facebook;
                linkFb.style = "display: block !important;";
            } else {
                linkFb.style = "display: none !important;";
            }

            if (conferencistas[i].instagram != '') {
                linkIg.href = conferencistas[i].instagram;
                linkIg.style = "display: block !important;";
            } else {
                linkIg.style = "display: none !important;";
            }

            if (conferencistas[i].twitter != '') {
                linkTw.href = conferencistas[i].twitter;
                linkTw.style = "display: block !important;";
            } else {
                linkTw.style = "display: none !important;";
            }
            redireccion.click();
        }
    }
}