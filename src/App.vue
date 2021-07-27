<template>
  <ShootingStarBack class="main-stars" star-count=50></ShootingStarBack>
  <div class="main">
    <div class="header">
      <font-awesome-icon v-if="this.theme === 'darkMode'" icon="sun" class="fa-2x" @click="toggleTheme" />
      <font-awesome-icon v-else icon="cloud-moon" class="fa-2x" @click="toggleTheme" />
    </div>

    <div class="body-container">
      <div class="clocks">
        <!-- Just need one of the second counts-->
        <Clock @seconds-update="updateSeconds" location-string="Home" time-zone="America/Boise"></Clock>
        <Clock location-string="Seoul, Korea" time-zone="Asia/Seoul"></Clock>
        <Clock location-string="Georgia" time-zone="America/Detroit"></Clock>
      </div>
      <!--  Wanting to show passing data to parent -->
      <progress :value=counts max="60" id="progressBar"></progress>
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
      theme: '', //When this property is empty, the theme is set to the default theme i.e. light mode.
      counts: 0
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
    },
    updateSeconds( sec ){
      console.log('??' , sec);
      this.counts = sec;
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
  background-color: var(--background-color);
  color: var(--text-color);
}

.main {
  position: relative;
  width: 100%;
  height: 100vh;
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

#progressBar{
  width: 100%;
  height: 5px;
}

/* Target ONLY Mobile Devices with a Touchscreen */
@media only screen and (hover: none) and (pointer: coarse){
  .clocks {
    color: blue;
  }
  #progressBar {
    width: 100%;
    height: 0.2em;
  }
}

</style>
