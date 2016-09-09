/*
Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.editorConfig = function( config )
{
	config.language = 'es';
	config.resize_enabled = false;
	config.toolbar_Full =
		[
		    { name: 'styles',      items : [ 'Format' ] },
		    { name: 'basicstyles', items : [ 'Bold','Italic','Underline','-','RemoveFormat' ] },
		    { name: 'paragraph',   items : [ 'NumberedList','BulletedList','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock' ] },
		    { name: 'links',       items : [ 'Link','Unlink' ] },
		    { name: 'clipboard',   items : [ 'Cut','Copy','PasteText','-','Undo','Redo' ] },
		    { name: 'document',    items : [ 'Source' ] }
		];
	config.forcePasteAsPlainText = true;
};