import { default as expectPatched } from '@storybook/expect';
import { instrument } from '@storybook/instrumenter';
import * as extensions from '@testing-library/jest-dom/matchers';

expectPatched.extend(extensions);

export const { expect } = instrument(
  { expect: expectPatched },
  { intercept: (method, path) => path[0] !== 'expect' }
);