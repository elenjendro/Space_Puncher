
const canvas = document.querySelector("canvas")
const canvasb = document.querySelector("canvas")
const c = canvas.getContext("2d", { alpha: true})
const cb = canvasb.getContext("2d", { alpha: false})

var af , afr = false
let be = Date.now(),fps=0, fp=Date.now();
var controller



var imgs = new Array()
var imgload=0
imgs.push(document.createElement("img"))
imgs[0].src="./animations/player.png"
imgs.push(document.createElement("img"))
imgs[1].src="./animations/playeratack.png"
imgs.push(document.createElement("img"))
imgs[2].src="./animations/playeratack-1.png"
imgs.push(document.createElement("img"))
imgs[3].src="./animations/shield.png"
imgs.push(document.createElement("img"))
imgs[4].src="./animations/transparencia.png"
imgs.push(document.createElement("img"))
imgs[5].src="./animations/earthbar.png"
imgs.push(document.createElement("img"))
imgs[6].src="./animations/heal.png"
imgs.push(document.createElement("img"))
imgs[7].src="./animations/heal-1.png"
imgs.push(document.createElement("img"))
imgs[8].src="./animations/enemy.png"
imgs.push(document.createElement("img"))
imgs[9].src="./animations/enemyhit.png"
imgs.push(document.createElement("img"))
imgs[10].src="./animations/explosion.png"
imgs.push(document.createElement("img"))
imgs[11].src="./animations/tile1.png"
imgs.push(document.createElement("img"))
imgs[12].src="./animations/tile2.png"
imgs.push(document.createElement("img"))
imgs[13].src="./animations/waveatack.png"
imgs.push(document.createElement("img"))
imgs[14].src="./animations/waveatack-1.png"
imgs.push(document.createElement("img"))
imgs[15].src="./animations/playeratack2.png"
imgs.push(document.createElement("img"))
imgs[16].src="./animations/playeratack2-1.png"
imgs.push(document.createElement("img"))
imgs[17].src="./animations/playerhit.png"
imgs.push(document.createElement("img"))
imgs[18].src="./animations/enemy2.png"
imgs.push(document.createElement("img"))
imgs[19].src="./animations/enemy2hit.png"
imgs.push(document.createElement("img"))
imgs[20].src="./animations/enemy3.png"
imgs.push(document.createElement("img"))
imgs[21].src="./animations/enemy3hit.png"
imgs.push(document.createElement("img"))
imgs[22].src="./animations/title.png"
imgs.push(document.createElement("img"))
imgs[23].src="./animations/start.png"
imgs.push(document.createElement("img"))
imgs[24].src="./animations/options.png"
imgs.push(document.createElement("img"))
imgs[25].src="./animations/score.png"
imgs.push(document.createElement("img"))
imgs[26].src="./animations/pause.png"
imgs.push(document.createElement("img"))
imgs[27].src="./animations/death.png"
imgs.push(document.createElement("img"))
imgs[28].src="./animations/startp.png"
imgs.push(document.createElement("img"))
imgs[29].src="./animations/optionsp.png"
imgs.push(document.createElement("img"))
imgs[30].src="./animations/startSel.png"
imgs.push(document.createElement("img"))
imgs[31].src="./animations/optionsSel.png"
imgs.push(document.createElement("img"))
imgs[32].src="./animations/retry.png"
imgs.push(document.createElement("img"))
imgs[33].src="./animations/retryp.png"
imgs.push(document.createElement("img"))
imgs[34].src="./animations/retrySel.png"
imgs.push(document.createElement("img"))
imgs[35].src="./animations/exit.png"
imgs.push(document.createElement("img"))
imgs[36].src="./animations/exitp.png"
imgs.push(document.createElement("img"))
imgs[37].src="./animations/exitSel.png"
imgs.push(document.createElement("img"))
imgs[38].src="./animations/cero.png"
imgs.push(document.createElement("img"))
imgs[39].src="./animations/one.png"
imgs.push(document.createElement("img"))
imgs[40].src="./animations/two.png"
imgs.push(document.createElement("img"))
imgs[41].src="./animations/three.png"
imgs.push(document.createElement("img"))
imgs[42].src="./animations/four.png"
imgs.push(document.createElement("img"))
imgs[43].src="./animations/five.png"
imgs.push(document.createElement("img"))
imgs[44].src="./animations/six.png"
imgs.push(document.createElement("img"))
imgs[45].src="./animations/seven.png"
imgs.push(document.createElement("img"))
imgs[46].src="./animations/eight.png"
imgs.push(document.createElement("img"))
imgs[47].src="./animations/nine.png"
imgs.push(document.createElement("img"))
imgs[48].src="./animations/pauseb.png"
imgs.push(document.createElement("img"))
imgs[49].src="./animations/tutorial.png"
imgs.push(document.createElement("img"))
imgs[50].src="./animations/tutorialp.png"
imgs.push(document.createElement("img"))
imgs[51].src="./animations/tutorialSel.png"
imgs.push(document.createElement("img"))
imgs[52].src="./animations/plus.png"
imgs.push(document.createElement("img"))
imgs[53].src="./animations/plusp.png"
imgs.push(document.createElement("img"))
imgs[54].src="./animations/plusSel.png"
imgs.push(document.createElement("img"))
imgs[55].src="./animations/minus.png"
imgs.push(document.createElement("img"))
imgs[56].src="./animations/minusp.png"
imgs.push(document.createElement("img"))
imgs[57].src="./animations/minusSel.png"
imgs.push(document.createElement("img"))
imgs[58].src="./animations/sound.png"
imgs.push(document.createElement("img"))
imgs[59].src="./animations/tutorialKey.png"
imgs.push(document.createElement("img"))
imgs[60].src="./animations/tutorialtouch.png"


var audios = new Array()
audios.push(document.createElement("audio"))
audios[0].src="./sounds/hit.wav"
audios[0].volume=0.5
audios[0].id="hit"
audios.push(document.createElement("audio"))
audios[1].src="./sounds/explosion.wav"
audios.push(document.createElement("audio"))
audios[2].src="./sounds/hitHurt.wav"
audios.push(document.createElement("audio"))
audios[3].src="./sounds/powerUp.wav"


for(let i=0; i<imgs.length; i++)
{
	imgs[i].onload=() =>
	{
		imgload++
		console.log("LOAD: "+imgload+"/"+imgs.length)
		if(imgload == imgs.length)
		{
			console.log("START")
			for(let j=0; j<audios.length; j++)
			{
				audios[j].load()
			}
			background()
			start()


		}
	}
}






var earthLife=20
var orda=2
var juego=false
var pause=false
var option=false
var tutoria=false

var sw=screen.width
//var sw=600
var sh=screen.height

//var sh=600
var cw =sw-30 // Anchura del canvas [PREDETERMINADO]
var ch =sh-60 // Altura del canvas [PREDETERMINADO]
if(cw > ch)
	cw=ch
else
	ch=cw
var us=ch/1000
canvas.width=cw // Anchura del canvas [PREDETERMINADO]
canvas.height=ch // Altura del canvas [PREDETERMINADO]
canvasb.width=cw // Anchura del canvas [PREDETERMINADO]
canvasb.height=ch // Altura del canvas [PREDETERMINADO]

class heal
{
	constructor(pos, scale)
	{
		this.pos=pos
		this.vel={
			x:0,
			y:0
		}
		this.scale=scale
		this.frame=0
		this.imgp=''
		this.life=1
	}
	draw()
	{
		var img = imgs[6]
		if(this.frame <= 15)
		{
			c.drawImage(img,0 , 0, 1080, 1080,  this.pos.x-this.scale.x, this.pos.y-this.scale.y, this.scale.x2, this.scale.y2)
			if(!pause && (earthLife > 0 && p1.life > 0))
			this.frame++
		}
		else if(this.frame > 15 && this.frame <= 30)
		{
			c.drawImage(img,1080 , 0, 1080, 1080,  this.pos.x-this.scale.x, this.pos.y-this.scale.y, this.scale.x2, this.scale.y2)
			if(!pause && earthLife > 0 && p1.life > 0)
			this.frame++
		}
		else if(this.frame > 30 && this.frame <= 45)
		{
			c.drawImage(img, 1080*2, 0, 1080, 1080,  this.pos.x-this.scale.x, this.pos.y-this.scale.y, this.scale.x2, this.scale.y2)
			if(!pause && earthLife > 0 && p1.life > 0)
			this.frame++
		}
		else if(this.frame > 45 && this.frame <= 60)
		{
			c.drawImage(img, 1080*3, 0, 1080, 1080,  this.pos.x-this.scale.x, this.pos.y-this.scale.y, this.scale.x2, this.scale.y2)
			if(!pause && earthLife > 0 && p1.life > 0)
			this.frame++
		}
		else
		{
			c.drawImage(img,0 , 0, 1080, 1080,  this.pos.x-this.scale.x, this.pos.y-this.scale.y, this.scale.x2, this.scale.y2)
			this.frame=0
		}
		console.log("HEAL: draw")
	}
	fisicas()
	{
		this.vel.y=2*us

		this.pos.x+=this.vel.x
		this.pos.y+=this.vel.y
	}
}
class enemy
{
	constructor(pos, scale, vel, color)
	{
		this.pos=pos
		this.scale=scale
		this.life=2
		this.tang=true
		this.hit=false
		this.frame=0
		this.imgp=''
		this.vel=vel
		this.atack=false
		this.atackn=0
		this.death=false
		this.color=color
	}
	draw()
	{
		if(this.life > 0)
		{
			var img = imgs[8]
			if(this.color == 0)
			{
				if(this.life < 2)
				{
					img = imgs[9]
					c.drawImage(img, this.pos.x-this.scale.x, this.pos.y-this.scale.y, this.scale.x2, this.scale.y2)
				}
				else if(this.atack)
				{
					img.src="./animations/playeratack.png"
					c.drawImage(img, this.pos.x-this.scale.x, this.pos.y-this.scale.y, this.scale.x2, this.scale.y2)
				}
				else
				{
					img = imgs[8]
					c.drawImage(img, this.pos.x-this.scale.x, this.pos.y-this.scale.y, this.scale.x2, this.scale.y2)
				}
			}
			else if(this.color == 1)
			{
				if(this.life < 2)
				{
					img = imgs[19]
					c.drawImage(img, this.pos.x-this.scale.x, this.pos.y-this.scale.y, this.scale.x2, this.scale.y2)
				}
				else if(this.atack)
				{
					img.src="./animations/playeratack.png"
					c.drawImage(img, this.pos.x-this.scale.x, this.pos.y-this.scale.y, this.scale.x2, this.scale.y2)
				}
				else
				{
					img = imgs[18]
					c.drawImage(img, this.pos.x-this.scale.x, this.pos.y-this.scale.y, this.scale.x2, this.scale.y2)
				}
			}
			else
			{
				if(this.life < 2)
				{
					img = imgs[21]
					c.drawImage(img, this.pos.x-this.scale.x, this.pos.y-this.scale.y, this.scale.x2, this.scale.y2)
				}
				else if(this.atack)
				{
					img.src="./animations/playeratack.png"
					c.drawImage(img, this.pos.x-this.scale.x, this.pos.y-this.scale.y, this.scale.x2, this.scale.y2)
				}
				else
				{
					img = imgs[20]
					c.drawImage(img, this.pos.x-this.scale.x, this.pos.y-this.scale.y, this.scale.x2, this.scale.y2)
				}

			}
		}
		else
		{	
			var img = imgs[10]
			c.drawImage(img, this.pos.x-this.scale.x, this.pos.y-this.scale.y, this.scale.x2, this.scale.y2)
			setTimeout(() => this.death=true, 150);
		}
	}
	fisicas()
	{
		this.pos.x+=this.vel.x
		this.pos.y+=this.vel.y



	}
}
class wave
{
	constructor(pos, scale, vel, atackn)
	{
		this.pos=pos
		this.scale=scale
		this.life=10
		this.tang=true
		this.hit=false
		this.frame=0
		this.imgp=''
		this.vel=vel
		this.atackn=atackn
		this.death=false
	}
	draw()
	{
		
		if(this.atackn)
			var img = imgs[13]
		else
			var img = imgs[14]
		c.drawImage(img, this.pos.x-this.scale.x, this.pos.y-this.scale.y, this.scale.x2, this.scale.y2)

	}
	fisicas()
	{


		this.pos.x+=this.vel.x
		this.pos.y+=this.vel.y
		if(this.life <= 0 || !p1.atack || Math.max(p1.pos.x ,this.pos.x)-Math.min(p1.pos.x ,this.pos.x) >= (this.pos.x+this.pos.x2)/2)
		{
			wavesSet.delete(this)
		}
		this.life--



	}
}
class player
{
	constructor(pos,scale)
	{
		this.pos=pos
		this.scale=scale
		this.life=6
		this.tang=true
		this.hit=false
		this.kill=1
		this.frame=0
		this.imgp=''
		this.vel={
			x:0,
			y:0
		}
		this.keys={
			w: false,
			s: false,
			a: false,
			d: false,
			u: false,
			p: false
		}
		this.atack=false
		this.atackn=0
		this.healing=false
	}
	draw()
	{
		var img=imgs[0]
		if(this.healing)
		{
			this.frame=0
			img=imgs[17]
			c.drawImage(img, this.pos.x-this.scale.x, this.pos.y-this.scale.y, this.scale.x2, this.scale.y2)
		}
		else if(this.atack)
		{
			if(!pause)
				this.frame++
				if(this.imgp !== imgs[1].src && this.imgp !== imgs[2].src && this.imgp !== imgs[15].src && this.imgp !== imgs[16].src)
				{
					if(!pause)
					this.frame=0
				}
					if(this.atackn)
					{
						if(this.frame <=2)
						img=imgs[1]
						else
						img=imgs[15]
					}
					else
					{
						if(this.frame <=2)
						img=imgs[2]
						else
						img=imgs[16]

					}
			c.drawImage(img, this.pos.x-this.scale.x, this.pos.y-this.scale.y, this.scale.x2, this.scale.y2)
		}
		else
		{
			img=imgs[0]
			c.drawImage(img, this.pos.x-this.scale.x, this.pos.y-this.scale.y, this.scale.x2, this.scale.y2)
		}
		if(this.hit)
		{

			this.frame=0


			c.drawImage(imgs[3], this.pos.x-this.scale.x, this.pos.y-this.scale.y, this.scale.x2, this.scale.y2)

		}
		this.imgp=img.src
	}
	controles(key, keydown)
	{
		switch(key)
		{
			case 'a':
				this.keys.a=keydown
				break;

			case 'd':
				this.keys.d=keydown
				break;
			case 'w':
				this.keys.w=keydown
				break;
			case 's':
				this.keys.s=keydown
				break;
			case 'u':
			case 'e':
			case 'lClick':
				this.keys.u=keydown
				break;
			case '.':
				this.life=0
				break;
			case 'p':
			case 'Escape':
			case ' ':
				this.keys.p=keydown
				break;
		}

		if(this.keys.a && this.keys.w)
		{
			if(this.vel.x >= -20*us)
				this.vel.x=-10*us
			if(this.vel.y >= -20*us)
				this.vel.y=-10*us
		}
		else if( this.keys.a && this.keys.s)
		{
			if(this.vel.x >= -20*us)
				this.vel.x=-10*us
			if(this.vel.y <= 20*us)
				this.vel.y=10*us
		}
		else if( this.keys.d && this.keys.w)
		{
			if(this.vel.x <= 20*us)
				this.vel.x=10*us
			if(this.vel.y >= -20*us)
				this.vel.y=-10*us
		}
		else if( this.keys.d && this.keys.s)
		{
			if(this.vel.x <= 20*us)
				this.vel.x=10*us
			if(this.vel.y <= 20*us)
				this.vel.y=10*us
		}
		else
		{
			if(this.keys.a)
			{
				if(this.vel.x >= -20*us)
					this.vel.x=-14.4*us
			}
			else if(this.keys.d)
			{
				if(this.vel.x <= 20*us)
					this.vel.x=14.4*us
			}
			else
				this.vel.x=0

			if(this.keys.w)
			{
				if(this.vel.y >= -20*us)
					this.vel.y=-14.4*us
			}
			else if(this.keys.s)
			{
				if(this.vel.y <= 20*us)
					this.vel.y=14.4*us
			}
			else
				this.vel.y=0
		}

		if(this.keys.u && !this.atack)
		{
			let audio=document.createElement("audio")
			audio.src=audios[0].src
			audio.volume=audios[0].volume
			audio.play()
			this.atack=true
			this.atackn=!this.atackn
			setTimeout(() => this.atack=false, 150)


			wavesSet.add(new wave(
				{
					x:this.pos.x,
					y:this.pos.y+5*us,
					x2:this.pos.x2,
					y2:this.pos.y2
				},
				{
					x:this.scale.x,
					y:this.scale.y,
					x2:this.scale.x2,
					y2:this.scale.y2
				},
				{
					x:0,
					y: -15*us
				},
				this.atackn

			))

		}
		if(this.keys.p)
		{
			pause=!pause
			this.keys.w=false
			this.keys.s=false
			this.keys.a=false
			this.keys.d=false
			this.keys.u=false
			this.keys.p=false
			if(!pause)
			{
				//audios[0].volume=0.5
				afr = true
				cicle()
				this.keys.p = false
			}
			else
			{
				pausing()
			}
			console.log(pause)
		}



	}
	update()
	{
		console.log("P1 Vel: "+this.vel.x+", "+this.vel.y)
		if(this.pos.x+this.vel.x >= 0 && this.pos.y+this.vel.y >= 0 && this.pos.x+this.pos.x2+this.vel.x <= cw && this.pos.y+this.pos.y2+this.vel.y <= ch)
		{
			this.pos.x+=this.vel.x
			this.pos.y+=this.vel.y
		}
	}
}
var p1 = new player(
	{
		x:cw/2,
		y:ch-100*us,
		x2:64*us,
		y2:32*us
	},
	{
		x:(64*3-64)/2*us,
		y:((64*3-64)/2+32)*us,
		x2:64*3*us,
		y2:64*3*us,
	}
)

