import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto my-32 px-2">
      <div>
        <h1 className="text-3xl font-bold">
          1. When should you use context API?
        </h1>
        <p className="text-lg text-[#757575] mt-3">
          Context is primarily used when some data needs to be accessible by
          many components at different nesting levels. Apply it sparingly
          because it makes component reuse more difficult. If you only want to
          avoid passing some props through many levels, component composition is
          often a simpler solution than context.
        </p>
      </div>
      <div className="mt-5">
        <h1 className="text-3xl font-bold">2. What is a custom hook?</h1>
        <p className="text-lg text-[#757575] mt-3">
          A custom hook is a special JavaScript function whose name starts with
          'use' and can be used to call other hooks. Let's take a look at some
          major differences between a custom React JS hook and React JS
          components: A custom hook does not require a specific signature.
        </p>
      </div>
      <div className="mt-5">
        <h1 className="text-3xl font-bold">3. What is useRef?</h1>
        <p className="text-lg text-[#757575] mt-3">
          useRef is a hook in React that allows you to create a mutable
          reference that persists across renders. It returns a JavaScript object
          with a current property, which you can assign to any value. Unlike
          state variables created with useState, updating the value of current
          does not cause the component to re-render.
        </p>
      </div>
      <div className="mt-5">
        <h1 className="text-3xl font-bold">4. What is useMemo?</h1>
        <p className="text-lg text-[#757575] mt-3">
          useMemo is a hook in React that allows you to memoize a value and only
          recompute it when its dependencies change. It can be used to optimize
          the performance of expensive calculations or functions that are called
          frequently.useMemo takes two arguments: a function that computes the
          value to be memoized, and an array of dependencies. The function is
          only re-run if any of the dependencies have changed. If the
          dependencies have not changed, useMemo returns the previously computed
          value.
        </p>
      </div>
    </div>
  );
};

export default Blog;
