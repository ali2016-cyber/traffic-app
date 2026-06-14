// ── SOCKET.IO ──────────────────────────────────────────
const serverUrl = "https://node-js-290g.onrender.com";
console.log('🔗 Connecting to:', serverUrl);

const socket = io(serverUrl, {
  transports: ['websocket'],
  upgrade: false,
  reconnectionAttempts: Infinity,  // ← never give up
  reconnectionDelay: 1000,         // wait 1 second before first retry
  reconnectionDelayMax: 5000,      // maximum 5 seconds between retries
  timeout: 10000                   // 10 seconds connection timeout
});