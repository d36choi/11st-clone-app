<template>
  <div>
    <header>
      <div class="inner">
        <div
          class="open-nav-drawer"
          @click="onNav">
        </div>
        <a
          href="javascript:void(0)"
          class="logo"></a>
        <div class="search">
          <input
            v-model="searchText"
            placeholder="찾고 싶은 상품을 검색해 보세요!"
            type="text"
            @keyup.enter="search" />
          <!-- v-on:keyup == @keyup-->
          <!-- BEM 작명법-->
          <div
            class="search__icon"
            @click="search"></div>
        </div>
        <div class="ranking">
          <div
            ref="swiper"
            class="swiper-container">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
              <!-- Slides -->
              <div
                v-for="(rank, index) in rankings.rankings"
                :key="rank.name"
                class="swiper-slide">
                <a :href="rank.href">
                  <span class="index">{{ index+1 }}</span>
                  <span class="name">{{ rank.name }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!--    마이페이지 드롭다운 메뉴    -->
        <ul class="user-menu">
          <li class="my_dropdown">
            <a
              href="javascript:void(0)">wow</a>
            <ul class="my__menu">
              <li
                v-for="i in myMenu"
                :key="i.name">
                <a :href="i.href">
                  {{ i.name }}
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0)"></a>
          </li>
          <li>
            <a href="javascript:void(0)"></a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              @click="onNav('RNB')"></a>
          </li>
        </ul>
      </div>
    </header>
    <!--  검색창 밑 바로가기 메뉴들  -->
    <div
      :class="{ fixed: isFixed }"
      class="utils">
      <div class="inner">
        <ul>
          <li>
            <a href="javascript:void(0)">베스트</a>
          </li>
          <li>
            <a href="javascript:void(0)">쿠폰/혜택</a>
          </li>
          <li>
            <a href="javascript:void(0)">기획전</a>
          </li>
          <li>
            <a href="javascript:void(0)">오늘장보기</a>
          </li>
          <li>
            <a href="javascript:void(0)">T공식대리점</a>
          </li>
          <li>
            <a
              class="shocking-deal"
              href="javascript:void(0)"></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>

import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'
import _throttle from 'lodash/throttle'

