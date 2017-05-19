<script>

	export default
	{
		name: 'Item',

		props: [ "listID", "itemID" ],

		data()
		{	
			return { text:"ERROR 404, sorry no todo found!", note:"", disabled: "disabled" }
		},

		computed:
		{
			lists() { return this.$store.state.lists },
		},

		created()
		{
			if( typeof this.lists[ this.listID ] === "object" &&
				typeof this.lists[ this.listID ].items[ this.itemID ] === "object" )
    		{
    			let item = this.lists[ this.listID ].items[ this.itemID ];

    			this.text = item.text;

    			this.note = item.note;

    			this.disabled = null;
    		}
	    },

	    methods :
		{
			itemNote( event )
			{
				let value = event.srcElement.value;

				this.$store.dispatch( 'itemNote', 
					{ listID: this.listID, itemID: this.itemID, value: value }
				);
			}
		},

	    watch:
	    {
	    	$route(newRoute, oldRoute)
	    	{
	    		//console.log( newRoute, oldRoute )

	    		// Default

	    		this.text = "ERROR 404, sorry no todo found!";

	    		this.note = "";

	    		this.disabled = "disabled";

	    		// If item exists

	    		if( typeof this.lists[ this.listID ] === "object" &&
					typeof this.lists[ this.listID ].items[ this.itemID ] === "object" )
	    		{
	    			let item = this.lists[ this.listID ].items[ this.itemID ];

	    			this.text = item.text;

	    			this.note = item.note;

	    			this.disabled = null;
	    		}

	    	},
	    }
	}

</script>

<template>
	
	<section id="itemSpecific">
		
		<button @click=" $router.go(-1) ">&lt; Back</button>

		<h1> {{ text }} </h1>

		<textarea id="note" :disabled="disabled" v-model="note" @blur=" itemNote( $event ) "></textarea>

	</section>
	
</template>

<style>
	
	#itemSpecific
	{
		position: absolute;
		top: 0;
		bottom: 0;
		width: 100%;
		background: #f8f8f8;
		text-align: center;
	}

	#itemSpecific button
	{
		margin-top: 50px;
	}

	h1
	{
		padding: 0;
		margin-top: 50px;
		font-size: 2em;
		font-weight: normal;
	}

	textarea
	{
		position: absolute;
		bottom: 0;
		top: 200px;
		left: 0;
		right: 0;
		width: 100%;
		padding: 20px;
		outline: none;
		font-size: 16px;
		background: #fff;
		border:none;
		border-top: 1px solid #eaecf0;
		box-sizing: border-box;
		color: #444;
		resize: none;
	}
</style>