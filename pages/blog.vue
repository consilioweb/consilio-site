<template>
  <section>
    <header :style="'background-image: url('+recent[0].img+')'">
      <div class="header__overlay"></div>
      <div class="inner">
        <div class="__content">
          <div class="__content--title">
            <h2>Blog</h2>
          </div>
          <div class="__content--description">
            <p>Acompanhe nossos artigos, pesquisas e sacadas aqui no Blog.</p>
          </div>
        </div>
        <nav class="nav">
          <div class="nav-left">
            <ul class="nav" role="menu">
              <li class="nav-home nav-current" role="menuitem">
                <a href="/">Home</a>
              </li>
              <li class="nav-share" role="menuitem">
                <a href="#">Compartilhar</a>
              </li>
              <li class="nav-signup" role="menuitem">
                <a href="#">Registrar-se</a>
              </li>
            </ul>
          </div>
          <div class="nav-right">
            <div class="common-links">
              <div class="dropdown">
                <a class="common-link" href="#" target="_blank" rel="noopener">Categorias</a>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
              <div class="dropdown">
                <a class="common-link" href="#" target="_blank" rel="noopener">Tags especiais</a>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
              <div class="common-link link-search" href="#" target="_blank" rel="noopener">
                <input type="text" placeholder="Buscar..." />
                <div class="search"></div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <posts class="section__post" :posts="this.$store.state.posts.posts" :length="lengthPosts" />
  </section>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import posts from "@/components/blog/posts.vue";

