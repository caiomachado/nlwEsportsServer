import express from 'express';
const app = express();
app.get('/ads', (req, res) => {
    return res.json([
        { id: 1, ad: 'Anuncio 1' },
        { id: 2, ad: 'Anuncio 2' },
        { id: 3, ad: 'Anuncio 3' },
    ]);
});
