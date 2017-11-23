function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(HELLO){
  console.log(`${HELLO.toUpperCase()}`)
}

function logWhisper(hello){
  console.log(`${hello.toLowerCase()}`)
}

function sayHiToGrandma(string) {
  if (string === whisper(string)) {
    return "I can't hear you!";
  }
}
