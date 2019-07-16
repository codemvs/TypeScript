import "jquery";
import Swal from "sweetalert2";

$(document).ready(function(){
    
    $("h1").text("Cabecera");
    $("p").text("Subititulo texto parrafo");

});

$("#botAlerta").on("click",function(){
    Swal.fire({
        title: 'Custom animation with Animate.css',
        animation: false,
        customClass: {
          popup: 'animated tada'
        }
      })
});