export default {
  data() {
    return {
      searchText : '',
      rankings: {},
      myMenu: [
        { name: '나의 쿠폰', href: 'javascript:void(0)' },
        { name: '주문/배송조회', href: 'javascript:void(0)' },
        { name: '취소/반품/교환', href: 'javascript:void(0)' },
        { name: '고객센터', href: 'javascript:void(0)' },
        { name: '회원정보', href: 'javascript:void(0)' }
      ],
      isFixed: false,
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    async init () {
      this.rankings = await this.$fetch({
        requestName: 'rankings'
      })

      this.$nextTick(function () {new Swiper(this.$refs.swiper, {
        direction: "vertical",
        speed: 1000,
        autoplay: {
          delay: 3000
        },
        loop: true
      })})
      // 해당 이벤트리스너를 통해, 상단 inner 영역내 요소들이 스크롤에도 고정적으로 fixed된다.
      window.addEventListener('scroll', _throttle(event => {
        this.isFixed = window.scrollY > 120
      }, 100))
    },
    onNav() {
      //dispatch는 actions를 실행해주는 함수.
      // navigation 내부의 onNav라는 action을 실행하겠다.
      this.$store.dispatch('navigation/onNav')
      console.log('myheaderclick')
    },
    async search() {
      if(!this.searchText.trim()) return;
      const res = await this.$search({
        searchText: this.searchText
      });
      console.log(res);
    }
  }
}
</script>
<style scoped lang="scss">
header {
  .inner{
    display: flex;
    align-items: center;
    height: 120px;

    .open-nav-drawer {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      cursor: pointer;
      box-shadow:
          0 2px 6px rgba(#000, .06),
          0 0 1px rgba(#000, .4);
      display:flex;
      justify-content: center;
      align-items: center;
      &::after {
        content: "";
        display: block;
        width: 36px;
        height: 36px;
        background-image: url("https://trusting-williams-8cacfb.netlify.app/images/globals_2x.png");
        background-position: -302px -203px;
        background-size: 363px;
      }
    }
    .logo {
      display: block;
      width: 94px;
      height: 40px;
      margin: 0 24px;
      background-image: url("https://trusting-williams-8cacfb.netlify.app/images/globals_2x.png");
      background-position: -162px 0;
      background-size: 363px;
      cursor: pointer;
    }
    .search {
      position: relative;
      input {
        //input의 default display값은 inline-block
        width: 500px;
        height: 50px;
        padding: 0 27px;
        border: 1px solid #ddd;
        border-radius: 25px;
        box-sizing: border-box;
        background-color: #FAFAFA;
        font-size: 18px;
        outline: none;
        font-family: 'Noto Sans KR', sans-serif;
        &::placeholder {
        }
      }
      &__icon{
        width: 50px;
        height: 50px;
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
        background-image: url("https://trusting-williams-8cacfb.netlify.app/images/globals_2x.png");
        background-position: -162px -45px;
        background-size: 363px;
      }
    }
    .ranking {
      width: 200px;
      margin: 0 30px;
      .swiper-container {
        width: 182px;
        height: 28px;
        .swiper-slide {
          a {
            display: block;
            height: 28px;
            line-height: 28px;
            text-decoration: none;
            font-size: 15px;
            color: #333;
            font-weight: 700;
            span.index {
              margin-right: 10px;
              color: #f43142;
              font-style: italic;
            }
            &:hover span.name {
              color: #f43142;
            }
          }

        }
      }
    }
    .user-menu {
      display: flex;
      > li {
        margin-right: 25px;
        padding: 7px 0;
        position: relative;
        &:last-child {
          margin-right: 0;
        }
        > a {
          display: block;
          width: 48px;
          height: 48px;
          background-image: url("https://trusting-williams-8cacfb.netlify.app/images/globals_2x.png");
          background-size: 363px;
        }
        &:nth-child(1) > a { background-position: -106px -145px; }
        &:nth-child(2) > a { background-position: 0px -198px; }
        &:nth-child(3) > a { background-position: -53px -198px; }
        &:nth-child(4) > a { background-position: -94px -70px; }
        &:nth-child(1) > a:hover { background-position: -53px -145px; }
        &:nth-child(2) > a:hover { background-position: -159px -145px; }
        &:nth-child(3) > a:hover { background-position: 0px -145px; }
        &:nth-child(4) > a:hover { background-position: -106px -198px; }
        &.my_dropdown {
          &:hover {
            .my__menu {
              display: block;
            }
          }
          .my__menu {
            display: none;
            width: 170px;
            padding: 15px 0;
            position: absolute;
            top: 60px;
            left: 0;
            z-index: 2;
            border: 1px solid #eee;
            border-radius: 6px;
            box-sizing: border-box;
            box-shadow: 0 6px 24px -8px rgba(#000,.12);
            background-color: #fff;
            li {
              a {
                display: block;
                padding: 7px 10px 7px 25px;
                font-size: 15px;
                &:hover {
                  color: #f43142;
                  background: #fafafa;
                }
              }
            }
          }
        }
      }
    }
  }
}
.utils {
  border-top: 1px solid #f1f1f1;
  &.fixed {
    padding-top: 120px;
  }
  .inner {
    width: 1240px;
    margin: 0 auto;
  }
  ul {
    display: flex;
    li {
      margin-right: 45px;
      &:last-child {
        margin-right: 0;
      }
      a {
        display: flex;
        align-items: center;
        height: 66px;
        font-size: 17px;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          background-color: #f43142;
          opacity: 0;
        }
        &:hover::after {
          opacity: 1;
        }
        &.shocking-deal {
          width: 63px;
          background-image: url("https://trusting-williams-8cacfb.netlify.app/images/globals_2x.png");
          background-position: -94px 0;
          background-size: 363px;
        }
      }
    }
  }
}
</style>