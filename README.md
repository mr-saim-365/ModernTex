# ModernTex - Fashion Manufacturing Website

A modern, responsive website for ModernTex, a garment manufacturing company, featuring smooth GSAP animations, scroll-triggered effects, and optimized image loading with lazy loading.

## Features

### 🎨 Smooth GSAP Animations

- **Scroll-triggered animations** that activate when elements enter the viewport
- **Re-trigger animations** when scrolling back up - animations play again when elements re-enter the viewport
- **Staggered animations** for lists and grids of elements
- **Multiple animation types**: fade in, slide in, scale in, and custom effects
- **Performance optimized** with proper cleanup and memory management

### 🖼️ Optimized Image Loading

- **Lazy Loading**: Images only load when they enter the viewport
- **Intersection Observer API**: Native browser API for efficient scroll detection
- **Loading="lazy"**: Native HTML attribute for additional browser optimization
- **Placeholder States**: Smooth loading animations with skeleton placeholders
- **Error Handling**: Graceful fallbacks for failed image loads
- **Performance Boost**: Significantly faster initial page loads

### 🏗️ Animation Implementation

#### Components with GSAP Animations:

1. **Hero Section** (`src/components/Hero.jsx`)

   - Animated counters with circular progress
   - Text content fade-in animations
   - Image slide-in effects with lazy loading
   - Decorative SVG animations

2. **Who Are We** (`src/components/Whoarewe.jsx`)

   - Text content slide-in from left
   - Image slide-in from right with scale effect and lazy loading

3. **Mission & Vision** (`src/components/MissionandVission.jsx`)

   - Mission section slide-in from left
   - Vision section slide-in from right
   - Staggered child element animations

4. **Divisions Section** (`src/components/Divisions.jsx`)

   - Text content fade-in animations
   - Division icons scale-in with stagger effect
     1123

5. **Our Clients** (`src/components/OurClients.jsx`)

   - Text content slide-in from left
   - Client logos scale-in with stagger effect

6. **Contact Page** (`src/pages/Contact.jsx`)

   - Contact info slide-in from left
   - Map slide-in from right
   - Form elements fade-in with stagger

7. **Product Page** (`src/pages/ProductPage.jsx`)

   - Product images scale-in with stagger and lazy loading
   - Product details slide-in from right
   - Mobile image carousel animations

8. **Items Page** (`src/pages/Items.jsx`)

   - Category filters slide-in from top
   - Product grid scale-in with stagger and lazy loading
   - Re-animates when category/search changes

9. **Division Content** (`src/pages/DivisionContent.jsx`)

   - Title fade-in animation
   - Service sections slide-in with stagger and lazy loading

10. **Navbar** (`src/components/Navbar.jsx`)
    - Logo scale-in animation
    - Navigation items slide-in with stagger

### 🛠️ Technical Implementation

#### GSAP Configuration

- **ScrollTrigger plugin** for scroll-based animations
- **Toggle actions**: `"play none none reverse"` - plays on enter, reverses on exit
- **Trigger points**: `"top 80%"` - triggers when element is 20% in viewport
- **End points**: `"bottom 20%"` - ends when element is 20% out of viewport

#### Lazy Loading Implementation

- **Intersection Observer API**: Efficient scroll detection without performance impact
- **Root Margin**: `50px 0px` - starts loading 50px before image enters viewport
- **Threshold**: `0.1` - triggers when 10% of image is visible
- **Loading="lazy"**: Native HTML attribute for additional optimization
- **Error Handling**: Graceful fallbacks for failed image loads

#### Animation Types Used:

- **fadeInUp**: Elements slide up from bottom with opacity change
- **fadeInLeft**: Elements slide in from left
- **fadeInRight**: Elements slide in from right
- **scaleIn**: Elements scale up from smaller size
- **stagger**: Multiple elements animate with delays

#### Performance Features:

- **Proper cleanup**: ScrollTrigger instances are killed on component unmount
- **Conditional rendering**: Animations only run when elements exist
- **Efficient triggers**: Animations trigger at optimal scroll positions
- **Lazy loading**: Images only load when needed
- **Memory optimization**: Intersection observers are properly cleaned up

## Installation

```bash
# Install dependencies
npm install

# Install GSAP (if not already installed)
npm install gsap

# Start development server
npm run dev
```

## Animation Configuration

### Scroll Trigger Settings

```javascript
scrollTrigger: {
  trigger: element,
  start: "top 80%",    // Trigger when element top is 80% down viewport
  end: "bottom 20%",   // End when element bottom is 20% up viewport
  toggleActions: "play none none reverse"  // Play on enter, reverse on exit
}
```

### Lazy Loading Configuration

```javascript
// Using the LazyImage component
<LazyImage
  src="/path/to/image.jpg"
  alt="Description"
  className="w-full h-full object-cover"
  rootMargin="50px 0px" // Start loading 50px before entering viewport
  threshold={0.1} // Trigger when 10% visible
  placeholder="Loading..." // Custom placeholder text
/>
```

### Animation Presets

```javascript
// Fade in from bottom
{ y: 50, opacity: 0, duration: 1, ease: "power2.out" }

// Slide in from left
{ x: -50, opacity: 0, duration: 1, ease: "power2.out" }

// Scale in
{ scale: 0.8, opacity: 0, duration: 1, ease: "back.out(1.7)" }

// Stagger effect
{ stagger: 0.2, duration: 0.8, ease: "power2.out" }
```

## Customization

### Adding New Animations

1. Import GSAP and ScrollTrigger in your component
2. Register the ScrollTrigger plugin
3. Create refs for elements you want to animate
4. Use `gsap.fromTo()` with scroll trigger configuration
5. Clean up ScrollTrigger instances in useEffect cleanup

### Adding Lazy Loading to Images

1. Import the LazyImage component
2. Replace `<img>` tags with `<LazyImage>`
3. Configure rootMargin and threshold as needed
4. Add error handling if required

### Example:

```javascript
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LazyImage from "../components/LazyImage";

gsap.registerPlugin(ScrollTrigger);

const MyComponent = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) return;

    gsap.fromTo(
      elementRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={elementRef}>
      <LazyImage
        src="/path/to/image.jpg"
        alt="Description"
        className="w-full h-64 object-cover"
      />
    </div>
  );
};
```

## Performance Benefits

### Lazy Loading Benefits:

- **Faster Initial Load**: Only loads images that are immediately visible
- **Reduced Bandwidth**: Saves data for users on slow connections
- **Better User Experience**: Faster page loads and smoother scrolling
- **SEO Friendly**: Improves Core Web Vitals scores

### Animation Performance:

- **Hardware Acceleration**: Uses CSS transforms for smooth animations
- **Efficient Scroll Detection**: Intersection Observer API is highly performant
- **Memory Management**: Proper cleanup prevents memory leaks
- **Reduced Motion**: Respects user's motion preferences

## Browser Support

- Modern browsers with CSS transforms and opacity support
- GSAP ScrollTrigger requires JavaScript enabled
- Intersection Observer API (supported in all modern browsers)
- Responsive design works on all screen sizes

## Performance Notes

- Animations are hardware-accelerated using CSS transforms
- ScrollTrigger efficiently manages scroll listeners
- Memory leaks are prevented with proper cleanup
- Animations are disabled on mobile devices with reduced motion preferences
- Lazy loading works with native browser support
- Images are optimized for web delivery

## License

This project is proprietary to ModernTex.
