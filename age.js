function age(userAge) {
    if (isNaN(userAge)) {
      throw new Error("Input is not a number");
    } else {
      // Convert the user's input to a number
      const age = parseInt(userAge);
  
      // Check the age and display a message
      if (age < 0) {
        return 'Age cannot be negative';
      } else {
        return 'You are an adult';
      }
    }
  }
  
  module.exports = {age};
  