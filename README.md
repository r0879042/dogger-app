# Dogger App

Dogger App is a Vue 3 application that displays dog breeds using the Dog CEO API.

## Features

- Vue 3 with Composition API
- Vue Router with overview and detail pages
- Dog breed overview
- Breed detail page with random image
- TanStack Query for data fetching and caching
- Cached breed list
- Cached breed images during the same app session
- Loading and error states
- Smooth page transitions
- Smooth image loading
- Naive UI component library

## API

This project uses the Dog CEO API:

- `https://dog.ceo/api/breeds/list/all`
- `https://dog.ceo/api/breed/{breed}/images/random`

## Setup

```bash
npm install
npm run dev