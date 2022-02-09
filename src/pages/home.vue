<template>
  <p>Hello home!</p>
  <p>Hello home2</p>
  <div class="card__wrapper" v-for="item in items" :key="item.id">
    <Card :name="`${item.lvl} lvl`" :title="item.title" />
  </div>
</template>

<script>
import Card from '@/components/UI/Card'

export default {
  name: "home",
  components: {Card},
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'archer',
          descr: 'archer archer archer archer',
          lvl: 4
        },
        {
          id: 2,
          title: 'Wizard',
          descr: 'Wizard Wizard Wizard Wizard',
          lvl: 5
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
