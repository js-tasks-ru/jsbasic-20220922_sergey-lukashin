function showSalary(users, age) {
  return users.map(u => u.age <= age ? u.name + ", " + u.balance + "\n" : null).join('').trim()
}
