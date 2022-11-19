export default class FareCalculationV1 {
    public exec(segments: any[]): number {
        let fare = 0;
        for (const segment of segments) {
            const distance = segment.distance
            const segmentTime = segment.rideTime

            if (!this.isValidDistance(distance) || !this.isValidTime(segmentTime)) {
                throw new Error('invalid ride')
            }

            if (this.isOverNight(segmentTime)) {
                if (!this.isSunday(segmentTime)) {                            
                    fare += distance * 3.90;
                } else {
                    fare += distance * 5;        
                }
            } else {
                if (this.isSunday(segmentTime)) {                
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