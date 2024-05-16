const fs = require('node:fs');
const content = {
   name: "hello.txt",
   content: "Body"
}

// Crear archivo y guardar contenido
fs.writeFileSync(content.name, JSON.stringify(content))

// Leere contenido
const contentFile = fs.readFileSync(content.name, 'utf-8')
console.log('contenido del archivo',contentFile);

// Crear folder
const folderName = './app';
try {
   // Valida si no existe la carpeta
   if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
   }
} catch (err) {
   console.error(err);
}
