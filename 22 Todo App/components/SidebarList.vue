<script>
	
	export default {

		name: 'SidebarList',

		props:[ "list", "index" ],

		data(){ return { rename: null, assignTag: null } },

		methods:
		{
			changeFocus( listID )
			{
				if( this.$store.state.focus.index != listID )
				{
					this.$store.dispatch( 'changeFocus', listID );
				}
			},

			changeTag( listID, color )
			{
				if( this.assignTag == null )
				{
					this.assignTag = 'changeTag';
				}
				else
				{
					this.assignTag = null;

					let listDetails = { listID: listID, color: color }

					this.$store.dispatch( 'changeTag', listDetails );
				}
			},

			renameName( )
			{
				this.rename = 'rename';
			},

			renameBlur( event, listID )
			{
				this.rename = null;

				let listDetails = { listID: listID, newName: event.srcElement.value };

				this.$store.dispatch( 'renameList', listDetails );
			}
		}
	}

</script>


<template>

		<li :class="[ list.tag, rename, assignTag ]" @click="changeFocus( index )" >
			
				<a href="#/" @click=" changeTag( index, null ) " >&bull;</a>

				<a href="#/" class="orange" @click=" changeTag( index, 'orange' ) " >&bull;</a>

				<a href="#/" class="yellow" @click=" changeTag( index, 'yellow' ) " >&bull;</a>

				<a href="#/" class="green" @click=" changeTag( index, 'green' ) " >&bull;</a>
			
				<span @dblclick=" renameName() "> {{ list.title }} </span>
			
				<input type="text"
					   :value="list.title"
					   @blur=" renameBlur( $event, index ) "
					   @keydown.enter=" renameBlur( $event, index ) ">
		</li>

</template>


<style>
	
	aside ul
	{
		padding: 0;
		margin: 0;
		list-style-type: none;
	}

	aside li
	{
		position: relative;
		padding: 0 20px;
		height: 35px;
		line-height: 38px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		cursor: default;
	}

	aside li.active
	{
		background: #ccc;
	}

	aside li a
	{
		display: none;
		float: left;
		margin-top: 2px;
	}

	aside li a:first-child
	{
		display: inline-block;
	}

	aside li span
	{
		display: inline-block;
		min-width: 50px;
		min-height: 20px;
		padding-left: 5px;
	}

	aside li input
	{
		display: none;
		position: absolute;
	    right: 20px;
	    left: 50px;
	    top: 5px;
	    font-size: 16px;
	    font-family: 'helvetica';
	    width: 230px;
	}

	aside li.rename span
	{
		display: none;
	}

	aside li.rename input
	{
		display: inline-block;
	}

	aside li.changeTag a
	{
		display: block !important;
	}

	aside li.orange a,
	aside li.yellow a,
	aside li.green a
	{
		display: none;
	}

	aside li.orange a.orange,
	aside li.yellow a.yellow,
	aside li.green a.green
	{
		display: block;
	}
</style>