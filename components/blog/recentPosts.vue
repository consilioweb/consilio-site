<template>
  <section class="feed-blog">
    <div class="shape">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 280 280">
        <path fill="#586371">
          <animate
            repeatCount="indefinite"
            attributeName="d"
            dur="15s"
            values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z; M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4 c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6 c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8 C48.9,198.6,57.8,191,51,171.3z; M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z	"
          />
        </path>
      </svg>
    </div>
    <div class="feed-blog__container">
      <div class="feed-blog__title">
        <parallax-element :strength="15" :type="'translate'">
          <h2>blog</h2>
        </parallax-element>
        <span class="feed-blog__title--bg">explorar</span>
      </div>
      <div class="feed-blog__content">
        <article v-for="(post, index) in posts.slice(0, 3)" :key="index" class="feed-blog__content">
          <n-link :to="'/blog/'+post.slug">
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
                <h1>{{post.title}}</h1>
              </div>
              <div class="feed-blog__card--content">
                <p v-if="post.excerpt">{{ toLimitChars(post.excerpt, 200) | stripped }}</p>
                <p v-else>{{ toLimitChars(post.content, 200) | stripped }}</p>
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
.feed-blog {
  position: relative;
  width: 100vw;
  &__container {
    margin: 5%;
    @include flexbox;
    @include align-items(center);
    @include flex-direction(column);
    @include flex-flow(wrap);
    padding-top: 50px; // Correction
    @media screen and (min-width: $break-md) {
      @include flex-direction(row);
      margin: 10% 13% 10% 10%;
      padding-top: 0px; // Correction
    }
  }
  &__title {
    @include flexbox;
    @include justify-content(center);
    width: 100%;
    padding-bottom: 10px;

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
        bottom: 0px;
        font-size: 180px;
      }
    }
  }
  &__content {
    @include flexbox;
    @include justify-content(center);
    padding-bottom: 30px;
    position: relative;
    margin: 1.5%;
    flex: 1;
    @include flex-direction(column);
    @media screen and (min-width: $break-md) {
      @include flex-direction(row);
    }
  }
  &__footer {
    @include flexbox;
    @include justify-content(center);
    width: 100%;
    padding-top: 20px;
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
  opacity: 0.04;
  width: 100vw;
  height: auto;
  top: 50%;
  transform: translate(-40%, 0);
}
.shape svg {
  height: 700px;
  width: 700px;
  float: none;
  position: absolute;
}
a {
  @include flexbox;
}
</style>