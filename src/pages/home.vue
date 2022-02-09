<template>
  <div class="card__wrapper" v-for="item in items" :key="item.id">
    <Card
        :name="`${item.lvl} lvl`"
        :title="item.title"
        :imgUrl="item.img"
        :link="`/${item.alias}`"
    >
      <template v-slot:body>
        {{ item.descr }}
      </template>
      <template v-slot:footer>
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
      </template>
    </Card>
  </div>
</template>

<script>
import Card from '@/components/UI/Card'
import items from '@/seeders/items.js'

export default {
  name: "home",
  components: {Card},
  data() {
    return {
      items: items
    }
  }
}
</script>

<style scoped>

</style>
