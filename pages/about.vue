<template>
  <section class="inner">
    <div class="inner__header">
      <div id="fly-in" class="inner__header">
        <div>
          <span>
            <h1>{{about.title}}</h1>
            <div class="shape">
              <brand />
            </div>
          </span>
        </div>
      </div>
    </div>
    <div class="inner__txt container__full">
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
    <div class="inner__video container__full" style="--aspect-ratio: 16/9;">
      <div>
        <iframe
          src="https://player.vimeo.com/video/389239456?autoplay=1&loop=1&title=0&byline=0&controls=0&background=1&muted=0"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div class="inner__team container__full">
      <div class="inner__team--title">
        <parallax-element :strength="10" :type="'translate'">
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
                    target="_blank"
                    rel="noopener"
                  >Fb.</a>
                  <a
                    v-if="member.custom_fields.instagram_team"
                    :href="'https://instagram.com/'+member.custom_fields.instagram_team"
                    target="_blank"
                    rel="noopener"
                  >Ins.</a>
                  <a
                    v-if="member.custom_fields.twitter_team"
                    :href="'https://twitter.com/'+member.custom_fields.twitter_team"
                    target="_blank"
                    rel="noopener"
                  >Tw.</a>
                  <a
                    v-if="member.custom_fields.linkedin_team"
                    :href="'https://linkedin.com/in/'+member.custom_fields.linkedin_team"
                    target="_blank"
                    rel="noopener"
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
    <section class="clients">
      <clients :clients="clients" :length="lengthClients" class="container__full" />
    </section>
    <newsletter />
  </section>
</template>
<script>
const postcss = require("postcss");
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import clients from "@/components/home/clients";
import newsletter from "@/components/home/newsletter";
import ButtonShadow from "@/components/button-shadow";
import brand from "@/components/brand";

export default {
  components: {
    clients,
    newsletter,
    ButtonShadow,
    brand
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
    this.$store.commit("LOGO_HEADER_PRIMARY", true);
  },
  head() {
    return {
      title:
        this.$options.filters.stripped(this.about.title) +
        ` | Agência Consilio`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$options.filters.stripped(this.about.excerpt)
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content:
            this.$options.filters.stripped(this.about.title) +
            ` | Agência Consilio`
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content:
            this.$options.filters.stripped(this.about.title) +
            ` | Agência Consilio`
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.$options.filters.stripped(this.about.excerpt)
        },
        {
          hid: "og:title",
          name: "og:title",
          content:
            this.$options.filters.stripped(this.about.title) +
            ` | Agência Consilio`
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.$options.filters.stripped(this.about.excerpt)
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/_flexbox.scss";
@import "./assets/scss/_variables.scss";

.inner {
  @include flexbox;
  @include flex-direction(column);
  width: 100%;
  position: relative;
  padding-top: 50px;
  overflow-x: hidden;
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
  }
  &__video {
    & iframe {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  &__team {
    position: relative;
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
      text-align: center;
      @media screen and (min-width: $break-md) {
        font-size: 130px;
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
[style*="--aspect-ratio"] video {
  width: 100%;
}

// Responsive iframe
@supports (--custom: property) {
  [style*="--aspect-ratio"] {
    position: relative;
  }
  [style*="--aspect-ratio"]::before {
    content: "";
    display: block;
    padding-bottom: calc(100% / (16 / 9));
  }
  [style*="--aspect-ratio"] > :first-child {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
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
  right: 3px;
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
.clients {
  width: 100%;
  display: inline-block;
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