#pragma strict
var health:int=5;

var speed:int;
function Start () {
speed = 4;
}

//function start () {
//greenApple = 0;
//}


function Update () {
	//moves the apple to the left at speed 4

	if (Application.loadedLevel == 1)
	{
		speed = 4;
	}
	if (Application.loadedLevel == 2)
	{
		speed = 8;
	}
	if (Application.loadedLevel == 3)
	{
		speed = 12;
	}
	transform.Translate(Vector3.left * speed * Time.deltaTime);
}

function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag=="greenApple")
	{
		Destroy(other.gameObject);
		health--;
		if (health==0){
		Destroy(this.gameObject);
		}
	
	}
	if(other.gameObject.tag=="orangeAppleBullet")
	{
		Destroy(other.gameObject);
		health=health-2;
		if (health==0){
		Destroy(this.gameObject);
		}
		
	}
	if(other.gameObject.tag=="blueAppleBullet")
	{
		Destroy(other.gameObject);
		health=health-3;
		if (health==0){
		Destroy(this.gameObject);
		}
		
	}
}