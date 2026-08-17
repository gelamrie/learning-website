const databaseQuiz = [
    {
        id: 1,
        question: 'What is the primary purpose of a database?',
        options: [
            'To design the visual appearance of an application',
            'To store, organize, manage, and retrieve information',
            'To create animations for websites',
            'To compile programming languages'
        ],
        answer: 'To store, organize, manage, and retrieve information',
        explanation:
            'A database is an organized collection of information that allows data to be stored, managed, updated, and retrieved efficiently.'
    },

    {
        id: 2,
        question:
            'A school application needs to store thousands of student records and retrieve a specific student quickly. Which database benefit is most relevant?',
        options: [
            'Creating visual designs',
            'Searching and retrieving information efficiently',
            'Adding animations',
            'Changing webpage layouts'
        ],
        answer: 'Searching and retrieving information efficiently',
        explanation:
            'One important purpose of databases is to allow large amounts of information to be organized and retrieved efficiently.'
    },

    {
        id: 3,
        question: 'Which of the following is a relational database system?',
        options: [
            'MySQL',
            'HTML',
            'CSS',
            'React'
        ],
        answer: 'MySQL',
        explanation:
            'MySQL is a relational database system. Other examples mentioned in the lesson include PostgreSQL, Microsoft SQL Server, Oracle Database, and SQLite.'
    },

    {
        id: 4,
        question:
            'In a relational database, what does a row normally represent?',
        options: [
            'A database',
            'A table',
            'One record',
            'A data type'
        ],
        answer: 'One record',
        explanation:
            'In a relational table, each row represents one record, while each column represents a specific attribute of that record.'
    },

    {
        id: 5,
        question:
            'A Students table contains StudentID, Name, Email, and Course. What does the Name column represent?',
        options: [
            'A record',
            'An attribute',
            'A database',
            'A relationship'
        ],
        answer: 'An attribute',
        explanation:
            'A column represents a specific attribute of a record. In this example, Name is an attribute describing a student.'
    },

    {
        id: 6,
        question:
            'What is the main purpose of a primary key in a relational table?',
        options: [
            'To store duplicate records',
            'To uniquely identify each record',
            'To sort every record alphabetically',
            'To connect the database to a website'
        ],
        answer: 'To uniquely identify each record',
        explanation:
            'A primary key uniquely identifies each record in a table. For example, StudentID can uniquely identify a student.'
    },

    {
        id: 7,
        question:
            'A Courses table has CourseID as its primary key. A Students table contains CourseID to reference the course assigned to a student. What is CourseID in the Students table?',
        options: [
            'A primary key only',
            'A foreign key',
            'A database',
            'A data type'
        ],
        answer: 'A foreign key',
        explanation:
            'A foreign key connects one table to another by referencing a key, usually the primary key, from another table.'
    },

    {
        id: 8,
        question:
            'Which SQL statement is used to retrieve information from a table?',
        options: [
            'INSERT',
            'UPDATE',
            'SELECT',
            'DELETE'
        ],
        answer: 'SELECT',
        explanation:
            'The SELECT statement is used to retrieve information from a database table.'
    },

    {
        id: 9,
        question: (
            <>
                <p>What does this SQL statement retrieve?</p>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto text-left">
                    {`SELECT * FROM Students;`}
                </pre>
            </>
        ),
        options: [
            'Only the StudentID column',
            'Only the Name column',
            'All columns and records from Students',
            'The Students table itself is deleted'
        ],
        answer: 'All columns and records from Students',
        explanation:
            'The * means all columns. SELECT * FROM Students retrieves all available columns and records from the Students table.'
    },

    {
        id: 10,
        question: (
            <>
                <p>What is the purpose of this SQL statement?</p>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto text-left">
                    {`INSERT INTO Students (Name, Course)
VALUES ('Angela', 'Computer Engineering');`}
                </pre>
            </>
        ),
        options: [
            'It retrieves a student',
            'It adds a new record',
            'It deletes a student',
            'It changes an existing record'
        ],
        answer: 'It adds a new record',
        explanation:
            'INSERT INTO is used to add a new record to a table. The values provided are inserted into the specified columns.'
    },

    {
        id: 11,
        question: (
            <>
                <p>What does this SQL statement do?</p>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto text-left">
                    {`UPDATE Students
SET Course = 'Computer Science'
WHERE StudentID = 1;`}
                </pre>
            </>
        ),
        options: [
            'Adds a new student',
            'Deletes student 1',
            'Changes the course of student 1',
            'Retrieves student 1'
        ],
        answer: 'Changes the course of student 1',
        explanation:
            'UPDATE modifies existing records. The WHERE clause limits the change to the record whose StudentID is 1.'
    },

    {
        id: 12,
        question: (
            <>
                <p>What does this SQL statement do?</p>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto text-left">
                    {`DELETE FROM Students
WHERE StudentID = 1;`}
                </pre>
            </>
        ),
        options: [
            'Adds student 1',
            'Changes student 1',
            'Retrieves student 1',
            'Removes student 1'
        ],
        answer: 'Removes student 1',
        explanation:
            'DELETE removes records from a table. The WHERE clause specifies that the record with StudentID 1 should be removed.'
    },

    {
        id: 13,
        question:
            'Which SQL statement is used to create a new table?',
        options: [
            'CREATE TABLE',
            'MAKE TABLE',
            'NEW TABLE',
            'INSERT TABLE'
        ],
        answer: 'CREATE TABLE',
        explanation:
            'CREATE TABLE defines a new table and specifies its columns and data types.'
    },

    {
        id: 14,
        question: (
            <>
                <p>Which column is the primary key in this table definition?</p>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto text-left">
                    {`CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(100),
    Email VARCHAR(100)
);`}
                </pre>
            </>
        ),
        options: [
            'StudentID',
            'Name',
            'Email',
            'VARCHAR'
        ],
        answer: 'StudentID',
        explanation:
            'StudentID is marked with PRIMARY KEY, meaning it uniquely identifies each record in the Students table.'
    },

    {
        id: 15,
        question:
            'Which SQL data type from the lesson is most appropriate for storing a whole number such as 25?',
        options: [
            'VARCHAR',
            'DATE',
            'INT',
            'DECIMAL'
        ],
        answer: 'INT',
        explanation:
            'INT is used for whole numbers. VARCHAR is used for text, DATE for dates, and DECIMAL for precise numeric values.'
    },

    {
        id: 16,
        question:
            'Which data type is most appropriate for storing a student name such as "Angela"?',
        options: [
            'INT',
            'VARCHAR',
            'DATE',
            'BOOLEAN'
        ],
        answer: 'VARCHAR',
        explanation:
            'VARCHAR is used for text values such as names, email addresses, and course names.'
    },

    {
        id: 17,
        question:
            'A database needs to store a birth date. Which data type from the lesson is most appropriate?',
        options: [
            'INT',
            'VARCHAR',
            'DATE',
            'BOOLEAN'
        ],
        answer: 'DATE',
        explanation:
            'The DATE data type is designed to store date values.'
    },

    {
        id: 18,
        question: (
            <>
                <p>What is the purpose of the WHERE clause in this query?</p>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto text-left">
                    {`SELECT *
FROM Students
WHERE Course = 'Computer Engineering';`}
                </pre>
            </>
        ),
        options: [
            'To create a new table',
            'To filter the records returned',
            'To delete the database',
            'To sort the records alphabetically'
        ],
        answer: 'To filter the records returned',
        explanation:
            'The WHERE clause specifies a condition. Only students whose Course is Computer Engineering are returned.'
    },

    {
        id: 19,
        question: (
            <>
                <p>What does this query do?</p>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto text-left">
                    {`SELECT *
FROM Students
ORDER BY Name ASC;`}
                </pre>
            </>
        ),
        options: [
            'Filters students by course',
            'Deletes students alphabetically',
            'Sorts students by Name in ascending order',
            'Updates student names'
        ],
        answer: 'Sorts students by Name in ascending order',
        explanation:
            'ORDER BY sorts query results. ASC means ascending order, so the names are arranged from lower to higher alphabetical order.'
    },

    {
        id: 20,
        question:
            'Which SQL clause is used to arrange query results according to a column?',
        options: [
            'WHERE',
            'ORDER BY',
            'VALUES',
            'PRIMARY KEY'
        ],
        answer: 'ORDER BY',
        explanation:
            'ORDER BY is used to sort query results according to one or more columns.'
    },

    {
        id: 21,
        question:
            'One instructor can teach many courses, while each course has one instructor. What type of relationship is this?',
        options: [
            'One-to-one',
            'One-to-many',
            'Many-to-many',
            'No relationship'
        ],
        answer: 'One-to-many',
        explanation:
            'One instructor can be associated with multiple courses, making this a one-to-many relationship.'
    },

    {
        id: 22,
        question:
            'A person has exactly one passport, and each passport belongs to exactly one person. What type of database relationship does this represent?',
        options: [
            'One-to-one',
            'One-to-many',
            'Many-to-many',
            'Many-to-one only'
        ],
        answer: 'One-to-one',
        explanation:
            'A one-to-one relationship occurs when one record in one table is associated with exactly one record in another table.'
    },

    {
        id: 23,
        question:
            'Students can enroll in many courses, and each course can have many students. Which relationship is most appropriate?',
        options: [
            'One-to-one',
            'One-to-many',
            'Many-to-many',
            'No relationship'
        ],
        answer: 'Many-to-many',
        explanation:
            'A student can enroll in multiple courses, while a course can contain multiple students. This creates a many-to-many relationship.'
    },

    {
        id: 24,
        question:
            'What is commonly required to implement a many-to-many relationship between two tables?',
        options: [
            'A duplicate primary key',
            'A junction table',
            'A second database',
            'A VARCHAR column only'
        ],
        answer: 'A junction table',
        explanation:
            'Many-to-many relationships commonly require a junction table to represent the connections between records in the two related tables.'
    },

    {
        id: 25,
        question:
            'Which action is an important part of good database design?',
        options: [
            'Store all information in one large table',
            'Avoid using primary keys',
            'Separate related information into appropriate tables',
            'Duplicate the same information whenever possible'
        ],
        answer: 'Separate related information into appropriate tables',
        explanation:
            'Good database design separates related information into appropriate tables and defines relationships between them.'
    },

    {
        id: 26,
        question:
            'What is one major purpose of normalization?',
        options: [
            'To increase unnecessary data duplication',
            'To organize data and reduce unnecessary duplication',
            'To remove all database tables',
            'To convert SQL into HTML'
        ],
        answer: 'To organize data and reduce unnecessary duplication',
        explanation:
            'Normalization is a database design technique used to organize data and reduce unnecessary duplication.'
    },

    {
        id: 27,
        question:
            'A developer stores student information repeatedly in several different tables, causing the same email and course information to appear many times. Which database design concept can help address this problem?',
        options: [
            'Normalization',
            'Animation',
            'Typography',
            'Wireframing'
        ],
        answer: 'Normalization',
        explanation:
            'Normalization helps organize information and reduce unnecessary duplication across a database.'
    },

    {
        id: 28,
        question: (
            <>
                <p>Consider this table definition:</p>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto text-left">
                    {`CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(100),
    Email VARCHAR(100),
    Course VARCHAR(100)
);`}
                </pre>

                <p className="mt-4">
                    Which statement best describes the StudentID column?
                </p>
            </>
        ),
        options: [
            'It stores text values only',
            'It stores dates',
            'It uniquely identifies each student record',
            'It stores the student course name'
        ],
        answer: 'It uniquely identifies each student record',
        explanation:
            'StudentID uses INT and PRIMARY KEY. The primary key ensures that each student record can be uniquely identified.'
    },

    {
        id: 29,
        question: (
            <>
                <p>
                    A developer wants to retrieve only students enrolled in
                    Computer Engineering and sort their names alphabetically.
                    Which query correctly performs both operations?
                </p>
            </>
        ),
        options: [
            `SELECT *
FROM Students
WHERE Course = 'Computer Engineering'
ORDER BY Name ASC;`,

            `SELECT *
FROM Students
ORDER BY Course
WHERE Name = 'Computer Engineering';`,

            `SELECT *
FROM Students
WHERE Course = 'Computer Engineering'
DELETE BY Name ASC;`,

            `SELECT *
FROM Students
SORT Name
WHERE Course = 'Computer Engineering';`
        ],
        answer: `SELECT *
FROM Students
WHERE Course = 'Computer Engineering'
ORDER BY Name ASC;`,
        explanation:
            'WHERE filters the records based on the course, while ORDER BY Name ASC sorts the resulting records by name in ascending order.'
    },

    {
        id: 30,
        question:
            'A developer is beginning a database project for a student management system. Which sequence best follows the suggested database project process from the lesson?',
        options: [
            'Write queries first, then identify information and tables',
            'Identify information, determine tables, define columns and data types, select keys, create relationships, create tables, insert records, then write queries',
            'Insert records before creating tables',
            'Create one table containing every possible piece of information'
        ],
        answer:
            'Identify information, determine tables, define columns and data types, select keys, create relationships, create tables, insert records, then write queries',
        explanation:
            'The lesson recommends first identifying the information the application needs, then determining tables, defining columns and data types, selecting primary keys, creating relationships, creating the tables, inserting sample records, and finally writing queries.'
    }
]

export default databaseQuiz;