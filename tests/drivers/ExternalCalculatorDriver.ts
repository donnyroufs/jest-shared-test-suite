import { ITestDriver } from "./ITestDriver"

export class ExternalCalculatorDriver implements ITestDriver {
  public async setInput(input: string): Promise<number> {
    // pretend we calculate using an api endpoint
    await new Promise((res) => setTimeout(res, 1000))

    if (input === "1+1") {
      return 2
    }

    return 0
  }
}
