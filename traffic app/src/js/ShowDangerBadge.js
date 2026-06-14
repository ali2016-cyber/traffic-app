function showBadge100(data) {
  if (badge100Muted) return;
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
  if (badge5kMuted) return;   // ← don't show if muted

  const badge    = document.getElementById('danger-badge-5k');
  const distText = document.getElementById('badge-distance');

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

// ── CLOSE FUNCTIONS ────────────────────────────────
function closeBadge100() {
  clearTimeout(warningTimer100);
  document.getElementById('danger-badge-100').classList.remove('show-badge');
  badge100Muted = true;   // ← mute for 10 seconds

  // auto-unmute after 10 seconds
  setTimeout(() => {
    badge100Muted = false;
    console.log('🔔 Badge 100m réactivé');
  }, 10000);
}

function closeBadge5k() {
  clearTimeout(warningTimer5k);
  document.getElementById('danger-badge-5k').classList.remove('show-badge');
  badge5kMuted = true;    // ← mute for 10 seconds

  setTimeout(() => {
    badge5kMuted = false;
    console.log('🔔 Badge 5km réactivé');
  }, 10000);
}