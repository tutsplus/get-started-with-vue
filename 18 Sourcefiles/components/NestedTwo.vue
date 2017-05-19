<template>
	
	<section>
		<h1> {{ name }} </h1>
		<button @click=" $store.dispatch( 'changeName', 'Bubble two' ) ">Change message</button>
	</section>

</template>

<script>

export default {
	name:'NestedTwo',
	computed:
	{
		name(){ return this.$store.state.firstName + ' ' + this.$store.state.lastName; }
	},
}

</script>