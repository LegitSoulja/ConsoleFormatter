# ConsoleFormatter
Add a little style to your console outputs

Pay attention, this will be a real quick tutorial.

> You can ONLY use format when a valid color key is present

### Usage
```javascript
// single format,colors,etc
[{msg: "Hello world", color: "black", fweight: "bold"}].print();

// multiple formats,colors,etc
[
{msg: "Hello", color: "black", fweight: "bold"},
{msg: "World", color: "purple", fweight: "bold"},
].print();
```


### Object format keys -as- css property
- color as (color)
> Ex: ```[{msg:"Hello World", color:"orange"}].print()```
- background as (background-color)
> Ex: ```[{msg:"Hello World ", color:"orange", background:"black"}].print()```
- size as (font-size)
- fweight as (font-weight)
- border as (border)
- padding as (padding)
- corner as (border-radius)
