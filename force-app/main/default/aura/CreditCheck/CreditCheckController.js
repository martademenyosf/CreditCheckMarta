/**
 * Created by user on 21.10.2019.
 */

({
    
    init : function(component, event, helper) {

        var createRecordEvent = $A.get('e.force:createRecord');
        if (createRecordEvent) {
             createRecordEvent.setParams({
                  'entityApiName': 'Case'
             });
             createRecordEvent.fire();
        }
        /*
        var navLink = component.find("navService");
        var pageRef = {
            type: 'standard__recordPage',
            attributes: {
                actionName: 'new',
                objectApiName: 'Case'
            },
        };
        navLink.navigate(pageRef, true);
        */
    }

});