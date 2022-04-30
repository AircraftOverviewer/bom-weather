import { BOM } from '../index';

(async () => {
	console.log(await BOM.getWarnings('r68mtc'));
})().catch(console.error);
