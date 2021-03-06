import React from 'react';

import layout from '@splunk/react-page';
import MyComponent from '@splunk/my-component';
import { SplunkThemeProvider } from '@splunk/themes';

import { defaultTheme, getThemeOptions } from '@splunk/splunk-utils/themes';

import { StyledContainer, StyledGreeting } from './StartStyles';

const themeProviderSettings = getThemeOptions(defaultTheme() || 'enterprise');

layout(
    <SplunkThemeProvider {...themeProviderSettings}>
        <StyledContainer>
            <StyledGreeting>Hello, from inside MySplunkApp!</StyledGreeting>
            <div>Your components will appear below.</div>
            <MyComponent name="from inside MyComponent" />
        </StyledContainer>
    </SplunkThemeProvider>
);
