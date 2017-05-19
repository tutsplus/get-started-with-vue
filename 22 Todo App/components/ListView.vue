<script>

	import todoitem from './TodoItem'

	export default
	{
		name: "listview",

		components: { todoitem },

		computed:
		{
			options() { return this.$store.state.options },

			focus() { return this.$store.state.focus }
		},

		methods:
		{
			toggleCompleted()
			{
				if( this.options.toggleCompleted === 'Hide completed' )

					this.$store.dispatch( 'toggleCompleted', 'Show completed' );

				else

					this.$store.dispatch( 'toggleCompleted', 'Hide completed' );
			}
		}
	}

</script>


<template>

	<section id="listView">
	
		<header>

			<h1> {{ focus.title }} </h1>

			<button id="addTodo" @click=" $store.dispatch( 'addTodo' ) ">Add Todo</button>

			<button id="toggleCompleted" @click="toggleCompleted"> 

				{{ options.toggleCompleted === "Hide completed" ? "Show completed" : "Hide completed" }}

			</button>

		</header>

		<ul id="todo" :class="options.toggleCompleted">
			
			<todoitem v-for=" ( item, index ) in focus.items " :item="item" :index="index"></todoitem>

		</ul>

	</section>

</template>


<style>
	
	#todo.Show .done
	{
		display: block;
	}

	header
	{
		position: absolute;
		z-index: 2;
		height: 70px;
		left: 320px;
		right: 20px;
		top: 0;
		width: auto;
		background: 
			url( "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI1NnB4IiBoZWlnaHQ9IjIyMXB4IiB2aWV3Qm94PSIwIDAgMjU2IDIyMSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+Cgk8Zz4KCQk8cGF0aCBkPSJNMjA0LjgsMCBMMjU2LDAgTDEyOCwyMjAuOCBMMCwwIEw1MC41NiwwIEw5Ny45MiwwIEwxMjgsNTEuMiBMMTU3LjQ0LDAgTDIwNC44LDAgWiIgZmlsbD0iIzQxQjg4MyI+PC9wYXRoPgoJCTxwYXRoIGQ9Ik0wLDAgTDEyOCwyMjAuOCBMMjU2LDAgTDIwNC44LDAgTDEyOCwxMzIuNDggTDUwLjU2LDAgTDAsMCBaIiBmaWxsPSIjNDFCODgzIj48L3BhdGg+CgkJPHBhdGggZD0iTTUwLjU2LDAgTDEyOCwxMzMuMTIgTDIwNC44LDAgTDE1Ny40NCwwIEwxMjgsNTEuMiBMOTcuOTIsMCBMNTAuNTYsMCBaIiBmaWxsPSIjMzU0OTVFIj48L3BhdGg+Cgk8L2c+Cjwvc3ZnPg==" )
			no-repeat left center;
		background-size: auto 30px;
		overflow: hidden;
		border-bottom: 1px solid #ddd;
	}

	header h1
	{
		padding: 0;
		margin: 0 0 0 50px;
		font-size: 2.1em;
		font-weight: normal;
		line-height: 70px;
		color: #35495E;
	}

	header input
	{
		height: 18px;
		font-size: 11px;
	}

	#addTodo
	{
		position: absolute;
		right: 121px;
		top: 30px;
	}

	#toggleCompleted
	{
		width: 103px;
		position: absolute;
		right: 0px;
		top: 30px;
	}
</style>