<template>
  <section class="cta">
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
</style>