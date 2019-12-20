<template>
  <section class="feed-blog">
    <div class="feed-blog__container">
      <article v-for="(post, index) in posts" :key="index" class="feed-blog__content">
        <n-link class="feed-blog__card" :to="'/blog/'+post.slug">
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
            <h1>{{post.title}}</h1>
          </div>
          <div class="feed-blog__card--content" v-html="post.excerpt"></div>
          <div class="feed-blog__card--button">
            <svg-icon name="icons/right-arrow" />
          </div>
        </n-link>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "posts",
  props: ["posts", "length"],
  mixins: {
    shortTimestamp: Function
  },
  data() {
    return {
      page: 1
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/_variables.scss";
@import "./assets/scss/_flexbox.scss";

.feed-blog {
  &__container {
    margin: 5%;
    padding-top: 50px; // Correction
    display: flex;
    flex-flow: wrap;
    @media screen and (min-width: $break-md) {
      margin: 10% 13% 10% 10%;
      padding-top: 0px; // Correction
    }
  }
  &__content {
    display: flex;
    flex: 1;
    position: relative;
    min-width: 350px;
    @media screen and (min-width: $break-md) {
      min-width: calc(100% / 3);
    }
  }
  &__card {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-flow: wrap column;
    padding: 60px 40px 60px 50px;
    -webkit-box-shadow: 0px 0px 28px -1px rgba(46, 61, 98, 0.14);
    -moz-box-shadow: 0px 0px 28px -1px rgba(46, 61, 98, 0.14);
    box-shadow: 0px 0px 28px -1px rgba(46, 61, 98, 0.14);
    background: $white;
    transition: all 1s ease-in-out;
    margin: 10px !important;
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
        transition: all 1s ease-in-out;
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
    &:hover .feed-blog__card--title {
      transform: translate(-0%, 50%);
    }
    &:hover .feed-blog__card--content p {
      display: none;
    }
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
</style>