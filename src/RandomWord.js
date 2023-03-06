// Script to select a random word from the dictionary.txt file
// import textfile from './/dictionary.txt'

// import { useEffect } from "react";

// let fetchData = async() => {
//   let resp = await fetch('http://localhost:3000/dictionary.txt')
//   let final = await resp.text();
//   console.log(final)
// }

// useEffect(() => {
//   fetchData();

// },[])

// export default fetchData;
// I've spent 5 hours trying to figure out how to import the stupid txt file into this react js. I cannot waste anymore time on this...
// I've given up weekends and evenings for the last few weeks on this course and under pressure from my employer to the point where my eyes are burning every single day and need to go and see a doctor.


let words = [
  'random',
  'words',
  'for',
  'testing'
]

function randomWord() {
  return words[Math.floor(Math.random() * words.length)]
}

export {randomWord}
