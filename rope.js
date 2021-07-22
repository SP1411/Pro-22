class rope{
	constructor(body1,body2,pointA,pointB)
	{
       this.pointA = pointA;
	   this.pointB = pointB;

	   var options={

		  bodyA:body1,
		  bodyB:body2,
		  pointB:{x:this.pointA, y:this.pointB}
	   }
	//create rope constraint here
	
	}


    //create display() here 
     display() {

        var pointA = this.rope.bodyA.position;
		var pointB = this.rope.bodyA.position;

		push();
        strokeWeight(2);
        stroke(255);
        line(con1.pointA.x,con1.pointA.y,bob1.position.x,bob1.position.y);
        line(con2.pointA.x,con2.pointA.y,bob2.position.x,bob2.position.y);
        line(con3.pointA.x,con3.pointA.y,bob3.position.x,bob3.position.y);
        line(con4.pointA.x,con4.pointA.y,bob4.position.x,bob4.position.y);
        line(con5.pointA.x,con5.pointA.y,bob5.position.x,bob5.position.y);
        pop();
	}
}
