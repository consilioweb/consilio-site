<template>
  <section class="feed-blog">
    <transition-group name="posts" tag="div" class="feed-blog__container">
      <article
        v-for="(post, $index) in list"
        :key="$index+1"
        :id="post.id"
        class="feed-blog__content"
      >
        <n-link class="feed-blog__card" :to="`/blog/${post.slug}`">
          <figure :style="'background-image: url('+post.img+')'"></figure>
          <div class="feed-blog__card--meta">
            <span v-html="shortTimestamp(post.date)"></span>
            <span>•</span>
            <span>
              <img :alt="post.author_name" :src="post.author_img" />
            </span>
            <span v-html="post.author_name"></span>
          </div>
          <div class="feed-blog__card--title">
            <h1 v-html="post.title"></h1>
          </div>
          <div v-if="post.excerpt !== ''" class="feed-blog__card--content">
            <p>{{ toLimitChars(post.excerpt, 150) | stripped }}</p>
          </div>
          <div v-else class="feed-blog__card--content">
            <p>{{ toLimitChars(post.content, 150) | stripped }}</p>
          </div>
          <div class="feed-blog__card--button">
            <svg-icon name="icons/right-arrow" />
          </div>
        </n-link>
      </article>
    </transition-group>

    <client-only>
      <div class="feed-blog__container">
        <infinite-loading
          spinner="waveDots"
          :identifier="infiniteId"
          @infinite="infiniteScroll"
          ref="infiniteLoading"
        >
          <div slot="no-more">Chegamos ao fim! Continue navegando. :)</div>
          <div
            slot="no-results"
          >Ops, não existe resultados com esses filtros. Vamos tentar outra vez? :)</div>
        </infinite-loading>
      </div>
    </client-only>
  </section>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import api from "@/api/index";

export default {
  name: "posts",
  props: {
    per_page: {
      type: Number,
      default: 5
    },
    totalPages: {
      type: [Number, String],
      default: 1
    },
    category: {
      type: [Object, String]
    },
    tag: {
      type: [Object, String]
    },
    author: {
      type: [Object, String]
    }
  },
  mixins: {
    shortTimestamp: Function
  },
  data() {
    return {
      page: 1,
      list: [],
      infiniteId: +new Date()
    };
  },
  methods: {
    infiniteScroll($state) {
      api
        .getPosts(
          this.page,
          5,
          this.category,
          this.tag,
          this.author ? this.author.id : ""
        )
        .then(({ data }) => {
          if (this.page <= this.totalPages) {
            this.page += 1;
            this.list.push(...data);
            $state.loaded();
            if (data.length <= 4) {
              return $state.complete() && true;
            }
          } else {
            $state.complete();
          }
        })
        .catch(function(error) {
          $state.complete();
        });

      /*
      setTimeout(() => {
        if (this.page <= this.$store.state.posts.totalPages) {
          this.page++;

          
          this.$store.dispatch("posts/getPosts", {
            page: this.page,
            per_page: 5,
            category: this.category,
            tag: this.tag
          });
          this.posts.forEach(item => this.articles.push(item));
          
         
          $state.loaded();
        } else {
          $state.complete();
        }
      }, 1000);
      */
    },
    changeType() {
      this.page = 1;
      this.list = [];
      this.infiniteId += 1;
    }
  },
  watch: {
    category(from, to) {
      this.changeType();
    },
    tag(from, to) {
      this.changeType();
    }
  }
};
</script>

<style lang="scss" scoped>
.pagination-amp {
  height: 44px;
  font-size: 16px;
  display: flex;
  .info {
    padding: 12px;
  }
  .controls {
    display: flex;
    svg {
      height: 30px;
      width: 30px;
    }
    .button {
      height: 44px;
      width: 44px;
      text-align: center;
      margin-right: 5px;
      padding: 14px;
      outline: none;
      &-text {
        font-weight: 700;
      }
    }
    .is-disabled {
      pointer-events: none;
      .icon {
        color: #c9c9c9;
        fill: #c9c9c9;
      }
    }
  }
}
</style>