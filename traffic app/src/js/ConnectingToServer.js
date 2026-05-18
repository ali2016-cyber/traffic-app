      // ── SOCKET.IO ──────────────────────────────────────────
      const serverUrl = "https://node-js-290g.onrender.com";
      console.log('🔗 Connecting to:', serverUrl);

      const socket = io(serverUrl, {
        transports: ['websocket'],
        upgrade: false,
        reconnectionAttempts: 5
      });