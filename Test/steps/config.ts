import {Config} from 'protractor';
import { PrettyFormatter } from 'cucumber';

export let config: Config = {
  framework: 'custom',
  frameworkPath:require.resolve('protractor-cucumber-framework')
,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ["no-sandbox"]
    }
  },
  specs: ['../features/*.feature' ],
  seleniumAddress: 'http://localhost:4444/wd/hub',

  baseUrl:"https://localhost:8808/",
  cucumberOpts:{
     compiler: "ts:ts-node/register",
     strict: true,
     format:[],
     require: ['../steps/*.js','../hooks/*.js'],
     tags:'@smoke'



  }
};