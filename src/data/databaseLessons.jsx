const databaseLessons = [
    {
        id: 1,
        title: 'Database Fundamentals',

        content: (
            <>
                <p>
                    A database is an organized collection of information that
                    can be stored, managed, and retrieved efficiently.
                    Databases are commonly used in websites, applications,
                    businesses, and other software systems.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    What is a Database?
                </h2>

                <p className='mt-4'>
                    A database allows information to be stored in a structured
                    way. Instead of keeping information in separate files,
                    related information can be organized into tables and
                    connected through relationships.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Why Use Databases?
                </h2>

                <ul className='mt-4 list-disc pl-6 space-y-2'>
                    <li>Store large amounts of information.</li>
                    <li>Organize information efficiently.</li>
                    <li>Search and retrieve information quickly.</li>
                    <li>Update information when needed.</li>
                    <li>Maintain relationships between related data.</li>
                </ul>

                <h2 className='mt-8 text-2xl font-bold'>
                    Common Database Systems
                </h2>

                <p className='mt-4'>
                    Popular database systems include MySQL, PostgreSQL,
                    Microsoft SQL Server, Oracle Database, and SQLite.
                </p>
            </>
        ),
    },

    {
        id: 2,
        title: 'Relational Databases',

        content: (
            <>
                <p>
                    A relational database organizes information into tables.
                    Each table contains rows and columns and represents a
                    particular type of information.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Tables
                </h2>

                <p className='mt-4'>
                    A table stores related information. For example, a
                    student database could contain a Students table with
                    information such as student ID, name, email, and course.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Rows and Columns
                </h2>

                <p className='mt-4'>
                    A row represents one record, while a column represents
                    a specific attribute of that record.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Primary Keys
                </h2>

                <p className='mt-4'>
                    A primary key uniquely identifies each record in a table.
                    For example, a StudentID can be used as the primary key
                    of a Students table.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Foreign Keys
                </h2>

                <p className='mt-4'>
                    A foreign key connects one table to another table.
                    It usually references the primary key of another table.
                </p>
            </>
        ),
    },

    {
        id: 3,
        title: 'SQL Basics',

        content: (
            <>
                <p>
                    SQL, or Structured Query Language, is commonly used to
                    interact with relational databases.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    SELECT
                </h2>

                <p className='mt-4'>
                    The SELECT statement retrieves information from a table.
                </p>

                <pre className='mt-4 p-4 rounded-lg bg-neutral-900 text-white overflow-x-auto'>
                    <code>
{`SELECT * FROM Students;`}
                    </code>
                </pre>

                <h2 className='mt-8 text-2xl font-bold'>
                    INSERT
                </h2>

                <p className='mt-4'>
                    INSERT is used to add new records to a table.
                </p>

                <pre className='mt-4 p-4 rounded-lg bg-neutral-900 text-white overflow-x-auto'>
                    <code>
{`INSERT INTO Students (Name, Course)
VALUES ('Angela', 'Computer Engineering');`}
                    </code>
                </pre>

                <h2 className='mt-8 text-2xl font-bold'>
                    UPDATE
                </h2>

                <p className='mt-4'>
                    UPDATE modifies existing records.
                </p>

                <pre className='mt-4 p-4 rounded-lg bg-neutral-900 text-white overflow-x-auto'>
                    <code>
{`UPDATE Students
SET Course = 'Computer Science'
WHERE StudentID = 1;`}
                    </code>
                </pre>

                <h2 className='mt-8 text-2xl font-bold'>
                    DELETE
                </h2>

                <p className='mt-4'>
                    DELETE removes records from a table.
                </p>

                <pre className='mt-4 p-4 rounded-lg bg-neutral-900 text-white overflow-x-auto'>
                    <code>
{`DELETE FROM Students
WHERE StudentID = 1;`}
                    </code>
                </pre>
            </>
        ),
    },

    {
        id: 4,
        title: 'Creating Tables',

        content: (
            <>
                <p>
                    SQL can be used to create tables that define how data
                    will be stored in a database.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    CREATE TABLE
                </h2>

                <p className='mt-4'>
                    The CREATE TABLE statement defines a new table and its
                    columns.
                </p>

                <pre className='mt-4 p-4 rounded-lg bg-neutral-900 text-white overflow-x-auto'>
                    <code>
{`CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(100),
    Email VARCHAR(100),
    Course VARCHAR(100)
);`}
                    </code>
                </pre>

                <h2 className='mt-8 text-2xl font-bold'>
                    Data Types
                </h2>

                <p className='mt-4'>
                    Columns use data types to determine what kind of
                    information they can store.
                </p>

                <ul className='mt-4 list-disc pl-6 space-y-2'>
                    <li>INT - whole numbers</li>
                    <li>VARCHAR - text</li>
                    <li>DATE - dates</li>
                    <li>DECIMAL - precise numeric values</li>
                    <li>BOOLEAN - true or false values</li>
                </ul>
            </>
        ),
    },

    {
        id: 5,
        title: 'Queries',

        content: (
            <>
                <p>
                    Queries allow users and applications to retrieve
                    specific information from a database.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Filtering Data
                </h2>

                <p className='mt-4'>
                    The WHERE clause can be used to filter records.
                </p>

                <pre className='mt-4 p-4 rounded-lg bg-neutral-900 text-white overflow-x-auto'>
                    <code>
{`SELECT *
FROM Students
WHERE Course = 'Computer Engineering';`}
                    </code>
                </pre>

                <h2 className='mt-8 text-2xl font-bold'>
                    Sorting Results
                </h2>

                <p className='mt-4'>
                    ORDER BY can be used to arrange query results.
                </p>

                <pre className='mt-4 p-4 rounded-lg bg-neutral-900 text-white overflow-x-auto'>
                    <code>
{`SELECT *
FROM Students
ORDER BY Name ASC;`}
                    </code>
                </pre>

                <h2 className='mt-8 text-2xl font-bold'>
                    Limiting Results
                </h2>

                <p className='mt-4'>
                    Some database systems allow queries to limit the number
                    of returned records.
                </p>
            </>
        ),
    },

    {
        id: 6,
        title: 'Relationships',

        content: (
            <>
                <p>
                    Database relationships describe how records in different
                    tables are connected.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    One-to-One
                </h2>

                <p className='mt-4'>
                    One record in a table is associated with one record in
                    another table.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    One-to-Many
                </h2>

                <p className='mt-4'>
                    One record can be associated with multiple records in
                    another table. For example, one instructor may teach
                    multiple courses.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Many-to-Many
                </h2>

                <p className='mt-4'>
                    Multiple records in one table can be associated with
                    multiple records in another table. This relationship
                    commonly requires a junction table.
                </p>
            </>
        ),
    },

    {
        id: 7,
        title: 'Database Design',

        content: (
            <>
                <p>
                    Database design involves planning how information will
                    be organized and how different tables will interact.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Good Database Design
                </h2>

                <ul className='mt-4 list-disc pl-6 space-y-2'>
                    <li>Identify the information that needs to be stored.</li>
                    <li>Separate related information into appropriate tables.</li>
                    <li>Choose appropriate primary keys.</li>
                    <li>Define relationships between tables.</li>
                    <li>Use suitable data types.</li>
                    <li>Avoid unnecessary duplication of data.</li>
                </ul>

                <h2 className='mt-8 text-2xl font-bold'>
                    Normalization
                </h2>

                <p className='mt-4'>
                    Normalization is a database design technique used to
                    organize data and reduce unnecessary duplication.
                </p>
            </>
        ),
    },

    {
        id: 8,
        title: 'Database Project',

        content: (
            <>
                <p>
                    The final lesson brings together the concepts covered
                    throughout the database course by designing a small
                    database project.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Project Goal
                </h2>

                <p className='mt-4'>
                    Create a database for a simple application such as a
                    student management system, library system, or online
                    course platform.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Suggested Steps
                </h2>

                <ol className='mt-4 list-decimal pl-6 space-y-2'>
                    <li>Identify the information the application needs.</li>
                    <li>Determine the required tables.</li>
                    <li>Define columns and data types.</li>
                    <li>Select primary keys.</li>
                    <li>Create relationships between tables.</li>
                    <li>Create the database tables using SQL.</li>
                    <li>Insert sample records.</li>
                    <li>Write queries to retrieve the information.</li>
                </ol>

                <h2 className='mt-8 text-2xl font-bold'>
                    What You Should Know After This Course
                </h2>

                <p className='mt-4'>
                    After completing these lessons, you should have a
                    foundation in databases, relational tables, SQL,
                    queries, relationships, and basic database design.
                </p>
            </>
        ),
    },
];

export default databaseLessons;