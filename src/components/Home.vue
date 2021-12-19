<template>
<link
  rel="stylesheet"
  href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
  integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
  crossorigin="anonymous"
/>
<link
  href="https://fonts.googleapis.com/css?family=Poppins:200i,300,400&display=swap"
  rel="stylesheet"
/>
<link
  href="https://fonts.googleapis.com/css?family=Raleway:700&display=swap"
  rel="stylesheet"
/>



<!-- START WELCOME SECTION -->

<section id="welcome-section" class="welcome-section">
  <h1>GymTic</h1>
  <p>"There is no magic pill"</p>
</section>

<!-- END WELCOME SECTION -->

<!-- START PROJECTS SECTION -->

<section id="projects" class="projects-section">
  <h2 class="projects-section-header">Planes</h2>

  <div class="projects-grid">

    <router-link to="/zumba">
    <a
      href="/basic"
      target="_blank"
      class="project project-tile"
    >
      <img
        class="project-image"
        src="https://www.evolucion.media/wp-content/uploads/2021/04/1597993555_784056_1597993862_noticia_normal.jpeg"
        alt="project"
      />
      <p class="project-title">
        <span class="code">&lt;</span>
        Planes ZumbasTIC
        <span class="code">&#47;&gt;</span>
      </p>
    </a>
      </router-link>

     <router-link to="/crossfit"> 
    <a
      
      target="_blank"
      class="project project-tile"
    >
      <img
        class="project-image"
        src="https://www.tododisca.com/wp-content/uploads/2021/03/Ejercicios-fitness--1140x740.jpg"
        alt="project"
      />
      <p class="project-title">
        <span class="code">&lt;</span>
        Planes CrossFit BodyTIC
        <span class="code">&#47;&gt;</span>
      </p>
    </a>
    </router-link>

    <router-link to="/combat">
       <a
      href="https://codepen.io/jaiver-salazar/pen/jOwRRjz"
      target="_blank"
      class="project project-tile"
    >
      <img
        class="project-image"
        src="https://static.wixstatic.com/media/d7e935_b437e101f3a74760bf5bb7126ca14993~mv2.jpg/v1/fill/w_800,h_600,al_c,q_90/d7e935_b437e101f3a74760bf5bb7126ca14993~mv2.jpg"
        alt="project"
      />
      <p class="project-title">
        <span class="code">&lt;</span>
        Planes TacTIC Combat
        <span class="code">&#47;&gt;</span>
      </p>
    </a>
    </router-link>
  </div>


</section>

<!-- END PROJECTS SECTION -->

<!-- START CONTACT SECTION -->

<section id="contact" class="contact-section">
  <div class="contact-section-header">
    <h2>Entrenemos juntos...</h2>
    <p>Por una mejor salud</p>
    <img src = "https://i.imgur.com/8QMCsmI.png" alt = "logo" height="750"> 
  </div>
  <div class="contact-links">
    <c
      href=""
      target="_blank"
      class="btn contact-details"
      ><i class="fab fa-facebook-square"></i> Facebook</c
    >
    <c
      id="profile-link"
      href=""
      target="_blank"
      class="btn contact-details"
      ><i class="fab fa-github"></i> GitHub</c
    >
    <c
      href=""
      target="_blank"
      class="btn contact-details"
      ><i class="fab fa-twitter"></i> Twitter</c
    >
    <c href="" class="btn contact-details"
      ><i class="fas fa-at"></i>  mail</c
    >
    <c href="tel:555-555-5555" class="btn contact-details"
      ><i class="fas fa-mobile-alt"></i> Telefóno</c
    >
  </div>
</section>

<!-- END CONTACT SECTION -->

<!-- START FOOTER SECTION -->

<footer>
  <p>
   
  </p>
  <p>

  </p>
</footer>

<!-- END FOOTER SECTION -->

</template>



<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
