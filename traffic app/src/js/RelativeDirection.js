function getRelativeDirection(heading, bearingToOther) {
        if (heading === null) return '📍 قريب منك';
        const diff = (bearingToOther - heading + 360) % 360;
        if (diff <= 45 || diff >= 315)       return '⬆️ أمامك';
        else if (diff >= 135 && diff <= 225) return '⬇️ خلفك';
        else if (diff > 45  && diff < 135)  return '➡️ على يمينك';
        else                                 return '⬅️ على يسارك';
      }