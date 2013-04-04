Ext.define('QF.controller.Main', {
    extend: 'Ext.app.Controller',
    	
    	config:{

			viewCache:[], // cache views for performance
			historyStack:[],
			refs:{
				
				main:'#mainview',
				ttool: '#mainTopNav',
				btool: '#mainBottomNav',
				nav: 'button'
			},
			control :{
				nav:{
					'loadViewEvent': 'loadView',
					'pressStateEvent': 'pressState' ,
					'backEvent' :	'historyController'
				}
			}
			
    	
    	},

init: function(application) {
	
	  (function(d, s, id, debug){
		     var js, fjs = d.getElementsByTagName(s)[0];
		     if (d.getElementById(id)) {return;}
		     js = d.createElement(s); js.id = id;
		     js.src = "//connect.facebook.net/en_US/all" + (debug ? "/debug" : "") + ".js";
		     fjs.parentNode.insertBefore(js, fjs);
		   }(document, 'script', 'facebook-jssdk', /*debug*/ false));

},
launch: function(){
	 var cache = this.getViewCache(),
		 loadedview =this.getMain().getActiveItem();
		 cache.push(loadedview);
		 // added opening view to the cache array
},
	
pressState :function(item){
	var button = item.getParent().getInnerItems(),
		orgbtnCls = item.getCls().join(' ');
	
	for(i in button) {
	if(button[i].xtype=='button'){
		button[i].setCls(orgbtnCls);
		}
	}; // reset pressed state of all buttons
	
	item.setCls(orgbtnCls + ' selected');
	// set pressed state of button pressed
},

toolbarsState: function(ttool,btool,tbtns,bbtns){
	this.getTtool().setHidden(ttool);
	this.getBtool().setHidden(btool);
	// change hidden states of toolbars
	
	var buttontop = this.getTtool().getInnerItems(),b=0,orgbtnCls;
		for(i in buttontop) {
			if(buttontop[i].xtype=='button'){
				orgbtnCls = buttontop[i].getCls().join(' ');
				orgbtnCls = orgbtnCls.replace(' displaynone','');
				buttontop[i].setCls(orgbtnCls);
					if(tbtns[b]==true){
						buttontop[i].setCls(orgbtnCls + ' displaynone');
						// hide top button nav
					}
					b++;
				}
		}
		b=0;
		var buttonbottom = this.getBtool().getInnerItems();
		for(i in buttonbottom) {
			if(buttonbottom[i].xtype=='button'){
				orgbtnCls = buttonbottom[i].getCls().join(' ');
				orgbtnCls = orgbtnCls.replace(' displaynone','');
				buttonbottom[i].setCls(orgbtnCls);
					if(bbtns[b]==true){
						buttonbottom[i].setCls(orgbtnCls + ' displaynone');
						// hide bottom nav item
					}
				b++;
				}
		}
		
},


loadView: function(item,viewname,ttool,btool,tbtns,bbtns){
	var view = this.createView(viewname);
	var main = this.getMain();
	var viewarray=[];
	main.setActiveItem(view);
	// get view set to active view
	this.toolbarsState(ttool,btool,tbtns,bbtns);
	// set toolbar & buttons visibilty
	viewarray['name'] = viewname;
	viewarray['ttool'] = ttool;
	viewarray['btool'] = btool;
	viewarray['tbtns'] = tbtns;
	viewarray['bbtns'] = bbtns;
	this.historyController(viewarray);
    
},

historyController: function(viewarray,back){
	 var history = this.getHistoryStack(), i = 0;
	   		
	     if(back && history.length > 0){
	   			// back button pressed remove last history item move to last
				// view
	   			viewarray = history[history.length-2];
	   			var view = this.createView(viewarray['name']);
	   			var main = this.getMain();
	   			main.setActiveItem(view);
	   			// get view set to active view
	   			this.toolbarsState(viewarray['ttool'],viewarray['btool'],viewarray['tbtns'],viewarray['bbtns']);
	   			// set toolbar & buttons visibilty
	   			this.hideSheets();
	   			history.splice((history.length-1),1);
	   			return;
	   		}
	   		
	      for (; i < history.length; i++) {
		            if (history[i]['name']=== viewarray['name']) {
		                history.splice((i+1),history.length-(i+1));
		                // if you have already been to this view before start
						// history from this point
		                return;
		            }
		           }
	      
	      history.push(viewarray);
	      // push new view to history stack
	      return;	 
},

createView: function (viewname) {
		// Add view to the viewport & cache then remove any unwanted views from
		// cache
        var viewref = this.getViewName(viewname),
         cache = this.getViewCache(),
         ln = cache.length,
         limit = 1,
         view, i = 0, j, oldView;

        for (; i < ln; i++) {
            if (cache[i].viewName === viewref) {
                return cache[i];
            }
        }

	        if (ln >= limit) {
	            for (i = 0, j = 0; i < ln; i++) {
	                oldView = cache[i];
	                if (!oldView.isPainted()) {
	                    oldView.destroy();
	                } else {
	                    cache[j++] = oldView;
	                }
	            }
	            cache.length = j;
	        }
  
        view = Ext.create(viewref);
        view.viewName = viewref;
        cache.push(view);
        this.setViewCache(cache);

        return view;
    },

    
  getViewName: function (name) {
    	// get text from button/component and use this for the view name ref
    		var  ns = 'QF.view.';
            if (this.getApplication().getCurrentProfile().getName() === 'Tablet') {
                return ns + 'tablet.' + name;
            } else {
                return ns + 'phone.' + name;
            }
    },
    
    hideSheets: function () {
        Ext.each(Ext.ComponentQuery.query('sheet'), function (sheet) {
            sheet.setHidden(true);
        });
    }


});