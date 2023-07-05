import { Calculator } from "../../src/Calculator"
import { ITestDriver } from "./ITestDriver"

export class LocalCalculatorDriver implements ITestDriver {
  public async setInput(input: string): Promise<number> {
    // use our entity
    const calc = new Calculator()
    return calc.calculate(input)
  }
}
