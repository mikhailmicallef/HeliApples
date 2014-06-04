#pragma strict
//add a reference to the apple
var blueApple:Rigidbody;


function Start () {
	//call createApple every second
	InvokeRepeating("createblueApple",10.0,10.0);
}

function createblueApple()
{
	var randomY:float;
	
	randomY = Random.Range(-4.9,4.9);
	//x value is 16, y value is random and the z value
	//is the same as the helicopter's
	Instantiate(blueApple,Vector3(16,randomY,-1),Quaternion.identity);
}


function Update () {

}