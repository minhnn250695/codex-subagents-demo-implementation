import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { FormField, form } from '@angular/forms/signals';
import { TransactionApi, TransactionFilters } from './reporting/transaction-api';

const emptyFilters: TransactionFilters = { date: '', providers: [], categories: [] };

@Component({
  imports: [CurrencyPipe, DatePipe, FormField],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly api = inject(TransactionApi);
  private readonly draft = signal(emptyFilters);
  private readonly applied = signal(emptyFilters);

  protected readonly filters = form(this.draft);

  protected readonly report = rxResource({
    params: () => this.applied(),
    stream: ({ params }) => this.api.getTransactions(params),
  });

  protected readonly transactions = computed(() =>
    [...(this.report.hasValue() ? this.report.value() : [])].sort(
      (a, b) => b.date.localeCompare(a.date) || b.id.localeCompare(a.id),
    ),
  );

  protected readonly providerSummary = computed(() => {
    const totals = new Map<string, { count: number; amountInCents: number }>();

    for (const transaction of this.transactions()) {
      const total = totals.get(transaction.provider) ?? { count: 0, amountInCents: 0 };
      total.count += 1;
      total.amountInCents += transaction.amountInCents;
      totals.set(transaction.provider, total);
    }

    return Array.from(totals, ([provider, total]) => ({ provider, ...total })).sort(
      (a, b) => b.count - a.count || a.provider.localeCompare(b.provider),
    );
  });

  protected toggleFilter(filter: 'providers' | 'categories', option: string, checked: boolean): void {
    this.filters[filter]().value.update((selected) =>
      checked ? [...selected, option] : selected.filter((value) => value !== option),
    );
  }

  protected apply(event: Event): void {
    event.preventDefault();
    this.applied.set({ ...this.draft() });
  }

  protected reset(): void {
    this.filters().reset(emptyFilters);
    this.applied.set({ ...emptyFilters });
  }
}
