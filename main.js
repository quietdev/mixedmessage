//A basic program for outputing a mixed message
//First portfolio program

const potentialAnswers = {
    mood: ['sad', 'happy', 'bored', 'annoyed', 'terrified', 'anxious', 'excited'],
    thought: ['why am I running this program?', 'where is she right now?', "is she thinking about me?"],
    occupation: ['programmer', 'pianist', 'guitarist', 'jump roping professional', 'ice cream server'],
}

const randomMood = () => {
    let x = Math.floor(Math.random() * (potentialAnswers.mood.length - 1))
    return potentialAnswers.mood[x]
}

const randomThought = () => {
    let x = Math.floor(Math.random() * (potentialAnswers.thought.length - 1))
    return potentialAnswers.thought[x]
}

const randomOccupation = () => {
    let x = Math.floor(Math.random() * (potentialAnswers.occupation.length - 1))
    return potentialAnswers.occupation[x]
}

const giveMessage = () => {
    console.log(`Hello I can tell you're feeling ${randomMood()}.`)
    console.log(`I bet you're asking yourself ${randomThought()}`)
    console.log(`Why do I have a feeling you're a ${randomOccupation()}.`)
}

giveMessage();