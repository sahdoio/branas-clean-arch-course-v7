import { Segment } from "./Segment";

export default class Ride {
    public segments: Segment[] = []

    constructor() {}

    public addSegment(distance: number, date: Date) {
        const segment = new Segment(distance, date)
        this.segments.push(segment)
    }
}