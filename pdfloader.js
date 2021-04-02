

/* FUNCION PARA COMPROBAR QUE EXISTE EL PDF */
function pdfExists(url){
    var request = new XMLHttpRequest();  
    request.open('GET', url, true);
    request.onreadystatechange = function(){
        if (request.readyState === 4){
            if (request.status === 404) {  
                console.log("Error 404, El PDF no existe");
                return false;
            }  
        }
    };
    return true;
}