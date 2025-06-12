class Activity{
    constructor(id, title, description, imgUrl){
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;

    }
}

class Repository{
    constructor(){
        this.activities = [];
        this.currentId = 1;
    }
    getAllActivities(){
        return this.activities;
    }
    createActivity(title, description, imgUrl){
        const newActivity = new Activity( this.currentId, title, description, imgUrl);
        this.activities.push(newActivity);
        this.currentId++;
        return newActivity;
    }
    deleteActivity(id){
        this.activities = this.activities.filter(activity => activity.id !== id);
    }

}

    const inputTitulo = document.getElementById("titulo");
    const inputDescripcion = document.getElementById("descripcion");
    const inputImagen = document.getElementById("imagen");
    const botonAgregar = document.querySelector("button[type='submit']");

    const contenedorTarjetas = document.getElementById("contenedorActividades");

    const repositorio = new Repository;


function crearTarjetaHTML(activity){
    const{ title, description, imgUrl} = activity;

    const tarjeta = document.createElement("div");
    const tituloElemento = document.createElement("h3");
    const descripcionElemento = document.createElement("p");
    const imagenElemento = document.createElement("img");
    const botonEliminar = document.createElement("button");

    tituloElemento.innerText = title;
    descripcionElemento.innerText = description;
    imagenElemento.src  = imgUrl;
    botonEliminar.innerText = "Eliminar";

    tarjeta.classList.add("Tarjeta");
    botonEliminar.classList.add("btn-eliminar");

    botonEliminar.addEventListener("click", () => {
        tarjeta.remove();
        repo.deleteActivity(id);
    });

    tarjeta.appendChild(tituloElemento);
    tarjeta.appendChild(descripcionElemento);
    tarjeta.appendChild(imagenElemento);
    tarjeta.appendChild(botonEliminar);

    return tarjeta;
}

document.getElementById("actividad-form").addEventListener("submit", function (event) {
    event.preventDefault();

    
    const titulo = inputTitulo.value.trim();
    const descripcion = inputDescripcion.value.trim();
    const imagen = inputImagen.value.trim();

    
    if (!titulo || !descripcion || !imagen) {
        alert("Por favor completá todos los campos.");
        return;
    }

   
    repositorio.createActivity(titulo, descripcion, imagen);

   
    contenedorTarjetas.innerHTML = "";

  
    const actividades = repositorio.getAllActivities();
    actividades.forEach(activity => {
        const tarjeta = crearTarjetaHTML(activity);
        contenedorTarjetas.appendChild(tarjeta);
    });

    
    event.target.reset();
});