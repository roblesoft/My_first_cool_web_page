var consulta = $("#searchTable").DataTable();

$("#inputbusqueda").keyup(function(){
  consulta.search($(this).val()).draw();

  $("header").css({
    "background": "rgba(0, 0, 0, 0.5)",
    "height": "100vh"
  })

  if($("#inputbusqueda").val() == ""){
    $("header").css({
      "background": "none",
      "height": "auto"
    })
    $("#search").hide()

  }else{
    $("#search").fadeIn("fast");
  }
})
