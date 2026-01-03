# Boeken en Auteurs API

## Inhoud
Dit project is een eenvoudige data-driven API voor het beheren van boeken en auteurs. 
De API ondersteunt CRUD-operaties voor beide entiteiten, basisvalidatie, zoeken, sorteren en paginering.

**Features:**
- Boeken en auteurs aanmaken, lezen, bijwerken en verwijderen (CRUD)
- Zoeken op titel van boeken of naam van auteurs
- Sorteren van resultaten
- Paginering met limit en offset
- Endpointspagina die alle API-endpoints overzichtelijk toont
- Een extra HTML-pagina die de boeken en auteurs dynamisch toont met klikbare titels en namen voor het weergeven van details

## Gebruikte bronnen
- Cursus
- Documentatie van MongoDB
- Documentatie van Mongoose

## Installatie
1. git clone <repository-url>
2. cd Nodejs
3. npm install
4. Plaats het volgende in een .env bestand:
   1. MONGO_URI=<uw_mongodb_uri>
5. Plaats het volgende in de terminal om de server op te starten:
   1. node src/index.js
6. De server draait op http://localhost:3000

## Endpoints
De API-endpoints zijn te vinden op: http://localhost:3000/endpoints.html

## Data
De data van boeken en auteurs is te bekijken op: http://localhost:3000/data.html
