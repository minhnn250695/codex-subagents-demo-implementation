export interface Transaction {
  readonly id: string;
  readonly date: string;
  readonly provider: string;
  readonly category: string;
  readonly amountInCents: number;
}

export const DEMO_TRANSACTIONS: readonly Transaction[] = [
  {
    id: 'TX-1001',
    date: '2026-11-23',
    provider: 'Northstar Payments',
    category: 'Retail',
    amountInCents: 4999,
  },
  {
    id: 'TX-1002',
    date: '2026-11-23',
    provider: 'Harbor Pay',
    category: 'Travel',
    amountInCents: 18450,
  },
  {
    id: 'TX-1003',
    date: '2026-11-23',
    provider: 'Summit Processing',
    category: 'Subscriptions',
    amountInCents: 1599,
  },
  {
    id: 'TX-1004',
    date: '2026-11-24',
    provider: 'Northstar Payments',
    category: 'Retail',
    amountInCents: 7250,
  },
  {
    id: 'TX-1005',
    date: '2026-11-24',
    provider: 'Harbor Pay',
    category: 'Travel',
    amountInCents: 24600,
  },
  {
    id: 'TX-1006',
    date: '2026-11-24',
    provider: 'Summit Processing',
    category: 'Retail',
    amountInCents: 3150,
  },
  {
    id: 'TX-1007',
    date: '2026-11-24',
    provider: 'Harbor Pay',
    category: 'Subscriptions',
    amountInCents: 2999,
  },
  {
    id: 'TX-1008',
    date: '2026-11-25',
    provider: 'Harbor Pay',
    category: 'Retail',
    amountInCents: 899,
  },
  {
    id: 'TX-1009',
    date: '2026-11-25',
    provider: 'Northstar Payments',
    category: 'Subscriptions',
    amountInCents: 1299,
  },
  {
    id: 'TX-1010',
    date: '2026-11-25',
    provider: 'Summit Processing',
    category: 'Travel',
    amountInCents: 13125,
  },
  {
    id: 'TX-1011',
    date: '2026-11-25',
    provider: 'Northstar Payments',
    category: 'Retail',
    amountInCents: 10500,
  },
  {
    id: 'TX-1012',
    date: '2026-11-26',
    provider: 'Northstar Payments',
    category: 'Travel',
    amountInCents: 28000,
  },
  {
    id: 'TX-1013',
    date: '2026-11-26',
    provider: 'Harbor Pay',
    category: 'Retail',
    amountInCents: 6300,
  },
  {
    id: 'TX-1014',
    date: '2026-11-26',
    provider: 'Summit Processing',
    category: 'Subscriptions',
    amountInCents: 2499,
  },
  {
    id: 'TX-1015',
    date: '2026-11-26',
    provider: 'Harbor Pay',
    category: 'Travel',
    amountInCents: 9450,
  },
];
