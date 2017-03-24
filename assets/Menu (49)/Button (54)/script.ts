class ButtonBehavior extends Sup.Behavior {
  
  mouseOver : boolean = false;
  callback : string = "";
  
  
  awake() {
    
  }

  update() {
    this.mouseOver = false;
    let mouseCoords = Sup.Input.getMousePosition();
    let ray = new Sup.Math.Ray();
    ray.setFromCamera(Sup.getActor("Camera").camera, mouseCoords);
    for(let hit of ray.intersectActors(Sup.getAllActors()))
    {
      if(hit.actor == this.actor)
      {
        this.mouseOver = true;
        break;
      }  
    }
    
    if(this.mouseOver && Sup.Input.wasMouseButtonJustPressed(0))
    {
      if(ButtonScripts[this.callback])
        ButtonScripts[this.callback]();
      else
        Sup.log(`Unable to find script ${this.callback} called by ${this.actor.getName()}`);
    }
  }
}
Sup.registerBehavior(ButtonBehavior);

namespace ButtonScripts {
  
  //Called by main menu button "VsMode"
  export function button_vsmode() {
    Sup.loadScene("Levels/Test Level/Scene");
  }
}