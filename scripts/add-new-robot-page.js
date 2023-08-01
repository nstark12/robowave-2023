import fs from 'fs'
import inquirer from "inquirer"
import { getRobotPageHTML } from './helpers.js'

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the robot\'s name',
    },
    {
        type: 'number',
        name: 'price',
        message: 'What is the robot\'s price',
    },
    {
        type: 'list',
        name: 'condition',
        message: 'What is the robot\'s condition',
        choices: ['New', "Used"],
    },
    {
        type: 'number',
        name: 'weight',
        message: 'What is the robot\'s weight',
    },
    {
        type: 'checkbox',
        name: 'features',
        message: 'Which features are included',
        choices: ['Can fly', 'Can talk', 'Can clear'],
    },
    {
        type: 'number',
        name: 'numCodeViolations',
        message: 'How many code violations have been reported for this robot',
        default: 0,
    }      
])
    .then(answers => {
        const html = getRobotPageHTML(answers)
        fs.writeFile(`./robots/${answers.name}.html`, html, err => {
            if (err) {
                throw err
            }
        })
    })
    .catch(error => console.log(error))