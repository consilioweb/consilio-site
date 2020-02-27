<template>
  <section class="feed-blog">
    <div class="shape">
      <svg-icon name="shape" />
    </div>
    <div class="feed-blog__title">
      <parallax-element :strength="15" :type="'translate'">
        <h2>blog</h2>
      </parallax-element>
      <span class="feed-blog__title--bg">explorar</span>
    </div>
    <div class="feed-blog__content">
      <article
        v-for="(post, index) in posts.slice(0, 3)"
        :key="index"
        class="feed-blog__content--post"
      >
        <n-link :to="'/blog/'+post.slug" :aria-label="'Artigo: '+post.title">
          <div class="feed-blog__card">
            <figure v-lazy:background-image="post.img"></figure>
            <div class="feed-blog__card--meta">
              <span v-html="shortTimestamp(post.date)"></span>
              <span>•</span>
              <span>
                <client-only>
                  <img class="lazyload" :alt="post.author_name" :src="post.author_img" />
                </client-only>
              </span>
              <span v-html="post.author_name"></span>
            </div>
            <div class="feed-blog__card--title">
              <h1 v-html="post.title"></h1>
            </div>
            <div class="feed-blog__card--content">
              <p v-if="post.excerpt">{{ toLimitChars(post.excerpt, 100) | stripped }}</p>
              <p v-else>{{ toLimitChars(post.content, 100) | stripped }}</p>
            </div>
            <div class="feed-blog__card--button">
              <svg-icon name="icons/right-arrow" />
            </div>
          </div>
        </n-link>
      </article>
    </div>
    <div class="feed-blog__footer">
      <button-shadow :url="urlButton" :text="textButton" />
    </div>
  </section>
</template>

<script>
import ButtonShadow from "@/components/button-shadow";

export default {
  name: "recentPosts",
  props: ["posts", "length"],
  components: {
    ButtonShadow
  },
  mixins: {
    shortTimestamp: Function
  },
  data() {
    return {
      textButton: "Ver mais postagens",
      urlButton: "blog"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/_flexbox.scss";
@import "./assets/scss/_variables.scss";

.feed-blog {
  position: relative;
  &__container {
    @include flexbox;
    @include align-items(center);
    @include flex-direction(column);
    @include flex-flow(wrap);
    padding-top: 50px; // Correction
    @media screen and (min-width: $break-md) {
      @include flex-direction(row);
      padding-top: 0px; // Correction
    }
  }
  &__title {
    @include flexbox;
    @include justify-content(center);
    width: 100%;
    padding-bottom: 50px;

    &--bg {
      position: absolute;
      white-space: nowrap;
      color: $primary;
      opacity: 0.04;
      font-size: 80px;
      font-family: "Montserrat";
      font-weight: 900;
      z-index: -2;
      bottom: 100px;
      @media screen and (min-width: $break-md) {
        padding-bottom: 0px;
        bottom: 25px;
        font-size: 130px;
      }
    }
  }
  &__content {
    @include flexbox;
    @include justify-content(center);
    //padding-bottom: 30px;
    position: relative;
    flex: 1;
    margin: 0;
    @include flex-direction(column);
    @media screen and (min-width: $break-md) {
      @include flex-direction(row);
    }
    &--post {
      @include flexbox;
      @include justify-content(center);
      margin: 0 0.5rem 1rem 0.5rem;
      @media screen and (min-width: $break-lg) {
        &:first-child {
          margin-left: 0px;
        }
        &:last-child {
          margin-right: 0px;
        }
      }
    }
  }
  &__footer {
    @include flexbox;
    @include justify-content(center);
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    @media screen and (min-width: $break-md) {
      padding-bottom: 0px;
    }
  }
  &__card {
    @include flexbox;
    @include flex-direction(column);
    -webkit-box-shadow: 0px 0px 28px -1px rgba(46, 61, 98, 0.14);
    -moz-box-shadow: 0px 0px 28px -1px rgba(46, 61, 98, 0.14);
    box-shadow: 0px 0px 28px -1px rgba(46, 61, 98, 0.14);
    background: $white;
    margin: 1.5%;
    flex: 1;
    padding: 60px 40px 40px 50px;
    transition: all 1s ease-in-out;
    position: relative;
    &--meta {
      position: absolute;
      top: 0;
      left: 0;
      padding: 10px 20px;
      background: $secondary;
      color: $white;
      font-size: 13px;
      transition: all 1s ease-in-out;
      @include flexbox;
      @include align-items(center);
      & span {
        transition: all 1s ease-in-out;
        padding-left: 5px;
      }
      & img {
        border-radius: 50%;
        height: 15px;
        filter: grayscale(100%);
        -webkit-filter: grayscale(100%);
        transition: all 1s ease;
      }
    }
    &--title {
      z-index: 2;
      transition: all 1s ease-in-out;
      & h1 {
        color: $primary;
        font-size: 18px;
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        display: flex;
        padding-bottom: 20px;
        line-height: 1.5;
        transition: all 1s ease-in-out;
      }
    }
    &--content {
      color: $primary;
      & p {
        font-family: Poppins, sans-serif;
        font-size: 13px;
        font-weight: 400;
        line-height: 1.8rem;
      }
    }
    &--button {
      @include flexbox;
      @include flex-direction(column-reverse);
      @include flex-grow(1);
      padding-top: 20px;
      z-index: 2;
      & svg {
        width: 25px;
        height: 25px;
        fill: #bcbfc7;
        transition: all 1s ease;
      }
    }
    @media screen and (min-width: $break-lg) {
      &:first-child {
        margin-left: 0px;
      }
      &:last-child {
        margin-right: 0px;
      }
    }
    &:before {
      content: "";
      border-radius: 100%;
      background: $white;
      width: 120px;
      height: 120px;
      position: absolute;
      top: -30px;
      right: -25px;
      opacity: 0.1;
      z-index: 2;
    }
    &:after {
      content: "";
      border-radius: 100%;
      background: $white;
      width: 100px;
      height: 100px;
      position: absolute;
      bottom: -30px;
      left: -30px;
      opacity: 0.1;
      z-index: 2;
    }
    &:hover {
      transform: scale(1.03);
    }
    & figure {
      opacity: 0;
      box-shadow: inset 0 0 0 2000px rgba(80, 100, 110, 0.4);
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
      z-index: 0;
      transition: all 1s ease-in-out;
      background-size: cover;
      background-repeat: no-repeat;
    }
    &:hover figure {
      opacity: 1;
      background-position: center;
    }
    &:hover .feed-blog__card--meta {
      background: $white;
    }
    &:hover .feed-blog__card--meta span {
      color: $secondary;
    }
    &:hover .feed-blog__card--meta img {
      filter: none;
    }
    &:hover .feed-blog__card--title h1 {
      margin-top: 30%;
      margin-bottom: -30%;
    }
    /*
    &:hover .feed-blog__card--content p {
      display: none;
    }
    */
    &:hover .feed-blog__card--title h1,
    &:hover .feed-blog__card--content p,
    &:hover .feed-blog__card--content {
      transition: all 1s ease-in-out;
      color: $white !important;
      text-shadow: 1px 1px 10px rgba(46, 61, 98, 0.6);
    }
    &:hover .feed-blog__card--icon svg,
    &:hover .feed-blog__card--button svg {
      fill: $white;
      text-shadow: 1px 1px 10px rgba(46, 61, 98, 0.6);
    }
  }
}
.shape {
  position: absolute;
  opacity: 0.02;
  top: 40%;
  left: -50%;
}
.shape svg {
  height: 600px;
  width: 600px;
  transform: scaleX(-1);
}
a {
  @include flexbox;
}
</style>