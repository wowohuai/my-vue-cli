new Promise((resolve) => {
  console.log('start')
  resolve(123)
}).then(res => console.log(res))