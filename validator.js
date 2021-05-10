
//function validate(template:object, options:object) -> object
//Toma como valores un objeto que será la referencia, y otro que será las opciones que pase el usuario.
function validate(template, options){

    for (const property in template) {
        if(options[property] != null)
            template[property] = options[property];
      }


      return template;
}

//No entendi bien la lo que había que hacer exactamente por lo que hice este segundo que creo que fuunciona tambien
/*
function validate(template, options){

    var devolver = {};

    for (const property in template) {
        if(options[property] != null)
            devolver[property] = options[property];
        else
            devolver[property] = template[property];
      }

      return devolver;

}
*/