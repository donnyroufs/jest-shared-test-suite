import { createBaseCalculatorTests } from "./BaseTestsCalculator"
import { LocalCalculatorDriver } from "./drivers/LocalCalculatorDriver"

createBaseCalculatorTests(new LocalCalculatorDriver())
