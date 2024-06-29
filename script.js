
//funcion para iniciar el mapa
function iniciarMap() {

  //definir variables de ubicacion  
  var coord = { lat: -9.975421989571627, lng: -84.03960149098887 };
  
  //crear un nuevo objeto para la conexion con el mapa
  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: coord
  });

  //creación del marcador de mapa
  var marker = new google.maps.Marker({
      position: coord,
      map: map
  });
}


