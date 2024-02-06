#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { LocalstackTest1Stack } from '../lib/localstack-test-1-stack';

const app = new cdk.App();
new LocalstackTest1Stack(app, 'LocalstackTest1Stack', {
  // if you're wondering why I'm using LegacyStackSynthesizer
  // instead of bootstrapping: this is how I do it at work
  // and I'm lazy :P
  synthesizer: new cdk.LegacyStackSynthesizer()
});