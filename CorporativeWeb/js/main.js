//******************************************************
//********** CONTENEDORES TIPO TOGGLE *************
//******************************************************

$(document).ready(function () {
  $("#login").hide();
  $("#header__login").on("click", function () {
    $("#login").slideToggle(); //defino una funcion que abre y cierra como bisagra
  });
});

$(document).ready(function () {
  $("#user_admin").hide();
  $("#administrador_usuarios").on("click", function () {
    $("#user_admin").slideToggle();
  });
});

$(document).ready(function () {
  $("#machine_admin").hide();
  $("#administrador_maquina").on("click", function () {
    $("#machine_admin").slideToggle();
  });
});

$(document).ready(function () {
  $("#prov_admin").hide();
  $("#administrador_proveedores").on("click", function () {
    $("#prov_admin").slideToggle();
  });
});

$(document).ready(function () {
  $("#maint_admin").hide();
  $("#administrador_mantenimiento").on("click", function () {
    $("#maint_admin").slideToggle();
  });
});

// Toogles de la vista contáctenos

$(document).ready(function () {
  $("#contactenos_whats").hide();
  $("#cont_whatsapp").on("click", function () {
    $("#contactenos_whats").slideToggle();
  });
});

$(document).ready(function () {
  $("#contactenos_telegram").hide();
  $("#cont_telegram").on("click", function () {
    $("#contactenos_telegram").slideToggle();
  });
});

$(document).ready(function () {
  $("#contactenos_linkedin").hide();
  $("#cont_linkedin").on("click", function () {
    $("#contactenos_linkedin").slideToggle();
  });
});

$(document).ready(function () {
  $("#contactenos_gmail").hide();
  $("#cont_gmail").on("click", function () {
    $("#contactenos_gmail").slideToggle();
  });
});

$(document).ready(function () {
  $("#contactenos_chat").hide();
  $("#cont_chat").on("click", function () {
    $("#contactenos_chat").slideToggle();
  });
});