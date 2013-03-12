Ext.define("NotesApp.controller.Notes", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			// We're going to lookup our views by xtype.
			notesListContainer : "noteslistcontainer",
			noteEditor : "noteeditor",
			notesList :"noteslist"

		},
		control : {
			notesListContainer : {
				// The commands fired by the notes list container.
				newNoteCommand : "onNewNoteCommand",
				editNoteCommand : "onEditNoteCommand"
			},

			noteEditor : {
				// The commands fired by the note editor.
				saveNoteCommand : "onSaveNoteCommand",
				deleteNoteCommand : "onDeleteNoteCommand",
				backToHomeCommand: "onBackToHomeCommand"

			}

		}
	},

	// Commands.

	onNewNoteCommand : function() {
		console.log("onNewNoteCommand");

		var now = new Date();
		//var noteId = (now.getTime()).toString()
		//		+ (this.getRandomInt(0, 100)).toString();

		var newNote = Ext.create("NotesApp.model.Note", {
			dateCreated : now,
			title : "",
			narrative : ""
		});
		this.activateNoteEditor(newNote);
	},

	getRandomInt : function(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	},

	activateNoteEditor : function(record) {
		var noteEditor = this.getNoteEditor();
		noteEditor.setRecord(record); // load() is deprecated.
		this.hideKeyboard();
		Ext.Viewport.animateActiveItem(noteEditor, this.slideLeftTransition);
		
	},

	slideLeftTransition : {
		type : 'slide',
		direction : 'left'
	},

	slideRightTransition : {
		type : 'slide',
		direction : 'right'
	},

	onEditNoteCommand : function(list, record) {
		console.log("onEditNoteCommand");
		this.activateNoteEditor(record);

	},

	onSaveNoteCommand : function() {

		console.log("onSaveNoteCommand");

		var noteEditor = this.getNoteEditor();

		var currentNote = noteEditor.getRecord();
		var newValues = noteEditor.getValues();

		// Update the current note's fields with form values.
		currentNote.set("title", newValues.title);
		currentNote.set("narrative", newValues.narrative);

		var errors = currentNote.validate();

		if (!errors.isValid()) {
			Ext.Msg.alert('Wait!', errors.getByField("title")[0].getMessage(),
					Ext.emptyFn);
			currentNote.reject();
			return;
		}

		var notesStore = Ext.getStore("Notes");

		if (currentNote.phantom) {
			notesStore.add(currentNote);
		}

		notesStore.sync();

		notesStore.sort([ {
			property : 'dateCreated',
			direction : 'DESC'
		} ]);

		this.activateNotesList();
	},

	activateNotesList : function() {
		var store = Ext.getStore("Notes");
		var noteslist = this.getNotesList();
		Ext.Viewport.animateActiveItem(this.getNotesListContainer(),this.slideRightTransition);		

		noteslist.refresh();

	},
	
	onDeleteNoteCommand : function() {

		console.log("onDeleteNoteCommand");

		var noteEditor = this.getNoteEditor();
		var currentNote = noteEditor.getRecord();
		var notesStore = Ext.getStore("Notes");

		notesStore.remove(currentNote);
		notesStore.sync();
		
		notesStore.sort([ {
			property : 'dateCreated',
			direction : 'DESC'
		} ]);

		this.activateNotesList();
	},
	onBackToHomeCommand : function(){
		this.activateNotesList();
	},
	
	hideKeyboard: function (){
	     var activeElement = document.activeElement;
	     activeElement.setAttribute('readonly', 'readonly'); 
	     activeElement.setAttribute('disabled', 'true');
	     Ext.defer(function() {
	         activeElement.blur();
	         activeElement.removeAttribute('readonly');
	         activeElement.removeAttribute('disabled');
	     }, 100);
	},
	

	// Base Class functions.
	launch : function() {
		this.callParent(arguments); // runs launch code from Ext.app.Contoller
		// above
		Ext.getStore("Notes").load(); // then runs my extra code after wards
		console.log("launch");
		//var cc = this.getApplication().getController('NotesApp.controller.test');
		//cc.launch;
		
	},

	init : function() {
		this.callParent(arguments);// runs launch code from Ext.app.Contoller
		// above
		console.log("init"); // then runs my extra code after wards
	}
});
