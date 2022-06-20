import React, { useEffect } from 'react';
import logo from './assets/images/cohort.png';
import { useQuery } from 'react-query';
import { getAllMerchants, getAllCampaigns } from './utils/utils';
import { merchantInfo } from './interfaces/interface';
import MerchantItem from './components/Merchant/Merchant.component';

function App(): JSX.Element {
  const { data: merchants } = useQuery("getAllMerchants", getAllMerchants); // react-query : best management of requests
  const { data: campaigns } = useQuery("getAllCampaigns", getAllCampaigns);

  useEffect(() => {
    // to ensure reload when merchants be refreshed
  }, [merchants])

  useEffect(() => {
    // to ensure reload when campaigns be refreshed
  }, [campaigns])

  return (
    <div style={{ padding: "30px 60px", justifyContent: "center" }}>
      <img style={{ marginBottom: 50, height: 20 }} src={logo} />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {merchants?.sort((a: merchantInfo, b: merchantInfo) => parseInt(a.merchantId) - parseInt(b.merchantId)) //to make sure we have sorted list by id 
          .map((merchant: merchantInfo) =>
            <MerchantItem key={merchant.merchantId} merchant={merchant} campaigns={campaigns} />)}
      </div>
    </div>
  );
}

export default App;
