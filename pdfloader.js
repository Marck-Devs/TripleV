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


/* FUNCION QUE VERIFICA QUE EL ARCHIVO ES UN PDF */
function loaderCheck(file) {
    // SI es URL
    var xhttp = new XMLHttpRequest();
    xhttp.open('HEAD', file);
    xhttp.onreadystatechange = function () {
        if (this.readyState == this.DONE) {
            mimeType = this.getResponseHeader("Content-Type");
            if(mimeType == "aplication/pdf" || mimeType =="application/acrobat" || mimeType =="application/x-pdf" || mimeType=="applications/vnd.pdf" ){
                return true;
            }
        }
    }

    // SI ES Base 64
    if (file.includes("data:application/x-pdf;") || file.includes("data:application/acrobat;") || file.includes("data:application/pdf;") || file.includes("data:applications/vnd.pdff;") || file.includes("JVBER")){
        return true;
    }
    return false;
}


