import { Controller, Get, Query } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServiceQuery } from './interfaces/service-query.interface';

@Controller()
export class ServicesController {
  constructor(private servicesService: ServicesService) {}

  @Get('services')
  async getservices() {
    const services = await this.servicesService.getServices();
    return services;
  }

  @Get('servicesBy')
  async getServicesBy(@Query() query: ServiceQuery) {
    const services = await this.servicesService.getServicesBy(query);
    return services;
  }
}
