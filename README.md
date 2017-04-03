# ConsoleFormatter
Add a little style to your console outputs

Pay attention, this will be a real quick tutorial.

### Usage
```javascript
Single string/word thats formated
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
- size as (font-size)
- fweight as (font-weight)
- border as (border)
- lborder as (border-left)
- tborder as (border-top)
- rborder as (border-right)
- bborder as (border-bottom)
- bwidth as (border-width)
- align as (text-align)
- font as (font-family)
- corner as (border-radius)
- padding as (padding)
- corner as (border-radius)
