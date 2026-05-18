function playAlarm() {
       
        const snd = new Audio('warning.mp3');
        snd.play().catch(e => console.warn('Audio blocked:', e));
      }