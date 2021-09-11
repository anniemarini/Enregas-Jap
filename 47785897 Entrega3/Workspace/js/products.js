//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

});

var categoriesArray = [];

function showCategoriesList(array){

    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {

        let product = array[i];
        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                  <div class="col-3">
                    <img src="` + product.imgSrc + `" alt="` + product.description + `" class="img-thumbnail">
                  </div>
               <div class="col">
                  <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1"><b> `+ product.name + ` </b></h4>
                    <br>
                    <small class="text-muted">` + product.soldCount + ` vendidos</small>
                  </div>
                  <p class="mb-1"> `+ product.description + `</p>
                  <div class=" w-100 "><b>` + product.currency + " " + product.cost + `</b>
                  </div>
               </div>
            </div>
        </div>
        `

        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;

    }
}

document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(PRODUCTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            categoriesArray = resultObj.data;
            showCategoriesList(categoriesArray);
        }
    });
});

function ordenarCant() {
    categoriesArray.sort((a, b) => {
        if (a.soldCount < b.soldCount) {
            return 1;
        }
        if (a.soldCount > b.soldCount) {
            return -1;
        } else {
            return 0;
        }
    });
    showCategoriesList(categoriesArray);
};

function filtrar() {
    var min = parseInt(document.getElementById('filtrarMin').value);
    var max = parseInt(document.getElementById('filtrarMax').value);
    let filas = [];
    for (let product of categoriesArray) {
        if (product.cost >= min && product.cost <= max) {
            filas.push(product);
        }
    }
    showCategoriesList(filas);


};

function ordenarA() {
    categoriesArray.sort((a, b) => {
        if (a.cost > b.cost) {
            return 1;
        }
        if (a.cost < b.cost) {
            return -1;
        } else {
            return 0;
        }
    });
    showCategoriesList(categoriesArray);
};

function ordenarD() {

    categoriesArray.sort((a, b) => {
        if (a.cost < b.cost) {
            return 1;
        }
        if (a.cost > b.cost) {
            return -1;
        } else {
            return 0;
        }
    });
    showCategoriesList(categoriesArray);
};

let productoFiltrado=[];

function buscar() {
    let textoEscrito = document.getElementById('buscador').value;

    let productoFiltrado = categoriesArray.filter(product => {
        return product.name.toLowerCase().indexOf(textoEscrito.toLowerCase()) > -1;
    })
    showCategoriesList(productoFiltrado);
};

document.getElementById('buscador').addEventListener('keyup', () => {

    buscar();

});

