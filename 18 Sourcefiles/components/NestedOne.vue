<template>
	
	<section>
		<h1> {{ name }} </h1>
		<button @click=" $store.dispatch( 'changeName', 'Bubble one' ) ">Change message</button>

		<nestedtwo></nestedtwo>

	</section>

</template>

<script>

import nestedtwo from './NestedTwo';

export default {
	name: 'NestedOne',
	computed:
	{
		name(){ return this.$store.state.firstName + ' ' + this.$store.state.lastName; }
	},
	components: { nestedtwo }
}

</script>