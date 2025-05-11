import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from the React app
app.use(express.static(path.resolve(__dirname, '../dist')));

// API endpoints
app.get('/api/products', (req, res) => {
  try {
    const productsData = fs.readFileSync(path.resolve(__dirname, '../src/data/index.ts'), 'utf8');
    // Extract products array (this is a simplified example)
    res.json({ success: true, message: 'Products retrieved successfully' });
  } catch (error) {
    console.error('Error retrieving products:', error);
    res.status(500).json({ success: false, message: 'Failed to retrieve products' });
  }
});

app.get('/api/team', (req, res) => {
  try {
    const teamData = fs.readFileSync(path.resolve(__dirname, '../src/data/index.ts'), 'utf8');
    // Extract team members array (simplified)
    res.json({ success: true, message: 'Team members retrieved successfully' });
  } catch (error) {
    console.error('Error retrieving team members:', error);
    res.status(500).json({ success: false, message: 'Failed to retrieve team members' });
  }
});

// Contact form submission endpoint
app.post('/api/contact', express.json(), (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Validate inputs
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }
    
    // In a real app, you would save this to a database or send an email
    console.log('Contact form submission:', { name, email, message });
    
    res.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
});

// The "catchall" handler: for any request that doesn't match one above, send back the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});