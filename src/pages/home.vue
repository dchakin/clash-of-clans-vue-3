<template>
  <carousel :settings="settings" :breakpoints="breakpoints">
    <slide class="card__wrapper" v-for="item in items" :key="item.id">
      <Card
          :name="`${item.lvl} lvl`"
          :title="item.title"
          :imgUrl="item.img"
          :link="`/${item.alias}`"
          :itemprop="item"
      >
        <template v-slot:body>
          {{ item.descr }}
        </template>
<!--        <template v-slot:footer>-->
<!--          <div class="card-stats">-->
<!--            <div-->
<!--                class="one-third"-->
<!--                v-for="(stat, index) in item.info"-->
<!--                :key="index"-->
<!--            >-->
<!--              <div class="stat-value">{{ stat.value }}</div>-->
<!--              <div class="stat">{{ stat.title }}</div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </template>-->
      </Card>
    </slide>
    <!--addons-->
    <template #addons>
      <navigation/>
    </template>
  </carousel>
</template>

<script>
import Card from '@/components/UI/Card'
import items from '@/seeders/items.js'
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Navigation} from 'vue3-carousel'

export default {
  name: "home",
  components: {
    Card,
    Carousel,
    Slide,
    Navigation
  },
  data() {
    return {
      items: items,
      settings: {
        itemsToShow: 2,
        wrapAround: true,
        snapAlign: "center"
      },
      breakpoints: {
        300: {
          itemsToShow: 1
        },
        700: {
          itemsToShow: 1
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
