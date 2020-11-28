class SlingShot {
    constructor(body1,point2) {

        var options = {
            bodyA : body1,
            pointB : point2,
            stiffness : 0.05,
            length : 10
        }
        
        this.pointB = point2;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    fly() {

        this.sling.bodyA = null;

    }

    display() {
       
        if(this.sling.bodyA) {

            var pt1 = this.sling.bodyA.position;
            var pt2 = this.pointB;
            strokeWeight(4);
            line(pt1.x,pt1.y,pt2.x,pt2.y);

        }

    }
}
