<template>
  <input type="text" v-model="message" placeholder="masukkan pesan"/>
  <button @click="kirim()">Kirim Pesan </button>
  <pre> Response: {{info}}</pre>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      message: "",
      info: ""
    }
  },
  methods: {
    kirim(){
      this.axios.get("https://indodax.com/api/"+this.message+"_idr/ticker")
      .then(response => {
        var harga = response.data.ticker.last;
        this.info = "harga terakhir " + harga
  })},
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
