require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { getConnection } = require('./db/db-connection-mongo');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

getConnection();

app.use('/api/generos', require('./routes/genero.routes'));
app.use('/api/directores', require('./routes/director.routes'));
app.use('/api/productoras', require('./routes/productora.routes'));
app.use('/api/tipos', require('./routes/tipo.routes'));
app.use('/api/media', require('./routes/media.routes'));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT} 🚀`);
});