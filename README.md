# JS-Password-Generator
Password Generated created in Javascript

## Contents of Project

This project contains an index.html file, script.js file, and style.css file. To preview the project, click the link next to the description.

## Goals for Project

The project was designed for the following user story:

AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

## The Acceptance Criteria 

The Acceptance Criteria are as follows: 

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria

WHEN prompted for password criteria
THEN I select which criteria to include in the password

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

## Satisfying the Acceptance Criteria


## Issues

The password entry does not check for undefined strings. Attempts to correct this created an infinite loop. A possible workaround would be to use a form with a number box, which would keep incoming values as numbers within a predefined range.

## Future Developments

Along with the previous idea of using a form with a number box, there are other improvements that could be made outside of the scope of the assignment

Checkboxes could be used to select what kinds of values should be included in the password generation and a text area box could be used for password display. Approrpiate form aria attributes could also be used to improve the accessibility of the page.

The index could also be modified to be more inline with any potential portfolio website. 
