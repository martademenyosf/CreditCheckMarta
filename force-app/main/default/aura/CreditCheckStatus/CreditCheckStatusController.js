/**
 * Created by user on 21.10.2019.
 */

({
    
    doInit : function(component, event, helper) {
        /*
        console.log('recordId: ', component.get('v.recordId'));
        component.set('v.recordId', component.get("v.pageReference").state.id);
        console.log(component.get('v.recordId'));
        */
        window.open( "/apex/productInUse?id=" + component.get("v.recordId"));
        window.alert("this is test message to check alert");
        window.close();
        $A.get("e.force:closeQuickAction").fire();
    }

});