var enemigosSet = new Set()
var healsSet = new Set()
var wavesSet = new Set()

function heals()
{
	healsSet.add(new heal(
		{
			x:((Math.random()*(cw-64*us))+0),
			y:10*us,
			x2:48*us,
			y2:56*us
		},
		{
			x:(64*3-64+16)/2*us,
			y:((64*3-64*3+4)/2+32)*us,
			x2:64*3*us,
			y2:64*3*us,
		}))
}

function enemigos()
{
	var ne = new enemy(
		{
			x:((Math.random()*(cw-64*us))+0),
			y:10*us,
			x2:64*us,
			y2:64*us
		},
		{
			x:((64*3-64)/2)*us,
			y:((64*3-64)-32)/2*us,
			x2:64*3*us,
			y2:64*3*us,
		},
		{
			x:0,
			y:Math.floor(Math.random()*3+2)*us
		},

	(Math.floor(Math.random()*3)+0))
	if(enemigosSet.size == 0)
		enemigosSet.add(ne)
	else
		enemigosSet.forEach(
			(value) =>
			{
				if(!((linecol(ne.pos.y, ne.pos.y+ne.pos.y2, value.pos.y+value.pos.y2, value.pos.y) && linecol(ne.pos.x, ne.pos.x+ne.pos.x2, value.pos.x+value.pos.x2, value.pos.x)) ||( linecol(ne.pos.y+ne.pos.y2, ne.pos.y, value.pos.y, value.pos.y+value.pos.y2) && linecol(ne.pos.x+ne.pos.x2, ne.pos.x, value.pos.x, value.pos.x+value.pos.x2))))
				{
					enemigosSet.add(ne)
				}
			})

}
function enemigostrio()
{
	var ne1 = new enemy(
		{
			x:((Math.random()*(cw-64*3*us))+64*us),
			y:10*us,
			x2:64*us,
			y2:64*us
		},
		{
			x:((64*3-64)/2)*us,
			y:((64*3-64)-32)/2*us,
			x2:64*3*us,
			y2:64*3*us,
		},
		{
			x:0,
			y:Math.floor(Math.random()*3+2)*us
		},

	(Math.floor(Math.random()*3)+0))
	var ne2 = new enemy(
		{
			x:ne1.pos.x+ne1.pos.x2,
			y:ne1.pos.y-ne1.pos.y2,
			x2:64*us,
			y2:64*us
		},
		{
			x:((64*3-64)/2)*us,
			y:((64*3-64)-32)/2*us,
			x2:64*3*us,
			y2:64*3*us,
		},
	ne1.vel, ne1.color)
	var ne3 = new enemy(
		{
			x:ne1.pos.x-ne1.pos.x2,
			y:ne1.pos.y-ne1.pos.y2,
			x2:64*us,
			y2:64*us
		},
		{
			x:((64*3-64)/2)*us,
			y:((64*3-64)-32)/2*us,
			x2:64*3*us,
			y2:64*3*us,
		},
ne1.vel, ne1.color)

	enemigosSet.add(ne1)
	enemigosSet.add(ne2)
	enemigosSet.add(ne3)

	console.log("TRIPLE")
}

function enemigoscuarteto()
{
	var ne1 = new enemy(
		{
			x:((Math.random()*(cw-64*3*us))+64*us),
			y:10*us,
			x2:64*us,
			y2:64*us
		},
		{
			x:((64*3-64)/2)*us,
			y:((64*3-64)-32)/2*us,
			x2:64*3*us,
			y2:64*3*us,
		},
		{
			x:0,
			y:Math.floor(Math.random()*3+2)*us
		},

	(Math.floor(Math.random()*3)+0))
	var ne2 = new enemy(
		{
			x:ne1.pos.x,
			y:ne1.pos.y-ne1.pos.y2,
			x2:64*us,
			y2:64*us
		},
		{
			x:((64*3-64)/2)*us,
			y:((64*3-64)-32)/2*us,
			x2:64*3*us,
			y2:64*3*us,
		},
	ne1.vel, ne1.color)
	var ne3 = new enemy(
		{
			x:ne1.pos.x-ne1.pos.x2,
			y:ne1.pos.y-ne1.pos.y2,
			x2:64*us,
			y2:64*us
		},
		{
			x:((64*3-64)/2)*us,
			y:((64*3-64)-32)/2*us,
			x2:64*3*us,
			y2:64*3*us,
		},
ne1.vel, ne1.color)
	var ne4 = new enemy(
		{
			x:ne1.pos.x-ne1.pos.x2,
			y:ne1.pos.y,
			x2:64*us,
			y2:64*us
		},
		{
			x:((64*3-64)/2)*us,
			y:((64*3-64)-32)/2*us,
			x2:64*3*us,
			y2:64*3*us,
		},
ne1.vel, ne1.color)

	enemigosSet.add(ne1)
	enemigosSet.add(ne2)
	enemigosSet.add(ne4)
	enemigosSet.add(ne3)

	console.log("TRIPLE")
}
function enemigosquinteto()
{
	var ne1 = new enemy(
		{
			x:((Math.random()*(cw-64*3*us))+64*us),
			y:10*us,
			x2:64*us,
			y2:64*us
		},
		{
			x:((64*3-64)/2)*us,
			y:((64*3-64)-32)/2*us,
			x2:64*3*us,
			y2:64*3*us,
		},
		{
			x:0,
			y:Math.floor(Math.random()*3+2)*us
		},

	(Math.floor(Math.random()*3)+0))
	var ne2 = new enemy(
		{
			x:ne1.pos.x+ne1.pos.x2,
			y:ne1.pos.y-ne1.pos.y2,
			x2:64*us,
			y2:64*us
		},
		{
			x:((64*3-64)/2)*us,
			y:((64*3-64)-32)/2*us,
			x2:64*3*us,
			y2:64*3*us,
		},
	ne1.vel, ne1.color)
	var ne3 = new enemy(
		{
			x:ne1.pos.x-ne1.pos.x2,
			y:ne1.pos.y-ne1.pos.y2,
			x2:64*us,
			y2:64*us
		},
		{
			x:((64*3-64)/2)*us,
			y:((64*3-64)-32)/2*us,
			x2:64*3*us,
			y2:64*3*us,
		},
ne1.vel, ne1.color)
       var ne4 = new enemy(
		{
			x:ne2.pos.x+ne2.pos.x2,
			y:ne2.pos.y-ne2.pos.y2,
			x2:64*us,
			y2:64*us
		},
		{
			x:((64*3-64)/2)*us,
			y:((64*3-64)-32)/2*us,
			x2:64*3*us,
			y2:64*3*us,
		},
	ne1.vel, ne1.color)
	var ne5 = new enemy(
		{
			x:ne3.pos.x-ne3.pos.x2,
			y:ne3.pos.y-ne3.pos.y2,
			x2:64*us,
			y2:64*us
		},
		{
			x:((64*3-64)/2)*us,
			y:((64*3-64)-32)/2*us,
			x2:64*3*us,
			y2:64*3*us,
		},
ne1.vel, ne1.color)



	enemigosSet.add(ne1)
	enemigosSet.add(ne2)
	enemigosSet.add(ne3)
	enemigosSet.add(ne4)
	enemigosSet.add(ne5)

}
function middle()
{
	enemigosSet.forEach((value) => value.draw() )
	healsSet.forEach((value) => value.draw() )
	wavesSet.forEach((value) => value.draw() )
	p1.draw()
}

