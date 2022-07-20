export default class FareCalculation {
    public exec(rideList: any ): number {
        let fare = 0;
        for (const ride of rideList) {
            const distance = ride.dist
            const rideTime = ride.ds

            if (!this.isValidDistance(distance)) {
                return -1
            }

            if (!this.isValidTime(rideTime)) {
                return -2
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
        return (distance !== null && distance !== undefined && typeof distance === "number" && distance > 0)
    }

    private isValidTime(rideTime: Date): boolean{
        return (rideTime !== null && rideTime !== undefined && rideTime instanceof Date && rideTime.toString() !== "Invalid Date")
    }

    private isOverNight(rideTime: Date): boolean {
        return (rideTime.getHours() >= 22 || rideTime.getHours() <= 6)
    }

    private isSunday(rideTime: Date): boolean {
        return rideTime.getDay() === 0
    }
}