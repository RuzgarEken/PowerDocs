import React from 'react';
// Default implementation, that you can customize
import MDXComponents from '@theme-original/MDXComponents';
import EffectExample from '@site/src/components/EffectExample';

export default {
  // Re-use the default mapping (code blocks, headings, admonitions, etc.)
  ...MDXComponents,
  // Make <EffectExample /> available in every .mdx file, no import needed
  EffectExample,
};