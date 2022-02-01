public with sharing class QueryRecordsFromType {
    @AuraEnabled(cacheable=true)
    public static List<Niet__c> QueryRecords(String type) {

       return [select Name,RollNo__c,Phone__c,Branch__c  From Niet__c Where Name=:type];
    }
}
