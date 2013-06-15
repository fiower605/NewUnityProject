#pragma strict

public var speed:Number = 5.0;
var length:int = 1;
private var size:boolean = false;

function Start () {

}

function Update () {

}

function OnControllerColliderHit( hit:ControllerColliderHit )
{
	if( hit.collider.name == "Terrain" )
		return;
	
	if( hit.gameObject.tag == "enemy01" )	
		Debug.Log( hit.collider.name );
	else if( hit.gameObject.tag == "enemy02" )
		Destroy(hit.gameObject);
}

function OnTriggerEnter( other:Collider )
{
	Debug.Log( other.gameObject.name );
}
