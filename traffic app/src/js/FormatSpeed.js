function formatSpeed(speedMs) {
        if (speedMs === null || speedMs < 0) return '-- كم/س';
        return `${Math.round(speedMs * 3.6)} كم/س`;
      }