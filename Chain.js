class Chain
{
    constructor(b1, b2)
    {
        var options = {bodyA: b1, bodyB: b2, stiffness: 0.5}
        this.chain = Constraint.create(options);     
        World.add(myWorld, this.chain);
    }
   show()
   {
        strokeWeight(3);
        line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.bodyB.position.x, this.chain.bodyB.position.y);    
    }
};