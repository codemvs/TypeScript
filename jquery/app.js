"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jquery");
var sweetalert2_1 = require("sweetalert2");
$(document).ready(function () {
    $("h1").text("Cabecera");
    $("p").text("Subititulo texto parrafo");
});
$("#botAlerta").on("click", function () {
    sweetalert2_1.default.fire({
        title: 'Custom animation with Animate.css',
        animation: false,
        customClass: {
            popup: 'animated tada'
        }
    });
});
