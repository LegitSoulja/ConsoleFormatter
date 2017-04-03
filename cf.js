(()=>{
  // future use to make everything much easier, but got to make it :)
  class printObject{
      constructor(){
      }
  }
  Array.prototype.print = function() {
      var c = [],d = [],a;
      for (a in this)
          if (this[a].msg && this[a])
              if (this[a].color) {
                  c.push("%c ", this[a].msg);
                  var b = "color:" + this[a].color;
                  this[a].background && (b += ";background-color:" + this[a].background);
                  this[a].size && (b += ";font-size:" + this[a].size);
                  this[a].fweight && (b += ";font-weight:" + this[a].fweight);
                  this[a].border && (b += ";border:" + this[a].border);
                  this[a].padding && (b += ";padding:" + this[a].padding);
                  this[a].corner && (b += ";border-radius:" + this[a].corner);
                  d.push(b)
              } else c.push("%c " + this[a].msg),
                  d.push("color:black");
      b = c.join("");
      c = [];
      c.push(b);
      for (a in d) c.push(d[a]);
      c.splice(-1, 1);
      console.log.apply(this, c)
  };
})();
