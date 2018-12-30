<template>
  <div class="main-container">
    <div class="principal">
      <transition name="slideup" mode="out-in" appear>
        <Contents v-if="!presentationShown" />
      </transition>      
      <div class="description" v-if="presentationShown">
        <transition-group name="fade" mode="out-in" tag="div" appear>
          <div class="whatido" v-if="show" :key="!show">
            <h4>Frontend web and mobile development and design</h4>
            <h4>Web applcations using Vue.js / Nuxt.js</h4>
            <h4>Responsive and mobile design first!</h4>  
            <p>This is my mission!</p> 
          </div>
        </transition-group>
          <div class="upper"
            v-if="!show"
            :key="!show">
            <transition
              mode="out-in"
              name="fade"
              appear>
              <div class="icons">
                <img v-for="icon in icons" :src="icon.image" />
              </div>
            </transition>
          </div>
        <transition 
        name="fade" 
        mode="out-in"
        appear>
          <div 
          :class="{'cta': !show, 'cta inverted': show}"
          :key="show"
          @click.prevent="showinfo"
          >{{ ctaChange }}
          </div>
        </transition>
      </div><!-- end description -->
    </div><!-- end principal -->
  <div class="verticalized">
    <span @click.prevent="$router.push('/examples')">Examples</span>
  </div>
</div>
</template>

<script>
import Form from "@/components/Form";
import Navbar from "@/components/Navbar";
import Texts from "@/components/Texts";
import Contents from "@/components/Contents";

export default {
  template: "default",
  mounted() {
    const defaultClass = "antext";
    this.$store.dispatch("aboutStyle", defaultClass);
  },
  components: {
    Form,
    Navbar,
    Texts,
    Contents
  },
  data() {
    return {
      formInactive: true,
      show: false,
      infobutton: 'Check my skills',
      someinfo: 'back',
      icons: [
        {
          image: './images/html.png'
        },
        {
          image: './images/css.png'
        },
        {
          image: './images/javascript.svg'
        },
        {
          image: './images/sass.png'
        },
        {
          image: './images/webpack.png'
        },
        {
          image: './images/vuejs.png'
        },
        {
          image: './images/nuxt.png'
        },
        {
          image: './images/nodejs.png'
        }
      ]
    };
  },
  computed: {
    presentationShown() {
      return this.$store.getters.presentationIsShown;
    },
    ctaChange() {
      return !this.show ? this.infobutton : this.someinfo;
    }
  },
  methods: {
    toggleButton() {
      this.clicked = !this.clicked;
    },
    showForm() {
      this.formInactive = !this.formInactive;
      this.clicked = !this.clicked;
    },
    showinfo() {
      this.show = !this.show;
    }
  }
};
</script>

<style scoped>
.main-container {
  width: 100%;
  margin: 0;
  font-family: "Roboto";
  font-size: 1em;
  color: #003459;
  text-transform: uppercase;
}

.principal {
  width: 100vw;
  margin: auto;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  align-content: center;
}

.inverted {
  color: #003459;
  border: 1px solid #003459;
  background: transparent;
  filter: drop-shadow(5px 5px 10px rgba(0, 52, 89, 1));
}

.upper {
  width: 100%;
  text-transform: none;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.icons {
  display: flex;
  flex-flow: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid #ccc;    
  padding: 0.5em;
  margin: 12em auto 2em;
  border-radius: 50px;
  box-shadow: 1px 2px 2px #ccc;
}

.icons img {
  max-width: 40px;
  margin-left: 3px;
  transition: all .3s ease-in-out;
}

.lang {
  list-style-type: none;
}

li {
  /*font-size: 12px;
  text-align: end;*/
}

.verticalized {
  height: auto;
  text-align: center;
 
}

.verticalized span {
  color: #00a8e8;
}

.cta {
  width: 120px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  color: #fff;
  background: #003459;
  text-decoration: none;
  font-size: 1em;
  text-align: center;
  border-radius: 50px;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: "Mono Space";
  font-weight: bold;
  margin: auto;
  transition: all 0.5s ease-in-out;
  filter: drop-shadow(5px 5px 10px rgba(0, 52, 89, 1));
}

.cta:hover {
}

.whatido {
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin: 12em 1em 2em;
  padding: 2em;
  text-transform: none;
  background: #003459;
  color: #fff;
  border-radius: 4px;
  line-height: 1.4em;
  font-family: 'Space Mono';
  filter: drop-shadow(5px 5px 10px rgba(0, 52, 89, 1));
}

.whatido h4 {
  margin: 0 1em 1em 1em;
}

span {
  display: block;
  padding: 0.5em;
  margin-top: 1em;
  font-family: "Roboto";
  color: #003459;
}

@media only screen and (min-width: 768px) {
  .principal {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }

  .upper {
    margin: 4em auto;
    width: 100%;
    flex-flow: column;
    align-items: center;
    align-content: center;
    justify-content: center;
  }
  
  .icons {
    position: absolute;
    top: 35%;
    margin: 0 auto;
    display: flex;
    flex-flow: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid #ccc;    
    padding: 0.5em;
    border-radius: 50px;
    box-shadow: 1px 2px 2px #ccc;
  }
  
  .icons img {
    margin: .5em;
    max-width: 2.5em;
    max-height: 2.5em;
    transition: all .3s ease-in-out;
  }
  
  .icons img:hover {
    
  }

  .description {
    /*width: 60%;
    height: 60%;*/
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    text-transform: none;
  }
  
  .description p {
    align-self: center;
  }
  
  .whatido {
    margin: 1em auto;  
  }

  .cta {
    position: absolute;
    top: 55%;
    right: 35%;
  }
  
  .inverted {
    top: 75%;
    right: 10%;
    color: #003459;
    border: 1px solid #003459;
    background: transparent;
    align-self: flex-end;
  }

  .infoleft {
    display: flex;
    flex-flow: column;
    align-content: center;
    justify-content: center;
    align-items: center;
  }

  h2,
  h3 {
    margin: 0;
  }

  /*  .inforight {
    width: 50%;
    display: flex;
    flex-flow: column;
    flex-wrap: nowrap;
    align-items: flex-end;
    padding: 2em 0;
    margin: 0;
  }
*/
  .verticalized {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: flex-end;
    top: 10%;
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    font-size: 0.9em;
    transition: all .5s;
  }
  .verticalized span {
    position: absolute;
    top: 11%;
    right: -2%;
    transform: rotateZ(-270deg);
    height: auto;
    padding: 0;
    margin: 0;
  }

  .verticalized span:hover {
    color: #003459;
  }
}
</style>
