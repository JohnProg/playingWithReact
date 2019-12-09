import { Controller, Param, Get } from '@nestjs/common';
import { CampaignsService } from './campaigns.service';

@Controller('campaigns')
export class CampaignsController {
  constructor(private campaignsService: CampaignsService) {}

  @Get()
  async getCampaigns() {
    const campaigns = await this.campaignsService.getCampaigns();
    return campaigns;
  }

  @Get(':campaignId')
  async getcampaign(@Param('campaignId') campaignId) {
    const campaign = await this.campaignsService.getCampaign(campaignId);
    return campaign;
  }
}
