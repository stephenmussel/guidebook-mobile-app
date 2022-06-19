# Guidebook Mobile App



<!-- Description -->
## Description

I've already published a 500+ page paper guidebook for the state of Minnesota and Wisconsin in 2017. We sold out of copies in 2020, but are doing another reprint with some updates for the fall of 2022. As much as I like the printed version and the feel of a physical book, there are possiblities with a mobile version that are very appealing.

This will document my journey in learning how to make a mobile app with `React Native`. I have experience with `React` but not `React Native`. I'm not sure where to start but here we go...

<!-- Updates -->
## Updates

_Duration: 2 Day Sprint (1.13-14.22)_

I decided to focus on the data at the start. How will the database be designed? How do I get the data in there?

I transferred some sample data from the guidebook into a spreadsheet and exported as a CSV. From there, I was able to import everything into `PostgreSQL`. I displayed the data from the following tables: Areas, Zones, and Problems using `React`. Areas are like cities, Zones are like neighborhoods, and Problems are like restaurants in a neighborhood.

_Duration: 2 Day Sprint (1.18-19.22)_

Worked on database schema. Removed `Project` column in my `Problems` table because it was redundant. Changed my `Variation` column from a BOOLEAN to an INT because problems can have multiple variations and it makes it easier to add and sort later.

After chatting with a senior dev, I'm going to start moving these pieces into `React Native`. Additionally, I'll be researching existing guidebook apps that are available in the climbing industry and other apps that provide similar features.


<!-- Checklist -->
## Checklist

- [x] Database design (beta)
    - [x] Areas table
    - [x] Zones table
    - [x] Problems table
- [x] Display problems
- [x] Display zones
- [x] Display areas
- [ ] Research other climbing guidebook apps and apps that provide similar features
- [ ] Research UX
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
