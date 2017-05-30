//This code demonstrates using the DOM and html

<!DOCTYPE html>
<html>
<body>

    
    <script>
        
    function add(){
        var node = document.createElement("li");
        var listItem = document.getElementById("info").value;  //gets value from the text field of <input>
        var textNode = document.createTextNode(listItem);      //creates a textnode from the listItem
        node.appendChild(textNode);                            //appends the textnode to the <li>
        document.getElementById("list").appendChild(node);     //appends the node to the grocery list
    }
    
        
    function remove(){
        var noder = document.getElementById("list");
        noder.removeChild(noder.childNodes[0]);   //removes the TOP item of the grocery list
    }
    </script>
    
    //Grocery List
    <ul id="list">
    <li>Grapes</li>
    <li>Cheese</li>
    </ul>
    
    <p>Fill in an item and click the button</p>
    <form>
        <input type="text" id="info" value="item">
    </form>
    <button type="button" onclick="add()">Add</button>
    <button type="button" onclick="remove()">Remove</button>
    
    
    
    
    
</body>
</html>
