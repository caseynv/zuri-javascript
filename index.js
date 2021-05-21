function convertFahrToCelsius(fahr) {
    let parsedfahr;
  
    if (!Array.isArray(fahr)) {
      parsedfahr = parseInt(fahr);
    }
  
    if (isNaN(parsedfahr)) {
      return `${JSON.stringify(fahr)} is not a valid number but a/an ${
        Array.isArray(fahr) ? "array" : typeof fahr
      }`;
    }
  
    let celsius = ((fahr - 32) / 1.8).toFixed(4);
    console.log(celsius);
    return celsius;
  }

  
  
//   solution two
  const checkYuGiOh = (n) => {
    let a = [];
    if (Array.isArray(n)) {
      console.log(`invalid parameter: [${n}]`);
      return `invalid parameter: [${n}]`;
    } else if (typeof n === "object") {
      console.log(`invalid parameter: ${JSON.stringify(n)}`);
      return `invalid parameter: ${JSON.stringify(n)}`;
    } else if (typeof n === "boolean") {
      console.log(`invalid parameter: ${n}`);
      return `invalid parameter: ${n}`;
    } else if (isNaN(n) === true) {
      console.log(`invalid parameter: ${n}`);
      return `invalid parameter: ${n}`;
    } else {
      for (let i = 1; i <= n; i++) {
        if (i % 30 == 0) {
          a.push("yu-gi-oh");
        } else if (i % 15 == 0) {
          a.push("gi-oh");
        } else if (i % 10 == 0) {
          a.push("yu-oh");
        } else if (i % 6 == 0) {
          a.push("yu-gi");
        } else if (i % 5 == 0) {
          a.push("oh");
        } else if (i % 3 == 0) {
          a.push("gi");
        } else if (i % 2 == 0) {
          a.push("yu");
        } else {
          a.push(i);
        }
      }
      console.log(a);
      // console.log(a);
      return a;
    }
  };
  
