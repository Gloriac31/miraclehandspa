# Optimized Image Components

This directory contains optimized image components for better performance and Lighthouse scores.

## Components

### 1. OptimizedImage.astro

Basic optimized image component with essential features.

```astro
import OptimizedImage from '../common/OptimizedImage.astro';

<OptimizedImage
  src="/path/to/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority={true}
  quality={85}
  format="webp"
/>
```

### 2. ResponsiveImage.astro

Advanced responsive image component with aspect ratio and object fit controls.

```astro
import ResponsiveImage from '../common/ResponsiveImage.astro';

<ResponsiveImage
  src="/path/to/image.jpg"
  alt="Description"
  width={800}
  height={600}
  aspectRatio="16/9"
  objectFit="cover"
  objectPosition="center"
  priority={false}
/>
```

### 3. ServiceImage.astro

Specialized component for service cards with price badges.

```astro
import ServiceImage from '../common/ServiceImage.astro';

<ServiceImage
  src="/path/to/service.jpg"
  alt="Service description"
  price="$99"
  badge="POPULAR"
  badgeColor="bg-gold-500 text-white"
  priority={true}
/>
```

### 4. HeroImage.astro

Hero section image with overlay support.

```astro
import HeroImage from '../common/HeroImage.astro';

<HeroImage
  src="/path/to/hero.jpg"
  alt="Hero description"
  overlay={true}
  overlayOpacity={0.4}
  priority={true}
>
  <!-- Content over the image -->
  <h1>Hero Title</h1>
</HeroImage>
```

## Performance Benefits

- **Automatic WebP/AVIF conversion** for better compression
- **Responsive images** with proper `sizes` attributes
- **Lazy loading** by default (except priority images)
- **Blur placeholders** to prevent layout shift
- **Optimized quality** settings for different use cases
- **Proper `fetchpriority`** for above-the-fold content

## Best Practices

1. **Use priority={true}** for above-the-fold images
2. **Set appropriate dimensions** for better performance
3. **Use descriptive alt text** for accessibility
4. **Choose the right component** for your use case
5. **Test with Lighthouse** to verify improvements

## Migration

Replace regular `<img>` tags with these components:

```astro
<!-- Before -->
<img src="/image.jpg" alt="Description" class="w-full h-32 object-cover" />

<!-- After -->
<OptimizedImage
  src="/image.jpg"
  alt="Description"
  width={400}
  height={200}
  class="w-full h-32 object-cover"
/>
```
