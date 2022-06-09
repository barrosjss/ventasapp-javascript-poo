// Componentes (varios elementos perifericos)

// Clase Padre
class Componentes {
  constructor(id, tipoArticulo, tipoComponente, modelo, precio, anoFabrica) {
    this.id = id;
    this.tipoArticulo = tipoArticulo; // [unidadCentral, teclado, raton, tabletaGrafica, pantalla, impresora, pantallaTactil]
    this.tipoComponente = tipoComponente; // Entda o Salida
    this.modelo = modelo;
    this.precio = precio;
    this.nomFabricante = nomFabricante;
    this.anoFabrica = anoFabrica;
  }
}

// Clases Hijo
class CompSalida {
  constructor(tipoConector, puertosValidos) {
    this.tipoConector = tipoConector; // sera un STRING
    this.puertosValidos = puertosValidos; // varios valores de tipo entero
  }
}

class CompEntrada {
  constructor(puertosValidos) {
    this.puertosValidos = puertosValidos; // varios valores de tipo entero
  }
}

// Hijo de CompSalida
class Impresora {
  constructor(tipoImpre, tipoCartucho, numPage) {
    this.tipoImpre = tipoImpre; //inyección o láser
    this.tipoCartucho = tipoCartucho;
    this.numPage = numPage; // número de páginas impresas desde el último cambio de "tóner"(sólo para impresoras láser)
  }
}