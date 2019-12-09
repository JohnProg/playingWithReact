import { Injectable, HttpException, Logger } from '@nestjs/common';
import { Service } from './interfaces/service.interface';
import { SERVICES } from './../mocks/services.mock';
import { ServiceQuery } from './interfaces/service-query.interface';

@Injectable()
export class ServicesService {
  private readonly services: Service[] = SERVICES;
  private readonly logger = new Logger(ServicesService.name);

  getServices(): Promise<Service[]> {
    return new Promise(resolve => {
      resolve(this.services);
    });
  }

  getServicesBy(query: ServiceQuery): Promise<Service[]> {
    let campaignId = Number(query.campaignId);
    let releaseDate = Number(query.releaseDate);
    let servicesFiltered = [];

    return new Promise(resolve => {
      if (campaignId) {
        servicesFiltered = this.services.filter(
          service => service.campaignId === campaignId,
        );
      } else {
        servicesFiltered = this.services;
      }

      if (releaseDate) {
        servicesFiltered = servicesFiltered.filter(service => {
          const date1 = new Date(service.releaseDate * 1000);
          const date2 = new Date(releaseDate);
          this.logger.log(`d1: ${new Date(date1)}`);
          this.logger.log(`d2: ${new Date(date2)}`);
          return (
            date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate()
          );
        });
      }

      if (!servicesFiltered) {
        throw new HttpException('Services do not exist!', 404);
      }
      resolve(servicesFiltered);
    });
  }
}
