<template>
  <div :class="['container', { 'noclass': pointsShown }]">
    <div class="message">
      <transition-group 
        tag="figure"
        name="slideup"
        mode="out-in"
        appear>
        <figure 
          v-if="completed"
          :key="completed">      
          <div class="avatar"></div>
        </figure>
      </transition-group>
      <transition name="slideup" mode="out-in" appear>
        <h2 :key="activeText">{{ activeText }}</h2>
      </transition>
      <transition-group name="fade" mode="out-in" appear>
        <p v-for="words in othertext" 
          :key="words.length"
          v-if="completed">{{ words }}
        </p>
      </transition-group>
    </div>    
  </div>
</template>

<script>
export default {
  data() {
    return {
      completed: false,
      name: "Francesco Brachini",
      text: [
        "Welcome to my Page!",
        "I am Francesco Brachini",
        "I'm a Web Developer",
        "and also a Web Designer!",
        "Feel free to leave an email!"
      ],
      othertext: ["Frontend Developer ", "\u00A0", "Web Designer"],
      activeText: ""
    };
  },
  computed: {
    presentationShown() {
      return this.$store.getters.presentationIsShown;
    },
    pointsShown() {
      return this.$store.getters.pointsAreShown;
    }
  },
  methods: {
    welcome() {
      // this.activeText = this.text[0];
      let n = 0;
      setInterval(() => {
        n++;
        let vm = this;
        vm.activeText = vm.text[n - 1];
        if ((n - 1) > vm.text.length) {
          vm.activeText = vm.name;
          setTimeout(() => {
            this.completed = true;
          }, 1500);
        }
      }, 2500);
      this.stopwelcome();
    },
    stopwelcome() {
      clearInterval(this.welcome);
      setTimeout(() => {
        this.change();
      }, 10000);
    },
    change() {
      setTimeout(() => {
        this.$store.dispatch("textdone");
        this.$store.dispatch("pointsdone");
      }, 14000);
    }
  },
  created() {
    if (this.presentationShown === false) {
      this.welcome();
    } else {
      this.activeText = this.name;
    }
  }
};
</script>

<style scoped>
.noclass {
  transform: translateY(100%);
  opacity: 0;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  margin: 15em auto;
  filter: drop-shadow(5px 5px 10px rgba(0, 52, 89, 1));
}

.message {
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

p {
  display: inline-block;
  font-size: 13px;
}

h1 {
  font-family: "Roboto";
  align-self: center;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 auto;
  background: url('~static/images/web-developer-photo.jpg') no-repeat center;
  background-size: cover;
}



@media only screen and (min-width: 768px) {
  .noclass {
    transform: translateY(100%);
    opacity: 0;
  }

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    margin: 1em auto;
    transition: all 0.5s ease-in-out;
  }

  .message {
    display: flex;
    flex-flow: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  p {
    display: inline-block;
    font-size: 13px;
  }

  h1 {
    font-family: "Roboto";
    align-self: center;
  }

  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 0 auto;
    background: url('~static/images/web-developer-photo.jpg') no-repeat center;
    background-size: cover;
  }
}


.slide-enter {
  opacity: 0;
  transform: scaleX(50%);
}

.slide-enter-active {
  transition: all 0.5s ease-in-out;
}

.slide-leave-active {
  /*animation: mov 0.5s ease-in-out;*/
  transition: transform 0.5s ease-in-out;
}

.slide-leave-to {
  transform: scaleX(50%);
  opacity: 0;
}

.slide-move {
  transition: transform 0.3s ease-in-out;
}

.fade-enter {
  opacity: 0;
  /*transform: scaleX(0);*/
}

.fade-enter-active {
  transition: all 0.5s ease-in-out;
}

.fade-leave-active {
  animation: mov 0.5s ease-in-out;
  transition: transform 0.5s ease-in-out;
}

.fade-leave-to {
  transform: translateX(-50px);
  opacity: 0;
}

.fade-move {
  transition: transform 0.5s ease-in-out;
}

@keyframes mov {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(30px);
    opacity: 0;
  }
}
</style>