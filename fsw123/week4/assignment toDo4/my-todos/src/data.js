import { v4 as uuidv4 } from 'uuid'

export const listoftodos = [
    {
        id: uuidv4(),
        text: 'goto gym',
        isCompleted: true
    },
    {
        id: uuidv4(),
        text: 'do laundry',
        isCompleted: false
    },
    {
        id: uuidv4(),
        text: 'food Shopping',
        isCompleted: true
    },
    {
        id: uuidv4(),
        text: 'do homework',
        isCompleted: true
    }
]