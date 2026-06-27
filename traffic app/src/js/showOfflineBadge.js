function showOfflineBadge(distanceMeters, minutesAgo, currentLang) {
  console.log("offline badge working");
  
  const badge    = document.getElementById('danger-badge-5k');
  const distText = document.getElementById('badge-distance');
  const carClose = document.getElementById("car-close");
  if (!badge || !distText) {
    console.log("the badge elements are not loaded");
  }
  if(currentLang === "ar") {
    carClose.textContent = "تنبيه! مركبة قريبة";
    distText.innerHTML = `
  📡 تم رصد سيارة غير متصلة<br/>
  📏 المسافة: <b>${Math.round(distanceMeters)} متر</b><br/>
  ⏱️ آخر موقع: منذ <b>${minutesAgo} دقيقة</b><br/>
  ⚠️ قد يكون الموقع قد تغير
`;
  } else if(currentLang === "pr"){
    carClose.textContent = "Jeertingo! Oto ina ɓadii";
    distText.innerHTML = `
  📡 Oto mo alaa konneksiyoŋ yiyaama<br/>
  📏 Woɗɗaaku: <b>${Math.round(distanceMeters)} m</b><br/>
  ⏱️ Nokku sakkitiiɗo: waɗii <b>${minutesAgo} minit</b><br/>
  ⚠️ Nokku oo ina waawi waylaade
`;
  }
  

  badge.classList.add('show-badge');
  playAlarm_5k();

  // cache après 8 secondes (plus long car info importante)
  clearTimeout(warningTimer5k);
  warningTimer5k = setTimeout(() => {
    badge.classList.remove('show-badge');
  }, 8000);
}