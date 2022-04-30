# bom-weather
A simple package to receive data from the [Australian Bureau of Meteorology](http://www.bom.gov.au/) API.

## How to Use
All available API calls can be made off the `BOM` class
```ts
import { BOM } from 'bom-weather';
```
The current list of endpoints available for each city are as follows:
```
- Observations
- Warnings
- Daily Forecasts
- Three Hour Forecasts
- Rain Forecast
```
Enums have been included for Geohashes of all the major cities of Australia. These can be accessed using
```ts
import { Cities } from 'bom-weather';

const sydneyGeohash = Cities.SYDNEY;
```
## Disclaimer
*Please Note: This package is meant for test purposes only. Under no circumstances is this API to be used for commercial purposes. Please contact [BOM](http://www.bom.gov.au/) directly to get permission to use a commercial license*