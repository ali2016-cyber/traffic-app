function showBadge100(data) {
  const badge    = document.getElementById('danger-badge-100');
  const distText = document.getElementById('badge-distance-100');

  let direction = '📍 قريب منك';
  if (myLat !== null && data.otherLat) {
    const bearing = getBearing(myLat, myLng, data.otherLat, data.otherLng);
    direction = getRelativeDirection(myHeading, bearing);
  }

  distText.innerHTML = `
    📏 المسافة: <b>${Math.round(data.distance)} متر</b><br/>
    ${direction}<br/>
    🚗 سرعتك: <b>${formatSpeed(myCurrentSpeed)}</b><br/>
    🚙 سرعته: <b>${formatSpeed(data.otherSpeed)}</b>
  `;

  badge.classList.add('show-badge');
  playAlarm();  // alarme urgente

  // auto-hide après 3.5s
  clearTimeout(warningTimer100);
  warningTimer100 = setTimeout(() => {
    badge.classList.remove('show-badge');
  }, 3500);
}

function showBadge5k(data) {
  const badge    = document.getElementById('danger-badge-5k');
  const distText = document.getElementById('badge-distance-5k');

  let direction = '📍 قريب منك';
  if (myLat !== null && data.otherLat) {
    const bearing = getBearing(myLat, myLng, data.otherLat, data.otherLng);
    direction = getRelativeDirection(myHeading, bearing);
  }

  distText.innerHTML = `
    📏 المسافة: <b>${Math.round(data.distance / 1000, 1)} كم</b><br/>
    ${direction}<br/>
    🚗 سرعتك: <b>${formatSpeed(myCurrentSpeed)}</b><br/>
    🚙 سرعته: <b>${formatSpeed(data.otherSpeed)}</b>
  `;

  badge.classList.add('show-badge');
  playAlarm_5k();  // alarme douce

  // auto-hide après 3.5s
  clearTimeout(warningTimer5k);
  warningTimer5k = setTimeout(() => {
    badge.classList.remove('show-badge');
  }, 3500);
}