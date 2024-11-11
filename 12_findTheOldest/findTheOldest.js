const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    
    let oldest = people.reduce((acc, cur) => {
      const accAge = (acc.yearOfDeath || currentYear) - acc.yearOfBirth;
      const curAge = (cur.yearOfDeath || currentYear) - cur.yearOfBirth;
      return curAge > accAge ? cur : acc;
    });
  
    return oldest;
  };
  

// Do not edit below this line
module.exports = findTheOldest;
