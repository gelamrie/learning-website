const cyberSecurityQuiz = [
    {
        id: 1,
        question: 'What is cybersecurity?',
        options: [
            'The practice of protecting systems, networks, and information',
            'The process of designing websites',
            'The process of creating databases',
            'The process of developing mobile applications'
        ],
        answer: 'The practice of protecting systems, networks, and information',
        explanation: 'Cybersecurity is the practice of protecting computers, networks, applications, devices, and data from unauthorized access, attacks, damage, or disruption.'
    },
    {
        id: 2,
        question: 'Which part of the CIA triad ensures that information is accessible when needed?',
        options: [
            'Confidentiality',
            'Integrity',
            'Authentication',
            'Availability'
        ],
        answer: 'Availability',
        explanation: 'Availability means that systems and information should be accessible when authorized users need them.'
    },
    {
        id: 3,
        question: 'What is phishing?',
        options: [
            'A social engineering technique used to trick people into revealing information',
            'A method of encrypting files',
            'A type of database',
            'A network performance tool'
        ],
        answer: 'A social engineering technique used to trick people into revealing information',
        explanation: 'Phishing is a form of social engineering in which attackers attempt to trick users into revealing information or interacting with something unsafe.'
    },
    {
        id: 4,
        question: 'What is the main purpose of a firewall?',
        options: [
            'To create passwords',
            'To monitor and control network traffic',
            'To store files permanently',
            'To increase internet speed'
        ],
        answer: 'To monitor and control network traffic',
        explanation: 'A firewall is a security mechanism that controls network traffic according to defined rules. It can help restrict unauthorized connections while allowing legitimate communication.'
    },
    {
        id: 5,
        question: 'Which practice helps protect an account from unauthorized access?',
        options: [
            'Sharing passwords with others',
            'Using the same password everywhere',
            'Using strong and unique passwords',
            'Disabling security updates'
        ],
        answer: 'Using strong and unique passwords',
        explanation: 'Weak, predictable, or reused passwords can make accounts easier to compromise. Using strong and unique passwords is an important cybersecurity practice.'
    },
    {
        id: 6,
        question: 'Which principle of the CIA triad protects information from unauthorized modification?',
        options: [
            'Confidentiality',
            'Integrity',
            'Availability',
            'Authentication'
        ],
        answer: 'Integrity',
        explanation: 'Integrity means that information should remain accurate and protected from unauthorized modification.'
    },
    {
        id: 7,
        question: 'Which of the following is an example of malware?',
        options: [
            'Ransomware',
            'Firewall',
            'Password',
            'Encryption'
        ],
        answer: 'Ransomware',
        explanation: 'Ransomware is a type of malware. Other examples mentioned in the lesson include viruses, worms, trojans, and spyware.'
    },
    {
        id: 8,
        question: 'What does social engineering primarily attempt to manipulate?',
        options: [
            'Computer hardware',
            'Network cables',
            'People',
            'Database tables'
        ],
        answer: 'People',
        explanation: 'Social engineering focuses on manipulating people rather than directly attacking a technical system. Attackers may use deception, impersonation, or urgency.'
    },
    {
        id: 9,
        question: 'Which activity involves observing network activity to identify unusual behavior and potential security issues?',
        options: [
            'Network monitoring',
            'Authentication',
            'Data encryption',
            'Password creation'
        ],
        answer: 'Network monitoring',
        explanation: 'Network monitoring involves observing network activity to identify unusual behavior, performance problems, and potential security issues.'
    },
    {
        id: 10,
        question: 'What is authentication?',
        options: [
            'Determining what a user is allowed to access',
            'Verifying the identity of a user, device, or system',
            'Encrypting information',
            'Monitoring network traffic'
        ],
        answer: 'Verifying the identity of a user, device, or system',
        explanation: 'Authentication is the process of verifying the identity of a user, device, or system. Passwords are one common authentication method.'
    },
    {
        id: 11,
        question: 'What does authorization determine?',
        options: [
            'Who a user is',
            'What an authenticated user is allowed to access',
            'Whether data is encrypted',
            'Whether a network is connected'
        ],
        answer: 'What an authenticated user is allowed to access',
        explanation: 'Authorization determines what an authenticated user is allowed to access or what actions they are allowed to perform.'
    },
    {
        id: 12,
        question: 'Which principle means that users should receive only the permissions necessary to perform their tasks?',
        options: [
            'Confidentiality',
            'Principle of least privilege',
            'Phishing',
            'Network monitoring'
        ],
        answer: 'Principle of least privilege',
        explanation: 'The principle of least privilege means users should receive only the permissions necessary to perform their required tasks.'
    },
    {
        id: 13,
        question: 'What does encryption do to readable information?',
        options: [
            'Deletes it permanently',
            'Transforms it into an encoded form',
            'Makes it publicly available',
            'Automatically creates a backup'
        ],
        answer: 'Transforms it into an encoded form',
        explanation: 'Encryption transforms readable information into an encoded form. The information can then be converted back into its original form using the appropriate key or mechanism.'
    },
    {
        id: 14,
        question: 'Which is an example of data at rest?',
        options: [
            'Information moving between two computers',
            'A database storing information',
            'A message being transmitted over a network',
            'Information being sent to another device'
        ],
        answer: 'A database storing information',
        explanation: 'Data at rest refers to information that is stored on devices or systems, such as databases, hard drives, and storage services.'
    },
    {
        id: 15,
        question: 'Which is an example of data in transit?',
        options: [
            'A file stored on a hard drive',
            'Information stored in a database',
            'Information moving between systems through a network',
            'A document saved on a computer'
        ],
        answer: 'Information moving between systems through a network',
        explanation: 'Data in transit refers to information moving between systems or devices through a network.'
    },
    {
        id: 16,
        question: 'Why should a web application validate user input before processing it?',
        options: [
            'To make the website load faster',
            'To prevent unexpected or harmful data from being processed',
            'To remove the need for authentication',
            'To automatically create user accounts'
        ],
        answer: 'To prevent unexpected or harmful data from being processed',
        explanation: 'Applications should validate user input before processing it. This helps prevent unexpected or harmful data from being processed by the application.'
    },
    {
        id: 17,
        question: 'Why should web applications keep their third-party libraries and frameworks updated?',
        options: [
            'To change the website design',
            'To increase the number of users',
            'To help address known security issues',
            'To remove the need for access control'
        ],
        answer: 'To help address known security issues',
        explanation: 'Web applications often depend on third-party libraries and frameworks. Keeping these components updated can help address known security issues.'
    },
    {
        id: 18,
        question: 'What should you do before interacting with an unexpected link or attachment?',
        options: [
            'Open it immediately',
            'Forward it to other people',
            'Verify the source before taking action',
            'Download every attachment first'
        ],
        answer: 'Verify the source before taking action',
        explanation: 'Cybersecurity best practices recommend being careful with unexpected links, files, and messages. You should verify the source before taking action.'
    },
    {
        id: 19,
        question: 'What should you do if someone requests your password or personal information unexpectedly?',
        options: [
            'Provide it immediately',
            'Share it with a friend',
            'Verify the request through a trusted channel',
            'Post it online'
        ],
        answer: 'Verify the request through a trusted channel',
        explanation: 'Requests for passwords, personal information, or unusual actions should be verified through a trusted channel before taking action.'
    },
    {
        id: 20,
        question: 'Why are backups important in cybersecurity?',
        options: [
            'They make passwords unnecessary',
            'They help recover important information if it becomes unavailable',
            'They prevent every type of cyberattack',
            'They automatically remove malware'
        ],
        answer: 'They help recover important information if it becomes unavailable',
        explanation: 'Keeping appropriate backups can help users recover important information if data is accidentally deleted, corrupted, or otherwise becomes unavailable.'
    },
    {
        id: 21,
        question: 'Which of the following best describes confidentiality?',
        options: [
            'Making sure information is available at all times',
            'Making sure information remains accurate',
            'Making sure information is accessible only to authorized individuals',
            'Making sure software is updated'
        ],
        answer: 'Making sure information is accessible only to authorized individuals',
        explanation: 'Confidentiality means information should only be accessible to authorized individuals.'
    },
    {
        id: 22,
        question: 'A company discovers that information in its database was changed without permission. Which CIA principle has been affected?',
        options: [
            'Confidentiality',
            'Integrity',
            'Availability',
            'Authentication'
        ],
        answer: 'Integrity',
        explanation: 'Integrity means information should remain accurate and protected from unauthorized modification.'
    },
    {
        id: 23,
        question: 'A website becomes unavailable when authorized users need to access it. Which CIA principle is affected?',
        options: [
            'Confidentiality',
            'Integrity',
            'Availability',
            'Authorization'
        ],
        answer: 'Availability',
        explanation: 'Availability means systems and information should be accessible when authorized users need them.'
    },
    {
        id: 24,
        question: 'Which of the following is a characteristic of a phishing message?',
        options: [
            'It may pretend to come from a legitimate organization',
            'It always comes from a known friend',
            'It is always completely safe',
            'It only appears inside databases'
        ],
        answer: 'It may pretend to come from a legitimate organization',
        explanation: 'Phishing messages may appear to come from legitimate organizations, services, or individuals in an attempt to trick users.'
    },
    {
        id: 25,
        question: 'Which action is an example of social engineering?',
        options: [
            'Manipulating a person into revealing information',
            'Encrypting a database',
            'Installing a software update',
            'Monitoring network traffic'
        ],
        answer: 'Manipulating a person into revealing information',
        explanation: 'Social engineering involves manipulating people through methods such as deception, impersonation, or urgency.'
    },
    {
        id: 26,
        question: 'Why can reused passwords increase security risks?',
        options: [
            'They make computers run slower',
            'One compromised password may affect multiple accounts',
            'They automatically disable firewalls',
            'They prevent software updates'
        ],
        answer: 'One compromised password may affect multiple accounts',
        explanation: 'The lesson recommends using strong and unique passwords because reused passwords can make multiple accounts easier to compromise.'
    },
    {
        id: 27,
        question: 'What is one purpose of network security?',
        options: [
            'To protect devices, systems, applications, and information communicating over a network',
            'To replace all computer hardware',
            'To remove the need for passwords',
            'To increase the number of network users'
        ],
        answer: 'To protect devices, systems, applications, and information communicating over a network',
        explanation: 'Network security focuses on protecting devices, systems, applications, and information that communicate over a network.'
    },
    {
        id: 28,
        question: 'What does a firewall use to control network traffic?',
        options: [
            'Defined rules',
            'Usernames only',
            'Database tables',
            'Backup files'
        ],
        answer: 'Defined rules',
        explanation: 'A firewall controls network traffic according to defined rules.'
    },
    {
        id: 29,
        question: 'Which statement correctly compares authentication and authorization?',
        options: [
            'Authentication asks what you can access, while authorization asks who you are',
            'Authentication verifies identity, while authorization determines permissions',
            'Authentication and authorization are exactly the same',
            'Authorization verifies identity, while authentication encrypts data'
        ],
        answer: 'Authentication verifies identity, while authorization determines permissions',
        explanation: 'Authentication verifies identity, while authorization determines what an authenticated user is allowed to access or do.'
    },
    {
        id: 30,
        question: 'Which situation demonstrates the principle of least privilege?',
        options: [
            'A user receives administrator access even though they do not need it',
            'Every employee can access every file',
            'A user receives only the permissions required for their job',
            'All access controls are disabled'
        ],
        answer: 'A user receives only the permissions required for their job',
        explanation: 'The principle of least privilege limits users to only the permissions necessary for their required tasks.'
    }
]

export default cyberSecurityQuiz