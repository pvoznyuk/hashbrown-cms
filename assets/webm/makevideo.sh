#!/bin/bash

ffmpeg -framerate 30 -f image2 -i ./frames/%04d.png -c:v libvpx-vp9 -crf 10 -b:v 0 -pix_fmt yuva420p output.webm
