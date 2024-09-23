const yargs = require('yargs');

//Definimos el comando 'convert' con los argumentos 'file' y 'format'
yargs
  .command('convert <file> <format>','Convierte un archivo a otro formato',
    (yargs) => {
      // Configuramos los argumentos posicionales
      yargs
        .positional('file', {
          describe: 'Nombre del archivo a convertir',
          type: 'string',
          demandOption: true, // Obligatorio
        })
        .positional('format', {
          describe: 'Formato al que se va a convertir el archivo (ej. pdf, docx)',
          type: 'string',
          demandOption: true, // Obligatorio
        });
    },
    (argv) => {
      // Simulación de la conversión
      console.log(`Convirtiendo el archivo ${argv.file} al formato ${argv.format}`);
    }
  )
  .help() //Muestra ayuda cuando se invoca con --help
  .alias('help', 'h')
  .argv; //Ejecuta el procesamiento del comando
