<template>
  <div>
    <input type="text" v-model="nama" placeholder="Masukkan nama....." />
    <button @click="simpan()">Simpan</button>
  </div>
</template>

<script>
export default {
  name: "TambahView",
  data() {
    return {
      nama: "",
    };
  },
  methods: {
    simpan() {
      this.$store.commit("add", this.nama);
      this.nama = "";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>