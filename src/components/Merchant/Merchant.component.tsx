import React, { ReactNode } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { campaignInfo, merchantInfo } from '../../interfaces/interface';

interface merchantProps  {
 merchant : merchantInfo;
 campaigns : campaignInfo[];
}
export default function MerchantItem(merchantProps: merchantProps) {
    const {merchant, campaigns} = merchantProps; 
    
    /* get number of campaigns associated to a merchant */
    const getCountCampaigns = (merchantId: string): ReactNode => {
        const countCompaigns = campaigns?.filter((campaign: campaignInfo) => campaign.merchantId === merchantId).length
        return <span>{`${countCompaigns} campaign${countCompaigns > 1 ? 's' : ''}  Available`}</span>
      }

    return (
        <Card sx={{ width: 400, borderRadius: 5, marginRight: 3, marginBottom: 2 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={merchant.bannerUrl}
          />
          <img style={{marginTop: -30, marginLeft: 10, borderRadius: 60, height:50 , width: 50, display: "flex", justifyContent: "center", zIndex: 9}} src={merchant.logoUrl} width={30} />

          <CardContent>
            <Typography sx={{fontWeight: "bold"}} gutterBottom variant="h6" component="span">
              {merchant.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {getCountCampaigns(merchant.merchantId)}
            </Typography>
          </CardContent>
        </Card>
    )
}
