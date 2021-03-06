import {Page as RealPage} from './Page.js';
import * as child_process from 'child_process';

declare global {
  module Puppeteer {
    export class Page extends RealPage { }
    /* TODO(jacktfranklin@): once DOMWorld, Page, and FrameManager are in TS
     * we can remove this and instead use the type defined in LifeCycleWatcher
     */
    export type PuppeteerLifeCycleEvent = 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2';

    export interface ConnectionTransport {
      send(string);
      close();
      onmessage?: (message: string) => void,
      onclose?: () => void,
    }

    export type Viewport = {
      width: number;
      height: number;
      deviceScaleFactor?: number;
      isMobile?: boolean;
      isLandscape?: boolean;
      hasTouch?: boolean;
    }
  }
}
