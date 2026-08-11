const cyberSecurityLessons = [
    {
        id: 1,
        title: "Introduction to Cybersecurity",
        content: (
            <>
                <p>
                    Cybersecurity is the practice of protecting computers,
                    networks, applications, devices, and data from unauthorized
                    access, attacks, damage, or disruption.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Why Is Cybersecurity Important?
                </h2>

                <p className="mt-4">
                    Modern organizations rely heavily on digital systems.
                    Personal information, financial records, business
                    operations, and communications are often stored and
                    processed digitally. Cybersecurity helps protect these
                    systems and the information they contain.
                </p>

                <p className="mt-4">
                    A strong cybersecurity strategy can reduce the risk of
                    unauthorized access, data loss, service disruption, and
                    other security incidents.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    The CIA Triad
                </h2>

                <p className="mt-4">
                    The CIA triad is one of the fundamental concepts in
                    cybersecurity. It consists of three principles:
                </p>

                <ul className="mt-4 list-disc pl-6 space-y-2">
                    <li>
                        <strong>Confidentiality</strong> — information should
                        only be accessible to authorized individuals.
                    </li>

                    <li>
                        <strong>Integrity</strong> — information should remain
                        accurate and protected from unauthorized modification.
                    </li>

                    <li>
                        <strong>Availability</strong> — systems and information
                        should be accessible when authorized users need them.
                    </li>
                </ul>

                <h2 className="mt-8 text-2xl font-bold">
                    Common Cybersecurity Threats
                </h2>

                <p className="mt-4">
                    Some common cybersecurity threats include malware,
                    phishing, social engineering, weak passwords, and
                    unauthorized access.
                </p>

                <p className="mt-4">
                    Understanding these threats is an important first step
                    toward developing good cybersecurity practices.
                </p>
            </>
        ),
    },

    {
        id: 2,
        title: "Types of Cybersecurity Threats",
        content: (
            <>
                <p>
                    Cybersecurity threats are actions or events that can
                    compromise the confidentiality, integrity, or availability
                    of information and systems.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Malware
                </h2>

                <p className="mt-4">
                    Malware is malicious software designed to disrupt systems,
                    damage data, or gain unauthorized access.
                </p>

                <p className="mt-4">
                    Common examples include viruses, worms, trojans, spyware,
                    and ransomware.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Phishing
                </h2>

                <p className="mt-4">
                    Phishing is a form of social engineering in which attackers
                    attempt to trick users into revealing information or
                    interacting with something unsafe.
                </p>

                <p className="mt-4">
                    Phishing messages may appear to come from legitimate
                    organizations, services, or individuals.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Social Engineering
                </h2>

                <p className="mt-4">
                    Social engineering focuses on manipulating people rather
                    than directly attacking a technical system.
                </p>

                <p className="mt-4">
                    Attackers may use deception, impersonation, or urgency to
                    persuade someone to reveal information or perform an
                    unsafe action.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Weak Passwords
                </h2>

                <p className="mt-4">
                    Weak, predictable, or reused passwords can make accounts
                    easier to compromise.
                </p>

                <p className="mt-4">
                    Using strong and unique passwords for different accounts is
                    an important security practice.
                </p>
            </>
        ),
    },

    {
        id: 3,
        title: "Network Security Fundamentals",
        content: (
            <>
                <p>
                    Network security focuses on protecting devices, systems,
                    applications, and information that communicate over a
                    network.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    What Is a Network?
                </h2>

                <p className="mt-4">
                    A network is a collection of connected devices that can
                    communicate and share resources. Examples include home
                    networks, school networks, business networks, and the
                    internet.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Firewalls
                </h2>

                <p className="mt-4">
                    A firewall is a security mechanism that controls network
                    traffic according to defined rules.
                </p>

                <p className="mt-4">
                    Firewalls can help restrict unauthorized connections while
                    allowing legitimate network communication.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Secure Communication
                </h2>

                <p className="mt-4">
                    Sensitive information should be protected while it is being
                    transmitted between systems.
                </p>

                <p className="mt-4">
                    Encryption can help protect information by transforming it
                    into a form that unauthorized parties cannot easily
                    understand.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Network Monitoring
                </h2>

                <p className="mt-4">
                    Network monitoring involves observing network activity to
                    identify unusual behavior, performance problems, and
                    potential security issues.
                </p>
            </>
        ),
    },

    {
        id: 4,
        title: "Authentication and Access Control",
        content: (
            <>
                <p>
                    Authentication and access control are important parts of
                    cybersecurity because they help ensure that users only
                    access resources they are authorized to use.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Authentication
                </h2>

                <p className="mt-4">
                    Authentication is the process of verifying the identity of
                    a user, device, or system.
                </p>

                <p className="mt-4">
                    Passwords are one common authentication method. Other
                    methods can include security keys and additional
                    verification factors.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Authorization
                </h2>

                <p className="mt-4">
                    Authorization determines what an authenticated user is
                    allowed to access or what actions they are allowed to
                    perform.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Authentication vs Authorization
                </h2>

                <ul className="mt-4 list-disc pl-6 space-y-2">
                    <li>
                        <strong>Authentication</strong> asks:
                        "Who are you?"
                    </li>

                    <li>
                        <strong>Authorization</strong> asks:
                        "What are you allowed to access?"
                    </li>
                </ul>

                <h2 className="mt-8 text-2xl font-bold">
                    Principle of Least Privilege
                </h2>

                <p className="mt-4">
                    The principle of least privilege means users should receive
                    only the permissions necessary to perform their required
                    tasks.
                </p>

                <p className="mt-4">
                    Limiting unnecessary permissions can reduce the potential
                    impact of an account or system being compromised.
                </p>
            </>
        ),
    },

    {
        id: 5,
        title: "Data Protection and Encryption",
        content: (
            <>
                <p>
                    Data protection involves keeping information safe from
                    unauthorized access, modification, loss, or destruction.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    What Is Encryption?
                </h2>

                <p className="mt-4">
                    Encryption transforms readable information into an encoded
                    form. The encoded information can then be converted back
                    into its original form using the appropriate key or
                    mechanism.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Data at Rest
                </h2>

                <p className="mt-4">
                    Data at rest refers to information that is stored on
                    devices or systems, such as databases, hard drives, and
                    storage services.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Data in Transit
                </h2>

                <p className="mt-4">
                    Data in transit refers to information moving between
                    systems or devices through a network.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Why Encryption Matters
                </h2>

                <p className="mt-4">
                    Encryption can help reduce the risk of sensitive information
                    being understood by unauthorized parties if the protected
                    data is accessed or intercepted.
                </p>
            </>
        ),
    },

    {
        id: 6,
        title: "Web Security Fundamentals",
        content: (
            <>
                <p>
                    Web security focuses on protecting websites, web
                    applications, servers, and users from security threats.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Secure Websites
                </h2>

                <p className="mt-4">
                    Websites that handle sensitive information should use
                    appropriate security measures to protect communication and
                    user data.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Input Validation
                </h2>

                <p className="mt-4">
                    Applications should validate user input before processing
                    it. This helps prevent unexpected or harmful data from
                    being processed by the application.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Access Control
                </h2>

                <p className="mt-4">
                    Web applications should ensure that users can only access
                    pages, resources, and actions that they are authorized to
                    use.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Keeping Dependencies Updated
                </h2>

                <p className="mt-4">
                    Web applications often depend on third-party libraries and
                    frameworks. Keeping these components updated can help
                    address known security issues.
                </p>
            </>
        ),
    },

    {
        id: 7,
        title: "Cybersecurity Best Practices",
        content: (
            <>
                <p>
                    Cybersecurity is not only about security software.
                    Everyday decisions made by users also play an important
                    role in protecting information and systems.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Use Strong Passwords
                </h2>

                <p className="mt-4">
                    Use strong and unique passwords for important accounts.
                    Avoid using the same password across multiple services.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Enable Additional Account Protection
                </h2>

                <p className="mt-4">
                    When available, additional authentication factors can
                    provide another layer of protection for an account.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Keep Software Updated
                </h2>

                <p className="mt-4">
                    Operating systems, applications, browsers, and other
                    software should be kept updated to receive important
                    security fixes.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Be Careful With Links and Attachments
                </h2>

                <p className="mt-4">
                    Avoid interacting with unexpected links, files, or
                    messages. Verify the source before taking action.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Protect Personal Information
                </h2>

                <p className="mt-4">
                    Avoid unnecessarily sharing sensitive personal information
                    online. Consider what information a website or service
                    actually needs before providing it.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Back Up Important Data
                </h2>

                <p className="mt-4">
                    Keeping appropriate backups can help users recover important
                    information if data is accidentally deleted, corrupted, or
                    otherwise becomes unavailable.
                </p>
            </>
        ),
    },

    {
        id: 8,
        title: "Cybersecurity Awareness",
        content: (
            <>
                <p>
                    Cybersecurity awareness means understanding common
                    security risks and knowing how to respond responsibly.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Think Before You Click
                </h2>

                <p className="mt-4">
                    Before opening a link or attachment, consider whether the
                    message is expected and whether the sender is trustworthy.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Verify Requests
                </h2>

                <p className="mt-4">
                    Requests for passwords, personal information, or unusual
                    actions should be verified through a trusted channel.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Report Suspicious Activity
                </h2>

                <p className="mt-4">
                    Suspicious messages, unusual account activity, or potential
                    security problems should be reported to the appropriate
                    person or organization.
                </p>

                <h2 className="mt-8 text-2xl font-bold">
                    Final Takeaway
                </h2>

                <p className="mt-4">
                    Cybersecurity is a continuous process. Learning the
                    fundamentals, practicing safe habits, and staying informed
                    can help users make better decisions when working with
                    digital systems.
                </p>
            </>
        ),
    },
];

export default cyberSecurityLessons;