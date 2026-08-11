const pythonLessons = [
    {
        id: 1,
        title: 'Python Fundamentals',

        content: (
            <>
                <p>
                    Python is a high-level programming language known for its
                    readable syntax and wide range of applications. It is used
                    in web development, data analysis, automation, artificial
                    intelligence, cybersecurity, and many other areas of
                    technology.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Why Learn Python?
                </h2>

                <p className='mt-4'>
                    Python is often recommended for beginners because its syntax
                    is relatively easy to understand. Instead of focusing on
                    complicated syntax, learners can concentrate on solving
                    programming problems and understanding programming concepts.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Your First Python Program
                </h2>

                <p className='mt-4'>
                    A simple Python program can display text using the
                    <code> print() </code>
                    function.
                </p>

                <pre className='mt-4 rounded-lg bg-neutral-900 p-4 text-sm text-white overflow-x-auto'>
{`print("Hello, World!")`}
                </pre>

                <p className='mt-4'>
                    The text inside the parentheses is displayed when the
                    program runs.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Python Syntax
                </h2>

                <p className='mt-4'>
                    Python uses indentation to organize blocks of code.
                    Consistent indentation is important because it helps
                    Python determine which statements belong together.
                </p>

                <pre className='mt-4 rounded-lg bg-neutral-900 p-4 text-sm text-white overflow-x-auto'>
{`if True:
    print("This code is indented")`}
                </pre>

                <h2 className='mt-8 text-2xl font-bold'>
                    Comments
                </h2>

                <p className='mt-4'>
                    Comments are notes written inside the code for developers.
                    Python ignores comments when executing a program.
                </p>

                <pre className='mt-4 rounded-lg bg-neutral-900 p-4 text-sm text-white overflow-x-auto'>
{`# This is a comment
print("Hello")`}
                </pre>

                <h2 className='mt-8 text-2xl font-bold'>
                    Key Takeaways
                </h2>

                <ul className='mt-4 list-disc pl-6 space-y-2'>
                    <li>Python has a simple and readable syntax.</li>
                    <li>The print() function displays output.</li>
                    <li>Indentation is important in Python.</li>
                    <li>Comments can be used to explain code.</li>
                </ul>
            </>
        ),
    },

    {
        id: 2,
        title: 'Variables and Data Types',

        content: (
            <>
                <p>
                    Variables are used to store information that a program can
                    use later. In Python, you do not need to explicitly declare
                    the type of a variable before assigning a value.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Creating Variables
                </h2>

                <pre className='mt-4 rounded-lg bg-neutral-900 p-4 text-sm text-white overflow-x-auto'>
{`name = "Angela"
age = 19
score = 95.5`}
                </pre>

                <p className='mt-4'>
                    In this example, Python automatically determines the type
                    of each value.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Common Data Types
                </h2>

                <ul className='mt-4 list-disc pl-6 space-y-2'>
                    <li>
                        <strong>String</strong> - text such as
                        <code> "Hello" </code>
                    </li>
                    <li>
                        <strong>Integer</strong> - whole numbers such as
                        <code> 10 </code>
                    </li>
                    <li>
                        <strong>Float</strong> - decimal numbers such as
                        <code> 10.5 </code>
                    </li>
                    <li>
                        <strong>Boolean</strong> - either
                        <code> True </code> or
                        <code> False </code>
                    </li>
                </ul>

                <h2 className='mt-8 text-2xl font-bold'>
                    Checking a Data Type
                </h2>

                <p className='mt-4'>
                    The <code>type()</code> function can be used to determine
                    the data type of a value.
                </p>

                <pre className='mt-4 rounded-lg bg-neutral-900 p-4 text-sm text-white overflow-x-auto'>
{`age = 19

print(type(age))`}
                </pre>

                <h2 className='mt-8 text-2xl font-bold">
                    Changing Data Types
                </h2>

                <p className="mt-4">
                    Python provides functions for converting values from one
                    data type to another.
                </p>

                <pre className="mt-4 rounded-lg bg-neutral-900 p-4 text-sm text-white overflow-x-auto">
{`age = "19"

age = int(age)

print(age)`}
                </pre>

                <h2 className="mt-8 text-2xl font-bold'>
                    User Input
                </h2>

                <p className='mt-4'>
                    The <code>input()</code> function allows a program to
                    receive information from the user.
                </p>

                <pre className='mt-4 rounded-lg bg-neutral-900 p-4 text-sm text-white overflow-x-auto'>
{`name = input("Enter your name: ")

print("Hello", name)`}
                </pre>
            </>
        ),
    },

    {
        id: 3,
        title: 'Conditional Statements',

        content: (
            <>
                <p>
                    Conditional statements allow a program to make decisions
                    based on whether a condition is true or false.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    The if Statement
                </h2>

                <pre className='mt-4 rounded-lg bg-neutral-900 p-4 text-sm text-white overflow-x-auto'>
{`age = 18

if age >= 18:
    print("You are an adult.")`}
                </pre>

                <h2 className='mt-8 text-2xl font-bold'>
                    The else Statement
                </h2>

                <p className='mt-4'>
                    The <code>else</code> block runs when the condition in the
                    <code>if</code> statement is false.
                </p>

                <pre className='mt-4 rounded-lg bg-neutral-900 p-4 text-sm text-white overflow-x-auto'>
{`age = 16

if age >= 18:
    print("You are an adult.")
else:
    print("You are a minor.")`}
                </pre>

                <h2 className='mt-8 text-2xl font-bold'>
                    The elif Statement
                </h2>

                <p className='mt-4'>
                    The <code>elif</code> statement allows a program to check
                    additional conditions.
                </p>

                <pre className='mt-4 rounded-lg bg-neutral-900 p-4 text-sm text-white overflow-x-auto'>
{`score = 85

if score >= 90:
    print("Excellent")
elif score >= 75:
    print("Passed")
else:
    print("Needs improvement")`}
                </pre>

                <h2 className='mt-8 text-2xl font-bold'>
                    Comparison Operators
                </h2>

                <ul className='mt-4 list-disc pl-6 space-y-2'>
                    <li><code>==</code> equal to</li>
                    <li><code>!=</code> not equal to</li>
                    <li><code>&gt;</code> greater than</li>
                    <li><code>&lt;</code> less than</li>
                    <li><code>&gt;=</code> greater than or equal to</li>
                    <li><code>&lt;=</code> less than or equal to</li>
                </ul>
            </>
        ),
    },

    {
        id: 4,
        title: 'Loops',

        content: (
            <>
                <p>
                    Loops allow a program to repeatedly execute a block of
                    code. They are useful when the same operation needs to be
                    performed multiple times.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    The for Loop
                </h2>

                <p className='mt-4'>
                    A <code>for</code> loop is commonly used to iterate through
                    a sequence of values.
                </p>

                <pre className='mt-4 rounded-lg bg-neutral-900 p-4 text-sm text-white overflow-x-auto'>
{`for number in range(5):
    print(number)`}
                </pre>

                <p className='mt-4'>
                    The <code>range(5)</code> function generates values from
                    0 up to, but not including, 5.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    The while Loop
                </h2>

                <p className='mt-4'>
                    A <code>while</code> loop continues running while its
                    condition remains true.
                </p>

                <pre className='mt-4 rounded-lg bg-neutral-900 p-4 text-sm text-white overflow-x-auto'>
{`count = 1

while count <= 5:
    print(count)
    count += 1`}
                </pre>

                <h2 className='mt-8 text-2xl font-bold'>
                    break
                </h2>

                <p className='mt-4'>
                    The <code>break</code> statement stops a loop immediately.
                </p>

                <pre className='mt-4 rounded-lg bg-neutral-900 p-4 text-sm text-white overflow-x-auto'>
{`for number in range(10):
    if number == 5:
        break

    print(number)`}
                </pre>

                <h2 className='mt-8 text-2xl font-bold'>
                    continue
                </h2>

                <p className='mt-4'>
                    The <code>continue</code> statement skips the current
                    iteration and continues with the next one.
                </p>

                <pre className='mt-4 rounded-lg bg-neutral-900 p-4 text-sm text-white overflow-x-auto'>
{`for number in range(5):
    if number == 2:
        continue

    print(number)`}
                </pre>
            </>
        ),
    },

    {
        id: 5,
        title: 'Functions',

        content: (
            <>
                <p>
                    Functions are reusable blocks of code designed to perform
                    a specific task. They help make programs easier to
                    organize, understand, and maintain.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Creating a Function
                </h2>

                <pre className='mt-4 rounded-lg bg-neutral-900 p-4 text-sm text-white overflow-x-auto'>
{`def greet():
    print("Hello!")

greet()`}
                </pre>

                <h2 className='mt-8 text-2xl font-bold'>
                    Function Parameters
                </h2>

                <p className='mt-4'>
                    Parameters allow information to be passed into a function.
                </p>

                <pre className='mt-4 rounded-lg bg-neutral-900 p-4 text-sm text-white overflow-x-auto'>
{`def greet(name):
    print("Hello", name)

greet("Angela")`}
                </pre>

                <h2 className='mt-8 text-2xl font-bold'>
                    Returning Values
                </h2>

                <p className='mt-4'>
                    A function can return a result using the
                    <code>return</code> statement.
                </p>

                <pre className='mt-4 rounded-lg bg-neutral-900 p-4 text-sm text-white overflow-x-auto'>
{`def add(a, b):
    return a + b

result = add(5, 3)

print(result)`}
                </pre>

                <h2 className='mt-8 text-2xl font-bold'>
                    Why Use Functions?
                </h2>

                <ul className='mt-4 list-disc pl-6 space-y-2'>
                    <li>Reduce repeated code.</li>
                    <li>Make programs easier to understand.</li>
                    <li>Separate a program into smaller tasks.</li>
                    <li>Make code easier to test and maintain.</li>
                </ul>
            </>
        ),
    },

    {
        id: 6,
        title: 'Lists and Dictionaries',

        content: (
            <>
                <p>
                    Lists and dictionaries are two important data structures
                    in Python. They allow programs to store and organize
                    collections of information.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Lists
                </h2>

                <p className='mt-4'>
                    A list stores multiple values in a single variable.
                </p>

                <pre className='mt-4 rounded-lg bg-neutral-900 p-4 text-sm text-white overflow-x-auto'>
{`fruits = ["Apple", "Banana", "Orange"]

print(fruits[0])`}
                </pre>

                <p className='mt-4'>
                    Python uses zero-based indexing, meaning the first item has
                    an index of <code>0</code>.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Adding Items to a List
                </h2>

                <pre className='mt-4 rounded-lg bg-neutral-900 p-4 text-sm text-white overflow-x-auto'>
{`fruits = ["Apple", "Banana"]

fruits.append("Orange")

print(fruits)`}
                </pre>

                <h2 className='mt-8 text-2xl font-bold'>
                    Dictionaries
                </h2>

                <p className='mt-4'>
                    A dictionary stores information using key-value pairs.
                </p>

                <pre className='mt-4 rounded-lg bg-neutral-900 p-4 text-sm text-white overflow-x-auto'>
{`student = {
    "name": "Angela",
    "age": 19,
    "course": "Computer Engineering"
}

print(student["name"])`}
                </pre>

                <h2 className='mt-8 text-2xl font-bold'>
                    When to Use Them
                </h2>

                <ul className='mt-4 list-disc pl-6 space-y-2'>
                    <li>Use lists when storing ordered collections.</li>
                    <li>
                        Use dictionaries when information needs to be
                        associated with specific keys.
                    </li>
                </ul>
            </>
        ),
    },

    {
        id: 7,
        title: 'Object-Oriented Programming',

        content: (
            <>
                <p>
                    Object-oriented programming, or OOP, is a programming
                    approach that organizes software around objects and the
                    data and behavior associated with them.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Classes and Objects
                </h2>

                <p className='mt-4'>
                    A class can be thought of as a blueprint for creating
                    objects.
                </p>

                <pre className='mt-4 rounded-lg bg-neutral-900 p-4 text-sm text-white overflow-x-auto'>
{`class Student:
    def __init__(self, name, course):
        self.name = name
        self.course = course

student = Student(
    "Angela",
    "Computer Engineering"
)

print(student.name)
print(student.course)`}
                </pre>

                <h2 className='mt-8 text-2xl font-bold'>
                    The __init__ Method
                </h2>

                <p className='mt-4'>
                    The <code>__init__</code> method is called when a new
                    object is created. It is commonly used to initialize the
                    object's attributes.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Methods
                </h2>

                <p className='mt-4'>
                    Methods are functions defined inside a class. They can
                    describe actions that an object can perform.
                </p>

                <pre className='mt-4 rounded-lg bg-neutral-900 p-4 text-sm text-white overflow-x-auto'>
{`class Student:
    def __init__(self, name):
        self.name = name

    def introduce(self):
        print("My name is", self.name)

student = Student("Angela")

student.introduce()`}
                </pre>

                <h2 className='mt-8 text-2xl font-bold'>
                    Why Learn OOP?
                </h2>

                <ul className='mt-4 list-disc pl-6 space-y-2'>
                    <li>Organizes larger programs.</li>
                    <li>Encourages reusable code.</li>
                    <li>Groups related data and behavior together.</li>
                    <li>Makes complex programs easier to maintain.</li>
                </ul>
            </>
        ),
    },

    {
        id: 8,
        title: 'Practical Python Projects',

        content: (
            <>
                <p>
                    The best way to strengthen your Python skills is to apply
                    what you have learned by building small projects.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Project 1: Calculator
                </h2>

                <p className='mt-4'>
                    Build a calculator that accepts two numbers and performs
                    basic mathematical operations.
                </p>

                <pre className='mt-4 rounded-lg bg-neutral-900 p-4 text-sm text-white overflow-x-auto'>
{`def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

print(add(10, 5))
print(subtract(10, 5))`}
                </pre>

                <h2 className='mt-8 text-2xl font-bold'>
                    Project 2: Number Guessing Game
                </h2>

                <p className='mt-4'>
                    Create a game where the computer selects a number and the
                    player attempts to guess it.
                </p>

                <p className='mt-4'>
                    This project allows you to practice variables, conditions,
                    loops, user input, and comparison operators.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Project 3: To-Do List
                </h2>

                <p className='mt-4'>
                    Create a simple program that allows users to add, view, and
                    remove tasks.
                </p>

                <p className='mt-4'>
                    This project can help you practice lists, functions,
                    loops, conditions, and user input.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Project 4: Student Grade Tracker
                </h2>

                <p className='mt-4'>
                    Build a program that stores student names and grades,
                    calculates averages, and displays results.
                </p>

                <h2 className='mt-8 text-2xl font-bold'>
                    Final Challenge
                </h2>

                <p className='mt-4'>
                    Build a small Python application that combines several
                    concepts from this course.
                </p>

                <ul className='mt-4 list-disc pl-6 space-y-2'>
                    <li>Use variables to store information.</li>
                    <li>Use conditions to make decisions.</li>
                    <li>Use loops to repeat operations.</li>
                    <li>Use functions to organize your code.</li>
                    <li>Use lists or dictionaries to manage data.</li>
                    <li>Use classes when appropriate.</li>
                </ul>

                <h2 className='mt-8 text-2xl font-bold'>
                    What You Should Be Able to Do
                </h2>

                <p className='mt-4'>
                    After completing this course, you should have a foundation
                    for writing Python programs and be ready to explore more
                    advanced topics such as modules, file handling, APIs,
                    databases, automation, and popular Python libraries.
                </p>
            </>
        ),
    },
];

export default pythonLessons;