function vowelAndConsonantCount(N, str) {
  //write code here
  let vowels = 0;
  for (let i = 0; i < N; i++) {
    if (checkVowel(str[i])) {
      vowels++;
    }
  }
  console.log(vowels, N - vowels);

  function checkVowel(char) {
    return (
      char == "a" || char == "e" || char == "o" || char == "u" || char == "i"
    );
  }
}

vowelAndConsonantCount(9, "Nageshwar");