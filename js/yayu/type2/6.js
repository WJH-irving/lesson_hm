let objWithStringValue = {
    toString: function() {
      return "hello"
    }
  }
  
  console.log(String(objWithStringValue))
  console.log("----------\n")

  let objWithValueOf = {
    valueOf: function(){
        console.log("Calling valueOf...")
        return 2;
    },
    toString: function(){
        console.log("Calling toString...")
        return this
    }
  }

  console.log(String(objWithValueOf))
  console.log("----------\n")

  
  let objWithoutPrimitive = {
    valueOf: function(){
        console.log("Calling valueOf...")
         return this 
    },
    toString: function(){
        console.log("Calling toString...")
         return this
    }
  }

  try{
    console.log(String(objWithoutPrimitive))
  }catch(e){
    console.log(e);
  }