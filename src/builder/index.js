const Compu = require("./builder"); 
const gamer = new Compu();


gamer
    .setPantalla("Pantalla Oled")
    .setMouse("mouse RGB")
    .setTeclado("teclado RGB")
    .setAltavoces("altavoces Sony")
    .bake();