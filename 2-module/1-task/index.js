function sumSalary(salaries) {
  let result = 0;

  for (key in salaries) {
    if (Number.isInteger(salaries[key]) && salaries[key] != NaN && salaries[key] != Infinity && salaries[key] != -Infinity) {
      result = result + salaries[key]

    }
  }
  return result
}

