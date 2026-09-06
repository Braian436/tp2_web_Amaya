import { useState } from 'react'
import FichaDeTurno from './components/fichaDeTurno/FichaDeTurno'

function App() {

  return (
    <main>

      <FichaDeTurno cargando={true} />
      
      <FichaDeTurno error={true} />
      
      <FichaDeTurno turno={null} />
      
      <FichaDeTurno turno={{
        paciente: 'Ceferino Ruiz',
        hora: '09:30',
        urgente: true,
        observaciones: 'Traer estudios previos',
        sesiones: 4
      }} />
      
      <FichaDeTurno turno={{
        paciente: 'Ana Gómez',
        hora: '10:00',
        urgente: false,
        observaciones: null,
        sesiones: 0
      }} />
    </main>
  )
}

export default App
