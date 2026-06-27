 // ── ACCURACY BADGE ─────────────────────────────────────
      function updateBadge(currentLang) {
        const dot = document.getElementById('accuracy-dot');
        const txt = document.getElementById('accuracy-text');
        if (!socketReady) {
          dot.style.background = '#ef4444';
          if (currentLang === "ar"){
            txt.textContent = '❌ لا يوجد اتصال بالسيرفر';
          } else if (currentLang === "pr"){
            txt.textContent = '❌ Konneksiyoŋ e serweer alaa';
          }
          
          return;
        }
        if (lastAccuracy === null) {
          dot.style.background = '#6b7280';
          if (currentLang === "ar") {
            txt.textContent = '⏳ في انتظار GPS...';
          } else if (currentLang === "pr"){
            txt.textContent = '⏳ Ina fada GPS...';
          }
         
          return;
        }
        if (lastAccuracy < 50) {
          dot.style.background = '#22c55e';
          if(currentLang === "ar"){
          txt.textContent = `📡 GPS دقيق: ${Math.round(lastAccuracy)} متر`;
          } else if(currentLang === "pr"){
            txt.textContent = `📡 Laaɓal GPS: ${Math.round(lastAccuracy)} metre`;
          }
        } else if (lastAccuracy < 300) {
          dot.style.background = '#f59e0b';
          if(currentLang === "ar"){
            txt.textContent = `📡 دقة مقبولة: ${Math.round(lastAccuracy)} متر`;
          } else if(currentLang === "pr"){
            txt.textContent = `📡 Laaɓal yonaangal: ${Math.round(lastAccuracy)} m`;
          }
        } else {
          dot.style.background = '#6b7280';
          if(currentLang === "ar"){
            txt.textContent = `⚠️ دقة ضعيفة: ${Math.round(lastAccuracy)} متر`;
          }else if(currentLang === "pr"){
            txt.textContent = `⚠️ Laaɓal jaasngal: ${Math.round(lastAccuracy)} m`;
          }
        }
      }