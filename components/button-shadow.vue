<template>
  <a :href="slugToUrl(url)" class="btn -white">
    {{text}}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="8px"
      height="9px"
    >
      <path
        fill-rule="evenodd"
        fill="rgb(46, 61, 98)"
        d="M7.252,5.407 L2.147,8.541 C1.988,8.639 1.804,8.688 1.619,8.688 C1.466,8.688 1.313,8.655 1.173,8.587 C0.864,8.437 0.671,8.144 0.671,7.824 L0.671,1.553 C0.671,1.235 0.864,0.940 1.173,0.791 C1.482,0.640 1.857,0.658 2.147,0.836 L7.252,3.971 C7.514,4.132 7.671,4.401 7.671,4.688 C7.671,4.976 7.514,5.246 7.252,5.407 Z"
      />
    </svg>
  </a>
</template>

<script>
export default {
  props: ["text", "url"],
  methods: {
    slugToUrl(slug) {
      return `/${slug}`
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/_variables.scss";
@import "./assets/scss/_flexbox.scss";

@mixin btn($background, $color) {
  font-family: Poppins, sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 30px;
  padding: 15px 25px;
  line-height: 1em;
  display: inline-block;
  letter-spacing: 0.1em;
  transition: border-color 0.2s ease-in-out, background 0.2s ease-in-out,
    color 0.2s ease-in-out;
  -webkit-box-shadow: 1px 13px 41px -4px rgba(46, 61, 98, 0.15);
  -moz-box-shadow: 1px 13px 41px -4px rgba(46, 61, 98, 0.15);
  box-shadow: 1px 13px 41px -4px rgba(46, 61, 98, 0.15);
  border: 3px solid rgba(255, 255, 255, 0); // You'll want to customize this
  color: $color;
  background: $background;
  transition-timing-function: linear;
  transition: all 1s;
  &:active {
    &::before,
    &::after {
      transform: scale(0.95);
      opacity: 0.85;
    }
  }
  &:hover,
  &:focus {
    transform: scale(1.05);
    -webkit-transform: translateY(-5px);
    -moz-transform: translateY(-5px);
    -ms-transform: translateY(-5px);
    -o-transform: translateY(-5px);
    transform: translateY(-5px);
    -webkit-box-shadow: 1px 13px 41px 5px rgba(46, 61, 98, 0.19);
    -moz-box-shadow: 1px 13px 41px 5px rgba(46, 61, 98, 0.19);
    box-shadow: 1px 13px 41px 5px rgba(46, 61, 98, 0.19);
  }
  &.-hollow {
    background: none;
    color: $background;
    border: 3px solid $background; // The thickness should correspond with the thickness set above
    &:hover,
    &:focus,
    &:active {
      color: $color;
      background: $background;
    }
  }
}
// End Mixin

// Using the mixin
.btn {
  &.-white {
    @include btn($white, #2e3d62);
  }
}
svg {
  padding-left: 35px;
}
</style>