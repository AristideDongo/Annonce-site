import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const adData = req.body;

    // Ajouter un timestamp
    const timestamp = new Date().toISOString();
    adData.timestamp = timestamp;

    // Logique d'enregistrement dans la base de données
    // Exemple : await db.collection('ads').insertOne(adData);
    
    res.status(200).json({ message: 'Annonce postée avec succès !', data: adData });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
