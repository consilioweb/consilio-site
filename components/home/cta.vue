<template>
  <section class="cta">
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
    <div class="cta__container">
      <div class="cta__title">
        <h1>
          <span>{{title}}</span>
        </h1>
      </div>
      <div class="cta__button">
        <button-shadow :url="urlButton" :text="textButton" />
      </div>
    </div>
  </section>
</template>

<script>
import ButtonShadow from "@/components/button-shadow";

export default {
  name: "cta",
  props: ["title", "textButton", "urlButton"],
  components: {
    ButtonShadow
  }
};
</script>

<style lang="scss" scoped>
.cta {
  position: relative;
  &__container {
    margin: 5%;
    @include flexbox;
    @include align-items(center);
    @include flex-direction(column);
    @include flex-flow(wrap);
    padding-top: 20px; // Correction
    padding-bottom: 80px; // Correction
    @media screen and (min-width: $break-md) {
      @include flex-direction(row);
      margin: 10% 13% 10% 10%;
      padding-top: 0px; // Correction
      padding-bottom: 0px; // Correction
    }
  }
  &__title {
    @include flexbox;
    @include justify-content(center);
    @include flex-direction(column);
    @include align-items(center);
    width: 100%;
    @media screen and (min-width: $break-md) {
      padding: 0 19%;
    }
    & h1 {
      text-align: center;
      font-family: Poppins, sans-serif;
      font-size: 30px;
      color: $primary;
      font-weight: 600;
      line-height: 2.5rem;
      @media screen and (min-width: $break-md) {
        font-size: 40px;
        line-height: 3rem;
      }
      span {
        width: calc(100%);
        background-image: linear-gradient(
          transparent calc(100% - 10px),
          rgba(88, 99, 113, 0.08) 10px
        );
        background-repeat: no-repeat;
        background-size: 100% 85%;
        transition: background-size 1s;
        &:hover {
          background-size: 100% 85%;
        }
      }
    }
  }
  &__button {
    @include flexbox;
    @include justify-content(center);
    width: 100%;
    padding-top: 40px;
    transform: scale(0.9);
  }
}
.shape {
  position: absolute;
  opacity: 0.04;
  width: 100vw;
  height: auto;
  transform: translate(70%, 0);
}
.shape svg {
  height: 700px;
  width: 700px;
  float: none;
  position: absolute;
}
</style>