<template>
  <div class="box">
    <!-- digital clock -->
    <div class="content">
      <span class="time hour" v-html="hour">  </span>
      <b id="colon">:</b>
      <span class="time min" v-html="minutes"></span>
    </div>
    <div class="location">
      <p> {{ locationString }} </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Clock",
  props: ['timeZone', 'locationString'],
  data(){
    return {
      hour: 12,
      minutes: '00'
    }
  },
  created() {
    // CALLING THIS FUNCTION TO UP TO DATE THE TIME
    setInterval(this.clockFun, 1000);
    // this.clockFun()
  },
  methods: {
    clockFun() {
      // GETTING THE TIME
      let timeZoneClock = new Date().toLocaleString('en-US', {timeZone: this.timeZone})
      let time = new Date(timeZoneClock);
      let hour = time.getHours();
      let min = time.getMinutes();
      // STYLING THE HOURS AND MINUTES
      // Add 0 In front of single digits
      hour = (hour < 10) ? '0' + hour : hour;
      min = (min < 10) ? '0' + min : min;
      // UPDATING THEM WITH HOUR AND MINUTE VALUE
      this.hour = hour;
      this.minutes = min;
    },
  }



}
</script>

<style scoped>
/* required font */
@font-face {
  font-family: sans-serif;
}

/* clock styles here  */
.box {
  border-bottom: 2px solid black;
  height: 85%;
  width: 30%;
  font-family: sans-serif;
  padding: 0;
  /*position: relative;*/
  display: flex;
  flex-direction: column;
}

.location {
  justify-content: center;
  font-style: italic;
}

.content {
  justify-content: center;
  font-size: medium;
}



/* Target ONLY Mobile Devices with a Touchscreen */
@media only screen and (hover: none) and (pointer: coarse){
  .content {
    font-size: x-small;
  }
}

</style>