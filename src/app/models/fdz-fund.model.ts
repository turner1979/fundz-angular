export interface FdzFund {
  id: string;
  colour: string;
  contributions?: Array<FdzFundContribution>;
  current: number;
  name: string;
  target: number;
}

export interface FdzFundContribution {
  date: string;
  name: string;
  amount: number;
}
