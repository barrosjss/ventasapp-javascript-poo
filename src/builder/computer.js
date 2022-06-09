class Compu {
  setPantalla(pantalla) {
    this.pantalla = pantalla;
    return this;
  }
  setMouse(mouse) {
    this.mouse = mouse;
    return this;
  }
  setTeclado(teclado) {
    this.teclado = teclado;
    return this;
  }
  setAltavoces(altavoces) {
    this.altavoces = altavoces;
    return this;
  }
  setTabletaGrafica(tabletaGrafica) {
    this.tabletaGrafica = tabletaGrafica;
    return this;
  }
  setImpresora(impresora) {
    this.impresora = impresora;
    return this;
  }
  bake(){
    console.log(this);
  }
}

module.exports = Compu;