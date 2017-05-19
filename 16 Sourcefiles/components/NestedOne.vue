<template>
	
	<section>
		<h1> {{ message }} {{ number }} </h1>
	</section>

</template>

<script>
	
export default {
	name: 'NestedOne',
	props:
	{
		"message":
		{
			type: String,
			required: false,
			default: "Default string"
		},
		"number":
		{
			type: Number,
			required: false,
			default: 100
		}
	}
}

</script>