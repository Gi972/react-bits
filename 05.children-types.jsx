//React can render children of many types. In most cases it’s either an array or a string.

//string
function render() {
  <div>
    Hello World!
  </div>
}


// array
function render() {
  (<div>
    {["Hello ", <span>World</span>, "!"]}
  </div>)
}

//Functions may be used as children. However, it requires coordination with the parent component to be useful.

// function
function render() {
  <div>
    {
      () => { return "hello world!" }()
    }
  </div>
}