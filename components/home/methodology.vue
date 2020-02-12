<template>
  <div class="methodology__container">
    <div class="waves">
      <svg
        width="100%"
        height="200px"
        fill="none"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke="#7691a1"
          stroke-width="4"
          stroke-linecap="round"
          stroke-dasharray="1 20"
          d="
          M0 67
          C 273,183
            822,-40
            1920.00,106 
          
          V 359 
          H 0 
          V 67
          Z"
        >
          <animate
            repeatCount="indefinite"
            stroke="#98adca"
            attributeName="d"
            dur="15s"
            attributeType="XML"
            values="
            M0 77 
            C 473,283
              822,-40
              1920,116 
            
            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 473,-40
              1222,283
              1920,136 
            
            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 973,260
              1722,-53
              1920,120 
            
            V 359 
            H 0 
            V 67 
            Z; 

            M0 77 
            C 473,283
              822,-40
              1920,116 
            
            V 359 
            H 0 
            V 67 
            Z
            "
          />
        </path>
      </svg>
    </div>
    <div class="shape">
      <svg-icon name="shape" />
    </div>
    <div class="methodology__content">
      <div class="methodology__card">
        <div class="methodology__card--number">1</div>
        <div class="methodology__card--icon">
          <svg-icon name="icons/laptop" />
        </div>
        <div class="methodology__card--title">
          <h3>Redes Sociais</h3>
        </div>
        <div class="methodology__card--description">
          <p>
            Facebook, Instagram, LinkedIn, google
            e outros.
          </p>
        </div>
        <div class="methodology__card--button">
          <svg-icon name="icons/right-arrow" />
        </div>
      </div>
      <div class="methodology__card">
        <div class="methodology__card--number">2</div>
        <div class="methodology__card--icon">
          <svg-icon name="icons/presentation" />
        </div>
        <div class="methodology__card--title">
          <h3>Campanhas</h3>
        </div>
        <div class="methodology__card--description">
          <p>
            Link’s patrocinados
            nas mídias sociais.
          </p>
        </div>
        <div class="methodology__card--button">
          <svg-icon name="icons/right-arrow" />
        </div>
      </div>
      <div class="methodology__card">
        <div class="methodology__card--number">3</div>
        <div class="methodology__card--icon">
          <svg-icon name="icons/target" />
        </div>
        <div class="methodology__card--title">
          <h3>Website</h3>
        </div>
        <div class="methodology__card--description">
          <p>
            Ponto de avaliação
            e validação das
            conversões.
          </p>
        </div>
        <div class="methodology__card--button">
          <svg-icon name="icons/right-arrow" />
        </div>
      </div>
      <div class="methodology__card">
        <div class="methodology__card--number">4</div>
        <div class="methodology__card--icon">
          <svg-icon name="icons/coin" />
        </div>
        <div class="methodology__card--title">
          <h3>Automação</h3>
        </div>
        <div class="methodology__card--description">
          <p>
            Gestão do
            relacionamento com
            o lead e o cliente.
          </p>
        </div>
        <div class="methodology__card--button">
          <svg-icon name="icons/right-arrow" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "methodology"
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/_flexbox.scss";
@import "./assets/scss/_variables.scss";

.methodology {
  &__container {
    padding: 50px 0;
    position: relative;
  }
}
.methodology__content {
  @include flexbox;
  @include flex-direction(column);
  @include align-content(space-between);
  @include flex-wrap(wrap);
  counter-reset: item;
  @media screen and (min-width: $break-md) {
    @include flex-direction(row);
  }
}
.methodology__card {
  @include flexbox;
  @include flex-direction(column);
  -webkit-box-shadow: 0px 0px 28px -1px rgba(46, 61, 98, 0.14);
  -moz-box-shadow: 0px 0px 28px -1px rgba(46, 61, 98, 0.14);
  box-shadow: 0px 0px 28px -1px rgba(46, 61, 98, 0.14);
  background: $white;
  min-width: 90px;
  margin: 0 0.5rem 1rem 0.5rem;
  flex: 1;
  padding: 30px 30px 30px 40px;
  transition: all 1s ease;
  position: relative;
  counter-increment: item;
  @media screen and (min-width: $break-md) {
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
    opacity: 0.08;
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
  }
  &:hover {
    background: $secondary;
  }
  &:hover .methodology__card--title h3,
  &:hover .methodology__card--description p {
    color: $white;
  }
  &:hover .methodology__card--icon svg,
  &:hover .methodology__card--button svg {
    fill: $white;
  }
}
.methodology__card--number {
  content: counter(item);
  position: absolute;
  white-space: nowrap;
  color: $primary;
  opacity: 0.04;
  font-size: 130px;
  font-family: "Montserrat";
  font-weight: 900;
  z-index: -2;
  top: -25%;
  left: -20%;
}
.methodology__card--icon {
  padding-bottom: 20px;
  transition: all 1s ease;
}
.methodology__card--icon svg {
  width: 50px;
  height: 50px;
  fill: $secondary;
  transition: all 1s ease;
}
.methodology__card--title {
  transition: all 1s ease;
  padding: 5px 0;
}
.methodology__card--title h3 {
  font-family: Poppins, sans-serif;
  transition: all 1s ease;
  font-size: 16px;
  font-weight: 600;
  color: $dark_blue;
}
.methodology__card--description {
  transition: all 1s ease;
  padding: 10px 0;
}
.methodology__card--description p {
  color: $tertiary;
  font-family: Poppins, sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 22px;
  transition: all 1s ease;
}
.methodology__card--button {
  @include flexbox;
  @include flex-grow(1);
  @include flex-direction(column-reverse);
  transition: all 1s ease;
  margin-top: 10px;
}
.methodology__card--button svg {
  width: 25px;
  height: 25px;
  fill: #bcbfc7;
}
.shape {
  position: absolute;
  opacity: 0.03;
  top: 0;
  left: 80%;
  & svg {
    height: 600px;
    width: 600px;
    color: $primary;
    fill: $primary;
  }
}

@keyframes morph {
  0%,
  100% {
    border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
    transform: translate3d(0, 0, 0) rotateZ(0.01deg);
  }
  34% {
    border-radius: 70% 30% 46% 54% / 30% 29% 71% 70%;
    transform: translate3d(0, 5px, 0) rotateZ(0.01deg);
  }
  50% {
    transform: translate3d(0, 0, 0) rotateZ(0.01deg);
  }
  67% {
    border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
    transform: translate3d(0, -3px, 0) rotateZ(0.01deg);
  }
}
.waves {
  width: 140% !important;
  bottom: 25%;
  position: absolute;
  z-index: -1;
  transform: scale(1.2) translate(-2%, -50%);
}

.waves svg {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  animation-name: move-left;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes example {
  0% {
    left: 0px;
    top: 0px;
  }

  50% {
    left: -2000px;
    top: 200px;
  }

  100% {
    left: 0px;
    top: 0px;
  }
}
.methodology__button {
  @include flexbox;
  @include justify-content(center);
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  @media screen and (min-width: $break-md) {
    padding-bottom: 0px;
  }
}
</style>