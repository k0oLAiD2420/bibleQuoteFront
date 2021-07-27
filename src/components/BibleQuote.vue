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
    <font-awesome-icon icon="random" class="fa-3x randomIcon" @click="getRandomQuote()"  />
  </div>
</template>

<script>


export default {
  name: "BibleQuote",
  data() {
    return {
      loading: false,
      BASE_URL: process.env.VUE_APP_BASE_URL,
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
    async getRandomQuote(){
      const allQuotes = await fetch(`${this.BASE_URL}/quotes`).then((response) => response.json())
      let randomItem = allQuotes[Math.floor(Math.random()*allQuotes.length)]
      this.pushDailyQuoteIntoData(randomItem)
    },
    async getDayQuote(){
      const returnData = await fetch(`${this.BASE_URL}/quote/daily`).then((response) => response.json());
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
.randomIcon{
  color: blue;
}
</style>