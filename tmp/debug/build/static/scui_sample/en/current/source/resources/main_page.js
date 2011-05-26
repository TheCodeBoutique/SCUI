// ==========================================================================
// Project:   ScuiSample - mainPage
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals ScuiSample */
sc_require('views/code');
// This page describes the main user interface for your application.  
ScuiSample.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'dragView dragView2 cal'.w(),
    

		cal:SC.View.design({
	    classNames: ['datepicker-sample'],
	    layout: { top: 30, left: 0, right: 0, bottom: 0 },
	    childViews: 'label example'.w(),

	    label: SC.LabelView.design({
	      layout: { top: 0 , centerX: -220, height: 35, width: 300 },
	      textAlign: SC.ALIGN_CENTER,
	      value: 'Click to choose a date'
	    }),

	    example: SCUI.DatePickerView.design({
	      layout: {top: 40, centerX: -220, height: 24, width: 150}
	    }),

	  }),
    dragView:SC.View.design(SCUI.Mobility,{
		    layout:{centerX:0,bottom:40,width:100,height:100},
				backgroundColor:'red',
		    childViews:'size'.w(),
				size:SC.View.design(SCUI.Resizable,{
				    layout:{right:0,bottom:0,width:20,height:20},
						backgroundColor:'blue',
				    //childViews:'  '.w(),
				})
		}),
		dragView2:SC.View.design(SCUI.Mobility,{
		    layout:{centerX:120,bottom:40,width:100,height:100},
				backgroundColor:'black',
		    //childViews:'  '.w(),
		}),
  })

});
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('scui_sample');