#pragma strict
var orangeApple:Rigidbody;
var blueApple:Rigidbody;
var blueapplecounter:int;
var orangeapplecounter:int;

var apples:int;
var fuel:int;
var greenapple:Rigidbody;
//slots for the sound files
var helicopterSound:AudioClip;
var shootSound:AudioClip;

var audioSource:AudioSource;

function Start () {

DontDestroyOnLoad(this.gameObject);
//looping helicopter sound
audioSource = GetComponent(AudioSource);

audioSource.PlayClipAtPoint(helicopterSound,transform.position);
audioSource.loop=true;

apples = 0;
fuel = 150;
InvokeRepeating("reduceFuel",1.0,1.0);
	Screen.showCursor = false;
}

function OnGUI(){
GUI.Label(Rect(10,10,200,100),"Score: "+apples);
GUI.Label(Rect(10,50,200,100),"fuel: "+fuel);
}

function reduceFuel()
{
	fuel = fuel - 1;
}


function Update () {
	
	if (Input.GetMouseButtonDown(0))
{
	//shoot sound
	GetComponent(AudioSource).PlayClipAtPoint(shootSound,transform.position);
	
	if (blueapplecounter>0)
	{
	
		Instantiate(blueApple,transform.position,transform.rotation);
		blueapplecounter = blueapplecounter -1;
	}
	else if (orangeapplecounter>0)
	{
		Instantiate(orangeApple,transform.position,transform.rotation);
		orangeapplecounter = orangeapplecounter -1;
	}
	else{
		Instantiate(greenapple,transform.position,transform.rotation);
	}
}

	if (fuel == 0)
	{
		//stop the game
	
	}
	//mouse control of rocket ship
	transform.position.y = 
	Camera.main.ScreenToWorldPoint(Input.mousePosition).y;
	
	//transform.Translate(Vector3.right * Time.deltaTime * Input.GetAxis("Horizontal"));
	if (transform.position.y > 4){
		transform.position.y = 4;
	}
	if (transform.position.y < -4){
		transform.position.y = -4;
	}
	
	if (apples == 10)
	{
	apples++;
	Application.LoadLevel(2);
	}
	
	if (apples == 20)
	{
	apples++;
	Application.LoadLevel(3);
	}
	
	//{
	if (fuel <= 100)
	{
	Application.LoadLevel(4);
	}
	 
}

function OnTriggerEnter(other:Collider){
if(other.gameObject.tag=="apple"){
apples=apples+1;
Destroy(other.gameObject);
}



//}
//function OnTriggerEnter(other:Collider){
if(other.gameObject.tag=="orangeApple"){
orangeapplecounter=orangeapplecounter+1;
Destroy(other.gameObject);
}

//}
//function OnTriggerEnter(other:Collider){
if(other.gameObject.tag=="blueApple"){
blueapplecounter=blueapplecounter+1;
Destroy(other.gameObject);
}





if(other.gameObject.tag=="fuel"){
fuel=fuel+10;
Destroy(other.gameObject);
}



if(other.gameObject.tag=="bittenApple"){
fuel=fuel-20;
Destroy(other.gameObject);
}
if(other.gameObject.tag=="BadBittenApple"){
fuel=fuel-50;
Destroy(other.gameObject);
}



if (apples == 30)
	{
	apples++;
	Application.LoadLevel(5);
	}


}

