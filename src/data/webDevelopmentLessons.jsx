import React from "react";

const webDevelopmentLessons = [
    {
        id: 1,
        title: "Introduction to Web Development",

        content: (
            <>
                <p>
                    Web development is the process of creating and maintaining
                    websites and web applications that run on the internet or
                    on local networks.
                </p>

                <p className="mt-4">
                    Modern websites can contain text, images, videos,
                    interactive components, forms, animations, and other
                    features that allow users to interact with information
                    through a browser.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    How Websites Work
                </h2>

                <p className="mt-4">
                    When you visit a website, your browser communicates with a
                    web server to request resources. The server responds with
                    files and data that the browser uses to display the
                    webpage.
                </p>

                <p className="mt-4">
                    The three fundamental technologies used to create websites
                    are HTML, CSS, and JavaScript.
                </p>

                <ul className="mt-4 list-disc pl-6 space-y-2">
                    <li>
                        <strong>HTML</strong> defines the structure and content
                        of a webpage.
                    </li>

                    <li>
                        <strong>CSS</strong> controls the appearance and layout
                        of the webpage.
                    </li>

                    <li>
                        <strong>JavaScript</strong> adds behavior and
                        interactivity.
                    </li>
                </ul>

                <h2 className="mt-8 text-2xl font-bold">
                    Frontend and Backend
                </h2>

                <p className="mt-4">
                    Web development is commonly divided into frontend and
                    backend development.
                </p>

                <p className="mt-4">
                    Frontend development focuses on what users see and
                    interact with in the browser. Backend development focuses
                    on server-side logic, databases, authentication, and data
                    processing.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Tools Used in Web Development
                </h2>

                <p className="mt-4">
                    Developers commonly use code editors, browsers,
                    developer tools, version control systems, package
                    managers, and frameworks to build modern websites.
                </p>
            </>
        ),
    },

    {
        id: 2,
        title: "HTML Fundamentals",

        content: (
            <>
                <p>
                    HTML, or HyperText Markup Language, is used to structure
                    content on a webpage.
                </p>

                <p className="mt-4">
                    HTML uses elements and tags to describe different types of
                    content such as headings, paragraphs, links, images, lists,
                    tables, and forms.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Basic HTML Structure
                </h2>

                <p className="mt-4">
                    A typical HTML document contains a document type
                    declaration, an HTML element, a head section, and a body
                    section.
                </p>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto">
{`<!DOCTYPE html>
<html>
    <head>
        <title>My Website</title>
    </head>

    <body>
        <h1>Hello World</h1>
        <p>Welcome to my website.</p>
    </body>
</html>`}
                </pre>

                <h2 className="mt-8 text-2xl font-bold">
                    Common HTML Elements
                </h2>

                <ul className="mt-4 list-disc pl-6 space-y-2">
                    <li>
                        <strong>&lt;h1&gt;</strong> to
                        <strong> &lt;h6&gt;</strong> – headings
                    </li>

                    <li>
                        <strong>&lt;p&gt;</strong> – paragraphs
                    </li>

                    <li>
                        <strong>&lt;a&gt;</strong> – links
                    </li>

                    <li>
                        <strong>&lt;img&gt;</strong> – images
                    </li>

                    <li>
                        <strong>&lt;ul&gt;</strong> and
                        <strong> &lt;ol&gt;</strong> – lists
                    </li>

                    <li>
                        <strong>&lt;button&gt;</strong> – buttons
                    </li>

                    <li>
                        <strong>&lt;form&gt;</strong> – forms
                    </li>
                </ul>

                <h2 className="mt-8 text-2xl font-bold">
                    Semantic HTML
                </h2>

                <p className="mt-4">
                    Semantic elements describe the purpose of their content.
                    Examples include header, nav, main, section, article, and
                    footer.
                </p>

                <p className="mt-4">
                    Using semantic HTML can make websites easier to understand,
                    maintain, and navigate.
                </p>
            </>
        ),
    },

    {
        id: 3,
        title: "CSS Styling",

        content: (
            <>
                <p>
                    CSS, or Cascading Style Sheets, controls the visual
                    presentation of HTML elements.
                </p>

                <p className="mt-4">
                    CSS can be used to control colors, fonts, spacing,
                    borders, layouts, animations, and responsive behavior.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    CSS Syntax
                </h2>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto">
{`p {
    color: blue;
    font-size: 18px;
}`}
                </pre>

                <p className="mt-4">
                    A CSS rule contains a selector and one or more
                    declarations. The selector determines which HTML elements
                    are affected.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    The Box Model
                </h2>

                <p className="mt-4">
                    Every HTML element can be understood through the CSS box
                    model. It consists of content, padding, border, and
                    margin.
                </p>

                <ul className="mt-4 list-disc pl-6 space-y-2">
                    <li>
                        <strong>Content</strong> – the actual information
                        inside the element.
                    </li>

                    <li>
                        <strong>Padding</strong> – space between the content
                        and border.
                    </li>

                    <li>
                        <strong>Border</strong> – surrounds the element.
                    </li>

                    <li>
                        <strong>Margin</strong> – space outside the element.
                    </li>
                </ul>

                <h2 className="mt-8 text-2xl font-bold">
                    CSS Layout
                </h2>

                <p className="mt-4">
                    CSS provides layout systems such as Flexbox and CSS Grid.
                    These tools make it easier to arrange elements on a
                    webpage.
                </p>
            </>
        ),
    },

    {
        id: 4,
        title: "Responsive Design",

        content: (
            <>
                <p>
                    Responsive web design allows a website to adapt to
                    different screen sizes and devices.
                </p>

                <p className="mt-4">
                    A responsive website should provide a usable experience
                    on desktop computers, tablets, and mobile phones.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Why Responsive Design Matters
                </h2>

                <p className="mt-4">
                    Users access websites from many different devices.
                    Designing only for one screen size can cause content to
                    become difficult to read or interact with.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Media Queries
                </h2>

                <p className="mt-4">
                    CSS media queries allow developers to apply different
                    styles depending on characteristics such as the width of
                    the viewport.
                </p>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto">
{`@media (max-width: 768px) {
    .container {
        padding: 20px;
    }
}`}
                </pre>

                <h2 className="mt-8 text-2xl font-bold">
                    Responsive Layout Techniques
                </h2>

                <ul className="mt-4 list-disc pl-6 space-y-2">
                    <li>Flexible widths</li>
                    <li>Flexbox</li>
                    <li>CSS Grid</li>
                    <li>Media queries</li>
                    <li>Responsive images</li>
                    <li>Mobile-friendly navigation</li>
                </ul>
            </>
        ),
    },

    {
        id: 5,
        title: "JavaScript Basics",

        content: (
            <>
                <p>
                    JavaScript is a programming language commonly used to add
                    interactivity and dynamic behavior to websites.
                </p>

                <p className="mt-4">
                    Unlike HTML and CSS, JavaScript can perform calculations,
                    respond to user actions, modify webpage content, and
                    communicate with external services.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Variables
                </h2>

                <p className="mt-4">
                    Variables allow programs to store information that can be
                    used later.
                </p>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto">
{`const name = "Angela";
let age = 19;

console.log(name);
console.log(age);`}
                </pre>

                <h2 className="mt-8 text-2xl font-bold">
                    Functions
                </h2>

                <p className="mt-4">
                    Functions are reusable blocks of code designed to perform a
                    particular task.
                </p>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto">
{`function greet(name) {
    return "Hello " + name;
}

console.log(greet("User"));`}
                </pre>

                <h2 className="mt-8 text-2xl font-bold">
                    Conditional Statements
                </h2>

                <p className="mt-4">
                    Conditional statements allow a program to make decisions
                    based on conditions.
                </p>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto">
{`const age = 20;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}`}
                </pre>
            </>
        ),
    },

    {
        id: 6,
        title: "DOM Manipulation",

        content: (
            <>
                <p>
                    The Document Object Model, commonly called the DOM,
                    represents the structure of a webpage as objects that
                    JavaScript can interact with.
                </p>

                <p className="mt-4">
                    JavaScript can use the DOM to find elements, change their
                    content, modify styles, and respond to user interactions.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Selecting Elements
                </h2>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto">
{`const heading = document.querySelector("h1");`}
                </pre>

                <h2 className="mt-8 text-2xl font-bold">
                    Changing Content
                </h2>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto">
{`const heading = document.querySelector("h1");

heading.textContent = "Welcome!";`}
                </pre>

                <h2 className="mt-8 text-2xl font-bold">
                    Handling Events
                </h2>

                <p className="mt-4">
                    Events allow a webpage to respond to actions such as
                    clicking a button, typing into a field, or submitting a
                    form.
                </p>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto">
{`const button = document.querySelector("button");

button.addEventListener("click", () => {
    alert("Button clicked!");
});`}
                </pre>
            </>
        ),
    },

    {
        id: 7,
        title: "Forms and Validation",

        content: (
            <>
                <p>
                    Forms allow users to enter and submit information through
                    a webpage.
                </p>

                <p className="mt-4">
                    Forms are commonly used for registration, login pages,
                    contact forms, searches, surveys, and other interactive
                    features.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Basic Form
                </h2>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto">
{`<form>
    <label>Email:</label>

    <input
        type="email"
        required
    />

    <button type="submit">
        Submit
    </button>
</form>`}
                </pre>

                <h2 className="mt-8 text-2xl font-bold">
                    Form Validation
                </h2>

                <p className="mt-4">
                    Validation checks whether submitted information meets
                    specific requirements before it is processed.
                </p>

                <p className="mt-4">
                    For example, an email field can require a valid email
                    format, while a password field can require a minimum
                    length.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Client-Side and Server-Side Validation
                </h2>

                <p className="mt-4">
                    Client-side validation provides immediate feedback to the
                    user. Server-side validation is also important because
                    information submitted by a browser should not automatically
                    be trusted.
                </p>
            </>
        ),
    },

    {
        id: 8,
        title: "Modern Web Development",

        content: (
            <>
                <p>
                    Modern web development often involves frameworks,
                    libraries, component-based architectures, APIs, and
                    development tools.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    JavaScript Frameworks and Libraries
                </h2>

                <p className="mt-4">
                    Tools such as React can help developers build interactive
                    user interfaces using reusable components.
                </p>

                <p className="mt-4">
                    Instead of placing an entire website into one large file,
                    applications can be divided into smaller components that
                    are easier to manage and reuse.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    APIs
                </h2>

                <p className="mt-4">
                    An Application Programming Interface, or API, allows
                    different software systems to communicate with one
                    another.
                </p>

                <p className="mt-4">
                    A web application can use an API to retrieve information
                    from a server or send data to another system.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Version Control
                </h2>

                <p className="mt-4">
                    Version control systems such as Git allow developers to
                    track changes to their projects and collaborate with
                    others.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Component-Based Development
                </h2>

                <p className="mt-4">
                    Component-based development divides an interface into
                    reusable pieces such as navigation bars, buttons, cards,
                    forms, and pages.
                </p>
            </>
        ),
    },

    {
        id: 9,
        title: "Final Website Project",

        content: (
            <>
                <p>
                    The final project combines the concepts learned throughout
                    the course into a complete website.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Project Requirements
                </h2>

                <p className="mt-4">
                    Create a responsive website containing multiple pages and
                    interactive elements.
                </p>

                <ul className="mt-4 list-disc pl-6 space-y-2">
                    <li>A clear homepage</li>
                    <li>Responsive navigation</li>
                    <li>Well-structured HTML</li>
                    <li>Consistent CSS styling</li>
                    <li>Interactive JavaScript features</li>
                    <li>At least one functional form</li>
                    <li>Responsive layouts</li>
                    <li>Organized and reusable components</li>
                </ul>

                <h2 className="mt-8 text-2xl font-bold">
                    Suggested Project Process
                </h2>

                <ol className="mt-4 list-decimal pl-6 space-y-2">
                    <li>Plan the website structure.</li>
                    <li>Create the HTML structure.</li>
                    <li>Design the layout using CSS.</li>
                    <li>Add responsive behavior.</li>
                    <li>Add JavaScript functionality.</li>
                    <li>Test the website on different screen sizes.</li>
                    <li>Fix errors and improve the user experience.</li>
                </ol>

                <h2 className="mt-8 text-2xl font-bold">
                    What You Have Learned
                </h2>

                <p className="mt-4">
                    By completing this course, you have been introduced to the
                    main technologies and concepts used in web development,
                    including HTML, CSS, JavaScript, responsive design, DOM
                    manipulation, forms, and modern development practices.
                </p>

                <p className="mt-4">
                    You can now use these foundations to continue learning
                    frontend frameworks, backend development, databases, APIs,
                    and other areas of web development.
                </p>
            </>
        ),
    },
];

export default webDevelopmentLessons;