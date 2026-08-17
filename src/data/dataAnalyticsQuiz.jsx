const dataAnalyticsQuiz = [
    {
        id: 1,
        question: 'What is the main purpose of data analytics?',
        options: [
            'To store data permanently',
            'To transform data into useful information and insights',
            'To replace databases',
            'To create computer hardware'
        ],
        answer: 'To transform data into useful information and insights',
        explanation:
            'Data analytics involves examining and interpreting data to discover useful information, patterns, and insights that can support decision-making.'
    },
    {
        id: 2,
        question: 'Which type of analytics focuses on what happened in the past?',
        options: [
            'Predictive analytics',
            'Prescriptive analytics',
            'Descriptive analytics',
            'Diagnostic analytics'
        ],
        answer: 'Descriptive analytics',
        explanation:
            'Descriptive analytics examines historical data to understand and summarize what happened.'
    },
    {
        id: 3,
        question: 'Which type of analytics attempts to explain why something happened?',
        options: [
            'Descriptive analytics',
            'Diagnostic analytics',
            'Predictive analytics',
            'Prescriptive analytics'
        ],
        answer: 'Diagnostic analytics',
        explanation:
            'Diagnostic analytics investigates data to determine the causes or reasons behind observed results.'
    },
    {
        id: 4,
        question: 'Which type of analytics estimates what may happen in the future?',
        options: [
            'Descriptive analytics',
            'Diagnostic analytics',
            'Predictive analytics',
            'Exploratory analytics'
        ],
        answer: 'Predictive analytics',
        explanation:
            'Predictive analytics uses historical and current data to estimate possible future outcomes.'
    },
    {
        id: 5,
        question: 'Which of the following is an example of primary data?',
        options: [
            'A government dataset downloaded from the internet',
            'A research paper published five years ago',
            'Responses collected through your own survey',
            'An existing company database'
        ],
        answer: 'Responses collected through your own survey',
        explanation:
            'Primary data is collected directly for a specific purpose. A survey conducted by the analyst is an example of primary data.'
    },
    {
        id: 6,
        question: 'Which of the following is an example of secondary data?',
        options: [
            'Results from an experiment you conducted',
            'Answers from your own interview',
            'Observations you personally recorded',
            'A publicly available government dataset'
        ],
        answer: 'A publicly available government dataset',
        explanation:
            'Secondary data has already been collected by another person or organization and is later reused for analysis.'
    },
    {
        id: 7,
        question: 'Why is data quality important in analytics?',
        options: [
            'It makes computers run faster',
            'It guarantees that every prediction is correct',
            'It helps produce more reliable analytical results',
            'It eliminates the need for visualization'
        ],
        answer: 'It helps produce more reliable analytical results',
        explanation:
            'Poor-quality data can lead to inaccurate conclusions. Accurate, complete, consistent, and relevant data improves the reliability of analysis.'
    },
    {
        id: 8,
        question: 'Which of the following is NOT a common data-cleaning problem?',
        options: [
            'Missing values',
            'Duplicate records',
            'Incorrect data types',
            'Correctly formatted values'
        ],
        answer: 'Correctly formatted values',
        explanation:
            'Correctly formatted values are generally not a data-quality problem. Missing values, duplicates, and incorrect data types commonly require cleaning.'
    },
    {
        id: 9,
        question: 'A dataset contains the same customer record multiple times. What problem does this represent?',
        options: [
            'Missing data',
            'Duplicate records',
            'Data visualization',
            'Data normalization'
        ],
        answer: 'Duplicate records',
        explanation:
            'When the same record appears more than once unintentionally, it is considered a duplicate.'
    },
    {
        id: 10,
        question:
            'A dataset contains the values "Philippines", "philippines", and "PH". What type of data-cleaning issue is this?',
        options: [
            'Inconsistent formatting or categories',
            'Missing values',
            'Duplicate rows',
            'Incorrect numerical calculation'
        ],
        answer: 'Inconsistent formatting or categories',
        explanation:
            'The values represent the same category but use different formats. Standardizing category values helps maintain consistency.'
    },
    {
        id: 11,
        question: 'Which chart is generally most appropriate for comparing values across categories?',
        options: [
            'Bar chart',
            'Line chart',
            'Scatter plot',
            'Histogram'
        ],
        answer: 'Bar chart',
        explanation:
            'Bar charts are commonly used to compare values between different categories.'
    },
    {
        id: 12,
        question: 'Which visualization is most appropriate for showing a trend over time?',
        options: [
            'Pie chart',
            'Line chart',
            'Histogram',
            'Scatter plot'
        ],
        answer: 'Line chart',
        explanation:
            'Line charts are useful for showing how values change across an ordered sequence such as time.'
    },
    {
        id: 13,
        question:
            'Which visualization is most appropriate for examining the relationship between two numerical variables?',
        options: [
            'Pie chart',
            'Bar chart',
            'Scatter plot',
            'Histogram'
        ],
        answer: 'Scatter plot',
        explanation:
            'Scatter plots display pairs of numerical values and can help reveal relationships, patterns, or correlations between variables.'
    },
    {
        id: 14,
        question: 'What is the primary purpose of a histogram?',
        options: [
            'To show the distribution of numerical data',
            'To display database relationships',
            'To compare two categorical variables',
            'To show a website navigation structure'
        ],
        answer: 'To show the distribution of numerical data',
        explanation:
            'Histograms group numerical values into intervals and show how frequently values occur within those intervals.'
    },
    {
        id: 15,
        question:
            'A company wants to compare the number of products sold in five different regions. Which visualization is most suitable?',
        options: [
            'Line chart',
            'Bar chart',
            'Scatter plot',
            'Histogram'
        ],
        answer: 'Bar chart',
        explanation:
            'The regions are categories, so a bar chart is appropriate for comparing their sales values.'
    },
    {
        id: 16,
        question: 'What is the mean of the following values: 10, 20, 30, 40?',
        options: [
            '20',
            '25',
            '30',
            '35'
        ],
        answer: '25',
        explanation:
            'The mean is calculated by adding the values and dividing by the number of values: (10 + 20 + 30 + 40) / 4 = 25.'
    },
    {
        id: 17,
        question: 'What is the median of the following values: 5, 8, 10, 12, 15?',
        options: [
            '8',
            '10',
            '12',
            '15'
        ],
        answer: '10',
        explanation:
            'The values are already ordered. Since there are five values, the middle value is 10.'
    },
    {
        id: 18,
        question: 'What is the mode of the following dataset: 2, 4, 4, 5, 7, 4, 8?',
        options: [
            '2',
            '4',
            '5',
            '8'
        ],
        answer: '4',
        explanation:
            'The mode is the value that occurs most frequently. In this dataset, 4 appears three times.'
    },
    {
        id: 19,
        question: 'What is the range of the following values: 12, 18, 25, 30, 45?',
        options: [
            '27',
            '30',
            '33',
            '45'
        ],
        answer: '33',
        explanation:
            'The range is the largest value minus the smallest value: 45 - 12 = 33.'
    },
    {
        id: 20,
        question:
            'Which statement best describes a row in a typical dataset?',
        options: [
            'It represents a variable',
            'It represents an individual observation or record',
            'It represents a chart',
            'It represents a data type'
        ],
        answer: 'It represents an individual observation or record',
        explanation:
            'In a typical tabular dataset, each row represents one observation or record, while columns represent variables.'
    },
    {
        id: 21,
        question:
            'A student dataset contains the columns Name, Age, Course, and Grade. What does the Grade column represent?',
        options: [
            'A variable',
            'A complete dataset',
            'A database',
            'A visualization'
        ],
        answer: 'A variable',
        explanation:
            'A column in a dataset generally represents a variable or attribute. Grade is a variable describing each student.'
    },
    {
        id: 22,
        question:
            'Before analyzing a newly received dataset, what should an analyst do first?',
        options: [
            'Immediately create a pie chart',
            'Delete all missing values',
            'Inspect the dataset structure and data quality',
            'Calculate only the mean'
        ],
        answer: 'Inspect the dataset structure and data quality',
        explanation:
            'Analysts should first understand the columns, records, data types, missing values, duplicates, and general structure of the dataset.'
    },
    {
        id: 23,
        question:
            'A dataset contains 1,000 records, but 150 records have missing values in an important column. What should the analyst do?',
        options: [
            'Always delete all 1,000 records',
            'Ignore the missing values completely',
            'Investigate the missing values and choose an appropriate handling method',
            'Replace every missing value with zero automatically'
        ],
        answer:
            'Investigate the missing values and choose an appropriate handling method',
        explanation:
            'There is no universal solution for missing data. The analyst should understand why values are missing and choose an appropriate method based on the dataset and analysis.'
    },
    {
        id: 24,
        question:
            'Why can removing duplicate records be important before calculating statistics?',
        options: [
            'Duplicates can cause observations to be counted more than once',
            'Duplicates automatically change text into numbers',
            'Duplicates prevent charts from being created',
            'Duplicates always represent missing values'
        ],
        answer:
            'Duplicates can cause observations to be counted more than once',
        explanation:
            'Unintended duplicate records can give some observations extra weight and distort calculations and conclusions.'
    },
    {
        id: 25,
        question: (
            <>
                <p>Consider the following dataset:</p>

                <pre className='mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto text-left'>
                    {`Scores = [70, 75, 80, 85, 90]`}
                </pre>

                <p className='mt-4'>
                    What is the mean score?
                </p>
            </>
        ),
        options: [
            '75',
            '78',
            '80',
            '85'
        ],
        answer: '80',
        explanation:
            'The mean is (70 + 75 + 80 + 85 + 90) / 5 = 400 / 5 = 80.'
    },
    {
        id: 26,
        question: (
            <>
                <p>Consider the following dataset:</p>

                <pre className='mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto text-left'>
                    {`Values = [10, 12, 13, 15, 100]`}
                </pre>

                <p className='mt-4'>
                    Which measure is likely to better represent the typical
                    value because of the unusually large value?
                </p>
            </>
        ),
        options: [
            'Mean',
            'Median',
            'Range',
            'Maximum'
        ],
        answer: 'Median',
        explanation:
            'The value 100 is much larger than the other observations and can strongly affect the mean. The median is generally less affected by extreme values.'
    },
    {
        id: 27,
        question:
            'An analyst wants to determine whether higher study hours are associated with higher exam scores. Which visualization would be most appropriate?',
        options: [
            'Pie chart',
            'Histogram',
            'Scatter plot',
            'Bar chart of course names'
        ],
        answer: 'Scatter plot',
        explanation:
            'Study hours and exam scores are both numerical variables. A scatter plot can help examine their relationship.'
    },
    {
        id: 28,
        question:
            'A report shows that average sales increased by 20%. Which additional information would make the finding easier to interpret?',
        options: [
            'The report title only',
            'The original sales value and the period being compared',
            'A decorative background',
            'The analyst’s favorite chart color'
        ],
        answer:
            'The original sales value and the period being compared',
        explanation:
            'Context is important when interpreting analytical findings. Knowing the original value and comparison period helps readers understand the significance of the 20% increase.'
    },
    {
        id: 29,
        question:
            'An analyst creates a chart with a misleading scale that makes a small difference appear extremely large. What principle of data visualization has been violated?',
        options: [
            'Use appropriate scales',
            'Use more colors',
            'Remove all labels',
            'Increase the number of categories'
        ],
        answer: 'Use appropriate scales',
        explanation:
            'Charts should use appropriate and honest scales so that visual differences accurately represent the underlying data.'
    },
    {
        id: 30,
        question: (
            <>
                <p>
                    An analyst is given student performance data and wants to
                    determine which subjects have the lowest average grades.
                    Which sequence is most appropriate?
                </p>
            </>
        ),
        options: [
            'Visualize → collect → clean → define the problem',
            'Define the problem → collect data → clean data → analyze → visualize → communicate',
            'Analyze → delete data → collect data → report',
            'Create a report → collect data → define the problem'
        ],
        answer:
            'Define the problem → collect data → clean data → analyze → visualize → communicate',
        explanation:
            'A typical analytics workflow begins by defining the question, followed by collecting and cleaning data, analyzing it, visualizing important findings, and communicating the results.'
    }
]

export default dataAnalyticsQuiz