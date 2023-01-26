class Anagrams {
  isAnagram(string1, string2) {
    let obj1 = Array.from(string1);
    let obj2 = Array.from(string2);
    obj1 = obj1.sort();
    obj2 = obj2.sort();
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }
}

const obj = new Anagrams();

console.log(obj.isAnagram("mary", "army"));
