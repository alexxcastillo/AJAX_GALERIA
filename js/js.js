var id;
var id2;
var resultado = document.getElementById("resultado");
var categoria = document.getElementById("gatos");
var raza = document.getElementById("raza");
var limit=1;
var page=1;

window.addEventListener("load", function () {
    url1();
    url2();
});

document.getElementById("search").addEventListener("click", function () {
    opciones();
});
document.getElementById("search1").addEventListener("click", function () {
    opciones2();
});

function url1() {
    //limit=document.getElementById("limit").value;
    let url = `https://api.thecatapi.com/v1/categories`;

    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();

    api.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            let datos = JSON.parse(this.responseText);
            console.log(datos);



            for (let item of datos) {
                var option = document.createElement("option");
                option.innerHTML = `${item.name}`;
                categoria.appendChild(option);
            }

        }
    }
}

function url2() {
    //limit=document.getElementById("limit").value;
    let url = `https://api.thecatapi.com/v1/breeds`;

    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();

    api.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            let datos = JSON.parse(this.responseText);
            console.log(datos);
            for (let item of datos) {
                var option = document.createElement("option");
                option.value=item.id;
                option.id=item.id;
                option.innerHTML =item.name;
                raza.appendChild(option);
            }

        }
    }
}



function opciones() {
    limit=document.getElementById("limit").value;
    if (document.querySelector("#gatos").value == "hats") id = 1;
    else if (document.querySelector("#gatos").value == "sunglasses") id = 4;
    else if (document.querySelector("#gatos").value == "clothes") id = 15;
    else if (document.querySelector("#gatos").value == "boxes") id = 5;
    else if (document.querySelector("#gatos").value == "sinks") id = 14;
    else if (document.querySelector("#gatos").value == "space") id = 2;
    else if (document.querySelector("#gatos").value == "ties") id = 7;
    //else if (document.querySelector("#gatos").value == "None") id="" ;

    obtenerImagenes();

}

function obtenerImagenes() {
    let url = `https://api.thecatapi.com/v1/images/search?page=${page}&limit=${limit}&category_ids=${id}`;

    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();
    api.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            let datos = JSON.parse(this.responseText);
            resultado.innerHTML = '';

            for (let item of datos) {
                resultado.innerHTML += `<img width=300px height=200px src=${item.url}>`;
            }
            
            document.getElementById("ant").style.display="block";
            document.getElementById("sig").style.display="block";
        }
    }
    

}

function opciones2() {
    limit=document.getElementById("limit").value;
    obtenerRaza();
}

function obtenerRaza() {
    id2=document.getElementById("raza").value;
    let url = `https://api.thecatapi.com/v1/images/search?page=${page}&limit=${limit}&breed_ids=${id2}`;

    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();
    api.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            let datos = JSON.parse(this.responseText);
            resultado.innerHTML = '';

            for (let item of datos) {
                resultado.innerHTML += `<img width=300px height=200px src=${item.url}>`;
            }
            document.getElementById("ant").style.display="block";
            document.getElementById("sig").style.display="block";
        }
    }
}

document.getElementById("ant").addEventListener("click",function(){
   opciones2();
   opciones();
});

document.getElementById("sig").addEventListener("click",function(){
    opciones2();
    opciones();
});

/*function atras(){
    page--;
}

function adelante(){
    page++;
}*/


