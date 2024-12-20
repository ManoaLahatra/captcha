// generate-config.js
const fs = require('fs');
const path = require('path');

// Récupérer la clé API de l'environnement
const WAF_API_KEY = process.env.WAF_API_KEY;

if (!WAF_API_KEY) {
    console.error('La variable d\'environnement WAF_API_KEY n\'est pas définie.');
    process.exit(1); // Quitter avec une erreur si la variable n'est pas définie
}

// Chemin vers le fichier config.js
const configPath = path.resolve(__dirname, 'config.js');

// Créer le contenu du fichier config.js
const configContent = `window.WAF_API_KEY = '${WAF_API_KEY}';\n`;

// Écrire le contenu dans config.js
fs.writeFileSync(configPath, configContent);

console.log('config.js généré avec succès.');
