<template>

	<section id="Main">
		
		<sidebar></sidebar>

		<listview></listview>

	</section>

</template>


<script>

	import sidebar from '../components/Sidebar'
	import listview from '../components/ListView'

	export default
	{
		name: 'todo',
		components: { sidebar, listview }
	}

</script>