<template>
  <div>
    <ul>
      <li v-for="nama in this.$store.state.listPenduduk" :key="nama">
        {{ nama }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LihatView",
};
</script>

<style lang="scss" scoped>
</style>