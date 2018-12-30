<template>
  <div class="container">
    <h3>Education in Computer Science</h3>
    <timeline id="time">
      <timeline-item         
        line-color="#00171F"
        bg-color="#003459">
          <p><strong>1985</strong> - My first program in Basic V2 on Commodore 64</p>
      </timeline-item>
      <timeline-item 
        line-color="#00171F"  
        bg-color="#003459">
        <p><strong>1989 - 1994</strong> Scientific High School "G.Alessi" - Perugia</p>
        <p>Semi-sperimental address including two years of Computer Science (Turbo Pascal 5.0)</p>
      </timeline-item>
    <timeline-item 
      line-color="#00171F"  
      bg-color="#003459">
        <h5><strong>2015</strong></h5>
        <h5>Professional Technical Qualification: </h5>
        <h4><strong>Specialist in Computer Applications</strong></h4>
        <p>Web Development Professional Course (3 months in classroom - 3 months inside Company) including: </p>
        <ul class="languages">
          <li><p><strong>Linux System Administration</strong></p></li>
          <li><p><strong>Webserver Apache</strong></p></li>
          <li><p><strong>Python</strong></p></li>
          <li><p><strong>Java</strong></p></li>
          <li><p><strong>HTML5</strong></p></li>
          <li><p><strong>CSS3</strong></p></li>
          <li><p><strong>JavaScript (ES5) / JQuery</strong></p></li>
          <li><p><strong>Php</strong></p></li>
        </ul>
        <!-- <hr> -->
        <h5>Studying and practising web development</h5>
        <h4><strong>CMS Wordpress Development</strong></h4>
        <p><strong>Collaboration for 3 months with local Company</strong> for website development using Wordress, Jquery and custom child theme support</p>
        <p><strong>Basic custom themes and plugins development.</strong></p>
    </timeline-item>
      <timeline-item line-color="#00171F" bg-color="#003459">
        <h5><strong>2016</strong></h5>
        <h5>Starting career as Web Developer</h5>
        <p>Wordpress websites development</p>
      </timeline-item>
      <timeline-item>
        <h5><strong>2017</strong></h5>
        <h5>Getting deeper into in JavaScript</h5>
        <h5>Studying and practicing ES5 / ES6 / Node.js / Vue.js2</h5>
        <p>Online Learning in Udemy and practising on my own.</p>
        <p>I created in this year some web applications both with Node.js and Vue.js;</p>
        <p>Using REST API for backend auth with JWT (Json Web Token) and frontend development (WP API for headless CMS)</p>
      </timeline-item>
    </timeline>  
  </div>
</template>

<script>
import { Timeline, TimelineItem, TimelineTitle } from "vue-cute-timeline";
export default {
  mounted() {
    this.$store.dispatch("aboutStyle", this.$route.name);
  },
  data() {
    return {
      a: '../images/mouse.svg'
    }
  },
  components: {
    Timeline,
    TimelineItem,
    TimelineTitle
  }
};
</script>
<style scoped>
.cont {

}

.languages {
  list-style: none;
  margin: 1em auto;
}

p {
  font-family: 'Mono Space';
  font-size: 12px;
}

.mouse {
  width: 20px;
}

@media only screen and (min-width: 768px) {
  .container {
    overflow: auto;
    display:flex;
    flex-flow: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }

  .container::-webkit-scrollbar {
    display: none;
  }

  h3 {
    align-self: flex-start;
  }
  #time {
    width: 90%;
        
  }
}
</style>

