import { ITestDriver } from "./drivers/ITestDriver"

export function createBaseCalculatorTests(driver: ITestDriver): void {
  describe("given we have a calculator", () => {
    describe("when we input 1+1", () => {
      test("it returns 2", async () => {
        const result = await driver.setInput("1+1")
        expect(result).toBe(2)
      })
    })
  })
}
