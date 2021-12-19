<template>
 <main id="main">
  <h1 id="title">Plan ZumbasTIC</h1>
  <p>El ritmo que tu cuerpo necesita... ACTIVATE!!!</p>
  <div id="img-div">
    <img id="image" src="https://www.evolucion.media/wp-content/uploads/2021/04/1597993555_784056_1597993862_noticia_normal.jpeg" alt="A business cat wearing a  necktie.">
    <figcaption id="img-caption"> Clase grupal de baile y zumba </figcaption>

  </div>
  <section id="tribute-info">
    <h3 id="headline">Dentro del plan ZumbasTIC podrás encontrar:</h3>

    <ul>
      <li>
        <strong>1 mes-Valor: $49.900</strong> Acceso diario ilimitado a zonas de spinning, cardio, peso libre, y clases de baile y zumba fitness grupales.
      </li>

      <li>
        <strong>3 meses-Valor: $120.000</strong> Acceso diario ilimitado a zonas de spinning, cardio, peso libre, y clases de baile y zumba fitness grupales + Camiseta de entrenamiento.
      </li>

      <li>
        <strong>Plan Semestre-Valor: $240.000</strong> Acceso diario ilimitado a zonas de spinning, cardio, peso libre, y clases de baile y zumba fitness grupales + Camiseta de entrenamiento + Rutina personalizada.
      </li>

      <li>
        <strong>Plan Anual-Valor: 500.000</strong> Acceso diario ilimitado a zonas de spinning, cardio, peso libre, y clases de baile y zumba fitness grupales + Camiseta de entrenamiento + Rutina personalizada + Videos de entrenamiento convencional en casa.
      </li>

    </ul>

    <blockquote>

    </blockquote>

  </section>
  <a>
  “No es cuestión de quien baila mejor, si no de quién goza y disfruta más del baile.”
  </a>

</main>
</template>

<style>



  main {
    text-align: center;
  }
  
  h1{
    text-align: center;
  }
  
  img {
  max-width: 60%;
  width: auto;
  max-height: 60%;
  height: auto;
  display: block;
  margin: 0 auto 0 auto;
  }

html {
  /* Setting a base font size of 10px give us easier rem calculations
     Info: 1rem === 10px, 1.5rem === 15px, 2rem === 20px and so forth
   */
  font-size: 10px;
  
}



@media (max-width: 460px) {
  h1 {
    font-size: 3.5rem;
    line-height: 1.2;
    
  }
}




#main {
  margin: 280px 8px;
  padding: 15px;
  border-radius: 5px;
  background: #1F2833;
  
}

@media (max-width: 460px) {
  #main {
    margin: 0;
  }
}

img {
  max-width: 100%;
  display: block;
  height: auto;
  margin: 0 auto;
}

#img-div {
  background: white;
  padding: 10px;
  margin: 0;
  background: #1F2833;
}

#img-caption {
  margin: 15px 0 5px 0;
}

@media (max-width: 460px) {
  #img-caption {
    font-size: 1.4rem;
  }
}

#headline {
  margin: 50px 0;
  text-align: center;
}

ul {
  max-width: 550px;
  margin: auto auto auto auto;
  text-align: left;
  line-height: 1.6;
  
}

blockquote {
  font-style: italic;
  max-width: 545px;
  margin: 0 auto 50px auto;
  text-align: left;
}
</style>