function death()
{
	window.cancelAnimationFrame(af)
	pdellisteners()
	console.log("vida: "+p1.life)

	var posicion=0
	function keyup (key) 
	{
		if(key.key == ' ' || key.key == 'u' || key.key == 'e')
		{
			let audio=document.createElement("audio")
			audio.src=audios[0].src
			audio.volume=audios[0].volume
			audio.play()
			if(posicion == 0)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				middle()
				interfaz()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[27]
				c.drawImage(img, cw/2-(cw/2)/2, 0, cw/2, ch/2)
				img=imgs[25]
				c.drawImage(img, 100*us, ch/(3), cw/(3), ch/(3))
				scoredraw(1, 100*us, ch/(3), cw/(3), ch/(3))
				img=imgs[33]
				c.drawImage(img, 100*us, ch-300*us, 300*us, 300*us)
				img=imgs[35]
				c.drawImage(img, cw-400*us, ch-300*us, 300*us, 300*us)
				window.removeEventListener("keydown",keyup)
				window.removeEventListener("click",mousedown)
				window.removeEventListener("mousemove",mousemove)
				console.log("start")
				setTimeout(() => restart(), 500)
			}
			else if(posicion == 1)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				middle()
				interfaz()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[27]
				c.drawImage(img, cw/2-(cw/2)/2, 0, cw/2, ch/2)
				img=imgs[25]
				c.drawImage(img, 100*us, ch/(3), cw/(3), ch/(3))
				scoredraw(1, 100*us, ch/(3), cw/(3), ch/(3))
				img=imgs[32]
				c.drawImage(img, 100*us, ch-300*us, 300*us, 300*us)
				img=imgs[36]
				c.drawImage(img, cw-400*us, ch-300*us, 300*us, 300*us)
				console.log("OPCIONES")
				window.removeEventListener("keydown",keyup)
				window.removeEventListener("click",mousedown)
				window.removeEventListener("mousemove",mousemove)
				setTimeout(() => location.reload() , 500)
			}
		}
		else if((key.key == 's' || key.key == 'd'))
		{
			let audio=document.createElement("audio")
			audio.src=audios[3].src
			audio.volume=audios[3].volume/4
			audio.play()
			if(posicion < 1)
				posicion++
			else
				posicion=0
			if(posicion == 0)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				middle()
				interfaz()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[27]
				c.drawImage(img, cw/2-(cw/2)/2, 0, cw/2, ch/2)
				img=imgs[25]
				c.drawImage(img, 100*us, ch/(3), cw/(3), ch/(3))
				scoredraw(1, 100*us, ch/(3), cw/(3), ch/(3))
				img=imgs[34]
				c.drawImage(img, 100*us, ch-300*us, 300*us, 300*us)
				img=imgs[35]
				c.drawImage(img, cw-400*us, ch-300*us, 300*us, 300*us)
			}
			else if(posicion == 1)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				middle()
				interfaz()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[27]
				c.drawImage(img, cw/2-(cw/2)/2, 0, cw/2, ch/2)
				img=imgs[25]
				c.drawImage(img, 100*us, ch/(3), cw/(3), ch/(3))
				scoredraw(1, 100*us, ch/(3), cw/(3), ch/(3))
				img=imgs[32]
				c.drawImage(img, 100*us, ch-300*us, 300*us, 300*us)
				img=imgs[37]
				c.drawImage(img, cw-400*us, ch-300*us, 300*us, 300*us)
			}
		}
		else if((key.key == 'w' || key.key == 'a'))
		{
			let audio=document.createElement("audio")
			audio.src=audios[3].src
			audio.volume=audios[3].volume/4
			audio.play()
			if(posicion > 0)
				posicion--
			else
				posicion=1
			if(posicion == 0)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				middle()
				interfaz()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[27]
				c.drawImage(img, cw/2-(cw/2)/2, 0, cw/2, ch/2)
				img=imgs[25]
				c.drawImage(img, 100*us, ch/(3), cw/(3), ch/(3))
				scoredraw(1, 100*us, ch/(3), cw/(3), ch/(3))
				img=imgs[34]
				c.drawImage(img, 100*us, ch-300*us, 300*us, 300*us)
				img=imgs[35]
				c.drawImage(img, cw-400*us, ch-300*us, 300*us, 300*us)
			}
			else if(posicion == 1)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				middle()
				interfaz()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[27]
				c.drawImage(img, cw/2-(cw/2)/2, 0, cw/2, ch/2)
				img=imgs[25]
				c.drawImage(img, 100*us, ch/(3), cw/(3), ch/(3))
				scoredraw(1, 100*us, ch/(3), cw/(3), ch/(3))
				img=imgs[32]
				c.drawImage(img, 100*us, ch-300*us, 300*us, 300*us)
				img=imgs[37]
				c.drawImage(img, cw-400*us, ch-300*us, 300*us, 300*us)
			}
		}
	}


	function mousedown (event)
	{
		console.log(event)
		if(event.clientX-canvas.offsetLeft >=100*us && event.clientX-canvas.offsetLeft <=100*us+300*us && event.clientY-canvas.offsetTop >=ch-200*us && event.clientY-canvas.offsetTop <= ch-200*us+110*us)
		{
			let audio=document.createElement("audio")
			audio.src=audios[0].src
			audio.volume=audios[0].volume
			audio.play()
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				middle()
				interfaz()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[27]
				c.drawImage(img, cw/2-(cw/2)/2, 0, cw/2, ch/2)
				img=imgs[25]
				c.drawImage(img, 100*us, ch/(3), cw/(3), ch/(3))
				scoredraw(1, 100*us, ch/(3), cw/(3), ch/(3))
				img=imgs[33]
				c.drawImage(img, 100*us, ch-300*us, 300*us, 300*us)
				img=imgs[35]
				c.drawImage(img, cw-400*us, ch-300*us, 300*us, 300*us)
				window.removeEventListener("keydown",keyup)
				window.removeEventListener("click",mousedown)
				window.removeEventListener("mousemove",mousemove)
				console.log("start")
				setTimeout(() => restart(), 500)
		}
		else if(event.clientX-canvas.offsetLeft >=cw-400*us && event.clientX-canvas.offsetLeft <=cw-400*us+300*us && event.clientY-canvas.offsetTop >=ch-200*us && event.clientY-canvas.offsetTop <= ch-200*us+110*us)
		{
			let audio=document.createElement("audio")
			audio.src=audios[0].src
			audio.volume=audios[0].volume
			audio.play()
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				middle()
				interfaz()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[27]
				c.drawImage(img, cw/2-(cw/2)/2, 0, cw/2, ch/2)
				img=imgs[25]
				c.drawImage(img, 100*us, ch/(3), cw/(3), ch/(3))
				scoredraw(1, 100*us, ch/(3), cw/(3), ch/(3))
				img=imgs[32]
				c.drawImage(img, 100*us, ch-300*us, 300*us, 300*us)
				img=imgs[36]
				c.drawImage(img, cw-400*us, ch-300*us, 300*us, 300*us)
				console.log("OPCIONES")
				window.removeEventListener("keydown",keyup)
				window.removeEventListener("click",mousedown)
				window.removeEventListener("mousemove",mousemove)
				setTimeout(() => location.reload() , 500)
		}

	}
	function mousemove(event)
	{
		console.log(event)
		if(event.clientX-canvas.offsetLeft >=100*us && event.clientX-canvas.offsetLeft <=100*us+300*us && event.clientY-canvas.offsetTop >=ch-200*us && event.clientY-canvas.offsetTop <= ch-200*us+110*us)
		{
				posicion=0
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				middle()
				interfaz()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[27]
				c.drawImage(img, cw/2-(cw/2)/2, 0, cw/2, ch/2)
				img=imgs[25]
				c.drawImage(img, 100*us, ch/(3), cw/(3), ch/(3))
				scoredraw(1, 100*us, ch/(3), cw/(3), ch/(3))
				img=imgs[34]
				c.drawImage(img, 100*us, ch-300*us, 300*us, 300*us)
				img=imgs[35]
				c.drawImage(img, cw-400*us, ch-300*us, 300*us, 300*us)
		}
		else if(event.clientX-canvas.offsetLeft >=cw-400*us && event.clientX-canvas.offsetLeft <=cw-400*us+300*us && event.clientY-canvas.offsetTop >=ch-200*us && event.clientY-canvas.offsetTop <= ch-200*us+110*us)
		{
				posicion=1
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				middle()
				interfaz()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[27]
				c.drawImage(img, cw/2-(cw/2)/2, 0, cw/2, ch/2)
				img=imgs[25]
				c.drawImage(img, 100*us, ch/(3), cw/(3), ch/(3))
				scoredraw(1, 100*us, ch/(3), cw/(3), ch/(3))
				img=imgs[32]
				c.drawImage(img, 100*us, ch-300*us, 300*us, 300*us)
				img=imgs[37]
				c.drawImage(img, cw-400*us, ch-300*us, 300*us, 300*us)
		}
	}
	setTimeout(() => {
		window.addEventListener("keydown",keyup)
		window.addEventListener("click",mousedown)
		window.addEventListener("mousemove",mousemove)
	}, 500)

	let img = imgs[4]
	c.drawImage(img, 0, 0, cw, ch)
	img=imgs[27]
	c.drawImage(img, cw/2-(cw/2)/2, 0, cw/2, ch/2)
	img=imgs[25]
	c.drawImage(img, 100*us, ch/(3), cw/(3), ch/(3))
	scoredraw(1, 100*us, ch/(3), cw/(3), ch/(3))
	img=imgs[34]
	c.drawImage(img, 100*us, ch-300*us, 300*us, 300*us)
	img=imgs[35]
	c.drawImage(img, cw-400*us, ch-300*us, 300*us, 300*us)

}
function pausing()
{
	//audios[0].volume=0
	window.cancelAnimationFrame(af)
	pdellisteners()



	var posicion=0
	function keyup (key) 
	{
		if(key.key == ' ' || key.key == 'u' || key.key == 'e')
		{
			let audio=document.createElement("audio")
			audio.src=audios[0].src
			audio.volume=audios[0].volume
			audio.play()
			if(posicion == 0)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				middle()
				interfaz()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[26]
				c.drawImage(img, cw/2-(cw/2)/2, -100*us, cw/2, ch/2)
				img=imgs[25]
				c.drawImage(img, 100*us, 200*us, 250*us, 250*us)
				scoredraw(1, 100*us, 200*us, 250*us, 250*us)
				img=imgs[28]
				c.drawImage(img, cw-250*us, ch-500*us, 200*us, 200*us)
				img=imgs[24]
				c.drawImage(img, cw-200*us*2+20*us, ch-400*us, 200*us*2, 200*us)
				img=imgs[32]
				c.drawImage(img, cw-250*us, ch-300*us, 200*us, 200*us)
				img=imgs[35]
				c.drawImage(img, cw-250*us, ch-200*us, 200*us, 200*us)
				window.removeEventListener("keydown",keyup)
				window.removeEventListener("click",mousedown)
				window.removeEventListener("mousemove",mousemove)
				console.log("start")
				setTimeout(() => p1.controles("p", true), 500)
			}
			else if(posicion == 1)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				middle()
				interfaz()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[26]
				c.drawImage(img, cw/2-(cw/2)/2, -100*us, cw/2, ch/2)
				img=imgs[25]
				c.drawImage(img, 100*us, 200*us, 250*us, 250*us)
				scoredraw(1, 100*us, 200*us, 250*us, 250*us)
				img=imgs[23]
				c.drawImage(img, cw-250*us, ch-500*us, 200*us, 200*us)
				img=imgs[29]
				c.drawImage(img, cw-200*us*2+20*us, ch-400*us, 200*us*2, 200*us)
				img=imgs[32]
				c.drawImage(img, cw-250*us, ch-300*us, 200*us, 200*us)
				img=imgs[35]
				c.drawImage(img, cw-250*us, ch-200*us, 200*us, 200*us)
				console.log("OPCIONES")
				window.removeEventListener("keydown",keyup)
				window.removeEventListener("click",mousedown)
				window.removeEventListener("mousemove",mousemove)
				option=true
				setTimeout(() => options(0, "pause"), 500)
			}
			else if(posicion == 2)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				middle()
				interfaz()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[26]
				c.drawImage(img, cw/2-(cw/2)/2, -100*us, cw/2, ch/2)
				img=imgs[25]
				c.drawImage(img, 100*us, 200*us, 250*us, 250*us)
				scoredraw(1, 100*us, 200*us, 250*us, 250*us)
				img=imgs[23]
				c.drawImage(img, cw-250*us, ch-500*us, 200*us, 200*us)
				img=imgs[24]
				c.drawImage(img, cw-200*us*2+20*us, ch-400*us, 200*us*2, 200*us)
				img=imgs[33]
				c.drawImage(img, cw-250*us, ch-300*us, 200*us, 200*us)
				img=imgs[35]
				c.drawImage(img, cw-250*us, ch-200*us, 200*us, 200*us)
				console.log("OPCIONES")
				window.removeEventListener("keydown",keyup)
				window.removeEventListener("click",mousedown)
				window.removeEventListener("mousemove",mousemove)
				setTimeout(() => restart(), 500)
			}
			else if(posicion == 3)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				middle()
				interfaz()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[26]
				c.drawImage(img, cw/2-(cw/2)/2, -100*us, cw/2, ch/2)
				img=imgs[25]
				c.drawImage(img, 100*us, 200*us, 250*us, 250*us)
				scoredraw(1, 100*us, 200*us, 250*us, 250*us)
				img=imgs[23]
				c.drawImage(img, cw-250*us, ch-500*us, 200*us, 200*us)
				img=imgs[24]
				c.drawImage(img, cw-200*us*2+20*us, ch-400*us, 200*us*2, 200*us)
				img=imgs[32]
				c.drawImage(img, cw-250*us, ch-300*us, 200*us, 200*us)
				img=imgs[36]
				c.drawImage(img, cw-250*us, ch-200*us, 200*us, 200*us)
				console.log("OPCIONES")
				window.removeEventListener("keydown",keyup)
				window.removeEventListener("click",mousedown)
				window.removeEventListener("mousemove",mousemove)
				setTimeout(() => location.reload() , 500)
			}
		}
		else if((key.key == 's' || key.key == 'd'))
		{
			let audio=document.createElement("audio")
			audio.src=audios[3].src
			audio.volume=audios[3].volume/4
			audio.play()
			if(posicion < 3)
				posicion++
			else
				posicion=0
			if(posicion == 0)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				middle()
				interfaz()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[26]
				c.drawImage(img, cw/2-(cw/2)/2, -100*us, cw/2, ch/2)
				img=imgs[25]
				c.drawImage(img, 100*us, 200*us, 250*us, 250*us)
				scoredraw(1, 100*us, 200*us, 250*us, 250*us)
				img=imgs[30]
				c.drawImage(img, cw-250*us, ch-500*us, 200*us, 200*us)
				img=imgs[24]
				c.drawImage(img, cw-200*us*2+20*us, ch-400*us, 200*us*2, 200*us)
				img=imgs[32]
				c.drawImage(img, cw-250*us, ch-300*us, 200*us, 200*us)
				img=imgs[35]
				c.drawImage(img, cw-250*us, ch-200*us, 200*us, 200*us)
			}
			else if(posicion == 1)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				middle()
				interfaz()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[26]
				c.drawImage(img, cw/2-(cw/2)/2, -100*us, cw/2, ch/2)
				img=imgs[25]
				c.drawImage(img, 100*us, 200*us, 250*us, 250*us)
				scoredraw(1, 100*us, 200*us, 250*us, 250*us)
				img=imgs[23]
				c.drawImage(img, cw-250*us, ch-500*us, 200*us, 200*us)
				img=imgs[31]
				c.drawImage(img, cw-200*us*2+20*us, ch-400*us, 200*us*2, 200*us)
				img=imgs[32]
				c.drawImage(img, cw-250*us, ch-300*us, 200*us, 200*us)
				img=imgs[35]
				c.drawImage(img, cw-250*us, ch-200*us, 200*us, 200*us)
			}
			else if(posicion == 2)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				middle()
				interfaz()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[26]
				c.drawImage(img, cw/2-(cw/2)/2, -100*us, cw/2, ch/2)
				img=imgs[25]
				c.drawImage(img, 100*us, 200*us, 250*us, 250*us)
				scoredraw(1, 100*us, 200*us, 250*us, 250*us)
				img=imgs[23]
				c.drawImage(img, cw-250*us, ch-500*us, 200*us, 200*us)
				img=imgs[24]
				c.drawImage(img, cw-200*us*2+20*us, ch-400*us, 200*us*2, 200*us)
				img=imgs[34]
				c.drawImage(img, cw-250*us, ch-300*us, 200*us, 200*us)
				img=imgs[35]
				c.drawImage(img, cw-250*us, ch-200*us, 200*us, 200*us)
			}
			else if(posicion == 3)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				middle()
				interfaz()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[26]
				c.drawImage(img, cw/2-(cw/2)/2, -100*us, cw/2, ch/2)
				img=imgs[25]
				c.drawImage(img, 100*us, 200*us, 250*us, 250*us)
				scoredraw(1, 100*us, 200*us, 250*us, 250*us)
				img=imgs[23]
				c.drawImage(img, cw-250*us, ch-500*us, 200*us, 200*us)
				img=imgs[24]
				c.drawImage(img, cw-200*us*2+20*us, ch-400*us, 200*us*2, 200*us)
				img=imgs[32]
				c.drawImage(img, cw-250*us, ch-300*us, 200*us, 200*us)
				img=imgs[37]
				c.drawImage(img, cw-250*us, ch-200*us, 200*us, 200*us)
			}
		}
		else if((key.key == 'w' || key.key == 'a'))
		{
			let audio=document.createElement("audio")
			audio.src=audios[3].src
			audio.volume=audios[3].volume/4
			audio.play()
			if(posicion > 0)
				posicion--
			else
				posicion=3
			if(posicion == 0)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				middle()
				interfaz()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[26]
				c.drawImage(img, cw/2-(cw/2)/2, -100*us, cw/2, ch/2)
				img=imgs[25]
				c.drawImage(img, 100*us, 200*us, 250*us, 250*us)
				scoredraw(1, 100*us, 200*us, 250*us, 250*us)
				img=imgs[30]
				c.drawImage(img, cw-250*us, ch-500*us, 200*us, 200*us)
				img=imgs[24]
				c.drawImage(img, cw-200*us*2+20*us, ch-400*us, 200*us*2, 200*us)
				img=imgs[32]
				c.drawImage(img, cw-250*us, ch-300*us, 200*us, 200*us)
				img=imgs[35]
				c.drawImage(img, cw-250*us, ch-200*us, 200*us, 200*us)
			}
			else if(posicion == 1)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				middle()
				interfaz()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[26]
				c.drawImage(img, cw/2-(cw/2)/2, -100*us, cw/2, ch/2)
				img=imgs[25]
				c.drawImage(img, 100*us, 200*us, 250*us, 250*us)
				scoredraw(1, 100*us, 200*us, 250*us, 250*us)
				img=imgs[23]
				c.drawImage(img, cw-250*us, ch-500*us, 200*us, 200*us)
				img=imgs[31]
				c.drawImage(img, cw-200*us*2+20*us, ch-400*us, 200*us*2, 200*us)
				img=imgs[32]
				c.drawImage(img, cw-250*us, ch-300*us, 200*us, 200*us)
				img=imgs[35]
				c.drawImage(img, cw-250*us, ch-200*us, 200*us, 200*us)
			}
			else if(posicion == 2)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				middle()
				interfaz()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[26]
				c.drawImage(img, cw/2-(cw/2)/2, -100*us, cw/2, ch/2)
				img=imgs[25]
				c.drawImage(img, 100*us, 200*us, 250*us, 250*us)
				scoredraw(1, 100*us, 200*us, 250*us, 250*us)
				img=imgs[23]
				c.drawImage(img, cw-250*us, ch-500*us, 200*us, 200*us)
				img=imgs[24]
				c.drawImage(img, cw-200*us*2+20*us, ch-400*us, 200*us*2, 200*us)
				img=imgs[34]
				c.drawImage(img, cw-250*us, ch-300*us, 200*us, 200*us)
				img=imgs[35]
				c.drawImage(img, cw-250*us, ch-200*us, 200*us, 200*us)
			}
			else if(posicion == 3)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				middle()
				interfaz()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[26]
				c.drawImage(img, cw/2-(cw/2)/2, -100*us, cw/2, ch/2)
				img=imgs[25]
				c.drawImage(img, 100*us, 200*us, 250*us, 250*us)
				scoredraw(1, 100*us, 200*us, 250*us, 250*us)
				img=imgs[23]
				c.drawImage(img, cw-250*us, ch-500*us, 200*us, 200*us)
				img=imgs[24]
				c.drawImage(img, cw-200*us*2+20*us, ch-400*us, 200*us*2, 200*us)
				img=imgs[32]
				c.drawImage(img, cw-250*us, ch-300*us, 200*us, 200*us)
				img=imgs[37]
				c.drawImage(img, cw-250*us, ch-200*us, 200*us, 200*us)
			}
		}
		else if(key.key == "p" )
		{
			audios[0].play()
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				middle()
				interfaz()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[26]
				c.drawImage(img, cw/2-(cw/2)/2, -100*us, cw/2, ch/2)
				img=imgs[25]
				c.drawImage(img, 100*us, 200*us, 250*us, 250*us)
				scoredraw(1, 100*us, 200*us, 250*us, 250*us)
				img=imgs[28]
				c.drawImage(img, cw-250*us, ch-500*us, 200*us, 200*us)
				img=imgs[24]
				c.drawImage(img, cw-200*us*2+20*us, ch-400*us, 200*us*2, 200*us)
				img=imgs[32]
				c.drawImage(img, cw-250*us, ch-300*us, 200*us, 200*us)
				img=imgs[35]
				c.drawImage(img, cw-250*us, ch-200*us, 200*us, 200*us)
				window.removeEventListener("keydown",keyup)
				window.removeEventListener("click",mousedown)
				window.removeEventListener("mousemove",mousemove)
				console.log("start")
				setTimeout(() => p1.controles("p", true), 500)
		}
	}
	function mousedown (event)
	{
		console.log(event)
		if(event.clientX-canvas.offsetLeft >=cw-250*us && event.clientX-canvas.offsetLeft <=cw-250*us+200*us && event.clientY-canvas.offsetTop >= ch-500*us+63*us && event.clientY-canvas.offsetTop <= ch-500*us+63*us+200*us-ch/2/4)
		{
			let audio=document.createElement("audio")
			audio.src=audios[0].src
			audio.volume=audios[0].volume
			audio.play()
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				middle()
				interfaz()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[26]
				c.drawImage(img, cw/2-(cw/2)/2, -100*us, cw/2, ch/2)
				img=imgs[25]
				c.drawImage(img, 100*us, 200*us, 250*us, 250*us)
				scoredraw(1, 100*us, 200*us, 250*us, 250*us)
				img=imgs[28]
				c.drawImage(img, cw-250*us, ch-500*us, 200*us, 200*us)
				img=imgs[24]
				c.drawImage(img, cw-200*us*2+20*us, ch-400*us, 200*us*2, 200*us)
				img=imgs[32]
				c.drawImage(img, cw-250*us, ch-300*us, 200*us, 200*us)
				img=imgs[35]
				c.drawImage(img, cw-250*us, ch-200*us, 200*us, 200*us)
				window.removeEventListener("keydown",keyup)
				window.removeEventListener("click",mousedown)
				window.removeEventListener("mousemove",mousemove)
				console.log("start")
				setTimeout(() => p1.controles("p", true), 500)
		}
		else if(event.clientX-canvas.offsetLeft >=cw-250*us && event.clientX-canvas.offsetLeft <=cw-250*us+200*us && event.clientY-canvas.offsetTop >= ch-500*us+ch/6 && event.clientY-canvas.offsetTop <=ch-500*us+ch/6+200*us-ch/2/4)
		{
			let audio=document.createElement("audio")
			audio.src=audios[0].src
			audio.volume=audios[0].volume
			audio.play()
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				middle()
				interfaz()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[26]
				c.drawImage(img, cw/2-(cw/2)/2, -100*us, cw/2, ch/2)
				img=imgs[25]
				c.drawImage(img, 100*us, 200*us, 250*us, 250*us)
				scoredraw(1, 100*us, 200*us, 250*us, 250*us)
				img=imgs[23]
				c.drawImage(img, cw-250*us, ch-500*us, 200*us, 200*us)
				img=imgs[29]
				c.drawImage(img, cw-200*us*2+20*us, ch-400*us, 200*us*2, 200*us)
				img=imgs[32]
				c.drawImage(img, cw-250*us, ch-300*us, 200*us, 200*us)
				img=imgs[35]
				c.drawImage(img, cw-250*us, ch-200*us, 200*us, 200*us)
				console.log("OPCIONES")
				window.removeEventListener("keydown",keyup)
				window.removeEventListener("click",mousedown)
				window.removeEventListener("mousemove",mousemove)
				option=true
				setTimeout(() => options(0, "pause"), 500)
		}
		else if(event.clientX-canvas.offsetLeft >=cw-250*us && event.clientX-canvas.offsetLeft <=cw-250*us+200*us && event.clientY-canvas.offsetTop >= ch-500*us+2*ch/2/4 && event.clientY-canvas.offsetTop <=ch-500*us+2*ch/2/4+200*us-ch/2/4)
		{
			let audio=document.createElement("audio")
			audio.src=audios[0].src
			audio.volume=audios[0].volume
			audio.play()
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				middle()
				interfaz()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[26]
				c.drawImage(img, cw/2-(cw/2)/2, -100*us, cw/2, ch/2)
				img=imgs[25]
				c.drawImage(img, 100*us, 200*us, 250*us, 250*us)
				scoredraw(1, 100*us, 200*us, 250*us, 250*us)
				img=imgs[23]
				c.drawImage(img, cw-250*us, ch-500*us, 200*us, 200*us)
				img=imgs[24]
				c.drawImage(img, cw-200*us*2+20*us, ch-400*us, 200*us*2, 200*us)
				img=imgs[33]
				c.drawImage(img, cw-250*us, ch-300*us, 200*us, 200*us)
				img=imgs[35]
				c.drawImage(img, cw-250*us, ch-200*us, 200*us, 200*us)
				console.log("OPCIONES")
				window.removeEventListener("keydown",keyup)
				window.removeEventListener("click",mousedown)
				window.removeEventListener("mousemove",mousemove)
				setTimeout(() => restart(), 500)
		}
		else if(event.clientX-canvas.offsetLeft >=cw-250*us && event.clientX-canvas.offsetLeft <=cw-250*us+200*us && event.clientY-canvas.offsetTop >= ch-500*us+3*ch/2/4 && event.clientY-canvas.offsetTop <=ch-500*us+3*ch/2/4+200*us-ch/2/4)
		{
			let audio=document.createElement("audio")
			audio.src=audios[0].src
			audio.volume=audios[0].volume
			audio.play()
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				middle()
				interfaz()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[26]
				c.drawImage(img, cw/2-(cw/2)/2, -100*us, cw/2, ch/2)
				img=imgs[25]
				c.drawImage(img, 100*us, 200*us, 250*us, 250*us)
				scoredraw(1, 100*us, 200*us, 250*us, 250*us)
				img=imgs[23]
				c.drawImage(img, cw-250*us, ch-500*us, 200*us, 200*us)
				img=imgs[24]
				c.drawImage(img, cw-200*us*2+20*us, ch-400*us, 200*us*2, 200*us)
				img=imgs[32]
				c.drawImage(img, cw-250*us, ch-300*us, 200*us, 200*us)
				img=imgs[36]
				c.drawImage(img, cw-250*us, ch-200*us, 200*us, 200*us)
				console.log("OPCIONES")
				window.removeEventListener("keydown",keyup)
				window.removeEventListener("click",mousedown)
				window.removeEventListener("mousemove",mousemove)
				setTimeout(() => location.reload() , 500)
		}

	}
	function mousemove(event)
	{
		console.log(event)
		if(event.clientX-canvas.offsetLeft >=cw-250*us && event.clientX-canvas.offsetLeft <=cw-250*us+200*us && event.clientY-canvas.offsetTop >= ch-500*us+63*us && event.clientY-canvas.offsetTop <= ch-500*us+63*us+200*us-ch/2/4)
		{
				posicion=0
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				middle()
				interfaz()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[26]
				c.drawImage(img, cw/2-(cw/2)/2, -100*us, cw/2, ch/2)
				img=imgs[25]
				c.drawImage(img, 100*us, 200*us, 250*us, 250*us)
				scoredraw(1, 100*us, 200*us, 250*us, 250*us)
				img=imgs[30]
				c.drawImage(img, cw-250*us, ch-500*us, 200*us, 200*us)
				img=imgs[24]
				c.drawImage(img, cw-200*us*2+20*us, ch-400*us, 200*us*2, 200*us)
				img=imgs[32]
				c.drawImage(img, cw-250*us, ch-300*us, 200*us, 200*us)
				img=imgs[35]
				c.drawImage(img, cw-250*us, ch-200*us, 200*us, 200*us)
		}
		else if(event.clientX-canvas.offsetLeft >=cw-250*us && event.clientX-canvas.offsetLeft <=cw-250*us+200*us && event.clientY-canvas.offsetTop >= ch-500*us+ch/6 && event.clientY-canvas.offsetTop <=ch-500*us+ch/6+200*us-ch/2/4)
		{
				posicion=1
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				middle()
				interfaz()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[26]
				c.drawImage(img, cw/2-(cw/2)/2, -100*us, cw/2, ch/2)
				img=imgs[25]
				c.drawImage(img, 100*us, 200*us, 250*us, 250*us)
				scoredraw(1, 100*us, 200*us, 250*us, 250*us)
				img=imgs[23]
				c.drawImage(img, cw-250*us, ch-500*us, 200*us, 200*us)
				img=imgs[31]
				c.drawImage(img, cw-200*us*2+20*us, ch-400*us, 200*us*2, 200*us)
				img=imgs[32]
				c.drawImage(img, cw-250*us, ch-300*us, 200*us, 200*us)
				img=imgs[35]
				c.drawImage(img, cw-250*us, ch-200*us, 200*us, 200*us)
				console.log("OPCIONES")
		}
		else if(event.clientX-canvas.offsetLeft >=cw-250*us && event.clientX-canvas.offsetLeft <=cw-250*us+200*us && event.clientY-canvas.offsetTop >= ch-500*us+2*ch/2/4 && event.clientY-canvas.offsetTop <=ch-500*us+2*ch/2/4+200*us-ch/2/4)
		{
				posicion=2
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				middle()
				interfaz()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[26]
				c.drawImage(img, cw/2-(cw/2)/2, -100*us, cw/2, ch/2)
				img=imgs[25]
				c.drawImage(img, 100*us, 200*us, 250*us, 250*us)
				scoredraw(1, 100*us, 200*us, 250*us, 250*us)
				img=imgs[23]
				c.drawImage(img, cw-250*us, ch-500*us, 200*us, 200*us)
				img=imgs[24]
				c.drawImage(img, cw-200*us*2+20*us, ch-400*us, 200*us*2, 200*us)
				img=imgs[34]
				c.drawImage(img, cw-250*us, ch-300*us, 200*us, 200*us)
				img=imgs[35]
				c.drawImage(img, cw-250*us, ch-200*us, 200*us, 200*us)
				console.log("OPCIONES")
		}
		else if(event.clientX-canvas.offsetLeft >=cw-250*us && event.clientX-canvas.offsetLeft <=cw-250*us+200*us && event.clientY-canvas.offsetTop >= ch-500*us+3*ch/2/4 && event.clientY-canvas.offsetTop <=ch-500*us+3*ch/2/4+200*us-ch/2/4)
		{
				posicion=3
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				middle()
				interfaz()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[26]
				c.drawImage(img, cw/2-(cw/2)/2, -100*us, cw/2, ch/2)
				img=imgs[25]
				c.drawImage(img, 100*us, 200*us, 250*us, 250*us)
				scoredraw(1, 100*us, 200*us, 250*us, 250*us)
				img=imgs[23]
				c.drawImage(img, cw-250*us, ch-500*us, 200*us, 200*us)
				img=imgs[24]
				c.drawImage(img, cw-200*us*2+20*us, ch-400*us, 200*us*2, 200*us)
				img=imgs[32]
				c.drawImage(img, cw-250*us, ch-300*us, 200*us, 200*us)
				img=imgs[37]
				c.drawImage(img, cw-250*us, ch-200*us, 200*us, 200*us)
				console.log("OPCIONES")
		}
	}
	window.addEventListener("keydown",keyup)
	window.addEventListener("click",mousedown)
	window.addEventListener("mousemove",mousemove)



	c.clearRect(0, 0, sw, sh)
	backgroundDraw()
	middle()
	interfaz()
	let img 
	img = imgs[4]
	c.drawImage(img, 0, 0, cw, ch)
	img=imgs[26]
	c.drawImage(img, cw/2-(cw/2)/2, -100*us, cw/2, ch/2)
	img=imgs[25]
	c.drawImage(img, 100*us, 200*us, 250*us, 250*us)
	scoredraw(1, 100*us, 200*us, 250*us, 250*us)
	img=imgs[30]
	c.drawImage(img, cw-250*us, ch-500*us, 200*us, 200*us)
	img=imgs[24]
	c.drawImage(img, cw-200*us*2+20*us, ch-400*us, 200*us*2, 200*us)
	img=imgs[32]
	c.drawImage(img, cw-250*us, ch-300*us, 200*us, 200*us)
	img=imgs[35]
	c.drawImage(img, cw-250*us, ch-200*us, 200*us, 200*us)
}
function cicle()
{
	let now = Date.now()
	fps = Math.round((now - be))
	console.log("-----------------------\n   "+fps+af+"\n---------------------------")

	if(afr || af == null)
	{ 
		plisteners()
	}
	if(fps >= 10 || af == null || afr)
	{
		be = now
		if(afr || af == null)
		{ 
			fps = Math.round((now - be))
		}
				afr = false
	c.clearRect(0, 0, sw, sh)
	backgroundDraw()
	middle()
	interfaz()
	}
	for(i=0; i<fps/30; i++)
	{
	enemigosDeath()
	collision()
	if(p1.kill % 11 == 0)
	{
		orda++ 
		p1.kill++
	}

	if(enemigosSet.size < orda) 
	{
		if(orda - enemigosSet.size > 5)	
		{
			let i = (Math.floor(Math.random()*2)+0)
			if(i == 0)
				enemigos()
			else 
				enemigosquinteto()
		}
		else if(orda - enemigosSet.size > 4)	
		{
			let i = (Math.floor(Math.random()*3)+0)
			if(i == 0)
				enemigos()
			else if(i == 1)
				enemigoscuarteto()
		}
		else if(orda - enemigosSet.size > 3)	
		{
			let i = (Math.floor(Math.random()*3)+0)
			if(i == 0)
				enemigos()
			else if(i == 1)
				enemigostrio()
		}
		else
		{
			let i = (Math.floor(Math.random()*100)+0)

			if(i == 0 || orda < 4)
				enemigos()
		
		}
	}
	if(p1.life < 6 && Math.floor(Math.random()*10001)+0 <= orda*10 && healsSet.size < 6-p1.life) 
	{
		heals()
		console.log("HEAL: create")
	}

	


	}
	af = window.requestAnimationFrame(cicle)
	if(p1.life <= 0 || earthLife <= 0)
	{
		death()
	}
}
var bgimgs= []
function background()
{
	for(let i=0; i<sw; i++)	
	{
		for(let j=0; j<sh; j++)	
		{


			if(Math.floor((Math.random()*2)) == 0)
			{
				bgimgs[(i+1)*j]=imgs[11]
			}
			else
			{
				bgimgs[(i+1)*j]=imgs[12]
			}

		}
	}
}
function backgroundDraw()
{
	let k=0
	let h=0
	cb.clearRect(0, 0, sw, sh)
	for(let i=0; i<sh-(200*us); i+=200*us)	
	{
		for(let j=0; j<sw-(200*us); j+=200*us)	
		{

				cb.drawImage(bgimgs[((k+1)*h)], j, i, 205*us, 205*us)
			k++
			h++

		}
	}
}
function start()
{
	var posicion=0
	function keyup (key) 
	{
		if(key.key == ' ' || key.key == 'u' || key.key == 'e')
		{
			let audio=document.createElement("audio")
			audio.src=audios[0].src
			audio.volume=audios[0].volume
			audio.play()
			if(posicion == 0)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[22]
				c.drawImage(img, 0-100*us, 0-50*us, cw+200*us, cw/(3)+200*us)
				img = imgs[28]
				c.drawImage(img, cw/(3), ch/(3), cw/(3), ch/(3))
				img=imgs[24]
				c.drawImage(img, cw/(6), ch/(3)+(ch/3)/2, cw/(3)*2, ch/(3))
				img=imgs[49]
				c.drawImage(img, cw/2-(cw/(3)*2)/2-30*us, ch-ch/(3), cw/(3)*2, ch/(3))
				juego=true
				window.removeEventListener("keydown",keyup)
				window.removeEventListener("click",mousedown)
				window.removeEventListener("mousemove",mousemove)
				console.log("start")
				setTimeout(() => cicle(), 500)
			}
			else if(posicion == 1)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[22]
				c.drawImage(img, 0-100*us, 0-50*us, cw+200*us, cw/(3)+200*us)
				img = imgs[23]
				c.drawImage(img, cw/(3), ch/(3), cw/(3), ch/(3))
				img=imgs[29]
				c.drawImage(img, cw/(6), ch/(3)+(ch/3)/2, cw/(3)*2, ch/(3))
				img=imgs[49]
				c.drawImage(img, cw/2-(cw/(3)*2)/2-30*us, ch-ch/(3), cw/(3)*2, ch/(3))
				console.log("OPCIONES")
				window.removeEventListener("keydown",keyup)
				window.removeEventListener("click",mousedown)
				window.removeEventListener("mousemove",mousemove)
				option=true
				setTimeout(() => options(0, "start"), 500)
			}
			else if(posicion == 2)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[22]
				c.drawImage(img, 0-100*us, 0-50*us, cw+200*us, cw/(3)+200*us)
				img = imgs[23]
				c.drawImage(img, cw/(3), ch/(3), cw/(3), ch/(3))
				img=imgs[24]
				c.drawImage(img, cw/(6), ch/(3)+(ch/3)/2, cw/(3)*2, ch/(3))
				img=imgs[50]
				c.drawImage(img, cw/2-(cw/(3)*2)/2-30*us, ch-ch/(3), cw/(3)*2, ch/(3))
				console.log("OPCIONES")
				window.removeEventListener("keydown",keyup)
				window.removeEventListener("click",mousedown)
				window.removeEventListener("mousemove",mousemove)
				tutoria=true;
				setTimeout(() => tutorial(0, "start"), 500)

			}
		}
		else if((key.key == 's' || key.key == 'd'))
		{
			let audio=document.createElement("audio")
			audio.src=audios[3].src
			audio.volume=audios[3].volume/4
			audio.play()
			if(posicion < 2)
				posicion++
			else
				posicion=0
			if(posicion == 0)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[22]
				c.drawImage(img, 0-100*us, 0-50*us, cw+200*us, cw/(3)+200*us)
				img = imgs[30]
				c.drawImage(img, cw/(3), ch/(3), cw/(3), ch/(3))
				img=imgs[24]
				c.drawImage(img, cw/(6), ch/(3)+(ch/3)/2, cw/(3)*2, ch/(3))
				img=imgs[49]
				c.drawImage(img, cw/2-(cw/(3)*2)/2-30*us, ch-ch/(3), cw/(3)*2, ch/(3))
			}
			else if(posicion == 1)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[22]
				c.drawImage(img, 0-100*us, 0-50*us, cw+200*us, cw/(3)+200*us)
				img = imgs[23]
				c.drawImage(img, cw/(3), ch/(3), cw/(3), ch/(3))
				img=imgs[31]
				c.drawImage(img, cw/(6), ch/(3)+(ch/3)/2, cw/(3)*2, ch/(3))
				img=imgs[49]
				c.drawImage(img, cw/2-(cw/(3)*2)/2-30*us, ch-ch/(3), cw/(3)*2, ch/(3))
				console.log("OPCIONES")
			}
			else if(posicion == 2)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[22]
				c.drawImage(img, 0-100*us, 0-50*us, cw+200*us, cw/(3)+200*us)
				img = imgs[23]
				c.drawImage(img, cw/(3), ch/(3), cw/(3), ch/(3))
				img=imgs[24]
				c.drawImage(img, cw/(6), ch/(3)+(ch/3)/2, cw/(3)*2, ch/(3))
				img=imgs[51]
				c.drawImage(img, cw/2-(cw/(3)*2)/2-30*us, ch-ch/(3), cw/(3)*2, ch/(3))
				console.log("OPCIONES")
			}
		}
		else if((key.key == 'w' || key.key == 'a'))
		{
			let audio=document.createElement("audio")
			audio.src=audios[3].src
			audio.volume=audios[3].volume/4
			audio.play()
			if(posicion > 0)
				posicion--
			else
				posicion=2
			if(posicion == 0)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[22]
				c.drawImage(img, 0-100*us, 0-50*us, cw+200*us, cw/(3)+200*us)
				img = imgs[30]
				c.drawImage(img, cw/(3), ch/(3), cw/(3), ch/(3))
				img=imgs[24]
				c.drawImage(img, cw/(6), ch/(3)+(ch/3)/2, cw/(3)*2, ch/(3))
				img=imgs[49]
				c.drawImage(img, cw/2-(cw/(3)*2)/2-30*us, ch-ch/(3), cw/(3)*2, ch/(3))
			}
			else if(posicion == 1)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[22]
				c.drawImage(img, 0-100*us, 0-50*us, cw+200*us, cw/(3)+200*us)
				img = imgs[23]
				c.drawImage(img, cw/(3), ch/(3), cw/(3), ch/(3))
				img=imgs[31]
				c.drawImage(img, cw/(6), ch/(3)+(ch/3)/2, cw/(3)*2, ch/(3))
				img=imgs[49]
				c.drawImage(img, cw/2-(cw/(3)*2)/2-30*us, ch-ch/(3), cw/(3)*2, ch/(3))
			}
			else if(posicion == 2)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[22]
				c.drawImage(img, 0-100*us, 0-50*us, cw+200*us, cw/(3)+200*us)
				img = imgs[23]
				c.drawImage(img, cw/(3), ch/(3), cw/(3), ch/(3))
				img=imgs[24]
				c.drawImage(img, cw/(6), ch/(3)+(ch/3)/2, cw/(3)*2, ch/(3))
				img=imgs[51]
				c.drawImage(img, cw/2-(cw/(3)*2)/2-30*us, ch-ch/(3), cw/(3)*2, ch/(3))
				console.log("OPCIONES")
			}
		}
	}
	function mousemove(event)
	{
		if(event.clientX-canvas.offsetLeft >=cw/3 && event.clientX-canvas.offsetLeft <=cw/3+cw/3 && event.clientY-canvas.offsetTop >= ch/3+(ch/3)/3 && event.clientY-canvas.offsetTop <=ch/3+ch/3 -(ch/3)/3)
		{
			c.clearRect(0, 0, sw, sh)
			backgroundDraw()
			let img 
			img = imgs[4]
			c.drawImage(img, 0, 0, cw, ch)
			img=imgs[22]
			c.drawImage(img, 0-100*us, 0-50*us, cw+200*us, cw/(3)+200*us)
			img = imgs[30]
			c.drawImage(img, cw/(3), ch/(3), cw/(3), ch/(3))
			img=imgs[24]
			c.drawImage(img, cw/(6), ch/(3)+(ch/3)/2, cw/(3)*2, ch/(3))
			img=imgs[49]
			c.drawImage(img, cw/2-(cw/(3)*2)/2-30*us, ch-ch/(3), cw/(3)*2, ch/(3))
			posicion=0
		}
		else if(event.clientX-canvas.offsetLeft >=cw/6 && event.clientX-canvas.offsetLeft <=cw/3+cw/3*2 && event.clientY-canvas.offsetTop >=(ch/3)+(ch/3)/2+(ch/3)/3 && event.clientY-canvas.offsetTop <=ch/3+(ch/3)/2+(ch/3)-(ch/3)/3)
		{
			c.clearRect(0, 0, sw, sh)
			backgroundDraw()
			let img 
			img = imgs[4]
			c.drawImage(img, 0, 0, cw, ch)
			img=imgs[22]
			c.drawImage(img, 0-100*us, 0-50*us, cw+200*us, cw/(3)+200*us)
			img = imgs[23]
			c.drawImage(img, cw/(3), ch/(3), cw/(3), ch/(3))
			img=imgs[31]
			c.drawImage(img, cw/(6), ch/(3)+(ch/3)/2, cw/(3)*2, ch/(3))
			img=imgs[49]
			c.drawImage(img, cw/2-(cw/(3)*2)/2-30*us, ch-ch/(3), cw/(3)*2, ch/(3))
			posicion=1
		}
		else if(event.clientX-canvas.offsetLeft >=cw/2-(cw/(3)*2)/2-30*us && event.clientX-canvas.offsetLeft <=cw/2-(cw/(3)*2)/2-30*us+cw/(3)*2 && event.clientY-canvas.offsetTop >=ch-ch/(3)+(ch/3)/3 && event.clientY-canvas.offsetTop <=ch-ch/(3)+(ch/3)-(ch/3)/3)
		{
			c.clearRect(0, 0, sw, sh)
			backgroundDraw()
			let img 
			img = imgs[4]
			c.drawImage(img, 0, 0, cw, ch)
			img=imgs[22]
			c.drawImage(img, 0-100*us, 0-50*us, cw+200*us, cw/(3)+200*us)
			img = imgs[23]
			c.drawImage(img, cw/(3), ch/(3), cw/(3), ch/(3))
			img=imgs[24]
			c.drawImage(img, cw/(6), ch/(3)+(ch/3)/2, cw/(3)*2, ch/(3))
			img=imgs[51]
			c.drawImage(img, cw/2-(cw/(3)*2)/2-30*us, ch-ch/(3), cw/(3)*2, ch/(3))
			posicion=1
		}
	}
	function mousedown (event)
	{
		console.log(event)
		if(event.clientX-canvas.offsetLeft >=cw/3 && event.clientX-canvas.offsetLeft <=cw/3+cw/3 && event.clientY-canvas.offsetTop >= ch/3+(ch/3)/3 && event.clientY-canvas.offsetTop <=ch/3+ch/3 -(ch/3)/3)
		{
			let audio=document.createElement("audio")
			audio.src=audios[0].src
			audio.volume=audios[0].volume
			audio.play()
			c.clearRect(0, 0, sw, sh)
			backgroundDraw()
			let img 
			img = imgs[4]
			c.drawImage(img, 0, 0, cw, ch)
			img=imgs[22]
			c.drawImage(img, 0-100*us, 0-50*us, cw+200*us, cw/(3)+200*us)
			img = imgs[28]
			c.drawImage(img, cw/(3), ch/(3), cw/(3), ch/(3))
			img=imgs[24]
			c.drawImage(img, cw/(6), ch/(3)+(ch/3)/2, cw/(3)*2, ch/(3))
			img=imgs[49]
			c.drawImage(img, cw/2-(cw/(3)*2)/2-30*us, ch-ch/(3), cw/(3)*2, ch/(3))
			juego=true
			window.removeEventListener("keydown",keyup)
			window.removeEventListener("click",mousedown)
			window.removeEventListener("mousemove",mousemove)
			console.log("start")
			setTimeout(() => cicle(), 500)
		}
		else if(event.clientX-canvas.offsetLeft >=cw/6 && event.clientX-canvas.offsetLeft <=cw/3+cw/3*2 && event.clientY-canvas.offsetTop >=(ch/3)+(ch/3)/2+(ch/3)/3 && event.clientY-canvas.offsetTop <=ch/3+(ch/3)/2+(ch/3)-(ch/3)/3)
		{
			let audio=document.createElement("audio")
			audio.src=audios[0].src
			audio.volume=audios[0].volume
			audio.play()
			c.clearRect(0, 0, sw, sh)
			backgroundDraw()
			let img 
			img = imgs[4]
			c.drawImage(img, 0, 0, cw, ch)
			img=imgs[22]
			c.drawImage(img, 0-100*us, 0-50*us, cw+200*us, cw/(3)+200*us)
			img = imgs[23]
			c.drawImage(img, cw/(3), ch/(3), cw/(3), ch/(3))
			img=imgs[29]
			c.drawImage(img, cw/(6), ch/(3)+(ch/3)/2, cw/(3)*2, ch/(3))
			img=imgs[49]
			c.drawImage(img, cw/2-(cw/(3)*2)/2-30*us, ch-ch/(3), cw/(3)*2, ch/(3))
			console.log("OPCIONES")
			window.removeEventListener("keydown",keyup)
			window.removeEventListener("click",mousedown)
			window.removeEventListener("mousemove",mousemove)
			option=true
			setTimeout(() => options(0, "start"), 500)
		}
		else if(event.clientX-canvas.offsetLeft >=cw/2-(cw/(3)*2)/2-30*us && event.clientX-canvas.offsetLeft <=cw/2-(cw/(3)*2)/2-30*us+cw/(3)*2 && event.clientY-canvas.offsetTop >=ch-ch/(3)+(ch/3)/3 && event.clientY-canvas.offsetTop <=ch-ch/(3)+(ch/3)-(ch/3)/3)
		{
			let audio=document.createElement("audio")
			audio.src=audios[0].src
			audio.volume=audios[0].volume
			audio.play()
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img=imgs[22]
				c.drawImage(img, 0-100*us, 0-50*us, cw+200*us, cw/(3)+200*us)
				img = imgs[23]
				c.drawImage(img, cw/(3), ch/(3), cw/(3), ch/(3))
				img=imgs[24]
				c.drawImage(img, cw/(6), ch/(3)+(ch/3)/2, cw/(3)*2, ch/(3))
				img=imgs[50]
				c.drawImage(img, cw/2-(cw/(3)*2)/2-30*us, ch-ch/(3), cw/(3)*2, ch/(3))
				console.log("OPCIONES")
				window.removeEventListener("keydown",keyup)
				window.removeEventListener("click",mousedown)
				window.removeEventListener("mousemove",mousemove)
				tutoria=true;
				setTimeout(() => tutorial(0, "start"), 500)
		}

	}
	window.addEventListener("keydown",keyup)
	window.addEventListener("click",mousedown)
	window.addEventListener("mousemove",mousemove)
	c.clearRect(0, 0, sw, sh)
	backgroundDraw()
	let img 
	img = imgs[4]
	c.drawImage(img, 0, 0, cw, ch)
	img=imgs[22]
	c.drawImage(img, 0-100*us, 0-50*us, cw+200*us, cw/(3)+200*us)
	img=imgs[30]
	c.drawImage(img, cw/(3), ch/(3), cw/(3), ch/(3))
	img=imgs[24]
	c.drawImage(img, cw/(6), ch/(3)+(ch/3)/2, cw/(3)*2, ch/(3))
	img=imgs[49]
	c.drawImage(img, cw/2-(cw/(3)*2)/2-30*us, ch-ch/(3), cw/(3)*2, ch/(3))
}
function soundmin()
{
	let tmp = new Array

		audios.forEach(
			(value) =>
			{ 
				if(value.id != "hit")
				{
						value.volume-=0.1
						value.volume=Math.round(value.volume*10)/10
				}
				else
				{
						value.volume-=0.05
						console.log("VOLUME 0 ====> "+ audios[0].volume)
						value.volume=Math.round(value.volume*100)/100
						console.log("VOLUME 0 ====> "+ audios[0].volume)
				}
				tmp.push(value.volume);

				audios[3].play()
			})
		Console.log(tmp);
		localStorage.setItem("sound", tmp);
}
function soundplus()
{
		audios.forEach(
			(value) =>
			{ 
				if(value.id != "hit")
				{
						value.volume+=0.1
						value.volume=Math.round(value.volume*10)/10
				}
				else
					{
						value.volume+=0.1/2
						value.volume=Math.round(value.volume*100)/100
			}
				audios[3].play()
			})
	localStorage.setItem("sound",audios.toString());
}
function tutorial(n, from)
{
	var posicion=n
	posicion=2
	var procedencia=from
	function keyup (key) 
	{
		if(key.key == ' ' || key.key == 'u' || key.key == 'e')
		{
			let audio=document.createElement("audio")
			audio.src=audios[0].src
			audio.volume=audios[0].volume
			audio.play()
			if(posicion == 2)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img = imgs[59]
				c.drawImage(img, 50*us, 100*us, cw/2-60*us, ch/2-60*us)
				img = imgs[60]
				c.drawImage(img, cw-50*us-(cw/2-60*us), 100*us, cw/2-60*us, ch/2-60*us)
				img=imgs[36]
				c.drawImage(img, cw/(3), ch-ch/(3), cw/(3), ch/(3))
				console.log("OPCIONES")
				window.removeEventListener("keydown",keyup)
				window.removeEventListener("click",mousedown)
				window.removeEventListener("mousemove",mousemove)
				tutoria=false
				if(from == "pause")
					setTimeout(() => pausing(), 500)
				else
					setTimeout(() => start(), 500)
			}
		}
	}
	function mousemove(event)
	{
		if(event.clientX-canvas.offsetLeft >=cw/2-(cw/(3)*2)/2-30*us && event.clientX-canvas.offsetLeft <=cw/2-(cw/(3)*2)/2-30*us+cw/(3)*2 && event.clientY-canvas.offsetTop >=ch-ch/(3)+(ch/3)/3 && event.clientY-canvas.offsetTop <=ch-ch/(3)+(ch/3)-(ch/3)/3)
		{
			c.clearRect(0, 0, sw, sh)
			backgroundDraw()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img = imgs[59]
				c.drawImage(img, 50*us, 100*us, cw/2-60*us, ch/2-60*us)
				img = imgs[60]
				c.drawImage(img, cw-50*us-(cw/2-60*us), 100*us, cw/2-60*us, ch/2-60*us)
			img=imgs[37]
			c.drawImage(img, cw/(3), ch-ch/(3), cw/(3), ch/(3))
			posicion=2
		}
	}
	function mousedown (event)
	{
		console.log(event)
		if(event.clientX-canvas.offsetLeft >=cw/2-(cw/(3)*2)/2-30*us && event.clientX-canvas.offsetLeft <=cw/2-(cw/(3)*2)/2-30*us+cw/(3)*2 && event.clientY-canvas.offsetTop >=ch-ch/(3)+(ch/3)/3 && event.clientY-canvas.offsetTop <=ch-ch/(3)+(ch/3)-(ch/3)/3)
		{
			let audio=document.createElement("audio")
			audio.src=audios[0].src
			audio.volume=audios[0].volume
			audio.play()
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img = imgs[59]
				c.drawImage(img, 50*us, 100*us, cw/2-60*us, ch/2-60*us)
				img = imgs[60]
				c.drawImage(img, cw-50*us-(cw/2-60*us), 100*us, cw/2-60*us, ch/2-60*us)
			img=imgs[36]
			c.drawImage(img, cw/(3), ch-ch/(3), cw/(3), ch/(3))
				console.log("OPCIONES")
				window.removeEventListener("keydown",keyup)
				window.removeEventListener("click",mousedown)
				window.removeEventListener("mousemove",mousemove)
				tutoria=false
				if(from == "pause")
					setTimeout(() => pausing(), 500)
				else
					setTimeout(() => start(), 500)
		}

	}
	window.addEventListener("keydown",keyup)
	window.addEventListener("click",mousedown)
	window.addEventListener("mousemove",mousemove)
	c.clearRect(0, 0, sw, sh)
	backgroundDraw()
			if(posicion == 2)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img = imgs[59]
				c.drawImage(img, 50*us, 100*us, cw/2-60*us, ch/2-60*us)
				img = imgs[60]
				c.drawImage(img, cw-50*us-(cw/2-60*us), 100*us, cw/2-60*us, ch/2-60*us)
				img=imgs[37]
				c.drawImage(img, cw/(3), ch-ch/(3), cw/(3), ch/(3))
			}
}
function options(n, from)
{
	var posicion=n
	var procedencia=from
	function keyup (key) 
	{
		if(key.key == ' ' || key.key == 'u' || key.key == 'e')
		{
			let audio=document.createElement("audio")
			audio.src=audios[0].src
			audio.volume=audios[0].volume
			audio.play()
			if(posicion == 0)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img = imgs[58]
				c.drawImage(img, 50*us, ch/3-250*us, 300*us, 300*us)
				soundraw(1,300*us-250*us, ch/(3)-200*us, 500*us, 500*us)
				img = imgs[53]
				c.drawImage(img, 100*us, ch/(3), 100*us, 100*us)
				img=imgs[55]
				c.drawImage(img, 300*us, ch/(3), 100*us, 100*us)
				img=imgs[35]
				c.drawImage(img, cw/(3), ch-ch/(3), cw/(3), ch/(3))
				juego=true
				window.removeEventListener("keydown",keyup)
				window.removeEventListener("click",mousedown)
				window.removeEventListener("mousemove",mousemove)
				console.log("start")
				if(audios[1].volume < 1)
					setTimeout(() => {soundplus(); options(posicion,procedencia)}, 500)
				else
					setTimeout(() =>  options(posicion,procedencia), 500)
			}
			else if(posicion == 1)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img = imgs[58]
				c.drawImage(img, 50*us, ch/3-250*us, 300*us, 300*us)
				soundraw(1,300*us-250*us, ch/(3)-200*us, 500*us, 500*us)
				img = imgs[52]
				c.drawImage(img, 100*us, ch/(3), 100*us, 100*us)
				img=imgs[56]
				c.drawImage(img, 300*us, ch/(3), 100*us, 100*us)
				img=imgs[35]
				c.drawImage(img, cw/(3), ch-ch/(3), cw/(3), ch/(3))
				juego=true
				window.removeEventListener("keydown",keyup)
				window.removeEventListener("click",mousedown)
				window.removeEventListener("mousemove",mousemove)
				console.log("start")
				if(audios[1].volume > 0 )
					setTimeout(() => {soundmin(); options(posicion,procedencia)}, 500)
				else
					setTimeout(() =>  options(posicion,procedencia), 500)
			}
			else if(posicion == 2)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img = imgs[58]
				c.drawImage(img, 50*us, ch/3-250*us, 300*us, 300*us)
				soundraw(1,300*us-250*us, ch/(3)-200*us, 500*us, 500*us)
				img = imgs[52]
				c.drawImage(img, 100*us, ch/(3), 100*us, 100*us)
				img=imgs[55]
				c.drawImage(img, 300*us, ch/(3), 100*us, 100*us)
				img=imgs[36]
				c.drawImage(img, cw/(3), ch-ch/(3), cw/(3), ch/(3))
				console.log("OPCIONES")
				window.removeEventListener("keydown",keyup)
				window.removeEventListener("click",mousedown)
				window.removeEventListener("mousemove",mousemove)
				option=false
				if(from == "pause")
					setTimeout(() => pausing(), 500)
				else
					setTimeout(() => start(), 500)
			}
		}
		else if((key.key == 's' || key.key == 'd'))
		{
			let audio=document.createElement("audio")
			audio.src=audios[3].src
			audio.volume=audios[3].volume/4
			audio.play()
			if(posicion < 2)
				posicion++
			else
				posicion=0
			if(posicion == 0)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img = imgs[58]
				c.drawImage(img, 50*us, ch/3-250*us, 300*us, 300*us)
				soundraw(1,300*us-250*us, ch/(3)-200*us, 500*us, 500*us)
				img = imgs[54]
				c.drawImage(img, 100*us, ch/(3), 100*us, 100*us)
				img=imgs[55]
				c.drawImage(img, 300*us, ch/(3), 100*us, 100*us)
				img=imgs[35]
				c.drawImage(img, cw/(3), ch-ch/(3), cw/(3), ch/(3))
			}
			else if(posicion == 1)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img = imgs[58]
				c.drawImage(img, 50*us, ch/3-250*us, 300*us, 300*us)
				soundraw(1,300*us-250*us, ch/(3)-200*us, 500*us, 500*us)
				img = imgs[52]
				c.drawImage(img, 100*us, ch/(3), 100*us, 100*us)
				img=imgs[57]
				c.drawImage(img, 300*us, ch/(3), 100*us, 100*us)
				img=imgs[35]
				c.drawImage(img, cw/(3), ch-ch/(3), cw/(3), ch/(3))
				console.log("OPCIONES")
			}
			else if(posicion == 2)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img = imgs[58]
				c.drawImage(img, 50*us, ch/3-250*us, 300*us, 300*us)
				soundraw(1,300*us-250*us, ch/(3)-200*us, 500*us, 500*us)
				img = imgs[52]
				c.drawImage(img, 100*us, ch/(3), 100*us, 100*us)
				img=imgs[55]
				c.drawImage(img, 300*us, ch/(3), 100*us, 100*us)
				img=imgs[37]
				c.drawImage(img, cw/(3), ch-ch/(3), cw/(3), ch/(3))
				console.log("OPCIONES")
			}
		}
		else if((key.key == 'w' || key.key == 'a'))
		{
			let audio=document.createElement("audio")
			audio.src=audios[3].src
			audio.volume=audios[3].volume/4
			audio.play()
			if(posicion > 0)
				posicion--
			else
				posicion=2
			if(posicion == 0)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img = imgs[58]
				c.drawImage(img, 50*us, ch/3-250*us, 300*us, 300*us)
				soundraw(1,300*us-250*us, ch/(3)-200*us, 500*us, 500*us)
				img = imgs[54]
				c.drawImage(img, 100*us, ch/(3), 100*us, 100*us)
				img=imgs[55]
				c.drawImage(img, 300*us, ch/(3), 100*us, 100*us)
				img=imgs[35]
				c.drawImage(img, cw/(3), ch-ch/(3), cw/(3), ch/(3))
			}
			else if(posicion == 1)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img = imgs[58]
				c.drawImage(img, 50*us, ch/3-250*us, 300*us, 300*us)
				soundraw(1,300*us-250*us, ch/(3)-200*us, 500*us, 500*us)
				img = imgs[52]
				c.drawImage(img, 100*us, ch/(3), 100*us, 100*us)
				img=imgs[57]
				c.drawImage(img, 300*us, ch/(3), 100*us, 100*us)
				img=imgs[35]
				c.drawImage(img, cw/(3), ch-ch/(3), cw/(3), ch/(3))
			}
			else if(posicion == 2)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img = imgs[58]
				c.drawImage(img, 50*us, ch/3-250*us, 300*us, 300*us)
				soundraw(1,300*us-250*us, ch/(3)-200*us, 500*us, 500*us)
				img = imgs[52]
				c.drawImage(img, 100*us, ch/(3), 100*us, 100*us)
				img=imgs[55]
				c.drawImage(img, 300*us, ch/(3), 100*us, 100*us)
				img=imgs[37]
				c.drawImage(img, cw/(3), ch-ch/(3), cw/(3), ch/(3))
				console.log("OPCIONES")
			}
		}
	}
	function mousemove(event)
	{
		if(event.clientX-canvas.offsetLeft >=100*us && event.clientX-canvas.offsetLeft <=100*us+100*us && event.clientY-canvas.offsetTop >= ch/(3) && event.clientY-canvas.offsetTop <=ch/3+100*us)
		{
			c.clearRect(0, 0, sw, sh)
			backgroundDraw()
			let img 
			img = imgs[4]
			c.drawImage(img, 0, 0, cw, ch)
			img = imgs[58]
			c.drawImage(img, 50*us, ch/3-250*us, 300*us, 300*us)
			soundraw(1,300*us-250*us, ch/(3)-200*us, 500*us, 500*us)
			img = imgs[54]
			c.drawImage(img, 100*us, ch/(3), 100*us, 100*us)
			img=imgs[55]
			c.drawImage(img, 300*us, ch/(3), 100*us, 100*us)
			img=imgs[35]
			c.drawImage(img, cw/(3), ch-ch/(3), cw/(3), ch/(3))
			posicion=0
		}
		else if(event.clientX-canvas.offsetLeft >=300*us && event.clientX-canvas.offsetLeft <=300*us+100*us && event.clientY-canvas.offsetTop >=ch/(3) && event.clientY-canvas.offsetTop <=ch/(3)+100*us)
		{
			c.clearRect(0, 0, sw, sh)
			backgroundDraw()
			let img 
			img = imgs[4]
			c.drawImage(img, 0, 0, cw, ch)
			img = imgs[58]
			c.drawImage(img, 50*us, ch/3-250*us, 300*us, 300*us)
			soundraw(1,300*us-250*us, ch/(3)-200*us, 500*us, 500*us)
			img = imgs[52]
			c.drawImage(img, 100*us, ch/(3), 100*us, 100*us)
			img=imgs[57]
			c.drawImage(img, 300*us, ch/(3), 100*us, 100*us)
			img=imgs[35]
			c.drawImage(img, cw/(3), ch-ch/(3), cw/(3), ch/(3))
			posicion=1
		}
		else if(event.clientX-canvas.offsetLeft >=cw/2-(cw/(3)*2)/2-30*us && event.clientX-canvas.offsetLeft <=cw/2-(cw/(3)*2)/2-30*us+cw/(3)*2 && event.clientY-canvas.offsetTop >=ch-ch/(3)+(ch/3)/3 && event.clientY-canvas.offsetTop <=ch-ch/(3)+(ch/3)-(ch/3)/3)
		{
			c.clearRect(0, 0, sw, sh)
			backgroundDraw()
			let img 
			img = imgs[4]
			c.drawImage(img, 0, 0, cw, ch)
			img = imgs[58]
			c.drawImage(img, 50*us, ch/3-250*us, 300*us, 300*us)
			soundraw(1,300*us-250*us, ch/(3)-200*us, 500*us, 500*us)
			img = imgs[52]
			c.drawImage(img, 100*us, ch/(3), 100*us, 100*us)
			img=imgs[55]
			c.drawImage(img, 300*us, ch/(3), 100*us, 100*us)
			img=imgs[37]
			c.drawImage(img, cw/(3), ch-ch/(3), cw/(3), ch/(3))
			posicion=1
		}
	}
	function mousedown (event)
	{
		console.log(event)
		if(event.clientX-canvas.offsetLeft >=100*us && event.clientX-canvas.offsetLeft <=100*us+100*us && event.clientY-canvas.offsetTop >= ch/(3) && event.clientY-canvas.offsetTop <=ch/3+100*us)
		{
			let audio=document.createElement("audio")
			audio.src=audios[0].src
			audio.volume=audios[0].volume
			audio.play()
			c.clearRect(0, 0, sw, sh)
			backgroundDraw()
			let img 
			img = imgs[4]
			c.drawImage(img, 0, 0, cw, ch)
			img = imgs[58]
			c.drawImage(img, 50*us, ch/3-250*us, 300*us, 300*us)
			soundraw(1,300*us-250*us, ch/(3)-200*us, 500*us, 500*us)
			img = imgs[53]
			c.drawImage(img, 100*us, ch/(3), 100*us, 100*us)
			img=imgs[55]
			c.drawImage(img, 300*us, ch/(3), 100*us, 100*us)
			img=imgs[35]
			c.drawImage(img, cw/(3), ch-ch/(3), cw/(3), ch/(3))
			juego=true
			window.removeEventListener("keydown",keyup)
			window.removeEventListener("click",mousedown)
			window.removeEventListener("mousemove",mousemove)
			console.log("start")
			if(audios[1].volume < 1)
				setTimeout(() => {soundplus(); options(posicion,procedencia)}, 500)
			else
				setTimeout(() =>  options(posicion,procedencia), 500)
		}
		else if(event.clientX-canvas.offsetLeft >=300*us && event.clientX-canvas.offsetLeft <=300*us+100*us && event.clientY-canvas.offsetTop >=ch/(3) && event.clientY-canvas.offsetTop <=ch/(3)+100*us)
		{
			let audio=document.createElement("audio")
			audio.src=audios[0].src
			audio.volume=audios[0].volume
			audio.play()
			c.clearRect(0, 0, sw, sh)
			backgroundDraw()
			let img 
			img = imgs[4]
			c.drawImage(img, 0, 0, cw, ch)
			img = imgs[58]
			c.drawImage(img, 50*us, ch/3-250*us, 300*us, 300*us)
			soundraw(1,300*us-250*us, ch/(3)-200*us, 500*us, 500*us)
			img = imgs[52]
			c.drawImage(img, 100*us, ch/(3), 100*us, 100*us)
			img=imgs[56]
			c.drawImage(img, 300*us, ch/(3), 100*us, 100*us)
			img=imgs[35]
			c.drawImage(img, cw/(3), ch-ch/(3), cw/(3), ch/(3))
			console.log("OPCIONES")
			window.removeEventListener("keydown",keyup)
			window.removeEventListener("click",mousedown)
			window.removeEventListener("mousemove",mousemove)
			if(audios[1].volume > 0)
				setTimeout(() => {soundmin(); options(posicion,procedencia)}, 500)
			else
				setTimeout(() =>  options(posicion,procedencia), 500)
		}
		else if(event.clientX-canvas.offsetLeft >=cw/2-(cw/(3)*2)/2-30*us && event.clientX-canvas.offsetLeft <=cw/2-(cw/(3)*2)/2-30*us+cw/(3)*2 && event.clientY-canvas.offsetTop >=ch-ch/(3)+(ch/3)/3 && event.clientY-canvas.offsetTop <=ch-ch/(3)+(ch/3)-(ch/3)/3)
		{
			let audio=document.createElement("audio")
			audio.src=audios[0].src
			audio.volume=audios[0].volume
			audio.play()
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
			img = imgs[58]
			c.drawImage(img, 50*us, ch/3-250*us, 300*us, 300*us)
			soundraw(1,300*us-250*us, ch/(3)-200*us, 500*us, 500*us)
				img = imgs[52]
				c.drawImage(img, 100*us, ch/(3), 100*us, 100*us)
				img=imgs[55]
				c.drawImage(img, 300*us, ch/(3), 100*us, 100*us)
			img=imgs[36]
			c.drawImage(img, cw/(3), ch-ch/(3), cw/(3), ch/(3))
				console.log("OPCIONES")
				window.removeEventListener("keydown",keyup)
				window.removeEventListener("click",mousedown)
				window.removeEventListener("mousemove",mousemove)
				option=false
				if(from == "pause")
					setTimeout(() => pausing(), 500)
				else
					setTimeout(() => start(), 500)
		}

	}
	window.addEventListener("keydown",keyup)
	window.addEventListener("click",mousedown)
	window.addEventListener("mousemove",mousemove)
	c.clearRect(0, 0, sw, sh)
	backgroundDraw()
			if(posicion == 0)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img = imgs[58]
				c.drawImage(img, 50*us, ch/3-250*us, 300*us, 300*us)
				soundraw(1,300*us-250*us, ch/(3)-200*us, 500*us, 500*us)
				img = imgs[54]
				c.drawImage(img, 100*us, ch/(3), 100*us, 100*us)
				img=imgs[55]
				c.drawImage(img, 300*us, ch/(3), 100*us, 100*us)
				img=imgs[35]
				c.drawImage(img, cw/(3), ch-ch/(3), cw/(3), ch/(3))
			}
			else if(posicion == 1)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img = imgs[58]
				c.drawImage(img, 50*us, ch/3-250*us, 300*us, 300*us)
				soundraw(1,300*us-250*us, ch/(3)-200*us, 500*us, 500*us)
				img = imgs[52]
				c.drawImage(img, 100*us, ch/(3), 100*us, 100*us)
				img=imgs[57]
				c.drawImage(img, 300*us, ch/(3), 100*us, 100*us)
				img=imgs[35]
				c.drawImage(img, cw/(3), ch-ch/(3), cw/(3), ch/(3))
			}
			else if(posicion == 2)
			{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img = imgs[58]
				c.drawImage(img, 50*us, ch/3-250*us, 300*us, 300*us)
				soundraw(1,300*us-250*us, ch/(3)-200*us, 500*us, 500*us)
				img = imgs[52]
				c.drawImage(img, 100*us, ch/(3), 100*us, 100*us)
				img=imgs[55]
				c.drawImage(img, 300*us, ch/(3), 100*us, 100*us)
				img=imgs[37]
				c.drawImage(img, cw/(3), ch-ch/(3), cw/(3), ch/(3))
				console.log("OPCIONES")
			}
}
function restart()
{
	af = null
	c.clearRect(0,0,sw,sh)
	background()
	pause=false
	earthLife=20
	orda=2
	delete(p1)
	delete(enemigosSet)
	delete(healsSet)
	delete(wavesSet)
 p1 = new player(
	{
		x:cw/2,
		y:ch-100*us,
		x2:64*us,
		y2:32*us
	},
	{
		x:(64*3-64)/2*us,
		y:((64*3-64)/2+32)*us,
		x2:64*3*us,
		y2:64*3*us,
	}
)
enemigosSet = new Set()
healsSet = new Set()
wavesSet = new Set()
cicle()
	
}
window.addEventListener("resize",
	function ()
	{
		sw=screen.width
		//var sw=600
		sh=screen.height
		//var sh=600
		cw =sw-30 // Anchura del canvas [PREDETERMINADO]
		ch =sh-60 // Altura del canvas [PREDETERMINADO]
		if(cw > ch)
			cw=ch
		else
			ch=cw
		var pus=us
		us=ch/1000
		canvas.width=cw // Anchura del canvas [PREDETERMINADO]
		canvas.height=ch // Altura del canvas [PREDETERMINADO]
		canvasb.width=cw // Anchura del canvas [PREDETERMINADO]
		canvasb.height=ch // Altura del canvas [PREDETERMINADO]
		background()
		p1.pos.x=p1.pos.x/pus*us
		p1.pos.x2=p1.pos.x2/pus*us
		p1.pos.y=p1.pos.y/pus*us
		p1.pos.y2=p1.pos.y2/pus*us
		p1.scale.x=p1.scale.x/pus*us
		p1.scale.x2=p1.scale.x2/pus*us
		p1.scale.y=p1.scale.y/pus*us
		p1.scale.y2=p1.scale.y2/pus*us
		enemigosSet.forEach(
			(value) =>
			{ 
				value.pos.x=value.pos.x/pus*us
				value.pos.x2=value.pos.x2/pus*us
				value.pos.y=value.pos.y/pus*us
				value.pos.y2=value.pos.y2/pus*us
				value.scale.x=value.scale.x/pus*us
				value.scale.x2=value.scale.x2/pus*us
				value.scale.y=value.scale.y/pus*us
				value.scale.y2=value.scale.y2/pus*us
			})

		healsSet.forEach(
			(value) =>
			{ 
				value.pos.x=value.pos.x/pus*us
				value.pos.x2=value.pos.x2/pus*us
				value.pos.y=value.pos.y/pus*us
				value.pos.y2=value.pos.y2/pus*us
				value.scale.x=value.scale.x/pus*us
				value.scale.x2=value.scale.x2/pus*us
				value.scale.y=value.scale.y/pus*us
				value.scale.y2=value.scale.y2/pus*us
			})
		if(!juego && p1.life > 0)
		{
			c.clearRect(0, 0, sw, sh)
			backgroundDraw()
			let img 
			img = imgs[4]
			c.drawImage(img, 0, 0, cw, ch)
			img=imgs[22]
			c.drawImage(img, 0-100*us, 0-50*us, cw+200*us, cw/(3)+200*us)
			img=imgs[30]
			c.drawImage(img, cw/(3), ch/(3), cw/(3), ch/(3))
			img=imgs[24]
			c.drawImage(img, cw/(6), ch/(3)+(ch/3)/2, cw/(3)*2, ch/(3))
			img=imgs[49]
			c.drawImage(img, cw/2-(cw/(3)*2)/2-30*us, ch-ch/(3), cw/(3)*2, ch/(3))
		}
		else if(option)
		{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img = imgs[58]
				c.drawImage(img, 50*us, ch/3-250*us, 300*us, 300*us)
				soundraw(1,300*us-250*us, ch/(3)-200*us, 500*us, 500*us)
				img = imgs[54]
				c.drawImage(img, 100*us, ch/(3), 100*us, 100*us)
				img=imgs[55]
				c.drawImage(img, 300*us, ch/(3), 100*us, 100*us)
				img=imgs[35]
				c.drawImage(img, cw/(3), ch-ch/(3), cw/(3), ch/(3))
		}
		if(tutoria)
		{
				c.clearRect(0, 0, sw, sh)
				backgroundDraw()
				let img 
				img = imgs[4]
				c.drawImage(img, 0, 0, cw, ch)
				img = imgs[59]
				c.drawImage(img, 50*us, 100*us, cw/2-60*us, ch/2-60*us)
				img = imgs[60]
				c.drawImage(img, cw-50*us-(cw/2-60*us), 100*us, cw/2-60*us, ch/2-60*us)
				img=imgs[37]
				c.drawImage(img, cw/(3), ch-ch/(3), cw/(3), ch/(3))
		}
		else if(pause)
		{
			c.clearRect(0, 0, sw, sh)
			backgroundDraw()
			middle()
			interfaz()
			let img 
			img = imgs[4]
			c.drawImage(img, 0, 0, cw, ch)
			img=imgs[26]
			c.drawImage(img, cw/2-(cw/2)/2, -100*us, cw/2, ch/2)
			img=imgs[25]
			c.drawImage(img, 100*us, 200*us, 250*us, 250*us)
			scoredraw(1, 100*us, 200*us, 250*us, 250*us)
			img=imgs[30]
			c.drawImage(img, cw-250*us, ch-500*us, 200*us, 200*us)
			img=imgs[24]
			c.drawImage(img, cw-200*us*2+20*us, ch-400*us, 200*us*2, 200*us)
			img=imgs[32]
			c.drawImage(img, cw-250*us, ch-300*us, 200*us, 200*us)
			img=imgs[35]
			c.drawImage(img, cw-250*us, ch-200*us, 200*us, 200*us)
		}
		else if(p1.life <= 0 || earthLife <= 0)
		{
			backgroundDraw()
			middle()
			interfaz()
			let img = imgs[4]
			c.drawImage(img, 0, 0, cw, ch)
			img=imgs[27]
			c.drawImage(img, cw/2-(cw/2)/2, 0, cw/2, ch/2)
			img=imgs[25]
			c.drawImage(img, 100*us, ch/(3), cw/(3), ch/(3))
			scoredraw(1, 100*us, ch/(3), cw/(3), ch/(3))
			img=imgs[34]
			c.drawImage(img, 100*us, ch-300*us, 300*us, 300*us)
			img=imgs[35]
			c.drawImage(img, cw-400*us, ch-300*us, 300*us, 300*us)
		}

	})

