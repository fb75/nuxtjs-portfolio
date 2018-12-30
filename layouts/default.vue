<template>
  <div class="b" :class="['b', { 'b ab': activeClass === 'about',
  'b co': activeClass === 'contact', 'b po': activeClass === 'portfolio'}]">
    <div class="he">      
      <TheHeader @cardActive="toggle" />
    </div>
    <div class="as">
    <Texts />      
    </div>     
    <div class="main">
      <transition-group name="main" mode="out-in" appear>
        <Card @closeCard="toggle" :key="active" v-if="active" />
      </transition-group>
      <nuxt/>
    </div>
    <div class="footer">
      <ul>
        <li><small>2018 Francesco Brachini</small></li>
      </ul>
    </div>
  </div>  
</template>

<script>
import TheHeader from "@/components/TheHeader";
import Form from "@/components/Form";
import Card from "@/components/Card";
import Contents from "@/components/Contents";
import Navbar from "@/components/Navbar";
import Texts from "@/components/Texts";
import Hamburger from "@/components/Hamburger";

export default {
  components: {
    TheHeader,
    Form,
    Card,
    Contents,
    Navbar,
    Hamburger,
    Texts
  },
  data() {
    return {
      active: false
    };
  },
  computed: {
    navIsToggled() {
      return this.$store.getters.navToggleState
    },
    activeClass() {
      return this.$store.getters.sideClass;
    }
  },
  methods: {
    toggle() {
      this.active = !this.active;
      this.$store.dispatch("changeBackground");
    },
    closeSidebar() {
      this.$store.dispatch('navToggle');
    }
  }
};
</script>

<style>
</style>
