# React UI and Splunk
#### Fast, Flexible and Really, Really, Ridiculously Good Looking Dashboards

Supplemental content from my presentation at [Splunk .Conf 2022](https://conf.splunk.com/watch/conf-online.html) on June 14, 2022

[SplunkUI Documentation](https://splunkui.splunk.com)



## Slides

A PDF copy of the presentation is available titled [DEV1564B_Splunk_conf22_slides.pdf](DEV1564B_Splunk_conf22_slides.pdf)



## Using the Demo

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



## Setting Dark Mode Automatically

In some cases, you may want the dashboard to auto-select dark or light mode based on the user's system settings.  Here is a method you can use for that.

Modern browsers support a `matchMedia` function which you can pass `'(prefers-color-scheme: dark)'` as an argument to find the information you need.  It returns an object that looks something like this:

```
{
	media: '(prefers-color-scheme: dark)', 
	matches: false, 
	onchange: null
}
```



Since the `matches` key returns a bolean for dark (true) or light (false), we can set our color scheme dynamically when the dashboard loads using the `colorScheme` property in the [SplunkThemeProvider](https://splunkui.splunk.com/Packages/themes/SplunkThemeProvider) component:

```
layout(
    <SplunkThemeProvider 
    	family="enterprise" 
    	density="comfortable" 
    	colorScheme={window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark": "light"}
    >
        <MyDashboard />
    </SplunkThemeProvider>
);
```



## React Visualizations

There are a lot of options out there, but here are a few that I have used:

**Nivo** - https://nivo.rocks

**React Google Charts** - https://www.react-google-charts.com

**Victory** - https://formidable.com/open-source/victory/

**react-chartjs-2** - https://react-chartjs-2.js.org



## Learn React

https://reactjs.org/tutorial

https://www.codecademy.com/learn/react-101

https://www.freecodecamp.org/learn/front-end-development-libraries/#react