function pdellisteners()
{
	window.removeEventListener("keydown",pkeydown)
	window.removeEventListener("keyup",pkeyup)
	window.removeEventListener("click",pmousedown, true)
	window.removeEventListener("touchmove", ptouchmove)
	window.removeEventListener("touchstart",ptouchstart)
	window.removeEventListener("touchend",ptouchend)
}
function pkeydown(event)
{
	var key=event
	if(key.key == 'Escape')
		event.preventDefault()
	console.log(key)
	console.log("DOWN: "+ key.key)
	if(key.repeat)
		if (key.key == "p" || key.key == "u" || key.key == "e" || key.key == " " || key.key == "Escape")
			console.log("not: "+key.key)
	else
		p1.controles(key.key, true)
	else
		p1.controles(key.key, true)

}
function pmousedown (key)  
{
	console.log("DOWN: LClick")
	console.log(key)
	if(event.clientX-canvas.offsetLeft > cw-100*us && event.clientY-canvas.offsetTop < ch/4+30*us+100*us && event.clientX-canvas.offsetLeft < cw-100*us+100*us && event.clientY-canvas.offsetTop > ch/4+30*us)
	{
		p1.controles("p", true)
		p1.controles("p", false)
	}
	else 
	{	
		p1.controles("lClick", true)
		p1.controles("lClick", false)
	}

}
function pkeyup(key) 
{
	console.log("UP: "+ key.key)
	p1.controles(key.key, false)
}
var touchref= new Array()
function inTouchref(touch)
{
	var tmp=false
	touchref.forEach(
		(value) => 
		{
			if(touch.id == value.id)
			{
				console.log("id: true")
				tmp=true
				touch.x=value.x
				touch.y=value.y
				touch.type=value.type
			}
		})
	if(!tmp)
	{
		touchref.push(touch)
		console.log("id: flase")
	}
	return touch
}
function ptouchmove (event)
{
	event.preventDefault();
	console.log(event.touches[0].identifier)
	console.log(event.type)
	console.log(event.touches)
	
	for(let j = 0 ; j < event.touches.length; j++)
	{
	var tmp= inTouchref({id: event.touches[0].identifier, type: event.type, x: event.touches[0].pageX, y: event.touches[0].pageY})
	console.log(tmp)
	if (tmp.x == event.touches[0].pageX)
	{
		/*p1.controles("a", false)
		p1.controles("d", false)*/
	}
	if (tmp.y == event.touches[0].pageY)
	{
		/*p1.controles("w", false)
		p1.controles("s", false)*/
	}
	else
	{
		if(Math.max(tmp.y,event.touches[0].pageY)-Math.min(tmp.y,event.touches[0].pageY) >= 30*us)
		{
			if(event.touches[0].pageY < tmp.y)
			{
				p1.controles("s", false)
				p1.controles("w", true)
			}
			else if(event.touches[0].pageY > tmp.y)
			{
				p1.controles("w", false)
				p1.controles("s", true)
			}
		}
		else
		{
			if((Math.max(tmp.x,event.touches[0].pageX)-Math.min(tmp.x,event.touches[0].pageX)) >= 05*us && (Math.max(tmp.y,event.touches[0].pageY)-Math.min(tmp.y,event.touches[0].pageY) == 0*us))
			{
				console.log("undiag")
				p1.controles("s", false)
				p1.controles("w", false)
			}
		}
		if(Math.max(tmp.x,event.touches[0].pageX)-Math.min(tmp.x,event.touches[0].pageX) >= 30*us)
		{
			if(event.touches[0].pageX > tmp.x)
			{
				p1.controles("a", false)
				p1.controles("d", true)
			}
			else if(event.touches[0].pageX < tmp.x)
			{
				p1.controles("d", false)
				p1.controles("a", true)
			}
		}
		else
		{
			if((Math.max(tmp.y,event.touches[0].pageY)-Math.min(tmp.y,event.touches[0].pageY) >= 05*us) && (Math.max(tmp.x,event.touches[0].pageX)-Math.min(tmp.x,event.touches[0].pageX) == 0*us))
			{
				console.log("undiag")
				p1.controles("a", false)
				p1.controles("d", false)
			}
		}
	}
	console.log(event.touches[0].pageY+", "+tmp.y)
	console.log(event.touches[0].pageX+", "+tmp.x)
	tmp.x=event.touches[0].pageX
	tmp.y=event.touches[0].pageY
	tmp.type=event.type
	for(var i=0; i<touchref.length; i++)
	{
		if(tmp.id == touchref[i].id)
			touchref.splice(i,1,tmp)
	}
	}

}
function ptouchstart (event)  
{
	event.preventDefault();
	console.log(event)
	console.log(event.type)
	for(let i = 0 ; i < event.touches.length; i++)
	{
	var tmp= inTouchref({id: event.touches[0].identifier, type: event.type, x: event.touches[0].pageX, y: event.touches[0].pageY})




	if(event.touches[0].pageX-canvas.offsetLeft > cw-100*us && event.touches[0].pageY-canvas.offsetTop < ch/4+30*us+100*us && event.touches[0].pageX-canvas.offsetLeft < cw-100*us+100*us && event.touches[0].pageY-canvas.offsetTop > ch/4+30*us)
	{
		p1.controles("p", true)
		p1.controles("p", false)
	}
	else 
	{	
		p1.controles("lClick", true)
		p1.controles("lClick", false)
	}
	}
}
function delTouchref(touch)
{
	if(touchref.length >0)
	{
		for(var i=0; i<touchref.length; i++)
		{
			if(touch.id == touchref[i].id)
				touchref.splice(i,1)
		}
	}
}
function ptouchend (event)
{
	console.log(event)
	event.preventDefault();
	var tmp= inTouchref({id: event.changedTouches[0].identifier, type: event.type, x: event.changedTouches[0].pageX, y: event.changedTouches[0].pageY})
	console.log(tmp.type)
	if(tmp.type == "touchmove")
	{
		p1.controles("w", false)
		p1.controles("s", false)
		p1.controles("d", false)
		p1.controles("a", false)
	}
	delTouchref({id: event.changedTouches[0].identifier})

}
function plisteners()
{
	window.addEventListener("keydown",pkeydown)

	window.addEventListener("click",pmousedown, true)
	window.addEventListener("keyup",pkeyup)
	window.addEventListener("touchmove", ptouchmove)
	window.addEventListener("touchstart",ptouchstart)
	window.addEventListener("touchend",ptouchend)
}
function collision()
{
	p1.update()

	wavesSet.forEach((value) => { 
	value.fisicas()
	})
	enemigosSet.forEach((value) => { 

		value.fisicas()
		if(((linecol(p1.pos.y, p1.pos.y+p1.pos.y2, value.pos.y+value.pos.y2, value.pos.y) && linecol(p1.pos.x, p1.pos.x+p1.pos.x2, value.pos.x+value.pos.x2, value.pos.x)) ||( linecol(p1.pos.y+p1.pos.y2, p1.pos.y, value.pos.y, value.pos.y+value.pos.y2) && linecol(p1.pos.x+p1.pos.x2, p1.pos.x, value.pos.x, value.pos.x+value.pos.x2))))
		{
			if(p1.tang)
			{
				p1.hit=true
				audios[2].play()
				setTimeout(() => p1.hit=false, 2000)
				p1.tang=false
				setTimeout(() => p1.tang=true, 2000)
				value.life--
				p1.life--
				console.log("P1: HIT")
			}
		}
		else if(((linecol(value.pos.y, value.pos.y+value.pos.y2, p1.pos.y+p1.pos.y2, p1.pos.y-200*us) && linecol(value.pos.x, value.pos.x+value.pos.x2, p1.pos.x-50*us+p1.pos.x2+100*us, p1.pos.x-50*us)) ||( linecol(value.pos.y+value.pos.y2, value.pos.y, p1.pos.y-200*us, p1.pos.y+p1.pos.y2) && linecol(value.pos.x+value.pos.x2, value.pos.x, p1.pos.x-50*us, p1.pos.x-50*us+p1.pos.x2+100*us))))
		{
			if(value.tang && p1.atack)
			{
				value.hit=true
				setTimeout(() => value.hit=false, 160)
				value.tang=false
				setTimeout(() => value.tang=true, 160)
				value.life--
				p1.kill+=0.5
				console.log("value: HIT")
			}
		}

		if(value.pos.y+value.pos.y2 >= ch)
		{
			console.log("ENEMY: DELETE")
			earthLife-=value.life
			value.life=0
		}
	})
	healsSet.forEach((value) => { 
		value.fisicas()
		if(((linecol(p1.pos.y, p1.pos.y+p1.pos.y2, value.pos.y+value.pos.y2+60*us, value.pos.y-30*us) && linecol(p1.pos.x, p1.pos.x+p1.pos.x2, value.pos.x+value.pos.x2+30*us, value.pos.x-30*us)) ||( linecol(p1.pos.y+p1.pos.y2, p1.pos.y, value.pos.y-30*us, value.pos.y+value.pos.y2+60*us) && linecol(p1.pos.x+p1.pos.x2, p1.pos.x, value.pos.x-30*us, value.pos.x+value.pos.x2+30*us))))
		{
			healsSet.delete(value)
			audios[3].play()
			value.life--
			p1.life++
			p1.healing=true
			setTimeout(() => p1.healing=false, 160)
			console.log("P1: HEAL")
		}
		if(value.pos.y+value.pos.y2 >= ch)
		{
			healsSet.delete(value)
			console.log("ENEMY: DELETE")
		}
	})
}
function linecol(ja, jb, ka, kb)
{
	if(ja <= ka && jb >= kb )
		return true
	else
		return false

}

