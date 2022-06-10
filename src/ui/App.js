import { Product } from "./Product.js";
import { UI } from "./UI.js";
import { CompSalida, CompEntrada, Impresora } from "./componentes.js";

// DOM Events
document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    // Override the default Form behaviour
    e.preventDefault();

    // Getting Form Values
    const name = document.getElementById("name").value,
      typeArticle = document.getElementById("type-article").value,
      typeConnect = document.getElementById("type-connect").value,
      typeComponent = document.getElementById("type-component").value
    ;

    let component;

    if(typeComponent == "Output"){
      component = new CompSalida(
        Math.floor(Math.random() * 9999),
        typeArticle,
        "Rodolfo",
        typeComponent,
        Math.floor(Math.random() * 9999),
        Math.floor(Math.random() * 9999),
        `20${Math.floor(Math.random() * 21)}`,
        Math.floor(Math.random() * 999 + 1),
        name,
        typeConnect || '',
        Math.floor(Math.random() * 10)
      );
    }

    component = new CompEntrada(
      Math.floor(Math.random() * 9999),
      typeArticle,
      "Mauricio",
      typeComponent,
      Math.floor(Math.random() * 9999),
      Math.floor(Math.random() * 9999),
      `20${Math.floor(Math.random() * 21)}`,
      Math.floor(Math.random() * 999 + 1),
      name,
      typeConnect || '',
      Math.floor(Math.random() * 10)
    );

    // Create a new Oject Product
    
    //id, tipoArticulo, tipoComponente, modelo, precio, anoFabrica
    //IDcs, nombre,tipoConector, puertosValidos

    // Create a new UI instance
    const ui = new UI();

    // Input User Validation
    if (
      name.length == 0 ||
      typeArticle.length == 0 ||
      typeConnect.length == 0 ||
      typeComponent.length == 0
    ) {
      ui.showMessage("Please Insert data in all fields", "danger");
    }

    // Save Product
    ui.addComponent(component);

    ui.showMessage("Product Added Successfully", "success");
    ui.resetForm();
  });

document.getElementById("product-list").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
  e.preventDefault();
});
