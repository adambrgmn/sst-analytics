// @flow

import url from 'url';
import R from 'ramda';
import env from '../../../env';

const MC_KEY = env('MC_KEY');

const urlSpec = {
  protocol: 'https:',
  pathname: '/3.0/',
};
const location = R.nth(1, R.match(/-(\S+)$/, MC_KEY));

// baseUrl () -> String
export const baseUrl = (): string => R.compose(
  url.format,
  R.assoc('host', R.concat(location, '.api.mailchimp.com')),
)(urlSpec);

// subReports :: String -> String
export const subReports = (campaignId: string): string => url.resolve(baseUrl(), `reports/${campaignId}/sub-reports`);
