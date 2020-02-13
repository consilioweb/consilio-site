<template>
  <div class="post" v-if="$isAMP">
    <header>
      <h1 v-html="post.title"></h1>
    </header>
    <ul class="post__meta">
      <li class="author">
        <amp-img
          class="author__img"
          :src="post.author_img"
          height="48"
          width="48"
          layout="fixed"
          :alt="post.author_name"
        />
        <span class="author__name">{{ post.author_name }}</span>
      </li>
      <li class="date">
        <span>Postado em:&nbsp;</span>
        <span v-html="shortTimestamp(post.date)"></span>
      </li>
    </ul>
    <amp-img
      :src="post.img ? post.img : thumbnail_default"
      width="1200"
      height="700"
      layout="responsive"
      :alt="post.title"
    ></amp-img>
    <article>
      <div v-html="this.$options.filters.ampStripped(this.post.content)"></div>
    </article>
  </div>
  <div v-else>
    <section class="post_single">
      <header :style="'background-image: url('+(post.img ? post.img : thumbnail_default)+')'">
        <div class="header__overlay"></div>
        <div class="inner">
          <div class="__content">
            <div class="__content--title">
              <h1 v-html="post.title"></h1>
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
      <article class="article">
        <figure
          class="header"
          :style="'background-image: url('+(post.img ? post.img : thumbnail_default)+')'"
        ></figure>
        <div class="article__content">
          <div class="article__content--article" v-html="post.content"></div>
          <aside class="article__content--sidebar">
            <div class="sidebar--content sticky">
              <div class="about_post">
                <div class="about_post--content">
                  <span>
                    <img :src="post.author_img" height="48" width="48" :alt="post.author_name" />
                  </span>
                  <span>
                    Por:
                    <b>{{post.author_name}}</b>
                  </span>
                  <span>
                    <p v-html="longTimestamp(post.date)"></p>
                  </span>
                  <span>{{readingTime}}</span>
                </div>
              </div>
              <div class="posts_related_section">
                <h3>Veja também</h3>
                <ul>
                  <li v-for="(related, index) in postsCategory" :key="index">
                    <a :href="'/blog/'+related.slug">
                      <figure
                        :style="'background: url('+ (related.img ? related.img : thumbnail_default) +')'"
                      ></figure>
                    </a>
                    <a :href="'/blog/'+related.slug" v-html="toLimitChars(related.title, 45)"></a>
                  </li>
                </ul>
              </div>
              <div class="banner_section">
                <a @click="$store.commit('TOOGLE_MODAL')">
                  <img src="@/assets/img/banners/1.gif" />
                </a>
              </div>
            </div>
          </aside>
        </div>
        <section class="__footer">
          <section class="author-card">
            <n-link :to="'/blog/autores/'+post.author_slug">
              <img class="author-profile-image" :src="post.author_img" :alt="post.author_name" />
            </n-link>
            <section class="author-card-content">
              <h4 class="author-card-name">
                <n-link :to="'/blog/autores/'+post.author_slug">{{post.author_name}}</n-link>
              </h4>
              <p>{{post.author_description}}</p>
            </section>
          </section>
          <div class="post-full-footer-right">
            <n-link class="author-card-button" :to="'/blog/autores/'+post.author_slug">Ler mais</n-link>
          </div>
        </section>
        <comment-fb :urlPost="urlPost"></comment-fb>
      </article>
    </section>
  </div>
</template>

<script>
import api from "@/api/index";
import CommentFb from "@/components/comment-fb";
export default {
  amp: "hybrid",
  ampLayout: "default.amp",
  components: { CommentFb },
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
  computed: {
    readingTime() {
      let words = this.post.content.split(" ").length + 1;
      return `${Math.ceil(words / 150)} min. de leitura`;
    },
    urlPost() {
      return process.env.BASE_URL + "blog/" + this.post.slug;
    },
    thumbnail_default() {
      return this.$store.state.core.info.thumbnail_default;
    }
  },
  beforeMount() {
    this.$fb;
    this.$forceUpdate();
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
          content: this.post.excerpt
            ? this.$options.filters.stripped(this.post.excerpt)
            : this.toLimitChars(
                this.$options.filters.stripped(this.post.content),
                160
              )
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content:
            this.$options.filters.stripped(this.post.title) +
            ` | Agência Consilio`
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content:
            this.$options.filters.stripped(this.post.title) +
            ` | Agência Consilio`
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.post.excerpt
            ? this.$options.filters.stripped(this.post.excerpt)
            : this.toLimitChars(
                this.$options.filters.stripped(this.post.content),
                160
              )
        },
        {
          hid: "og:title",
          name: "og:title",
          content:
            this.$options.filters.stripped(this.post.title) +
            ` | Agência Consilio`
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.post.excerpt
            ? this.$options.filters.stripped(this.post.excerpt)
            : this.toLimitChars(
                this.$options.filters.stripped(this.post.content),
                160
              )
        }
      ],
      link: [
        {
          rel: "canonical",
          href: this.urlPost
        }
      ]
    };
  }
};
</script>