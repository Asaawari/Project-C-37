class Form{
    constructor(){
        this.button = createButton("Save");
        this.clear = createButton("Clear");
    }
    display(){
    this.button.position(250, 200);
    this.button.mousePressed(() => {
      this.button.hide();
      final.update();
    });
    this.clear.mousePressed(() => {
      canvas.hide();
      });
}
}