function enemigosDeath()
{
	enemigosSet.forEach((value) => { 
		if(value.life <= 0 && value.death)
		{
			let audio=document.createElement("audio")
			audio.src=audios[1].src
			audio.volume=audios[1].volume
			audio.play()
			enemigosSet.delete(value)
		}
	})
}

function scoredraw(um, x, y, x2,y2)
{
	let num = ((p1.kill-1)*10).toString()	
	let img = imgs[38]
	
	console.log("SCOREEEEEEEEEEEEE:   "+num.length)
	for(let i=0; i<num.length; i++)
	{
		switch(num[i])
		{
			case "0":
				img = imgs[38]
				break;
			case "1":
				img = imgs[39]
				break;
			case "2":
				img = imgs[40]
				break;
			case "3":
				img = imgs[41]
				break;
			case "4":
				img = imgs[42]
				break;
			case "5":
				img = imgs[43]
				break;
			case "6":
				img = imgs[44]
				break;
			case "7":
				img = imgs[45]
				break;
			case "8":
				img = imgs[46]
				break;
			case "9":
				img = imgs[47]
				break;

		}
		c.drawImage(img, x+x2+ i*x2/5*um, y+y2/3, x2/5*um, y2/3*um)

	}

	
}
function soundraw(um, x, y, x2,y2)
{
	let num = ((audios[1].volume)*100).toString()	
	let img = imgs[38]
	
	console.log("SOUNDDDDDDDDDD:   "+audios[1].volume)
	let j = 3

	if (audios[1].volume >= 1)
		j = 3
	else
		j=2
	for(let i=0; i<j; i++)
	{
		switch(num[i])
		{
			case "0":
				img = imgs[38]
				break;
			case "1":
				img = imgs[39]
				break;
			case "2":
				img = imgs[40]
				break;
			case "3":
				img = imgs[41]
				break;
			case "4":
				img = imgs[42]
				break;
			case "5":
				img = imgs[43]
				break;
			case "6":
				img = imgs[44]
				break;
			case "7":
				img = imgs[45]
				break;
			case "8":
				img = imgs[46]
				break;
			case "9":
				img = imgs[47]
				break;

		}
		c.drawImage(img, x+x2+ i*x2/5*um, y+y2/3, x2/5*um, y2/3*um)

	}

	
}


