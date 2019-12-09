import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as CampaignActions from 'store/modules/campaign/actions';
import Api from '../../services';
import { Calendar, Wrapper } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const campaign = useSelector(state => state.campaign);
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    async function loadCampaigns() {
      const campaignsList = await Api.Campaign.loadCampaigns();
      setCampaigns(campaignsList);
    }
    loadCampaigns();
  }, []);

  function previousDay() {
    let yesterday = new Date(campaign.releaseDate);
    yesterday.setDate(yesterday.getDate() - 1);
    dispatch(
      CampaignActions.setReleaseDate({
        releaseDate: yesterday.getTime()
      })
    );
  }

  function nextDay() {
    let tomorrow = new Date(campaign.releaseDate);
    tomorrow.setDate(tomorrow.getDate() + 1);
    dispatch(
      CampaignActions.setReleaseDate({
        releaseDate: tomorrow.getTime()
      })
    );
  }

  const handleSelectChange = event => {
    dispatch(
      CampaignActions.setCampaign({
        selected: event.target.value
      })
    );
  };

  const printDate = () => {
    const selectedDate = new Date(campaign.releaseDate);

    if (new Date().getDate() === selectedDate.getDate()) {
      return 'Today';
    }
    return selectedDate.toDateString();
  };

  return (
    <header>
      <Wrapper>
        <select defaultValue={campaign.selected} onChange={handleSelectChange}>
          <option value="-1" key={-1}>
            All Categories
          </option>
          {campaigns &&
            campaigns.length > 0 &&
            campaigns.map(item => (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            ))}
        </select>
        <Calendar>
          <button onClick={previousDay}>{'<'}</button>
          <span>{printDate()}</span>
          <button onClick={nextDay}>{'>'}</button>
        </Calendar>
      </Wrapper>
    </header>
  );
}
