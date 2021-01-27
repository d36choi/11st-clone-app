<template>
  <a
    class="product-card">
    <div></div>
    <div class="contents">
      <div class="flag"></div>
      <div class="name"></div>
      <div class="prices">
        <div
          v-if="computedDiscountRate"
          class="discount-rate">
          <span class="value">
            {{ computedDiscountRate }}
          </span>
          <span class="unit">%</span>
        </div>
        <div class="price">
          <span class="value"></span>
          <span class="unit"></span>
        </div>
        <div class="list-price">
          <span class="value"></span>
          <span class="unit"></span>
        </div>
        <div class="options">
          <div class="free-shipping"></div>
          <div class="accumulation"><span></span></div>
          <span class="flex-space"></span>
          <div class="count"></div>
        </div>

      </div>
      <div class="coupons">
        <a
          href=""
          class="coupon">
          <div class="coupon__amount"></div>
          <div class="coupon__name"></div>
        </a>
      </div>

    </div>
  </a>
</template>


<script>

import numeral from 'numeral'
import _kebabCase from 'lodash/kebabCase'

export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      imageLoading : true
    }
  },
  computed: {
    computedDiscountRate () {
      // computed를 통해 아래 메소드로 계산되어 리턴되 값의 출력을 진행. 할인율
      if (!this.product.listPrice) return ''

      const price = this.product.price.value // 할인가
      const originalPrice = this.product.listPrice.value // 정가
      const discountRate = Math.floor(100 - (price / originalPrice) * 100)
      return discountRate // 내림
    }
  },
  mounted() {
    this.loadImage()
  },
  methods: {
    loadImage () {

    }
  }
}

</script>


<style scoped lang="scss">
.product-card {
  display: block;

  width: 394px;
  height: 368px;
  border-radius: 6px;
  overflow: hidden;
  background-color: #fff;
  border: 1px solid #ececec;
  box-shadow: 0 2px 10px rgba(#000, .06);
}

</style>