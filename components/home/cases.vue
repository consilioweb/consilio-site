<template>
  <section class="cases">
    <div class="cases__title">
      <parallax-element :parallaxStrength="-15" :type="'translation'">
        <h2>cases</h2>
      </parallax-element>
      <span class="cases__title--bg">portfólio</span>
    </div>
    <div class="cases__content">
      <div class="card-carousel">
        <div class="card-carousel__item" v-bind:style="style" v-on:click="centerSelf">
          <div class="card-carousel__item--cover">
            <img src="@/assets/img/implantes.png" />
          </div>
          <div class="card-carousel__item--title">
            <h3>Grupo Sorrir</h3>
          </div>
          <div class="card-carousel__item--button">
            <button-shadow :title="buttonShadow" />
          </div>
        </div>
        <div class="card-carousel__item active" v-bind:style="style" v-on:click="centerSelf">
          <div class="card-carousel__item--cover">
            <img src="@/assets/img/invisalign.png" />
          </div>
          <div class="card-carousel__item--title">
            <h3>Afeto Odontologia</h3>
          </div>
          <div class="card-carousel__item--button">
            <button-shadow :title="buttonShadow" />
          </div>
        </div>
        <div class="card-carousel__item" v-bind:style="style" v-on:click="centerSelf">
          <div class="card-carousel__item--cover">
            <img src="@/assets/img/facetas.png" />
          </div>
          <div class="card-carousel__item--title">
            <h3>Odonto Design</h3>
          </div>
          <div class="card-carousel__item--button">
            <button-shadow :title="buttonShadow" />
          </div>
        </div>
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
      buttonShadow: "Ver Case",
      zIndex: 0,
      xtrans: 0,
      ytrans: 0,
      scale: 1,
      opacity: 1
    };
  },
  computed: {
    style() {
      return {
        transition: "transform 0.5s, opacity 0.5s",
        transform: this.transform,
        "z-index": this.zIndex,
        opacity: this.opacity
      };
    },
    transform() {
      return [
        `translate(${this.xtrans - 50}%, ${this.ytrans - 50}%)`,
        `scale(${this.scale})`
      ].join(" ");
    }
  },
  methods: {
    centerSelf() {
      this.arrange(this.$children.indexOf(this));
    },
    _mod: (n, m) => ((n % m) + m) % m,

    // Distribute elements so that they align with the selected elemenent in the center
    arrange(centerIndex) {
      const center = this.$children[centerIndex];
      const half = (this.$children.length - 1) / 2;

      // Items that will be displayed to the left of the item at centerIndex
      const before = [];
      // Keep adding items before until half the non-centerIndex items have been added
      for (let i = centerIndex - 1; before.length < half; i--) {
        // this._mod is used to emulate a toroidal array by mapping elements below index 0 or beyond
        // the max index to elements in the valid array range
        before.push(this.$children[this._mod(i, this.$children.length)]);
      }

      // Items that will be displayed to the right of the item at centerIndex
      const after = [];
      for (
        let i = centerIndex + 1;
        after.length < this.$children.length - before.length - 1;
        i++
      ) {
        after.push(this.$children[this._mod(i, this.$children.length)]);
      }

      // Position all elements

      // Position center
      center.xtrans = 0;
      center.scale = 1;
      center.opacity = 1;
      center.zIndex = Math.max(before.length, after.length) + 1;

      // Position elements to left and right
      [before, after].forEach((list, listIndex) => {
        console.log(+1);
        // Tracks the amount by which the parent was translated
        let parentTrans = 0;

        // Apply styles for each element in selected list
        list.forEach((item, i) => {
          // Set size
          item.scale = 0.8 ** (i + 1);
          // Set x offset. Negative for before, positive for after
          const absolute = 105 * item.scale * 1.125 + parentTrans;
          parentTrans = absolute; // Update how much parent was translated by
          item.xtrans = (listIndex == 0 ? -1 : 1) * absolute;
          // Set opacity
          item.opacity = Math.max(1 - 0.25 * (i / 2 + 1) ** 2, 0);
          // Set z-index
          item.zIndex = Math.max(before.length, after.length) - i;
        });
      });
    }
  },
  fetch(createElement) {
    return createElement(
      "div",
      {
        class: "cases__content",
        ref: "cases__content"
      },
      this.$slots.default.map(el => createElement("card-carousel__item", [el]))
    );
  },

  // Begin by centering the first element in the carousel
  mounted() {
    this.arrange(0);
  }
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/_variables.scss";
@import "./assets/scss/_flexbox.scss";

.cases {
  position: relative;
  margin: 5%;
  @include flexbox;
  @include align-items(center);
  @include flex-direction(column);
  @media screen and (min-width: $break-md) {
    margin: 10% 13% 10% 10%;
  }
}
.cases__title {
  @include flexbox;
  @include justify-content(center);
  padding-bottom: 30px;
  margin: 0 auto;
  flex: 1;
}

.cases__title--bg {
  position: absolute;
  white-space: nowrap;
  color: $primary;
  opacity: 0.04;
  font-size: 180px;
  font-family: "Montserrat";
  font-weight: 900;
  z-index: -2;
  top: -5%;
}
.cases__content {
  @include flexbox;
  @include justify-content(center);
  padding-bottom: 30px;
  position: relative;
  margin: 0 auto;
}
.card-carousel {
  @include flexbox;
  @include flex-direction(column);
  position: absolute;
  width: 110vw;
  @media screen and (min-width: $break-md) {
    @include flex-direction(row);
  }
}
.card-carousel__item {
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  opacity: 0.3;
  @include flexbox;
  @include align-items(center);
  @include flex-direction(column);
  background: $secondary;
  flex: 1;
  padding: 30px;
  margin: 5%;
  position: relative;
  min-height: 450px;
  height: 100%;
  width: calc(130% - 3rem);
  justify-content: flex-end;
  @media screen and (min-width: $break-md) {
    margin: 0% 5%;
    padding: 30px;
  }
  & h3 {
    color: #2f2f2f;
  }
  &.active {
    filter: inherit;
    opacity: 1;
    &.active h3 {
      color: $white !important;
    }
  }
}
.card-carousel__item--cover {
  position: absolute;
  width: 100%;
  height: 100%;
}
.card-carousel__item--cover img {
  width: 100%;
  width: calc(130% - 3rem);
  margin-left: -10%;
}
.card-carousel__item--title {
  position: absolute;
  left: 70px;
  bottom: 100px;
}
.card-carousel__item--title h3 {
  font-size: 60px;
  font-family: "Montserrat";
  font-weight: 900;
  display: flex;
  padding-bottom: 20px;
  line-height: 1.1;
  text-shadow: 4px 4px 17px rgba(46, 61, 98, 0.23);
}
.card-carousel__item--button {
  position: absolute;
  bottom: 50px;
  transform: scale(0.8);
}
</style>