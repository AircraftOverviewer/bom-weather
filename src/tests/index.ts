import { Cities } from '../client/structures';
import { BOM } from '../index';

(async () => {
	const observations = await BOM.getObservations(Cities.ADELAIDE);
	const warnings = await BOM.getWarnings(Cities.BRISBANE);
	const dailyForecast = await BOM.getDailyForecast(Cities.CANBERRA);
	const threeHourForecast = await BOM.getThreeHourForecast(Cities.DARWIN);
	const rainForecast = await BOM.getRainForecast(Cities.HOBART);

	console.log(observations, warnings, dailyForecast, threeHourForecast, rainForecast);
})().catch(console.error);
