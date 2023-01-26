class MaximumNumberOfWords {
  maximumNumberOfWords(arr) {
    let maxcount = 0;
    arr.forEach((element) => {
      let count = 0;
      for (let i = 1; i < element.length - 1; i++) {
        if (element[i] === " ") count++;
      }

      if (count > maxcount) maxcount = count;
    });

    return maxcount + 1;
  }
}

const obj = new MaximumNumberOfWords();

console.log(
  obj.maximumNumberOfWords([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);
