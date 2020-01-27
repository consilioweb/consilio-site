<template>
  <section class="blog">
    <header
      :style="'background-image: radial-gradient( circle farthest-corner at 10% 20%, '+this.randombg1+' 21.4%, '+this.randombg2+' 80.3% ); '"
    >
      <div class="inner">
        <div class="__content">
          <div class="__content--title">
            <h1>Blog de Marketing Digital da Consilio</h1>
            <h2>{{author.name}}</h2>
          </div>
        </div>
      </div>
    </header>
    <div class="inner">
      <div class="__card">
        <div class="__authors">
          <a :href="'/blog/autores/'+author.slug">
            <img :src="author.img" :alt="author.name" class="author-profile-image" />
          </a>
          <div class="author-card-content">
            <h2 class="author-card-name">{{author.name}}</h2>
            <span class="author-card-count">{{this.$store.state.posts.total}} posts publicados.</span>
            <p v-if="author.description">{{ author.description }}</p>
            <p
              v-else
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod consequatur facere eos incidunt odio iure placeat illum, dolores, modi velit ea architecto.</p>
          </div>
        </div>
      </div>
    </div>
    <posts
      class="section__post"
      :author="author"
      :posts="postsAuthor"
      :totalPages="this.$store.state.posts.totalPages"
      ref="posts"
    />
  </section>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import api from "@/api/index";
import posts from "@/components/blog/posts.vue";

