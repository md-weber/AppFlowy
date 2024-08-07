import React from 'react';
import { Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '@/assets/logo.svg';
import { ReactComponent as AppflowyLogo } from '@/assets/appflowy.svg';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className={'m-0 flex h-screen w-screen items-center justify-center bg-bg-body p-0'}>
      <div className={'flex flex-col items-center gap-1 text-center'}>
        <Typography
          variant='h3'
          className={'mb-[27px] flex items-center gap-4 text-text-title'}
          component='h2'
          gutterBottom
        >
          <Logo className={'w-9'} />
          <AppflowyLogo className={'w-32'} />
        </Typography>
        <Typography className={' text-[52px] font-semibold leading-[128%] text-text-title'} gutterBottom>
          {t('publish.noAccessToVisit')}
        </Typography>
        <Typography className={'text-[20px] leading-[152%]'} gutterBottom>
          <div className={''}>{t('publish.createWithAppFlowy')}</div>
          <div className={'flex items-center gap-1'}>
            <span className={'font-semibold text-fill-default'}>{t('publish.fastWithAI')}</span>
            <span>{t('publish.tryItNow')}</span>
          </div>
        </Typography>
        <Button
          component={Link}
          to='https://appflowy.io/download'
          variant='contained'
          color='primary'
          className={
            'mt-[32px] mb-[48px] h-[68px] rounded-[20px] px-[44px] py-[18px] text-[20px] font-medium leading-[120%] text-content-on-fill'
          }
        >
          {t('publish.downloadApp')}
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
