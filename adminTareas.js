const yargs = require('yargs');

//Configuraciones para cada comando
const createConfig = {
  id: {
    description: "Este es el ID de la tarea",
    alias: "i",
    type: "number",
    demandOption: true
  },
  title: {
    description: 'El título de la tarea',
    alias: 't',
    type: 'string',
    demandOption: true
  },
  description: {
    description: 'Descripción de la tarea',
    alias: 'd',
    type: 'string',
    demandOption: false
  }
};

const updateConfig = {
  title: {
    description: 'El título de la tarea a modificar',
    alias: 't',
    type: 'string',
    demandOption: true
  },
  description: {
    description: 'Nueva descripción de la tarea',
    alias: 'd',
    type: 'string',
    demandOption: true
  }
};

const deleteConfig = {
  title: {
    description: 'El título de la tarea a eliminar',
    alias: 't',
    type: 'string',
    demandOption: true
  }
};

//Funciones para manejar cada comando
const funcionCreate = (argv) => {
  console.log(`Creando tarea con ID: ${argv.id}`);

  console.log(`Creando tarea: ${argv.title}`);
  
  if(argv.description){
    console.log(`Descripción: ${argv.description}`);
  }
};

const funcionRead = () => {
  console.log('Mostrando todas las tareas...');
};

const funcionUpdate = (argv) => {
  console.log(`Actualizando la tarea: ${argv.title}`);
  console.log(`Nueva descripción: ${argv.description}`);
};

const funcionDelete = (argv) => {
  console.log(`Eliminando la tarea: ${argv.title}`);
};

//Definición de los comandos
const args = yargs
  .command('create', 'Crear una nueva tarea', createConfig, (argv) => funcionCreate(argv))
  .command('read', 'Mostrar todas las tareas', {}, (argv) => funcionRead())
  .command('update', 'Actualizar o modificar una tarea', updateConfig, (argv) => funcionUpdate(argv))
  .command('delete', 'Eliminar una tarea', deleteConfig, (argv) => funcionDelete(argv))
  .help()
  .argv;
