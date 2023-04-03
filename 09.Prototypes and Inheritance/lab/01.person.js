function createPerson(first, last) {
    let firstName = first;
    let lastName = last;
    let fullName = `${first} ${last}`;
  
    return {
      get firstName() {
        return firstName;
      },
      set firstName(value) {
        firstName = value;
        fullName = `${value} ${lastName}`;
      },
      get lastName() {
        return lastName;
      },
      set lastName(value) {
        lastName = value;
        fullName = `${firstName} ${value}`;
      },
      get fullName() {
        return fullName;
      },
      set fullName(value) {
        if (value.split(" ").length !== 2) return;
        fullName = value;
        [firstName, lastName] = value.split(" ");
      }
    };
  }