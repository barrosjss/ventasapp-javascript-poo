/**
 * User Interface Class
 */
export class UI {
  /**
   * Add a New Component
   */
  addComponent(component) {
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>ID</strong>: ${component.id} -
                    <strong>Type Article</strong>: ${component.tipoArticulo} -
                    <strong>Model</strong>: ${component.modelo} -
                    <strong>Type Component</strong>: ${component.tipoComponente} -
                    <strong>Price</strong>: ${component.precio} - 
                    <strong>Year</strong>: ${component.anoFabrica} -
                    <strong>Name fabricante</strong>: ${component.nomFabricante} -
                    <strong> ID </strong>: ${component.IDcs || component.IDce} -
                    <strong>Product</strong>: ${component.nombre} -
                    <strong>Type Connect</strong>: ${component.tipoConector} -
                    <strong>Puerto Validos</strong>: ${component.puertosValidos} 
                </div>
                <a href="#" class="btn btn-danger" name="delete">Delete</a>
            </div>
        `;
    productList.appendChild(element);
  }

  /**
   * Reset Form Values
   */
  resetForm() {
    document.getElementById("product-form").reset();
  }

  deleteProduct(element) {
    if (element.name === "delete") {
      element.parentElement.parentElement.remove();
      this.showMessage("Product Deleted Succsssfully", "success");
    }
  }

  showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-2`;
    div.appendChild(document.createTextNode(message));

    // Show in The DOM
    const container = document.querySelector(".container");
    const app = document.querySelector("#App");

    // Insert Message in the UI
    container.insertBefore(div, app);

    // Remove the Message after 3 seconds
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}
