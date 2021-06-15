import * as cdk from '@aws-cdk/core';
import * as ddb from "@aws-cdk/aws-dynamodb"

export class CkdbackendStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    ///Defining a DynamoDB Table
    const dynamoDBTable = new ddb.Table(this, 'Table', { 
      billingMode: ddb.BillingMode.PAY_PER_REQUEST,     
      partitionKey: {
        name: 'id',
        type: ddb.AttributeType.STRING,
      },      
    });    

    const dynamoDBTable2 = new ddb.Table(this, 'Table2', { 
      billingMode: ddb.BillingMode.PAY_PER_REQUEST,     
      partitionKey: {
        name: 'id',
        type: ddb.AttributeType.STRING,
      },      
    });

    const dynamoDBTable3 = new ddb.Table(this, 'Table3', { 
      billingMode: ddb.BillingMode.PAY_PER_REQUEST,     
      partitionKey: {
        name: 'id',
        type: ddb.AttributeType.STRING,
      },      
    });

  }
}
