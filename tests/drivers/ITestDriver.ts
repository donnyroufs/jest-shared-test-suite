export interface ITestDriver {
  setInput(input: string): Promise<number>
}