export default {
  components: {
    posts
  },
  data() {
    return {
      author: this.$store.state.posts.author
    };
  },
  validate({ params }) {
    if (params.slug) {
      return isNaN(+params.slug);
    }
  },
  async asyncData({ store, params }) {
    const slug = params.slug;
    await store.dispatch("posts/getAuthor", {
      slug: slug
    });
  },
  computed: {
    ...mapState({
      postsAuthor: state => state.posts.posts
    }),
    randombg1() {
      return "#" + Math.floor(Math.random() * 16777215).toString(16);
    },
    randombg2() {
      return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
  },
  async mounted() {
    this.$store.commit("HOVER_BUTTON_HEADER", true);
    this.$store.commit("LOGO_HEADER_WHITE", true);
    await this.$store.dispatch("posts/getPosts", {
      author: this.author.id
    });
  },
  head() {
    return {
      title:
        "Autor(a): " +
        this.author.name +
        " | Blog de Marketing Digital da Consilio",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "O blog da Consilio é comprometido com seu desenvolvimento. Aqui você acompanha notícias, dicas e encontra os melhores artigos sobre Marketing Digital, redes sociais, geração de Leads, vendas, email marketing e muito mais. Acesse e confira!"
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "Blog de Marketing Digital | Agência Consilio"
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Blog de Marketing Digital | Agência Consilio"
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "O blog da Consilio é comprometido com seu desenvolvimento. Aqui você acompanha notícias, dicas e encontra os melhores artigos sobre Marketing Digital, redes sociais, geração de Leads, vendas, email marketing e muito mais. Acesse e confira!"
        },
        {
          hid: "og:title",
          name: "og:title",
          content: "Blog de Marketing Digital | Agência Consilio"
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "O blog da Consilio é comprometido com seu desenvolvimento. Aqui você acompanha notícias, dicas e encontra os melhores artigos sobre Marketing Digital, redes sociais, geração de Leads, vendas, email marketing e muito mais. Acesse e confira!"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
section.blog {
  @include flexbox;
  @include flex-direction(column);
  position: relative;
  width: 100%;
  overflow: hidden;
}
svg {
  height: 16px;
  fill: #fff;
  fill-rule: evenodd;
}
.inner {
  margin: -150px 5% 0% 5%;
  @media screen and (min-width: $break-md) {
    margin: -150px calc(13% - -10px) 10px calc(10% + 10px);
  }
}
header {
  background-repeat: no-repeat;
  background-position: 50% center;
  background-size: cover;

  position: relative;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;

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
    background-image: linear-gradient(
      178.1deg,
      rgba(60, 55, 106, 1) 8.5%,
      rgba(23, 20, 69, 1) 82.4%
    );
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
    padding: 180px 4vw;
    min-height: 200px;
    max-height: 350px;
    text-align: center;

    &--title {
      @include flexbox();
      @include flex-direction(column);
      @include justify-content(center);
      @include align-items(center);
      position: relative;
      z-index: 6;
      & h1 {
        color: $white;
        padding-bottom: 15px;
        font-family: Quicksand, sans-serif;
        font-weight: 600;
        font-size: 40px;
      }
      & h2 {
        color: $white;
        font-size: 40px;
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
  & nav {
    @include flexbox();
    @include flex-direction(column);
    list-style: none;
    top: -70px;
    @media screen and (min-width: $break-md) {
      @include flex-direction(row);
      position: relative;
      display: flex;
    }
    @include align-items(center);
    position: relative;
    z-index: 300;
    & .nav {
      position: relative;
      z-index: 300;
      font-size: 1.2rem;
    }
    & .nav-right,
    .nav-left {
      display: flex;
      flex-wrap: nowrap;
      padding-bottom: 20px;
      @media screen and (min-width: $break-md) {
        padding-bottom: initial;
      }
    }
    & .nav,
    .nav-left {
      @include flexbox();
    }
    & .nav-left {
      @include align-items(center);
      -ms-overflow-scrolling: touch;
      -webkit-overflow-scrolling: touch;
      white-space: nowrap;
      @media screen and (min-width: $break-md) {
        margin-right: 10px;
      }
    }
    & .nav-right {
      flex: 1;
      justify-content: flex-end;
    }
    & .nav-right,
    .common-links {
      padding-top: 3px;
      @include flexbox();
      & a {
        font-size: 14px;
      }
    }
    & .nav li a {
      padding: 0px 12px;
      color: #fff;
      opacity: 0.9;
      font-size: 14px;
    }
    & .link-search {
      position: relative;
      margin: auto;
      height: 32px;
      @media screen and (min-width: $break-md) {
        margin-right: 10px;
        padding-left: 30px;
      }
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
  position: relative;
  z-index: 10;
}
.__card {
  @include flexbox;
  @include flex-direction(column);
  -webkit-box-shadow: 0px 0px 28px -1px rgba(46, 61, 98, 0.14);
  -moz-box-shadow: 0px 0px 28px -1px rgba(46, 61, 98, 0.14);
  box-shadow: 0px 0px 28px -1px rgba(46, 61, 98, 0.14);
  background: $white;
  flex: 1;
  transition: all 1s ease-in-out;
  position: relative;
  z-index: 999;
  padding: 50px;
}

.__authors {
  @include flexbox;
  @include align-items(center);
  & .author-card-content {
    @include flexbox;
    @include flex-direction(column);
    @include align-items(flex-start);
    @media screen and (min-width: $break-md) {
      padding-left: 20px;
    }
  }
  & .author-profile-image {
    margin-right: 15px;
    min-width: 30px;
    width: 96px;
    height: 96px;
    border-radius: 100%;
  }

  & h2 {
    font-family: Quicksand, sans-serif;
    font-size: 25px;
    font-weight: 600;
  }

  & .author-card-name {
    padding-bottom: 5px;
  }

  & .author-card-count {
    font-size: 14px;
    color: #ccc;
    padding: 5px 0px 10px 0px;
  }

  & .author-card-name a {
    color: $primary;
  }

  & .author-card-name a:hover {
    text-decoration: none;
  }

  & p {
    text-align: left;
    white-space: pre-wrap;
    font-size: 13px;
    padding-top: 10px;
    margin: 0;
    color: $secondary;
    line-height: 1.3em;
    @media screen and (min-width: $break-md) {
      padding-top: initial;
    }
  }
}
</style>

<router>
  {
    path: '/blog/autores/:slug?'
  }
</router>