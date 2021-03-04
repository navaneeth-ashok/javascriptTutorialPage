var globalArray = recreateArray();
var myArray;
var myArrayOriginal;
var customArray = false;
var tempVal;

function printArrEle(){
    var index = document.getElementById("arrIndex0").value;
    console.log(index);
    var sampleArray = recreateArray();
    document.getElementById("accArr").style.display = "block";
    document.getElementById("accArr").innerHTML = sampleArray[index];
}

function popArrEle(){
    globalArray.pop()
    console.log(globalArray);
    document.getElementById("popArr").style.display = "block";
    document.getElementById("popArr").innerHTML = globalArray;
}

function shiftArrEle(){
    globalArray.shift()
    console.log(globalArray);
    document.getElementById("shiftOut").style.display = "block";
    document.getElementById("shiftOut").innerHTML = globalArray;
}

function resetArrEle(id){
    globalArray = recreateArray();
    console.log()
    document.getElementById(id).style.display = "block";
    document.getElementById(id).innerHTML = globalArray;
}

function recreateArray(){
    var sampleArray = ["batman", "superman", "spiderman", "wonderwoman", "ironman", 34, 56, "hawkeye", 1.21];
    if (customArray == true){
        sampleArray = myArrayOriginal;
        globalArray = myArrayOriginal;
    }
    console.log(sampleArray);
    return sampleArray;
}

function showOriginalArray(){
    var elements = document.getElementsByClassName("printOrigArr");
    // this is to prettify the output
    var delimiter = '"';
    if (customArray == true){
        delimiter = '';
    }
    for (i = 0; i < elements.length; i++){
        
        elements[i].innerHTML = "Existing array elements are:<span class='new-line'></span>" + '[' + delimiter +''+recreateArray().join(''+ delimiter +', '+ delimiter +'') + ''+ delimiter +']';
    }
}

function pushArrEle(){
    var value = document.getElementById("pushVal").value;
    globalArray.push(value);
    document.getElementById("pushArr").style.display = "block";
    document.getElementById("pushArr").innerHTML = globalArray;
}

function unshiftArrEle(){
    var value = document.getElementById("unshiftVal").value;
    globalArray.unshift(value);
    document.getElementById("unshiftArr").style.display = "block";
    document.getElementById("unshiftArr").innerHTML = globalArray;
}

function deleteArrEle(){
    var value = document.getElementById("deleteVal").value;
    document.getElementById("deleteArrEleBefore").style.display = "block";
    document.getElementById("deleteArrEleBefore").innerHTML = "Before: array["+ value + "] = " + globalArray[value];
    delete globalArray[value];
    document.getElementById("deleteArr").style.display = "block";
    console.log(globalArray);
    document.getElementById("deleteArr").innerHTML = globalArray;
    document.getElementById("deleteArrEleAfter").style.display = "block";
    document.getElementById("deleteArrEleAfter").innerHTML = "After: array["+ value + "] = " + globalArray[value];
    
}

function sandBox(){
    var value = document.getElementById("sandVal").value;
    var F = eval(value);
    console.log(F);
    document.getElementById("sandBoxArr").style.display = "block";
    document.getElementById("sandBoxArr").innerHTML = globalArray;
}

function changeArrEle(){
    var index = document.getElementById("arrIndex1").value;
    var value = document.getElementById("arrValue1").value;
//    console.log(index);
    var sampleArray = recreateArray();
    sampleArray[index] = value;
    document.getElementById("chngArr").style.display = "block";
    document.getElementById("chngArr").innerHTML = sampleArray;
    console.log(sampleArray)
}

function inputCustomArray(){
    var value = document.getElementById("customArrayVal").value;
    console.log(value);
    // receiving something like var arrName = [1,2,3,..,4];
    // extracting things under the [] brackets first
    var arrInputValue = value.split('[')[1].split(']')[0];
    console.log(arrInputValue);
    // received all the things under the [] in a string form
    // spliting all the elements to recreate an array from string
    var arrElements = arrInputValue.split(',');
    console.log(arrElements);
    var tempArray = [];
    // trimming whitespaces from elements of string array
    // to recreate the array user intended to add
    for (var ele of arrElements){
        console.log(ele);
        tempArray.push(ele.trim());
    }
    myArray = tempArray;
    // stored as backup in case the user clicks on reset
    myArrayOriginal = tempArray;
    customArray = true;
    console.log("Custom Array Done");
}

function toggleDefaultArray(){
    if (customArray == false){
        document.getElementById("chkbxID").checked = false;
    } else if (customArray == true){
        // check whether the slider is checked or not
        if (document.getElementById("chkbxID").checked == true){
            console.log("setting custom array to display");
            recreateArray();
            showOriginalArray();
        } else {
            // slider is moved to prebuilt array
            // replace all the current array with pre-built one
            customArray = false;
            document.getElementById("customArrayVal").value = "";
            console.log("setting prebuilt array to display");
            recreateArray();
            showOriginalArray();
            
        }
        
    }
    
}






















