<template>
  <section class="methodology">
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
            stroke-width="5"
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
      <div class="methodology__title">
        <parallax-element :strength="10" :type="'translate'">
          <h2>metodologia</h2>
        </parallax-element>
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
      <div class="methodology__button">
        <button-shadow :text="textButton" />
      </div>
    </div>
  </section>
</template>

<script>
import ButtonShadow from "@/components/button-shadow";

export default {
  components: {
    ButtonShadow
  },
  data() {
    return {
      textButton: "Saiba Mais"
    };
  }
};
</script>

<style lang="scss" scoped>
.methodology {
  position: relative;
}
.methodology__container {
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
.methodology__title {
  @include flexbox;
  @include justify-content(center);
  width: 100%;
  padding-bottom: 30px;
}
.methodology__content {
  @include flexbox;
  @include align-content(space-between);
  width: 100%;
  counter-reset: item;
  flex-wrap: wrap;
}
.methodology__card {
  @include flexbox;
  @include flex-direction(column);
  -webkit-box-shadow: 0px 0px 28px -1px rgba(46, 61, 98, 0.14);
  -moz-box-shadow: 0px 0px 28px -1px rgba(46, 61, 98, 0.14);
  box-shadow: 0px 0px 28px -1px rgba(46, 61, 98, 0.14);
  background: $white;
  min-width: 90px;
  margin: 1.5%;
  flex: 1;
  padding: 40px 30px 40px 50px;
  transition: all 1s ease;
  position: relative;
  counter-increment: item;
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
  font-size: 180px;
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
  width: 60px;
  height: 60px;
  fill: $secondary;
  transition: all 1s ease;
}
.methodology__card--title {
  transition: all 1s ease;
  padding: 20px 0;
}
.methodology__card--title h3 {
  font-family: Poppins, sans-serif;
  transition: all 1s ease;
  font-size: 18px;
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
  line-height: 1.8rem;
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
  opacity: 0.04;
  width: 100vw;
  height: auto;
  top: 0;
  transform: translate(70%, 50%);
}
.shape svg {
  height: 700px;
  width: 700px;
  float: none;
  position: absolute;
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
  width: 120% !important;
  bottom: 33%;
  position: absolute;
  z-index: -1;
  left: -10px;
  right: -10px;
  transform: scale(1.2);
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