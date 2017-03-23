enum Directions {
  DOWN = 0,
  RIGHT = 90,
  UP = 180,
  LEFT = 270
}

class MoveArrow {
  
  public static arrowParts : Sup.Actor[] = new Array<Sup.Actor>();
  
  /**
    Generates the movement arrow.
  
  */
  public static draw(origin : GridPosition, destination : GridPosition, range : number)
  {
    for(let part of this.arrowParts)
    {
      part.destroy();    
    }
    
    this.arrowParts = new Array<Sup.Actor>();
    
    //Position of the "cursor" during the steps
    let currentPos : GridPosition = new GridPosition(origin.x, origin.y);
    
    for(let i = 0; i < range; i++)
    {
      if(destination.x > currentPos.x)
      {
        currentPos.x++;
        let part = Sup.appendScene("Icons/MoveArrow/Prefab")[0];
        part.setPosition(currentPos.x + 0.5, currentPos.y + 0.5, 0.3);
        
        if(destination.equals(currentPos))
          part.spriteRenderer.setAnimation("arrow");
        else
          part.spriteRenderer.setAnimation("line");
        part.setEulerZ(Sup.Math.toRadians(Directions.RIGHT));
        this.arrowParts.push(part);
      }
      else if(destination.x < currentPos.x)
      {
        currentPos.x--;
        let part = Sup.appendScene("Icons/MoveArrow/Prefab")[0];
        part.setPosition(currentPos.x + 0.5, currentPos.y + 0.5, 0.3);
        
        if(destination.equals(currentPos))
          part.spriteRenderer.setAnimation("arrow");
        else
          part.spriteRenderer.setAnimation("line");
        part.spriteRenderer.setVerticalFlip(true);
        part.setEulerZ(Sup.Math.toRadians(Directions.RIGHT));
        this.arrowParts.push(part);
      }
      else if(destination.y > currentPos.y)
      {
        currentPos.y++;
        let part = Sup.appendScene("Icons/MoveArrow/Prefab")[0];
        part.setPosition(currentPos.x + 0.5, currentPos.y + 0.5, 0.3);
        
        if(destination.equals(currentPos))
          part.spriteRenderer.setAnimation("arrow");
        else
          part.spriteRenderer.setAnimation("line");
        part.setEulerZ(Sup.Math.toRadians(Directions.UP));
        
        this.arrowParts.push(part);
      } 
      else if(destination.y < currentPos.y)
      {
        currentPos.y--;
        let part = Sup.appendScene("Icons/MoveArrow/Prefab")[0];
        part.setPosition(currentPos.x + 0.5, currentPos.y + 0.5, 0.3);
        
        if(destination.equals(currentPos))
          part.spriteRenderer.setAnimation("arrow");
        else
          part.spriteRenderer.setAnimation("line");
        part.setEulerZ(Sup.Math.toRadians(Directions.DOWN));
        
        this.arrowParts.push(part);
      } 
      
      
      
      
    }
  }
}