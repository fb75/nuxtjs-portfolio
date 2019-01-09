<template>
	<div :class="{'contcard': sidebarClass === 'antext', 'contcard contcard-up': sidebarClass !== 'antext'}">		
		<div class="back">
			<fa :icon="faArrowLeft" @click.prevent="$emit('closeCard')" 
				style="cursor: pointer;	transform: scale(1.2);
				position: absolute; top: 5%; left: 5%;"
			/>	
		</div>
		<figure>			
	  	<div class="avatar"></div>
		</figure>
		<figcaption>
			<h1> Francesco <strong>Brachini</strong></h1>
		  <p>Frontend Developer</p>
  		<div class="social">
				<a href="https://www.linkedin.com/in/francesco-brachini-98482a145/"><fa :icon="faLinkedin" style="padding: 1em" /></a>
				<a href="https://github.com/fb75"><fa id="github" :icon="faGithub" style="padding: 1em" /></a>
				<a href="https://www.instagram.com/francbrk/"><fa id="instagram" :icon="faInstagram" style="padding: 1em" /></a>
				<a href="https://www.facebook.com/francesco.brachini1"><fa id="facebook" :icon="faFacebookF" style="padding: 1em" /></a>
			</div>
		</figcaption>
	</div>
	
</template>

<script>
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default {
	computed: {
		sidebarClass() {
			return this.$store.getters.sideClass;
		},
		faArrowLeft() {
			return faArrowLeft
		},
		faInstagram() {
			return faInstagram
		},
		faLinkedin() {
			return faLinkedin
		},
		faGithub() {
			return faGithub
		},
		faFacebookF() {
			return faFacebookF
		}
	}
};
</script>

<style scoped>
.contcard {	
	position: relative;
	top: 11em;
	left: 0;
	display: grid;
	width: 80%;
	border-radius: 2px;
	box-shadow: 1px 10px 37px -15px rgba(0,0,0,1);
	margin: 1em auto;
  padding: 1em;
  color: white;
  background: #003459;
	grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  justify-content: center;
  align-items: center; 
  grid-template-areas: 
  	"photo social";
  z-index: 300;
}

.contcard-up {
	top: 0;
}

.avatar {
	width: 50px;
	height: 50px;
	border-radius: 50%;
	margin: 0 auto;
	background: url('~static/images/web-developer-photo.jpg') no-repeat center;
	background-size: cover;
}

h1 {
	text-align: center;
	color: #fff;
	margin: .5em 0;
}
p {
  font-family: "Roboto";
  text-align: center;
}

a {
	color: #00a8e8;
	transition: all .5s ease-in-out;
}

figure {
	grid-area: photo;	
  /*background-color: yellow;  */
}
figcaption {
	grid-area: social;	
}
.social {
	display: flex;
	flex-flow: row;
	align-content: center;
	justify-content: center;
}


@media only screen and (min-width: 768px) {

	.contcard {
		position: absolute;
		top: 0;
		left: 0;
		margin: auto;
		padding: 0;
		width: 100%;
		height: 100%;
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: space-around;
		border-radius: 0;
		background: #003459;
	}

	.avatar {
		width: 130px;
		height: 130px;
		/*margin: -1em auto;		*/
	}

	figcaption {
		width: 100%;
		margin-top: -6em;		
	}

	h1 {
		font-size: 30px;
		margin-bottom: 1.5em;		
	}

	a {
		color: #00a8e8;
		transition: all .5s ease-in-out;
	}
	
	a:hover { 
		transform: translateY(-10%) scale(1.5);
	}

	p {
		font-size: 18px;
		text-transform: uppercase;
		letter-spacing: 1em;
	}
	.social {
		padding: 2em 0;
		justify-content: center;
	}
}

</style>