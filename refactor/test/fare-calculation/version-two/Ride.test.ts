import FareCalculation from "../../../src/fare-calculation/version-two/FareCalculationV2"
import Ride from "./Ride"

test('Should calculate the value of a normal ride', () => {
    const ride = new Ride
    ride.addSegment(10, new Date('2022-07-20T12:00:00'))
    const fareCalculation = new FareCalculation
    const result = fareCalculation.exec(rideList)
    expect(result).toBe(21)
})