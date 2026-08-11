const uiUxLessons = [
    {
        id: 1,
        title: 'Introduction to UI/UX Design',

        content: (
            <>
                <p>
                    UI/UX design focuses on creating digital products that are
                    useful, understandable, accessible, and enjoyable to use.
                    Although UI and UX are closely related, they focus on
                    different aspects of the user's experience.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    What is UI?
                </h2>

                <p className='mt-4'>
                    UI stands for <strong>User Interface</strong>. It refers to
                    the visual and interactive elements of a digital product.
                    This includes buttons, colors, typography, icons,
                    navigation menus, cards, forms, and layouts.
                </p>

                <p className='mt-4'>
                    A good user interface makes it easy for users to understand
                    what they can do and how they can interact with the
                    application.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    What is UX?
                </h2>

                <p className='mt-4'>
                    UX stands for <strong>User Experience</strong>. It focuses
                    on the overall experience a person has while using a
                    product or service.
                </p>

                <p className='mt-4'>
                    UX considers whether a product is easy to use, efficient,
                    accessible, and capable of helping users accomplish their
                    goals.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    UI vs UX
                </h2>

                <div className='mt-4 overflow-x-auto'>
                    <table className='w-full border-collapse'>
                        <thead>
                            <tr>
                                <th className='border border-neutral-300 dark:border-neutral-700 px-4 py-3 text-left'>
                                    UI
                                </th>
                                <th className='border border-neutral-300 dark:border-neutral-700 px-4 py-3 text-left'>
                                    UX
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className='border border-neutral-300 dark:border-neutral-700 px-4 py-3'>
                                    Focuses on the interface
                                </td>
                                <td className='border border-neutral-300 dark:border-neutral-700 px-4 py-3'>
                                    Focuses on the overall experience
                                </td>
                            </tr>

                            <tr>
                                <td className='border border-neutral-300 dark:border-neutral-700 px-4 py-3'>
                                    Colors, typography, buttons, icons
                                </td>
                                <td className='border border-neutral-300 dark:border-neutral-700 px-4 py-3'>
                                    Usability, accessibility, and user needs
                                </td>
                            </tr>

                            <tr>
                                <td className='border border-neutral-300 dark:border-neutral-700 px-4 py-3'>
                                    Visual design
                                </td>
                                <td className='border border-neutral-300 dark:border-neutral-700 px-4 py-3'>
                                    User journey and interaction
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 className='mt-8 text-2xl font-bold'>
                    Why UI/UX Matters
                </h2>

                <p className='mt-4'>
                    A well-designed product can reduce confusion, improve
                    usability, and help users accomplish tasks more efficiently.
                    Poor design can make even a technically functional
                    application difficult to use.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Key Principles
                </h2>

                <ul className='mt-4 list-disc pl-6 space-y-2'>
                    <li>Keep interfaces simple and understandable.</li>
                    <li>Maintain consistency throughout the application.</li>
                    <li>Provide clear feedback when users perform actions.</li>
                    <li>Make important information easy to find.</li>
                    <li>Consider different types of users and devices.</li>
                </ul>

                <h2 className='mt-8 text-2xl font-bold'>
                    Summary
                </h2>

                <p className='mt-4'>
                    UI focuses primarily on how a product looks and how users
                    interact with its interface, while UX focuses on the
                    broader experience of using the product. Both disciplines
                    work together to create effective digital experiences.
                </p>
            </>
        ),
    },

    {
        id: 2,
        title: 'Color Theory',

        content: (
            <>
                <p>
                    Color is an important part of visual design. Designers use
                    color to communicate information, establish hierarchy,
                    create visual interest, and influence how users perceive
                    an interface.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Primary Colors
                </h2>

                <p className='mt-4'>
                    Traditional color theory identifies red, yellow, and blue
                    as primary colors. These colors can be used as a foundation
                    for creating other colors.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Color Relationships
                </h2>

                <p className='mt-4'>
                    Designers often examine how colors relate to one another.
                    Common relationships include complementary, analogous, and
                    monochromatic color schemes.
                </p>

                <ul className='mt-4 list-disc pl-6 space-y-2'>
                    <li>
                        <strong>Complementary:</strong> Colors positioned
                        opposite each other in a color wheel.
                    </li>

                    <li>
                        <strong>Analogous:</strong> Colors located close to
                        each other.
                    </li>

                    <li>
                        <strong>Monochromatic:</strong> Different shades and
                        variations of a single color.
                    </li>
                </ul>

                <h2 className='mt-8 text-2xl font-bold'>
                    Color in Interfaces
                </h2>

                <p className='mt-4'>
                    In UI design, colors can help distinguish actions,
                    highlight important information, and establish a visual
                    hierarchy.
                </p>

                <p className='mt-4'>
                    For example, a primary button can use a distinctive color
                    so users can quickly identify the main action on a page.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Accessibility
                </h2>

                <p className='mt-4'>
                    Designers should make sure that text and important
                    interface elements have sufficient contrast against their
                    backgrounds. Color should also not be the only way of
                    communicating important information.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Summary
                </h2>

                <p className='mt-4'>
                    Effective use of color can make an interface easier to
                    understand and navigate. Color choices should support the
                    purpose of the interface rather than simply making it look
                    attractive.
                </p>
            </>
        ),
    },

    {
        id: 3,
        title: 'Typography',

        content: (
            <>
                <p>
                    Typography is the practice of arranging and styling text.
                    In UI/UX design, typography affects readability,
                    hierarchy, visual identity, and the overall appearance of
                    an interface.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Font Families
                </h2>

                <p className='mt-4'>
                    Different typefaces communicate different visual styles.
                    Designers commonly choose fonts that match the purpose and
                    personality of the product.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Hierarchy
                </h2>

                <p className='mt-4'>
                    Typography helps users understand which information is
                    more important. Headings, subheadings, body text, and
                    supporting information can use different sizes and weights
                    to establish hierarchy.
                </p>

                <div className='mt-6 space-y-3'>
                    <p className='text-3xl font-bold'>
                        Main Heading
                    </p>

                    <p className='text-xl font-semibold'>
                        Section Heading
                    </p>

                    <p className='text-base'>
                        Body text provides the main information that users
                        need to read.
                    </p>

                    <p className='text-sm text-neutral-500'>
                        Supporting information
                    </p>
                </div>

                <h2 className='mt-8 text-2xl font-bold'>
                    Readability
                </h2>

                <p className='mt-4'>
                    Text should be comfortable to read. Designers should
                    consider font size, line height, spacing, contrast, and
                    the width of text blocks.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Consistency
                </h2>

                <p className='mt-4'>
                    A consistent typography system helps users understand the
                    structure of an application and creates a more organized
                    visual experience.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Summary
                </h2>

                <p className='mt-4'>
                    Good typography makes content easier to scan, understand,
                    and navigate. It should support both usability and the
                    visual identity of the product.
                </p>
            </>
        ),
    },

    {
        id: 4,
        title: 'Wireframing',

        content: (
            <>
                <p>
                    A wireframe is a simplified representation of a webpage
                    or application screen. It focuses on structure and
                    functionality rather than detailed visual design.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Purpose of Wireframes
                </h2>

                <p className='mt-4'>
                    Wireframes help designers plan where important elements
                    such as navigation, headings, buttons, images, and content
                    will be placed.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Low-Fidelity Wireframes
                </h2>

                <p className='mt-4'>
                    Low-fidelity wireframes are simple and usually contain
                    basic shapes, placeholders, and labels. They are useful
                    during the early stages of a project.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    High-Fidelity Designs
                </h2>

                <p className='mt-4'>
                    High-fidelity designs contain more detailed visual
                    elements such as colors, typography, images, and
                    interactions.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Benefits
                </h2>

                <ul className='mt-4 list-disc pl-6 space-y-2'>
                    <li>Helps organize content.</li>
                    <li>Allows problems to be discovered early.</li>
                    <li>Makes discussions with team members easier.</li>
                    <li>Provides a foundation for the final interface.</li>
                </ul>

                <h2 className='mt-8 text-2xl font-bold'>
                    Summary
                </h2>

                <p className='mt-4'>
                    Wireframing allows designers to focus on the structure and
                    user flow of a product before spending time on detailed
                    visual design.
                </p>
            </>
        ),
    },

    {
        id: 5,
        title: 'User Research',

        content: (
            <>
                <p>
                    User research is the process of learning about the people
                    who will use a product. It helps designers understand
                    users' goals, needs, problems, and expectations.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Why User Research Matters
                </h2>

                <p className='mt-4'>
                    Designing based only on assumptions can result in products
                    that do not solve real user problems. Research provides
                    evidence that can guide design decisions.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Common Research Methods
                </h2>

                <ul className='mt-4 list-disc pl-6 space-y-2'>
                    <li>Interviews</li>
                    <li>Surveys</li>
                    <li>Observation</li>
                    <li>Usability testing</li>
                    <li>Analysis of existing user data</li>
                </ul>

                <h2 className='mt-8 text-2xl font-bold'>
                    User Personas
                </h2>

                <p className='mt-4'>
                    A user persona is a representation of a target user based
                    on research. Personas can help design teams keep the needs
                    of their intended users in mind.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Summary
                </h2>

                <p className='mt-4'>
                    User research helps designers make informed decisions by
                    understanding the people they are designing for.
                </p>
            </>
        ),
    },

    {
        id: 6,
        title: 'Prototyping',

        content: (
            <>
                <p>
                    A prototype is an interactive representation of a product
                    that allows designers and users to explore how the final
                    product might work.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Why Prototype?
                </h2>

                <p className='mt-4'>
                    Prototypes allow teams to test ideas before implementing
                    the complete product. Problems can be discovered while
                    changes are still relatively easy to make.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Prototype Fidelity
                </h2>

                <p className='mt-4'>
                    Prototypes can range from simple sketches to highly
                    detailed interactive interfaces.
                </p>

                <ul className='mt-4 list-disc pl-6 space-y-2'>
                    <li>
                        <strong>Low fidelity:</strong> Simple and focused on
                        structure.
                    </li>

                    <li>
                        <strong>Medium fidelity:</strong> Contains more
                        structure and interaction.
                    </li>

                    <li>
                        <strong>High fidelity:</strong> Closely resembles the
                        intended final product.
                    </li>
                </ul>

                <h2 className='mt-8 text-2xl font-bold'>
                    Testing Prototypes
                </h2>

                <p className='mt-4'>
                    Users can interact with prototypes to identify confusing
                    navigation, unclear actions, or other usability problems.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Summary
                </h2>

                <p className='mt-4'>
                    Prototyping provides a practical way to explore and test
                    design ideas before building the final product.
                </p>
            </>
        ),
    },

    {
        id: 7,
        title: 'Design Systems',

        content: (
            <>
                <p>
                    A design system is a collection of reusable design
                    components, guidelines, and standards used to create
                    consistent interfaces.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Components
                </h2>

                <p className='mt-4'>
                    Common components include buttons, input fields, cards,
                    navigation elements, dialogs, and alerts.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Design Tokens
                </h2>

                <p className='mt-4'>
                    Design tokens can represent values such as colors,
                    spacing, typography, borders, and shadows. They help keep
                    the interface consistent.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Benefits
                </h2>

                <ul className='mt-4 list-disc pl-6 space-y-2'>
                    <li>Improves consistency.</li>
                    <li>Reduces duplicated design work.</li>
                    <li>Makes interfaces easier to maintain.</li>
                    <li>Helps teams work using shared standards.</li>
                </ul>

                <h2 className='mt-8 text-2xl font-bold'>
                    Summary
                </h2>

                <p className='mt-4'>
                    Design systems provide a reusable foundation for building
                    consistent and scalable user interfaces.
                </p>
            </>
        ),
    },

    {
        id: 8,
        title: 'Usability Testing',

        content: (
            <>
                <p>
                    Usability testing evaluates how easily users can complete
                    tasks using a product or interface.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    What to Test
                </h2>

                <p className='mt-4'>
                    A usability test can examine navigation, forms, buttons,
                    content organization, and other important interactions.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Testing Process
                </h2>

                <ol className='mt-4 list-decimal pl-6 space-y-2'>
                    <li>Define the goal of the test.</li>
                    <li>Choose representative users.</li>
                    <li>Create realistic tasks.</li>
                    <li>Observe users completing the tasks.</li>
                    <li>Record problems and feedback.</li>
                    <li>Use the findings to improve the design.</li>
                </ol>

                <h2 className='mt-8 text-2xl font-bold'>
                    Important Principle
                </h2>

                <p className='mt-4'>
                    The goal of usability testing is not to test whether the
                    user is good at using the product. Instead, it helps the
                    design team identify areas where the product itself can be
                    improved.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Summary
                </h2>

                <p className='mt-4'>
                    Usability testing provides direct feedback about how users
                    interact with a product and helps designers identify
                    opportunities for improvement.
                </p>
            </>
        ),
    },
];

export default uiUxLessons;