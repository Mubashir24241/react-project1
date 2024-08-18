function Hello() {

  let myName = 'MUBASHIR';
  let number = 456;
  let fullName = () => {
    return 'MUBASHIR AHMAD';
  }

  return <p>
    Number {number} I am your friend {fullName()}
  </p>
}

export default Hello;