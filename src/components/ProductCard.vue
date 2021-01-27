<template>
  <a
    class="product-card">
    <div></div>
    <div class="contents">
      <div class="flag"></div>
      <div class="name"></div>
      <div class="prices">
        <div class="discount-rate">
          <span class="value"></span>
          <span class="unit"></span>
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