function interfaz()
{
	let img=imgs[4]
	c.drawImage(img, 0, 0, 400*us, 200*us)
	c.drawImage(img, 400*us, 0, cw-400*us, 140*us)
	for(let i=0; i<6*50; i+=50)
	{
		let img = imgs[7]
		c.drawImage(img, 0, 0, 1080, 1080, cw-(100+i)*us-(64*3-64+16)/2*us, 50*us-((64*3-64*3+4)/2+32)*us, 64*3*us, 64*3*us)
	}
	for(let i=0; i<p1.life*50; i+=50)
	{
		let img = imgs[6]
		c.drawImage(img, 0, 0, 1080, 1080, cw-(100+i)*us-(64*3-64+16)/2*us, 50*us-((64*3-64*3+4)/2+32)*us, 64*3*us, 64*3*us)
	}
	c.fillStyle='#ff4f69'
	c.fillRect(83*us, 140*us, 100*us*3*earthLife/20, 35*us)
	img = imgs[5]
	c.drawImage(img, 35*us, 120*us, 130*3*us, 130*us)

	img=imgs[25]
	c.drawImage(img, 25*us, -50*us, cw/(4), ch/(4))

	scoredraw(1, 25*us, -50*us, cw/(4), ch/(4))


	img = imgs[48]
	c.drawImage(img, cw-100*us, ch/4+30*us, 100*us, 100*us)

}
function infiniteFall()
{
	setInterval(()=>{p1.life=6; earthLife=20; p1.hit=true; if(orda <= 30) { orda+=0.1 }},1000)
}
