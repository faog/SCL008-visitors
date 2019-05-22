//llamado a las rutas
//Archivo base que comunica a todas las cosas

//1. Llamado a la inicialización de la ruta (route) y llamado al template de inicio (templateSignIn)

import { initRouter} from './route.js';
import { initFirebase } from './assets/js/initFirebase.js';

const init = () => {
    initFirebase();
    initRouter();  
}

window.addEventListener('load', init);