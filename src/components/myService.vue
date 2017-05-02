<template>
	<div class="my">
	    fqef fqw
	    <p>{{msg}}</p>
	</div>
</template>

<script>
	export default {
		name: 'myService',
		data() {
			return {
				msg: "我的服务"
			}
		}
	}
</script>

<style scoped>
	.my {
		font-size: 0.5rem;
	}
	p{
		color: #42B983;
	}
	
</style>