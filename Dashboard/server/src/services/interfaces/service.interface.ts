export enum ServiceStatus {
  LIVE = 'LIVE',
  SAVED = 'SAVED',
  REJECTED = 'REJECTED',
}

export interface Service {
  readonly id: number;
  readonly campaignId: number;
  readonly releaseDate: number;
  readonly title: string;
  readonly subscriptionCost: number;
  readonly status: ServiceStatus;
  readonly totalEarned: number;
  readonly totalSubscriptions: number;
  readonly totalViews: number;
  readonly totalVacancies: number;
}
