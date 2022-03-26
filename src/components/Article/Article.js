import React from 'react';
import './Article.css'

const Article = () => {
    return (
        <div className='article-container'>
            <h1 className='article-title'>Frequently Asked Questions</h1>
            <div>
                <h3>How does react work?</h3>
                <p>The ability to mix HTML code with JavaScript is one of the benefits of using React. By declaring the Element function in React, users may generate a DOM node representation. HTML code has an XML-like syntax. React utilizes className instead of the standard DOM class. A name, children, and attributes are all included in JSX tags. Curly brackets must be used to write numerical values and expressions. JSX attributes, like JavaScript, use quote marks to represent strings.</p>
            </div>
            <div>
                <h3>What are the differences between props and state?</h3>
                <p>In props, the Data is passed from one component to another and in state,The Data is passed within the component only. Props is Immutable (cannot be modified) although state is Mutable ( can be modified). Props can be used with state and functional components. State can be used only with the state components/class component. Props are read-only. State is both read and write.</p>
            </div>
            <div>
                <h3>How does useState work? </h3>
                <p>The useState() Hook enables state variables to be used in functional components.The useState hook is a special function that accepts the starting state as an input and returns a two-entry array. Hooks should be used at the top level of React functions at all times. This rule guarantees that Hooks are called in the same sequence whenever a component renders.Variables normally "disappear" when a function is exited, but React preserves state variables.</p>
            </div>
        </div>
    );
};

export default Article;