import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Api from '../../services';
import { Header } from '../../components';
import {
  Card,
  Container,
  Info,
  List,
  NoResults,
  ProgressBar,
  StatusIcon,
  Title,
  Totals
} from './styles';

export default function Home() {
  const [services, setServices] = useState([]);
  const campaign = useSelector(state => state.campaign);

  useEffect(() => {
    async function loadServices() {
      const servicesList = await Api.Service.loadServices(
        campaign.selected,
        campaign.releaseDate
      );
      setServices(servicesList);
    }
    loadServices();
  }, [campaign]);

  const renderServices = () => {
    if (services && services.length > 0) {
      return services.map(service => (
        <Card key={service.id}>
          <Title>{service.title}</Title>
          <Info>
            <li>${service.subscriptionCost} / month</li>
            <li>
              <StatusIcon status={service.status} />
              {service.status}
            </li>
          </Info>
          <ProgressBar
            value={service.totalVacancies}
            max={service.totalSubscriptions}
          />
          <Totals>
            {service.status === 'REJECTED' ? (
              <span className="rejected">Card is on hold</span>
            ) : (
              <>
                <span>${service.totalEarned}</span>
                <span>{service.totalSubscriptions}</span>
                <span>{service.totalViews}k</span>
              </>
            )}
          </Totals>
        </Card>
      ));
    }
    return <NoResults>No results</NoResults>;
  };

  return (
    <Container>
      <Header />
      <List>{renderServices()}</List>
    </Container>
  );
}
