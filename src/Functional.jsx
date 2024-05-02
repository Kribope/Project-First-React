function Functional() {
    const name = "Ivan";
    const age = 20;
    const birthday = '2004-04-15';
  
    return (
      <div>
        <h1>Functional Example</h1>
        <h2>Hello, {name} welcome to my website</h2>
        <p>You're {age} years old</p>
        <p>Birthday: {birthday}</p>
        <h3>Next age will be {age+1}</h3>
      </div>
    )
  }
  
  export default Functional;