var currUnit;
var currLetter;
var unitTotal = 0;
var total = 0;

var clickMe = function() {
  ons.notification.alert('oh well. Please work');
};

var concatLetter = function(let, x)
{
	currLetter = x;
	document.getElementById('top-input').value = document.getElementById('top-input').value + "(" + let + " x ";
	var u = document.getElementsByClassName('unit');
	var l = document.getElementsByClassName('letter');
	for(var i=0; i <  u.length; i++)
	{
		u[i].disabled = false;
	}
	for(var i=0; i < l.length; i++)
	{
		l[i].disabled = true;
	}
	document.getElementById('equals').disabled = true;
};

var concatUnit = function(n)
{
	currUnit = n;
	unitTotal = unitTotal + currUnit;
	total = total + (currUnit * currLetter);
	document.getElementById('top-input').value = document.getElementById('top-input').value + n + ") + ";
	var u = document.getElementsByClassName('unit');
	var l = document.getElementsByClassName('letter');
	for(var i=0; i <  u.length; i++)
	{
		u[i].disabled = true;
	}
	for(var i=0; i < l.length; i++)
	{
		l[i].disabled = false;
	}
	document.getElementById('equals').disabled = false;
};

var sum = function()
{
	document.getElementById('bottom-input').value = total/unitTotal;
};

var removeAll = function()
{
  var u = document.getElementsByClassName('unit');
  var l = document.getElementsByClassName('letter');
  for(var i=0; i <  u.length; i++)
  {
    u[i].disabled = true;
  }
  for(var i=0; i < l.length; i++)
  {
    l[i].disabled = false;
  }
  currUnit = 0;
  currLetter = 0;
  unitTotal = 0;
  total = 0;
  document.getElementById('top-input').value = '';
  document.getElementById('bottom-input').value = '';
};
