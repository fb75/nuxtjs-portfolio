<template>
  <div 
    :class="{'hamburger': !navActive, 'hamburger close': navActive}" 
    @click.prevent="$emit('navActive')">
    <span></span>
    <span></span>
    <span></span>
	</div>
</template>

<script>
export default {
  computed: {
    navActive() {
      return this.$store.getters.navToggleState;
    }
  }
};
</script>

<style scoped>
.hamburger {
  cursor: pointer;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 25px;
  background: transparent;
  transition: all 0.4s ease;
  margin: 0 1em;
}

.close span:nth-of-type(1) {
  transform: rotateZ(45deg) translateY(0);
}

.close span:nth-of-type(2) {
  transform: translateX(-100%) scaleY(0);
  opacity: 0;
}

.close span:nth-of-type(3) {
  transform: translateY(-15px) rotateZ(-45deg);
}

span {
  cursor: pointer;
  display: block;
  margin: 2px 0;
  width: 100%;
  height: 0.2em;
  background: #00a8e8;
  transition: all 0.4s ease;
}

@media only screen and (min-width: 768px) {
  .hamburger {
    display: none;
  }
}
</style>