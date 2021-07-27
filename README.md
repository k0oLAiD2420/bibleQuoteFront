# Simple Bible Quote Vue FrontEnd
Deployed utilizing AWS Amplify -- https://familytoolkit.com

Simple VueJS Side project that I use to test and play around in Vue. Also acts as a quick reference for me on my brother's timezone in Seoul.

### Components

 - BibleQuote.vue
    - Fetches and Displays latest Bible Quote from Lambda API (AWS ref: )
   
 - Clock.vue
    - Simple Clock used for rendering different timezones.
      - Can emit data from each. Current we only grab the single `seconds-update`
 
 - ShootStarBack.vue
   - The Shooting Star Background
      - Pass in the amount of stars present as prop
    

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
