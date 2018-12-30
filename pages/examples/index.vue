<template>
	<div class="examples">
		<h2>Section under construction! :)</h2>
		<div class="cta"
			@click.prevent="$router.push('/')">back</div>
	</div>
</template>

<script>
export default {
	layout: 'default',
	name: 'examples'
};
</script>

<style scoped>
	.examples {
		width: 100%;
		height: 100%;
		display: flex;
		flex-flow: column;
		justify-content: center;
		align-items: center;
		align-content: center;
		margin: 12em auto;
		font-family: 'Mono Space';
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
	  margin: 2em auto;
	  transition: all 0.5s ease-in-out;
	}

@media only screen and (min-width: 768px) {
	.examples {
		width: 100%;
		display: flex;
		flex-flow: column;
		justify-content: center;
		align-items: center;
		align-content: center;
		font-family: 'Mono Space';
	}
}	
</style>