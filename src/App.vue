<template>
  <div id="app">
     <nav  id="navbar" class="nav">
    <div class="header shadow">
      <h2></h2>
        
        <button v-on:click="loadHome">Inicio</button>
        <button v-on:click="loadLogIn" v-if="!is_auth">Ingresar</button>
        <button v-on:click="loadSignUp" v-if="!is_auth">Registro</button>
        <button v-on:click="loadReservation" v-if="is_auth">Perfil</button>
        <button v-on:click="logout" v-if="is_auth">Cerrar sesión</button>
   
      <div class="menu">
        <img src="./assets/menu.png">
      </div> 
    </div>
     </nav>
    <router-view v-on:completedLogin="completedLogin"></router-view>
  </div>
</template>

<script>
export default {
    name: "App", // Nombre del componente
    data: function() {
      return {
        is_auth: false
      }
    }, // Todas las variables de este componentes
    methods: {
      verifyAuth(){
        this.is_auth = localStorage.getItem("is_auth") || false;
        if(this.is_auth){
          this.loadReservation();
        }else{
          this.loadLogIn();
        }
      },
      loadHome(){
        this.$router.push({name: "Home"});
      },  
      loadLogIn(){
        this.$router.push({name: "logIn"});
      },
      loadSignUp(){
        this.$router.push({name: "signUp"});
      },
      loadReservation(){
        this.$router.push({name: "profile"});
      },
      completedLogin(data){
        this.is_auth = true;
        localStorage.setItem("is_auth", true);
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);
        this.verifyAuth()
      },
      logout(){
        this.is_auth = false;
        localStorage.clear();
        this.verifyAuth()
      }
    }, // Todas las funciones que usa este componente
    created: function () {
      this.verifyAuth();
    } // Eventos: lo que pasa cuando el componente se inicia
};
</script>

<style>

  body{
    margin: 0;
  }
  .header h2{
    margin: 0;
    font-family: sans-serif;
  }

  .menu{
    display: none;
  }
  .menu img{
        width: 25px;
  }
  @media(max-width: 500px){
   
    .menu {
      display: block;
    }
    .header{
      padding: 10px 20px;
    }
  }
  /* nav */
/* Custom properties/variables  */
:root {
  --main-white: #f0f0f0;
  --main-red: #eeff00;
  --main-blue: #45567d;
  --main-gray: #303841;
}

/* Base reset */
* {
  margin: 0;
  padding: 0;
}

/* box-sizing and font sizing */
*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;

  /* Set font size for easy rem calculations
   * default document font size = 16px, 1rem = 16px, 100% = 16px
   * (100% / 16px) * 10 = 62.5%, 1rem = 10px, 62.5% = 10px
  */
  font-size: 62.5%;
  scroll-behavior: smooth;
}

/* A few media query to set some font sizes at different screen sizes.
 * This helps automate a bit of responsiveness.
 * The trick is to use the rem unit for size values, margin and padding.
 * Because rem is relative to the document font size
 * when we scale up or down the font size on the document
 * it will affect all properties using rem units for the values.
*/

/* I am using the em unit for breakpoints
 * The calculation is the following
 * screen size divided by browser base font size
 * As an example: a breakpoint at 980px
 * 980px / 16px = 61.25em
*/

/* 1200px / 16px = 75em */
@media (max-width: 75em) {
  html {
    font-size: 60%;
  }
}

/* 980px / 16px = 61.25em */
@media (max-width: 61.25em) {
  html {
    font-size: 58%;
  }
}

/* 460px / 16px = 28.75em */
@media (max-width: 28.75em) {
  html {
    font-size: 55%;
  }
}




@import url('https://fonts.googleapis.com/css2?family=Abel&family=Fjalla+One&family=Montserrat&display=swap');
/* Base styles */



body {
  font-family: 'Abel', sans-serif;
  font-size: 1.8rem; /* 18px */
  font-weight: 400;
  line-height: 1.4;
  color: var(--main-white);
  background-color: #0B0C10;
  margin: 0;
}



