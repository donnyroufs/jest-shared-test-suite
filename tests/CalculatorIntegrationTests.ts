import { createBaseCalculatorTests } from "./BaseTestsCalculator"
import { ExternalCalculatorDriver } from "./drivers/ExternalCalculatorDriver"

createBaseCalculatorTests(new ExternalCalculatorDriver())
