import { Injectable } from '@angular/core';
import { map, Observable, timer } from 'rxjs';
import { DEMO_TRANSACTIONS, Transaction } from './demo-transactions';

export interface TransactionFilters {
  readonly date: string;
  readonly providers: readonly string[];
  readonly categories: readonly string[];
}

@Injectable({ providedIn: 'root' })
export class TransactionApi {
  readonly providers = [...new Set(DEMO_TRANSACTIONS.map(({ provider }) => provider))].sort();
  readonly categories = [...new Set(DEMO_TRANSACTIONS.map(({ category }) => category))].sort();

  getTransactions(filters: TransactionFilters): Observable<readonly Transaction[]> {
    const { date, providers, categories } = filters;
    const selectedProviders = new Set(providers);
    const selectedCategories = new Set(categories);

    return timer(250).pipe(
      map(() =>
        DEMO_TRANSACTIONS.filter(
          (transaction) =>
            (!date || transaction.date === date) &&
            (!selectedProviders.size || selectedProviders.has(transaction.provider)) &&
            (!selectedCategories.size || selectedCategories.has(transaction.category)),
        ),
      ),
    );
  }
}
