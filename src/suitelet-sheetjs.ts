/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */

import { EntryPoints } from 'N/types';

import * as XLSX from 'xlsx';
import * as file from 'N/file';

export function onRequest(context: EntryPoints.Suitelet.onRequestContext) {
  const workbook = XLSX.utils.book_new();

  workbook.Props = {
    Title: 'Test Workbook',
    Subject: 'Test Subject',
    Author: 'Michoel Chaikin',
    CreatedDate: new Date(),
  };

  workbook.SheetNames.push('sheet');

  workbook.Sheets['sheet'] = XLSX.utils.aoa_to_sheet([
    [1, 2, 3, 4, 5, 6, 7],
    [2, 3, 4, 5, 6, 7, 8],
  ]);

  var result = XLSX.write(workbook, { bookType: 'xlsx', type: 'base64' });

  const outputFile = file.create({
    name: 'test.xlsx',
    fileType: file.Type.EXCEL,
    contents: result,
  });

  context.response.writeFile({ file: outputFile });
}