export default {
  components: {
    posts
  },
  mounted() {
    this.$store.commit("HOVER_BUTTON_HEADER", true);
    this.$store.commit("LOGO_HEADER_WHITE", true);
  },
  async fetch({ store, params }) {
    return await store.dispatch("posts/getPosts", {
      page: 1,
      per_page: 5
    });
  },
  computed: {
    ...mapState("posts", ["posts"]),
    ...mapState("posts", ["recent"]),
    ...mapGetters({
      lengthPosts: "posts/lengthPosts"
    })
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_flexbox.scss";

section {
  @include flexbox;
  @include flex-direction(column);
  position: relative;
  width: 100%;
}
svg {
  height: 16px;
  fill: #fff;
  fill-rule: evenodd;
}
header {
  background-color: rgb(64, 12, 98);
  background-repeat: no-repeat;
  background-position: 50% center;

  position: relative;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background: #400c62 no-repeat 50%;
  background-size: cover;

  & .header__overlay {
    /*
    background-image: radial-gradient(
      circle farthest-corner at -19.9% 50.2%,
      rgba(255, 199, 67, 0.8) 0%,
      rgba(255, 199, 67, 0.8) 24.5%,
      rgba(19, 30, 37, 0.8) 24.5%,
      rgba(19, 30, 37, 0.8) 66%
    );
    */
    background: rgba(19, 30, 37, 0.8);
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 1;
    -webkit-transition: all 0.4s ease-in-out 0s;
    -moz-transition: all 0.4s ease-in-out 0s;
    transition: all 0.4s ease-in-out 0s;
    z-index: 5;
  }
  & .inner {
    margin: 0% 5% 0% 5%;
    @media screen and (min-width: $break-md) {
      margin: 0% 13% 0% 10%;
    }
  }
  & .__content {
    @include flexbox();
    @include flex-direction(column);
    @include justify-content(center);
    @include align-items(center);
    padding: 10vw 4vw;
    min-height: 300px;
    max-height: 450px;
    margin-top: 50px;
    text-align: center;
    &--title {
      & h2 {
        position: relative;
        z-index: 6;
        color: $white;
      }
    }
    &--description {
      & p {
        position: relative;
        z-index: 7;
        color: $white;
      }
    }
  }
  nav {
    @include flexbox();
    @include flex-direction(column);
    margin: 0 0 0 -12px;
    padding: 0;
    list-style: none;
    @media screen and (min-width: $break-md) {
      position: relative;
      top: -70px;
      display: flex;
      @include flex-direction(row);
      @include align-items(flex-start);
    }
    @include justify-content(space-between);
    @include align-items(center);
    position: relative;
    z-index: 300;
    & .nav {
      position: relative;
      z-index: 300;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -ms-flex-align: start;
      align-items: flex-start;
      height: 40px;
      font-size: 1.2rem;
    }
    & .nav,
    .nav-left {
      @include flexbox();
    }
    & .nav-left {
      @include align-items(center);
      -ms-overflow-scrolling: touch;
      -webkit-overflow-scrolling: touch;
      margin-right: 10px;
      letter-spacing: 0.4px;
      white-space: nowrap;
    }
    & .nav-right {
      height: 40px;
    }
    & .nav-right,
    .common-links {
      flex-shrink: 0;
      @include flexbox();
      @include align-items(center);
      & a {
        font-size: 14px;
      }
      & .dropdown {
        position: relative;
        display: inline-block;
      }

      & .dropdown-content {
        position: absolute;
        background-color: #fff;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
        z-index: 999;
        max-height: 0px;
        min-width: 160px;
        transition: all 0.5s ease-out;
        overflow: hidden;
      }

      & .dropdown-content a {
        color: black;
        background-color: #fff;
        padding: 10px 16px;
        text-decoration: none;
        display: block;
        font-size: 13px !important;
      }

      & .dropdown-content a:hover {
        background-color: rgba(118, 145, 161, 0.3);
      }

      & .dropdown:hover .dropdown-content {
        max-height: 500px;
        min-width: 160px;
        transition: all 0.5s ease-in;
        padding: 10px 0;
      }

      & .dropdown:hover .dropbtn {
        background-color: #f9f9f9;
        border-bottom: 1px solid #e0e0e0;
        transition: max-height 0.25s ease-in;
      }
    }
    & .common-link {
      @include flexbox();
      @include align-items(center);
      @include justify-content(center);
      margin: 0;
      padding: 10px;
      color: #fff;
      opacity: 0.9;
    }
    & .nav li a {
      padding: 10px 12px;
      color: #fff;
      opacity: 0.9;
      font-size: 14px;
    }
    & .nav li,
    .nav li a {
      display: block;
      margin: 0;
    }
    & .link-search {
      padding-left: 30px;
      position: relative;
      margin: auto;
      margin-right: 10px;
      height: 32px;
      .search {
        position: absolute;
        margin: auto;
        top: 0;
        right: 0;
        bottom: 0;
        width: 32px;
        height: 32px;
        background: $secondary;
        border-radius: 50%;
        transition: all 1s;
        z-index: 4;
        box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.6);
        // box-shadow: 0 0 25px 0 crimson;
        &:hover {
          cursor: pointer;
        }
        &::before {
          content: "";
          position: absolute;
          margin: auto;
          top: 10px;
          right: 0;
          bottom: 0;
          left: 10px;
          width: 5px;
          height: 2px;
          background: white;
          transform: rotate(45deg);
          transition: all 0.5s;
        }
        &::after {
          content: "";
          position: absolute;
          margin: auto;
          top: -3px;
          right: 0;
          bottom: 0;
          left: -3px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: 2px solid white;
          transition: all 0.5s;
        }
      }
      input {
        left: 10px;
        position: relative;
        margin: auto;
        width: 32px;
        height: 32px;
        outline: none;
        border: none;
        // border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        background: white;
        color: $primary;
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        //padding: 0 80px 0 20px;
        border-radius: 30px;
        box-shadow: 0 0 25px 0 rgba(255, 255, 255, 0.3),
          0 20px 25px 0 rgba(0, 0, 0, 0.2);
        // box-shadow: inset 0 0 25px 0 rgba(0, 0, 0, 0.5);
        transition: all 1s;
        opacity: 0;
        z-index: 5;
        font-weight: 400;
        letter-spacing: 0.1em;
        &:hover {
          cursor: pointer;
        }
        &:focus {
          width: 100px;
          opacity: 1;
          cursor: text;
          padding: 0 0px 0 20px;
          @media screen and (min-width: $break-md) {
            padding: 0 80px 0 20px;
          }
        }
        &:focus ~ .search {
          right: 0px;
          background: $secondary;
          z-index: 6;
          &::before {
            top: 0;
            left: 0;
            width: 12px;
            background: white;
          }
          &::after {
            top: 0;
            left: 0;
            width: 12px;
            height: 2px;
            border: none;
            background: white;
            border-radius: 0%;
            transform: rotate(-45deg);
          }
        }
        &::placeholder {
          color: $primary;
          opacity: 0.9;
          font-weight: bolder;
        }
      }
    }
  }
}
.section__post {
  margin-top: -70px;
  position: relative;
  z-index: 10;
}
</style>

<router>
  {
    path: '/blog',
    alias: [
      '/explorar',
      '/posts'
    ]
  }
</router>