import { provideRouter, RouterConfig } from '@angular/router';
import { ShowroomComponent } from './forms/showroom/showroom.component';
import { Showroom2Component } from './forms/showroom2/showroom2.component';
import { BrokerMeetingComponent } from './forms/broker-meeting/broker-meeting.component';
import { FacOutPortfolioComponent } from './forms/fac-out-portfolio/fac-out-portfolio.component';
import { SubmissionVolumeOverviewComponent } from './forms/submission-volume-overview/submission-volume-overview.component';
import { PortfolioAnalysisReportComponent } from './forms/portfolio-analysis-report/portfolio-analysis-report.component';
import { ClaimsActivityComponent } from './forms/claims-activity/claims-activity.component';
import { ClaimsVolumeOverviewComponent } from './forms/claims-volume-overview/claims-volume-overview.component';
import { GrossWrittenPremiumComponent } from './forms/gross-written-premium/gross-written-premium.component';
import { LimitExceptionComponent } from './forms/limit-exception/limit-exception.component';
import { LloydsMonitoringComponent } from './forms/lloyds-monitoring/lloyds-monitoring.component';
import { MonthlyComparisonComponent } from './forms/monthly-comparison/monthly-comparison.component';
import { UnderwritingActivityComponent } from './forms/underwriting-activity/underwriting-activity.component';

export const routes: RouterConfig = [
  { path: '', component: ShowroomComponent },
  { path: 'gallery', component: Showroom2Component },
  { path: 'broker-meeting', component: BrokerMeetingComponent },
  { path: 'fac-out-portfolio', component: FacOutPortfolioComponent },
  { path: 'submission-volume-overview', component: SubmissionVolumeOverviewComponent },
  { path: 'portfolio-analysis-report', component: PortfolioAnalysisReportComponent },
  { path: 'claims-activity', component: ClaimsActivityComponent },
  { path: 'claims-volume-overview', component: ClaimsVolumeOverviewComponent },
  { path: 'gross-written-premium', component: GrossWrittenPremiumComponent },
  { path: 'limit-exception', component: LimitExceptionComponent },
  { path: 'lloyds-monitoring', component: LloydsMonitoringComponent },
  { path: 'monthly-comparison', component: MonthlyComparisonComponent },
  { path: 'underwriting-activity', component: UnderwritingActivityComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
