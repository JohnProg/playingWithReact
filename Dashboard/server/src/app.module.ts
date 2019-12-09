import { Module } from '@nestjs/common';
import { CampaignsModule } from './campaigns/campaigns.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [CampaignsModule, ServicesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
