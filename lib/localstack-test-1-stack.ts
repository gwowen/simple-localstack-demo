import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class LocalstackTest1Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const stackTestQueue = new sqs.Queue(this, 'LocalstackTest1Queue', {
      visibilityTimeout: cdk.Duration.seconds(300)
    });

    const stackTestBucket = new s3.Bucket(this, 'stackTestBucket');

  }
}
