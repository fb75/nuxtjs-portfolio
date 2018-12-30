<template>
	<div class="container">
		<div class="points">
			<transition name="slideleft" mode="out-in" appear>
				<Points @showCard="$emit('cardActive')" v-if="pointsAreVisible" />
			</transition>
		</div>
		<div class="navigation">
			<Navbar />
			<Hamburger @navActive="toggleSidebar" />
		</div>
	</div>
</template>

<script>
import Navbar from "./Navbar";
import Hamburger from "./Hamburger";
import Points from "./Points";

export default {
  components: {
    Navbar,
    Hamburger,
    Points
  },
  data() {
    return {
      active: true
    };
  },
  computed: {
    faEllipsisV() {
      return faEllipsisV;
    },
    faEllipsisH() {
      return faEllipsisH;
    },
    presentationShown() {
      return this.$store.getters.presentationIsShown;
    },
    pointsAreVisible() {
      return this.$store.getters.pointsAreShown;
    }
  },
  methods: {
    toggleSidebar() {
      this.$store.dispatch("navToggle");
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  flex-wrap: nowrap;
  background: #00171f;
  color: #00a8e8;
}

.contents {
  text-align: center;
}

.navigation {
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
}

@media only screen and (min-width: 768px) {
  .container {
    display: grid;
    grid-template-columns: 5% 95%;
    grid-template-rows: 50px;
    align-items: center;
    justify-content: space-around;
    background: none;
    border-radius: 2px;
  }
  
  .points {
    margin-left: 1em;
  }

  .navigation {
    font-size: 0.9em;
    align-self: center;
  }
  .showcont {
    display: block;
    border-radius: 999px;
    cursor: pointer;
    /*padding: 0.4em;*/
    text-align: center;
    font-family: "Mono Space";
    font-size: 0.83em;
    font-weight: bold;
    border: 1px solid red;
    color: blue;
    width: 30px;
    height: 30px;
  }
  span {
    display: block;
    width: 10px;
    background: black;
    height: 1px;
  }
}
</style>