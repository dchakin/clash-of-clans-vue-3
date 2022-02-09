<template>
  <div class="wrapper-person">
    <div v-if="item">
      <img :src="item.img" :alt="item.descr">
      <h1 style="color: #fff" class="title">{{ item.title }}</h1>
      <p>{{ item.descr }}</p>
      <div class="card-stats">
        <div
            class="one-third"
            v-for="(stat, index) in item.info"
            :key="index"
        >
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat">{{ stat.title }}</div>
        </div>
      </div>
      <div>
        <router-link to="/" class="btn btnPrimary">Back to home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import items from '@/seeders/items'

export default {
  name: "item",
  data() {
    return {
      item: null
    }
  },
  created() {
    this.item = items.find(el => el.alias === this.$route.params.itemAlias)
  }
}
</script>

<style lang="scss">
.wrapper-person {
  text-align: center;
  .card-stats {
    margin: 30px 0;
    border-radius: 14px;
  }
}
</style>
