game.carSH = function()
{
	this.carData.opacity = 1;
	this.carData.repeat = 2;
	this.carData.allow = true;
	this.carData.dir = 1;
}

game.carRender = function()
{
	if(this.carData.obj){
		if(this.carData.allow){
			this.c_obj.globalAlpha = this.carData.opacity;
			if(this.carData.dir == 1){
				this.carData.opacity -= 0.04;
				if(this.carData.opacity <= 0){
					this.carData.opacity = 0;
					this.carData.dir = -1;
				}
			}
			else if(this.carData.dir == -1){
				this.carData.opacity += 0.04;
				if(this.carData.opacity >= 1){
					this.carData.opacity = 1;		
					if(--this.carData.repeat < 1){
						this.carData.allow = false;
					}
					else{
						this.carData.dir = 1;
					}
				}
			}
		}	
		this.c_obj.save();
		this.c_obj.translate(this.carData.x,this.carData.y);
		this.c_obj.rotate(this.carData.rotate*this.carData.hd);
		this.c_obj.translate(-this.carData.x,-this.carData.y+this.carData.rotateOffsetY);
		this.c_obj.drawImage(
			this.carData.obj,
			0,
			0,
			this.carData.obj.width,
			this.carData.obj.height,
			this.carData.x - this.carData.obj.width/2,
			this.carData.y - this.carData.obj.height/2,
			this.carData.obj.width,
			this.carData.obj.height
		)
		this.c_obj.restore();
		if(!this.gameInfo.pause && !this.gameInfo.debug &&this.isHit()){
			this.gameOver("hit");
		}
		this.carAnimation();
		this.c_obj.globalAlpha = 1;
	}
}