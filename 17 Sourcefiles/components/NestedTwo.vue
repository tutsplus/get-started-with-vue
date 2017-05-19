<template>
	
	<section>
		<h1> {{ message }} </h1>
		<button @click=" changeMessage( 'Bubble two event fired' ) ">Change message</button>
	</section>

</template>

<script>

export default {
	name: 'NestedOne',
	props: [ "message" ],
	methods:
	{
		changeMessage( message ){ this.$emit( 'BubbleTwo' , message ) }
	}
}

</script>