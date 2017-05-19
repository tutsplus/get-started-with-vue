<script>

	import sidebarlist from './SidebarList'
	
	export default
	{
		name: 'Sidebar',
		
		components: { sidebarlist },

		methods:
		{
			filter( color )
			{
				if( this.$store.state.options.filter !== color )
				
					this.$store.dispatch( 'filter', color );
				
				else

					this.$store.dispatch( 'filter', null );
			},

			addList()
			{
				this.$store.dispatch( 'addList' );
			}
		}
	}

</script>


<template>

	<aside :class=" $store.state.options.filter ">

		<div id="filters">
			<a href="#/" class="orange" @click=" filter( 'orange' ) " >&bull;</a>
			<a href="#/" class="yellow" @click=" filter( 'yellow' ) " >&bull;</a>
			<a href="#/" class="green"  @click=" filter( 'green' )  " >&bull;</a>
		</div>

		<button @click="addList">Add list</button>

		<ul>

			<sidebarlist 
				v-for="( list, index ) in $store.state.lists"
				:list="list"
				:index="index"
			></sidebarlist>

		</ul>

	</aside>

</template>

<style>
	
	/* Component styling */

	aside.orange li,
	aside.yellow li,
	aside.green li
	{
		display: none;
	}

	aside.orange li.orange,
	aside.yellow li.yellow,
	aside.green li.green
	{
		display: block;
	}

	/* General styling */

	aside
	{
		position: absolute;
		width: 300px;
		padding: 20px 0;
		overflow-y: auto;
		top: 0px;
		bottom: 0px;
		background: #dedede;
		border-right: 1px solid #ccc;
		-webkit-user-select: none;
	  	-moz-user-select: none;
	  	-ms-user-select: none;
	  	user-select: none;
	}

	aside a
	{
		color: #aaa;
	}

	a.orange
	{
		color: #ff6934;
	}

	a.yellow
	{
		color: #feac2d;
	}

	a.green
	{
		color: #76aa49;
	}

	aside #filters
	{
		height: 30px;
		line-height: 20px;
		text-align: center;
		margin-bottom: 20px;
	}

	aside #filters a,
	aside ul a
	{
		display: inline-block;
		width: 30px;
		height: 30px;
		line-height: 30px;
		font-size: 40px;
		text-align: center;
		transition: all .3s;
		border: 1px solid transparent;
		border-radius: 100px;
	}

	aside #filters a:hover,
	aside ul a:hover,
	aside.orange #filters a.orange,
	aside.yellow #filters a.yellow,
	aside.green #filters a.green
	{
		border: 1px solid #aaa;
	}

	aside button
	{
		display: block;
	    margin: 0 auto 20px auto;
	}
</style>