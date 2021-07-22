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

</style>