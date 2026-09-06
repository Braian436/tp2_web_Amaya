import React from 'react'
import styles from './FichaDeTurno.module.css'

export default function FichaDeTurno({cargando, error, turno}) {
    if (cargando) {
        return <p>Cargando la informacion del turno</p>;
    }

    if (error) {
        return <p>Hubo un error al cargar la informacion del turno</p>;
    }

    if (!turno) {
        return <p>No se encontro el turno</p>;
    }

    return (
        <div className={turno.urgente ? styles.urgente : styles.normal}>
            <article>
                <h3>{turno.paciente}</h3>
                <p>Hora: {turno.hora}</p>
                {turno.urgente && <span>Urgente</span>}
                <p>{turno.observaciones ?? 'Sin observaciones'}</p>
                <p>Sesiones: {turno.sesiones}</p>
            </article>
        </div>
    )
}
