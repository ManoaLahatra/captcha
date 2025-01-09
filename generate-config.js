import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Charger les variables d'environnement
dotenv.config();

// Récupérer la clé API de l'environnement
const WAF_API_KEY = process.env.WAF_API_KEY;

if (!WAF_API_KEY) {
    console.error("La variable d'environnement WAF_API_KEY n'est pas définie.");
    process.exit(1); // Quitter avec une erreur si la variable n'est pas définie
}

// Chemin vers le fichier config.js dans le dossier public
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicPath = resolve(__dirname, 'public'); // Dossier public
const configPath = resolve(publicPath, 'config.js'); // Chemin vers public/config.js

// Créer le contenu du fichier config.js
const configContent = `window.WAF_API_KEY = '${WAF_API_KEY}';\n`;

// Vérifie si le dossier public existe, sinon le créer
import { existsSync, mkdirSync } from 'fs';
if (!existsSync(publicPath)) {
    mkdirSync(publicPath); // Crée le dossier public s'il n'existe pas
}

// Écrire le contenu dans public/config.js
writeFileSync(configPath, configContent);

console.log('config.js généré avec succès dans le dossier public.');
