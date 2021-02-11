<template>
  <div>
    <section class="hot-focus">
      <div
        ref="lazyLoadElement"
        class="inner">
        <h2>시선 집중</h2>
        <!--    swiper 시작    -->
        <div class="swiper-outer">
          <div
            ref="swiper"
            class="swiper-container">
            <div class="swiper-wrapper">
              <!-- 슬라이드 메 -->
              <div
                v-for="product in products"
                :key="product.name"
                class="swiper-slide">
                <product-card
                  :product="product"></product-card>
              </div>
            </div>
          </div>
          <div class="prev"></div>
          <div class="next"></div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>

import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'
import ProductCard from '~/src/components/ProductCard'

export default {
  components: {
    ProductCard
  },
  data () {
    return {
      products: []
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init () {
      this.$lazyLoad(this.$refs.lazyLoadElement)

      this.products = await this.$fetch({
        requestName: 'hotFocus'
      })

      console.log(this.products)

      this.$nextTick(() => {
        new Swiper(this.$refs.swiper, {
          speed: 1000, // 이동 속도
          spaceBetween: 29, // 슬라이드 사이 여백입니다~
          slidesPerView: 3, // 한 번에 보이는 슬라이드 개수입니다~
          slidesPerGroup: 3, // 한 번에 움직이는 슬라이드 개수입니다~
          loop: true,
          navigation: {
            nextEl: '.hot-focus .next',
            prevEl: '.hot-focus .prev'
          }
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
  section {
    background-color: #f6f7fb;

    .inner {
      height: 528px;

      .swiper-container {
        margin: -30px -16px;
        padding: 30px 16px;
      }
    }

  }

</style>
