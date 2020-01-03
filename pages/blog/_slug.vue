<template>
  <section class="post_single">
    <header :style="'background-image: url('+post.img+')'">
      <div class="header__overlay"></div>
      <div class="inner">
        <div class="__content">
          <div class="__content--title">
            <h2>{{post.title}}</h2>
          </div>
          <div class="__content--description">
            <ul class="categories">
              <p>
                <b>Categorias(s):</b>
              </p>
              <li v-for="(category, index) in post.post_categories" :key="index">
                {{category}}
                <div v-if="index == post.post_categories.length - 1"></div>
                <div v-else>,</div>
              </li>
            </ul>
            <span>•</span>
            <ul class="author">
              <p>
                <b>Autor(a):</b>
                {{post.author_name}}
              </p>
            </ul>
            <span>•</span>
            <time class="time">
              <p>
                <b>Postado em:</b>
              </p>
              <p v-html="shortTimestamp(post.date)"></p>
            </time>
          </div>
        </div>
        <nav class="nav">
          <div class="nav-left">
            <ul class="nav" role="menu">
              <li class="nav-home nav-current" role="menuitem">
                <n-link to="/">Home</n-link>
              </li>
            </ul>
          </div>
          <div class="nav-right">
            <menu class="nav__controls">
              <li class="nav__label">
                <n-link to="/blog">Voltar a listagem</n-link>
              </li>
            </menu>
          </div>
        </nav>
      </div>
    </header>
    <article>
      <figure :style="'background-image: url('+post.img+')'"></figure>
      <div class="__content">
        <div class="__content--article" v-html="post.content"></div>
        <aside class="__content--sidebar">
          <div class="sidebar--content sticky">
            <div class="banner_section"></div>
            <div class="posts_related_section">
              <h3>Veja também</h3>
              <ul>
                <li v-for="(related, index) in postsCategory" :key="index">
                  <a :href="'/blog/'+related.slug">
                    <figure :style="'background: url('+ related.img +')'"></figure>
                  </a>
                  <a :href="'/blog/'+related.slug" v-html="toLimitChars(related.title, 45)"></a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
      <section class="__footer">
        <section class="author-card">
          <n-link :to="'/blog/autor/'+post.author_slug">
            <img class="author-profile-image" :src="post.author_img" :alt="post.author_name" />
          </n-link>
          <section class="author-card-content">
            <h4 class="author-card-name">
              <n-link :to="'/blog/autor/'+post.author_slug">{{post.author_name}}</n-link>
            </h4>
            <p>{{post.author_description}}</p>
          </section>
        </section>
        <div class="post-full-footer-right">
          <n-link class="author-card-button" :to="'/blog/autor/'+post.author_slug">Ler mais</n-link>
        </div>
      </section>
      <section class="__comments">
        <div
          class="fb-comments"
          :data-href="this.$axios.defaults.baseURL + 'blog/?slug=' + post.slug"
          data-width="auto"
          data-numposts="5"
        ></div>
      </section>
    </article>
  </section>
</template>

