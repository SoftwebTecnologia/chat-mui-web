'use client';

import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { useMockedUser } from 'src/hooks/use-mocked-user';

import { useSettingsContext } from 'src/components/settings';

import AppAreaInstalled from '../app-area-installed';
import AppWidgetSummary from '../app-widget-summary';

// ----------------------------------------------------------------------

export default function OverviewAppView() {
  const { user } = useMockedUser();

  const theme = useTheme();

  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Grid xs={12} md={6} lg={8} mt={4} mb={6}>
        <AppAreaInstalled
          title="Area Installed"
          subheader="(+43%) than last year"
          chart={{
            categories: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            ],
            series: [
              {
                year: '2019',
                data: [
                  {
                    name: 'Asia',
                    data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 35, 51, 49],
                  },
                  {
                    name: 'America',
                    data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 13, 56, 77],
                  },
                ],
              },
              {
                year: '2020',
                data: [
                  {
                    name: 'Asia',
                    data: [51, 35, 41, 10, 91, 69, 62, 148, 91, 69, 62, 49],
                  },
                  {
                    name: 'America',
                    data: [56, 13, 34, 10, 77, 99, 88, 45, 77, 99, 88, 77],
                  },
                ],
              },
            ],
          }}
        />
      </Grid>

      <Grid container spacing={3} mt={6}>

        <Grid xs={12} md={4}>
          <AppWidgetSummary
            title="Total Active Users"
            percent={2.6}
            total={18765}
            chart={{
              series: [5, 18, 12, 51, 68, 11, 39, 37, 27, 20],
            }}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <AppWidgetSummary
            title="Total Installed"
            percent={0.2}
            total={4876}
            chart={{
              colors: [theme.palette.info.light, theme.palette.info.main],
              series: [20, 41, 63, 33, 28, 35, 50, 46, 11, 26],
            }}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <AppWidgetSummary
            title="Total Downloads"
            percent={-0.1}
            total={678}
            chart={{
              colors: [theme.palette.warning.light, theme.palette.warning.main],
              series: [8, 9, 31, 8, 16, 37, 8, 33, 46, 31],
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
