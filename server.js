const express = require('express');
const path = require('path'); // Per gestire i percorsi dei file

const app = express();
const port = 3000;

const cors = require('cors');

// Configurazione CORS
const corsOptions = {
    origin: 'http://192.168.1.12', // Modifica con l'IP del client che sta tentando di accedere
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions)); // Usa la configurazione CORS specifica

app.use(express.json());  // Assicurati di usare express.json() per il parsing dei body JSON

let currentStatus = {
    phase: "Lavoro",
    timeRemaining: 45 * 60  // 45 minuti
};

// Endpoint per ottenere lo stato attuale
app.get('/status', (req, res) => {
    res.status(200).json(currentStatus);
});

// Endpoint per aggiornare lo stato
app.post('/status', (req, res) => {
    console.log('Dati ricevuti:', req.body);
    // Aggiorna lo stato attuale con i dati inviati dal client master
    currentStatus = req.body;
    console.log('Stato aggiornato:', currentStatus);
    res.status(200).json({ message: 'Stato aggiornato correttamente', status: currentStatus });
});

app.use(express.static(path.join(__dirname, 'public')));

// Serve la pagina principale
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, '192.168.1.44', () => {
    console.log(`Server in esecuzione su http://192.168.1.44:${port}`);
});
