<template>
  <section class="inner">
    <div class="inner__header">
      <div id="fly-in" class="inner__header">
        <div>
          <span>
            <h1>{{about.title}}</h1>
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
        <p>{{ about.custom_fields["titulo-info"] }}</p>
        <h3>{{ about.custom_fields["sub-titulo-info"] }}</h3>
      </div>
      <div class="box--primary shadow-box">
        <ul>
          <li v-for="(group, index) in collapse" :key="index">
            <a
              @click="activeItem = index"
              :class="activeItem === index ? 'active' : ''"
            >{{group.about_box_title}}</a>
          </li>
        </ul>
      </div>
      <div class="content__tx--sx">
        <div v-for="(group, index) in collapse" :key="index" v-show="activeItem === index">
          <p v-text="group.about_box_desc"></p>
          <button-shadow class="button" :text="textButton" :url="group.about_box_url"></button-shadow>
        </div>
      </div>
    </div>
    <div class="inner__video" style="--aspect-ratio: 16/9;">
      <div v-html="about.custom_fields['incorporacao-video']"></div>
    </div>
    <div class="inner__team">
      <div class="inner__team--title">
        <parallax-element :parallaxStrength="10" :type="'translation'">
          <h2>equipe</h2>
        </parallax-element>
        <span class="inner__team--title-bg">nosso time</span>
      </div>
      <div class="inner__team--content">
        <section class="teammates">
          <div class="col-lg-4 team" v-for="(member, index) in team.slice().reverse()" :key="index">
            <figure>
              <img :src="member.img" alt />
              <figcaption>
                <span class="number">0{{index + 1}}</span>
                <div class="social-links">
                  <a
                    v-if="member.custom_fields.facebook_team"
                    :href="'https://fb.com/'+member.custom_fields.facebook_team"
                  >Fb.</a>
                  <a
                    v-if="member.custom_fields.instagram_team"
                    :href="'https://instagram.com/'+member.custom_fields.instagram_team"
                  >Ins.</a>
                  <a
                    v-if="member.custom_fields.twitter_team"
                    :href="'https://twitter.com/'+member.custom_fields.twitter_team"
                  >Tw.</a>
                  <a
                    v-if="member.custom_fields.linkedin_team"
                    :href="'https://linkedin.com/in/'+member.custom_fields.linkedin_team"
                  >In.</a>
                </div>
                <h3 class="name">{{ member.title }}</h3>
                <span class="job">{{ member.custom_fields.position_team }}</span>
              </figcaption>
            </figure>
          </div>
        </section>
      </div>
    </div>
    <clients :clients="clients" :length="lengthClients" />
    <newsletter />
  </section>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
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
      activeItem: 0
    };
  },
  computed: {
    collapse() {
      return this.about.custom_fields["collapse-info"];
    },
    ...mapState({
      clients: state => state.clients.clients,
      about: state => state.about.about,
      team: state => state.team.team
    }),
    ...mapGetters({
      lengthClients: "clients/lengthClients"
    })
  },
  async fetch({ store, params }) {
    await store.dispatch("team/getTeam", params);
  },
  mounted() {
    this.$store.commit("HOVER_BUTTON_HEADER", true);
  },
  head() {
    return {
      title: "Por que a Consilio? | Agência Consilio",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$options.filters.stripped(this.about.excerpt)
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
      background-image: linear-gradient(
        106.7deg,
        rgba(255, 199, 67, 1) 103.7%,
        rgba(255, 247, 200, 1) 120.7%
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
    padding: 50px 0 50px 0;
    @media screen and (min-width: $break-md) {
      margin: 5% 13% 5% 10%;
      padding: 0;
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
      margin: 5% 13% 0% 10%;
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
    &--content {
      position: relative;
    }
  }
}
.content__title {
  z-index: 1;
  position: relative;
  & p {
    position: relative;
    top: 50px;
    font-family: Quicksand, sans-serif;
    margin: 0;
    font-size: 16px;
    color: $secondary;
    text-align: center;
    @media screen and (min-width: $break-md) {
      position: absolute;
      top: 60px;
      left: 50px;
      text-align: left;
    }
  }
  & h3 {
    position: relative;
    top: 80px;
    color: $primary;
    font-size: 40px;
    line-height: 40px;
    margin: 0;
    text-align: center;
    @media screen and (min-width: $break-md) {
      width: 60%;
      font-size: 60px;
      line-height: 60px;
      position: absolute;
      top: 90px;
      left: 50px;
      text-align: left;
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
    padding: 0 20px;
    padding-bottom: 50px;
    z-index: 3;
    flex-direction: row;
    @media screen and (min-width: $break-md) {
      width: 50%;
      padding: 0 50px;
    }
    display: flex;
  }
  & li {
    font-size: 14px;
    font-weight: 600;
    flex: 1;
    @include flexbox();
    @include justify-content(center);
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
  padding-top: 230px;
  width: 100%;
  z-index: -1;
  text-align: center;
  @media screen and (min-width: $break-md) {
    padding-top: 320px;
    float: right;
    width: 50%;
    text-align: left;
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

/**
* Equipe
*/
.teammates {
  @include flexbox;
  @include flex-flow(wrap);
  padding-top: 50px;
}
.teammates .team {
  padding-bottom: 10px;
}
.teammates .team figure {
  position: relative;
}
.teammates .team figure img {
  width: 100%;
  filter: gray; /* IE6-9 */
  -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
  filter: grayscale(1); /* Microsoft Edge and Firefox 35+ */
}
.teammates .team figure figcaption {
  position: absolute;
  top: 0;
  color: #fff;
  width: 100%;
  height: 100%;
}
.teammates .team figure figcaption .number {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 26px;
  font-weight: 500;
}
.teammates .team figure figcaption .job {
  position: absolute;
  bottom: 20px;
  right: 10px;
  font-weight: 500;
  font-size: 18px;
  transform: rotate(90deg) translate(30px, 30px);
  -webkit-transform: rotate(90deg) translate(30px, 30px);
  -moz-transform: rotate(90deg) translate(30px, 30px);
  -ms-transform: rotate(90deg) translate(30px, 30px);
  -o-transform: rotate(90deg) translate(30px, 30px);
  transform-origin: right;
  opacity: 0;
  transition: all ease 0.3s;
  -webkit-transition: all ease 0.3s;
  -moz-transition: all ease 0.3s;
  -ms-transition: all ease 0.3s;
  -o-transition: all ease 0.3s;
}
.teammates .team figure figcaption .name {
  position: absolute;
  bottom: 15px;
  left: 20px;
  font-size: 20px;
  font-weight: 600;
}
.teammates .team figure figcaption .social-links {
  position: absolute;
  top: 30px;
  right: 20px;
  font-size: 20px;
  font-weight: 600;
  opacity: 0;
  transition: opacity ease 0.3s;
  -webkit-transition: opacity ease 0.3s;
  -moz-transition: opacity ease 0.3s;
  -ms-transition: opacity ease 0.3s;
  -o-transition: opacity ease 0.3s;
}
.teammates .team figure figcaption .social-links a {
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  display: block;
  margin-bottom: 15px;
  transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -o-transform: rotate(90deg);
}
.teammates .team figure:hover figcaption .social-links {
  opacity: 1;
}
.teammates .team figure:hover figcaption .social-links a:hover {
  opacity: 0.6;
  transition: all ease 0.3s;
  -webkit-transition: all ease 0.3s;
  -moz-transition: all ease 0.3s;
  -ms-transition: all ease 0.3s;
  -o-transition: all ease 0.3s;
}
.teammates .team figure:hover figcaption .job {
  opacity: 1;
  transform: rotate(90deg) translate(0px, 30px);
  -webkit-transform: rotate(90deg) translate(0px, 30px);
  -moz-transform: rotate(90deg) translate(0px, 30px);
  -ms-transform: rotate(90deg) translate(0px, 30px);
  -o-transform: rotate(90deg) translate(0px, 30px);
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