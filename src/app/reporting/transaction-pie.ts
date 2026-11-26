import { Component, computed, input } from '@angular/core';

export interface TransactionPieItem {
  readonly label: string;
  readonly count: number;
}

const sliceColors = ['#14546e', '#ab5428', '#42734f', '#6c5494', '#a67a24'];

@Component({
  selector: 'app-transaction-pie',
  templateUrl: './transaction-pie.html',
  styleUrl: './transaction-pie.css',
})
export class TransactionPie {
  readonly title = input.required<string>();
  readonly items = input.required<readonly TransactionPieItem[]>();
  readonly status = input('');

  protected readonly slices = computed(() =>
    this.items().map((item, index) => ({ ...item, color: sliceColors[index % sliceColors.length] })),
  );

  protected readonly background = computed(() => {
    const slices = this.slices();
    const total = slices.reduce((sum, { count }) => sum + count, 0);
    let cumulativeCount = 0;
    const stops = slices.map(({ color, count }) => {
      const start = (cumulativeCount / total) * 100;
      cumulativeCount += count;
      const end = (cumulativeCount / total) * 100;
      return `${color} ${start}% ${end}%`;
    });
    return `conic-gradient(${stops.join(', ')})`;
  });
}
