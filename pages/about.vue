<template>
  <section class="inner">
    <div class="inner__header">
      <div id="fly-in" class="inner__header">
        <div>
          <span>
            <h1>Por que a Consilio?</h1>
            <div class="shape">
              <div class="perspective">
                <span class="render">i</span>
                <span class="render shadow">-</span>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
    <div class="inner__txt">
      <div class="content__title">
        <p>Lorem ipsum dolor sit</p>
        <h3>id laboriosam et voluptatem</h3>
      </div>
      <div class="box--primary shadow-box">
        <ul>
          <li v-for="(group, index) in groups" :key="index">
            <a
              @click="activeItem = index"
              :class="activeItem === index ? 'active' : ''"
            >{{group.name}}</a>
          </li>
        </ul>
      </div>
      <div class="content__tx--sx">
        <div v-for="(group, index) in groups" :key="index" v-show="activeItem === index">
          <p v-text="group.desc"></p>
          <button-shadow class="button" :text="textButton" :url="group.url"></button-shadow>
        </div>
      </div>
    </div>
    <div class="inner__video" style="--aspect-ratio: 16/9;">
      <iframe
        class="shadow-box"
        src="https://player.vimeo.com/video/86469286/?autoplay=1&loop=1&muted=1&title=false&transparent=true&byline=false"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
    </div>
    <div class="inner__team">
      <div class="inner__team--title">
        <parallax-element :parallaxStrength="-15" :type="'translation'">
          <h2>equipe</h2>
        </parallax-element>
        <span class="inner__team--title-bg">nosso time</span>
      </div>
    </div>
    <clients :clients="clients" :length="lengthClients" />
    <newsletter />
  </section>
</template>
<script>
var groups = {
  "GROUP A": {
    name: "GROUP A",
    desc:
      "Veniam nulla deserunt eum optio non, suscipit odio et nam pariatur, reprehenderit accusamus possimus inventore recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nulla deserunt eum optio non, suscipit odio et nam pariatur, reprehenderit accusamus possimus inventore recusandae. Quo nam amet commodi quaerat animi reprehenderit accusamus possimus inventore recusandae.",
    url: "#"
  },
  "GROUP B": {
    name: "GROUP B",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nulla deserunt eum optio non, suscipit odio et nam pariatur, reprehenderit accusamus possimus inventore recusandae. Quo nam amet commodi quaerat animi reprehenderit accusamus possimus inventore recusandae. Veniam nulla deserunt eum optio non, suscipit odio et nam pariatur, reprehenderit accusamus possimus inventore recusandae.",
    url: "#"
  },
  "GROUP C": {
    name: "GROUP C",
    desc:
      "Quo nam amet commodi quaerat animi reprehenderit accusamus possimus inventore recusandae. Veniam nulla deserunt eum optio non, suscipit odio et nam pariatur, reprehenderit accusamus possimus inventore recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nulla deserunt eum optio non, suscipit odio et nam pariatur, reprehenderit accusamus possimus inventore recusandae.",
    url: "#"
  }
};

import { mapState, mapGetters } from "vuex";
import clients from "@/components/home/clients.vue";
import newsletter from "@/components/home/newsletter.vue";
import ButtonShadow from "@/components/button-shadow";

