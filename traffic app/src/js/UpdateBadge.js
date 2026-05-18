 // ── ACCURACY BADGE ─────────────────────────────────────
      function updateBadge() {
        const dot = document.getElementById('accuracy-dot');
        const txt = document.getElementById('accuracy-text');
        if (!socketReady) {
          dot.style.background = '#ef4444';
          txt.textContent = '❌ لا يوجد اتصال بالسيرفر';
          return;
        }
        if (lastAccuracy === null) {
          dot.style.background = '#6b7280';
          txt.textContent = '⏳ في انتظار GPS...';
          return;
        }
        if (lastAccuracy < 50) {
          dot.style.background = '#22c55e';
          txt.textContent = `📡 GPS دقيق: ${Math.round(lastAccuracy)} متر`;
        } else if (lastAccuracy < 300) {
          dot.style.background = '#f59e0b';
          txt.textContent = `📡 دقة مقبولة: ${Math.round(lastAccuracy)} متر`;
        } else {
          dot.style.background = '#6b7280';
          txt.textContent = `⚠️ دقة ضعيفة: ${Math.round(lastAccuracy)} متر`;
        }
      }