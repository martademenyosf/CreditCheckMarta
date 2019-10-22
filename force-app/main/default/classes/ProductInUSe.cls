/**********************************************************************************************************
 @Class Name               : ProductInUSe.cls
 @Description              : 
 @Author                   : Marta Demeny@OSF
 @Group                    :
 @Last Modified By         : Marta Demeny@OSF
 @Last Modified On         : 22.10.2019, 09:44
 @Modification Log :       : 
 ==========================================================================================
 Ver           Date              Author                               Modification
 ==========================================================================================
 1.0           22.10.2019        Marta Demeny@OSF                        Initial Version
**********************************************************************************************************/

public with sharing class ProductInUSe {
    @AuraEnabled
    public static String returnAccount(Id Id) {
        System.debug(Id);
        String accountId;
        List<Account> acc= [SELECT Id,Name FROM Account WHERE Id=: Id];
        for (Account a: acc) {
            accountId = a.id;
        }
        return accountId;
    }
}