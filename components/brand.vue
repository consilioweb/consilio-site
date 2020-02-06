<template>
  <div class="perspective">
    <span class="render">i</span>
    <span class="render shadow">-</span>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.perspective {
  opacity: 1;
  align-self: center;
  width: 100px;
  -moz-perspective: 900px;
  -webkit-perspective: 900px;
  perspective: 900px;
  position: absolute;
  top: 30%;
  right: 30px;
  z-index: 11;
  transition: all 0.5s ease-in-out;
  -webkit-transition: all 0.5s ease-in-out;
  transform: scale(1);
}
.render {
  display: inline-block;
  z-index: 0;
  left: 40px;
  position: relative;
  line-height: 0.55em;
  height: 0.5em;
  transition: all 1s ease-in-out;
  -webkit-transition: all 1s ease-in-out;
  font-family: "GothamPro", sans-serif;
  font-size: 22em;
  font-style: italic;
  font-weight: 700;
  transform: rotate(-180deg) rotateY(30deg);
  color: #f5f5f5;
  animation: reflect 2s infinite alternate ease-in-out;
  text-shadow: white 0.006em 0.006em 1px, rgba(0, 0, 0, 0.15) -3px 7px 10px,
    #d0d0d0 -1px 1px 1px, #d0d0d0 -2px 1px 1px, #d0d0d0 -3px 1px 1px,
    #d0d0d0 -4px 1px 1px, #d0d0d0 -5px 1px 1px, #d0d0d0 -6px 1px 1px,
    #d0d0d0 -7px 1px 1px, #d0d0d0 -8px 1px 1px, #d0d0d0 -9px 1px 1px,
    #d0d0d0 -10px 1px 1px, #d0d0d0 -11px 1px 1px, #d0d0d0 -12px 1px 1px,
    rgba(255, 255, 255, 0.6) -5px 2px 100px;
}
@keyframes reflect {
  0% {
    transform: rotate(-180deg) rotateY(30deg);
  }
  100% {
    transform: rotate(-180deg) rotateY(0deg);
  }
}
.render.reflect {
  z-index: 0;
  opacity: 0.4;
  -moz-transform: rotateX(180deg) rotateY(-30deg);
  -webkit-transform: rotateX(180deg) rotateY(-30deg);
  transform: rotateX(180deg) rotateY(-30deg);
}
.render.shadow {
  opacity: 0.3;
  z-index: -1;
  color: transparent;
  letter-spacing: -0.02em;
  position: absolute;
  top: 0.46em;
  left: 0em;
  -moz-transform-origin: 0 0 50%;
  -ms-transform-origin: 0 0 50%;
  -webkit-transform-origin: 0 0 50%;
  transform-origin: 0 0 50%;
  -moz-transform: rotateX(-100deg) rotateY(-5deg) rotateZ(30deg);
  -webkit-transform: rotateX(-100deg) rotateY(-5deg) rotateZ(30deg);
  transform: rotateX(-100deg) rotateY(-5deg) rotateZ(30deg);
  text-shadow: rgba(0, 0, 0, 0.8) 0 0 30px, rgba(0, 0, 0, 0.8) 0 0 80px,
    black 0 0 150px, black 0 0 150px, black 0 0 250px, black 0 0 250px,
    white -0.15em 0.4em 250px;
}
</style>