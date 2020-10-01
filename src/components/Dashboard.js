import React from 'react';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import DataTable from './DataTable';
import Title from './Title';
import CasesByAgeChart from './charts/CasesByAgeChart';
import { ZOOM_TOOLTIP } from './charts/Charts';
import { Skeleton } from '@material-ui/lab';
import { Tooltip } from '@material-ui/core';
import News from './News';

function Footer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'All data from '}
      <Link color="inherit" href="https://www.sciensano.be/" target="_blank" rel="noopener noreferrer">Sciensano</Link>
      {' • '}
      <Link color="inherit" href="https://www.info-coronavirus.be/" target="_blank" rel="noopener noreferrer">Official national information on Covid-19</Link>
      {'.'}
    </Typography>
  );
}

export default class Dashboard extends React.Component {
  classes = this.props.classes;
  fixedHeightPaper = clsx(this.classes.paper, this.classes.fixedHeight);

  render() {
    return (
      <main className={this.classes.content}>
        <div className={this.classes.appBarSpacer} />
        <Container maxWidth="lg" className={this.classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={7} lg={7}>
              <Paper className={this.fixedHeightPaper} style={{overflow: 'hidden'}}>
                <Tooltip title={ZOOM_TOOLTIP} placement="bottom-start" arrow>
                  <Title>New cases, by age group (7-day rolling average)</Title>
                </Tooltip>
                {this.props.statsData ?
                  <CasesByAgeChart data={this.props.statsData} /> :
                  <Skeleton variant="rect" height={'100%'} />
                }
              </Paper>
            </Grid>
            {/* Recent News */}
            <Grid item xs={12} md={5} lg={5}>
              <Paper className={this.fixedHeightPaper}>
                <Title>Latest news</Title>
                <News data={this.props.newsData}/>
              </Paper>
            </Grid>
            {/* Recent Data */}
            <Grid item xs={12}>
              <Paper className={this.classes.paper} style={{ overflow: 'hidden' }}>
                <Title>Today</Title>
                {this.props.statsData ?
                  <DataTable data={this.props.statsData} /> :
                  <Skeleton variant="rect" height={200} />
                }
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    );
  }
}
