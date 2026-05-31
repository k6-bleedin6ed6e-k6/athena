const STARTER = `# Grade Calculator — BUS 101
# Run your code with the ▶ run button

`

const SOL_1 = `# Grade Calculator — BUS 101
print("Hello, I'm Alex")
`

const SOL_2 = `# Grade Calculator — BUS 101
print("Hello, I'm Alex")

grades = [85, 92, 78, 90, 88]
print(grades)
`

const SOL_3 = `# Grade Calculator — BUS 101
print("Hello, I'm Alex")

grades = [85, 92, 78, 90, 88]
average = sum(grades) / len(grades)
print(average)
`

const SOL_4 = `# Grade Calculator — BUS 101
print("Hello, I'm Alex")

grades = [85, 92, 78, 90, 88]
average = sum(grades) / len(grades)

if average >= 90:
    print("A")
elif average >= 80:
    print("B")
elif average >= 70:
    print("C")
elif average >= 60:
    print("D")
else:
    print("F")
`

const SOL_5 = `# Grade Calculator — BUS 101
def calculate_grade(grades):
    average = sum(grades) / len(grades)
    if average >= 90:
        return "A"
    elif average >= 80:
        return "B"
    elif average >= 70:
        return "C"
    elif average >= 60:
        return "D"
    else:
        return "F"

my_grades = [85, 92, 78, 90, 88]
print("Hello, I'm Alex")
print("Grade:", calculate_grade(my_grades))
`

const SOL_6 = SOL_5

export const pythonGradeLesson = {
  id:       'python-grade-calculator',
  title:    'grade calculator',
  language: 'python',
  description: 'Write a Python script to calculate your BUS 101 grade.',

  files: {
    'grades.py': {
      language: 'python',
      readOnly: false,
      initial:  STARTER,
      solution: SOL_6,
    },
  },

  steps: [
    {
      id:          'say-hello',
      title:       'say hello',
      instruction: "Every program starts somewhere. Start yours by printing your name — just so the script knows who it belongs to.\n\nClick ▶ run to see it work.",
      validate:    (files) => files['grades.py']?.includes('print('),
      solution:    SOL_1,
      hint:        'print("Hello, I\'m Alex")',
    },
    {
      id:          'store-grades',
      title:       'store your grades',
      instruction: "Create a variable called `grades` and set it to a list of your BUS 101 scores.\n\nA list in Python looks like this: [85, 92, 78]\n\nRun it — Python should print your list.",
      validate:    (files) => /grades\s*=\s*\[[\d\s,]+\]/.test(files['grades.py'] || ''),
      solution:    SOL_2,
      hint:        'grades = [85, 92, 78, 90, 88]',
    },
    {
      id:          'find-average',
      title:       'find the average',
      instruction: "Calculate the average of your grades.\n\nPython has two built-in tools:\n• sum(grades) — adds them all up\n• len(grades) — counts how many there are\n\nDivide one by the other. Print the result.",
      validate:    (files) => {
        const f = files['grades.py'] || ''
        return f.includes('sum(') && f.includes('len(') && f.includes('/')
      },
      solution:    SOL_3,
      hint:        'average = sum(grades) / len(grades)\nprint(average)',
    },
    {
      id:          'letter-grade',
      title:       'letter grade',
      instruction: "Turn the average into a letter grade.\n\n• 90 and above → A\n• 80 and above → B\n• 70 and above → C\n• 60 and above → D\n• below 60 → F\n\nUse if / elif / else. Print the letter.",
      validate:    (files) => {
        const f = files['grades.py'] || ''
        return f.includes('if') && f.includes('elif') && (f.includes('"A"') || f.includes("'A'"))
      },
      solution:    SOL_4,
      hint:        'if average >= 90:\n    print("A")\nelif average >= 80:\n    print("B")',
    },
    {
      id:          'make-function',
      title:       'make it a function',
      instruction: "Wrap your grade logic in a reusable function called `calculate_grade`.\n\nA function takes `grades` as a parameter and returns the letter — so you can call it with any set of scores.\n\ndef calculate_grade(grades):\n    # your logic here\n    return letter",
      validate:    (files) => /def calculate_grade\s*\(/.test(files['grades.py'] || ''),
      solution:    SOL_5,
      hint:        'def calculate_grade(grades):\n    average = sum(grades) / len(grades)\n    # if/elif/else here\n    return letter',
    },
    {
      id:          'run-it',
      title:       'run it',
      instruction: "Call your function with your grades list and print the result.\n\nThen hit ▶ run. See your grade calculated live.\n\nThis script is yours — you wrote it. Next up: version control it with Git so you never lose it.",
      validate:    (files, pyOutput) => {
        const f = files['grades.py'] || ''
        return f.includes('calculate_grade(') && (pyOutput?.output?.trim().length > 0)
      },
      solution:    SOL_6,
      hint:        'print("Grade:", calculate_grade(my_grades))\n\nThen click ▶ run.',
    },
  ],
}

export const CODE_LESSONS = [pythonGradeLesson]
