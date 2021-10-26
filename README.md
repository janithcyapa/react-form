<div align="center">

[![npm downloads](https://img.shields.io/npm/dm/react-ez-useform.svg?style=for-the-badge)](https://www.npmjs.com/package/react-ez-useform)
[![npm](https://img.shields.io/npm/dt/react-ez-useform.svg?style=for-the-badge)](https://www.npmjs.com/package/react-ez-useform)
[![npm](https://img.shields.io/npm/l/react-ez-useform?style=for-the-badge)](https://github.com/react-ez-useform/react-ez-useform/blob/master/LICENSE)

</div>

# React Easy useForm Hook v0.0.1

## Features

- Simple, Easy to use
- Minimum code base
- Built-in un-styled component library
- Form Validation with Joi

## Install

    npm install react-ez-useform

    yarn add react-ez-useform

## Links

- [Get started](https://react-ez-useform.com/get-started)

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
