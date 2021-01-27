<template>
  <div
    class="global-banner"
    v-if="done">
    <div class="ad"></div>
    <a
      :href="banner.vertical.href"
      class="wing wing--vertical">
      <div class="wing__inner">
        <div class="text">{{ banner.vertical.name }}</div>
        <div
          class="thumbnail"
          :style="`background-image: url(${banner.vertical.thumbnail});`"></div>
      </div>
    </a>
    <div class="wing-outer">
      <a
        :href="banner.horizontal.href"
        class="wing wing--horizontal">
        <div class="wing__inner">
          <div class="text">
            <div class="name">{{ banner.horizontal.name }}</div>
            <div class="price"><strong>{{ banner.horizontal.price.value }}</strong>
              {{ banner.horizontal.price.unit }}
            </div>
          </div>
          <div
            :style="getStyle"
            class="thumbnail"></div>
        </div>
      </a>
    </div>
    <div
      class="to-top"
      @click="toTop"></div>
  </div>
</template>

<script>
import scrollTo from 'scroll-to'

export default {
  data () {
     return {
       banner: {},
       done: false
     }
  },
  created() {
    this.init()
  },
  methods: {
    async init () {
      this.banner = await this.$fetch({
        requestName: 'banner'
      })
      this.done = true
    },
    toTop () {
      scrollTo(0, 0, {
        duration: 500
      });
    },
    getStyle() {
      return `background-image: url(${this.banner.horizontal.thumbnail});`
    }
  }

}
</script>

<style scoped lang="scss">
  .global-banner {
    width: 70px;
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 97;
    background-color: aqua;
    .ad {
      width: 34px;
      height: 18px;
      margin: 0 auto 6px;
      cursor: pointer;
      background-image: url("https://trusting-williams-8cacfb.netlify.app/images/ad_2x.png");
      background-repeat: no-repeat;
      background-size: 63px;
    }
    a.wing-outer {
      height: 10px;
      width: 10px;
      position: relative;
    }
    a.wing {
      display: block;
    }
    a.wing--vertical {
      width: 70px;
      margin-bottom: 10px;
      padding: 16px;
    }
    a.wing--horizontal {
      position: absolute;
      right: 0;
      width: 70px;
      height: 70px;
      padding-left: 16px;
      background-color: #fff;
      overflow: hidden;
      //-webkit-transition: .1s;
      transition: .1s;
    }
  }
</style>