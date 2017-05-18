/**
  Helper to build widgets.
*/
class WidgetBuilder {
  
  public static buildActionWidget(x: number, y: number, ...actions : string[])
  {
    let widget = Sup.appendScene("Widgets/Action Menu/Prefab")[0];
    widget.setPosition(x, y, 0.2);
    
    //Set actions & size
    widget.getChild("Background").spriteRenderer.setAnimation("" + actions.length);
    
    let i = 0;
    for(let action of actions)
    {
      let newAction = Sup.appendScene("Widgets/Action Menu/Action")[0];
      newAction.spriteRenderer.setAnimation(action);
      newAction.setParent(widget.getChild("Actions"));
      newAction.setLocalPosition(0, i, 0.1);
      i--;
    }
  }
  
  
}