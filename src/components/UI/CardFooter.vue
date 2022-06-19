<template>
  <div class="card-stats" >
    <div class="one-third" v-for="stat in itemprop.info" :key="stat">
      <div class="stat-value">{{ stat.value }}</div>
      <div class="stat">{{ stat.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardFooter",

  props: {
    itemprop: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>


