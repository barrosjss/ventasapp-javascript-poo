// Componentes (varios elementos perifericos)
// Clase Padre
class Componentes {
  constructor(id, tipoArticulo, nomFabricante,tipoComponente, modelo, precio, anoFabrica) {
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
export class CompSalida extends Componentes {
  constructor(
    id,
    tipoArticulo,
    tipoComponente,
    modelo,
    precio,
    anoFabrica,
    nomFabricante,
    IDcs,
    nombre,
    tipoConector,
    puertosValidos
  ) {
    super(id, tipoArticulo, tipoComponente, modelo, nomFabricante, precio, anoFabrica);

    this.IDcs = IDcs;
    this.nombre = nombre;
    this.tipoConector = tipoConector; // sera un STRING
    this.puertosValidos = puertosValidos; // varios valores de tipo entero
  }
}

export class CompEntrada extends Componentes {
  constructor(
    id,
    tipoArticulo,
    tipoComponente,
    modelo,
    precio,
    anoFabrica,
    nomFabricante,
    IDce,
    nombre,
    puertosValidos
  ) {
    super(id, tipoArticulo, tipoComponente, nomFabricante, modelo, precio, anoFabrica);
    this.IDce = IDce;
    this.nombre = nombre;
    this.puertosValidos = puertosValidos; // varios valores de tipo entero
  }
}

// Hijo de CompSalida
export class Impresora extends CompSalida {
  constructor(
    id,
    tipoArticulo,
    tipoComponente,
    nomFabricante,
    modelo,
    precio,
    anoFabrica,
    IDcs,
    nombre,
    tipoConector,
    puertosValidos,
    tipoImpre,
    tipoCartucho,
    numPage
  ) {
    super(
      id,
      tipoArticulo,
      tipoComponente,
      nomFabricante,
      modelo,
      precio,
      anoFabrica,
      IDcs,
      nombre,
      tipoConector,
      puertosValidos
    );
    this.tipoImpre = tipoImpre; //inyección o láser
    this.tipoCartucho = tipoCartucho;
    this.numPage = numPage; // número de páginas impresas desde el último cambio de "tóner"(sólo para impresoras láser)
  }
}
