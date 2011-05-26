// ==========================================================================
// Project:   ScuiSample - mainPage
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals ScuiSample */

// This page describes the main user interface for your application.  
ScuiSample.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'dragView dragView2'.w(),
    
    dragView:SC.View.design(SCUI.Mobility,{
		    layout:{centerX:0,bottom:40,width:100,height:100},
				backgroundColor:'red',
		    //childViews:'  '.w(),
		}),
		dragView2:SC.View.design(SCUI.Mobility,{
		    layout:{centerX:120,bottom:40,width:100,height:100},
				backgroundColor:'black',
		    //childViews:'  '.w(),
		}),
  })

});
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('scui_sample');