function playAlarm_5k() {
       
        const snd = new Audio('warning-5k.mp3');
        snd.play().catch(e => console.warn('Audio blocked:', e));
      }