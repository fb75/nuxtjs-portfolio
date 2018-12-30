<template>
  <nav>
    <transition-group name="slideleft" mode="out-in" tag="ul">
    <ul :key="toggled" :class="{'active': toggled, 'inactive': !toggled}">
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/about">About me</nuxt-link></li>
      <li><nuxt-link to="/portfolio">Portfolio</nuxt-link></li>
      <li><nuxt-link to="/contact">Contact</nuxt-link></li>
    </ul>
    </transition-group>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      act: false
    };
  },
  computed: {
    notact() {
      return this.act;
    },
    toggled() {
      return this.$store.getters.navToggleState;
    }
  }
};
</script>

<style scoped>
nav {
  height: 50px;
  margin: auto;
}

.inactive {
  visibility: hidden;
}

li {
  position: relative;
  top: 30%;
  left: 0;
  margin: 0.3em 0;
  padding: 0.2em 0;
  color: #003459;
}

li a {
  display: block;
  text-decoration: none;
  width: auto;
  color: #00a8e8;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
}

.active {
  z-index: 150;
  list-style: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  margin: auto;
  background: black;
  font-size: 1.1em;

}
@media only screen and (min-width: 768px) {
  nav {
    padding: 0;
    width: 100%;
    height: 30px;
    text-align: center;
    background: inherit;
  }

  .inactive {
    visibility: visible;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-column-gap: 1em;
    grid-template-rows: 100%;
    justify-content: end;
    padding: 0;
    margin: 0 1em;
    text-decoration: none;
    list-style: none;
  }

  .nuxt-link-exact-active {
    color: #003459;
    filter: drop-shadow(5px 5px 4px rgba(0, 168, 232, 1));
  }

  .nuxt-link-exact-active:before {
    content: '';
    position: absolute;
    animation: fade 1s ease;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background: #003459;
    transition: all 0.4s;
  }

  a {
    transition: all 0.3s ease;
  }

  a:hover {
    color: #003459;
  }
}
</style>