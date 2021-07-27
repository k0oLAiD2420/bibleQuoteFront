<template>
  <div class="prime-container">
    <div v-if="loading" class="loading">
      Loading...
    </div>
    <div v-if="errorMsg" class="error">
      {{errorMsg}}
    </div>

    <div>
      <h1 v-html="dailyQuote"></h1>
      <h3>{{dailyQuoteInfo.book}}</h3>
      <h4>{{dailyQuoteInfo.chapter}}:{{dailyQuoteInfo.verse}}</h4>
    </div>


    <button @click="getAllQuotes()">
      Randomize Quote
    </button>

<!--    <button class="btn">-->
<!--      <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">-->
<!--        <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />-->
<!--        <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />-->
<!--      </svg>-->
<!--      <span>HOVER ME</span>-->
<!--    </button>-->

  </div>
</template>

<script>

const baseUrl = 'https://mr98chnbq4.execute-api.us-west-2.amazonaws.com/dev';
// const baseUrl = 'http://localhost:3000';

export default {
  name: "BibleQuote",
  data() {
    return {
      loading: false,
      errorMsg: null,
      quote: 0,
      dailyQuote: null,
      dailyQuoteInfo: {
        book: null,
        chapter: null,
        verse: null,

      }
    }
  },
  created(){
    this.getDayQuote();
  },
  methods: {
    async getAllQuotes(){
      const allQuotes = await fetch(`${baseUrl}/quotes`).then((response) => response.json())
      let randomItem = allQuotes[Math.floor(Math.random()*allQuotes.length)]
      this.pushDailyQuoteIntoData(randomItem)
    },
    async getDayQuote(){
      const returnData = await fetch(`${baseUrl}/quote/daily`).then((response) => response.json());
      this.pushDailyQuoteIntoData(returnData)
    },
    /*
     Replace <G> values *Denotes Jesus talking from API* with Span for color replacement
     Merge rest of quoteData into Daily info
     */
    pushDailyQuoteIntoData(quoteData){
      let { quote } = quoteData;
      quote = quote.replace('<G>', '<span style="color: red">')
      quote = quote.replace('<G>', '</span>')
      this.dailyQuote = quote;
      this.dailyQuoteInfo = quoteData;
    }
  }

}
</script>

<style scoped>
.prime-container {
  padding-top: 2em;
}


.btn {
  width: 180px;
  height: 60px;
  cursor: pointer;
  background: transparent;
  border: 1px solid #91C9FF;
  outline: none;
  transition: 1s ease-in-out;
}

svg {
  position: absolute;
  left: 0;
  top: 0;
  fill: none;
  stroke: blue;
  stroke-dasharray: 150 480;
  stroke-dashoffset: 150;
  transition: 1s ease-in-out;
}

.btn:hover {
  transition: 1s ease-in-out;
  background: #4F95DA;
}

.btn:hover svg {
  stroke-dashoffset: -480;
}

.btn span {
  color: #4F95DA;
  font-size: 18px;
  font-weight: 100;
}
</style>