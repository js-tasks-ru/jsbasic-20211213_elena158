function namify(users) {
  let result =[];
  result = [...new Set(users.map(item => item.name))];
  return result
}
