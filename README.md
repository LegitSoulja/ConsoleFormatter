# ConsoleFormatter
Add a little style to your console outputs

> CDN: **//cdn.legitsoulja.info/cf/cf.min.js**

Pay attention, this will be a real quick tutorial.

### Usage
```javascript
// Single string/word thats formated
[{
  msg: "Hello world ", 
  color: "purple", 
  size: "30px",
  fweight: "bold",
  rborder:"3px solid purple",
  background:"black",
  padding:"20px"
}].print();

// Mutliple strings/words thats formated
[
{msg: "Hello", color: "black", fweight: "bold"},
{msg: "World", color: "purple", fweight: "bold"},
].print();
```


### Object format keys -as- css property
- color as (color)
> Ex: ```[{msg:"Hello World", color:"orange"}].print()```
- background as (background-color) using (rgba)
> Ex: ```[{msg:"Hello World ", background:"rgba(0,0,255,0.3)"}].print()```
- align as (text-align)
- animation as (animation)
- bborder as (border-bottom)
- border as (border)
- bottom as (bottom)
- bwidth as (border-width)
- clear as (clear)
- collapse as (border-collapse)
- content as (content)
- corner as (border-radius)
- cursor as (cursor)
- display as (display)
- filter as (filter)
- float as (float)
- font as (font-family)
- fontstyle as (font-style)
- fweight as (font-weight)
- left as (left)
- lborder as (border-left)
- opacity as (opacity)
- padding as (padding)
- position as (position)
- rborder as (border-right)
- right as (right)
- size as (font-size)
- textd as (text-decoration)
- tborder as (border-top)
- top as (top)
- uselect as (user-select)
- ww as (word-wrap)
- z as (z-index)

### Examples/Techniques/Styles
