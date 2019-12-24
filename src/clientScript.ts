/**
 * @NAPIVersion 2.0
 * @NScriptType ClientScript
 */

import { EntryPoints } from 'N/types';

import * as dialog from 'N/ui/dialog';
import * as message from 'N/ui/message';

// TODO: figure out how to get automatic pollyfills for dependancies with "useBuiltIns: usage" option
import 'core-js/features/weak-map';
import Swal from 'sweetalert2';

export async function pageInit(context: EntryPoints.Client.pageInitContext) {
  await dialog.alert({
    title: 'A dialog from Webpack',
    message: 'Hello from Webpack!',
  });

  Swal.fire({
    title: 'Message from sweet alert!',
    text: 'You will this message after you dismiss the native NetSuite alert',
    icon: 'info',
    confirmButtonText: 'Cool',
  });

  message
    .create({
      type: message.Type.INFORMATION,
      title: 'A message from Webpack',
      message: 'Hello from webpack',
    })
    .show();
}