<script>
import api from "@/api/index";
export default {
  data() {
    return {
      post: this.$store.state.posts.post,
      postsCategory: []
    };
  },
  validate({ params }) {
    if (params.slug) {
      return isNaN(+params.slug);
    }
  },
  async asyncData({ store, params }) {
    const slug = params.slug;
    await store.dispatch("posts/getPost", {
      slug: slug
    });
  },
  mounted() {
    api
      .getPosts(1, 5, this.post.post_categories[0])
      .then(posts => {
        return (this.postsCategory = posts.data);
      })
      .catch(error => {
        console.log(error.message);
      });
    this.$store.commit("HOVER_BUTTON_HEADER", false);
    this.$store.commit("LOGO_HEADER_WHITE", true);
  },
  head() {
    return {
      title:
        this.$options.filters.stripped(this.post.title) + ` | Agência Consilio`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$options.filters.stripped(this.post.excerpt)
        }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_flexbox.scss";

.post_single {
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
.sticky {
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -ms-sticky;
  position: -o-sticky;
  position: sticky;
  top: 20px;
  width: 100%;
  align-self: flex-start;
  @media all and (max-width: 600px) {
    position: static !important;
    float: none;
    width: 100%;
    padding-bottom: 0;
    // resets the block to flow with the rest of the document at small screen widths
  }
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
    min-height: 100vh;
    max-height: 600px;
    margin-top: 50px;
    text-align: center;
    @media screen and (min-width: $break-md) {
      min-height: 400px;
      padding: 90px 0px;
      max-height: 450px;
    }

    &--title {
      padding: 0 30px;
      @media screen and (min-width: $break-md) {
        padding: 0 100px;
      }
      & h2 {
        position: relative;
        z-index: 6;
        color: $white;
        font-size: 35px;
        @media screen and (min-width: $break-md) {
          font-size: 45px;
        }
      }
    }
    &--description {
      @include flexbox();
      @include align-items(center);
      @include flex-direction(column);
      padding-top: 50px;
      @media screen and (min-width: $break-md) {
        padding-top: 0px;
        @include flex-direction(row);
      }
      & b {
        font-weight: 900;
      }
      & span {
        color: $white;
        padding-right: 10px;
        z-index: 6;
        display: none;
        @media screen and (min-width: $break-md) {
          display: initial;
          padding-top: 0px;
          @include flex-direction(row);
        }
      }
      & .tags,
      .categories,
      .author,
      .time {
        display: flex;
        align-items: center;
        position: relative;
        z-index: 7;
        color: $white;
        white-space: nowrap;
        padding-bottom: 20px;
        @include flex-direction(column);
        line-height: 20px;
        @media screen and (min-width: $break-md) {
          @include flex-direction(row);
          font-size: 45px;
          padding-bottom: initial;
        }
        & p {
          padding-right: 5px;
        }
        & li {
          padding-right: 10px;
          font-size: 13px;
          display: flex;
        }
      }
    }
  }
  & nav {
    @include flexbox();
    @include flex-direction(row);
    padding: 0;
    list-style: none;
    top: -70px;
    @media screen and (min-width: $break-md) {
      position: relative;
      display: flex;
      @include flex-direction(row);
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
        opacity: 0.9;
        color: $white;
      }
    }
    & .nav li a {
      padding: 0px 12px 0px 0px;
      color: #fff;
      opacity: 0.9;
      font-size: 14px;
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
article {
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
  height: 0px;
  margin: -70px 5% 0% 5%;
  @media screen and (min-width: $break-md) {
    margin: -70px 13% 10% 10%;
  }
  & figure {
    height: 300px;
    display: inline-table;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    @media screen and (min-width: $break-md) {
      height: 500px;
    }
  }
  & .__content {
    @include flexbox();
    padding: 20px 30px 50px 30px;
    box-shadow: 0px 0px 28px -1px rgba(46, 61, 98, 0.14);
    margin-bottom: 50px;
    @media screen and (min-width: $break-md) {
      padding: 60px 50px 50px 50px;
    }
    &--article {
      width: 100%;
      @media screen and (min-width: $break-md) {
        width: 75%;
      }
    }
    &--sidebar {
      display: none;
      @include flexbox();
      height: 100%;
      padding-left: 30px;
      @media screen and (min-width: $break-md) {
        display: initial;
        width: 25%;
      }
      & .banner_section {
      }
      & .posts_related_section {
        h3 {
          font-family: Quicksand, sans-serif;
          font-size: 15px;
          color: #586371;
          font-weight: 600;
          text-transform: uppercase;
        }
        ul {
          margin-top: 30px;
          & li {
            padding-bottom: 10px;
            @include flexbox;
            & a {
              font-size: 14px;
              line-height: 20px;
            }
            & figure {
              width: 64px;
              height: 64px;
              border-radius: 5px;
              margin-right: 10px;
              background-size: cover !important;
              background-position: center center !important;
            }
          }
        }
      }
    }
  }
  & .__comments {
    padding: 50px;
  }
  & .__footer {
    @include flexbox();
    @include flex-direction(column);
    @include align-items(center);
    padding: 0px 50px;

    @media screen and (min-width: $break-md) {
      @include flex-direction(row);
    }

    & .author-card {
      @include flexbox();
      @include flex-direction(row);
    }

    & .author-card .author-profile-image {
      margin-right: 15px;
      min-width: 60px;
      width: 60px;
      height: 60px;
      border-radius: 100%;
    }

    & .author-card-name {
      margin: 8px 0 2px;
      padding: 0;
      font-size: 20px;
    }

    & .author-card-name a {
      color: $primary;
    }

    & .author-card-name a:hover {
      text-decoration: none;
    }

    & .author-card-content p {
      padding-top: 10px;
      margin: 0;
      color: $secondary;
      line-height: 1.3em;
      @media screen and (min-width: $break-md) {
        padding-top: initial;
      }
    }

    & .post-full-footer-right {
      flex: 1;
      @include flexbox();
      @include justify-content(flex-end);
      padding-top: 20px;
      @media screen and (min-width: $break-md) {
        padding-top: initial;
        margin-right: 10px;
        margin-left: 20px;
      }
    }

    & .author-card-button {
      display: block;
      padding: 9px 16px;
      border: 1px solid $secondary;
      color: $secondary;
      font-size: 13px;
      line-height: 1;
      font-weight: 500;
      border-radius: 20px;
      transition: all 0.2s ease;

      width: 60px;
      text-align: center;
    }

    & .author-card-button:hover {
      border-color: $secondary;
      background: $secondary;
      color: $white;
      text-decoration: none;
    }
  }
}
</style>
<style lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_flexbox.scss";
article {
  & .__content {
    &--article {
      & ul,
      ol {
        list-style-type: disc;
        padding: 0 0 0 20px;
        & li {
          color: #2c3e50;
          font-size: 15px;
          line-height: 26px;
          font-family: Poppins, sans-serif;
          & span {
            font-size: 15px;
          }
          & b {
            font-weight: 600 !important;
            color: $primary;
          }
        }
        & li:not(:first-child) {
          margin-top: 16px;
        }
      }
      & span {
        color: $primary;
      }
      & a {
        color: #4b5f7d;
        transition: all 250ms ease-in-out;
        border-bottom: 1px dotted #becbdc;
        word-wrap: break-word;
        font-weight: 600 !important;
        & span {
          color: #4b5f7d;
        }
        &:visited {
          color: #4b5f7d;
        }
        & span {
          font-weight: 700 !important;
        }
      }
      & p {
        font-size: 15px;
        padding: 15px 0px !important;
        color: $primary;
        font-family: Poppins, sans-serif;
        & a {
          color: #4b5f7d;
          transition: all 250ms ease-in-out;
          border-bottom: 1px dotted #becbdc;
          word-wrap: break-word;
          font-weight: 600 !important;
          & span {
            color: #4b5f7d;
          }
          &:visited {
            color: #4b5f7d;
          }
          & span {
            font-weight: 600 !important;
          }
        }
        & b,
        span {
          font-family: Poppins, sans-serif;
        }
        & b {
          font-weight: 600 !important;
          color: $primary;
        }
      }
      & h1,
      h2,
      h3,
      h4 {
        font-family: Quicksand, sans-serif;
      }
      & h1 {
        font-size: 1.8em;
      }
      & h2 {
        font-size: 1.5em;
        font-weight: 600 !important;
      }
      & h3 {
        font-size: 1.3em;
      }
      & h3,
      h4 {
        padding: 10px 0px;
        color: $primary;
        font-weight: 600 !important;
      }
      & img {
        width: 100%;
        height: auto;
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
}
</style>