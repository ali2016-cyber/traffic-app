function showBadge100(data, currentLang) {
  if (badge100Muted) return;
  const badge    = document.getElementById('danger-badge-100');
  const distText = document.getElementById('badge-distance-100');
  const colisionAlert = document.getElementById('colision-alert');
  if(currentLang === "ar"){
    let direction = '📍 قريب منك';
  } else if(currentLang === "pr"){
    let direction = '📍 Ko ɓadii ma';
  }
  
  if (myLat !== null && data.otherLat) {
    const bearing = getBearing(myLat, myLng, data.otherLat, data.otherLng);
    direction = getRelativeDirection(myHeading, bearing);
  }
  if (currentLang === "ar") {
    colisionAlert.textContent = "انتباه! خطر اصطدام";
    distText.innerHTML = `
    📏 المسافة: <b>${Math.round(data.distance)} متر</b><br/>
    ${direction}<br/>
    🚗 سرعتك: <b>${formatSpeed(myCurrentSpeed)}</b><br/>
    🚙 سرعته: <b>${formatSpeed(data.otherSpeed)}</b>
  `;
  } else if(currentLang === "pr"){
    colisionAlert.textContent = "Reento! Kulol fokkondiral";
    distText.innerHTML = `
  📏 Woɗɗaaku: <b>${Math.round(data.distance)} m</b><br/>
  ${direction}<br/>
  🚗 Jaawgol maa: <b>${formatSpeed(myCurrentSpeed)}</b><br/>
  🚙 Jaawgol makko: <b>${formatSpeed(data.otherSpeed)}</b>
`;
  }
  

  badge.classList.add('show-badge');
  playAlarm();  // alarme urgente

  // auto-hide après 3.5s
  clearTimeout(warningTimer100);
  warningTimer100 = setTimeout(() => {
    badge.classList.remove('show-badge');
  }, 3500);
}

function showBadge5k(data, currentLang) {
  if (badge5kMuted) return;

  const badge    = document.getElementById('danger-badge-5k');
  const distText = document.getElementById('badge-distance');
  const carClose = document.getElementById("car-close");

  if(currentLang === "ar"){
    
    let direction = '📍 قريب منك';
  } else if(currentLang === "pr"){
    let direction = '📍 Ko ɓadii ma';
  }
  if (myLat !== null && data.otherLat) {
    const bearing = getBearing(myLat, myLng, data.otherLat, data.otherLng);
    direction = getRelativeDirection(myHeading, bearing);
  }

  //Show meters or km with decimal
  if(currentLang === "ar"){
    carClose.textContent = "تنبيه! مركبة قريبة";
    const distDisplay = data.distance < 1000 
    ? `${Math.round(data.distance)} متر`
    : `${(data.distance / 1000).toFixed(1)} كم`;

  distText.innerHTML = `
    📏 المسافة: <b>${distDisplay}</b><br/>
    ${direction}<br/>
    🚗 سرعتك: <b>${formatSpeed(myCurrentSpeed)}</b><br/>
    🚙 سرعته: <b>${formatSpeed(data.otherSpeed)}</b>
  `;
  } else if(currentLang === "pr"){
    carClose.textContent = "Jeertingo! Oto ina ɓadii";
    const distDisplay = data.distance < 1000 
    ? `${Math.round(data.distance)} m`
    : `${(data.distance / 1000).toFixed(1)} km`;

    distText.innerHTML = `
      📏 Woɗɗaaku: <b>${distDisplay}</b><br/>
      ${direction}<br/>
      🚗 Jaawgol maa: <b>${formatSpeed(myCurrentSpeed)}</b><br/>
      🚙 Jaawgol makko: <b>${formatSpeed(data.otherSpeed)}</b>
    `;
  }
  

  badge.classList.add('show-badge');
  playAlarm_5k();

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