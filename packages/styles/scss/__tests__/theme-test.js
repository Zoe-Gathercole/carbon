/**
 * Copyright IBM Corp. 2018, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @jest-environment node
 */

'use strict';

const { SassRenderer } = require('@carbon/test-utils/scss');

const { render } = SassRenderer.create(__dirname);

describe('@carbon/styles/scss/theme', () => {
  test('Public API', async () => {
    const { get } = await render(`
      @use 'sass:map';
      @use 'sass:meta';
      @use '../theme';

      $_: get('api', (
        variables: map.keys(meta.module-variables('theme')),
        mixins: (
          theme: meta.mixin-exists('theme', 'theme'),
        ),
      ));
    `);

    const { value: api } = get('api');
    expect(api.mixins).toEqual({
      theme: true,
    });
    expect(api.variables).toMatchInlineSnapshot(`
      Array [
        "fallback",
        "theme",
        "background",
        "background-active",
        "background-selected",
        "background-selected-hover",
        "background-hover",
        "background-brand",
        "background-inverse",
        "background-inverse-hover",
        "layer-01",
        "layer-active-01",
        "layer-hover-01",
        "layer-selected-01",
        "layer-selected-hover-01",
        "layer-02",
        "layer-active-02",
        "layer-hover-02",
        "layer-selected-02",
        "layer-selected-hover-02",
        "layer-03",
        "layer-active-03",
        "layer-hover-03",
        "layer-selected-03",
        "layer-selected-hover-03",
        "layer-selected-inverse",
        "layer-selected-disabled",
        "layer-accent-01",
        "layer-accent-active-01",
        "layer-accent-hover-01",
        "layer-accent-02",
        "layer-accent-active-02",
        "layer-accent-hover-02",
        "layer-accent-03",
        "layer-accent-active-03",
        "layer-accent-hover-03",
        "field-01",
        "field-hover-01",
        "field-02",
        "field-hover-02",
        "field-03",
        "field-hover-03",
        "interactive",
        "border-subtle-00",
        "border-subtle-01",
        "border-subtle-selected-01",
        "border-subtle-02",
        "border-subtle-selected-02",
        "border-subtle-03",
        "border-subtle-selected-03",
        "border-strong-01",
        "border-strong-02",
        "border-strong-03",
        "border-tile-01",
        "border-tile-02",
        "border-tile-03",
        "border-inverse",
        "border-interactive",
        "border-disabled",
        "text-primary",
        "text-secondary",
        "text-placeholder",
        "text-helper",
        "text-error",
        "text-inverse",
        "text-on-color",
        "text-on-color-disabled",
        "text-disabled",
        "link-primary",
        "link-primary-hover",
        "link-secondary",
        "link-visited",
        "link-inverse",
        "link-inverse-active",
        "link-inverse-hover",
        "icon-primary",
        "icon-secondary",
        "icon-inverse",
        "icon-on-color",
        "icon-on-color-disabled",
        "icon-disabled",
        "icon-interactive",
        "support-error",
        "support-success",
        "support-warning",
        "support-info",
        "support-error-inverse",
        "support-success-inverse",
        "support-warning-inverse",
        "support-info-inverse",
        "support-caution-major",
        "support-caution-minor",
        "support-caution-undefined",
        "slug-background",
        "slug-gradient",
        "slug-background-hover",
        "slug-gradient-hover",
        "slug-hollow-hover",
        "slug-callout-gradient-top",
        "slug-callout-gradient-bottom",
        "slug-callout-aura-start",
        "slug-callout-aura-end",
        "slug-callout-gradient-top-hover",
        "slug-callout-gradient-bottom-hover",
        "slug-callout-aura-start-hover-01",
        "slug-callout-aura-start-hover-02",
        "slug-callout-aura-end-hover-01",
        "slug-callout-aura-end-hover-02",
        "slug-callout-gradient-top-selected",
        "slug-callout-gradient-bottom-selected",
        "slug-callout-aura-start-selected",
        "slug-callout-aura-end-selected",
        "ai-gradient-start-01",
        "ai-gradient-start-02",
        "ai-gradient-end",
        "slug-callout-shadow-outer-01",
        "slug-callout-shadow-outer-02",
        "ai-inner-shadow",
        "ai-aura-start",
        "ai-aura-end",
        "ai-border-strong",
        "ai-border-start",
        "ai-border-end",
        "ai-drop-shadow",
        "slug-callout-caret-center",
        "slug-callout-caret-bottom",
        "slug-callout-caret-bottom-background",
        "slug-callout-caret-bottom-background-actions",
        "highlight",
        "overlay",
        "toggle-off",
        "shadow",
        "focus",
        "focus-inset",
        "focus-inverse",
        "skeleton-background",
        "skeleton-element",
        "layer",
        "layer-active",
        "layer-hover",
        "layer-selected",
        "layer-selected-hover",
        "layer-accent",
        "layer-accent-hover",
        "layer-accent-active",
        "field",
        "field-hover",
        "border-subtle",
        "border-subtle-selected",
        "border-strong",
        "border-tile",
      ]
    `);
  });
});
