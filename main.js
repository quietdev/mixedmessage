//A basic program for outputing a mixed message
//First portfolio program

const potentialAnswers = {
    mood = ['sad', 'happy', 'bored', 'annoyed', 'terrified', 'anxious', 'excited'],
    thought = ['why am I running this program?', 'where is she right now?', "is she thinking about me?"],
    occupation = ['programmer', 'pianist', 'guitarist', 'jump roping professional', 'ice cream server'],
}

const randomMood = () => {
    let x = Math.floor(Math.random() * potentialAnswers.mood.length - 1)
    return mood[x]
}

const randomThought = () => {
    let x = Math.floor(Math.random() * potentialAnswers.thought.length - 1)
    return thought[x]
}

const randomOccupation = () => {
    let x = Math.floor(Math.random() * potentialAnswers.occupation.length - 1)
    return occupation[x]
}