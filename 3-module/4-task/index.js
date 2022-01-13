function showSalary(users, age) {
  let result= ""
  let someUsers = users.filter(item => item.age <= age);
  console.log(someUsers)
  for (let i= 0; i< someUsers.length; i++){
    result= result+someUsers[i].name+ ', '+ someUsers[i].balance
    if (i < someUsers.length-1){
      result=result+ "\n"
    }
  }
  return result;
}
