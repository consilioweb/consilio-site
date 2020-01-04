<template>
  <section class="blog">
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

                <h5 class="modal__link" @click="modal = false">
                  <a href="#" target="_blank">Link</a>
                </h5>

                <button class="modal__close" @click="modal = false">&times;</button>
              </article>
            </section>
          </transition>

          <div class="common-links">
            <div class="common-link link-search" href="#" target="_blank" rel="noopener">
              <input type="text" placeholder="Buscar..." />
              <div class="search"></div>
            </div>
          </div>
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
          :key="filter"
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
import _ from "lodash";
import posts from "@/components/blog/posts.vue";

export default {
  components: {
    posts
  },
  data() {
    return {
      modal: false,
      totalPages: 0,
      filtered: [],
      dropdown: { height: 0 },
      filters: { categorias: {}, tags: {} },
      menus: { categorias: false, tags: false }
    };
  },

  async asyncData({ store, params }) {
    store.dispatch("categories/getCategories", {
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
            27}px`;
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
              this.todosposts = allResults;
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

      /*
      return this.todosposts.filter(({ post_categories, post_tags }) => {
        if (tags.length && !~post_tags.indexOf(tags[0])) return false;
        return (
          !categories.length ||
          categories.every(cat => ~post_categories.indexOf(cat))
        );
      });
      */
    },

    activeFilters() {
      let { categorias, tags } = this.filters;

      return {
        categorias: Object.keys(categorias).filter(c => categorias[c]),
        tags: Object.keys(tags).filter(t => tags[t])
      };
    },
    ...mapState("posts", ["recent"])
    /*
    ...mapState("categories", ["categories"]),
    ...mapState("tags", ["tags"]),
    */
  },
  async mounted() {
    await this.allPosts();
    this.allCategories();
    this.allTags();
    this.$store.commit("HOVER_BUTTON_HEADER", true);
    this.$store.commit("LOGO_HEADER_WHITE", true);
  },
  head() {
    return {
      title: "Blog Consilio | Agência Consilio"
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
.section__filters {
  margin: -70px 5% 0% 5%;
  @media screen and (min-width: $break-md) {
    margin: -70px calc(13% - -10px) 10px calc(10% + 10px);
  }
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
  height: 0px;
}

.nav {
  display: flex;
  white-space: nowrap;

  &__controls {
    display: flex;
  }

  &__icon {
    width: 1rem;
    height: 1rem;
    fill: currentColor;
  }

  &__label {
    position: relative;
    margin-left: 1rem;
    text-transform: capitalize;
    z-index: 1;
    cursor: pointer;
    font-size: 14px;
    opacity: 0.9;

    &::after {
      content: "\00d7";
      display: inline-block;
      color: transparent;
      width: 0.5rem;
      font-weight: 400;
      transform: scale(0);
      transition: transform 150ms ease-in-out;
      padding-left: 5px;
    }

    &--clear {
      color: #f68185;
      opacity: 0;
      display: none;
      transform: translate3d(-25%, 0, 0);
      pointer-events: none;
      transition: all 275ms ease-in-out;
    }

    &--filter ~ &--clear {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      pointer-events: auto;
      display: block;
    }

    &--filter::after,
    &--active::after {
      transform: scale(1);
    }

    &--filter::after {
      content: "\2022";
      color: #46d2c4;
    }

    &--active::after {
      content: "\00d7";
      color: #f68185;
    }
  }
}

.dropdown {
  position: relative;
  height: 0;
  overflow: hidden;
  transition: height 350ms;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1rem;
    background-image: linear-gradient(to top, white, rgba(white, 0));
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }

  &-leave,
  &-enter-to {
    opacity: 1;
  }

  &-enter-active,
  &-leave-active {
    position: absolute;
    width: 100%;
    transition: opacity 200ms ease-in-out;
  }

  &-enter-active {
    transition-delay: 100ms;
  }
}

.filters {
  padding: 30px 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;

  &__item {
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.25rem 0.5rem;
    border: 1px solid #c5d0d1;
    border-radius: 0px;
    font-size: 0.8rem;
    line-height: 1.35;
    cursor: pointer;
    transition: all 275ms;
    color: $primary;

    &:hover {
      border-color: $secondary;
    }

    &--active {
      color: white;
      border-color: $secondary;
      background-color: $secondary;
    }
  }

  &__rating {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 0;
  }

  &__range {
    width: 200px;
    margin-top: 1rem;
    color: inherit;

    &::-webkit-slider-thumb {
      width: 0.8rem;
      height: 0.8rem;
      margin-top: calc(-0.4rem + 2px);
      border-radius: 100%;
      background-color: currentColor;
    }

    &::-webkit-slider-runnable-track {
      width: 100%;
      height: 4px;
      background-image: linear-gradient(to right, white, $secondary);
    }
  }
}

.modal {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(white, 0.6);
  z-index: 1;
  color: $primary;

  &-enter-active,
  &-leave-active {
    transition: opacity 350ms;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }

  &-leave,
  &-enter-to {
    opacity: 1;
  }

  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 500px;
    min-height: 250px;
    padding: 1.5rem 1rem;
    background-color: white;
    border: 1px solid #c5d0d1;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 0.5rem 1.75rem -0.25rem rgba($primary, 0.4);
  }

  &__title {
    font-weight: 400;
    font-size: 1.5rem;
  }

  &__link {
    margin-top: 1.5rem;
    position: relative;
    font-size: 1.2rem;
    font-weight: 300;
    z-index: 0;

    &::after {
      content: "";
      width: 100%;
      height: 1px;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: currentColor;
      z-index: -1;
      transition: background-color 225ms ease-out;
    }

    &:hover::after {
      background-color: $secondary;
    }
  }

  &__close {
    position: absolute;
    top: 0.25rem;
    right: 1rem;
    font-size: 1.75rem;
    font-weight: 400;
    opacity: 0.5;
    transition: opacity 150ms ease-out;

    &:hover {
      opacity: 1;
    }
  }
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