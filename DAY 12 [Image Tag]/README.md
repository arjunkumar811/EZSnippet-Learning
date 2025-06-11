# HTML Image Tag

The `<img>` tag is one of the most commonly used HTML elements, allowing you to display images on your web pages. Understanding how to properly use the image tag is essential for creating visually appealing websites.

## Basic Syntax

```html
<img src="image-path.jpg" alt="Description of the image" />
```

## Important Attributes

1. **src** (required): Specifies the path to the image

   - Can be a relative path: `src="images/photo.jpg"`
   - Or an absolute URL: `src="https://example.com/images/photo.jpg"`

2. **alt** (required for accessibility): Provides alternative text for the image

   - Displayed if the image cannot be loaded
   - Read by screen readers for visually impaired users
   - Used by search engines to understand image content

3. **width** and **height**: Specify the dimensions of the image

   - Can be in pixels or percentage: `width="500" height="300"` or `width="50%"`
   - Helps browsers allocate space for the image before it loads

4. **title**: Provides additional information about the image
   - Displayed as a tooltip when the user hovers over the image

## Best Practices

1. **Always include the alt attribute** - Even if it's empty (`alt=""`) for decorative images
2. **Optimize your images** - Compress images to reduce file size and improve loading speed
3. **Use appropriate image formats**:
   - JPEG: For photographs and complex images with many colors
   - PNG: For images requiring transparency or with few colors
   - SVG: For logos, icons, and illustrations that need to scale
   - WebP: Modern format with better compression and quality
4. **Specify width and height** - Prevents layout shifts during page loading
5. **Use responsive images** - Adapt to different screen sizes using CSS or the `srcset` attribute

## Example Usage

```html
<!-- Basic image -->
<img src="cat.jpg" alt="A cat sitting on a windowsill" />

<!-- With width and height -->
<img src="dog.jpg" alt="A golden retriever puppy" width="400" height="300" />

<!-- With title attribute -->
<img
  src="mountain.jpg"
  alt="Mount Everest"
  title="The highest mountain on Earth"
/>

<!-- Responsive image with srcset -->
<img
  src="photo.jpg"
  alt="Responsive image example"
  srcset="photo-small.jpg 500w, photo-medium.jpg 1000w, photo-large.jpg 1500w"
  sizes="(max-width: 600px) 500px,
            (max-width: 1200px) 1000px,
            1500px"
/>
```

## Practice Exercise

Try creating a webpage that displays various types of images with proper attributes and responsiveness. Experiment with different image formats and optimization techniques to see how they affect page loading and appearance.
