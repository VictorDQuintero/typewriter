const sentence = "hello there from lighthouse labs";

for (let i = 0; i < sentence.length; i++) {
  // loops through string
  let delayTime = i * 50; // calculates a delay time for each element of string
  setTimeout(() => {
    process.stdout.write(sentence[i]); // prints each element of string
    if (i === sentence.length - 1) {
      // makes new line in terminal
      console.log("");
    }
  }, delayTime);
}
