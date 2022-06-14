# Guidebook Mobile App



<!-- Description -->
## Description

I've already published a 500+ page paper guidebook for the state of Minnesota and Wisconsin in 2017. We sold out of copies in 2020, but are doing another reprint with some updates for the fall of 2022. As much as I like the printed version and the feel of a physical book, there are possiblities with a mobile version that are very appealing.

This will document my journey in learning to make a mobile app with React Native. I have experience with React but not React Native. I'm not sure where to start but here we go...

<!-- Updates -->
## Updates

_Duration: 2 Day Sprint (1.13-14.22)_

I decided to focus on the data at the start. How will the database be designed? How do I get the data in there?

I transferred some sample data from the guidebook into a spreadsheet and exported as a CSV. From there, I was able to import everything into `PostgreSQL`. Then I was able to display the data from the following tables: Areas, Zones, and Problems using `React`. Areas are like cities, Zones are like neighborhoods, and Problems are like food items at restaurants.

<!-- TODO: I'll work on styling the components to get a better understanding of the UI/UX -->

<!-- Checklist -->
## Checklist

- [ ] Database design (beta)
    - [ ] Areas table
    - [ ] Zones table
    - [ ] Problems table
- [x] Display problems
- [x] Display zones
- [x] Display areas
- [ ] Style w/MUI
- [ ] UX for web vs mobile?
- [ ] Google API for GPS location of:
    - [ ] Areas
    - [ ] Zones
    - [ ] Boulders
- [ ] React Native

<!-- Features -->
## Features

- [ ] GPS location for: Areas, Zones, and Problems
- [ ] Filter by: Zone, Grade, Star, and Range
- [ ] Display zones
