<template>
  <footer class="container__full">
    <div class="column __about">
      <svg-icon name="logo" class="logo" width="230" height="50" />
    </div>
    <div class="column __strategy">
      <h2>Estratégias</h2>
      <ul role="list">
        <li role="listitem" v-for="(strategy, index) in strategies" :key="index">
          <n-link
            :to="'estrategias/'+strategy.slug"
            :aria-label="'Estratégia: '+strategy.title"
          >{{strategy.title}}</n-link>
        </li>
      </ul>
    </div>
    <div class="column __feed-blog">
      <h2>Últimas postagens</h2>
      <ul role="list">
        <li role="listitem" v-for="(post, index) in recent.slice(0, 3)" :key="index">
          <n-link :to="'/blog/'+post.slug" :aria-label="'Artigo: '+post.title">
            <article>
              <p v-html="toLimitChars(post.title, 60)"></p>
              <time v-html="longTimestamp(post.date)"></time>
            </article>
          </n-link>
        </li>
      </ul>
    </div>
    <div class="column __contact">
      <h2>Onde estamos</h2>
      <p>
        <a
          href="https://goo.gl/maps/fjZNVAUABAFH17qo8"
          rel="noopener"
          target="_blank"
          v-html="info.address"
          aria-label="Onde estamos"
        ></a>
      </p>
      <h2>Fale conosco</h2>
      <ul role="list">
        <li role="listitem">
          <a :href="'tel:'+info.phone" aria-label="Fale conosco">{{ info.phone }}</a>
        </li>
        <li role="listitem">
          <a
            :href="'https://api.whatsapp.com/send?1=pt_BR&phone=+55'+info.whatsapp"
            aria-label="Fale conosco"
          >{{ info.whatsapp }}</a>
        </li>
        <li role="listitem">
          <a :href="'mailto:'+info.email">{{ info.email }}</a>
        </li>
      </ul>
    </div>
    <div class="__copyright">
      <p v-html="info.copyright"></p>
    </div>
    <div class="__gyn">
      <p>
        Feito com
        <a href="#gyn">amor</a> em Goiânia
        <svg-icon name="gyn" width="18" height="18" />
      </p>
    </div>
  </footer>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  mixins: {
    longTimestamp: Function,
    toLimitChars: Function
  },
  computed: {
    ...mapState("posts", ["recent"]),
    ...mapState("core", ["info"]),
    ...mapState("strategies", ["strategies"]),
    ...mapGetters({
      lengthPosts: "posts/lengthPosts"
    })
  }
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/_flexbox.scss";
@import "./assets/scss/_variables.scss";

.logo {
  margin-top: 20px;
  color: $primary;
}
footer {
  @include flexbox;
  @include flex-flow(wrap);
  @include flex-direction(column);
  position: relative;
  overflow: inherit !important;
  text-align: center;
  padding-bottom: 200px;
  @media screen and (min-width: $break-md) {
    @include flex-direction(row);
  }
  & .__about {
    padding-left: 0;
    @media screen and (min-width: $break-md) {
      flex-grow: 0;
    }
  }
  & .__strategy {
    white-space: nowrap;
    @media screen and (min-width: $break-md) {
      flex-grow: 1;
    }
    & a {
      position: relative;
      &:after {
        content: "";
        position: absolute;
        width: 0px;
        height: 2px;
        bottom: -2px;
        border-radius: 5px;
        background: #969696;
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
  & .__feed-blog {
    @media screen and (min-width: $break-md) {
      flex-grow: 2;
      @include align-content(center);
    }
    & ul {
      padding: 0 20px;
      @media screen and (min-width: $break-md) {
        padding: initial;
      }
    }
    & li {
      line-height: 1.5rem;
    }
    & p {
      padding-bottom: 5px;
      line-height: 16px;
    }
    & a {
      color: #969696;
      cursor: pointer;
    }
  }
  & .__contact {
    @media screen and (min-width: $break-md) {
      flex-grow: auto;
    }
    & li {
      line-height: 1.5rem;
    }
    & a {
      color: #969696;
      cursor: pointer;
    }
  }
  & .__copyright {
    @include flex-flow(row wrap);
    width: 100%;
    color: #b7b7b7;
    text-align: center;
    padding-top: 80px;
    & a {
      color: $primary;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        width: 0px;
        left: 0;
        right: 0;
        height: 2px;
        bottom: -2px;
        border-radius: 5px;
        background: $tertiary;
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
  & .__gyn {
    @include flexbox;
    @include flex-flow(row wrap);
    @include align-items(center);
    @include justify-content(center);
    width: 100%;
    background: $white;
    height: 80px;
    position: absolute;
    bottom: 60px;
    -webkit-box-shadow: 0px 0px 28px -1px rgba(46, 61, 98, 0.14);
    -moz-box-shadow: 0px 0px 28px -1px rgba(46, 61, 98, 0.14);
    box-shadow: 0px 0px 28px -1px rgba(46, 61, 98, 0.14);
    & p {
      color: #969696;
      font-size: 14px;
      & a {
        color: $secondary;
        position: relative;
        &:after {
          content: "";
          position: absolute;
          width: 0px;
          left: 0;
          right: 0;
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
}
.column {
  @include flexbox;
  @include flex-flow(column wrap);
  @include align-items(center);
  font-size: 1.5em;
  flex: 1;
  @media screen and (min-width: $break-md) {
    padding: 0 20px;
    width: inherit;
    @include align-items(flex-start);
  }
  & h2 {
    font-family: Quicksand;
    font-size: 15px;
    color: $primary;
    font-weight: 600;
    text-transform: uppercase;
    margin: 20px 0 20px 0px;
    padding-top: 30px;
    @media screen and (min-width: $break-md) {
      padding-top: 0px;
    }
  }
  & p {
    color: #969696;
    text-align: center;
    @media screen and (min-width: $break-md) {
      text-align: left;
    }
  }
  & li {
    text-align: center;
    font-size: 13px;
    line-height: 2rem;
    @media screen and (min-width: $break-md) {
      text-align: left;
    }
    & a {
      color: #969696;
      cursor: pointer;
    }
  }
  & article {
    color: #969696;
    padding-bottom: 10px;
    p {
      text-align: center;
      @media screen and (min-width: $break-md) {
        text-align: justify;
      }
    }
    & time {
      opacity: 0.5;
    }
  }
}
</style>