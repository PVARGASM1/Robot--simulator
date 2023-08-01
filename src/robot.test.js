const createRobot = require('./robot.js');

describe('createRobot', () => {
	test('Should return error with message invalid orientation', () => {
    // Arrange//
    const message = 'Invalid orientation'
    // Act//
    const myRobot = createRobot([2, 1], 'Nort')
    // Assert//
    expect(myRobot.message).toBe(message)
	});

  test('Should return error message with invalid coordinates', () => {
    const message = 'Invalid coordinates'
    const myRobot = createRobot([13, 1], 'West')
    expect(myRobot.message).toBe(message)
  })

  test('Should return place correctly', () => {
    const message = 'Robot created successfully'
    const myRobot = createRobot([8, 4], 'North')
    expect(myRobot.message).toBe(message)
  })
});

describe('getPosition', () => {
	test('Should return error message with out of limits', () => {
	  const message = 'out of limits'
	  const myRobot = createRobot([12, 1], 'South')
	  const result = myRobot.getPosition()
	  expect(result).toBe(message)
	})
  
	test('Should return place correctly', () => {
	  const place = { coordinates: [5, 7], orientation: 'East' }
	  const myRobot = createRobot([5, 7], 'East')
	  const result = myRobot.getPosition()
	  expect(result).toHaveProperty('coordinates')
	  expect(result).toMatchObject(place)
	})
  
  })

describe ('advance', () => {
  test ('Should advance with coordinates [3, 6] and orientation "North" and return coordinates [3, 7]', () =>{
    const place = { coordinates: [3, 7], orientation: 'North' }
    const myRobot = createRobot([3, 6], 'North')
    myRobot.advance()
    const result = myRobot.getPosition()
    expect(result).toMatchObject(place)
  })

  
	test('Should advance with coordinates [5, 2] and orientation East and return coordinates [6, 2]' , () => {
		const place =  { coordinates: [6, 2], orientation: 'East' }
		const myRobot = createRobot([5, 2], 'East')
		myRobot.advance()
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})

  test('Should advance with coordinates [3, 6] and orientation "South" and return coordinates [3, 5]', () => {
    const place = { coordinates: [3, 5], orientation: 'South' } 
    const myRobot = createRobot([3, 6], 'South')
    myRobot.advance();
    const result = myRobot.getPosition();
    expect(result).toMatchObject(place);
  });

  test('Should advance with coordinates [3, 6] and orientation "West" and return coordinates [2, 6]', () => {
    const place = { coordinates: [2, 6], orientation: 'West' }
    const myRobot = createRobot([3, 6], 'West')
    myRobot.advance();
    const result = myRobot.getPosition();
    expect(result).toMatchObject(place);
  });
})  

//RIGTH
describe('Robot should turn to right', () => {
	test('Should advance to right with coordinates: [3, 6], orientation: North', () => {
		const place =  { coordinates: [3, 6], orientation: 'East' }
		const myRobot = createRobot([3, 6], 'North')
		myRobot.turnRight()
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})

	test('Should advance to right with coordinates: [4, 4], orientation: West', () => {
		const place =  { coordinates: [4, 4], orientation: 'North' }
		const myRobot = createRobot([4, 4], 'West')
		myRobot.turnRight()
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})

  test('Should advance to right with coordinates: [8, 6], orientation: South', () => {
		const place =  { coordinates: [8, 6], orientation: 'West' }
		const myRobot = createRobot([8, 6], 'South')
		myRobot.turnRight()
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})

  test('Should advance to right with coordinates: [2, 1], orientation: East', () => {
		const place =  { coordinates: [2, 1], orientation: 'South' }
		const myRobot = createRobot([2, 1], 'East')
		myRobot.turnRight()
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})
}) 

//LEFT
describe('Robot should turn left', () => {

  test('Should advance to left with coordinates: [7, 3], orientation: North', () => {
		const place =  { coordinates: [7, 3], orientation: 'West' }
		const myRobot = createRobot([7, 3], 'North')
		myRobot.turnLeft()
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})

  test('Should advance to left with coordinates: [1, 3], orientation: South', () => {
		const place =  { coordinates: [1, 3], orientation: 'East' }
		const myRobot = createRobot([1, 3], 'South')
		myRobot.turnLeft()
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})

  test('Should advance to left with coordinates: [5, 9], orientation: East', () => {
    const place =  { coordinates: [5, 9], orientation: 'North' }
		const myRobot = createRobot([5, 9], 'East')
		myRobot.turnLeft()
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})

  test('Should advance to left with coordinates: [6, 1], orientation: West', () => {
		const place =  {coordinates: [6, 1], orientation: 'South'}
		const myRobot = createRobot([6, 1], 'West')
		myRobot.turnLeft() 
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})

})

describe('Instructions', () => {
  test('Should advance with instruction A and with coordinates: [3, 2], orientation: East', () => {
		const place =  { coordinates: [4, 2], orientation: 'East' }
		const myRobot = createRobot([3, 2], 'East')
		myRobot.instructions('A')
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})

  test('Should advance with instruction R and with coordinates: [1, 3], orientation: West', () => {
		const place =  { coordinates: [1, 3], orientation: 'North' }
		const myRobot = createRobot([1, 3], 'West')
		myRobot.instructions('R') 
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})

  test('Should advance with instruction L and with coordinates: [9, 7], orientation: South', () => {
		const place =  { coordinates: [9, 7], orientation: 'East' }
		const myRobot = createRobot([9, 7], 'South')
		myRobot.instructions('L') 
		const result = myRobot.getPosition()
		expect(result).toMatchObject(place)
	})
})


module.exports = createRobot;