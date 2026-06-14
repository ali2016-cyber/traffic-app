// ── GPS FUNCTIONS ───────────────────────────────────────
function sendPosition(lat, lng, speed = 0) {
  if (socketReady) {
    socket.emit('positionUpdate', { id: userId, lat, lng, speed });
  } else {
    setTimeout(() => sendPosition(lat, lng, speed), 1000);
  }
}

async function startTracking() {
  const { BackgroundGeolocation } = Capacitor.Plugins;

  // ── variables pour stocker la dernière position connue ──
  let lastKnownLat   = null;
  let lastKnownLng   = null;
  let lastKnownSpeed = 0;

  await BackgroundGeolocation.addWatcher(
    {
      backgroundMessage: "التطبيق يتابع موقعك في الخلفية",
      backgroundTitle:   "نظام تنبيه المرور",
      requestPermissions: true,
      stale: false,
      distanceFilter: 0
    },
    (location, error) => {
      if (error) { console.error('❌ BG GPS:', error); return; }

      const lat     = location.latitude;
      const lng     = location.longitude;
      const accuracy = location.accuracy;
      const speed   = location.speed   ?? 0;
      const heading = location.bearing ?? null;

      // ── mettre à jour les variables globales ──
      myCurrentSpeed = speed;
      myHeading      = heading;
      myLat          = lat;
      myLng          = lng;

      // ── mettre à jour la dernière position connue ──
      lastKnownLat   = lat;
      lastKnownLng   = lng;
      lastKnownSpeed = speed;

      lastAccuracy = accuracy;
      updateBadge();

      if (accuracyCircle) map.removeLayer(accuracyCircle);
      accuracyCircle = L.circle([lat, lng], {
        radius: accuracy, color: 'blue',
        fillColor: '#30b0ff', fillOpacity: 0.1, weight: 2
      }).addTo(map);

      if (testMarker) map.removeLayer(testMarker);
      testMarker = L.marker([lat, lng], {
        icon: L.icon({
          iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI5IiBmaWxsPSJyZWQiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==',
          iconSize: [24, 24], iconAnchor: [12, 12]
        }),
        zIndexOffset: 1000
      }).addTo(map);

      if (!userPositionReceived) {
        userPositionReceived = true;
        map.setView([lat, lng], 17);
      }

      // PAS d'envoi ici — le setInterval s'en charge
    }
  );

  // ── Envoi forcé chaque seconde ─────────────────────────
  // indépendamment du GPS — fonctionne même en arrière-plan
  setInterval(() => {
    if (lastKnownLat !== null && socketReady) {
      sendPosition(lastKnownLat, lastKnownLng, lastKnownSpeed);

      // envoyer requestOfflineWarnings seulement
      // quand myLat est disponible
      if (myLat !== null) {
        socket.emit('requestOfflineWarnings', {
          lat: myLat,
          lng: myLng
        });
      }
    }
  }, 1000);
}