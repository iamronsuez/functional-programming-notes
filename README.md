# Overall

  * currying and composicion 
  * functors / monads 
  * functional progaming -> programming with functions
  * a function is represented by: input (domain) -> output (range)

# Whats a function

  * total -> for every input there is a corresponding output
      * inc funtion with a defined domain
  * deterministic -> always receive the same output for a given input  <- reliability 
      * (timeSince (non deterministic) / dateDifference (deterministic))
  * no observable side-effects
      * no side effects (example log)


# Function / not function examples
  * slice / splice
  * promise based function / throwable function
  * returns a new value or the same value / object mutations

  -- is this a function realiable?? --
 
# Pure function advantages ( why )

  * Reliable
  * Portable
  * Reusable
  * Testable
  * Composable
  * Properties / contract (math stuff)

# Properties

  * associative
  * commutative
  * identity
  * distributive

# Currying

  * I want to remember an argument
  * I can define a function in terms of a curried function
  * The data ends up last

  ```your function can pass through to your app ```

  * why it is useful:

    * takes every argument by itself and returns a new 
    function expecting to be called with the next 
    argument until the arguments are fullfilled 
    and the actual function 
    is called returning the final value

# Composition

  * compose functions
  * create a pipeline
  * pipe data through
  * has to be stateless
  * composition is dot chaining


# Functor
  
  A functor is an object that implements a map method
  
  * An array '[]' is a functor because it has the method '.map'
  * Promises
  * Tree

  In escense a functor is a general object that we can map

  * a thing with a map method
  * it allows to abstract logic from the outside world


# Monads

  * a thing with a map and chain method

# Monad examples

  * either monad
  * from nullable
  * try / catch
  

# Task monads

  * lazy promises
  * allows to manipulate data without running the logic
  * either <- types theory, is supposed to be this or that 





