import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from './layout/Layout';
import { EditarCliente } from './pages/EditarCliente';
import { Inicio } from './pages/Inicio';
import { NuevoCliente } from './pages/NuevoCiente';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clientes" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="nuevo" element={<NuevoCliente />} />
          <Route path="editar/:id" element={<EditarCliente />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
