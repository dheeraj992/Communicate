public with sharing class RecordData {
    @AuraEnabled(cacheable=true)
    public static List<Kia__c> RecordData(String recordid) {

        return [select Name,Model_Year__c,Price__c,Specifications__c From Kia__c 
        where id=:recordid];
        
    }
}
