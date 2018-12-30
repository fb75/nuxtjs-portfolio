<template>
	<div class="points" @click.prevent="$emit('showCard')">
		<div class="point"></div>
		<div class="point"></div>
		<div class="point"></div>
	</div>
</template>

<script>

</script>

<style scoped>
	.points {
		cursor: pointer;
		display: flex;
		width: 30px;
		height: 30px;
		/*margin: 0 1em;*/
		/*background: gray;*/
		flex-flow: column;
		justify-content: center;
		align-items: center;
		align-content: space-around;	
		transition: all 0.3s ease-in-out;	
	  filter: drop-shadow(5px 5px 4px rgba(0, 52, 89, 1));
	}

	.point {		
		z-index: 100;
		width: .15em;
		height: .1em;
		border-radius: 50%;
		margin: 0.1em 0; 
		background-color: #00a8e8;	
		transition: all 0.4s ease-in-out;	
	}
	
@media only screen and (min-width: 768px) {
	
	.point {
		width: 0.3em;
		height: 0.3em;
		border-radius: 50%;
		color: #003459;
		transition: all 0.3s ease-in-out;
	}
	
	.points:hover .point:first-child {
		animation: point 1s forwards ease-in-out infinite;
		animation-delay: .4s;
	}

	.points:hover .point:nth-of-type(2) {
		animation: point 1s forwards ease-in-out infinite;
		animation-delay: .2s;
	}

	.points:hover .point:nth-of-type(3) {
		animation: point 1s forwards ease-in-out infinite;
	}

	@keyframes point {
		50% {
			transform: scale(2);
		}		
	}
}
</style>