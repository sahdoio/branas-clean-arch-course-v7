export default class FareCalculationV1 {
    public exec(rideList: any[]): number {
        let fare = 0;
        for (const ride of rideList) {
            const distance = ride.distance
            const rideTime = ride.rideTime

            if (!this.isValidDistance(distance) || !this.isValidTime(rideTime)) {
                throw new Error('invalid ride')
            }

            if (this.isOverNight(rideTime)) {                
                if (!this.isSunday(rideTime)) {                            
                    fare += distance * 3.90;
                } else {
                    fare += distance * 5;        
                }
            } else {
                if (this.isSunday(rideTime)) {                
                    fare += distance * 2.9;                
                } else {
                    fare += distance * 2.10;                
                }
            }         
        }

        if (fare < 10) {
            return 10;
        } 

        return fare;        
    }

    private isValidDistance(distance: number): boolean {
        return (typeof distance === "number" && distance > 0)
    }

    private isValidTime(rideTime: Date): boolean{
        return (rideTime && rideTime instanceof Date && rideTime.toString() !== "Invalid Date")
    }

    private isOverNight(rideTime: Date): boolean {
        return (rideTime.getHours() >= 22 || rideTime.getHours() <= 6)
    }

    private isSunday(rideTime: Date): boolean {
        return rideTime.getDay() === 0
    }
}