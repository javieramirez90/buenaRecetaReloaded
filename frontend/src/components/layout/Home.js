import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return ( 
      <div className="homeBuenaReceta">
        <section className="presentationBuenaReceta">
          <div>
            <h1>Buena receta</h1>
            <h3>
              Buena receta es la herramienta que te permite elaborar los platillos que más te gustan utilizando sólo los insumos necesarios.
              Actualmente un 60% de la comida que se produce es desperdiciada debido a la mala planeación en su consumo. Nuestra misión es evitar
              en cierto porcentaje el desperdicio.
            </h3>
          </div>
          <div>
            Previous
          </div>
          <video autoPlay loop className="video-background" muted playsInline src="https://res.cloudinary.com/dtciysqlf/video/upload/v1552173217/buenaReceta/BuenaRecetaVideo.mp4"></video>
        </section>
        <section className="taka">
          <h1>This is a catalogue</h1>
        </section>
        
      </div>
        
    )
  }
}
