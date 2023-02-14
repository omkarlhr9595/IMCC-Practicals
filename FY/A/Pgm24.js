// Name: Omkar Lohar
// Roll No. : 2201112

//24.Write a program to display Power Set of a given set using backtracking approach

function generatePowerSet(set) {
    const powerSet = [[]];
  
    function backtrack(start, subset) {
      for (let i = start; i < set.length; i++) {
        subset.push(set[i]);
        powerSet.push([...subset]);
        backtrack(i + 1, subset);
        subset.pop();
      }
    }
  
    backtrack(0, []);
  
    return powerSet;
  }
  
  // Example usage:
  const set = [1, 2, 3];
  const powerSet = generatePowerSet(set);
  console.log(powerSet);
  