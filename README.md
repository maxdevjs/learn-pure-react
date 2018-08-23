## Table of Contents

- [What is this](#what-is-this)
- [More](#more)
- [Concepts](#concepts)
  * [state](#state)
- [Experiments](#experiments)
  * [Redux](#redux)


## What is this

Exercises for "Pure React" https://daveceddia.com/pure-react-email-course/

- [day 1](day1/src)
- [day 2](day2/src)
- [day 3](day3/src)
- [day 4](day4/src)
- [day 5](day5/src)

## How it works

Set up to work on [codesandbox.io](https://codesandbox.io).
Offline should work too. From `package.json` `scripts` section:

```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
```

## More

### Concepts

- [state](concepts/state)

### Experiments

#### Redux

- [multi-components](experiments/multi-components/src) currently broken `this.props.getCount is not a function`
- [redux](experiments/redux/src) to do