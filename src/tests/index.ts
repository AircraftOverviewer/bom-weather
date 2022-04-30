import { BOM, Cities } from '../index';

(async () => {
	console.log(await BOM.getObservations(Cities.SYDNEY));
})().catch(console.error);
