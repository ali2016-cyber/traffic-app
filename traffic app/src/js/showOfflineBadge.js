function showOfflineBadge(distanceMeters, minutesAgo) {
  const badge    = document.getElementById('danger-badge-5k');
  const distText = document.getElementById('badge-distance');

  distText.innerHTML = `
    📡 véhicule hors ligne détecté<br/>
    📏 Distance: <b>${Math.round(distanceMeters)} متر</b><br/>
    ⏱️ Dernière position: il y a <b>${minutesAgo} minute(s)</b><br/>
    ⚠️ Position peut avoir changé
  `;

  badge.classList.add('show-badge');
  playAlarm_5k();

  // cache après 8 secondes (plus long car info importante)
  clearTimeout(warningTimer5k);
  warningTimer5k = setTimeout(() => {
    badge.classList.remove('show-badge');
  }, 8000);
}