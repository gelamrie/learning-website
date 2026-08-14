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
        answer: 'def'
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
        answer: 'str'
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
        answer: '#'
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
        answer: 'print()'
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
        answer: '[1, 2, 3]'
    },
    {
        id: 6,
        question: 'What is printed by this code?\n\nx = [10, 20, 30]\ny = x\ny.append(40)\nprint(x)',
        options: [
            '[10, 20, 30]',
            '[10, 20, 30, 40]',
            '[40]',
            'An error occurs'
        ],
        answer: '[10, 20, 30, 40]'
    },

    {
        id: 7,
        question: 'What is the value of result after this code runs?\n\nnumbers = [2, 4, 6, 8]\nresult = [n * 2 for n in numbers if n > 4]',
        options: [
            '[4, 8, 12, 16]',
            '[12, 16]',
            '[6, 8]',
            '[2, 4, 6, 8]'
        ],
        answer: '[12, 16]'
    },

    {
        id: 8,
        question: 'What is printed by this code?\n\nx = 10\n\ndef change():\n    x = 20\n\nchange()\nprint(x)',
        options: [
            '10',
            '20',
            'None',
            'NameError'
        ],
        answer: '10'
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
        answer: 'A dictionary mapping each word to its count'
    },

    {
        id: 10,
        question: 'What is printed by this code?\n\nvalues = [1, 2, 3]\n\nfor value in values:\n    if value == 2:\n        continue\n    print(value)',
        options: [
            '1 and 2',
            '2 and 3',
            '1 and 3',
            '1, 2, and 3'
        ],
        answer: '1 and 3'
    },

    {
        id: 11,
        question: 'What happens when this code is executed?\n\nnumbers = [1, 2, 3]\nprint(numbers[3])',
        options: [
            'It prints 3',
            'It prints None',
            'It raises an IndexError',
            'It raises a KeyError'
        ],
        answer: 'It raises an IndexError'
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
        answer: 'def total(*numbers):'
    },

    {
        id: 13,
        question: 'What is printed by this code?\n\nitems = {"a": 1, "b": 2}\n\nprint(items.get("c", 0))',
        options: [
            'None',
            '0',
            'KeyError',
            '"c"'
        ],
        answer: '0'
    },

    {
        id: 14,
        question: 'A function should return the larger of two numbers. Which implementation is correct?',
        options: [
            'def larger(a, b):\n    return a if a > b else b',
            'def larger(a, b):\n    return a if a < b else b',
            'def larger(a, b):\n    return a + b',
            'def larger(a, b):\n    return a - b'
        ],
        answer: 'def larger(a, b):\n    return a if a > b else b'
    },

    {
        id: 15,
        question: 'What is printed by this code?\n\nx = 5\n\ntry:\n    result = 10 / (x - 5)\nexcept ZeroDivisionError:\n    result = 0\n\nprint(result)',
        options: [
            '0',
            '2',
            '5',
            'A ZeroDivisionError is not handled'
        ],
        answer: '0'
    }
]

export default pythonQuiz