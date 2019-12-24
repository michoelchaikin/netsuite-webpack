/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */

import { EntryPoints } from 'N/types';

import * as config from 'N/config';
import * as moment from 'moment';
import { random } from 'lodash';

export function onRequest(context: EntryPoints.Suitelet.onRequestContext) {
  const companyInformation = config.load({
    type: config.Type.COMPANY_INFORMATION,
  });
  const companyName = companyInformation.getText({ fieldId: 'companyname' });
  const formattedTime = moment().format('LLLL');
  const randomNumber = random(0, 100);

  context.response.write(
    `<p><strong>Company Name</strong>: ${companyName}</p>`
  );
  context.response.write(
    `<p><strong>Current Time</strong>: ${formattedTime}</p>`
  );
  context.response.write(
    `<p><strong>Random Number</strong>: ${randomNumber}</p>`
  );
}