export default {
  components: {
    clients,
    newsletter,
    ButtonShadow
  },
  data() {
    return {
      textButton: "Ir para",
      groups: groups,
      activeItem: "GROUP A"
    };
  },
  computed: {
    ...mapState("clients", ["clients"]),
    ...mapGetters({
      lengthClients: "clients/lengthClients"
    })
  },
  created() {
    if (this.$store.state.buttonHover === false) {
      return this.$store.commit("HOVER_BUTTON_HEADER", true);
    } else {
      return this.$store.commit("HOVER_BUTTON_HEADER", false);
    }
  },
  head() {
    return {
      title: "Por que a Consilio? | Agência Consilio",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "About our company Nuxt.js "
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_flexbox.scss";

.inner {
  @include flexbox;
  @include flex-direction(column);
  width: 100%;
  position: relative;
  padding-top: 50px;
  &__header {
    @include flexbox;
    @include flex(1);
    @include justify-content(center);
    @include align-items(center);
    position: relative;
    width: 100%;
    height: 500px;
    & h1 {
      margin-top: 1rem;
      font-size: 60px;
      font-family: "Montserrat";
      font-weight: 900;
      color: $white;
      text-align: center;
      line-height: 60px;
      text-shadow: 4px 4px 9px rgba(46, 61, 98, 0.2);
    }
    & div.shape {
      content: "";
      height: 300px;
      width: 300px;
      z-index: -1;
      top: 25%;
      left: 100px;
      right: 0;
      margin: 0 auto;
      position: absolute;
      border-radius: 50%;
      background-image: radial-gradient(
        circle farthest-corner at 10% 20%,
        rgba(118, 145, 161, 1) 0%,
        rgba(88, 99, 113, 1) 90.1%
      );
      @media screen and (min-width: $break-md) {
        left: 30%;
      }
    }
  }
  &__txt {
    position: relative;
    margin: 5%;
    @media screen and (min-width: $break-md) {
      margin: 0% 13% 5% 10%;
    }
  }
  &__video {
    margin: 5%;
    @media screen and (min-width: $break-md) {
      margin: 5% 13% 5% 10%;
    }
    & iframe {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  &__team {
    position: relative;
    margin: 5%;
    @media screen and (min-width: $break-md) {
      margin: 5% 13% 10% 10%;
    }
    &--title {
      @include flexbox;
      @include justify-content(center);
      width: 100%;
      padding-bottom: 30px;
    }
    &--title-bg {
      position: absolute;
      white-space: nowrap;
      color: $primary;
      opacity: 0.04;
      font-size: 80px;
      font-family: "Montserrat";
      font-weight: 900;
      z-index: -2;
      top: 10px;
      text-align: center;
      @media screen and (min-width: $break-md) {
        font-size: 180px;
        top: -5%;
      }
    }
  }
}
.content__title {
  z-index: 1;
  position: relative;
  & p {
    position: absolute;
    top: 60px;
    left: 50px;
    font-family: Quicksand, sans-serif;
    margin: 0;
    font-size: 16px;
    color: $secondary;
  }
  & h3 {
    position: absolute;
    color: $primary;
    top: 90px;
    left: 50px;
    font-size: 40px;
    line-height: 40px;
    margin: 0;
    width: 60%;
    @media screen and (min-width: $break-md) {
      font-size: 60px;
      line-height: 60px;
    }
  }
}
.box--primary {
  position: absolute;
  height: 200px;
  top: 120px;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  left: 0;
  width: 100%;
  display: flex;
  @include align-items(flex-end);
  @include justify-content(center);
  @media screen and (min-width: $break-md) {
    height: 150px;
    @include align-items(center);
    @include justify-content(flex-end);
  }
  & ul {
    width: 100%;
    padding-left: 50px;
    padding-bottom: 30px;
    z-index: 3;
    flex-direction: row;
    @media screen and (min-width: $break-md) {
      width: 50%;
      padding-left: 0px;
      padding-bottom: 0px;
    }
    display: flex;
  }
  & li {
    font-size: 14px;
    font-weight: 600;
    flex: 1;
    & a {
      color: $secondary;
      position: relative;
      &.active:after {
        width: 100%;
      }
      &:after {
        content: "";
        position: absolute;
        width: 0px;
        height: 2px;
        bottom: -2px;
        border-radius: 5px;
        background: $secondary;
        display: block;
        transition: width 0.4s ease;
        -webkit-transition: width 0.4s ease;
        transition: width 0.4s ease;
        -webkit-transition: width 0.4s ease;
      }
      &:hover:after {
        width: 100%;
      }
    }
  }
}
.content__tx--sx {
  padding-top: 300px;
  width: 100%;
  z-index: -1;
  @media screen and (min-width: $break-md) {
    padding-top: 320px;
    padding-left: 50%;
    width: 50%;
  }
  & .button {
    z-index: 15;
  }
  & div {
    transition: all 1s ease-in-out;
  }
  & p {
    padding-top: 40px;
    padding-bottom: 30px;
    padding-right: 0px;
    color: $primary;
    text-align: center;
    @media screen and (min-width: $break-md) {
      padding-top: 0px;
      padding-right: 50px;
      text-align: left;
    }
  }
}
.newsletter {
  margin-top: -10% !important;
}
.newsletter {
  margin-top: -10% !important;
}

// Sombra

.shadow-box {
  -webkit-box-shadow: 0px 0px 28px -1px rgba(46, 61, 98, 0.14);
  -moz-box-shadow: 0px 0px 28px -1px rgba(46, 61, 98, 0.14);
  box-shadow: 0px 0px 28px -1px rgba(46, 61, 98, 0.14);
}

[style*="--aspect-ratio"] > :first-child {
  width: 100%;
}
[style*="--aspect-ratio"] > img {
  height: auto;
}

// Responsive iframe

@supports (--custom: property) {
  [style*="--aspect-ratio"] {
    position: relative;
  }
  [style*="--aspect-ratio"]::before {
    content: "";
    display: block;
    padding-bottom: calc(100% / (var(--aspect-ratio)));
  }
  [style*="--aspect-ratio"] > :first-child {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
}

//Perspective symbol consilio
.perspective {
  opacity: 1;
  align-self: center;
  width: 100px;
  -moz-perspective: 900px;
  -webkit-perspective: 900px;
  perspective: 900px;
  position: absolute;
  top: 30%;
  right: 30px;
  z-index: 11;
  transition: all 0.5s ease-in-out;
  -webkit-transition: all 0.5s ease-in-out;
  transform: scale(1);
}
.render {
  display: inline-block;
  z-index: 0;
  left: 40px;
  position: relative;
  line-height: 0.55em;
  height: 0.5em;
  transition: all 1s ease-in-out;
  -webkit-transition: all 1s ease-in-out;
  font-family: "GothamPro", sans-serif;
  font-size: 22em;
  font-style: italic;
  font-weight: 700;
  transform: rotate(-180deg) rotateY(30deg);
  color: #f5f5f5;
  animation: reflect 2s infinite alternate ease-in-out;
  text-shadow: white 0.006em 0.006em 1px, rgba(0, 0, 0, 0.15) -3px 7px 10px,
    #d0d0d0 -1px 1px 1px, #d0d0d0 -2px 1px 1px, #d0d0d0 -3px 1px 1px,
    #d0d0d0 -4px 1px 1px, #d0d0d0 -5px 1px 1px, #d0d0d0 -6px 1px 1px,
    #d0d0d0 -7px 1px 1px, #d0d0d0 -8px 1px 1px, #d0d0d0 -9px 1px 1px,
    #d0d0d0 -10px 1px 1px, #d0d0d0 -11px 1px 1px, #d0d0d0 -12px 1px 1px,
    rgba(255, 255, 255, 0.6) -5px 2px 100px;
}
@keyframes reflect {
  0% {
    transform: rotate(-180deg) rotateY(30deg);
  }
  100% {
    transform: rotate(-180deg) rotateY(0deg);
  }
}
.render.reflect {
  z-index: 0;
  opacity: 0.4;
  -moz-transform: rotateX(180deg) rotateY(-30deg);
  -webkit-transform: rotateX(180deg) rotateY(-30deg);
  transform: rotateX(180deg) rotateY(-30deg);
}
.render.shadow {
  opacity: 0.3;
  z-index: -1;
  color: transparent;
  letter-spacing: -0.02em;
  position: absolute;
  top: 0.46em;
  left: 0em;
  -moz-transform-origin: 0 0 50%;
  -ms-transform-origin: 0 0 50%;
  -webkit-transform-origin: 0 0 50%;
  transform-origin: 0 0 50%;
  -moz-transform: rotateX(-100deg) rotateY(-5deg) rotateZ(30deg);
  -webkit-transform: rotateX(-100deg) rotateY(-5deg) rotateZ(30deg);
  transform: rotateX(-100deg) rotateY(-5deg) rotateZ(30deg);
  text-shadow: rgba(0, 0, 0, 0.8) 0 0 30px, rgba(0, 0, 0, 0.8) 0 0 80px,
    black 0 0 150px, black 0 0 150px, black 0 0 250px, black 0 0 250px,
    white -0.15em 0.4em 250px;
}
</style>

<router>
  {
    path: '/about',
    alias: [
      '/sobre-nos',
      '/a-consilio',
      '/consilio'
    ]
  }
</router>