import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function ControlledTabsExample() {
    const [key, setKey] = useState('home');

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
        >
            <Tab eventKey="tcs" title="TCS">

                <div>What is HTML?</div>
                <div>Difference between HTML and HTML5?</div>
                <div>What are semantic tags?</div>
                <div>How do you make a page responsive?</div>
                <div>Explain meta tag.</div>

            </Tab>
            <Tab eventKey="infosys" title="Infosys">
                <div>What is the purpose of the form tag?</div>
                <div>Difference between div and span</div>
                <div>What is the use of iframe?</div>
                <div>How do you include external CSS?</div>
                <div>What are block and inline elements?</div>

            </Tab>
            <Tab eventKey="wipro" title="Wipro" >
                <div>What is the purpose of the form tag?</div>
                <div>Difference between div and span</div>
                <div>What is the use of iframe?</div>
                <div>How do you include external CSS?</div>
                <div>What are block and inline elements?</div>
                
            </Tab>
        </Tabs>
    );
}

export default ControlledTabsExample;