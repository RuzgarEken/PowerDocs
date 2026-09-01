import React from 'react';
// Default implementation, that you can customize
import MDXComponents from '@theme-original/MDXComponents';
import {
  EffectExample,
  StatExample,
  InjectorExample,
  PackExample,
  RepositoryExample,
  PowerRef,
  SpecCard,
  SpecRow,
  SpecTags,
} from '@site/src/components/PowerSpec';

export default {
  // Re-use the default mapping (code blocks, headings, admonitions, etc.)
  ...MDXComponents,
  // Power data "spec card" components — available in every .mdx, no import needed.
  EffectExample,
  StatExample,
  InjectorExample,
  PackExample,
  RepositoryExample,
  PowerRef,
  SpecCard,
  SpecRow,
  SpecTags,
};
