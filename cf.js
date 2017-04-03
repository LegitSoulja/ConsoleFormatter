(()=>{
  Array.prototype.print = function() {
    var c = [], d = [];
    for (let a in this) {
      if (this[a].msg && this[a]) {
        if (1 < Object.keys(this[a]).length) {
          c.push("%c ", this[a].msg);
          var b = "";
          this[a].color && (b += `color:${this[a].color};`);
          this[a].background && (b += `background-color:${this[a].background} ;`);
          this[a].size && (b += `font-size:${this[a].size};`);
          this[a].fweight && (b += `font-weight:${this[a].fweight};`);
          this[a].font && (b += `font-family:${this[a].font}`);
          this[a].border && (b += `border:${this[a].border};`);
          this[a].lborder && (b += `border-left:${this[a].lborder};`);
          this[a].align && (b += `text-align:${this[a].align};`);
          this[a].rborder && (b += `border-right:${this[a].rborder};`);
          this[a].tborder && (b += `border-top:${this[a].tborder};`);
          this[a].bborder && (b += `border-bottom:${this[a].bborder};`);
          this[a].bwidth && (b += `border-width:${this[a].bwidth};`);
          this[a].padding && (b += `padding:${this[a].padding};`);
          this[a].corner && (b += `border-radius:${this[a].corner};`);
          d.push(b);
        } else {
          c.push("%c " + this[a].msg), d.push("color:black");
        }
      }
    }
    c = [c.join("")];
    for (a in d) "string" == typeof d[a] && c.push(d[a]);
    console.log.apply(this, c);
  };
})();
