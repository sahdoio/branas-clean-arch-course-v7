import Segment from "./Segment";

export default class Ride {
    protected segments: Segment[] = []

    constructor() {
    }

    public addSegment(distance: number, date: Date) {
        this.segments.push(new Segment(distance, date))
    }
}