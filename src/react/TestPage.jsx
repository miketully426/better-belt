import React, {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const TestPage = () => {
const [content, setContent] = useState('Mike');

const handleClick = () => {
    setContent('Dark Mike');
}


return (
    <div>
        <h1 onClick={handleClick}>Hello, my name is {content}</h1>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Click me!
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="/">Home</Dropdown.Item>
                <Dropdown.Item href="https://www.google.com">Google</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>
)
}

export default TestPage; 