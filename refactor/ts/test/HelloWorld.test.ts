import HelloWorld from "../src/HelloWord"

test('Should execute the test', () => {
    const helloWorld = new HelloWorld()
    const result = helloWorld.handle()    
    expect(result).toBe('hello world')
})