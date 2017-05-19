export default {

	state:
	{

		options :
		{
			"filter" 		  : null,
			"toggleCompleted" : "Hide completed"
		},

		focus :
		{
			index: null,
			title: "Vue Todo",
			items: [ ]
		},
		

		lists :
		[
			{ 
				"title" : "General tasks",
				"tag"   : null,
				"items" :
				[
					{ 
						"completed" : true,
						"text"		: "This is one item on the general tasks",
						"note"		: ""
					},
					{ 
						"completed" : false,
						"text"		: "Give it something to do",
						"note"		: ""
					}
				]
			},

			{ 
				"title" : "Another todo",
				"tag"   : null,
				"items" :
				[
					{ 
						"completed" : true,
						"text"		: "Let me do something important",
						"note"		: "This is the note associated with the item"
					}
				]
			}
		]
	},

	mutations:
	{
		// App Options

		filter( state, color )
		{
			state.options.filter = color;
		},

		toggleCompleted( state, value )
		{
			state.options.toggleCompleted = value;
		},

		// Focus

		changeFocus( state, focusObject )
		{
			state.focus = focusObject;
		},

		focusTitle( state, newName )
		{
			state.focus.title = newName;
		},

		// Lists

		addList( state )
		{
			state.lists.push({ 
				"title"  : "NEW LIST",
				"tag"   : null,
				"items" : [ ]
			});
		},

		changeTag( state, listDetails )
		{
			state.lists[ listDetails.listID ].tag = listDetails.color;
		},

		renameList( state, listDetails )
		{
			state.lists[ listDetails.listID ].title = listDetails.newName;
		},

		// List Items

		addTodo( state )
		{
			let newTodo = { 
				"completed" : false,
				"text"		: "New Todo...",
				"note"		: ""
			};

			state.focus.items.push( newTodo );
		},

		itemCompleted( state, item )
		{
			state.focus.items[ item.index ].completed = item.value;
		},

		itemText( state, item )
		{
			state.focus.items[ item.index ].text = item.value;
		},

		removeTodo( state, index )
		{
			state.focus.items.splice( index , 1 );
		},

		itemNote( state, item )
		{
			state.lists[ item.listID ].items[ item.itemID ].note = item.value;
		},
	},

	actions:
	{
		// Options

		filter( context, color )
		{
			context.commit( 'filter', color );
		},

		toggleCompleted( context, value )
		{
			context.commit( 'toggleCompleted', value );
		},

		// Focus

		changeFocus( context, listID )
		{
			let focusObject = {

				index: listID,
				title: context.state.lists[ listID ].title,
				items: context.state.lists[ listID ].items
			};

			context.commit( 'changeFocus', focusObject );
		},

		// List
		
		addList( context )
		{
			context.commit( 'addList' );
		},

		changeTag( context, listDetails )
		{
			context.commit( 'changeTag', listDetails );
		},

		renameList( context, listDetails )
		{
			context.commit( 'focusTitle', listDetails.newName );
			context.commit( 'renameList', listDetails );
		},

		// List Items

		addTodo( context )
		{
			context.commit( 'addTodo' );
		},

		itemCompleted( context, item )
		{
			context.commit( 'itemCompleted', item );
		},

		itemText( context, item )
		{
			context.commit( 'itemText', item );
		},

		removeTodo( context, index )
		{
			context.commit( 'removeTodo', index );
		},

		itemNote( context, item )
		{
			context.commit( 'itemNote', item );
		}
	}
	
}