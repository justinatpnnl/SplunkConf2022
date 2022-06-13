import React, {useState, useEffect} from 'react';

import { ResponsiveSwarmPlot } from '@nivo/swarmplot';

import layout from '@splunk/react-page';
import Heading from '@splunk/react-ui/Heading';
import Paragraph from '@splunk/react-ui/Paragraph';
import Card from '@splunk/react-ui/Card';
import Multiselect from '@splunk/react-ui/Multiselect';
import ControlGroup from '@splunk/react-ui/ControlGroup';
import WaitSpinner from '@splunk/react-ui/WaitSpinner';
import Slider from '@splunk/react-ui/Slider';

import { SplunkThemeProvider } from '@splunk/themes';
import { StyledContainer } from './StartStyles';

import SearchJob from '@splunk/search-job';

function MyDashboard() {
    const [results, setResults] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [groups, setGroups] = useState([ 'Group A', 'Group B', 'Group C' ])
    const [maxSize, setMaxSize] = useState(25);

    function runSearches() {
        SearchJob.fromSavedSearch({
            name: 'demo_data',
            app: 'acme',
            owner: 'nobody'
        })
        .getResults({count: 0})
        .subscribe(job => {
            console.log(job);
            setResults(job.results);
        })
    }

    useEffect(() => {
        runSearches();
    }, [])

    useEffect(() => {
        setFiltered(results.filter(result => groups.includes(result.group)))
    }, [groups, results])

    return (
        <StyledContainer>
            <Heading level={1} style={{marginTop: 0}}>Dashboard Title</Heading>
            <Paragraph>Demo for Splunk .Conf 2022</Paragraph>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <ControlGroup label="Groups to Display" labelPosition="top">
                    <Multiselect values={groups} onChange={(e, {values}) => setGroups(values)}>
                        <Multiselect.Option label="Group A" value="Group A" />
                        <Multiselect.Option label="Group B" value="Group B" />
                        <Multiselect.Option label="Group C" value="Group C" />
                    </Multiselect>
                </ControlGroup>
                <ControlGroup label="Size Slider" labelPosition='top'>
                    <Slider inline min={1} max={50} step={5} value={maxSize} onChange={(e, {value}) => setMaxSize(value)} />
                </ControlGroup>
            </div>
            <Card style={{width: "100%", marginTop: 20}}>
                <Card.Header title="My Custom Visualization" />
                <Card.Body style={{width: "100%", height: 350, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    { results.length == 0 && <WaitSpinner size="medium" />}
                    { results.length > 0 && 
                    <ResponsiveSwarmPlot
                        data={filtered}
                        margin={{ top: 50, bottom: 10, left: 40, right: 40}}
                        groups={["Group A", "Group B", "Group C"]}
                        valueScale={{ type: 'linear', min: 0, max: 500, reverse: false }}
                        axisTop={{tickSize: 20, tickPadding: 10}}
                        axisBottom={false}
                        size={{
                            key: 'count',
                            values: [
                                1,
                                50
                            ],
                            sizes: [
                                1,
                                maxSize
                            ]
                        }}
                    />
                    }
                </Card.Body>
            </Card>
        </StyledContainer>
    )
}

layout(
    <SplunkThemeProvider family="enterprise" density="comfortable" colorScheme={window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark": "light"}>
        <MyDashboard />
    </SplunkThemeProvider>
);
