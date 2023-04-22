import { useState } from 'react';
import './App.css';
import Formulario from './componentes/Formulario/formulario';
import Header from './componentes/Header/Header.js';
import MiOrg from './componentes/MiOrg';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true)

  return (
    <div>
      <Header />
      <Formulario />
      <MiOrg />
    </div>
  );
}

export default App;