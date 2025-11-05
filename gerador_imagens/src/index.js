//index.js - raiz da minha aplicação

import React from "react";
import App from './components/App'
import { createRoot } from 'react-dom/client'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'primereact/resources/themes/bootstrap4-light-purple/theme.css'

//recebe um id de uma tag e identifica qual a tag que vai ser identificada como raiz da minha interface gráfica
//root = tag onde será renderizado o código dos componentes
const root = createRoot(document.getElementById("root"))
//componente que eu quero renderizar na raiz 
root.render(<App/>)

