<template>
	
	<section>
		<h1> {{ message }} </h1>
		<button @click=" changeMessage( 'Bubble one event fired' ) ">Change message</button>

		<nestedtwo :message=" message " @BubbleTwo=" changeMessage( $event ) "></nestedtwo>

	</section>

</template>

<script>

import nestedtwo from './NestedTwo';

export default {
	name: 'NestedOne',
	props: [ "message" ],
	components: { nestedtwo },
	methods:
	{
		changeMessage( message ){ this.$emit( 'BubbleOne' , message ) }
	}
}

</script>