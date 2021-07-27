<template>
  <div class="main">

    <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"></vue-particles>

    <div class="clock-container">
      <Clock location-string="Home" time-zone="America/Boise"></Clock>
      <Clock location-string="Seoul, Korea" time-zone="Asia/Seoul"></Clock>
      <Clock location-string="Georgia" time-zone="America/Detroit"></Clock>
      <BibleQuote></BibleQuote>
    </div>
  </div>

</template>

<script>
import BibleQuote from "@/components/BibleQuote";
import Clock from "@/components/Clock";

export default {
  name: 'App',
  components: {
    Clock,
    BibleQuote
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

.main {
  position: relative;
}

.clock-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

</style>
