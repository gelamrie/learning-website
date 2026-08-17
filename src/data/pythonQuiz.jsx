const pythonQuiz = [
    {
        id: 1,
        question: 'Which keyword is used to define a function in Python?',
        options: [
            'function',
            'def',
            'func',
            'define'
        ],
        answer: 'def',
        explanation: 'The def keyword is used to define a function in Python. It is followed by the function name and parentheses containing any parameters.'
    },
    {
        id: 2,
        question: 'Which data type is used to store text in Python?',
        options: [
            'int',
            'float',
            'str',
            'bool'
        ],
        answer: 'str',
        explanation: 'The str data type is used to represent text in Python. For example, "Hello" is a string value.'
    },
    {
        id: 3,
        question: 'Which symbol is used to start a comment in Python?',
        options: [
            '//',
            '/*',
            '#',
            '--'
        ],
        answer: '#',
        explanation: 'The # symbol starts a single-line comment in Python. Anything written after # on that line is treated as a comment and is not executed.'
    },
    {
        id: 4,
        question: 'Which function is used to display output in Python?',
        options: [
            'display()',
            'console.log()',
            'print()',
            'output()'
        ],
        answer: 'print()',
        explanation: 'The print() function is used to display text, numbers, variables, and other values as output in Python.'
    },
    {
        id: 5,
        question: 'Which of these is a Python list?',
        options: [
            '(1, 2, 3)',
            '[1, 2, 3]',
            '{1, 2, 3}',
            '<1, 2, 3>'
        ],
        answer: '[1, 2, 3]',
        explanation: 'Python lists are written using square brackets. A list can contain multiple values and can be modified after it is created.'
    },
    {
        id: 6,
        question: (
            <>
                <p>What is printed by this code?</p>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto text-left">
                    {`x = [10, 20, 30]
y = x
y.append(40)

print(x)`}
                </pre>
            </>
        ),
        options: [
            '[10, 20, 30]',
            '[10, 20, 30, 40]',
            '[40]',
            'An error occurs'
        ],
        answer: '[10, 20, 30, 40]',
        explanation: 'The statement y = x makes y refer to the same list as x. Therefore, when 40 is added using y.append(40), the original list referenced by x is also changed.'
    },
    {
        id: 7,
        question: (
            <>
                <p>What is the value of result after this code runs?</p>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto text-left">
                    {`numbers = [2, 4, 6, 8]
result = [n * 2 for n in numbers if n > 4]`}
                </pre>
            </>
        ),
        options: [
            '[4, 8, 12, 16]',
            '[12, 16]',
            '[6, 8]',
            '[2, 4, 6, 8]'
        ],
        answer: '[12, 16]',
        explanation: 'The list comprehension only includes numbers greater than 4, which are 6 and 8. Each is multiplied by 2, producing [12, 16].'
    },
    {
        id: 8,
        question: (
            <>
                <p>What is printed by this code?</p>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto text-left">
                    {`x = 10

def change():
    x = 20

change()
print(x)`}
                </pre>
            </>
        ),
        options: [
            '10',
            '20',
            'None',
            'NameError'
        ],
        answer: '10',
        explanation: 'The x = 20 inside the change() function is a local variable. It does not change the x = 10 defined outside the function, so print(x) outputs 10.'
    },
    {
        id: 9,
        question: 'A program needs to count how many times each word appears in a list. Which data structure is most appropriate?',
        options: [
            'A dictionary mapping each word to its count',
            'A tuple containing all words',
            'A set containing only unique words',
            'A string containing all words'
        ],
        answer: 'A dictionary mapping each word to its count',
        explanation: 'A dictionary is appropriate because it can associate each word with a value representing its count. For example, {"apple": 3} means apple appeared three times.'
    },
    {
        id: 10,
        question: (
            <>
                <p>What is printed by this code?</p>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto text-left">
                    {`values = [1, 2, 3]

for value in values:
    if value == 2:
        continue
    print(value)`}
                </pre>
            </>
        ),
        options: [
            '1 and 2',
            '2 and 3',
            '1 and 3',
            '1, 2, and 3'
        ],
        answer: '1 and 3',
        explanation: 'When value is 2, the continue statement skips the rest of that loop iteration. Therefore, 2 is not printed, while 1 and 3 are printed.'
    },
    {
        id: 11,
        question: (
            <>
                <p>What happens when this code is executed?</p>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto text-left">
                    {`numbers = [1, 2, 3]
print(numbers[3])`}
                </pre>
            </>
        ),
        options: [
            'It prints 3',
            'It prints None',
            'It raises an IndexError',
            'It raises a KeyError'
        ],
        answer: 'It raises an IndexError',
        explanation: 'List indexing starts at 0, so the valid indexes are 0, 1, and 2. Index 3 does not exist in the list, so Python raises an IndexError.'
    },
    {
        id: 12,
        question: 'Which function definition correctly allows a caller to provide any number of positional arguments?',
        options: [
            'def total(*numbers):',
            'def total(numbers*):',
            'def total(**numbers):',
            'def total(numbers...):'
        ],
        answer: 'def total(*numbers):',
        explanation: 'The *numbers syntax allows a function to accept any number of positional arguments. Inside the function, the arguments are available as a tuple.'
    },
    {
        id: 13,
        question: (
            <>
                <p>What is printed by this code?</p>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto text-left">
                    {`items = {"a": 1, "b": 2}

print(items.get("c", 0))`}
                </pre>
            </>
        ),
        options: [
            'None',
            '0',
            'KeyError',
            '"c"'
        ],
        answer: '0',
        explanation: 'The get() method searches for the specified key. Since "c" is not present in the dictionary, get() returns the provided default value, which is 0.'
    },
    {
        id: 14,
        question: `A function should return the larger of two numbers. Which implementation is correct?`,
        options: [
            `def larger(a, b):
    return a if a > b else b`,

            `def larger(a, b):
    return a if a < b else b`,

            `def larger(a, b):
    return a + b`,

            `def larger(a, b):
    return a - b`
        ],
        answer: `def larger(a, b):
    return a if a > b else b`,
        explanation: 'The conditional expression compares a and b. If a is greater than b, it returns a; otherwise, it returns b. Therefore, the function always returns the larger number.'
    },
    {
        id: 15,
        question: (
            <>
                <p>What is printed by this code?</p>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto text-left">
                    {`x = 5

try:
    result = 10 / (x - 5)
except ZeroDivisionError:
    result = 0

print(result)`}
                </pre>
            </>
        ),
        options: [
            '0',
            '2',
            '5',
            'A ZeroDivisionError is not handled'
        ],
        answer: '0',
        explanation: 'Since x is 5, x - 5 equals 0. Dividing 10 by 0 raises a ZeroDivisionError. The except block catches the error and sets result to 0, so print(result) outputs 0.'
    },
    {
        id: 16,
        question: (
            <>
                <p>What is printed by this code?</p>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto text-left">
                    {`score = 82

if score >= 90:
    print("Excellent")
elif score >= 75:
    print("Passed")
else:
    print("Needs improvement")`}
                </pre>
            </>
        ),
        options: [
            'Excellent',
            'Passed',
            'Needs improvement',
            '82'
        ],
        answer: 'Passed',
        explanation: 'The score is 82. It does not meet the first condition of 90 or higher, but it does meet the elif condition of 75 or higher, so "Passed" is printed.'
    },
    {
        id: 17,
        question: (
            <>
                <p>What is printed by this code?</p>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto text-left">
                    {`for number in range(5):
    print(number)`}
                </pre>
            </>
        ),
        options: [
            '1 2 3 4 5',
            '0 1 2 3 4',
            '0 1 2 3 4 5',
            '5'
        ],
        answer: '0 1 2 3 4',
        explanation: 'range(5) generates values starting at 0 and stops before 5. Therefore, the loop prints 0, 1, 2, 3, and 4.'
    },
    {
        id: 18,
        question: (
            <>
                <p>What is printed by this code?</p>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto text-left">
                    {`count = 1

while count <= 3:
    print(count)
    count += 1`}
                </pre>
            </>
        ),
        options: [
            '1 2 3',
            '0 1 2',
            '1 2 3 4',
            '3'
        ],
        answer: '1 2 3',
        explanation: 'The while loop runs while count is less than or equal to 3. It prints 1, then 2, then 3. After count becomes 4, the condition is false and the loop stops.'
    },
    {
        id: 19,
        question: (
            <>
                <p>What is printed by this code?</p>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto text-left">
                    {`for number in range(6):
    if number == 3:
        break
    print(number)`}
                </pre>
            </>
        ),
        options: [
            '0 1 2',
            '0 1 2 3',
            '1 2 3',
            '3 4 5'
        ],
        answer: '0 1 2',
        explanation: 'The loop prints 0, 1, and 2. When number becomes 3, the break statement immediately stops the loop before 3 is printed.'
    },
    {
        id: 20,
        question: (
            <>
                <p>What is printed by this code?</p>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto text-left">
                    {`def add(a, b):
    return a + b

result = add(7, 3)

print(result)`}
                </pre>
            </>
        ),
        options: [
            '4',
            '10',
            '21',
            '73'
        ],
        answer: '10',
        explanation: 'The function receives 7 and 3 as arguments. It returns their sum, 7 + 3, which is 10.'
    },
    {
        id: 21,
        question: 'What is the main advantage of using functions in a Python program?',
        options: [
            'They automatically prevent all errors',
            'They allow code to be reused and organized into smaller tasks',
            'They make every variable global',
            'They eliminate the need for loops'
        ],
        answer: 'They allow code to be reused and organized into smaller tasks',
        explanation: 'Functions help organize programs into smaller tasks, reduce repeated code, and make programs easier to understand, test, and maintain.'
    },
    {
        id: 22,
        question: (
            <>
                <p>What is printed by this code?</p>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto text-left">
                    {`fruits = ["Apple", "Banana", "Orange"]

print(fruits[1])`}
                </pre>
            </>
        ),
        options: [
            'Apple',
            'Banana',
            'Orange',
            'An error occurs'
        ],
        answer: 'Banana',
        explanation: 'Python uses zero-based indexing. Apple is at index 0, Banana is at index 1, and Orange is at index 2.'
    },
    {
        id: 23,
        question: (
            <>
                <p>What will the list contain after this code runs?</p>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto text-left">
                    {`fruits = ["Apple", "Banana"]

fruits.append("Orange")

print(fruits)`}
                </pre>
            </>
        ),
        options: [
            '["Apple", "Banana"]',
            '["Orange"]',
            '["Apple", "Banana", "Orange"]',
            '["Apple", "Orange"]'
        ],
        answer: '["Apple", "Banana", "Orange"]',
        explanation: 'The append() method adds an item to the end of a list. Therefore, "Orange" is added after "Banana".'
    },
    {
        id: 24,
        question: 'A program needs to store a student\'s name, age, and course using labels for each value. Which data structure is most appropriate?',
        options: [
            'List',
            'Dictionary',
            'Float',
            'Boolean'
        ],
        answer: 'Dictionary',
        explanation: 'A dictionary is appropriate because it stores information using key-value pairs, such as "name", "age", and "course".'
    },
    {
        id: 25,
        question: (
            <>
                <p>What is printed by this code?</p>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto text-left">
                    {`student = {
    "name": "Alex",
    "age": 20
}

print(student["name"])`}
                </pre>
            </>
        ),
        options: [
            'student',
            'name',
            'Alex',
            '20'
        ],
        answer: 'Alex',
        explanation: 'The dictionary stores "Alex" as the value associated with the "name" key. Accessing student["name"] therefore returns "Alex".'
    },
    {
        id: 26,
        question: 'In object-oriented programming, what is the relationship between a class and an object?',
        options: [
            'A class is a loop used by an object',
            'A class is a blueprint used to create objects',
            'An object is always a function',
            'A class and an object are exactly the same'
        ],
        answer: 'A class is a blueprint used to create objects',
        explanation: 'A class defines the structure and behavior that objects created from it can have. It can be thought of as a blueprint for creating objects.'
    },
    {
        id: 27,
        question: (
            <>
                <p>What is printed by this code?</p>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto text-left">
                    {`class Student:
    def __init__(self, name):
        self.name = name

student = Student("Alex")

print(student.name)`}
                </pre>
            </>
        ),
        options: [
            'Student',
            'name',
            'Alex',
            'None'
        ],
        answer: 'Alex',
        explanation: 'When Student("Alex") creates the object, the __init__ method assigns "Alex" to self.name. Therefore, student.name contains "Alex".'
    },
    {
        id: 28,
        question: 'What is the purpose of the __init__ method in a Python class?',
        options: [
            'To stop a class from creating objects',
            'To initialize an object when it is created',
            'To create a loop',
            'To delete an object'
        ],
        answer: 'To initialize an object when it is created',
        explanation: 'The __init__ method is automatically called when a new object is created. It is commonly used to initialize the object\'s attributes.'
    },
    {
        id: 29,
        question: (
            <>
                <p>What is printed by this code?</p>

                <pre className="mt-4 rounded-lg bg-neutral-900 text-white p-4 overflow-x-auto text-left">
                    {`def multiply(a, b):
    return a * b

numbers = [2, 3, 4]

result = multiply(numbers[0], numbers[2])

print(result)`}
                </pre>
            </>
        ),
        options: [
            '6',
            '8',
            '12',
            '24'
        ],
        answer: '8',
        explanation: 'numbers[0] is 2 and numbers[2] is 4. The multiply() function returns 2 * 4, which equals 8.'
    },
    {
        id: 30,
        question: 'Which combination of Python concepts would be most useful for building a number guessing game?',
        options: [
            'Variables, conditions, loops, user input, and comparison operators',
            'Only comments and print statements',
            'Only dictionaries and classes',
            'Only lists and strings'
        ],
        answer: 'Variables, conditions, loops, user input, and comparison operators',
        explanation: 'The number guessing game described in the lesson allows learners to practice variables, conditions, loops, user input, and comparison operators together.'
    }
]

export default pythonQuiz