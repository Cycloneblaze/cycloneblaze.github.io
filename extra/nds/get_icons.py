# -*- coding: utf-8 -*-
"""
Created on Sat May  8 19:19:13 2021

@author: cyclo
"""

import requests
import numpy as np
from time import sleep

nums = [i for i in range(0, 6501, 250)]
d1 = [f"{i+1:0>4}" for i in nums[0:-1]]
d2 = [f"{j:0>4}" for j in nums[1:]]
dz = [item for item in zip(d1, ["-"]*len(nums[1:]), d2)]
dirs = [d[0] + d[1] + d[2] for d in dz]
urls = [f"http://img.files-ds-scene.net/boxarts/{d}/" for d in dirs]

reqs = []
for i, u in enumerate(urls):
  rng = eval("range(" + str(int(dz[i][0])) + ", " + str(int(dz[i][2])+1) + ")")
  rng = [f"{n:0>4}.png" for n in rng]
  whole = [u + r for r in rng]
  for req in whole:
    reqs.append(req)
reqs = reqs[5974:6464] # banner for 5974 is not uploaded on ds-scene

saves = 0
for url in reqs:
  ID = url[48:52]
  sleep(1)
  print(f"Fetching banner from {url} now...")
  response = requests.get(f"{url}")
  if response.status_code != 200:
    print(f"Something went wrong (code {response.status_code})", "Aborting!!")
    break
  
  print(f"Saving banner {ID} now...")
  with open(f"banners/banner_{ID}.png", "wb") as f:
    f.write(response.content)
  
  print("...success")
  saves += 1
  
print(f"Saved {saves} files")