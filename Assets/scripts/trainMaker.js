#pragma strict
//add a reference to the apple
var train:Rigidbody;


function Start () {
	//call createApple every second
	InvokeRepeating("createtrain",5.0,5.0);
}

function createtrain()
{

	//x value is 16, y value is random and the z value
	//is the same as the helicopter's
	Instantiate(train,Vector3(16,-4.5,-1),Quaternion.identity);
}


function Update () {

}