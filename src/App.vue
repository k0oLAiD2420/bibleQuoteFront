<template>
  <ShootingStarBack class="main-stars" star-count=50></ShootingStarBack>
  <div class="main">
    <div class="header">

      <font-awesome-icon v-if="this.theme === 'darkMode'" icon="sun" class="fa-2x" @click="toggleTheme" />
      <font-awesome-icon v-else icon="cloud-moon" class="fa-2x" @click="toggleTheme" />

<!--      <button @click="toggleTheme" aria-label="Toggle Themes">-->
<!--        <span v-if="this.theme === 'darkMode'"> Light</span>-->
<!--        <span v-else> Dark</span>-->
<!--      </button>-->
    </div>

<!--    <vue-particles-->
<!--        color="#dedede"-->
<!--        :particleOpacity="0.7"-->
<!--        :particlesNumber="80"-->
<!--        shapeType="circle"-->
<!--        :particleSize="4"-->
<!--        linesColor="#dedede"-->
<!--        :linesWidth="1"-->
<!--        :lineLinked="true"-->
<!--        :lineOpacity="0.4"-->
<!--        :linesDistance="150"-->
<!--        :moveSpeed="3"-->
<!--        :hoverEffect="true"-->
<!--        hoverMode="grab"-->
<!--        :clickEffect="true"-->
<!--        clickMode="push"></vue-particles>-->

    <div class="body-container">
      <div class="clocks">
        <Clock location-string="Home" time-zone="America/Boise"></Clock>
        <Clock location-string="Seoul, Korea" time-zone="Asia/Seoul"></Clock>
        <Clock location-string="Georgia" time-zone="America/Detroit"></Clock>
      </div>
      <div class="quotes">
        <BibleQuote></BibleQuote>
      </div>
    </div>

  </div>


</template>

<script>
import BibleQuote from "@/components/BibleQuote";
import Clock from "@/components/Clock";
import ShootingStarBack from "@/components/ShootingStarBack";

export default {
  name: 'App',
  components: {
    ShootingStarBack,
    Clock,
    BibleQuote
  },
  data(){
    return{
      theme: ''//When this property is empty, the theme is set to the default theme i.e. light mode.
    }
  },
  mounted(){
    let localTheme = localStorage.getItem('theme'); //gets stored theme value if any
    document.documentElement.setAttribute('data-theme', localTheme); // updates the data-theme attribute
  },
  methods: {
    toggleTheme(){
      this.theme = this.theme === 'darkMode' ? '' : 'darkMode';
      document.documentElement.setAttribute('data-theme', this.theme); // sets the data-theme attribute
      localStorage.setItem('theme', this.theme); // stores theme value on local storage
    }
  }
}
</script>

<style>

body {
  margin: 0;
}

:root {
  --background-color: white;
  --text-color: black;
}

[data-theme="darkMode"]{
  --background-color: black;
  --text-color: white;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*margin-top: 20px;*/
  background-color: var(--background-color);
  color: var(--text-color);
}

.main {
  position: relative;
  width: 100%;
  height: 100vh;
  /*overflow-x: hidden;*/
}

.body-container {
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.main-stars {
  overflow-x: hidden;
}
.clocks {
  display: flex;
  width: 100%;
  justify-content: center;
}


/* Target ONLY Mobile Devices with a Touchscreen */
@media only screen and (hover: none) and (pointer: coarse){
  .clocks {
    color: blue;
  }
}

</style>
