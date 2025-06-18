# 📸 Photo Blog

Un progetto **Photo Blog** creato con **HTML**, **CSS** e **JavaScript** che sfrutta una **chiamata API** per recuperare un array di oggetti contenenti immagini, titoli e date. Le immagini vengono mostrate dinamicamente all’interno di card animate.


## 🚀 Funzionalità principali

- **Chiamata API** per ottenere dinamicamente i dati (immagine, titolo, data).
- **Rendering dinamico** delle card tramite JavaScript.
- **Animazioni CSS personalizzate**:
  - Rotazione su hover
  - Ingrandimento della card
  - Apparizione di un `box-shadow`
- **Modale** interattiva:
  - Al clic su una card, si apre una modale al centro della pagina
  - La modale mostra l’immagine cliccata in formato ingrandito


## 💡 Tecnologie utilizzate

- **HTML5** – Struttura semantica della pagina
- **CSS3** – Tutto lo stile è stato creato da zero, senza l'uso di framework esterni
- **JavaScript** – Per la logica della chiamata API, la creazione dinamica delle card e la gestione della modale


## 🖼️ Esempio di struttura dati dell'API

```json
[
	{
		"id": 1,
		"title": "Tramonto sulla spiaggia",
		"date": "16-07-2024",
		"url": "https://example.com/image1.jpg"
	},
	{
		"id": 2,
		"title": "Montagna innevata",
		"date": "23-12-2024",
		"url": "https://example.com/image2.jpg"
	}
]
