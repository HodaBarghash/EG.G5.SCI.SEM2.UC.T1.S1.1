function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6inUMo5N63m":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbzjFnTY7JO9pMwpY5sQNyHRBkNGyY8IKkT-WASMu6pfwAR-oTDRG1-Jw7QH6NAfMBj3tw/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

