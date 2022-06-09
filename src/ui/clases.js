class Computer {
    constructor (modelo, numUnidad, ano) {
      this.modelo = modelo;
      this.numUnidad = numUnidad;
      this.ano = ano;
    }
    // // Getter
    // get area() {
    //    return this.calcArea();
    //  }
    // // Método
    // calcArea () {
    //   return this.alto * this.ancho;
    // }
  }
  
  // const compu1 = new Computer(10, 10);
  
  // console.log(compu1.area); // 100


class Component {
  constructor(precio, nomFabricante, modelo, tipoConector, puertosValidos) {
    this.precio = precio;
    this.nomFabricante = nomFabricante;
    this.modelo = modelo;
    this.tipoConector = tipoConector;
    this.puertosValidos = puertosValidos;
  }
  
}

class CompSalida extends Component{
  constructor(ID, nombre, color) {
    this.ID = ID;
    this.nombre = nombre;
    this.color = color;
  }
}

class CompEntrada extends Component{
  constructor(ID, nombre, color) {
    this.ID = ID;
    this.nombre = nombre;
    this.color = color;
  }
}

class UnidadCentral extends Component{
  constructor(ID, antigu, memoria){
    this.ID= ID;
    this.antigu = antigu;
    this.memoria = memoria;
  }
}

class Builder {

}