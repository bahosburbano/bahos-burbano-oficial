// Importamos herramientas de Node para manejar archivos
import fs from 'fs';
import path from 'path';

// Datos de los socios
const socios = [
  {
    nombre: "Fauer",
    apellido: "Bahos",
    cargo: "Socio Fundador",
    email: "fauer.bahos@bahosburbano.com",
    telefono: "+573136621779",
    vcardFile: "vcard-fauer.vcf"
  },
  {
    nombre: "Manuel",
    apellido: "Burbano",
    cargo: "Socio Fundador",
    email: "manuel.burbano@bahosburbano.com",
    telefono: "+573136621779",
    vcardFile: "vcard-manuel.vcf"
  }
];

// Iteramos sobre cada socio para crear su V-Card
socios.forEach(socio => {
  // Contenido de la V-Card
  const contenido = `
BEGIN:VCARD
VERSION:3.0
N:${socio.apellido};${socio.nombre};;;
FN:${socio.nombre} ${socio.apellido}
ORG:Bahos & Burbano
TITLE:${socio.cargo}
EMAIL;TYPE=WORK:${socio.email}
TEL;TYPE=CELL:${socio.telefono}
URL:https://bahosburbano.com
END:VCARD
  `.trim();

  // Guardamos el archivo en la carpeta "public"
  fs.writeFileSync(
    path.resolve('public', socio.vcardFile),
    contenido
  );

  console.log(`✅ V-Card creada: ${socio.vcardFile}`);
});
