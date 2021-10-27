<h1 align="center">React UseHook</h1>
<div align="center">

Quickly build [React](https://reactjs.org/) forms. React UseHook is a simple and customizable form component and hook.

</div>

<div align="center">

[![npm downloads](https://img.shields.io/npm/dm/react-ez-useform.svg)](https://www.npmjs.com/package/react-ez-useform)
[![npm](https://img.shields.io/npm/dt/react-ez-useform.svg)](https://www.npmjs.com/package/react-ez-useform)
[![npm](https://img.shields.io/npm/l/react-ez-useform.svg?color=red)](https://github.com/react-ez-useform/react-ez-useform/blob/master/LICENSE)
[![version](https://img.shields.io/npm/v/react-ez-useform.svg)](https://www.npmjs.com/package/react-ez-useform)

</div>

## Features

- Simple, Easy to use
- Minimum code base
- Built-in un-styled component library
- Form Validation with Joi

## Installation

React UseHook is available as an [npm package](https://www.npmjs.com/package/react-ez-useform).

```sh
// with npm
npm install react-ez-useform

// with yarn
yarn add react-ez-useform
```

## Quickstart

```jsx
import React from "react";
import { useForm } from "react-ez-useform";

function App() {
  const onSubmitFunc = async (data) => {};
  const { inputProps, onSubmit, loading } = useForm(onSubmitFunc);

  return (
    <form onSubmit={onSubmit} className="">
        <Form.Input {...inputProps("Title", Joi.string().required()), 'Initial Title'} />
        <Form.Submit loading={loading} label="Save" />
      </form>
  );
}
```

## Styling

```css
.form-input {
  @apply px-4 py-1.5 rounded cursor-pointer w-full;
  @apply text-gray-700 bg-gray-100;
  @apply border-2  focus:border-gray-500 hover:border-gray-300;
}
.form-text-area {
  @apply px-4 py-1.5 rounded cursor-pointer w-full;
  @apply text-gray-700 bg-gray-100;
  @apply border-2  focus:border-gray-500 hover:border-gray-300;
}
.form-select {
  @apply px-4 py-1.5 rounded cursor-pointer w-full;
  @apply text-gray-700 bg-gray-100;
  @apply border-2  focus:border-gray-500 hover:border-gray-300;
}
.form-file {
  @apply overflow-hidden w-36 h-36 bg-gray-200 rounded-xl;
}
.form-img {
  @apply overflow-hidden w-full h-96 bg-gray-200 rounded-xl;
}
.form-label {
  @apply text-gray-400 m-2;
}
.form-error {
  @apply mx-4 text-sm text-red-400 italic mt-0.5;
}
.form-hint {
  @apply mx-4 text-sm text-gray-400 italic mt-0.5;
}
.form-submit {
  @apply bg-primary text-white font-semibold rounded-lg px-6 py-2.5;
  @apply transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md;
}
.form-reset {
  @apply text-sm text-primary font-light px-6 py-1;
  @apply transition duration-300 ease-in-out transform hover:scale-105 hover:underline;
}
```
