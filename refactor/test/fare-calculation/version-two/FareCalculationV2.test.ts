import FareCalculation from "../../../src/fare-calculation/version-two/FareCalculationV2"

test('Should calculate the value of a normal ride', () => {
    const rideList = [{distance: 10, rideTime: new Date('2022-07-20T12:00:00')}]
    const fareCalculation = new FareCalculation
    const result = fareCalculation.exec(rideList)
    expect(result).toBe(21)
})

test('Should calculate the value of a overnight ride on a week day', () => {
    const rideList = [{distance: 10, rideTime: new Date('2022-07-20T23:00:00')}]
    const fareCalculation = new FareCalculation
    const result = fareCalculation.exec(rideList)
    expect(result).toBe(39)
})

test('Should calculate the value of a overnight ride on sunday', () => {
    const rideList = [{distance: 10, rideTime: new Date('2022-07-17T23:00:00')}]
    const fareCalculation = new FareCalculation
    const result = fareCalculation.exec(rideList)
    expect(result).toBe(50)
})

test('Should calculate the value of a normal ride on sunday', () => {
    const rideList = [{distance: 10, rideTime: new Date('2022-07-17T12:00:00')}]
    const fareCalculation = new FareCalculation
    const result = fareCalculation.exec(rideList)
    expect(result).toBe(29)
})

test('Should calculate the value of a small ride', () => {
    const rideList = [{distance: 1, rideTime: new Date('2022-07-17T12:00:00')}]
    const fareCalculation = new FareCalculation
    const result = fareCalculation.exec(rideList)
    expect(result).toBe(10)
})

test('Should return invalid ride passing invalid distance', () => {
    const rideList = [{distance: 0, rideTime: new Date('2022-07-17T12:00:00')}]
    const fareCalculation = new FareCalculation
    expect(() => fareCalculation.exec(rideList)).toThrow(new Error('invalid ride'))
})

test('Should return invalid ride passing invalid ride time', () => {
    const rideList = [{distance: 1, rideTime: '2022-07-17T12:00:00'}]
    const fareCalculation = new FareCalculation
    expect(() => fareCalculation.exec(rideList)).toThrow(new Error('invalid ride'))
})