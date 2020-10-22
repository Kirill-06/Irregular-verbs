/*document.querySelector("input#elastic").oninput = function()
{
    console.log(1);
    let val = this.value.trim();
    let elasticItems = docoment.querySelectorAll('.elastic li');
    if(val != '')
    {
        elasticItems.forEach(function(elem)
        {
            if(elem.innerText.search(val) == -1)
            {
                elem.classList.add('hide');
            }
            else
            {
                elem.classList.remove('hide');
            }
        });
    }
    else
    {
        elasticItems.forEach(function(elem)
        {
             elem.classList.remove('hide');
        });
    }
}
*/
function SerchFunction ()
{
    let element = document.getElementById('elastic');
    let val = element.value;
    let tableItems = document.querySelectorAll('.table tr');
    if(val != '')
    {
        tableItems.forEach(function(elem)
        {
            if(elem.innerText.search(val) == -1)
            {
                elem.classList.add('hide');
            }
            else
            {
                elem.classList.remove('hide');
            }
        });
    }
    else
    {
        tableItems.forEach(function(elem)
        {
             elem.classList.remove('hide');
        });
    }
}