// Agrega un parámetro adicional 'mapId' para identificar cada mapa
async function initMap(latitude, longitude, mapId) {
  let position = { lat: latitude, lng: longitude };

  await waitForGoogleMaps();

  // Crea el mapa con el ID específico y las coordenadas dadas
  const map = new google.maps.Map(document.getElementById(mapId), {
    zoom: 13.5,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // Crea el marcador en las coordenadas dadas
  const marker = new google.maps.Marker({
    map: map,
    position: position,
    title: `Ubicación ${mapId}`,
  });
}

// La función para esperar a que se cargue Google Maps
async function waitForGoogleMaps() {
  return new Promise((resolve) => {
    const checkGoogleMapsLoaded = () => {
      if (typeof google !== "undefined") {
        resolve();
      } else {
        setTimeout(checkGoogleMapsLoaded, 100);
      }
    };
    checkGoogleMapsLoaded();
  });
}
