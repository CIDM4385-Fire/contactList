//Jack did this borrowing Bryan's code

var Cloud = require('ti.cloud');
Cloud.debug = true;


/*function openMenu() {
    var index = Alloy.createController("index").getView();
	index.open();
   } 
*/

//$.list.setMarker({sectionIndex:0,itemIndex:100});

var plainTemplate = {
    childTemplates: [ {
        type: "Ti.UI.Label",
        bindId: "username",
        properties: {
            backgroundColor: "#FFFFFF",
            width: "260dp",
            top: "10dp",
            bottom: "10dp",
            left: "75dp",
            borderRadius: "5dp",
            separatorColor: "#253640"
        }
    }, {
        type: "Ti.UI.Label",
        bindId: "email",
        properties: {
            color: "#565656",
            font: {
                fontFamily: "Arial",
                fontSize: "21dp"
            },
            left: "100dp",
            top: "20dp"
        },
        separatorColor: "#253640"
    }, {
        type: "Ti.UI.Label",
        bindId: "firstname",
        properties: {
            color: "gray",
            font: {
                fontFamily: "Arial",
                fontSize: "14dp"
            },
            left: "100dp",
            top: "50dp"
        }
    }, {
        type: "Ti.UI.Label",
        bindId: "lastname",
        properties: {
            color: "gray",
            font: {
                fontFamily: "Arial",
                fontSize: "14dp"
            },
            left: "100dp",
            top: "50dp"
        }
    },
    
     ]
};

var listView = Ti.UI.createListView({
	templates : {
		uncheck : plainTemplate
	},
	
	defaultItemTemplate : "uncheck"
});

var section = Ti.UI.createListSection();
 listView.sections = [ section];
 
 var data = [];
 var sectionViews = [];

var userList = ['55401b5bde9cf38e0eb7428f', '5540211708c91ee918e74817', '5540215154add893ddb62b17'];


for ( var i = 0; i < userList.length; i++) {
Cloud.Users.show({
    user_id: userList[i]
}, function (e) {
    if (e.success) {
        var user = e.users[0];
  
    data.push({
            	username : { text: user.username},
            	email: { text: user.email},
            	firstname : {text: user.first_name},
            	lastname : {text: user.last_name},
    	
 
        
    });
}
     section.setItems(data);
           });
           userList[i] = Ti.UI.createView();        
           userList[i].add(listView);
           		}

var scrollableView = Ti.UI.createScrollableView({
  views:userList,
  showPagingControl:true
});          
  
 sectionView = Ti.UI.createView();
 sectionView.add(scrollableView);
 $.myView.add(sectionView);
$.win.open();