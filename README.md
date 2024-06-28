# tiny-segmenter

[TinySegmenter](http://chasen.org/~taku/software/TinySegmenter/) converted to
TypeScript (and slightly more modern JS) and packaged as an npm module.

## Installation

```
npm install @birchill/tiny-segmenter
```

## Usage

```typescript
import { TinySegmenter } from '@birchill/tiny-segmenter';

const segmenter = new TinySegmenter();
const segments = segmenter.segment('私の名前は中野です');
// segments = ['私', 'の', '名前', 'は', '中野', 'です']
```
