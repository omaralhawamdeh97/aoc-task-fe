const InputTexr = () => {
  let random = Math.floor(Math.random() * 10);

  const checkNumber = (n) => {
    console.log(random);
    if (Number(n) === random) console.log("equal");
    else if (Number(n) > random) console.log("u should be smaller");
    else if (Number(n) < random) console.log("u should be less");
    else console.log("not");
  };
  return <input onChange={(e) => checkNumber(e.target.value)} />;
};

export default InputTexr;
