function createRobot(coordinates, direction) {
  const correctOrientation = ['North', 'East', 'South', 'West']
  let [x, y] = coordinates
  let orientation = direction
  let message;

  
  (function validateParameters () {
    try {
      const isValid = correctOrientation.includes(direction)
      if(!isValid) {
        throw new Error('Invalid orientation')
      }

      if( x > 10 || y > 10 || x < 0 || y < 0 ) {
        throw new Error('Invalid coordinates')
      }

      message = 'Robot created successfully'
    } catch (error) {
      message = error.message
    }
  })()

  function getPosition() {
    try {
      if( x > 10 || y > 10 || x < 0 || y < 0 ) {
        throw new Error('out of limits')
      }

      return { coordinates: [x, y], orientation }
    } catch(error) {
      return error.message
    }
  }

  const advance = () => {
    if (orientation === 'North') {
      y = y + 1 
    } else if (orientation === 'East') {
      x = x + 1
    } else if (orientation === 'South') {
      y = y - 1 
    } else if (orientation === 'West') {
      x = x - 1
    }
  };

  
  const turnRight = () => {
    if (orientation === 'North')  {
      orientation = 'East'
    } else if (orientation === 'East') {
      orientation = 'South'
    } else if (orientation === 'South') { 
      orientation = 'West'
    } else if (orientation === 'West') {
      orientation = 'North'
    };
  };

  const turnLeft = () => {
    if (orientation === 'North') {
      orientation = 'West'
    } else if (orientation === 'West') {
    orientation = 'South'
    } else if (orientation === 'South') {
    orientation = 'East' 
    } else if (orientation === 'East') {
    orientation = 'North'}
  };

  return {
    message, 
    getPosition,
    advance, 
    turnRight,
    turnLeft,
  }

  } 

  //   instructions: (stringInstructions) => {
  //     // función para recibir una serie de instrucciones Ejm: "RAALAL"
  //     // En este metodo se va crear 
  //   }
  
module.exports = createRobot;
