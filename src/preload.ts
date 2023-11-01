// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

// eslint-disable-next-line import/no-unresolved
import { Setup } from '@common';

Setup.printMessage( 'preload' );