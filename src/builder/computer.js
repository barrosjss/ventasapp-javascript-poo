// Assemble computer (una unidad central)
class Computer {
  // Componentes (varios elementos perifericos)
  setUnidadCentral(unidadCentral) {
    this.unidadCentral = unidadCentral;
    return this;
  }

  // Dispositivo de entrada
  setTeclado(teclado) {
    this.teclado = teclado;
    return this;
  }

  setRaton(raton) {
    this.raton = raton;
    return this;
  }

  setTabletaGrafica(tabletaGrafica) {
    this.tabletaGrafica = tabletaGrafica;
    return this;
  }

  // Dispositivo de salida
  setpantallas(pantallas) {
    this.pantallas = pantallas;
    return this;
  }

  setImpresoras(impresoras) {
    this.impresoras = impresoras;
    return this;
  }

  // Dispositivo especial
  setPantallaTactil(pantallaTactil) {
    this.pantallaTactil = pantallaTactil;
    return this;
  }
  bake(){
    console.log(this);
  }
}

module.exports = Computer;