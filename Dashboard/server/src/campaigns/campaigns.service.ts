import { Injectable, HttpException } from '@nestjs/common';
import { CAMPAIGNS } from '../mocks/campaigns.mock';
import { Campaign } from './interfaces/campaign.interface';

@Injectable()
export class CampaignsService {
  private readonly campaigns: Campaign[] = CAMPAIGNS;

  getCampaigns(): Promise<Campaign[]> {
    return new Promise(resolve => {
      resolve(this.campaigns);
    });
  }

  getCampaign(campaignId): Promise<Campaign> {
    let id = Number(campaignId);
    return new Promise(resolve => {
      const campaign = this.campaigns.find(campaign => campaign.id === id);
      if (!campaign) {
        throw new HttpException('Campaign does not exist!', 404);
      }
      resolve(campaign);
    });
  }
}
