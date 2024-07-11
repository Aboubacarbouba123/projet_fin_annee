const express = require("express");
const cors = require("cors");
const connectDB = require("./BDconfig");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json({ limit: "10mb" }));

// Routes
app.use('/api/auth', require('./Routes/auth'));
app.use('/api/grumes', require('./Routes/grume'));
app.use('/api/chauffeur', require('./Routes/chauffeur'));
app.use('/api/pack',require('./Routes/pack'))
app.use('/api/entreScierie', require('./Routes/entreScierie'))
app.use('/api/gardien', require('./Routes/gardien'));  
app.use('/api/voiture', require('./Routes/voiture'));  
app.use('/api/receptionParcRupture', require('./Routes/receptionParcRupture')); 
app.use('/api/check-parc-rupture', require('./Routes/checkParcRupture'));
app.use('/api/preparation-billes', require('./Routes/preparationBille'));
app.use('/api/transformation-usinage', require('./Routes/transformationUsinage'));
app.use('/api/colissage', require('./Routes/colissage'));
app.use('/api/cubage', require('./Routes/cubage'));
app.use('/api/expedition', require('./Routes/expedition'))
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
