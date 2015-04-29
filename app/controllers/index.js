var Cloud = require('ti.cloud');
Cloud.debug = true;


function openMenu() {
    var index = Alloy.createController("index").getView();
	index.open();
   } 


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

/*
var listSection = Titanium.UI.createListSection({events: event});

var listView = Titanium.UI.createListView({sections: [listSection]});

listView.addEventListener('itemclick', function(e){
 // Only respond to clicks on the label (rowtitle) or image (pic)
 if (e.bindId == 'rowtitle' || e.bindId == 'event') {
        var item = e.section.getItemAt(event);
 if (item.properties.accessoryType == Ti.UI.LIST_ACCESSORY_TYPE_NONE) {
            item.properties.accessoryType = Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK;
        }
 else {
            item.properties.accessoryType = Ti.UI.LIST_ACCESSORY_TYPE_NONE;
        }
        e.section.updateItemAt(e.itemIndex, event);
    }      
});
*/


/*
  event = [];
for (var i = 0; i < event; i++) {
    event.push({
 // Maps to the rowtitle component in the template
 // Sets the text property of the Label component
        rowtitle : { text: 'Row ' + (i + 1) },
 // Sets the regular list data properties
        properties : {
            title: 'Row ' + (i + 1),
            accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE
        }
    });
}
*/


/*
function handleClick (e) {
 // Get the section of the clicked item
	var section = $.list.sections[e.sectionIndex];
 // Get the clicked item from that section
	var item = section.getItemAt(e.itemIndex);
 // Update the item's `title` property and set it's color to red:
	item.properties.title += " (clicked)";
	item.properties.color = 'red';
 // Update the item in the list
	section.updateItemAt(e.itemIndex, item);
}
*/


//$.list.setMarker({sectionIndex:0,ItemsIndex:event-1});

  
  
 
//$.feedWindow.add();

