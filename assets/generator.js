let uppercase = "ABCDEFGHJKLMNPQRTUVWXYZ";
let lowercase = "abcdefghijkmnopqrstuvwxyz";
let numbers = "2346789";
let symbols = "";

// generates a random password of specified length based upon selected settings
function generate() 
{
    let characters = uppercase + lowercase + numbers + symbols;
    let str = "";

    for (let i = 0; i < document.getElementById("lengthslider").value; i++) 
    {
        str += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById("output").value = str;
}

// toggles the "Advanced Settings" menu by checking the style state of the button
function settings() 
{
    let selector = document.getElementById("settings");

    if (selector.style.display === "none")
    {
        selector.style.display = "block";
    }

    else 
    {
        selector.style.display = "none"
    }
}

// toggles the inclusion of numbers in the password
function toggleNumbers(cb)
{
    numbers = "";

    if (cb.checked)
    {
        numbers = "0123456789";
    }
}

// toggles the inclusion of uppercase characters in the password
function toggleUppercase(cb)
{
    uppercase = "";

    if (cb.checked)
    {
        uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
}

// toggles the inclusion of lowercase characters in the password
function toggleLowercase(cb)
{
    lowercase = "";

    if (cb.checked)
    {
        lowercase = "abcdefghijklmnopqrstuvwxyz";
    }
}

// toggles the inclusion of symbols in the password
function toggleSymbols(cb)
{
    symbols = "";

    if (cb.checked)
    {
        symbols = "!@#$%&";
    }
}

// copies the generated output to the clipboard
function copy()
{
    let copyText = document.getElementById("output").value;
    navigator.clipboard.writeText(copyText);
}