import { describe, expect, it } from 'vitest';

import { TinySegmenter } from './index.js';

describe('TinySegmenter', () => {
  it('segments text', () => {
    // Arrange
    const segmenter = new TinySegmenter();

    // Act
    const segments = segmenter.segment('私の名前は中野です。');

    // Assert
    expect(segments).toEqual(['私', 'の', '名前', 'は', '中野', 'です', '。']);
  });
});
