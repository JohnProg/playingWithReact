import {
  Service,
  ServiceStatus,
} from './../services/interfaces/service.interface';

export const SERVICES: Service[] = [
  {
    id: 1,
    campaignId: 1,
    releaseDate: 1575867118,
    status: ServiceStatus.LIVE,
    title: 'Create a site using HTML required in 2 weeks',
    subscriptionCost: 200,
    totalEarned: 15000,
    totalSubscriptions: 300,
    totalVacancies: 20,
    totalViews: 500,
  },
  {
    id: 2,
    campaignId: 1,
    releaseDate: 1575896564,
    status: ServiceStatus.REJECTED,
    title: 'Draw a chart required in 1 week',
    subscriptionCost: 300,
    totalEarned: 5000,
    totalSubscriptions: 20,
    totalVacancies: 10,
    totalViews: 300,
  },
  {
    id: 3,
    campaignId: 1,
    releaseDate: 1575982964,
    status: ServiceStatus.SAVED,
    title: 'Draw a Line required in 3 weeks',
    subscriptionCost: 150,
    totalEarned: 400,
    totalSubscriptions: 200,
    totalVacancies: 190,
    totalViews: 90,
  },
  {
    id: 4,
    campaignId: 2,
    releaseDate: 1575982964,
    status: ServiceStatus.SAVED,
    title: 'Draw a Circle required in 4 weeks',
    subscriptionCost: 230,
    totalEarned: 400,
    totalSubscriptions: 200,
    totalVacancies: 80,
    totalViews: 90,
  },
];
