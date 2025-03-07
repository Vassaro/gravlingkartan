# grävlingkartan

## Synopsis

This is an interactive map over the infrastructure of the Vässarö Scout Centre, based on the project "trappermapper" at [https://github.com/danielmartling/trappermapper/](https://github.com/danielmartling/trappermapper). It has been modified to fit the needs of patrol Grävlingen by Joakim "Jocke" Hertzberg, but it may be used for other purposes as well. It uses Leaflet.JS to run the map, with GeoJSON data.

## Table of contents
[installation](#installation)
[usage](#usage)
[pipeline](#pipeline)
[contributing](#contributing)

## Installation
To install this project locally, just install the source files. There is nothing which needs installation by package manager here.

## Usage
- Go to [https://jockehertz.github.io/gravlingkartan](https://jockehertz.github.io/gravlingkartan) 
- Run the source files locally (using http-server or something akin to it). NOTE: This program downloads distributions from unpkg.com, so it needs an internet connnection to function.

## Pipeline
There are certain features in the pipeline:
 - Water pipes with coupling points
 - Powercables
 - Fibre-optic cables

The purpose of all these features is to prevent damage being caused to infrastructure as a consequence of not knowing that they are in the danger zone while rebuilding/excavating, and knowledge of where to shut off water supply and the like.

## Contributing
You are welcome to contribute! Just contact me according to the credentials on my profile, and we can arrange something. 
