# CDK Localstack Demo

This project is a simple demo for how to run Localstack together with CDK.

## Howto

You need to install `awslocal`, Localstack's wrapper around `awscli` that points to the endpoint `curl -v http://localhost:4566` used by Localstack.

You will also need to install `aws-cdk-local` in this project by running `npm install --save-dev aws-cdk-local`, however running this has been taken care of under `scripts` in `package.json`.

To get Localstack up and running, simply run `docker-compose up` to start the Localstack container.

After this, run `npm run local synth` and you should be able to see an AWS stack listed (but a mock one to be deployed to Localstack!)

Run `npm run local deploy` and you should see it go through the motions of deploying a stack to AWS. This, however, will be deployed to your Localstack container, rather than AWS itself.

Once you have done this, run `awslocal s3 ls` and you should see something like this:

```
(base) gaz@gojira:$ awslocal s3 ls
2024-02-06 20:02:28 localstacktest1stack-stacktestbucketb99d4ef0-04670ac
```

and run `awslocal sqs list-queues` and you should see something like:

```
(base) gaz@gojira:~$ awslocal sqs list-queues
{
    "QueueUrls": [
        "http://sqs.us-east-1.localhost.localstack.cloud:4566/000000000000/LocalstackTest1Stack-LocalstackTest1Queue8672-29816a24"
    ]
}
```

Run `npm run local destroy` to delete the AWS stack you created in Localstack.
