(()=>{
  Array.prototype.print = function() {
    var c = [], d = [];
    for (let a in this) {
      if(!(this[a] instanceof Object) || (this[a] instanceof Array)) throw new TypeError("Unknown type in array, index: " + a + "\n" + "Objects are only allowed");
      if (this[a].msg && this[a]) {
        if (1 < Object.keys(this[a]).length) {
          c.push("%c ", this[a].msg);
          var b = "";
          this[a].align && (b += `text-align:${this[a].align};`);
          this[a].animation && (b += `animation:${this[a].animation};-webkit-animation:${this[a].animation};`);
          this[a].background && (b += `background-color:${this[a].background};`);
          this[a].bborder && (b += `border-bottom:${this[a].bborder};`);
          this[a].border && (b += `border:${this[a].border};`);
          this[a].bottom && (b += `bottom:${this[a].bottom};`);
          this[a].bwidth && (b += `border-width:${this[a].bwidth};`);
          this[a].clear && (b += `clear:${this[a].clear};`);
          this[a].collapse && (b += `border-collapse:${this[a].collapse};`);
          this[a].color && (b += `color:${this[a].color};`);
          this[a].content && (b += `content:${this[a].content};`);
          this[a].corner && (b += `border-radius:${this[a].corner};`);
          this[a].cursor && (b += `cursor:${this[a].cursor};`);
          this[a].display && (b += `display:${this[a].display};`);
          this[a].filter && (b += `filter:${this[a].filter};-webkit-filter:${this[a].filter};`);
          this[a].float && (b += `float:${this[a].float};`);
          this[a].font && (b += `font-family:${this[a].font};`);
          this[a].fontstyle && (b += `font-style:${this[a].fontstyle};`);
          this[a].fweight && (b += `font-weight:${this[a].fweight};`);
          this[a].left && (b += `left:${this[a].left};`);
          this[a].lborder && (b += `border-left:${this[a].lborder};`);
          this[a].opacity && (b += `opacity:${this[a].opacity};`);
          this[a].padding && (b += `padding:${this[a].padding};`);
          this[a].position && (b += `position:${this[a].position};`);
          this[a].rborder && (b += `border-right:${this[a].rborder};`);
          this[a].right && (b += `right:${this[a].right};`);
          this[a].size && (b += `font-size:${this[a].size};`);
          this[a].textd && (b += `text-decoration:${this[a].textd};`);
          this[a].tborder && (b += `border-top:${this[a].tborder};`);
          this[a].top && (b += `top:${this[a].top};`);
          this[a].uselect && (b += `user-select:${this[a].uselect};-webkit-user-select:${this[a].uselect};`);
          this[a].ww && (b += `word-wrap:${this[a].ww};`);
          this[a].z && (b += `z-index:${this[a].z};`);
          d.push(b);
        } else {
          c.push("%c " + this[a].msg), d.push("color:black");
        }
      }else{
        if(a == this || a == "print") continue;
        throw new Error("Null object given in array index: " + a);
      }
    }
    c = [c.join("")];
    for (let a in d) "string" == typeof d[a] && c.push(d[a]);
    console.log.apply(this, c);
  };
})();