h1,
h2 {
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  text-align: center;
}

h1 {
  font-size: 8rem;
  color: #66FCF1;
}

h2 {
  font-size: 4.2rem;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: var(--main-white);
}

img {
  display: block;
  width: 100%;
}

/* nav */

.nav {
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #C5C6C7;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.4);
  z-index: 10;
  padding: 15px;
}

.nav-list {
  display: flex;
  margin-right: 2rem;
}

@media (max-width: 28.75em) {
  .nav {
    justify-content: center;
  }

  .nav-list {
    margin: 0 1rem;
  }
}

.nav-list a {
  display: block;
  font-size: 2.2rem;
  padding: 2rem;
  color: black;
}

.nav-list a:hover {
  background: var(--main-blue);
}

/* Welcome section */

.welcome-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #1F2833;
  background-image: url("https://wallpapercave.com/wp/wp8916449.jpg");
}

.welcome-section > p {
  font-size: 3rem;
  font-weight: bolder;
  text-shadow: #FC0 2px 0 10px;
  color: var(--main-red);
}

/* Projects section */

.projects-section {
  text-align: center;
  padding: 5rem 2rem;
  background: #0B0C10;
}

.projects-section-header {
  max-width: 640px;
  font-size: 7rem;
  margin: 0 auto 17rem auto;
  border-bottom: 0.2rem solid var(--main-white);
}

@media (max-width: 28.75em) {
  .projects-section-header {
    font-size: 4rem;
  }
}

/* "Automagic" image grid using no media queries */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 4rem;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  margin-bottom: 16rem;
}

@media (max-width: 30.625em) {
  .projects-section {
    padding: 6rem 1rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}

.project {
  background: var(--main-gray);
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  border-radius: 2px;
}

.code {
  color: var(--main-gray);
  transition: color 0.3s ease-out;
}

.project:hover .code {
  color: #ff7f50;
}

.project-image {
  height: calc(100% - 6.8rem);
  width: 100%;
  object-fit: cover;
}

.project-title {
  font-size: 2rem;
  padding: 2rem 0.5rem;
}

.btn {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 2px;
}

.btn-show-all {
  font-size: 2rem;
  background: var(--main-gray);
  transition: background 0.3s ease-out;
}

.btn-show-all:hover {
  background: var(--main-red);
}

.btn-show-all:hover > i {
  transform: translateX(2px);
}

.btn-show-all > i {
  margin-left: 10px;
  transform: translateX(0);
  transition: transform 0.3s ease-out;
}

/* Contact section */

.contact-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 120vh;
  padding: 0 5rem;
  background: #1F2833;
}

.contact-section-header > h2 {
  font-size: 6rem;
}

@media (max-width: 28.75em) {
  .contact-section-header > h2 {
    font-size: 4rem;
  }
}

.contact-section-header > p {
  font-style: italic;
}

.contact-links {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 980px;
  margin-top: 4rem;
  flex-wrap: wrap;
}

.contact-details {
  color: white;
  font-size: 2.4rem;
  text-shadow: 2px 2px 1px #0f0e0e;
  transition: transform 0.3s ease-out;
}

.contact-details:hover {
  transform: translateY(8px);
  color: white;
}


/* Footer */

footer {
  font-weight: 300;
  display: flex;
  justify-content: space-evenly;
  padding: 2rem;
  background: #1F2833;
  border-top: 4px solid var(--main-red);
}

footer > p {
  margin: 2rem;
}

footer i {
  vertical-align: middle;
}

@media (max-width: 28.75em) {
  footer {
    flex-direction: column;
    text-align: center;
  }
}

@import url('https://fonts.googleapis.com/css2?family=Abel&family=Fjalla+One&family=Montserrat&display=swap');




 .header button {
  font-family: 'Montserrat', sans-serif;
  background-color: #008CBA; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

  .header button:hover{
    transform: translateY(8px);
  }


</style>
