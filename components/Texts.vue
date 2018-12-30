<template>
  <div>
    <div :class="activeClass">
        <div class="text1" v-if="activeClass === 'antext'">
          <transition-group 
            name="slideup"
            mode="out-in"
            tag="div"
            appear>
            <div class="description1" :key="activeClass">
              <p>SPA</p>
              <p>PWA</p>
              <p>Universal SSR Web Apps</p>
            </div>
          </transition-group>  
        </div>

        <div class="text3" v-if="activeClass === 'portfolio'">
          <transition-group 
            name="slideleft"
            mode="out-in"
            tag="div"
            appear>
            <div class="description3" :key="activeClass">
              <p>Projects</p>
            </div>
          </transition-group>  
        </div>

        <div class="text2" v-if="activeClass === 'about'">
          <transition-group 
            name="slideleft"
            mode="out-in"
            tag="div"
            appear>
            <div class="description2" :key="activeClass">
              <p>Getting inside IT</p>  
            </div>
          </transition-group>
        </div>
        
        <div class="text3" v-if="activeClass === 'contact'">
          <transition-group 
            name="slideleft"
            mode="out-in"
            tag="div"
            appear>
            <div class="description4" :key="activeClass">
              <p>Contact me for more!</p>  
            </div>
          </transition-group>  
        </div>
    </div>
  </div>
</template>

<script>
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { faWindowMinimize } from '@fortawesome/free-solid-svg-icons'
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons'
export default {
  data() {
    return {
      selectedClass: this.activeClass,
      show: true
    };
  },
  computed: {
    defaultClass() {
      return this.$store.getters.sideDefaultClass;
    },
    activeClass() {
      return this.$store.getters.sideClass;
    },
    backgroundState() {
      return this.$store.getters.backgroundState;
    },
    faMapMarker() {
      return faMapMarker;
    },
    faWindowMinimize() {
      return faWindowMinimize;
    },
    faWindowMaximize() {
      return faWindowMaximize;
    },
    getRouteName() {
      return this.$route.name
    }
  }
};
</script>

<style scoped>
p {
  font-family: 'Roboto';
  font-weight: bold;
  text-transform: uppercase;
  color: #003459;
  margin: auto;  
}

.description1 {
  -webkit-clip-path: circle(50% at 50% 50%);
  clip-path: circle(50% at 50% 50%);
  display: flex;
  flex-flow: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 120px;
  height: 120px;
  margin: 12em auto;
  padding: 1em;
  background: #003459;
}


.description2 {
  -webkit-clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  display: flex;
  flex-flow: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 120px;
  height: 120px;
  margin: 1em auto;
  padding: 2em;
  font-size: .9em;
  background: #003459;
}

.description2 p {
  transform: translate(15px, 15px) rotateZ(-36deg);
}

.description3 {
  -webkit-clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  display: flex;
  flex-flow: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 120px;
  height: 120px;
  margin: auto;
  padding: 2em;
  background: #003459;
}

.description4 {
  -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
  clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);  
  display: flex;
  flex-flow: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 120px;
  height: 120px;
  margin: 1em auto;
  padding: 2em;
  background: #003459;
  border-radius: 0;
} 

.description1 p, 
.description2 p, 
.description3 p, 
.description4 p {
  text-align: center;
  color: #00A8E8;
  text-transform: none;
  font-weight: normal;
  font-family: 'Mono Space';
  font-size: 10px;
}

.description4 p {
  position: absolute;
  top: 20%;
}

.description1:hover p,
.description2:hover p, 
.description3:hover p, 
.description4:hover p {
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff0080, 0 0 30px #ff0080, 0 0 40px #ff0080, 0 0 55px #ff0080, 0 0 75px #ff0080;
}
  
@media only screen and (min-width: 768px) {
  
  .description1 {
    -webkit-clip-path: circle(50% at 50% 50%);
    clip-path: circle(50% at 50% 50%);
    position: absolute;
    display: flex;
    flex-flow: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 120px;
    height: 120px;
    margin: 1em 1.5em;
    padding: 1em;
  }
  
  .description2 {
    -webkit-clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    position: absolute;
    top: 33%;
    display: flex;
    flex-flow: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 120px;
    height: 120px;
    margin: 1em 1.5em;
    padding: 3em;
    font-size: .9em;
    transition: all .5s ease-in-out; 
  }

  .description3 {
    -webkit-clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    position: absolute;
    top: 40%;
    display: flex;
    flex-flow: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 100px;
    height: 100px;
    margin: 1em 1.5em;
    padding: 2em;
    background: #003459;
  }

  .description4 {
    -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
    clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);  
    position: absolute;
    top: 40%;
    display: flex;
    flex-flow: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 120px;
    height: 120px;
    margin: 1em 1.5em;
    padding: 2em;
    background: #003459;
    border-radius: 0;
  }  

  .description1 p, 
  .description2 p, 
  .description3 p, 
  .description4 p {
    text-align: center;
    color: #fff;
    text-transform: none;
    font-weight: normal;
    font-family: 'Mono Space';
    font-size: 14px;
    transition: all .5s ease-in-out;
  }
  
  .description2 p {
    position: absolute;
    top: 60%;
    right: 20%;
    font-size: 10px;
    transform: rotate(-36deg);
  }
  
  .description4 p {
    position: absolute;
    top: 33%;
  }
  
  .description1:hover p,
  .description2:hover p, 
  .description3:hover p, 
  .description4:hover p {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff0080, 0 0 30px #ff0080, 0 0 40px #ff0080, 0 0 55px #ff0080, 0 0 75px #ff0080;
  }

  .minimize {
    align-self: flex-start;
    cursor: pointer;
    padding: .5em;
    color: #003459;
  }

  .maximize {
    position:absolute;
    cursor: pointer;
    left: 20%;
    top:50%;
    color: #003459;
  }

  .reduced { 
    cursor: pointer;
    width: 0;  
    z-index:100;  
  }
}
</style>