(()=>{
  const isCompatible = (chrome.runtime)?true:false;
  Array.prototype.print = function() {
    if(!isCompatible) {
      Array.prototype.print = function(){let i="";this.forEach((a)=>{i+=" "+a.msg});console.log(i)};
      throw new Error("This browser is not compatible with ConsoleFormatter");
    }
    var c = [], d = [];
    this.forEach((a)=>{
      var i = (this.indexOf(a) > -1)?this.indexOf(a):0;
      if(!(a instanceof Object) || (a instanceof Array)) throw new TypeError("Unknown type in array, index: " + i + "\n" + "Objects are only allowed");
      if (a.msg && a) {
        if (1 < Object.keys(a).length) {
          c.push("%c ", a.msg);
          var b = "";
          a.align && (b += `text-align:${a.align};`);
          a.animation && (b += `animation:${a.animation};-webkit-animation:${a.animation};`);
          a.background && (b += `background-color:${a.background};`);
          a.bborder && (b += `border-bottom:${a.bborder};`);
          a.border && (b += `border:${a.border};`);
          a.bottom && (b += `bottom:${a.bottom};`);
          a.bwidth && (b += `border-width:${a.bwidth};`);
          a.clear && (b += `clear:${a.clear};`);
          a.collapse && (b += `border-collapse:${a.collapse};`);
          a.color && (b += `color:${a.color};`);
          a.content && (b += `content:${a.content};`);
          a.corner && (b += `border-radius:${a.corner};`);
          a.cursor && (b += `cursor:${a.cursor};`);
          a.display && (b += `display:${a.display};`);
          a.filter && (b += `filter:${a.filter};-webkit-filter:${a.filter};`);
          a.float && (b += `float:${a.float};`);
          a.font && (b += `font-family:${a.font};`);
          a.fontstyle && (b += `font-style:${a.fontstyle};`);
          a.fweight && (b += `font-weight:${a.fweight};`);
          a.left && (b += `left:${a.left};`);
          a.lborder && (b += `border-left:${a.lborder};`);
          a.opacity && (b += `opacity:${a.opacity};`);
          a.padding && (b += `padding:${a.padding};`);
          a.position && (b += `position:${a.position};`);
          a.rborder && (b += `border-right:${a.rborder};`);
          a.right && (b += `right:${a.right};`);
          a.size && (b += `font-size:${a.size};`);
          a.textd && (b += `text-decoration:${a.textd};`);
          a.tborder && (b += `border-top:${a.tborder};`);
          a.top && (b += `top:${a.top};`);
          a.uselect && (b += `user-select:${a.uselect};-webkit-user-select:${a.uselect};`);
          a.ww && (b += `word-wrap:${a.ww};`);
          a.z && (b += `z-index:${a.z};`);
          d.push(b);
        } else {
          c.push("%c " + a.msg), d.push("color:black");
        }
      }else{
        if(a == this || a == "print") return;
        throw new Error("Null object given in array index: " + i);
      }
    });
    c = [c.join("")];
    for (let a in d) "string" == typeof d[a] && c.push(d[a]);
    console.log.apply(this, c);
  };
})();
