<template>
  <section class="newsletter">
    <div class="newsletter__container">
      <div class="newsletter__title">
        <parallax-element :parallaxStrength="5" :type="'translation'">
          <h2>
            Receba
            <br />novidades
          </h2>
        </parallax-element>
      </div>
      <div class="newsletter__content">
        <div class="card">
          <div class="card__content">
            <p>Cadastre-se e receba as últimas novidades da agência consilio</p>
            <div class="input-wrapper">
              <label for="email">E-mail:</label>
              <input
                aria-label="email"
                id="email"
                name="email"
                type="text"
                placeholder="Endereço de e-mail"
              />
              <button>
                ASSINAR
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="8px"
                  height="9px"
                >
                  <path
                    fill-rule="evenodd"
                    fill="rgb(255, 255, 255)"
                    d="M7.252,5.407 L2.147,8.541 C1.988,8.639 1.804,8.688 1.619,8.688 C1.466,8.688 1.313,8.655 1.173,8.587 C0.864,8.437 0.671,8.144 0.671,7.824 L0.671,1.553 C0.671,1.235 0.864,0.940 1.173,0.791 C1.482,0.640 1.857,0.658 2.147,0.836 L7.252,3.971 C7.514,4.132 7.671,4.401 7.671,4.688 C7.671,4.976 7.514,5.246 7.252,5.407 Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <span class="newsletter--bg">news</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./assets/scss/_variables.scss";
@import "./assets/scss/_flexbox.scss";

.newsletter {
  position: relative;
  &--bg {
    position: absolute;
    white-space: nowrap;
    color: $primary;
    opacity: 0.04;
    font-size: 80px;
    font-family: "Montserrat";
    font-weight: 900;
    z-index: -2;
    bottom: -30px;
    @media screen and (min-width: $break-md) {
      font-size: 180px;
      bottom: -100px;
    }
  }
  &__container {
    margin: 5%;
    @include flexbox;
    @include align-items(center);
    @include flex-direction(column);
    @include flex-flow(wrap);
    @media screen and (min-width: $break-md) {
      @include flex-direction(row);
      margin: 10% 13% 10% 10%;
    }
  }
  &__title {
    @include flexbox;
    @include justify-content(center);
    @include flex-direction(column);
    @include align-items(center);
    width: 100%;
    z-index: 2;
    & h2 {
      text-align: center;
    }
    & span {
      color: $primary;
      opacity: 0.3;
      font-size: 14px;
      font-family: Quicksand;
      font-weight: 600;
    }
  }
  &__content {
    @include flexbox;
    @include justify-content(center);
    padding-bottom: 30px;
    position: relative;
    margin: 1.5%;
    flex: 1;
    width: 100%;
    top: -70px;
    & .card {
      width: 100%;
      background: $white;
      -webkit-box-shadow: 0px 0px 28px -1px rgba(46, 61, 98, 0.14);
      -moz-box-shadow: 0px 0px 28px -1px rgba(46, 61, 98, 0.14);
      box-shadow: 0px 0px 28px -1px rgba(46, 61, 98, 0.14);
      padding: 60px 20px 40px 30px;
      transition: all 1s ease;
      position: relative;
      @media screen and (min-width: $break-md) {
        padding: 60px 40px 40px 50px;
      }
      &__content {
        position: relative;
        @include flexbox;
        @include align-items(center);
        @include flex-direction(column);
        & p {
          flex: 1;
          color: $primary;
          opacity: 0.5;
          font-size: 14px;
          text-align: center;
        }
      }
    }
  }
  &__footer {
    @include flexbox;
    @include justify-content(center);
    @include flex-direction(column);
    width: 100%;
    padding-top: 20px;
  }
}
.input-wrapper {
  @include flexbox;
  box-sizing: border-box;
  flex-flow: row nowrap;
  padding-left: 20px;
  margin-top: 10px;
  height: auto;
  border: 1px solid #eaeaea;
  border-radius: 35px;
  flex: 1;
  width: 100%;
  @media screen and (min-width: $break-md) {
    width: 50%;
  }

  & > input,
  & > button {
    box-sizing: border-box;
    height: 100%;
    border: none;
    outline: none;
  }

  & > input {
    flex: 1 1 auto;
    border-right: 0;
    border-radius: 0;
    height: auto;
    position: relative;
    background: transparent;
  }

  & > button {
    background: $secondary;
    flex-shrink: 0;
    padding: 15px 25px;
    margin: 3px 3px 3px 0px;
    height: 90%;
    border-radius: 25px;
    font-family: Poppins, sans-serif;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    color: $white;
    & svg {
      padding-left: 35px;
      fill: $white;
      display: none;
      @media screen and (min-width: $break-md) {
        padding-left: 35px;
        display: inline-flex;
      }
    }
  }
}

label {
  position: absolute;
  height: 1px;
  width: 1px;
  clip: rect(1px, 1px, 1px, 1px);
  border: 0;
  overflow: hidden;
}
</style>