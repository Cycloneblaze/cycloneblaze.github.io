
from itertools import product
from string import ascii_uppercase, digits
alphanum = list(ascii_uppercase) + list(digits)

IDs = [(a+b+c+d) for a, b, c, d in product(digits, digits, digits, digits)]
css = [(f"div.game.card.b{ID} {{ " + f"background-image: url(banners/banner_{ID}.png);" + " }\n") for ID in IDs]

with open("banners.css", 'w') as file:
  for string in css:
    file.write(string)
