### Note

This package is for use in mobile devices that works with touch screen (web mobile). The package permit identify the direction swipe

### How to use

Install:
`npm install swipe-direction`

Usage:
.
.
.

```javascript
import useSwipeDetector from "swipe-direction";

const SwapContainer = () => {
  const [moveTo, events] = useSwipeDetector();
  return (
    <div className="grid">
      <div {...events} className="box-detector">
        <h1 className="text"> {moveTo} </h1>
      </div>
    </div>
  );
};
```

this code show a element where you can do swipe and it show to the direction on screen
