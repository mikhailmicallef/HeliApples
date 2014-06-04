#pragma strict
//add a reference to the apple
var BadBittenApple:Rigidbody;


function Start () {
	//call createApple every second
	InvokeRepeating("createBadBittenApple",8.0,8.0);
}

function createBadBittenApple()
{
	var randomY:float;
	
	randomY = Random.Range(-4.9,4.9);
	//x value is 16, y value is random and the z value
	//is the same as the helicopter's
	Instantiate(BadBittenApple,Vector3(16,randomY,-1),Quaternion.identity);
}


function Update () {

}