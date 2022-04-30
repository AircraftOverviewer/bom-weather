# bom-weather
A simple package to receive data from the [Australian Bureau of Meteorology](http://www.bom.gov.au/) API.

## How to Use
All access to the API endpoints is done off the `BOM` class
```ts
import { BOM } from 'bom-weather';
```
All methods are static, and can be accessed without constructing the class. To access an endpoint, all methods require a 6-digit [Geohash](https://en.wikipedia.org/wiki/Geohash) for the city to receive data for. Enums have been included for Geohashes of all the major cities of Australia. The current available endpoints are as follows
```ts
// Current Weather Observations
BOM.getObservations('GEOHASH')

// Current Weather Warnings (if available)
BOM.getWarnings('GEOHASH')

// Array of Current and Upcoming Daily Forecasts
BOM.getDailyForecast('GEOHASH')

// Array of Current and Upcoming Three-Hour Forecasts
BOM.getThreeHourForecast('GEOHASH')

// Current Rain Forecast (if available)
BOM.getRainForecast('GEOHASH');
```

### Examples
Find the current weather observations for Sydney
```ts
import { BOM, Cities } from 'bom-weather';

await BOM.getObservations(Cities.SYDNEY);
```
## Disclaimer
*Please Note: This package is meant for test purposes only. Under no circumstances is this API to be used for commercial purposes. Please contact [BOM](http://www.bom.gov.au/) directly to get permission to use a commercial license*