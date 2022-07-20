import FareCalculation from "../src/fare-calculation/FareCalculation"

test('Should calculate the value of a normal ride', () => {
    const list = [
        {
            dist: 10,
            ds: new Date('2022-07-20T12:00:00')
        }
    ]
    const fareCalculation = new FareCalculation
    const result = fareCalculation.exec(list)
    expect(result).toBe(21)
})

test('Should calculate the value of a overnight ride on a week day', () => {
    const list = [
        {
            dist: 10,
            ds: new Date('2022-07-20T23:00:00')
        }
    ]
    const fareCalculation = new FareCalculation
    const result = fareCalculation.exec(list)
    expect(result).toBe(39)
})

test('Should calculate the value of a overnight ride on sunday', () => {
    const list = [
        {
            dist: 10,
            ds: new Date('2022-07-17T23:00:00')
        }
    ]
    const fareCalculation = new FareCalculation
    const result = fareCalculation.exec(list)
    expect(result).toBe(50)
})

test('Should calculate the value of a normal ride on sunday', () => {
    const list = [
        {
            dist: 10,
            ds: new Date('2022-07-17T12:00:00')
        }
    ]
    const fareCalculation = new FareCalculation
    const result = fareCalculation.exec(list)
    expect(result).toBe(29)
})

test('Should calculate the value of a small ride', () => {
    const list = [
        {
            dist: 1,
            ds: new Date('2022-07-17T12:00:00')
        }
    ]
    const fareCalculation = new FareCalculation
    const result = fareCalculation.exec(list)
    expect(result).toBe(10)
})

test('Should return invalid distance', () => {
    const list = [
        {
            dist: 0,
            ds: new Date('2022-07-17T12:00:00')
        }
    ]
    const fareCalculation = new FareCalculation
    const result = fareCalculation.exec(list)
    expect(result).toBe(-1)
})

test('Should return invalid ride time', () => {
    const list = [
        {
            dist: 10,
            ds: '2022-07-17T12:00:00'
        }
    ]
    const fareCalculation = new FareCalculation
    const result = fareCalculation.exec(list)
    expect(result).toBe(-2)
})