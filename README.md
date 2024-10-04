# Library User Guide

Welcome to the Opsvg! This library contains a set of customizable icons you can use in your web projects. Here's how to get started and use the icons effectively.



## 1. Installation
```bash
npm install opsvg
```

## 2. Usage in React (or other frameworks)
Once you’ve installed the library, you can easily import and use the icons in your project. Here’s how you can do it in a React project:
### Step-by-Step:
#### 1. Import the Icon Component
You can import any icon from the library like this:

```js
import { IconName } from 'opsvg';
```
Replace IconName with the actual name of the icon you want to use.

#### 2. Use the Icon in Your Component
Simply include the icon component in your JSX:

```jsx
const MyComponent = () => (
  <div>
    <IconName />
  </div>
);
```
This will render the icon wherever you include it.

## 3. Customizing the Icon
Our icons are fully customizable! You can easily change the size, color, and other properties by passing props to the icon component.
### Step-by-Step:
#### 1. Change the Icon Size
To adjust the size of the icon, use the size prop (supports values like small, medium, large, or custom sizes in pixels):

```jsx
<IconName size="large" />
```
Or for custom sizes:

```jsx
<IconName size="48px" />
```
#### 2. Change the Icon Color
You can change the color of the icon by passing the color prop:

```jsx
<IconName color="#ff0000" />  // For red color
```
#### 3. Add Custom Classes
If you want to style the icon further using CSS, you can pass a className prop:

```jsx
<IconName className="my-custom-class" />
```
Then, define your custom class in your CSS file:

```css
.my-custom-class {
  color: #00ff00;
  font-size: 32px;
}
```

## 4. Example Usage
Here’s a complete example of how you might use the icons in a simple React component:

```jsx
import React from 'react';
import { IconHome, IconSearch, IconSettings } from 'opsvg';

const MyComponent = () => (
  <div>
    <h1>Welcome to My Website</h1>
    <IconHome size="40px" color="#007bff" />
    <IconSearch size="32px" color="#28a745" />
    <IconSettings size="48px" />
  </div>
);

export default MyComponent;

```
