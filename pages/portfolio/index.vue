<template>
	<div class="container">
		<h3>Web Development projects</h3>
		<div class="cont">
			<div class="works" v-for="project in projects">
				<img :src="project.img" v-if="project.img">
		  	<div class="image" v-else></div>
		  	<small>{{ project.year }}</small>
		  	<p>{{ project.description }}</p>
		  	<h4>{{ project.title }}</h4>
		  	<a :href="project.link">{{ project.link }}</a>
	 	 	</div>
		</div>
	</div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("aboutStyle", this.$route.name);
  },
  data() {
  	return {
  		projects: [
  		{
  			title: 'Photography Wordpress Website',
  			year: 2016,
  			description: 'My first (payed) work in Web Development, using Wordpress custom child theme and Jquery',
  			img: './images/mv.png',
  			link: 'http://matteovalentini.com'
  		},
  		{
  			title: 'Vue.js Portfolio',
  			year: 2017,
  			description: 'A Simple portfolio made in Vue.js using Bootstrap and Vuetify.js running on Heroku platform',
  			link: 'https://vuejs-portfolio.herokuapp.com/'
  		},
  		{
  			title: 'Vue-Wordpress-Blog',
  			year: 2018,
  			description: 'Headless CMS using Bootstrap - WP API - JWT for authentication - Vue.js',
  			link: 'https://github.com/fb75'
  		},
  		{
  			title: 'Node.js learning apps on Github',
  			year: 2017,
  			description: 'Some projects made for educational use with Node.js / Express using various technologies (WebSocktes, MongoDb as backend and more)',
  			link: 'https://github.com/fb75'

  		}
  	]
  	}
  }
};
</script>

<style scoped>
.cont {
	
}

.works {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 80px auto;
	grid-row-gap: 1em;
	grid-column-gap: 0.2em;
	font-family: 'Roboto';
	border: 1px solid #00a8e8;
	border-radius: 4px;
	padding: 1em;
	background: #003459;
	color: #fff;
	margin: 1em 1em;
	filter: drop-shadow(5px 5px 10px rgba(0, 168, 232, 1));
	z-index: 100;
}

img {
	height: 90px;
	justify-self: center;
	margin: 0 auto;
}

.image {
	width: 90px;
	height: 80px;
	justify-self: center;
	background: gray;
}

p {
	text-align: left;
	font-family: 'Mono Space';
	font-size: 0.9em;
}

h4 {
	justify-self: center;
	align-self: center;
	text-align: center;	
}

small {
	justify-self: center;
	align-self: end;
}

a {
	grid-column-start: 1;
	grid-column-end: 3;
	justify-self: center;
	color: #00a8e8;
}

@media only screen and (min-width: 768px) {
	
	.container {
		font-size: .8em;
		width: 100%;
		height: 100%;
	}	

	.cont {
		display: flex;
		flex-flow: row;
		flex-wrap: wrap;
		align-items: end;
		justify-content: center;
		align-content: center;
		margin-top:0;
	}

	.works {
		width: 280px;
		padding: 2em;
		/*height: 110px;*/
		grid-template-columns: 42% 10% 41%;
		grid-template-rows: auto;
		justify-self: start;
		justify-content: center;
		grid-column-gap: 2em;	
		grid-row-gap: 1em;	
		font-size: .8em!important;
		background: #003459;
		color: #fff;
	}
	.image {
		width: 70px;
		height: 70px;
		/*background: black;
		width: 110px;
		height: 70px;
		margin-top: 1em;
		justify-self: center;*/
		
	}

	h4 {
		justify-self: center;
		/*font-size: 13px;*/
	}

	a {
		grid-column-start: 2;
		grid-column-end: 3;
		justify-self: start;
		align-self: center;
		color: #00a8e8;
	}
	
	p {
		align-self: end;
		justify-self: start;	 
	}

	small {
		color: #003459;
		justify-self: center;
		align-self: center;
		font-size: 1em;
	}
}
</style>
