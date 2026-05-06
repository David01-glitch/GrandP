const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (_req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/about', (_req, res) => res.sendFile(path.join(__dirname, 'public', 'about.html')));
app.get('/services', (_req, res) => res.sendFile(path.join(__dirname, 'public', 'services.html')));
app.get('/privacy', (_req, res) => res.sendFile(path.join(__dirname, 'public', 'privacy.html')));
app.get('/contact', (_req, res) => res.sendFile(path.join(__dirname, 'public', 'contact.html')));

app.use((_req, res) => res.status(404).sendFile(path.join(__dirname, 'public', 'index.html')));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
