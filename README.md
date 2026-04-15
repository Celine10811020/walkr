# walkr｜Walkr Donation Record Lookup

A browser-based lookup tool for querying archived **Walkr** daily donation records by date.

Built with **HTML, CSS, and JavaScript**, this project provides a simple interface for retrieving historical in-game donation screenshots based on selected group and date.

## Live Demo

[Open the site](https://celine10811020.github.io/walkr/)

## Overview

This project is a lightweight web archive for **Walkr daily donation records**.

Instead of browsing folders manually, users can select a target group and enter a date to quickly find the corresponding archived record image. The system maps date ranges to screenshots through JSON-based lookup files and displays the matched result directly on the page.

## Features

- Date-based record lookup
- Group / lab selection
- JSON-driven mapping between date ranges and images
- Simple browser-based interface
- GitHub Pages deployment

## How It Works

1. Select the target group
2. Enter a date in the required format
3. Click the search button
4. The site checks the corresponding JSON record file
5. If the date falls within a matching range, the related image is displayed
6. If no match is found, an error message is shown

## Current Data Organization

The repository includes:

- current and historical image folders
- JSON files that store date-range mappings
- a frontend page for search and display

Examples of files currently used in the project include:

- `hoho.json`
- `hoho3.json`
- `hoho_history.json`
- `hoho3_history.json`
- `index.html`
- `main.js`
- `style.css`

## Tech Stack

- HTML
- CSS
- JavaScript
- JSON
- GitHub Pages

## Project Structure

```text
walkr/
├── index.html
├── main.js
├── style.css
├── hoho/
├── hoho3/
├── hohoHistory/
├── hoho3History/
├── hoho.json
├── hoho3.json
├── hoho_history.json
├── hoho3_history.json
├── planets/
└── .github/workflows/
