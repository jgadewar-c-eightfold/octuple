import React from 'react';
import {
  IRegisterFont,
  IRegisterTheme,
  FontOptions,
  ThemeOptions,
} from './Theming';
import type { Locale } from '../LocaleProvider';
import { FocusVisibleOptions } from './A11y';
import { Shape } from './ShapeContext';
import { Size } from './SizeContext';
import { ValidateMessages } from '../Form/Internal/OcForm.types';
import { RequiredMark } from '../Form/Form.types';

export type DirectionType = 'ltr' | 'rtl' | undefined;

export interface ConfigContextProps {
  /**
   * If true, no contextual disable for a given component
   * @default false
   */
  noDisabledContext?: boolean;
  /**
   * If true, no contextual shape for a given component
   * @default false
   */
  noShapeContext?: boolean;
  /**
   * If true, no contextual size for a given component
   * @default false
   */
  noSizeContext?: boolean;
}

export interface IConfigContext {
  fontOptions: FontOptions;
  themeOptions: ThemeOptions;
  setFontOptions: (fontOptions: FontOptions) => void;
  setThemeOptions: (themeOptions: ThemeOptions) => void;
  disabled?: boolean;
  focusVisibleOptions?: FocusVisibleOptions;
  form?: {
    validateMessages?: ValidateMessages;
    requiredMark?: RequiredMark;
    colon?: boolean;
  };
  icomoonIconSet?: Object;
  locale?: Locale;
  registeredFont?: IRegisterFont;
  registeredTheme?: IRegisterTheme;
  shape?: Shape;
  size?: Size;
}

export interface ConfigProviderProps {
  /**
   * The child component renderer.
   */
  children?: React.ReactNode;
  /**
   * Used by the disabled context provider to disable components.
   */
  disabled?: boolean;
  /**
   * Options for font
   * @default { fontFamily: 'Source Sans Pro', fontSize: '16px', fontStack: '-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif' }
   */
  fontOptions?: FontOptions;
  /**
   * Options for keyboard modality styles
   * @default { focusVisible: true, focusVisibleElement: document.documentElement }
   */
  focusVisibleOptions?: FocusVisibleOptions;
  /**
   * Global Form properties.
   */
  form?: {
    validateMessages?: ValidateMessages;
    requiredMark?: RequiredMark;
    colon?: boolean;
  };
  /**
   * selection.json as generated by icomoon for icons
   * @default {}
   */
  icomoonIconSet?: Object;
  /**
   * The locale of the application.
   */
  locale?: Locale;
  /**
   * Used by the shape context provider to determine the shape of components.
   */
  shape?: Shape;
  /**
   * Used by the size context provider to determine the size of components.
   */
  size?: Size;
  /**
   * Options for theming
   * @default { name: 'blue', customTheme: null }
   */
  themeOptions?: ThemeOptions;
}
