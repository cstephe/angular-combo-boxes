angular-combo-boxes
===================

This project is an attempt to gather a collection of common combo control directives for angular

The vision is to collect/create a set of consistent combo controls and allow you to install what they need.
This will expand as the need arises for new combo controls

There are a large number of different combo controls used and many slightly different views on how they should work.
Detailed behaviors for each control will be documented here

##Common Features##
All of these controls will support to following features and conventions

**Support for html5 input operations**

**required** attribute on directives will be respected

```
    <cscb-some-combo required></cscb-some-combo>
```

##Current Controls##

**text-select-combo**

```
<cscb-text-select-combo combo-data='model' combo-list='[listOfOptions]'> </cscb-text-select-combo>
```

This is a text box with a drop down of "quick fills" to its right.
Data: User input is gathered from the text box

- **combo-data**: The model to be bound to the input
- **combo-list**: A flat array of values for the select box (ng-options not currently supported)