<template>
  <div class="direct">
    <div class="inner">
      <ul>
        <!--i 변수는 일반적으로 index를 의미하는 경우가 많아서,-->
        <!--item 같은 명시적 이름이 더 권장됩니다.-->
        <li
          v-for="i in directs"
          :key="i.name">
          <a :href="i.href">
            <div>
              <img
                :src="i.src"
                :alt="i.name"
                width="90" />
              <div class="text">
                {{ i.name }}
              </div>
            </div>
          </a>
        </li>
        <li>
          <div
            class="open-more"
            @click="onNav('LNB')">
            <div class="icon"></div>
            <div class="text">
              더보기
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  data () {
    return {
      directs: []
    }
  },

  created() {
    this.init()
  },
  methods : {
    async init () {
      this.directs = await this.$fetch({
        requestName: 'directs'
      })
    },
    onNav(whichSide) {
      this.$store.dispatch('navigation/onNav', whichSide)
    }
  }

}


</script>

<style scoped lang="scss">
.direct {
  .inner {
    padding: 50px 0;
    ul {
      display: flex;
      li {
        margin: 0 15px;
        img {
          display: block;

        }
        .text {
          margin-top: 15px;
          font-size: 15px;
          text-align: center;
        }
        .open-more {
          cursor: pointer;
          .icon {
            width: 90px;
            height: 90px;
            margin-bottom: 15px;
            background-image: url("https://trusting-williams-8cacfb.netlify.app/images/main_2x.png");
            background-position: 0 0;
            background-size: 209px;
          }
        }

      }
    }
  }
}


</style>
