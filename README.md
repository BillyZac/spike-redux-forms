# A spike on using forms with React/Redux

`redux-forms` seemed fun at first but turned into a real wet blanket after a couple of months. This spike demonstrates another way to do `<form>`s within a React/Redux project. See `containers/AddTodo` to get in on the action.

This codebase took [the standard React/Redux Todo app](http://redux.js.org/docs/introduction/Examples.html#todos) as its starting point. The original example only allowed users to enter a single property -- a title -- for a Todo. This spike adds start and end dates to the Todo. Does it make sense for a Todo to have start and end dates? Not really. But it's a good way to play around with handling multiple form fields.

The form is validated as the user works. This happens in `containers/AddTodo/formUpdater`. A few cases are handled:
- A field is validated in isolation from other fields. (E.g. the `text` field can't be left blank.)
- Two fields are compared. Validation is determined by their relation to one another. (E.g. `startDate` cannot be after `endDate`.)
- When the user makes a change that violates a validation rule, we can block the change and tell the user why. For instance, rather than allowing the user to set the `startDate` after the `endDate`, the previous `startDate` is preserved. (Alternatively, we could just as easily move the `endDate` forward whenever the user attempts to set the `startDate` after the `endDate`. The possibilities are endless!)

As a side note, `containers/AddTodo/formUpdater` follows the Redux pattern, but it does not use the Redux library itself. You don't really need to know this in order to build a form in this way, but it might be helpful for those already familiar with Redux. You can think of the form component as a tiny Redux app within the larger Redux app. The form's state is not visible to the app itself. (This differs from the approach taken by `redux-forms`.) The form only exposes what the app needs to know, leaving the global app state unmuddied by the state of the form fields, which are transitory and of no interest to components outside of the form.

This redux pattern adds some indirection, but the flow is explicit (another thing hard to get from `redux-forms`). The update and validation logic is isolated and exposed, making it easy to customize the response to validation failures.

Easy customization facilitates quick UX experiments makes for better UX in the end. (imho)

## Usage

```
npm start
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
