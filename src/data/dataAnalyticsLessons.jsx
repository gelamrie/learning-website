const dataAnalyticsLessons = [
    {
        id: 1,
        title: 'Introduction to Data Analytics',

        content: (
            <>
                <p>
                    Data analytics is the process of examining, organizing,
                    and interpreting data to discover useful information,
                    identify patterns, and support decision-making.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    What is Data?
                </h2>

                <p className='mt-4'>
                    Data refers to collected facts, observations, measurements,
                    or records. Data can appear in many forms, including
                    numbers, text, dates, categories, images, and other types
                    of information.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    What is Data Analytics?
                </h2>

                <p className='mt-4'>
                    Data analytics involves transforming raw data into
                    meaningful information. Analysts examine data to answer
                    questions and identify trends that can help organizations
                    make informed decisions.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Types of Data Analytics
                </h2>

                <ul className='mt-4 list-disc pl-6 space-y-2'>
                    <li>
                        <strong>Descriptive analytics:</strong> Examines what
                        happened in the past.
                    </li>

                    <li>
                        <strong>Diagnostic analytics:</strong> Examines why
                        something happened.
                    </li>

                    <li>
                        <strong>Predictive analytics:</strong> Uses data to
                        estimate what may happen in the future.
                    </li>

                    <li>
                        <strong>Prescriptive analytics:</strong> Helps
                        determine possible actions based on available
                        information.
                    </li>
                </ul>

                <h2 className='mt-8 text-2xl font-bold'>
                    Why Data Analytics Matters
                </h2>

                <p className='mt-4'>
                    Data analytics can help organizations understand
                    performance, identify problems, discover opportunities,
                    and make decisions based on evidence rather than
                    assumptions.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Summary
                </h2>

                <p className='mt-4'>
                    Data analytics transforms raw information into useful
                    insights. It combines data collection, preparation,
                    analysis, visualization, and communication.
                </p>
            </>
        ),
    },

    {
        id: 2,
        title: 'Data Collection',

        content: (
            <>
                <p>
                    Data collection is the process of gathering information
                    that will be used for analysis. The quality and relevance
                    of collected data can significantly affect the results of
                    an analysis.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Primary Data
                </h2>

                <p className='mt-4'>
                    Primary data is collected directly for a specific purpose.
                    Examples include surveys, interviews, observations, and
                    experiments.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Secondary Data
                </h2>

                <p className='mt-4'>
                    Secondary data has already been collected by another
                    person or organization. Examples include public datasets,
                    research papers, government statistics, and existing
                    company records.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Common Collection Methods
                </h2>

                <ul className='mt-4 list-disc pl-6 space-y-2'>
                    <li>Surveys and questionnaires</li>
                    <li>Interviews</li>
                    <li>Observations</li>
                    <li>Experiments</li>
                    <li>Online forms</li>
                    <li>Existing databases</li>
                </ul>

                <h2 className='mt-8 text-2xl font-bold'>
                    Data Quality
                </h2>

                <p className='mt-4'>
                    Collected data should be relevant, accurate, complete,
                    consistent, and appropriate for the purpose of the
                    analysis.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Summary
                </h2>

                <p className='mt-4'>
                    Effective data collection provides the foundation for
                    reliable analysis. Analysts should carefully consider
                    where data comes from and whether it is suitable for the
                    problem being studied.
                </p>
            </>
        ),
    },

    {
        id: 3,
        title: 'Data Cleaning',

        content: (
            <>
                <p>
                    Data cleaning is the process of identifying and correcting
                    problems in a dataset before analysis. Raw datasets often
                    contain missing values, duplicates, incorrect formats, or
                    inconsistent information.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Common Data Problems
                </h2>

                <ul className='mt-4 list-disc pl-6 space-y-2'>
                    <li>Missing values</li>
                    <li>Duplicate records</li>
                    <li>Incorrect data types</li>
                    <li>Inconsistent spelling or formatting</li>
                    <li>Invalid values</li>
                    <li>Outliers</li>
                </ul>

                <h2 className='mt-8 text-2xl font-bold'>
                    Handling Missing Values
                </h2>

                <p className='mt-4'>
                    Missing values can be handled in different ways depending
                    on the dataset and analysis. An analyst may remove
                    incomplete records, replace values using an appropriate
                    method, or investigate why the information is missing.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Removing Duplicates
                </h2>

                <p className='mt-4'>
                    Duplicate records can cause certain observations to be
                    counted more than once. Identifying and removing
                    unintended duplicates helps improve data quality.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Standardizing Data
                </h2>

                <p className='mt-4'>
                    Data should use consistent formats. For example, dates
                    should follow a consistent format and category names
                    should use consistent spelling.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Summary
                </h2>

                <p className='mt-4'>
                    Data cleaning prepares a dataset for reliable analysis.
                    Clean and consistent data reduces errors and improves the
                    quality of analytical results.
                </p>
            </>
        ),
    },

    {
        id: 4,
        title: 'Data Visualization',

        content: (
            <>
                <p>
                    Data visualization is the process of representing data
                    graphically. Visualizations make patterns, comparisons,
                    trends, and relationships easier to understand.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Common Chart Types
                </h2>

                <ul className='mt-4 list-disc pl-6 space-y-2'>
                    <li>
                        <strong>Bar charts:</strong> Useful for comparing
                        categories.
                    </li>

                    <li>
                        <strong>Line charts:</strong> Useful for showing
                        changes over time.
                    </li>

                    <li>
                        <strong>Pie charts:</strong> Can show proportions of a
                        whole.
                    </li>

                    <li>
                        <strong>Scatter plots:</strong> Useful for examining
                        relationships between numerical variables.
                    </li>

                    <li>
                        <strong>Histograms:</strong> Useful for showing the
                        distribution of numerical data.
                    </li>
                </ul>

                <h2 className='mt-8 text-2xl font-bold'>
                    Choosing the Right Visualization
                </h2>

                <p className='mt-4'>
                    The appropriate visualization depends on the question
                    being answered and the type of data being analyzed.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Good Visualization Practices
                </h2>

                <ul className='mt-4 list-disc pl-6 space-y-2'>
                    <li>Use clear labels.</li>
                    <li>Provide meaningful titles.</li>
                    <li>Avoid unnecessary visual elements.</li>
                    <li>Use appropriate scales.</li>
                    <li>Make important patterns easy to identify.</li>
                </ul>

                <h2 className='mt-8 text-2xl font-bold'>
                    Summary
                </h2>

                <p className='mt-4'>
                    Effective visualization communicates information clearly
                    and allows users to understand datasets without examining
                    every individual value.
                </p>
            </>
        ),
    },

    {
        id: 5,
        title: 'Statistical Analysis',

        content: (
            <>
                <p>
                    Statistical analysis involves using mathematical methods
                    to summarize, understand, and interpret data.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Mean
                </h2>

                <p className='mt-4'>
                    The mean is the average value of a dataset. It is
                    calculated by adding all values and dividing the result by
                    the number of values.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Median
                </h2>

                <p className='mt-4'>
                    The median is the middle value when a dataset is arranged
                    in order. It can be useful when a dataset contains values
                    that are much larger or smaller than most observations.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Mode
                </h2>

                <p className='mt-4'>
                    The mode is the value that occurs most frequently in a
                    dataset.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Range
                </h2>

                <p className='mt-4'>
                    The range represents the difference between the largest
                    and smallest values in a dataset.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Why Statistics Matter
                </h2>

                <p className='mt-4'>
                    Statistical measures help analysts summarize large
                    datasets and identify important characteristics and
                    patterns.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Summary
                </h2>

                <p className='mt-4'>
                    Statistical analysis provides mathematical techniques for
                    understanding data and supporting conclusions.
                </p>
            </>
        ),
    },

    {
        id: 6,
        title: 'Working with Datasets',

        content: (
            <>
                <p>
                    A dataset is a structured collection of data. Datasets
                    commonly organize information into rows and columns, where
                    each row represents an observation and each column
                    represents a variable.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Rows and Columns
                </h2>

                <p className='mt-4'>
                    For example, a student dataset might contain columns for
                    student name, age, course, and grades. Each row represents
                    an individual student.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Common File Formats
                </h2>

                <ul className='mt-4 list-disc pl-6 space-y-2'>
                    <li>CSV</li>
                    <li>Excel spreadsheets</li>
                    <li>JSON</li>
                    <li>Database tables</li>
                </ul>

                <h2 className='mt-8 text-2xl font-bold'>
                    Exploring a Dataset
                </h2>

                <p className='mt-4'>
                    Before performing analysis, analysts should inspect the
                    dataset to understand its columns, number of records,
                    data types, missing values, and general structure.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Filtering and Sorting
                </h2>

                <p className='mt-4'>
                    Filtering allows analysts to focus on specific records,
                    while sorting organizes values according to a selected
                    column.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Summary
                </h2>

                <p className='mt-4'>
                    Understanding the structure of a dataset is an important
                    step before performing more advanced analysis.
                </p>
            </>
        ),
    },

    {
        id: 7,
        title: 'Creating Reports',

        content: (
            <>
                <p>
                    Data analysis becomes more useful when its findings are
                    communicated clearly. Reports organize analytical results
                    so that other people can understand the findings and use
                    them to make decisions.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Parts of an Analytical Report
                </h2>

                <ul className='mt-4 list-disc pl-6 space-y-2'>
                    <li>Introduction or background</li>
                    <li>Objectives or research questions</li>
                    <li>Data and methodology</li>
                    <li>Analysis and findings</li>
                    <li>Visualizations</li>
                    <li>Conclusion</li>
                    <li>Recommendations</li>
                </ul>

                <h2 className='mt-8 text-2xl font-bold'>
                    Presenting Findings
                </h2>

                <p className='mt-4'>
                    Findings should be presented using clear language,
                    relevant statistics, and appropriate visualizations.
                    Avoid including information that does not contribute to
                    the main purpose of the report.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Recommendations
                </h2>

                <p className='mt-4'>
                    When appropriate, an analytical report can include
                    recommendations based on the findings. Recommendations
                    should be connected to the evidence discovered during
                    analysis.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Summary
                </h2>

                <p className='mt-4'>
                    A good data report communicates analytical findings in a
                    clear and organized way so that readers can understand and
                    act on the information.
                </p>
            </>
        ),
    },

    {
        id: 8,
        title: 'Data Analytics Project',

        content: (
            <>
                <p>
                    A data analytics project combines the different stages of
                    the analytics process. The goal is to use a dataset to
                    answer a question and communicate meaningful findings.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Step 1: Define the Problem
                </h2>

                <p className='mt-4'>
                    Begin by identifying the question you want the analysis to
                    answer. A clear question helps determine what data is
                    needed and what type of analysis should be performed.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Step 2: Collect the Data
                </h2>

                <p className='mt-4'>
                    Gather relevant data from appropriate sources. Make sure
                    that the dataset contains information related to the
                    problem being investigated.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Step 3: Clean the Data
                </h2>

                <p className='mt-4'>
                    Check for missing values, duplicates, incorrect formats,
                    and other data quality problems.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Step 4: Analyze the Data
                </h2>

                <p className='mt-4'>
                    Apply appropriate statistical techniques and examine the
                    data for patterns, relationships, and trends.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Step 5: Visualize the Results
                </h2>

                <p className='mt-4'>
                    Create charts or other visualizations that clearly
                    communicate important findings.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Step 6: Communicate the Findings
                </h2>

                <p className='mt-4'>
                    Present the results in a report or presentation. Explain
                    what the analysis shows and connect the findings back to
                    the original question.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Final Project Example
                </h2>

                <p className='mt-4'>
                    A beginner project could analyze student performance data.
                    You could examine average grades, compare results between
                    subjects, visualize performance trends, and identify areas
                    where students may need additional support.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Summary
                </h2>

                <p className='mt-4'>
                    A complete data analytics project follows a structured
                    process from defining a question to collecting, cleaning,
                    analyzing, visualizing, and communicating data.
                </p>
            </>
        ),
    },
];

export default dataAnalyticsLessons;