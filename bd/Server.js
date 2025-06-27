import express from 'express';
import bodyParser from 'body-parser';
import trackData from './trackData/track.js'; // ✅ Ensure `.js` is used if "type": "module" in package.json

const app = express();
const PORT = process.env.PORT || 3300;

app.use(bodyParser.json());

app.post('/api/track', (req, res) => {
  const { trackingId } = req.body;
  console.log('📦 Received trackingId:', trackingId);

  const status = trackData[trackingId];

  if (status) {
    return res.status(200).json({ trackingId, status });
  } else {
    return res.status(404).json({ error: 'Tracking ID not found' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
