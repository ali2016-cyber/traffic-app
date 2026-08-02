# 🚗 Real-Time Collision Alert System (PWA)
## 📖 Description
This project proposes an innovative software solution aimed at improving road safety. It is a real-time collision alert system developed as a **Progressive Web App (PWA)**. The application tracks the geospatial position of drivers and triggers instant audio and visual alerts as soon as an imminent danger is detected (when another user enters a critical radius of 100 meters).
## 🌍 Context and Problem Statement
Road safety is currently one of the major public health challenges worldwide. In Mauritania, this situation is particularly concerning. The rapid increase ies, n the number of vehiclthe urban development of Nouakchott, and the heavy traffic on major national roads (such as the Route de l'Espoir) have led to a significant increase in the frequency of accidents.
While the causes are multiple (speeding, lack of visibility, inattention), a technical factor remains decisive: **the lack of proactive alert systems capable of notifying drivers of imminent danger in real-time**. This graduation project aims directly to fill this technological gap.
## ✨ Key Features
- **Real-Time Geospatial Tracking**: Continuous and accurate geolocation of users.
- **Proactive Alerts (Visual & Audio)**: Instant triggering as soon as another vehicle is within a critical radius of **100 meters**.
- **Optimized PWA Experience**: A fluid, lightweight, and cross-platform interface. The choice of a PWA is specifically designed to be adapted to Mauritanian mobile networks, without requiring heavy installation via traditional app stores.
- **Interactive Mapping**: Live visualization through a high-performance map interface.
## 🛠️ Architecture and Technologies
The core of the solution relies on a robust architecture ensuring zero-latency communication:
*   **Frontend / Interface**: Progressive Web App (HTML/CSS/JS)
*   **Mapping**: [Leaflet.js](https://leafletjs.com/) and [OpenStreetMap](https://www.openstreetmap.org/)
*   **Backend**: [Node.js](https://nodejs.org/)
*   **Real-Time**: **WebSocket** protocol ensuring instant, bidirectional communication between the server and clients.
*   **Algorithm (Distance Calculation)**: Implementation of mathematical models for spherical distance calculation, notably the **Haversine Formula**, for maximum precision in calculating the 100-meter radius.
