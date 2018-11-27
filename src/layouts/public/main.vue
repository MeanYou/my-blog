<template>
	<transition name="slide" mode="out-in">
		<router-view></router-view>
	</transition>
</template>
<script>
	export default {
		name: 'PublicLayout'
	}
</script>

<style>
	
</style>