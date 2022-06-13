# React UI and Splunk
#### Fast, Flexible and Really, Really, Ridiculously Good Looking Dashboards

Supplemental content from my presentation at [Splunk .Conf 2022](https://conf.splunk.com/watch/conf-online.html) on June 14, 2022



## Slides

A PDF copy of the presentation is available titled [DEV1564B_Splunk_conf22_slides.pdf](DEV1564B_Splunk_conf22_slides.pdf)



## Demo

The demo folder contains the code from the presentation.  



**Prerequisites**

To create a working demo, there are some prerequisites:

* Locally installed version of [Splunk Enterprise](https://www.splunk.com/en_us/download/splunk-enterprise.html)
* [Node.js](https://nodejs.org/en/)
* [Yarn](https://classic.yarnpkg.com/en/docs/install)



**Recommended**

* [VS Code Editor](https://code.visualstudio.com/download)
* [Splunk UI Documentation](https://splunkui.splunk.com/)



**Setup**

1. Clone this repo
2. From terminal, `cd` into the demo folder
3. Run `yarn install` 
4. Link the two apps to your Splunk instance
   1. `cd packages/acme && yarn link:app`
   2. `cd ../my-splunk-app && yarn link:app`
5. Start Splunk.  Restart it if it was already started.



