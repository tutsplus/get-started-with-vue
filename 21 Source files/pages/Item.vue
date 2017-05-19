<template>
	
	<section>
		
		<button @click=" $router.go( -1 ) " > Go back </button>

		<pre>
			
			Params: listID = {{ listID }}, itemID = {{ itemID }}

			Query: isList = {{ $route.query.isList }}, isItem = {{ $route.query.isItem }}

		</pre>

	</section>

</template>

<script>
	export default { name: 'Item', props:[ "listID", "itemID" ] }
</script>

<style>
	pre
	{
		font-family: "helvetica";
		font-size: 18px;
	}
</style>