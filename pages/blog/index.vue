<template>
  <section class="blog">
    <header :style="'background-image: url('+recent[0].img+')'">
      <div class="header__overlay"></div>
      <div class="container__full">
        <div class="__content">
          <div class="__content--title">
            <h1>Blog</h1>
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
                <a href="#" @click="modal = !modal">Autores</a>
              </li>
            </ul>
          </div>
          <div class="nav-right">
            <menu class="nav__controls">
              <li
                v-for="(active, menu) in menus"
                class="nav__label"
                :class="{
          'nav__label--active' : active,
          'nav__label--filter': activeFilters[menu].length
        }"
                @click="setMenu(menu, active)"
                :key="menu"
              >{{ menu }}</li>

              <li class="nav__label nav__label--clear" @click="clearAllFilters">Limpar filtros</li>
            </menu>
          </div>

          <transition name="modal">
            <section v-if="modal" class="modal" @click="modal = false">
              <article class="modal__content" @click.stop>
                <h4 class="modal__title">Autores</h4>

                <div class="modal__authors" v-for="author in authors" :key="author.id">
                  <a :href="'/blog/autores/'+author.slug">
                    <img :src="author.img" :alt="author.name" class="author-profile-image" />
                  </a>
                  <div class="author-card-content">
                    <h4 class="author-card-name">
                      <a :href="'/blog/autores/'+author.slug">{{author.name}}</a>
                    </h4>
                    <a :href="'/blog/autores/'+author.slug">
                      <p v-if="author.description">{{ toLimitChars(author.description, 150) }}</p>
                      <p
                        v-else
                      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod consequatur facere eos incidunt odio iure placeat illum, dolores, modi velit ea architecto ...</p>
                    </a>
                  </div>
                </div>

                <button class="modal__close" @click="modal = false">&times;</button>
              </article>
            </section>
          </transition>

          <!-- <div class="common-links">
              <div class="common-link link-search" href="#" target="_blank" rel="noopener">
                <input type="text" placeholder="Buscar..." />
                <div class="search"></div>
              </div>
          </div>-->
        </nav>
      </div>
    </header>
    <div class="section__filters">
      <transition-group name="dropdown" tag="section" class="dropdown __card" :style="dropdown">
        <menu
          v-for="(options, filter) in filters"
          class="filters"
          v-show="menus[filter]"
          ref="menu"
          :key="filter+1"
        >
          <template>
            <li
              :key="option"
              v-for="(active, option) in options"
              class="filters__item"
              :class="{ 'filters__item--active': active }"
              @click="setFilter(filter, option)"
            >{{ option }}</li>
          </template>
        </menu>
      </transition-group>
    </div>
    <posts
      class="section__post"
      :category="this.activeFilters.categorias[0]"
      :tag="this.activeFilters.tags[0]"
      :totalPages="totalPages"
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
      modal: false,
      totalPages: 0,
      todoPosts: [],
      filtered: [],
      dropdown: { height: 0 },
      filters: { categorias: {}, tags: {} },
      menus: { categorias: false, tags: false }
    };
  },

  async asyncData({ store, params }) {
    await store.dispatch("categories/getCategories", {
      page: 1,
      per_page: 5
    });
    await store.dispatch("tags/getTags", {
      page: 1,
      per_page: 5
    });
  },
  watch: {
    list(index, from) {},
    activeMenu(index, from) {
      if (index === from) return;

      this.$nextTick(() => {
        if (!this.$refs.menu || !this.$refs.menu[index]) {
          this.dropdown.height = 0;
        } else {
          this.dropdown.height = `${this.$refs.menu[index].clientHeight +
            14}px`;
        }
      });
    }
  },
  methods: {
    allPosts() {
      api.getPosts().then(posts => {
        this.totalPages = posts.totalPages;
        let totalPages = posts.totalPages;
        let allResults = posts.data;
        for (let i = 2; i <= totalPages; i++) {
          api
            .getPosts(i, 5)
            .then(response => {
              return response.data;
            })
            .then(moreresults => {
              allResults = allResults.concat(moreresults);
              this.todoPosts = allResults;
            });
        }
      });
    },
    allCategories() {
      api.getCategories().then(categories => {
        let totalPages = categories.totalPages;
        let allResults = categories.data;
        for (let i = 2; i <= totalPages; i++) {
          api
            .getCategories(i)
            .then(response => {
              return response.data;
            })
            .then(moreresults => {
              allResults = allResults.concat(moreresults);
              allResults.forEach(({ name, id }) => {
                this.$set(this.filters.categorias, name, false);
              });
            });
        }
      });
    },
    allTags() {
      api.getTags().then(tags => {
        let totalPages = tags.totalPages;
        let allResults = tags.data;
        for (let i = 2; i <= totalPages; i++) {
          api
            .getTags(i, 0)
            .then(response => {
              return response.data;
            })
            .then(moreresults => {
              allResults = allResults.concat(moreresults);
              allResults.forEach(({ name, id }) => {
                this.$set(this.filters.tags, name, false);
              });
            });
        }
      });
    },
    setFilter(filter, option) {
      if (filter === "test") {
        this.filters[filter][option] = !this.filters[filter][option];
      } else {
        setTimeout(() => {
          this.clearFilter(filter, option, this.filters[filter][option]);
        }, 100);
      }
    },
    clearFilter(filter, except, active) {
      Object.keys(this.filters[filter]).forEach(option => {
        this.filters[filter][option] = except === option && !active;
      });
    },
    clearAllFilters() {
      Object.keys(this.filters).forEach(this.clearFilter);
    },
    setMenu(menu, active) {
      Object.keys(this.menus).forEach(tab => {
        this.menus[tab] = !active && tab === menu;
      });
    }
  },
  computed: {
    fecthURL() {
      var query = window.location.pathname.slice(1);
      var partes = query.split("/");
      var data = {};
      partes.forEach(function(parte) {
        var chaveValor = parte.split("/");
        var chave = chaveValor[0];
        var valor = false;
        data[chave] = valor;
      });
      return data;
    },
    activeMenu() {
      return Object.keys(this.menus).reduce(
        ($$, set, i) => (this.menus[set] ? i : $$),
        -1
      );
    },
    list() {
      let { categorias, tags } = this.activeFilters;
      api
        .getPosts(1, 5, categorias[0], tags[0])
        .then(posts => {
          return (this.filtered = posts.data);
        })
        .catch(error => {
          console.log(error.message);
        });
      return !tags.length || !categorias.length;
    },
    activeFilters() {
      let { categorias, tags } = this.filters;
      return {
        categorias: Object.keys(categorias).filter(c => categorias[c]),
        tags: Object.keys(tags).filter(t => tags[t])
      };
    },
    ...mapState("posts", ["recent"]),
    ...mapState("posts", ["authors"])
  },
  async mounted() {
    await Promise.all([
      this.$forceUpdate(),
      this.allPosts(),
      this.allCategories(),
      this.allTags(),
      this.$store.dispatch("posts/getAuthors"),
      this.$store.commit("HOVER_BUTTON_HEADER", true),
      this.$store.commit("LOGO_HEADER_WHITE", true)
    ]);
  },
  head() {
    return {
      title: "Blog de Marketing Digital | Agência Consilio",
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
</style>

<router>
  {
    path: '/blog',
    alias: [
      '/explorar',
      '/posts',
      '/blog/categoria',
      '/blog/categoria/:name',
      '/blog/tags'
    ]
  }
</router>