
# Introducción a `yargs` en Node.js

## ¿Qué es `yargs` y por qué deberías usarlo?

Cuando desarrollas aplicaciones de línea de comandos en Node.js, es común que necesites interactuar con la terminal mediante argumentos. Estos argumentos permiten que el usuario pase información directamente a tu aplicación cuando la ejecuta. 

Por ejemplo, podrías crear una aplicación para gestionar una lista de tareas y permitir que el usuario añada, elimine o actualice tareas con simples comandos en la terminal.

Aquí es donde el módulo `yargs` entra en juego. Te ayuda a:
1. Procesar argumentos de manera eficiente.
2. Definir comandos claros.
3. Crear una interfaz de ayuda automática (`--help`).
4. Validar los argumentos que se pasan al script.

## Instalación

Primero, instala `yargs` en tu proyecto con npm:

```bash
npm install yargs
```

---

## Ejemplo: Gestión de tareas con comandos

### Escenario
Vamos a crear una pequeña aplicación de línea de comandos que permita gestionar tareas pendientes. Los comandos que implementaremos serán:
- Crear una nueva tarea.
- Leer todas las tareas.
- Actualizar una tarea existente.
- Eliminar una tarea.

### Código: tareas.js

```javascript
const yargs = require('yargs');

// Configuraciones para cada comando
const createConfig = {
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
    demandOption: true
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

// Funciones para manejar cada comando
const funcionCreate = (argv) => {
  console.log(`Creando tarea: ${argv.title}`);
  console.log(`Descripción: ${argv.description}`);
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

// Definición de los comandos
const args = yargs
  .command('create', 'Crear una nueva tarea', createConfig, (argv) => funcionCreate(argv))
  .command('read', 'Mostrar todas las tareas', {}, (argv) => funcionRead())
  .command('update', 'Actualizar o modificar una tarea', updateConfig, (argv) => funcionUpdate(argv))
  .command('delete', 'Eliminar una tarea', deleteConfig, (argv) => funcionDelete(argv))
  .help()
  .argv;
```

### Explicación del código:

- **`createConfig`, `updateConfig`, y `deleteConfig`**: Son objetos que definen las opciones y argumentos necesarios para los comandos `create`, `update` y `delete`. Estas configuraciones especifican qué datos son requeridos.
  
- **Funciones (`funcionCreate`, `funcionRead`, `funcionUpdate`, `funcionDelete`)**: Cada comando ejecuta una función específica que realiza la acción solicitada.

- **Definición de comandos**: Usamos el método `.command()` de `yargs` para definir cada comando (crear, leer, actualizar, eliminar) y asociar cada uno con su función correspondiente.

### Ejecución de la aplicación en la terminal:

1. **Crear una nueva tarea**:
   ```bash
   node tareas.js create --title "Estudiar Node.js" --description "Leer la documentación oficial"
   ```
   Salida esperada:
   ```bash
   Creando tarea: Estudiar Node.js
   Descripción: Leer la documentación oficial
   ```

2. **Leer todas las tareas**:
   ```bash
   node tareas.js read
   ```
   Salida esperada:
   ```bash
   Mostrando todas las tareas...
   ```

3. **Actualizar una tarea existente**:
   ```bash
   node tasks.js update --title "Estudiar Node.js" --description "Practicar con yargs"
   ```
   Salida esperada:
   ```bash
   Actualizando la tarea: Estudiar Node.js
   Nueva descripción: Practicar con yargs
   ```

4. **Eliminar una tarea**:
   ```bash
   node tasks.js delete --title "Estudiar Node.js"
   ```
   Salida esperada:
   ```bash
   Eliminando la tarea: Estudiar Node.js
   ```

### Ayuda automática

El comando `--help` genera una interfaz de ayuda automáticamente:

```bash
node tasks.js --help
```

Salida:
```bash
Usage: tasks.js <command> [options]

Commands:
  tasks.js create  Crear una nueva tarea
  tasks.js read    Mostrar todas las tareas
  tasks.js update  Actualizar o modificar una tarea
  tasks.js delete  Eliminar una tarea

Options:
  --version  Show version number                                   [boolean]
  --help, -h Show help                                             [boolean]
```


## Conclusión

- El módulo `yargs` simplifica enormemente la creación de aplicaciones de línea de comandos en Node.js. 
- Te permite definir comandos claros, procesar argumentos, validar entradas, y generar automáticamente ayuda. 
- Si necesitas que los usuarios interactúen con tu aplicación a través de la terminal, `yargs` es una herramienta poderosa y fácil de usar.

