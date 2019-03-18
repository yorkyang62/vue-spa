<template id="about">
	<div>
		<h1>About</h1>
		<p>This is the tutorial about vue-router.</p>
	</div>
</template>
<script>
export default {
  '/about': 'About',
  // beforeRouteEnter (to, from, next) {
  // 	console.log(to);
  // 	// this.$parent.side = false;
  // 	next();
  // },
  mounted:() => {
  	// let self = this;
  	// setTimeout(() => {
	  // 	console.log(self.$root);
  	// },1000)
  	// this.$parent.side = false;
  }
}
</script>
