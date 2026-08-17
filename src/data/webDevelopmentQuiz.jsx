const webDevelopmentQuiz = [
    {
        id: 1,
        question: 'What does HTML stand for?',
        options: [
            'HyperText Markup Language',
            'HighText Machine Language',
            'Hyperlink Text Management Language',
            'Home Tool Markup Language'
        ],
        answer: 'HyperText Markup Language',
        explanation: 'HTML stands for HyperText Markup Language. It is used to structure the content of webpages.'
    },
    {
        id: 2,
        question: 'Which HTML element is used to create a hyperlink?',
        options: [
            '<link>',
            '<href>',
            '<url>',
            '<a>'
        ],
        answer: '<a>',
        explanation: 'The <a> element is used to create hyperlinks that allow users to navigate to another page or resource.'
    },
    {
        id: 3,
        question: 'Which language is primarily used to style HTML pages?',
        options: [
            'Python',
            'CSS',
            'SQL',
            'Java'
        ],
        answer: 'CSS',
        explanation: 'CSS, or Cascading Style Sheets, controls the visual appearance and layout of HTML elements, including colors, fonts, spacing, and borders.'
    },
    {
        id: 4,
        question: 'Which JavaScript keyword declares a variable that cannot be reassigned?',
        options: [
            'const',
            'let',
            'var',
            'static'
        ],
        answer: 'const',
        explanation: 'The const keyword declares a variable that cannot be reassigned after it has been given a value.'
    },
    {
        id: 5,
        question: 'Which CSS property is used to change the text color?',
        options: [
            'font-color',
            'color',
            'text-color',
            'foreground'
        ],
        answer: 'color',
        explanation: 'The color property is used in CSS to control the color of text.'
    },
    {
        id: 6,
        question: 'Which HTML element is used to display images?',
        options: [
            '<image>',
            '<src>',
            '<img src="image.jpg">',
            '<picture>'
        ],
        answer: '<img src="image.jpg">',
        explanation: 'The <img> element is used to display images on a webpage. The src attribute specifies the image source.'
    },
    {
        id: 7,
        question: 'What is the main purpose of HTML in web development?',
        options: [
            'To control webpage colors',
            'To add animations',
            'To define the structure and content of a webpage',
            'To communicate with databases'
        ],
        answer: 'To define the structure and content of a webpage',
        explanation: 'HTML defines the structure and content of a webpage, including headings, paragraphs, links, images, lists, and forms.'
    },
    {
        id: 8,
        question: 'Which of the following is a semantic HTML element?',
        options: [
            '<div>',
            '<span>',
            '<section>',
            '<style>'
        ],
        answer: '<section>',
        explanation: 'The <section> element is semantic because it describes a section of related content. Other examples include <header>, <nav>, <main>, <article>, and <footer>.'
    },
    {
        id: 9,
        question: 'Which CSS layout systems are specifically mentioned in the course?',
        options: [
            'Flexbox and CSS Grid',
            'Floats and Positioning',
            'Tables and Inline-block',
            'Bootstrap and Tailwind'
        ],
        answer: 'Flexbox and CSS Grid',
        explanation: 'Flexbox and CSS Grid are CSS layout systems used to arrange elements on a webpage.'
    },
    {
        id: 10,
        question: 'A developer wants a website to change its styling when the viewport becomes 768px or smaller. Which CSS feature should be used?',
        options: [
            'Media Queries',
            'Keyframes',
            'Transitions',
            'Variables'
        ],
        answer: 'Media Queries',
        explanation: 'CSS media queries allow developers to apply different styles depending on characteristics such as the width of the viewport.'
    },
    {
        id: 11,
        question: 'A developer divides a website into reusable navigation bars, buttons, cards, forms, and pages. Which development approach is being used?',
        options: [
            'Component-based development',
            'Server-side validation',
            'Responsive image design',
            'Semantic styling'
        ],
        answer: 'Component-based development',
        explanation: 'Component-based development divides an interface into reusable pieces such as navigation bars, buttons, cards, forms, and pages.'
    },
    {
        id: 12,
        question: 'What is a common approach to responsive navigation design on mobile devices?',
        options: [
            'Display all navigation links in a single line',
            'Hide navigation completely on mobile',
            'Implement a hamburger menu that expands on click',
            'Use larger font sizes for navigation links'
        ],
        answer: 'Implement a hamburger menu that expands on click',
        explanation: 'A mobile-friendly navigation approach can use a compact menu that expands when the user interacts with it, helping navigation fit smaller screens.'
    },
    {
        id: 13,
        question: (
            <>
                <p>What will this code output?</p>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto text-left">
                    {`const age = 16;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}`}
                </pre>
            </>
        ),
        options: [
            'Adult',
            'Minor',
            '16',
            'Nothing'
        ],
        answer: 'Minor',
        explanation: 'The value of age is 16. Since 16 is not greater than or equal to 18, the if condition is false and the else block prints "Minor".'
    },
    {
        id: 14,
        question: 'What does document.querySelector("h1") do?',
        options: [
            'Creates a new <h1>',
            'Deletes every heading',
            'Selects an <h1> element',
            'Changes the headings color'
        ],
        answer: 'Selects an <h1> element',
        explanation: 'document.querySelector("h1") searches the DOM and selects the first <h1> element that matches the selector.'
    },
    {
        id: 15,
        question: 'What is the main purpose of an API in a web application?',
        options: [
            'To style webpages',
            'To structure HTML',
            'To allow different software systems to communicate',
            'To create CSS layouts'
        ],
        answer: 'To allow different software systems to communicate',
        explanation: 'An API, or Application Programming Interface, allows different software systems to communicate with one another. A web application can use an API to retrieve or send data.'
    },
    {
        id: 16,
        question: 'Which part of the CSS box model represents the space between the content and the border?',
        options: [
            'Margin',
            'Padding',
            'Content',
            'Border'
        ],
        answer: 'Padding',
        explanation: 'Padding is the space between an element’s content and its border.'
    },
    {
        id: 17,
        question: 'Which part of the CSS box model represents the space outside an element?',
        options: [
            'Padding',
            'Content',
            'Margin',
            'Border'
        ],
        answer: 'Margin',
        explanation: 'Margin is the space outside an element. It separates the element from surrounding elements.'
    },
    {
        id: 18,
        question: (
            <>
                <p>What will this code output?</p>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto text-left">
                    {`function greet(name) {
    return "Hello " + name;
}

console.log(greet("User"));`}
                </pre>
            </>
        ),
        options: [
            'Hello',
            'User',
            'Hello User',
            'name'
        ],
        answer: 'Hello User',
        explanation: 'The greet function combines "Hello " with the name passed to it. Since "User" is passed as the argument, the function returns "Hello User".'
    },
    {
        id: 19,
        question: (
            <>
                <p>What does this code do?</p>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto text-left">
                    {`const heading = document.querySelector("h1");

heading.textContent = "Welcome!";`}
                </pre>
            </>
        ),
        options: [
            'Creates a new h1 element',
            'Changes the text of the h1 element',
            'Deletes the h1 element',
            'Changes the webpage title'
        ],
        answer: 'Changes the text of the h1 element',
        explanation: 'querySelector("h1") selects the h1 element, while textContent changes the text inside that element to "Welcome!".'
    },
    {
        id: 20,
        question: 'Which JavaScript method is used in the course to respond to events such as a button click?',
        options: [
            'querySelector()',
            'textContent',
            'addEventListener()',
            'console.log()'
        ],
        answer: 'addEventListener()',
        explanation: 'addEventListener() allows JavaScript to respond to events such as button clicks, typing, or form submission.'
    },
    {
        id: 21,
        question: 'Why is form validation used in web applications?',
        options: [
            'To check whether submitted information meets specific requirements',
            'To change the color of a webpage',
            'To create database tables',
            'To automatically make a website responsive'
        ],
        answer: 'To check whether submitted information meets specific requirements',
        explanation: 'Form validation checks whether submitted information meets specific requirements before it is processed. For example, an email field can require a valid email format.'
    },
    {
        id: 22,
        question: 'Why is server-side validation important even when client-side validation is used?',
        options: [
            'Because browser-submitted information should not automatically be trusted',
            'Because client-side validation cannot display messages',
            'Because server-side validation replaces HTML',
            'Because it automatically creates passwords'
        ],
        answer: 'Because browser-submitted information should not automatically be trusted',
        explanation: 'Client-side validation provides immediate feedback, but server-side validation is also important because information submitted by a browser should not automatically be trusted.'
    },
    {
        id: 23,
        question: 'Which of the following can a web application use an API to do?',
        options: [
            'Retrieve information from a server',
            'Change HTML into CSS',
            'Replace all JavaScript',
            'Remove the need for a browser'
        ],
        answer: 'Retrieve information from a server',
        explanation: 'A web application can use an API to retrieve information from a server or send data to another system.'
    },
    {
        id: 24,
        question: 'What is one advantage of using reusable components in a web application?',
        options: [
            'They make parts of an interface easier to reuse and manage',
            'They remove the need for JavaScript',
            'They prevent websites from working on mobile devices',
            'They eliminate the need for HTML'
        ],
        answer: 'They make parts of an interface easier to reuse and manage',
        explanation: 'Component-based development makes interfaces easier to manage by dividing them into reusable pieces such as buttons, cards, forms, navigation bars, and pages.'
    },
    {
        id: 25,
        question: 'What is the main purpose of Git in web development?',
        options: [
            'To style webpages',
            'To track project changes and support collaboration',
            'To create HTML elements',
            'To validate forms'
        ],
        answer: 'To track project changes and support collaboration',
        explanation: 'Git is a version control system that allows developers to track changes to their projects and collaborate with others.'
    }
]

export default webDevelopmentQuiz