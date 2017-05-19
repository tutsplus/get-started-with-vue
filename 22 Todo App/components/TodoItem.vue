<script>

	export default
	{
		name: "todoitem",
		props: [ "item", "index" ],
		methods:
		{
			itemCompleted( event, index )
			{
				let value = event.srcElement.checked;

				this.$store.dispatch( 'itemCompleted', { index:index, value:value } );
			},

			itemText( event, index )
			{
				let value = event.srcElement.value;

				this.$store.dispatch( 'itemText', { index:index, value:value } );
			},

			removeItem( )
			{
				this.$store.dispatch( 'removeTodo', this.index );
			},

			note( )
			{
				let listID = this.$store.state.focus.index;

				this.$router.push({ path: '/list/' + listID + '/item/' + this.index });
			},
		}
	}
</script>

<template>

	<li :class=" { done : item.completed } ">

		<input v-if=" item.completed == true " type="checkbox" @click="itemCompleted( $event, index )" checked>

		<input v-else type="checkbox" @click=" itemCompleted( $event, index ) ">

		<input class="todo" type="text" :value="item.text" @blur=" itemText( $event, index ) ">

		<button id="Del"  @click=" removeItem ">Del</button>
		
		<button id="Note" @click=" note ">Notes</button>
		
	</li>

</template>

<style>
	#todo
	{
		position: absolute;
		list-style-type: none;
		top: 70px;
		left: 320px;
		right: 20px;
		bottom: 0px;
		margin: 0;
		padding: 0;
		overflow-y: auto;
	}

	#todo li
	{
		height: 50px;
		position: relative;
		padding: 15px 0;
		border-bottom: 1px solid #ddd;
	}

	#todo input[type="checkbox"]
	{
		position: relative;
		z-index: 2;
		float: left;
		margin: 2px 5px 0 0;
		padding: 0;
		width: 20px;
		height: 20px;
		border: 1px solid #ccc;
	}

	.todo
	{
		position: absolute;
	    display: block;
	    width: 100%;
	    padding: 0px 110px 0px 25px;
	    margin: 0;
	    font-family: 'helvetica';
	    font-size: 16px;
	    border: none;
	    outline: none;
	    background: transparent;
	}

	.done
	{
		display: none;
	}

	.done .todo
	{
		pointer-events: none;
		opacity: .4;
	}

	#Del, #Note
	{
		position: relative;
		float: right;
		z-index: 2;
	}

	#Note
	{
		margin-right: 20px;
	}
</style>