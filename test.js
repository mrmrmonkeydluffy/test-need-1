const main = (apple=2) => {
  let i = 0;
  for (let k = 0; k < 10; k++) {
    i += k * apple;
    console.log(i);
  }
};

main();