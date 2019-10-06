from urllib.request import urlopen
from bs4 import BeautifulSoup

html = urlopen('http://pythonscraping.com/pages/page1.html')
bs = BeautifulSoup(html.read(), 'html.parser')

print(bs.html.body.h1)
print(bs.body.h1)
print(bs.html.h1)
print(bs.h1)
